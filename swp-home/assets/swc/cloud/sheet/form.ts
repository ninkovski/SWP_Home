/*
    Autentificacion
    StartWebPerú | @ninkovski
    Guardar registro de formulario
*/
import { appParams } from '../../config';

export function saveToGoogleSheets() {
  const formData = new FormData();
  formData.append('Aplicacion', appParams.Name);

  const nameInput = document.getElementById('demo-name') as HTMLInputElement;
  const phoneNumberInput = document.getElementById(
    'demo-nro'
  ) as HTMLInputElement;
  const emailInput = document.getElementById('demo-email') as HTMLInputElement;
  const messageInput = document.getElementById(
    'demo-message'
  ) as HTMLInputElement;

  formData.append('Nombre', nameInput.value);
  formData.append('Telefono', phoneNumberInput.value);
  formData.append('Correo', emailInput.value);
  formData.append('Mensaje', messageInput.value);

  fetch(
    'https://script.google.com/macros/s/AKfycbxOzV3BDwkmnG7nQojNG59eULLbhHIIYIFRLEojrnGQlMxDgTdw3H45CvWNS8l6yNRfUg/exec',
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
