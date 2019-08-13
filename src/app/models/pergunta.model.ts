import {FormControl, Validators, FormArray, FormBuilder, FormGroup} from '@angular/forms'
import {Resposta} from './resposta.model'
import {FormArrayBase} from './form-array-base'
export class Pergunta {
  perguntaID = new FormControl(null);
  descricao = new FormControl(null, [Validators.compose([Validators.required, Validators.maxLength(100)])]);
  respostas = new FormArrayBase<Resposta>(Resposta);

}