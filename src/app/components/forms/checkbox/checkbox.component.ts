import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  value: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  onChange(value: any) {
    const findValue = this.value.find((item) => item === value);
    if (findValue) {
      const values = this.value.filter((item) => item !== value);
      this.value = values;
      this.control.setValue(values);
      return;
    }
    const values = this.value;
    values.push(value);
    this.value = values;
    this.control.setValue(values);
  }
}
