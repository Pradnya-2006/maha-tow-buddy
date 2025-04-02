import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Outlet } from 'react-router-dom';

// Lazy load components
const Home = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Search = lazy(() => import('@/pages/Search'));
const PaymentHistory = lazy(() => import('@/pages/PaymentHistory'));
const Rules = lazy(() => import('@/pages/Rules'));
const Login = lazy(() => import('@/pages/Login'));
const Report = lazy(() => import('@/pages/Report'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AdminAddDetails = lazy(() => import('@/pages/AdminAddDetails'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component for lazy-loaded routes
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

// Root layout with children
const RootLayout = () => (
  <Layout>
    <Outlet />
  </Layout>
);

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: 'search',
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: 'payment-history',
        element: (
          <Suspense fallback={<Loading />}>
            <PaymentHistory />
          </Suspense>
        ),
      },
      {
        path: 'rules',
        element: (
          <Suspense fallback={<Loading />}>
            <Rules />
          </Suspense>
        ),
      },
      {
        path: 'login',
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: 'report',
        element: (
          <Suspense fallback={<Loading />}>
            <Report />
          </Suspense>
        ),
      },
      {
        path: 'admin/dashboard',
        element: (
          <Suspense fallback={<Loading />}>
            <AdminDashboard />
          </Suspense>
        ),
      },
      {
        path: 'admin/add-details',
        element: (
          <Suspense fallback={<Loading />}>
            <AdminAddDetails />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
