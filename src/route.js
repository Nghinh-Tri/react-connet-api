import React from "react";
import HomePage from "./pages/home-page/HomePage";
import ProductListPage from "./pages/product-list-page/ProductListPage";
import ProductActionPage from "./pages/product-action-page/ProductActionPage";
import NotFoundPage from "./pages/not-found-page/NotFoundPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/products-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/products/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/products/:id/edit',
        exact: true,
        main: ({match, history}) => <ProductActionPage match={match} history={history} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;