import { Component, Host, Input, OnInit } from '@angular/core';
import { RadioComponent } from '../radio.component';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss'],
})
export class RadioItemComponent implements OnInit {
  @Input() label: string = '';
  @Input() value: string = '';

  constructor(@Host() public radio: RadioComponent) {}

  ngOnInit(): void {}
}
