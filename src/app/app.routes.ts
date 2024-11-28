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
    path:  'inventario',
    loadComponent: () => import('./dashboard/invetario/invetario.page').then(m => m.InvetarioPage)
  },
  {
    path: 'category',
    loadComponent: () => import('./dashboard/category-page/category-page.page').then( m => m.CategoryPagePage)
  },
  {
    path: 'shoping',
    loadComponent: () => import('./dashboard/shoping-cart/shoping-cart.page').then( m => m.ShopingCartPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./dashboard/tabs/tabs.page').then( m => m.TabsPage)
  },

  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'invetario',
    loadComponent: () => import('./dashboard/invetario/invetario.page').then( m => m.InvetarioPage)
  },
  {
    path: 'category',
    loadComponent: () => import('./dashboard/category-page/category-page.page').then( m => m.CategoryPagePage)
  }




];
