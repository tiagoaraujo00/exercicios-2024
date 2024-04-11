import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MainDetailsComponent } from './main-details/main-details.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SummaryComponent } from './summary/summary.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, SideBarComponent, HeaderComponent, MainComponent, MainDetailsComponent, ButtonComponent, DropdownComponent, SummaryComponent, DiscussionsComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
