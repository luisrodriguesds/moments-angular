import { Component, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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

  ngOnInit(): void {}

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
