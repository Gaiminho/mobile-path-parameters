import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPathPage } from './test-path.page';

const routes: Routes = [
  {
    path: '',
    component: TestPathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPathPageRoutingModule {}
