// src/components/route/appRoutes.tsx
import { createBrowserRouter, RouterProvider } from "react-router";
import RoutesLayout from '../route/routesLayout';
import { ROUTES_CONFIG } from "./routes";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RoutesLayout />,
            children: ROUTES_CONFIG.map(({ path, element }) => ({
                path,
                element,
            })),
        },
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;