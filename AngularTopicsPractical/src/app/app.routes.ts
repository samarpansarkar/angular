import { Routes } from '@angular/router';
import { TemplateForms } from './pages/forms/template-forms/template-forms';
import { ReactiveForms } from './pages/forms/reactive-forms/reactive-forms';
import { ControlFlows } from './pages/control-flows/control-flows';
import { IfElseControlFlow } from './pages/control-flows/if-else-control-flow/if-else-control-flow';

import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home',
  },
  {
    path: 'control-flows',
    component: ControlFlows,
    title: 'Control Flows',
    children: [
      {
        path: 'if-else',
        component: IfElseControlFlow,
        title: 'If-Else',
      },
    ],
  },
  {
    path: 'template-forms',
    component: TemplateForms,
    title: 'Template Forms',
  },
  {
    path: 'reactive-forms',
    component: ReactiveForms,
    title: 'Reactive Forms',
  },
];