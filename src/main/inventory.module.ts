import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InventoryComponent } from './inventory.component';

@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryComponent]
})
export class AppModule { }
