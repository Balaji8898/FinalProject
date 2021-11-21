import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetqouteComponent } from './getqoute/getqoute.component';
import { HomeComponent } from './home/home.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { PreviousenquiryComponent } from './previousenquiry/previousenquiry.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {  
    path: 'getqoute',
    component: GetqouteComponent,
  },
  {
    path: 'ourservice',
    component: OurserviceComponent,
  },
  {
  path:'previousenquiry',
  component:PreviousenquiryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
