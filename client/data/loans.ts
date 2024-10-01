import { ListLoansQueryParams, ListLoansResponse } from "@/types/loans";
import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export const getLoansOptions = (searchData: ListLoansQueryParams) => {
  return queryOptions({
    queryKey: ["loans"],
    queryFn: async () => {
      const res = await axios
        .post(
          `${process.env.API_URL}/getLoanApplicationsExternal`,
          searchData,
          {
            params: {
              apiKey: process.env.API_KEY,
            },
          }
        )
        .catch((error) => {
          console.log("AXIOS FETCH LOANS DATA ERROR", error);

          throw new Error("Failed to fetch loans data");
        });

      return res.data as ListLoansResponse;
    },
  });
};
