import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWorkOneComponent } from './home-work-one/home-work-one.component';
import { HomeWorkTwoComponent } from './home-work-two/home-work-two.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeWorkOneComponent,
    HomeWorkTwoComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
