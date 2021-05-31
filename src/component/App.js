import React, { useState } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Price from './Price';
import Product from './Product';
import Home from './Home';
import ComponentLifeCycle from '../classComponentLifeCycle/ComponentLifeCycle';
import LifeCycleInFunctionalComponet from './LifeCycleInFunctionalComponet';
import Timer from './Timer';

function App() {
  const [pageView, setPageView] = useState("HOME");
  const [intialVisitors, setInitalVistors] = useState(100);
  const [dummyProps, setDummyProps] = useState(10);
   const goToPrice = () => {
    setPageView("PRICE");
  }

  const backToHome = () => {
    setPageView("HOME");
  }

  const goToProduct = () => {
    setPageView("PRODUCT");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Welcome Into react</h1>
          <h3>This is app page</h3>
        </div>
      </header>
      {pageView === "HOME" && (
        <Home goToPrice={goToPrice} goToProduct={goToProduct}
          goToReacHook={() => setPageView("REACT_HOOK")} goToClassComponent={() => setPageView("CLASS_COMPONENT")} />)}
      {pageView === "PRICE" && (
        <Price backToHome={backToHome} />
      )}
      {pageView === "PRODUCT" && (
        <Product backToHome={backToHome} goToPrice={goToPrice} />
      )}

      {pageView === "CLASS_COMPONENT" && (<ComponentLifeCycle backToHome={() => setPageView("HOME")} />)}

      {pageView === "REACT_HOOK" && (<LifeCycleInFunctionalComponet backToHome={backToHome} intialNoOfVisitors={intialVisitors} dummyProps={dummyProps} />)}
     
      {pageView === "TIMER" && (<Timer />)}
      <button onClick={goToPrice}>Go to Price</button>
      <button onClick={goToProduct}> Go to Product</button>
      <button onClick={() => setPageView("CLASS_COMPONENT")}>Go to class Component life cycle</button>
      <button onClick={() => setPageView("REACT_HOOK")}>Go to React Hook</button>
      <button onClick={() => setInitalVistors(intialVisitors + 10)}>change Visitors</button>
      <button onClick={() => setDummyProps(dummyProps + 10)}>Dummy props change</button>
      <button onClick={() => setPageView("TIMER")}>Timer</button>
    </div>
  );
}

export default App;
