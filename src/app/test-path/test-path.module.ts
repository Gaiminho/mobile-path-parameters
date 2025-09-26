import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPathPageRoutingModule } from './test-path-routing.module';

import { TestPathPage } from './test-path.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPathPageRoutingModule
  ],
  declarations: [TestPathPage]
})
export class TestPathPageModule {}
