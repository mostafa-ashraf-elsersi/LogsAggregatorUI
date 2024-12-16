import { Observable } from 'rxjs';
import { GenericApiResponse } from '../generic-api-response-interface/generic-api-response-interface';

export interface IGenericHttpClientInterface<T> {
  getAll(endpoint: string): Observable<GenericApiResponse<T[]>>;
  get(endpoint: string, id: string | number): Observable<GenericApiResponse<T>>;
  insert(endpoint: string, item: T): Observable<GenericApiResponse<T>>;
  update(
    endpoint: string,
    id: string | number,
    item: T
  ): Observable<GenericApiResponse<T>>;
  delete(
    endpoint: string,
    id: string | number
  ): Observable<GenericApiResponse<T>>;
}
