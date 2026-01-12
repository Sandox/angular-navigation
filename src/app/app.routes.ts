import { Routes } from '@angular/router';
import { MainPage } from './main-page/main-page';
import { SecondPage } from './second-page/second-page';
import { ThirdPage } from './third-page/third-page';

export const routes: Routes = [ 
    { path: '', component: MainPage },
    { path: 'second', component: SecondPage },
    { path: 'third', component: ThirdPage }
     ];