import { useState } from "react"
import '/src/components/Form.css';

function Form(){


    let [altura, setAltura] = useState('')
    let [peso, setPeso] = useState('')
    
    const calcularIMC = () =>{

        if (altura > 0 && peso > 0) {
            return peso / (altura ** 2);
        }
        return 0;
    }

    const textoIMC = () => {
        const IMC = calcularIMC();
        if (IMC <= 18.5) {
            console.log('saiu');
            return 'Magreza';
        } else if (IMC > 18.5 && IMC < 25) {
            console.log('saiu');
            return 'Peso Normal';
        } else if (IMC >= 25 && IMC < 30) {
            console.log('saiu');
            return 'Sobrepeso';
        } else if (IMC >= 30 && IMC <35) {
            console.log('saiu');
            return 'Obesidade Grau I';
        } else if (IMC >= 35 && IMC <40) {
            console.log('saiu');
            return 'Obesidade Grau II';
        } else if (IMC >= 40) {
            console.log('saiu');
            return 'Obesidade Grau III';
        } else {
            console.log('saiu vazio');
            return '';
        }
    }

    return (
    <>
        <form className="formulario">
            <h3>Peso:</h3>
            <input className="entradas" type="number" placeholder="Peso(Kg)" onChange={evento => setPeso(parseFloat(evento.target.value))}/>
            <h3>Altura:</h3>
            <input className="entradas" type="number" placeholder="Altura(m)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
            <table >
                <thead >
                    <tr >
                        <th>
                            IMC (Kg/m^2)
                        </th>
                        <th  >
                            Classificao
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr >
                        <td >
                            <h2>{calcularIMC().toFixed(2)}</h2>
                        </td>
                        <td >
                            <h2 className="textoimc">{textoIMC()}</h2>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </form>
    </>
    )
}

export default Form