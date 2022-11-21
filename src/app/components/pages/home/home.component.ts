import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { LoginService } from '../../../services/login/login.service';
import { MessageService } from '../../../services/message/message.service';
import {
  IMoments,
  MomentsService,
} from '../../../services/moments/moments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  search: FormControl = new FormControl('');
  moments: IMoments[] = [];
  isLogged: boolean = false;
  loading: boolean = true;
  constructor(
    private momentsService: MomentsService,
    private messageService: MessageService,
    public loginService: LoginService
  ) {
    this.start();

    this.loginService.isUserLogged.subscribe((value) => {
      this.isLogged = value;
    });
  }

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        map((value) => value.trim()),
        filter((value) => value.length > 2),
        debounceTime(200),
        distinctUntilChanged(),
        switchMap((value) => this.momentsService.search(value)),
        tap((value) => (this.moments = value.items))
      )
      .subscribe();
  }

  trackByMomentId(index: number, moment: IMoments) {
    return moment.id;
  }

  async start() {
    try {
      const res = await firstValueFrom(this.momentsService.get());
      this.moments = res.items;
    } catch (error) {
      this.messageService.add({
        messageTitle: 'Error',
        messageDescription: 'Something went wrong',
      });
    } finally {
      this.loading = false;
    }
  }
}
