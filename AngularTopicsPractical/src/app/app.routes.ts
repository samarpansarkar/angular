import { Routes } from '@angular/router';
import { TemplateForms } from './pages/forms/template-forms/template-forms';
import { ReactiveForms } from './pages/forms/reactive-forms/reactive-forms';

export const routes: Routes = [
    {
        path:'template-forms',
        component:TemplateForms,
        title:"Template Forms"
    },
    {
        path:'reactive-forms',
        component:ReactiveForms,
        title:"Reactive Forms"
    }
];
