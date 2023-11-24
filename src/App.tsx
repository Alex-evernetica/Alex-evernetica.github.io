import React, {createContext, useEffect, useState} from 'react';
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom';
import EnableHookesPage from "./pages/EnableHookesPage/EnableHookesPage";
import SecondPage from "./pages/SecondPage";
import FinalPage from "./pages/FinalPage";

const router = createHashRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <EnableHookesPage/>,
            },
            {
                path: "/secondStep",
                element: <SecondPage/>,
            },
            {
                path: "/finalPage",
                element: <FinalPage/>,
            },
        ],
    },
]);

type RouterType = {
    backUrl: string;
    setBackUrl: (url: string) => void;
}

const contextInitialState: RouterType = {
    backUrl: "",
    setBackUrl: () => null
}
export const NavigationContext = createContext<RouterType>(contextInitialState);

function App() {
    const [backUrl, setBackUrl] = useState("")

    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        let backUrlValue = params.get("backUrl");
        if (backUrlValue) {
            setBackUrl(backUrlValue || "")
            sessionStorage.setItem("backUrl", backUrlValue || "")
        }
    }, [])


    return (
        <NavigationContext.Provider value={{backUrl, setBackUrl}}>
            <RouterProvider router={router}/>
        </NavigationContext.Provider>
    );
}


export default App;
