import './App.css';
import Header from './components/header/header'
import LeftNavbar from './components/left_navbar/left_navbar'
import Posts from './components/posts/posts'
import Friends from './components/friend_list/friend_list'
import Dialog from './components/dialog/dialog'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <LeftNavbar />

        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/dialogs/:id" element={<Dialog />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
