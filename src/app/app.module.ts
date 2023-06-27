import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetureModule } from './feture/feture.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './state/Auth/auth.effect';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './state/Auth/auth.reducer';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { userReducer } from './state/User/Reducer';
import { UserEffects } from './state/User/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FetureModule,
    SharedModule,
    AuthModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({auth:authReducer,user:userReducer}),
    EffectsModule.forRoot([AuthEffects,UserEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
