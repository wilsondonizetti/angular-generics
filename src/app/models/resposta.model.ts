import {FormControl, Validators, FormBuilder} from '@angular/forms'
export class Resposta {
  respostaID = new FormControl(null);
  perguntaID = new FormControl(null, [Validators.required]);
  descricao = new FormControl(null, [Validators.compose([Validators.required, Validators.maxLength(100)])]);
}