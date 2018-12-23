import React from "react"
import Home from "./Pages/Home/Home"
import PageNotFound from "./Pages/404Page/404Page"
import AuthenticationPage from './Pages/Authentication/Authentication'

const routes = [
    {
        path: '/',
        exact: true,
        main : () => <Home />
    },
    {
        path: '/authentication',
        exact: false,
        main: () => <AuthenticationPage />

    },
    {
        path:'',
        exact: false,
        main: () => <PageNotFound />
    }
]

export default routes;
