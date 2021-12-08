import React from "react-bootstrap";
import img from "../AboutUs";
import "./style.scss"


const AboutUs=() => {
    return (
        <>
 {/* Card foto Aluno 1 */}

            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="{img}" alt="Abne"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Beatriz Abne</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* Card foto Aluno 2 */}
            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="Dominic"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Dominic</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* Card foto Aluno 3 */}
            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="Eduardo"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Eduardo</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* Card foto Aluno 4 */}
            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="Lucas"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Lucas</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* Card foto Aluno 5 */}
            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="Murilo"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Murilo</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

{/* Card foto Aluno 6 */}
            <div className="profileTeam">
                <form method="">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="Rafaela"/>
                        </div>
                        <div className="col-md-6">
                            <div className="bodyProfile">
                                <h3>Rafaela</h3>
                                <h5>Web Developer</h5>
                                <button>LinkedIn</button>
                                <button>GitHub</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AboutUs