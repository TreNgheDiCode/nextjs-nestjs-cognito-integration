import { AxiosBaseApi } from "@/apis/common/lib/axios/base";
import {
  PaginationOptions,
  QueryRequestOptions,
} from "@/apis/common/options/queryRequest";
import { Loan } from "@/types/loans";

class GetApi extends AxiosBaseApi {
  // #region GET LOAN APPLICATIONS
  async getLoanApplications(
    pagination: PaginationOptions,
    options?: QueryRequestOptions<Loan[]>
  ) {
    return (
      (await this.tryGetList<Loan>("/getLoanApplicationsExternal", {
        pagination,
        fallbackValue: [],
        ...options,
      })) || []
    );
  }
  // #endregion
}

export const getApi = new GetApi();
