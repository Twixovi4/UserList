import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  selectedUserEmail: string = '';
  filterOption: string = 'all';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.filteredUsers = this.users;
  }

  onSearch() {
    this.applyFilters();
  }

  onFilterChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      let matchesFilter = true;

      if (this.filterOption === 'active') {
        matchesFilter = user.active;
      } else if (this.filterOption === 'inactive') {
        matchesFilter = !user.active;
      }

      return matchesSearch && matchesFilter;
    });
  }

  showUserEmail(user: User) {
    this.selectedUserEmail = user.email;
  }
}
