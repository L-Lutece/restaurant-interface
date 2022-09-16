import React from "react";
import './Stack.css';

function Stack() {
    return (
        <div className="container">
            <div className="App">
                <div className="section1" id="stack">
                    <h3 class="title">STACK</h3>
                    <div className="textArea">
                        <div className="textStar">
                            <p>Nessa sessão vai ter todas as tecnologias que conheço e também o nível de conhecimento, sendo no <b>básico</b> as tecnologias que eu ainda não aprofundei ou tive pouca interação. No nível <b>intermediário</b> tecnologias que eu já usei bastante, mas que ainda realizo várias consultas para desenvolver algo. No nível <b>Avançado</b> são as que eu utilizo sempre para diversas coisas. </p>
                        </div>
                    </div>

                    <div className="starFather">
                        <div>
                            <button className="starArea1">
                                <h4>Básico</h4>
                            </button>
                            <div className="skills">
                            </div>
                        </div>
                        <div>
                            <button className="starArea2">
                                <h4>Intermediário</h4>
                            </button>
                            <div className="skills">
                            </div>
                        </div>
                        <div>
                            <button id="starArea3">
                                <h4>Avançado</h4>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;