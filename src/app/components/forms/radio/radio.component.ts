import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';

  constructor() {}

  ngOnInit(): void {}

  onChange(value: any) {
    this.control.setValue(value);
  }

  isSelected(radioValue: string): boolean {
    return this.control.value === radioValue;
  }
}
