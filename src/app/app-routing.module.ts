import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from './recepies/recepies-detail/recepies-detail.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recepies', pathMatch: 'full' },
  {
    path: 'recepies', component: RecepiesComponent, children: [
      { path: '', component: RecepieStartComponent },
      { path: 'new', component: RecepieEditComponent },
      { path: ':id', component: RecepiesDetailComponent },
      { path: ':id/edit', component: RecepieEditComponent, pathMatch: 'full' },
    ]
  },
  { path: 'shopoping-list', component: ShoppingListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
