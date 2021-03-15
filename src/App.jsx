import React, { useState } from "react";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Input from './components/Input';
import Card from './components/Card';
import "./components/css/app.css";
import "./components/css/body.css"

const App = () => {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [imc, setImc] = useState(0)
    const calcular = () => {
        return peso / (altura * altura)
    }
    const inputAltura = (value) => {
        setAltura(value / 100)
    }
    const inputPeso = (value) => {
        setPeso(value)
    }
    return (
        <div className="app">
            <Title></Title>
            <section className="body">
                <div className="body-content">
                    <div className="resume">
                        <p>
                            IMC é a sigla para Índice de Massa Corpórea,
                            parâmetro adotado pela Organização Mundial de Saúde para
                            calcular o peso ideal de cada pessoa.

                            O índice é calculado da seguinte maneira: divide-se o peso
                            do paciente pela sua altura elevada ao quadrado.
                            Diz-se que o indivíduo tem peso normal quando o resultado
                            do IMC está entre 18,5 e 24,9.

                            Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo
                            e compare com os índices da tabela. Importante: siga os exemplos e
                            use pontos como separadores.
                        </p>
                    </div>
                    <div className="input-area">
                        <div className="inputs">
                            <Input desc="Digite a sua altura" placeholder="Ex: 175 cm." values={inputAltura}></Input>
                            <Input desc="Digite o seu peso" placeholder="Ex: 65 Kg." values={inputPeso}></Input>
                        </div>
                        <div className="button-area">
                            <button onClick={calcular}>Calcular</button>
                        </div>
                    </div>
                </div>

                {calcular ??
                    <div className="card-area">
                        <Card resultado={imc} />
                    </div>
                }
            </section>
            <Footer></Footer>
        </div>
    );
};

export default App;
