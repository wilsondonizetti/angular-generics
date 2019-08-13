import { Component, Input , OnInit} from '@angular/core';
import { FormArray, FormBuilder, AbstractControl, ValidatorFn, AbstractControlOptions, AsyncValidatorFn, FormGroup, FormControl, Validators } from '@angular/forms'
import {FormArrayBase} from './models/form-array-base'
import {Base} from './models/base'
import {Formulario} from './models/formulario.model'
import {Pergunta} from './models/pergunta.model'
import {Resposta} from './models/resposta.model'
import {Mock} from './mock/dados'

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!       {{model.status}}</h1> <br/> {{model.value|json}}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit  {
  

  @Input() name: string;

    model: FormGroup;
  
  
  constructor(public fb: FormBuilder){
    this.model = this.fb.group(new Formulario());
  }

  ngOnInit(): void {    

    //console.log(Mock.DADOS_FORM);
    this.model.patchValue(Mock.DADOS_FORM);
    console.log(this.model);

    console.log(this.model.controls.formularioID.value);

    this.model.controls.formularioID.valueChanges.subscribe(c=> console.log(c));

    this.model.controls.formularioID.setValue(2);
  }
}
