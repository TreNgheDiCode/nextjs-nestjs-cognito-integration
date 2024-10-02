export interface QueryListResponse<TData> {
  success: boolean;
  metadata: Metadata;
  data: TData[];
}

interface Metadata {
  total: number;
  page: number;
  limit: number;
}
