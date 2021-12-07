import React from "react";
// import imagem from "../AboutUs"

const AboutUs = () => {
    return (
        <>
// foto do perfil
            <div className = "profileTeam">
                <form method = "">
                    <div className = "row">
                        <div className = "col-md-6">
                            <img src = {abne} alt="Abne"/>
                        </div>
                        <div className = "col-md-6">
                            <div className = "bodyProfile">
                                <h4>Beatriz Abne</h4>
                                <h5>Web Developer</h5>
// descrição e link de redes sociais (LinkedIn, Git e outros)
                                <ul className = "nav nav-tabs" role = "tablist">
                                    <li className = "nav-item">
                                    <a className = "nav-link active" id = "descricao-tab" data-toggle="tab" href="#descricao" role="tab">Sobre</a>
                                    </li>
                                    <li className = "nav-item">
                                    <a className = "nav-link active" id = "contatos-tab" data-toggle="tab" href="#contatos" role="tab">Contato</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </form>
            </div>

        </>
    )
}

export default AboutUs