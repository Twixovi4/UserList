import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', active: true },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', active: true },
    { id: 3, name: 'Сергей Сергеев', email: 'sergey@example.com', active: false },
    { id: 4, name: 'Анна Аннова', email: 'anna@example.com', active: true },
    { id: 5, name: 'Мария Мариева', email: 'maria@example.com', active: false },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
