import {FormControl, Validators, FormArray, AbstractControl, FormGroup, FormBuilder} from '@angular/forms'

export class FormArrayBase<T> extends FormArray {  
  builder = new FormBuilder();
    constructor(private T){      
    super([]);
    }  
  patchValue(value: T[]): void {
        // remove
        while (this.length > 0) {
            this.removeAt(0);            
        }
        // map itens
        value.forEach(c => {
            this.push(this.builder.group(new this.T()));
        });        
        super.patchValue(value);
    }
}