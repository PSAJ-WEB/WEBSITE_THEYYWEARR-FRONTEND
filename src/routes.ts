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
import ProductPage2 from './pages/ProductPage2';
import ProductPage3 from './pages/ProductPage3';
import Profile from './pages/Profile';
import Profile2 from './pages/Profile2';

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
    path: '/ProductPage2',
    component: ProductPage2,
  },
  {
    path: '/ProductPage3',
    component: ProductPage3,
  },
  {
    path: '/Profile',
    component: Profile,
  },
  {
    path: '/profile2',
    component: Profile2,
  }
];
