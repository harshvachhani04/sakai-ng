import { Component } from '@angular/core';
import { Login } from './login/login';
import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    {
        path: 'test',
        loadComponent: () =>
            import('./test-page/test-page')
                .then(m => m.TestPage)
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./login/login')
                .then(m => m.Login)
    },
    {
        path: 'forgot-password',
        loadComponent: () =>
            import('./forgot-password/forgot-password')
                .then(m => m.ForgotPassword)
    },
    { path: '**', redirectTo: '/notfound' },
] as Routes;
