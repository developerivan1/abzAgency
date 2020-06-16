import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-cheerful-users',
  templateUrl: './cheerful-users.component.html',
  styleUrls: ['./cheerful-users.component.scss']
})

export class CheerfulUsersComponent {

  // Input property for displaing users
  @Input() users: User[];
  // Total users for disabling
  @Input() totalUsers;

  // Output event for showing more users
  @Output() showMoreUsersEvent = new EventEmitter();

  constructor() { }

  /**
   * Method for emiting show more users event
   */
  showMoreUsers() {
    this.showMoreUsersEvent.emit();
  }


}
