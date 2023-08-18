import './index.css'
import App from "@/App";
import { createBrowserRouter, RouterProvider, ReactDOM } from 'react-router-dom';

const router = createBrowserRouter(App);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);
