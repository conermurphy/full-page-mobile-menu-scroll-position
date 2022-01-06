import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import './App.css';

function App() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  return (
    <div className="App">
      <p className="filler" />
      <div className="fixed">
        <p>Current Scroll Position:</p>
        <Nav />
        <p>{scrollValue}px</p>
      </div>
    </div>
  );
}

export default App;
