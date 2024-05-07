import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private url = 'http://localhost:8000/tasks';

  constructor(private httpClient: HttpClient) {}

  createTask(name: string, description: string) {
    return this.httpClient.post(this.url, { name, description });
  }
  updateTask(task: any) {
    return this.httpClient.put(`${this.url}/${task.id}`, task);
  }
  deleteTaskById(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  getTasks(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
