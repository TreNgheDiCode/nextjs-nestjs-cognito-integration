import {
  getNextPageParamWithLimit,
  getPreviousPageParamWithLimit,
} from "@/apis/common/handlers";
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

export const useGetLoanApplications = (
  options?: HookOptions,
  initialData?: { rowsPerPage?: number; page?: number }
) => {
  const [page, setPage] = useState(initialData?.page || 1);
  const [rowsPerPage, setRowsPerPage] = useState(
    initialData?.rowsPerPage || 15
  );

  const [query, setQuery] = useState<
    QueryRequestOptions<Loan[]>["queryOptions"]
  >({});
  const [sort, setSort] = useState<QueryRequestOptions<Loan[]>["sortOptions"]>(
    {}
  );
  const [totalCount, setTotalCount] = useState(0);

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
      const res = await getApi.getLoanApplications(pageParam, {
        pagination: pageParam,
        queryOptions: query,
        sortOptions: sort,
        errorToast: {
          message: "Failed to fetch loan applications",
        },
      });

      setTotalCount(res.totalCount);

      return res.data;
    },
    maxPages: 5,
    getPreviousPageParam: (firstPage, _, firstParam) => {
      return getPreviousPageParamWithLimit(firstPage, firstParam);
    },
    getNextPageParam: (lastPage, _, lastParam) => {
      return getNextPageParamWithLimit(
        lastPage,
        lastParam,
        rowsPerPage,
        totalCount
      );
    },
    initialPageParam: { page, limit: rowsPerPage },
    enabled: options?.enabled || true,
    retryDelay: 5_000,
    retry: 3,
  });

  return {
    onRowsPerPageChange,
    onSearchQueryChange,
    onSortChange,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    totalCount,
    ...rest,
  };
};
