
import React from 'react';
import Splash from './components/Splash';

class App extends React.Component{




  render(){
    return (
      <div>
        <style global jsx>{`
          body {
            background-color: #red;
          }
        `}
        </style>
        <h1> hii</h1>
        <Splash/>
        </div>
    );
  }
}

export default App;
