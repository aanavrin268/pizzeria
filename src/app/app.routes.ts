import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./dashboard/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./componentes/auth/login/login.page').then((m) => m.LoginPage)
  },
  {
    path: "product",
    loadComponent: () => import('./dashboard/product/product.page').then((m) => m.ProductPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./componentes/auth/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'product',
    loadComponent: () => import('./dashboard/product/product.page').then( m => m.ProductPage)
  },
  {
    path: 'shoping',
    loadComponent: () => import('./dashboard/shoping-cart/shoping-cart.page').then( m => m.ShopingCartPage)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }


];
