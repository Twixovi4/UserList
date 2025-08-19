import { Component, signal } from '@angular/core';
import { UserListComponent } from './user-list/user-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('user-list');
}
