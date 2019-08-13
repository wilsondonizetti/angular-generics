import {FormControl, Validators, FormArray, FormBuilder} from '@angular/forms'
import {Pergunta} from './pergunta.model'
import {FormArrayBase} from './form-array-base'

export class Formulario {  
  formularioID = new FormControl(null);
  descricao = new FormControl(null);
  perguntas = new FormArrayBase<Pergunta>(Pergunta);
}