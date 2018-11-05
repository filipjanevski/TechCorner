import React, {Component} from "react";

import "./index.css";

class NavFooter extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid styleTop">
                    <div className="row ml-5 mr-5 mb-4 p-3">
                        <div className="col-md-3 text-justify">
                            <h4>Welcome to Tech Corner!</h4>
                            <p>This is my first ever React app. I made a news aggregator for tech news that uses News
                                API to fetch news stories.</p>
                        </div>
                        <div className="col-md-6">
                            <h4>About me</h4>
                            <p>My name is Filip and I am a student at Faculty of Computer Science & Engineering in
                                Skopje, Republic of Macedonia. The main focus of my studies is web development, more
                                precisely
                                front-end development.</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Site map</h4>
                            <div className="list-group">
                                <div className="list-item"><a href="/ars-technica">Ars Technica</a></div>
                                <div className="list-item"><a href="/engadget">Engadget</a></div>
                                <div className="list-item"><a href="recode">Recode</a></div>
                                <div className="list-item"><a href="/techradar">TechRadar</a></div>
                                <div className="list-item"><a href="/the-verge">The Verge</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3 styleBottom">
                        <div className="col-md-12 text-center">
                            <p>This project is licenced under the <a href="https://mit-license.org/">MIT</a> License. It
                                uses a free version of <a
                                    href="https://newsapi.org">News API</a>. By using this site you agree to the <a
                                    href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a></p>
                            <p>This content is property of it's rightful owner. I take no ownership of the content
                                shared except the page itself.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default NavFooter;