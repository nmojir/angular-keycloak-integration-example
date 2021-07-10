import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyuploaderComponent } from './components/myuploader/myuploader.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'upload', 
    component: MyuploaderComponent, 
    canActivate: [AuthGuard],
    data: {
      roles: ['myrole']
    }
  },
  { 
    path: '', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
