// src/App.tsx
import { Suspense } from 'react';
import AppRoutes from "../src/components/route/appRoutes";

const App = () => {
    return (
        <Suspense fallback={<div className="loading">Loading...</div>}>
            <AppRoutes />
        </Suspense>
    );
};

export default App;