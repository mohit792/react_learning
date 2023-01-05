import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/header";
import { Nav } from "./component/nav";
import { Main } from "./component/main";
import { useEffect, useState } from "react";

function App() {
// Hello Mohit  
    // this is a new feature 
    


    return (
        <div className="App" >
            <div className="main_container">
                {/* <Header /> */}
                <Nav />
                <Main />
                <Nav />
            </div>
        </div>
    );
}

export default App;
