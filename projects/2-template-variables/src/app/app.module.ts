import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleDirective } from './directives/style.directive';
import { ClassDirecive } from './directives/class.directive';
import { ListenerDirective } from './directives/listener.directive';
import { InputBackgroundDirective } from './directives/input-background.directive';
import { FocusSecondInputDirective } from './directives/focus-second-input.directive';
import { XssComponent } from './xss/xss.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    ClassDirecive,
    ListenerDirective,
    InputBackgroundDirective,
    FocusSecondInputDirective,
    XssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
