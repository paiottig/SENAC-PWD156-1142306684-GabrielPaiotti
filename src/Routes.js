import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";
import SobreNos from "./paginas/SobreNos";
import Cadastro from "./paginas/CadastroCli";
import ContaCorrente from "./paginas/ContaCorrente";
import CalculoFinanciamento from "./paginas/CalculoFinanciamento";

function Rotas () {
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<SobreNos/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/conta" element={<ContaCorrente/>}/>
        <Route path="/calculofin" element={<CalculoFinanciamento/>}/>
    </Routes>
    );
}
export default Rotas;