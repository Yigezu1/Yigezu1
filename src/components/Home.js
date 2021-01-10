import React, {Component} from 'react';
import SideBar from "./Sidebar"

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <h2 className="text-white "> I'm Yigezu Birhane.</h2>
                <p className="text-white">Full Stack Developer</p>
                <SideBar />
            </div>
        )
    }
}

export default Home