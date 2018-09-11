import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl} from '@angular/material';
import {getSpanishPaginatorIntl} from './shared/spanish-paginator-intl';
import {SharedModule} from './shared/shared.module';
import { NavbarComponent } from './components/ui/navbar/navbar.component';
import { FooterComponent } from './components/ui/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getSpanishPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
