import { Suspense, lazy } from "react";
import Loading from "./loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing/landing-page";

export const AppRouter = () => {
    return (
        <>
            <Router>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<LandingPage/>} />
                    </Routes>
                </Suspense>
            </Router>
        </>
    );
};