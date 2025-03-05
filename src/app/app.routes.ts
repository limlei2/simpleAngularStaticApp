import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contactme',
        component: ContactMeComponent
    },
    {
        path: 'databinding',
        component: DataBindingComponent
    }
];
