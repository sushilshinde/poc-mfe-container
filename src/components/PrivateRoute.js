import React from "react";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../services/githubService";

class PrivateRoute extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isLoading: true,
            isLoggedIn: false,
            userDetails: {}
        };

        verifyToken().then(data => {
            // For success, update state like
            this.setState(() => ({ isLoading: false, isLoggedIn: true, userDetails: data }));
        })
        .catch(err => {
             // For fail, update state like
                this.setState(() => ({ isLoading: false, isLoggedIn: false }));
        })
    }

    render() {
        return this.state.isLoading ? null : this.state.isLoggedIn ? (
            React.cloneElement(this.props.children, { userDetails: this.state.userDetails })
        ) : (
            <Navigate
                to={{ pathname: "/"  }}
            />
        );
    }
}

export default PrivateRoute;
