import './App.css';
import NavigationBar from './components/NavigationBar';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  // const [hideArrow, sethideArrow] = useState(false);

  // const arrowClick = () => {
  //   sethideArrow(!hideArrow);
  // };

  return (
    <Router>
      <div className='App'>
        <NavigationBar></NavigationBar>
      </div>
    </Router>
  );
}

export default App;
