import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acquainted',
  templateUrl: './acquainted.component.html',
  styleUrls: ['./acquainted.component.scss']
})

export class AcquaintedComponent {

  // Output event for smooth scroll to registration block
  @Output() goToRegisterEvent = new EventEmitter();

  constructor() { }

  /**
   * Method for emiting event for smooth scroll to registration block
   */
  public goToRegister(): void {
    this.goToRegisterEvent.emit();
  }

}
