import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '',
  component: ProfileComponent,
  children:[
    // {
    //   path: '',
    //   redirectTo:'edit',
    //   pathMatch:'full',
    // },
    {
      path:'edit',
      loadChildren: () => import('./edit/edit.module').then(m => m.EditModule),
    },
    { path: 'notifications', 
      loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) 
    },
    { path: 'choose-plan', 
      loadChildren: () => import('./choose-plan/choose-plan.module').then(m => m.ChoosePlanModule) 
    },
  ] },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
