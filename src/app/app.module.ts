import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// MODULES
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


// COMPONENTS
import { PostmanComponent } from './components/postman/postman.component';
import { PostmanFrecuentesComponent } from './components/modal/postman-frecuentes/postman-frecuentes.component';
import { QrComponent } from './components/qr/qr.component';

@NgModule({
  declarations: [
    AppComponent,
    PostmanComponent,
    PostmanFrecuentesComponent,
    QrComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ModalController,
    PostmanFrecuentesComponent,
    BarcodeScanner
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
