import React from "react";
import './Stack.css';
import { DiMysql, DiSass, DiLess, DiPython} from "react-icons/di";
import { DiTerminal, DiReact, DiCss3, DiJavascript1, DiNodejsSmall, DiBootstrap, DiKrakenjsBadge, DiVisualstudio} from "react-icons/di";
import { DiHtml5, DiGit, DiGithubBadge, DiNpm, } from "react-icons/di";
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

                        <ul>
                            <li>
                                <div className="link1">Básico</div>
                                <ul>
                                    <div className="area1">
                                        <div className="iconsArea1">
                                            < DiMysql id="icon" color="Blue" fontSize="100px"/>
                                            < DiSass id="icon" color="pink" fontSize="100px"/>
                                            < DiLess id="icon" color="blue" fontSize="100px"/>
                                            < DiPython id="icon" color="yellow" fontSize="100px"/>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        </ul>

                        <ul>
                            <li>
                            <div className="link1">Intermediário</div>
                            <ul>
                                <div className="area2">
                                    <div className="iconsArea1">
                                        < DiTerminal id="icon" color="Black" fontSize="100px"/>
                                        < DiReact id="icon" color="Blue" fontSize="100px"/>
                                        < DiCss3 id="icon" color="Blue" fontSize="100px"/>
                                        < DiJavascript1 id="icon" color="Yellow" fontSize="100px"/>
                                        < DiNodejsSmall id="icon" color="Green" fontSize="100px"/>
                                        < DiBootstrap id="icon" color="Purple" fontSize="100px"/>
                                        < DiKrakenjsBadge id="icon" color="Blue" fontSize="100px"/>
                                        < DiVisualstudio id="icon" color="Blue" fontSize="100px"/>
                                    </div>
                                </div>
                            </ul>
                            </li>
                        </ul>

                        <ul>
                            <li>
                            <div className="link1">Avançado</div>
                            <ul>
                                <div className="area3">
                                    <div className="iconsArea1">
                                        < DiHtml5 id="icon" color="Orange" fontSize="100px"/>
                                        < DiGit id="icon" color="Orange" fontSize="100px"/>
                                        < DiGithubBadge id="icon" color="Black" fontSize="100px"/>
                                        < DiNpm id="icon" color="Black" fontSize="100px"/>
                                    </div>
                                </div>
                            </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;