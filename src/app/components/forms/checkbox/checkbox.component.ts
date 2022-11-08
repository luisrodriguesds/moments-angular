import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}

  onChange(value: any) {
    if (this.isSelected(value)) {
      const values = this.control.value.filter(
        (item: string) => item !== value
      );
      this.control.setValue(values);
      return;
    }
    const values = this.control.value;
    values.push(value);
    this.control.setValue(values);
  }

  isSelected(checkboxValue: string): boolean {
    return this.control.value.includes(checkboxValue);
  }
}
