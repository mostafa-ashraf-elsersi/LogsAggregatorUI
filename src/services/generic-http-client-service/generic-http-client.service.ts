import { Injectable } from '@angular/core';
import { IGenericHttpClientInterface } from '../../interfaces/generic-http-client-interface/generic-http-client.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericApiResponse } from '../../interfaces/generic-api-response-interface/generic-api-response-interface';

@Injectable({
  providedIn: 'root',
})
export class GenericHttpClientService<T>
  implements IGenericHttpClientInterface<T>
{
  constructor(private readonly http: HttpClient) {}

  /**
   * Fetch all items
   * @param endpoint The API endpoint
   */
  getAll(endpoint: string): Observable<GenericApiResponse<T[]>> {
    return this.http.get<GenericApiResponse<T[]>>(endpoint);
  }

  /**
   * Fetch a single item by ID
   * @param endpoint The API endpoint
   * @param id The ID of the item to fetch
   */
  get(
    endpoint: string,
    id: string | number
  ): Observable<GenericApiResponse<T>> {
    return this.http.get<GenericApiResponse<T>>(endpoint);
  }

  /**
   * Insert a new item
   * @param endpoint The API endpoint
   * @param item The item to insert
   */
  insert(endpoint: string, item: T): Observable<GenericApiResponse<T>> {
    return this.http.post<GenericApiResponse<T>>(endpoint, item);
  }

  /**
   * Update an existing item by ID
   * @param endpoint The API endpoint
   * @param id The ID of the item to update
   * @param item The updated item
   */
  update(
    endpoint: string,
    id: string | number,
    item: T
  ): Observable<GenericApiResponse<T>> {
    return this.http.put<GenericApiResponse<T>>(endpoint, item);
  }

  /**
   * Delete an item by ID
   * @param endpoint The API endpoint
   * @param id The ID of the item to delete
   */
  delete(
    endpoint: string,
    id: string | number
  ): Observable<GenericApiResponse<T>> {
    return this.http.delete<GenericApiResponse<T>>(endpoint);
  }
}
