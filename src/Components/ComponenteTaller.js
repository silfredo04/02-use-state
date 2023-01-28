import React, {useState}  from 'react'
import PropTypes from "prop-types";

export const ComponenteTaller = ({anoActual}) => {

    const [ano,setAno] = useState(anoActual)
    const cambiarAno = (e,ano) => {
        setAno(ano);
    };

    const cambiarManual = e => {
        let dato = parseInt(e.target.value);
        if(Number.isInteger(dato)){
            setAno(dato);
        }else{
            setAno(anoActual);
        }
    };


    return(
        <div>
            <h3>Ejercicio con evento y useState ComponenteTaller</h3>
            <strong className="label label-green">
                {ano}
            </strong>
            &nbsp;
            <p>
                <button onClick={e => cambiarAno(e,ano+1)}>Pasar Al Proximo Año</button>
                &nbsp;
                <button onClick={e => cambiarAno(e,ano-1)}>Ir Al Año Anterior</button>
            </p>
            <p>
                &nbsp;
                <label>Cambiar Año: </label>
                <input onChange={cambiarManual} type="text" placeholder="Agrega tu año"/>
            </p>
            
        </div>
    )
};

ComponenteTaller.propTypes ={
    anoActual:PropTypes.number.isRequired
}
