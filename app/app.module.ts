import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormModule } from '@angular/forms';
import { AppComponent }   from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormModule,
    ],
    declarations: [ 
        AppComponent, 
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }