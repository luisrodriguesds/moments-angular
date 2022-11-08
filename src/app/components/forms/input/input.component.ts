import {
  Component,
  Input,
  OnInit,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  parseError(arr: any) {
    console.log(arr);
    return false;
  }
}
