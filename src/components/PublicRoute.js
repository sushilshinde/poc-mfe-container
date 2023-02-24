import React from "react";
import { Navigate } from "react-router-dom";

class PublicRoute extends React.Component {
    render() {
        return localStorage.getItem('user-token') ? (
            <Navigate
                to={{ pathname: "/dashboard"  }}
            />
        ) : (
            React.cloneElement(this.props.children)
        );
    }
}

export default PublicRoute;
