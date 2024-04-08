import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainDetailsComponent } from './main-details/main-details.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent, HeaderComponent, MainComponent, MainDetailsComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
