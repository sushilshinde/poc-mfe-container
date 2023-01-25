import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ErrorContainer from "../../containers/ErrorContainer";
import Notification from "../Notification";
import PublicEvents from "../PublicEvents";
import "./index.css";
const Header = React.lazy(() => import("HeaderAndFooter/Header"));
const TopRepos = React.lazy(() => import("TopRepos/TopRepos"));
const Activities = React.lazy(() => import("Activities/StarredRepos"));

const Dashboard = ({ userDetails }) => {
    const navigate = useNavigate()

    useEffect(() => {
        const username = userDetails.details.username;
        const event = new CustomEvent("getUserDetails", {
            detail: {
                username
            },
        });
        window.dispatchEvent(event);
    }, [userDetails.details.username]);

    useEffect(() => {
        window.addEventListener("JWT_EXPIRED", (event) => {
            if(event.detail) {
                localStorage.removeItem('user-token')
                toast.warn('Session Expired, Login again !!!', 3000)
                setTimeout(() => {
                    window.location.replace(process.env.LOGOUT_URL)
                }, 3000)
                
            }
        }, { once: true });
        return () => {
            window.removeEventListener("JWT_EXPIRED");
        };
    }, []);

    return (
        <>
            <Header />
            <Notification />
            <div className="d-flex justify-content-evenly m-4 my-container">
                <ErrorContainer>
                    <TopRepos />
                </ErrorContainer>
                <ErrorContainer>
                    <Activities />
                </ErrorContainer>
                <ErrorContainer>
                    <PublicEvents />
                </ErrorContainer>
            </div>
        </>
    );
};

export default Dashboard;
