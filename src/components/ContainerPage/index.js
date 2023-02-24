import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import ErrorContainer from "../../containers/ErrorContainer";
import Dashboard from "../Dashboard";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import "./index.css";
const Login = React.lazy(() => import("Login/LoginComponent"));
const Logout = React.lazy(() => import("Login/LogoutComponent"));

/**
 * Container Page
 *
 * @description: Container Page containing all the MFEs
 * @returns Combined MFEs
 */
function ContainerPage() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoute>
                            <ErrorContainer>
                                <Login />
                            </ErrorContainer>
                        </PublicRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }

                />
                <Route
                    path="/logout"
                    element={
                        <PublicRoute>
                            <ErrorContainer>
                                <Logout />
                            </ErrorContainer>
                        </PublicRoute>
                    }
                />
                <Route path="*" element={ <Navigate to={'/'} /> } />
            </Routes>
        </Router>
    );
}

export default ContainerPage;
