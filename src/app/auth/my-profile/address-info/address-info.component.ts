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
import { Address } from '@auth/models/address.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {
  public addressInfoForm: FormGroup;
  @Input() public address: Address;
  @Input() public addressInfoErrorMsg: string;
  @Input() public addressInfoSuccessMsg: string;
  @Output() public modifyAddressInfo = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private authConstants: AuthConstants
  ) {}

  ngOnInit() {
    this.addressInfoForm = this.formBuilder.group({
      address1: ['', [Validators.required]],
      address2: ['', []],
      landmark: ['', []],
      area: ['', []],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: [
        '',
        [
          Validators.required,
          Validators.pattern(this.authConstants.PINCODE_REGEXP)
        ]
      ]
    });
  }

  // convenience getter for easy access to form fields
  public get address1() {
    return this.addressInfoForm.get('address1');
  }

  public get address2() {
    return this.addressInfoForm.get('address2');
  }

  public get landmark() {
    return this.addressInfoForm.get('landmark');
  }

  public get area() {
    return this.addressInfoForm.get('area');
  }

  public get city() {
    return this.addressInfoForm.get('city');
  }

  public get state() {
    return this.addressInfoForm.get('state');
  }

  public get pincode() {
    return this.addressInfoForm.get('pincode');
  }

  public getAddress1ControlErrorMessage() {
    return this.address1.hasError('required') ? 'Address1 is required' : '';
  }

  public getAreaControlErrorMessage() {
    return this.area.hasError('required') ? 'Area is required' : '';
  }

  public getCityControlErrorMessage() {
    return this.area.hasError('required') ? 'City is required' : '';
  }

  public getStateControlErrorMessage() {
    return this.state.hasError('required') ? 'State is required' : '';
  }

  public getPincodeControlErrorMessage() {
    return this.pincode.hasError('required') ? 'Pincode is required' : '';
  }

  public doModifyAddressInfo() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.addressInfoForm.invalid) {
      return;
    } else {
      console.log('Modify address');
      const address: Address = new Address();
      address.address1 = this.address1.value;
      address.address2 = this.address1.value;
      address.landmark = this.landmark.value;
      address.area = this.area.value;
      address.city = this.city.value;
      address.state = this.state.value;
      address.pincode = this.pincode.value;
      this.modifyAddressInfo.emit(address);
    }
  }
}
