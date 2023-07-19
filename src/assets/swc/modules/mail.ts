/*
	Componente nuevo
	StartWebPerú | @ninkovski
	Componente nuevo para envio de correos con https://smtpjs.com/
	<script src="https://smtpjs.com/v3/smtp.js"></script>
*/
import { emailParams } from '../config';
import { confirmMessage } from '../params/messages';
import { emailWelcome } from '../params/mail';

export function sendMailWelcome() {
  var email = (<HTMLInputElement>document.getElementById('demo-email')).value;

  const emailData: Email.EmailParams = {
    SecureToken: emailParams.SecureToken,
    To: email,
    From: emailParams.From,
    Subject: emailWelcome.Subject,
    Body: emailWelcome.Body,
  };

  Email.send(emailData).then(function (message) {
    if (message === 'OK') {
      alert(confirmMessage.mail);
    } else {
      alert(message);
    }
  });
}
