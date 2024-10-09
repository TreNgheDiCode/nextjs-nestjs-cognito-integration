import { FieldErrors, FieldValues } from "react-hook-form";
import { z } from "zod";

export type ActionState<TFieldValues extends FieldValues, TOutput> = {
  fieldErrors?: FieldErrors<TFieldValues>;
  error?: string | null;
  data?: TOutput;
};

export const createSafeAction = <TFieldValues extends FieldValues, TOutput>(
  schema: z.Schema<TFieldValues>,
  handler: (data: TFieldValues) => Promise<ActionState<TFieldValues, TOutput>>
) => {
  return async (
    data: TFieldValues
  ): Promise<ActionState<TFieldValues, TOutput>> => {
    const validationResult = schema.safeParse(data);

    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TFieldValues>,
      };
    }

    return handler(validationResult.data);
  };
};
