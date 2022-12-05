import React from 'react';
import './index.css';

const Header = React.lazy(() => import('HeaderAndFooter/Header'))
const TopRepos = React.lazy(() => import('TopRepos/TopRepos'))
const Activities = React.lazy(() => import('Activities/CommitsCard'))

function ContainerPage() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-evenly m-4 my-container">
        <TopRepos />
        <Activities />
      </div>
    </>
  );
}

export default ContainerPage;
