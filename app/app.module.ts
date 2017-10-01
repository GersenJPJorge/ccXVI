import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
    imports : [AppRoutingModule, 
               BrowserModule, 
               ClientesModule, 
               HttpModule, 
               InMemoryWebApiModule.forRoot(InMemoryDataService) 
               ],
    declarations :[AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}