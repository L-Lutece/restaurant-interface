import React from "react";
import './Project.css';
import img1 from '../images/jssf.jpg';

function Project() {
    return (
        <div className="container">
            <div className="App">
                <div className="section2" id="project">
                    <h3 className="title">PROJETOS</h3>
                    <div className="PAll">
                        <div className="P1">
                            <div className="titleP1">Relógio com JS</div>
                        </div>                       
                        <div className="P2">
                            <div className="titleP">Cat</div>
                        </div>
                        <div className="P3">
                            <div className="titleP">Loness</div>
                        </div>
                        <div className="P4">
                            <div className="titleP">Depp</div>
                        </div>
                        <div className="P5">
                            <div className="titleP">Soles</div>
                        </div>
                        <div className="P6">
                            <div className="titleP">FAke</div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Project;