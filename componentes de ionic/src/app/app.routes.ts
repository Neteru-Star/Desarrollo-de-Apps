import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page')
        .then(m => m.HomePage)
  },

  {
    path: 'accordion',
    loadComponent: () => import('./accordion/accordion.page').then( m => m.AccordionPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'alert',
    loadComponent: () => import('./alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  },
  {
    path: 'breadcrumbs',
    loadComponent: () => import('./breadcrumbs/breadcrumbs.page').then( m => m.BreadcrumbsPage)
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./checkbox/checkbox.page').then( m => m.CheckboxPage)
  },
  {
    path: 'chip',
    loadComponent: () => import('./chip/chip.page').then( m => m.ChipPage)
  }

];

