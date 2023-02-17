// import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import LeftNavbar from './left_navbar/left_navbar'
import Post from './post/post'

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
