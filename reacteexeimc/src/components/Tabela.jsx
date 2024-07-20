import '/src/components/Tabela.css'
import { useEffect } from 'react'

function Tabela(){


    return(
        <>
            <table className='tabela'>
                <thead className='thead' >
                    <tr >
                        <th>
                            IMC (Kg/m^2)
                        </th>
                        <th >
                            Classificao
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr className='tr' >
                        <td>
                            Abaixo de 18,5
                        </td>
                        <td>
                            Magreza
                        </td>
                    </tr>
                    <hr />
                    <tr className='tr'>
                        <td>
                            Entre 18,6 e 24,9
                        </td>
                        <td>
                            Peso Normal
                        </td>
                    </tr>
                    <hr />
                    <tr  className='tr'>
                        <td>
                            Entre 25 e 29,9
                        </td>
                        <td>
                            Sobrepeso
                        </td>
                    </tr>
                    <hr />
                    <tr className='tr'>
                        <td>
                            Entre 30 e 34,9
                        </td>
                        <td>
                            Obesidade de grau I
                        </td>
                    </tr>
                    <hr />
                    <tr className='tr'>
                        <td>
                            Entre 35 e 39,9
                        </td>
                        <td>
                            Obesidade de grau II
                        </td>
                    </tr>
                    <hr />
                    <tr className='tr'>
                        <td>
                            Acima de 40
                        </td>
                        <td>
                            Obesidade de grau III
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela