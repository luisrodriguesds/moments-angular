import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MessageService } from '../../../services/message/message.service';
import { MomentsService } from '../../../services/moments/moments.service';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.scss'],
})
export class AddMomentComponent implements OnInit {
  momentForm!: FormGroup;
  constructor(
    private momentService: MomentsService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(5),
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(5),
      ]),
      status: new FormControl('', [Validators.required]),
      term: new FormControl([], [Validators.required, Validators.minLength(2)]),
      tags: new FormControl([]),
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

  get term() {
    return this.momentForm.get('term');
  }

  get tags() {
    return this.momentForm.get('tags');
  }

  async submit() {
    if (this.momentForm.invalid) {
      return;
    }
    try {
      await firstValueFrom(this.momentService.post(this.momentForm.value));
      this.router.navigate(['/']);
    } catch (error) {
      this.messageService.add({
        messageTitle: 'Error',
        messageDescription: 'Something went wrong',
      });
    }
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
        maxlength: `The max value is ${error?.maxlength?.requiredLength}`,
        minlength: `The min value is ${error?.minlength?.requiredLength}`,
      },
      term: {
        required: 'the Term are mandatory',
        minlength: `You need check the both options`,
      },
      status: {
        required: 'the status is mandatory',
      },
    };
    if (!errorMessages[field] || !errorMessages[field][errorProps]) {
      return '';
    }
    return errorMessages[field][errorProps];
  }
}
