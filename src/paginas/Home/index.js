import React from "react";
import {Link} from "react-router-dom";

function Home () {
    return(
        <div>
            <h1>Pagina Inicial</h1>
            <Link to = "sobre">Sobre</Link><br/>
            <Link to = "cadastro">Cadastro</Link><br/>
            <Link to = "conta">Conta Corrente</Link><br/>
            <Link to = "calculofin">Calculo Financiamento</Link><br/>
        </div>
    );
}
export default Home;