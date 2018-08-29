import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FavoritesComponent } from '../favorites/favorites.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'favorites',     component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contactus',     component: ContactComponent },
  { path: 'dishdetail/:id',     component: DishdetailComponent }

];
