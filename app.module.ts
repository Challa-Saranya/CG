import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { ShowComponent } from './app.showcomponent';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  AddEmployeeComponent } from './app.addcomponent';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
        
    ],
    declarations: [
        AppComponent,ShowComponent, AddEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }