import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header.jsx";
import Body from "./components/body/Body.jsx";
import Content from './components/content/Content.jsx';

function App() {
  let [sideNav, setSideNav] = useState("");
  return (
    <div className='main'>
      <Header />
      <Body />
      <Content />
      {/* TODO reusable card four times then three more cards */}
    </div>
    
  );
}

export default App;
