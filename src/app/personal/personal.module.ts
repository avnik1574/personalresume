import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Add this line

import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
  },
];

@NgModule({
  declarations: [
    PersonalComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // ✅ This enables ngModel
    RouterModule.forChild(routes),
  ]
})
export class PersonalModule { }
