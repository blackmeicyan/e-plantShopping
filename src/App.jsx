// App.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">

      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>

          <div className="content">
            <div className="landing_content">
              <h1>歡迎來到</h1>
              <h1>迷你電腦專家</h1>
              <h1>ITX Expert</h1>
		

              <div className="divider"></div>

              <p>Where Expert is Home</p>

              <button
                className="get-started-button"
                onClick={() => setShowProductList(true)}
              >
                Get Started
              </button>
            </div>

            <div className="aboutus_container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList
          onHomeClick={() => setShowProductList(false)}
        />
      )}

    </div>
  );
}

export default App;



