import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CheerfulUserService } from '../../../core/services/cheerful-user.service';
import { take } from 'rxjs/operators';
import { User } from '../../models/user';
import { MatDialog } from '@angular/material/dialog';
import { CompleteRegisterModalComponent } from '../complete-register-modal/complete-register-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // List of users
  @Input() users: User[];
  // Pagination
  @Input() pagination;

  // Form submiting event
  @Output() formSubmit = new EventEmitter();

  // Form Group property
  rForm: FormGroup;
  // Placeholder for input type file
  filePlaceholder = 'Upload your photo';
  // List of radio buttons
  positionOptions: any[];

  constructor(
    private fb: FormBuilder,
    private userService: CheerfulUserService,
    private dialog: MatDialog
      ) {

  }

  /**
   * RegisterComponent Initialization
   */
  ngOnInit(): void {
    // Generating fomrs
    this.rForm = this.fb.group({
      name : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
      email : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.email]] ,
      phone : [null, [Validators.required, this.phoneValidation]],
      position: [null, Validators.required],
      photo : [null, Validators.required]
    });

    this.userService.getPosition().pipe(take(1)).subscribe((data) => {
      this.positionOptions = data.positions;
    });
    this.userService.getToken().subscribe(data => {
      this.userService.token = data.token;
    });
  }

  /**
   * Submiting form
   * @param value Values of all form controls
   */
  public submitForm(value): void {
    const formData = new FormData();
    formData.append('email', value.email);
    formData.append('name', value.name);
    formData.append('phone', value.phone);
    formData.append('position', value.position.name);
    formData.append('photo', value.photo.files[0]);
    formData.append('position_id', value.position.id);

    this.userService.postUser(formData)
    .subscribe(() => {
      this.formSubmited();
    });

    this.rForm.reset();
    Object.values(this.rForm.controls).forEach(e => {
      e.setErrors(null);
    });
    this.dialog.open(CompleteRegisterModalComponent);
  }

  /**
   * Function for access typing only numbers
   * @param event Keypress event from phone input
   */
  public onlyNumber(event): void {
    if ((event.keyCode > 47 && event.keyCode < 58) || event.keyCode === 43) {
    } else {
      event.preventDefault();
    }
  }

  /**
   * Validation method for phone input
   * @param control Abstract control of phone input
   */
  private phoneValidation(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const regexp = /^[\+]{0,1}380([0-9]{9})$/;
      if (!regexp.test(control.value)) {
        return {
          isError: true
        };
      }
    }
    return null;
  }

  /**
   * Method for Output Event Submiting registration form
   */
  public formSubmited() {
    return this.formSubmit.emit();
  }
}
