import { Routes } from '@angular/router';
import { TemplateForms } from './pages/forms/template-forms/template-forms';
import { ReactiveForms } from './pages/forms/reactive-forms/reactive-forms';
import { ControlFlows } from './pages/control-flows/control-flows';

export const routes: Routes = [
    {
        path:'control-flows',
        component:ControlFlows,
        title: "Control Flows"
    },
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
