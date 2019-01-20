import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShortenerAddComponent } from './shortener-add/shortener-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'shortener-add', pathMatch: 'full' },
  {
    path: 'shortener-add',
    component: ShortenerAddComponent,
    data: { title: 'Add Shortener' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
