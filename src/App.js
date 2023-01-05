import logo from "./logo.svg";
import "./App.css";
import { Header } from "./component/header";
import { Nav } from "./component/nav";
import { Main } from "./component/main";
import { useEffect, useState } from "react";

function App() {
// Hello Mohit  
<<<<<<< HEAD
    // this is a confict change

// thisi main change
=======
    // this is a new feature 
>>>>>>> b81a85e1ba349cb37c597e9a5008542212eb239d
    


    return (
        <div className="App">
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
