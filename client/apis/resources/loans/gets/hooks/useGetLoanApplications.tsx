import { getNextPageParamWithLimit } from "@/apis/common/handlers";
import { HookOptions } from "@/apis/common/options/hook";
import {
  PaginationOptions,
  QueryRequestOptions,
} from "@/apis/common/options/queryRequest";
import { getQueryKey } from "@/apis/constants/queryKey";
import { Loan } from "@/types/loans";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ChangeEvent, useCallback, useState } from "react";
import { getApi } from "..";

export const useGetLoanApplications = (options?: HookOptions) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [query, setQuery] = useState<
    QueryRequestOptions<Loan[]>["queryOptions"]
  >({});
  const [sort, setSort] = useState<QueryRequestOptions<Loan[]>["sortOptions"]>(
    {}
  );

  const onSearchQueryChange = useCallback(
    (value?: QueryRequestOptions<Loan[]>["queryOptions"]) => {
      if (value) {
        setQuery(value);
      } else {
        setQuery({});
      }
    },
    []
  );

  const onSortChange = useCallback(
    (value?: QueryRequestOptions<Loan[]>["sortOptions"]) => {
      if (value) {
        setSort(value);
      } else {
        setSort({});
      }
    },
    []
  );

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const { ...rest } = useInfiniteQuery({
    queryKey: [getQueryKey.GET_LOAN_APPLICATIONS],
    queryFn: async ({ pageParam }: { pageParam: PaginationOptions }) => {
      return await getApi.getLoanApplications(pageParam, {
        pagination: pageParam,
        queryOptions: query,
        sortOptions: sort,
      });
    },
    getNextPageParam: (lastPage, _, lastParam) => {
      return getNextPageParamWithLimit(lastPage, lastParam, rowsPerPage);
    },
    initialPageParam: { page, limit: rowsPerPage },
    enabled: options?.enabled || true,
    refetchOnWindowFocus: false,
    retryDelay: 5_000,
  });

  return {
    onRowsPerPageChange,
    onSearchQueryChange,
    onSortChange,
    ...rest,
  };
};
