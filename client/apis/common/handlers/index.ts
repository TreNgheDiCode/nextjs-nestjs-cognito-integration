import { PaginationOptions } from "../options/queryRequest";

export const getNextPageParamWithLimit = <TData>(
  lastPage: TData[],
  lastParam: PaginationOptions,
  rowsPerPage: number
) => {
  // Determine the total number of items fetched so far
  const totalItems = lastPage.length;

  // Determine if there are more pages to fetch
  const totalExpected = lastParam.page * rowsPerPage + rowsPerPage;

  // If there are fewer items than expected, we've reached the last page
  if (totalItems < totalExpected) {
    return null; // No more pages to fetch
  }

  // Otherwise, return the next pagination options
  return {
    page: lastParam.page + 1,
    limit: rowsPerPage,
  };
};
