import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";

import "./App.css";

const AppContainer = () => {
    return(
        <div id="main-container">
            <Header/>
            <Body/>
        </div>
    );
}

const appRouter = new createBrowserRouter([
    {
        path: "/",
        element: <AppContainer/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    }
]);


// Root element to append the main content
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
