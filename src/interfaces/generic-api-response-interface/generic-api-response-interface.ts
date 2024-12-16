export interface GenericApiResponse<T> {
  statusCode: number;
  data: T;
}
