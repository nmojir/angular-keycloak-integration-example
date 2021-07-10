import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyuploaderComponent } from './components/myuploader/myuploader.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializer } from './app-init';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyuploaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFileUploaderModule,
    KeycloakAngularModule
  ],
  providers: [
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
