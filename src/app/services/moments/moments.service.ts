import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ResultMoments {
  items: IMoments[];
}

interface ResultMoment {
  moment: IMoments;
}

export interface IMoments {
  id: string;
  title: string;
  description: string;
  status: string;
  term: string[];
  tags: string[];
}

@Injectable({
  providedIn: 'root',
})
export class MomentsService {
  constructor(private $http: HttpClient) {}

  get(): Observable<ResultMoments> {
    return this.$http.get<ResultMoments>('api/moments');
  }

  getOne(id: string): Observable<ResultMoment> {
    return this.$http.get<ResultMoment>(`api/moments/${id}`);
  }

  post(data: Partial<IMoments>): Observable<IMoments> {
    return this.$http.post<IMoments>('api/moments', data);
  }

  search(search: string): Observable<ResultMoments> {
    return this.$http.get<ResultMoments>('api/moments', {
      params: {
        search,
      },
    });
  }
}
