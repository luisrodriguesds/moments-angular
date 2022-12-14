import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './components/message/message.component';
import { httpInterceptorProviders } from './interceptors/http/http.interceptor';
import { AddMomentComponent } from './components/pages/add-moment/add-moment.component';
import { InputComponent } from './components/forms/input/input.component';
import { TextareaComponent } from './components/forms/textarea/textarea.component';
import { CheckboxComponent } from './components/forms/checkbox/checkbox.component';
import { CheckboxItemComponent } from './components/forms/checkbox/checkbox-item/checkbox-item.component';
import { RadioComponent } from './components/forms/radio/radio.component';
import { RadioItemComponent } from './components/forms/radio/radio-item/radio-item.component';
import { InputTagComponent } from './components/forms/input-tag/input-tag.component';
import { LoginService } from './services/login/login.service';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MessageComponent,
    AddMomentComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    CheckboxItemComponent,
    RadioComponent,
    RadioItemComponent,
    InputTagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
  ],
  providers: [httpInterceptorProviders, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
