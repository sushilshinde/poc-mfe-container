import React from 'react';
// import logo from './logo.svg';
import './App.css';

const Header = React.lazy(() => import('HeaderAndFooter/Header'))
const TopRepos = React.lazy(() => import('TopRepos/TopRepos'))
const Activities = React.lazy(() => import('Activities/CommitsCard'))

function App() {
  return (
    <>
      <Header />
      <div class="d-flex justify-content-evenly m-4 my-container">
        <TopRepos />
        <Activities />
      </div>
    </>
  );
}

export default App;
