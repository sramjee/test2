import { Routes } from '@angular/router'
import { LimitComponent } from './limit/limitform.component'
import { ELK } from './elk/elk.component'

export const appRoutes:Routes = [
    { path: 'events', component: LimitComponent },
    { path: 'elk', component: ELK }
]