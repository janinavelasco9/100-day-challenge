import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  notifications: string[] = [];

  add(notificationMessage: string) {
    this.notifications.push(notificationMessage);
  }

  clear() {
    this.notifications = [];
  }
}