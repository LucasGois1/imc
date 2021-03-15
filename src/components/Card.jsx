import React, { useState, useEffect } from 'react'
import './css/card.css'

const classe = [{
    nome: 'Muito abaixo do peso',
    menor: 16,
    maior: 16.9,
    description: "Queda de cabelo, infertilidade, ausência menstrual"
},
{
    nome: 'Abaixo do peso',
    menor: 17,
    maior: 18.4,
    description: "Fadiga, stress, ansiedade"
},
{
    nome: 'Peso normal',
    menor: 18.5,
    maior: 24.9,
    description: "Menor risco de doenças cardíacas e vasculares"
},
{
    nome: 'Acima do peso',
    menor: 25,
    maior: 29.9,
    description: "Fadiga, má circulação, varizes"
},
{
    nome: 'Obesidade Grau I',
    menor: 30,
    maior: 34.9,
    description: "Diabetes, angina, infarto, aterosclerose"
},
{
    nome: 'Obesidade Grau II',
    menor: 35,
    maior: 39.9,
    description: "Apneia do sono, falta de ar"
},
{
    nome: 'Obesidade Grau III',
    menor: 40,
    maior: 100,
    description: "Refluxo, dificuldade para se mover, escaras, diabetes, infarto, AVC"
}
]
const Card = (props) => {
    const [value, setValue] = useState('')
    const [resultado, setResultado] = useState('')

    const calcularResultado = () => {

        return classe.filter((item) => {
            const op = value > item.menor && value <= item.maior ? item : false
            if (op) {
                setResultado(op)
            }
        })
    }

    console.log('Ola' + props.resultado)
    return (
        <div className="card-body">
            <h3>
                Resultado: {resultado.nome}
            </h3>
        </div>
    )
}

export default Card