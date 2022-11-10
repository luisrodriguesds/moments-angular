import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.scss'],
})
export class AddMomentComponent implements OnInit {
  momentForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(5),
      ]),
      status: new FormControl('', [Validators.required]),
      tags: new FormControl('', [Validators.required]),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  get status() {
    return this.momentForm.get('status');
  }

  get tags() {
    return this.momentForm.get('tags');
  }

  submit() {
    this.momentForm.setValue({
      title: 'Test after sub',
      description: 'Desc after sub',
      status: 'inactive',
      tags: ['tag 1', 'tag 2'],
    });
    console.log(this.momentForm.value);
  }

  parseError(field: any, error: any) {
    if (!error) {
      return '';
    }
    const errorProps = Object.keys(error)[0] as any;
    const errorMessages: any = {
      title: {
        required: 'The title is mandatory',
        minlength: `The min value is ${error?.minlength?.requiredLength}`,
      },
      description: {
        required: 'The description is mandatory',
        maxlength: `The min value is ${error?.maxlength?.requiredLength}`,
        minlength: `The min value is ${error?.minlength?.requiredLength}`,
      },
      tags: {
        required: 'the Tags are mandatory',
      },
    };
    if (!errorMessages[field] || !errorMessages[field][errorProps]) {
      return '';
    }
    return errorMessages[field][errorProps];
  }
}
