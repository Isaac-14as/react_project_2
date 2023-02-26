import './App.css';
import Header from './components/header/header'
import LeftNavbar from './components/left_navbar/left_navbar'
import Post from './components/post/post'

function App() {
  return (
    <div className="App">
      <Header />
      <LeftNavbar />
      <div class="posts"> 
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default App;
