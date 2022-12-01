import React, { useEffect } from 'react';
import './index.css';

const Header = React.lazy(() => import('HeaderAndFooter/Header'))
const TopRepos = React.lazy(() => import('TopRepos/TopRepos'))
const Activities = React.lazy(() => import('Activities/CommitsCard'))

function ContainerPage() {

  useEffect(() => {
    fetch('/repositories')
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))
  }, [])
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
