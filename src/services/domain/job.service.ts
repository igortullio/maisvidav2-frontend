import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../../config/api.config";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Job} from "../../models/job";

@Injectable()
export class JobService {

  constructor(public http: HttpClient) {
  }

  findById(id: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/job/${id}`);
  }

  findAll() : Observable<Job[]> {
    return this.http.get<Job[]>(`${API_CONFIG.baseUrl}/job`);
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/job/${id}`);
  }

  insert(obj: Job) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/job/`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
