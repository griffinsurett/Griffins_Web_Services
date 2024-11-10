// App.js
import React from 'react';
import SiteView from './themes/HighTechNeon/index';
import MobileStatusBar from './MobileStatusBar'; // Import the MobileStatusBar component

function App() {
  return (
    <div className="App">
      <MobileStatusBar /> {/* Set the theme color for the status bar */}
      <SiteView>
        {/* Render the CMSRouter inside SiteView for consistent layout */}
        {/* <CMSRouter /> */}
      </SiteView>
    </div>
  );
}

export default App;
