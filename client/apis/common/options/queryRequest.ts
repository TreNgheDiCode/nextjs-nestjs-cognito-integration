// Parameters for pagination
export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface ToastOptions {
  message: string;
}

export interface QueryRequestOptions<TData> {
  queryOptions?: Record<string, any>; // Query object
  pagination: PaginationOptions; // Pagination object
  successToast?: ToastOptions; // Success toast
  errorToast?: ToastOptions; // Error toast
  fallbackValue?: TData; // Fallback value
  sortOptions?: Record<string, any>; // Sort object
}
