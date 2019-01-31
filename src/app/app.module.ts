import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NextPageComponent } from './next-page/next-page.component';
import { ProductsComponent } from './products/products.component';
import { EditBusinessProfileComponent } from './edit-business-profile/edit-business-profile.component';
import {PopupModule} from 'ng2-opd-popup'
const appRoutes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'nextpage', component: NextPageComponent },
  {path: 'editbusinessprofile', component:EditBusinessProfileComponent},
  {path: 'products', component:ProductsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NextPageComponent,
    ProductsComponent,
    EditBusinessProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    PopupModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
