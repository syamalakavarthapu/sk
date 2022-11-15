import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { TableComponent } from './table/table.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Parent', component: ParentComponent },
    { path: 'table', component: TableComponent},
    { path: 'decorator', component: DecoratorComponent},
    { path: 'forms', component: FormsComponent}
    

    ];
    
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
