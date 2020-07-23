import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, CardListComponent, CardComponent, SearchComponent],
  imports: [BrowserModule, CommonModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
