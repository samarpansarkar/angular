import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { App } from './app';

export const routes: Routes = [
    {
        path:'',
        component:App
    },
    {
        path:"admin",
        component:Admin
    }
];
