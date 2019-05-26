import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Payment } from '@app/auth/models/payment.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.scss']
})
export class PaymentInfoComponent implements OnInit {
  public paymentInfoForm: FormGroup;
  @Input() public payment: Payment;
  @Input() public paymentInfoErrorMsg: string;
  @Input() public paymentInfoSuccessMsg: string;
  @Output() public modifyPaymentInfo = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paymentInfoForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      cardNumber: ['', [Validators.required]],
      cardType: ['', [Validators.required]],
      expiryYear: ['', [Validators.required]],
      expiryMonth: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  public get name() {
    return this.paymentInfoForm.get('name');
  }

  public get cardNumber() {
    return this.paymentInfoForm.get('cardNumber');
  }

  public get cardType() {
    return this.paymentInfoForm.get('cardType');
  }

  public get expiryYear() {
    return this.paymentInfoForm.get('expiryYear');
  }

  public get expiryMonth() {
    return this.paymentInfoForm.get('expiryMonth');
  }

  public getNameControlErrorMessage() {
    return this.name.hasError('required') ? 'Name is required' : '';
  }

  public getCardNumberControlErrorMessage() {
    return this.cardNumber.hasError('required')
      ? 'Card number is required'
      : '';
  }

  public getCardTypeControlErrorMessage() {
    return this.cardType.hasError('required') ? 'Card Type is required' : '';
  }

  public getExpiryYearControlErrorMessage() {
    return this.expiryYear.hasError('required')
      ? 'Expiry year is required'
      : '';
  }

  public getExpiryMonthControlErrorMessage() {
    return this.expiryMonth.hasError('required')
      ? 'Expiry month is required'
      : '';
  }

  public doModifyPaymentInfo() {
    // stop here, don't allow to submit the form  if form is invalid
    if (this.paymentInfoForm.invalid) {
      return;
    } else {
      console.log('Modify payment info');
      const payment: Payment = new Payment();
      // TODO :
      /*
      payment.name =  this.name.value;
      payment.cardNumber =  this.cardNumber.value;
      payment.cardType =  this.cardType.value;
      payment.expiryYear =  this.expiryYear.value;
      payment.expiryMonth =  this.expiryMonth.value;
      */
      this.modifyPaymentInfo.emit(payment);
    }
  }
}
