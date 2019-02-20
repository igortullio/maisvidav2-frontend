import {API_CONFIG} from "../../config/api.config";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Task} from "../../models/task";

@Injectable()
export class TaskService {

  constructor(public http: HttpClient) {
  }

  findById(id: string) {
    return this.http.get(`${API_CONFIG.baseUrl}/task/${id}`);
  }

  findAll() : Observable<Task[]> {
    return this.http.get<Task[]>(`${API_CONFIG.baseUrl}/task`);
  }

  delete(id: string) {
    return this.http.delete(`${API_CONFIG.baseUrl}/task/${id}`);
  }

  insert(obj: Task) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/task/`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }

}
