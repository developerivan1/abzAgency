import { Component, OnInit } from '@angular/core';
import { CheerfulUserService } from 'src/app/core/services/cheerful-user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {

  // List of users
  users: User[] = [];
  // Options for getting users from API
  pagination = {
    page: 1,
    count: 6
  };
  // Total users
  totalUsers: number;

  constructor(private userService: CheerfulUserService) {}

  /**
   * Initialization of Main Page
   */
  ngOnInit(): void {
    this.userService.getCheerfulUsers(this.pagination.page, this.pagination.count)
      .subscribe((data) => {
      this.users = data.users;
      this.totalUsers = data.total_users;
    });
  }

  /**
   * Method to receive an event for a smooth scroll to the registration block from a child component
   */
  public onGoToRegister(): void {}

  /**
   * Show more method for getting three more users
   */
  public showMoreUsers(): void {
    this.pagination.count += 3;
    this.userService.getCheerfulUsers(this.pagination.page, this.pagination.count)
      .subscribe(data => this.users = data.users);
  }

  /**
   * Updating Cheerful users after adding new user to server
   */
  public onSubmitForm(): void {
    this.pagination.count = 6;
    this.userService.getCheerfulUsers(this.pagination.page, this.pagination.count).subscribe(data => {
      this.users = data.users;
    });
  }
}
