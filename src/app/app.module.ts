import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { InfoComponent } from './about/info/info.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './skills/progress-bar/progress-bar.component';
import { SkillComponent } from './skills/skill/skill.component';
import { BannerComponent } from './banner/banner.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LinkComponent } from './contacts/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    SkillsComponent,
    ProgressBarComponent,
    SkillComponent,
    BannerComponent,
    ContactsComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
