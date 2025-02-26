import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';
import { Router } from 'solid-app-router'; 
import LandingPage from './pages/landingpage';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import BlogPage from './pages/blogpage';
import BlogPage5Fashion from './pages/BlogPageMore';
import VerificationPage from './pages/verify';
import ProductPage from './pages/productpage';
import Account from './pages/account';
import Address from './pages/address';
import AboutUs from './pages/aboutus';
import Clothes from './pages/clothes';
import Accessories from './pages/accessories';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/blogpage',
    component: BlogPage,
  },
  {
    path: '/products',
    component: ProductPage,
  },
  {
    path: '/blogpage/readmore5fahion',
    component: BlogPage5Fashion,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/verifyotp',
    component: VerificationPage,
  },
  {
    path: '/clothes',
    component: Clothes,
  },
  {
    path: '/accessories',
    component: Accessories,
  },
  {
    path: '/account',
    component: Account,
  },
  {
    path: '/address',
    component: Address,
  },
  {
    path: '/about-us',
    component: AboutUs,
  }
];
