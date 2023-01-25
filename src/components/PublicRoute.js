import React from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../services/githubService";

class PublicRoute extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            isLoggedIn: false,
        };

        verifyToken().then(data => {
                this.setState(() => ({ isLoading: false, isLoggedIn: true }));
        })
        .catch(err => {
                this.setState(() => ({ isLoading: false, isLoggedIn: false }));
        })
    }

    render() {
        return this.state.isLoading ? null : this.state.isLoggedIn ? (
            <Navigate
                to={{ pathname: "/dashboard"  }}
            />
        ) : (
            this.props.children
        );
    }
}

export default PublicRoute;
