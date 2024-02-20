import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServerComponent } from './servers/server/server.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from './recepies/recepies-detail/recepies-detail.component';
import { RecepiesItemComponent } from './recepies/recepies-list/recepies-item/recepies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { GameControlComponent } from './assignment/game-control/game-control.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { AppHighlighterDirective } from './servers/directives/app-highlighter.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ActiveComponent } from './assignment/active/active.component';
import { InActiveComponent } from './assignment/in-active/in-active.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';
import { FormComponent } from './assignment/form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepiesDetailComponent,
    RecepiesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    AppHighlighterDirective,
    DropdownDirective,
    ActiveComponent,
    InActiveComponent,
    AssignmentComponent,
    RecepieStartComponent,
    RecepieEditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
