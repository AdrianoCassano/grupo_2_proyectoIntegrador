import React from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

function App() {
  return (
    <React.Fragment>

          <TopBar />
      	<div id="wrapper">
          <SideBar />
        </div>

    </React.Fragment>
  );
}


export default App;
