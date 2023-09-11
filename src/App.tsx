import React from 'react';
import {RouterProvider, createBrowserRouter, Route} from 'react-router-dom';
import EnableHookesPage from "./pages/EnableHookesPage/EnableHookesPage";
import SecondPage from "./pages/SecondPage";
import FinalPage from "./pages/FinalPage";

// <Route path="/safari-ext-helper" element={<EnableHookesPage/>}/>
// <Route path="/secondStep" element={<SecondPage/>}/>
// <Route path="/finalPage" element={<FinalPage/>}/>

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "/",
                element: <EnableHookesPage/>,
            },
            {
                path: "secondStep",
                element: <SecondPage/>,
            },
            {
                path: "finalPage",
                element: <FinalPage/>,
            },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}



export default App;
