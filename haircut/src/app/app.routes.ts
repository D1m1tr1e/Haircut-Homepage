import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { AgbComponent } from './agb/agb.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'location', component: ContactComponent },
    { path: 'agb', component: AgbComponent }
];
