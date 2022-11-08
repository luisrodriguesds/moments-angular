import { Component, Host, Input, OnInit } from '@angular/core';
import { CheckboxComponent } from '../checkbox.component';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss'],
})
export class CheckboxItemComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';

  constructor(@Host() public checkbox: CheckboxComponent) {}

  ngOnInit(): void {}
}
