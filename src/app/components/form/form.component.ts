import { Component } from '@angular/core';
import { validMessage } from 'src/assets/swc/params/messages';
import { saveToGoogleSheets } from 'src/assets/swc/cloud/sheet/form';
import { sendMailWelcome } from 'src/assets/swc/modules/mail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  numericValue: string = '';
  email: string = '';
  name: string = '';

  onInputChange(event: any) {
    var inputValue = event.target.value;
    var numericValue = inputValue.replace(/\D/g, '');
    event.target.value = numericValue;
  }

  validateAndSubmit() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\d{9}$/;

    if (!emailRegex.test(this.email)) {
      alert(validMessage.ImputMailInvalid);
      return;
    }

    if (!phoneRegex.test(this.numericValue)) {
      alert(validMessage.ImputPhoneInvalid);
      return;
    }

    sendMailWelcome();
    saveToGoogleSheets();
  }
}
