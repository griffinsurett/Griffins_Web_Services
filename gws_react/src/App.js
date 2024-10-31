// App.js
import React from 'react';
import SiteView from './themes/HighTechNeon/index';
// import CMSRouter from "./Content/Router";

function App() {
  return (
    <div className="App">
      <SiteView>
        {/* Render the CMSRouter inside SiteView for consistent layout */}
        {/* <CMSRouter /> */}
      </SiteView>
    </div>
  );
}

export default App;
