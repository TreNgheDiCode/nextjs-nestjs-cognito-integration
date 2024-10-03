import { AxiosError } from "axios";
import { QueryRequestOptions } from "../../options/queryRequest";
import { QueryListResponse } from "../../responses";
import { axiosClient } from ".";
import { toast } from "sonner";

export class AxiosBaseApi {
  protected async tryGetList<TData>(
    url: string,
    options?: QueryRequestOptions<TData[]>
  ) {
    try {
      const httpClient = axiosClient;
      const query = options?.queryOptions || {};
      const page = options?.pagination?.page || 1;
      const limit = options?.pagination?.limit || 5;
      const sort = options?.sortOptions || {};

      const res = await httpClient.post<QueryListResponse<TData>>(url, {
        query,
        page,
        limit,
        sort,
      });

      if (res.data.success) {
        if (options?.successToast) {
          toast.success(options.successToast.message);
        }

        return res.data.data;
      }

      if (options?.errorToast) {
        toast.error(options.errorToast.message);
      }

      return null;
    } catch (error) {
      console.log("AxiosBaseApi -> tryGet -> error", error);

      if (error instanceof AxiosError)
        if (options?.errorToast) {
          toast.error(
            error.response?.data.message || options.errorToast.message
          );
        }

      if (options?.fallbackValue) return options.fallbackValue;

      return null;
    }
  }
}
