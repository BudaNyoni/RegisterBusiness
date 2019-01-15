import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NextPageComponent } from './next-page/next-page.component';

const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'nextpage', component: NextPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NextPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
