import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Task {
  id: string;
  name: string;
  description?: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isShow: boolean = false;
  isShowForm: boolean = false;
  selectedItemId!: number | null;
  editItemId!: number | null;
  isLoading: boolean = true;
  tasks: any[] = [];
  constructor() {}
}
