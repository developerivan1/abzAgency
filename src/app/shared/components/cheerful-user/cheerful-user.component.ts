import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cheerful-user',
  templateUrl: './cheerful-user.component.html',
  styleUrls: ['./cheerful-user.component.scss'],
})

export class CheerfulUserComponent implements OnInit {

  // Inputs properties for display
  @Input() userName: string;
  @Input() userPosition: string;
  @Input() userEmail: string;
  @Input() userPhone: string;
  @Input() userPhoto: string;

  // Email for display
  email: string;
  // Property for disable tooltip
  isCutEmail: boolean;

  constructor() { }

  /**
   * Initialization CheerfulUserComponent
   */
  ngOnInit(): void {
    this.isCutEmail = this.userEmail.length < 26;
    this.email = this.userEmail;
    this.cuttingEmail();
  }

  /**
   * Cutting email if it is longer than 25 characters
   */
  public cuttingEmail(): void {
    if (this.userEmail.length > 25) {
      this.email = `${this.userEmail.substr(0, 25)}...`;
    }
  }
}
