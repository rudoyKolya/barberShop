import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './price-list/table/table.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceWorkspaceComponent } from './price-list/price-workspace/price-workspace.component';
import { InformationComponent } from './information/information.component';
import { NewsComponent } from './news/news.component';
import { ShopComponent } from './shop/shop.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExitComponent } from './exit/exit.component';
import { environment } from '../environments/environment';


const routs = [
  {path: 'main', component: MainComponent },
  {path: 'information', component: InformationComponent },
  {path: 'news', component: NewsComponent },
  {path: 'shop', component: ShopComponent },
  {path: 'contacts', component: ContactsComponent },
  {path: 'exit', component: ExitComponent },
  {path: 'price-list', component: PriceListComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    MainComponent,
    PriceListComponent,
    PriceWorkspaceComponent,
    InformationComponent,
    NewsComponent,
    ShopComponent,
    ContactsComponent,
    ExitComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
