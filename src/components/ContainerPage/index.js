import React from "react";
import ErrorContainer from "../../containers/ErrorContainer";
import "./index.css";
import PublicEvents from "./PublicEvents";
const Header = React.lazy(() => import("HeaderAndFooter/Header"));
const TopRepos = React.lazy(() => import("TopRepos/TopRepos"));
const Activities = React.lazy(() => import("Activities/StarredRepos"));

/**
 * Container Page
 *
 * @description: Container Page containing all the MFEs
 * @returns Combined MFEs
 */
function ContainerPage() {
    return (
        <>
            <ErrorContainer>
                <Header />
            </ErrorContainer>
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
}

export default ContainerPage;
