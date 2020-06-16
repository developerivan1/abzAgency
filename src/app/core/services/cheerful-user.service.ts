import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RoutesConstants } from '../../shared/constants/routes.constants';

@Injectable({
  providedIn: 'root'
})

export class CheerfulUserService {

  // Token for requesting to API
  token;

  constructor( private http: HttpClient ) {}

  /**
   * GET method for getting token
   */
  getToken(): Observable<any> {
    return this.http.get(`${RoutesConstants.apiUrl}/${RoutesConstants.path.token}`);
  }

  /**
   * GET method for getting users list from API
   * @param page Number of page
   * @param count Count of users
   */
  public getCheerfulUsers(page: number, count: number): Observable<any> {
    return this.http.get(`${RoutesConstants.apiUrl}/${RoutesConstants.path.users}?page=${page}&count=${count}`);
  }

  /**
   * GET method for getting current positions list
   */
  public getPosition(): Observable<any> {
    return this.http.get(`${RoutesConstants.apiUrl}/${RoutesConstants.path.positions}`);
  }

  /**
   * POST method for posting new user
   * @param user New user
   */
  public postUser(user: FormData): Observable<any> {
    return this.http.post(`${RoutesConstants.apiUrl}/${RoutesConstants.path.users}`, user);
  }
}
