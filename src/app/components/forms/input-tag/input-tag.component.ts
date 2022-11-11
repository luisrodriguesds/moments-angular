import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-tag',
  templateUrl: './input-tag.component.html',
  styleUrls: ['./input-tag.component.scss'],
})
export class InputTagComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() hasError: boolean = false;
  @Input() errorMessage: string = '';
  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  onInsert(e: any) {
    this.inputValue = e.target.value;

    if (e.key !== 'Enter') {
      return;
    }

    e.preventDefault();
    const tags = this.control.value as string[];
    if (tags.includes(this.inputValue)) {
      this.inputValue = '';
      return;
    }
    tags.push(this.inputValue);
    this.control.setValue(tags);
    this.inputValue = '';
  }

  onRemove(tag: string) {
    const tags = this.control.value.filter((item: string) => item !== tag);
    this.control.setValue(tags);
  }
}
