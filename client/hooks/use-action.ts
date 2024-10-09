import { ActionState } from "@/lib/createSafeAction";
import { useCallback, useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";

type Action<TFieldValues extends FieldValues, TOutput> = (
  data: TFieldValues
) => Promise<ActionState<TFieldValues, TOutput>>;

interface UseActionOptions<TOutput> {
  onSuccess?: (data: TOutput) => void;
  onError?: (error: string) => void;
  onCompleted?: () => void;
}

export const useAction = <TFieldValues extends FieldValues, TOutput>(
  action: Action<TFieldValues, TOutput>,
  options: UseActionOptions<TOutput> = {}
) => {
  const [fieldErrors, setFieldErrors] = useState<
    FieldErrors<TFieldValues> | undefined
  >(undefined);

  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<TOutput | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    async (input: TFieldValues) => {
      setLoading(true);

      try {
        const result = await action(input);

        if (!result) return;

        setFieldErrors(result.fieldErrors);

        if (result.error) {
          setError(result.error);
          options.onError?.(result.error);
        }

        if (result.data) {
          setData(result.data);
          options.onSuccess?.(result.data);
        }
      } finally {
        setLoading(false);
        options.onCompleted?.();
      }
    },
    [action, options]
  );

  return { fieldErrors, error, data, loading, execute };
};
