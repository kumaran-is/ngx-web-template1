import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthConstants } from '@auth/auth.constants';
import { User } from '@auth/models/user.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  public personalInfoForm: FormGroup;
  @Input() public user: User;
  @Input() public personalInfoErrorMsg: string;
  @Input() public personalInfoSuccessMsg: string;
  @Output() public modifyPersonalInfo = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private authConstants: AuthConstants
  ) {}

  ngOnInit() {
    this.personalInfoForm = this.formBuilder.group({
      displayName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(this.authConstants.PHONENO_REGEXP)
        ]
      ]
    });
  }

  // convenience getter for easy access to form fields
  public get displayName() {
    return this.personalInfoForm.get('displayName');
  }

  public get name() {
    return this.personalInfoForm.get('name');
  }

  public get phoneNumber() {
    return this.personalInfoForm.get('phoneNumber');
  }

  public getDisplayNameControlErrorMessage() {
    return this.displayName.hasError('required')
      ? 'Display Name is required'
      : '';
  }

  public getNameControlErrorMessage() {
    return this.name.hasError('required') ? 'Name is required' : '';
  }

  public getPhoneNumberControlErrorMessage() {
    return this.phoneNumber.hasError('required')
      ? 'Phone number is required'
      : this.phoneNumber.hasError('pattern')
      ? 'phone number should be 10 digits'
      : '';
  }

  public doModifyPersonalInfo() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.personalInfoForm.invalid) {
      return;
    } else {
      console.log('Modify button');
      const user: User = new User();
      user.displayName = this.displayName.value;
      user.name = this.name.value;
      user.phoneNumber = this.phoneNumber.value;
      this.modifyPersonalInfo.emit(user);
    }
  }
}
