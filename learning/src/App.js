
import './App.css';
import Counter from './components/counter/Counter';
import Header from './components/Header';
import HackerNews from './components/news/HackerNews';
import HackerNewsWithReducer from './components/news/HackerNewsWithReducer';
import Photos from './components/photo/Photos';


function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      {/* <Header></Header> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNewsWithReducer></HackerNewsWithReducer>
    </div>
  );
}

export default App;
