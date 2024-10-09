import { PaginationOptions } from "../options/queryRequest";

export const getPreviousPageParamWithLimit = <TData>(
  firstPage: TData[],
  firstParam: PaginationOptions
) => {
  // If we're on the first page, there's no previous page
  if (firstParam.page === 1) {
    return null; // No more pages to fetch
  }

  // Otherwise, return the previous pagination options
  return {
    page: firstParam.page - 1,
    limit: firstParam.limit,
  };
};

export const getNextPageParamWithLimit = <TData>(
  lastPage: TData[],
  lastParam: PaginationOptions,
  rowsPerPage: number,
  totalCount: number
) => {
  // Determine the total number of items fetched so far
  const totalItems = lastPage.length;

  console.log("totalItems", totalItems);

  // Determine if there are more pages to fetch
  const totalExpected = Math.min(totalCount, rowsPerPage * lastParam.page);

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
