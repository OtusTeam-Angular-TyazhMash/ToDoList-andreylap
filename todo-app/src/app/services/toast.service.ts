import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: any[] = [];
  message = { edit: false, access: false };
  constructor() {}

  show(message: string, class_name: string, duration: number = 5000) {
    this.toasts.push({ message: message, class_name: class_name });
    setTimeout(() => {
      this.remove({ message: message, class_name: class_name });
    }, duration);
  }
  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t.message !== toast.message);
  }
  getToasts() {
    return this.toasts;
  }
}
