import React, {useState}  from 'react'

export const MiPrimerEstado = () => {


    /* 
    Problematica asi no funciona
    let nombre = "Silfredo Orozco";

    const cambiarNombre = e => {
        nombre = "Danilo Orozco"
    }; */

    const [nombre,setNombre] = useState("Silfredo Orozco")
    const cambiarNombre = (e,nombreFijo) => {
        setNombre(nombreFijo);
    };
  return (
    <div>
        <h3>Componente MiPrimerEstado</h3>
        <strong className="label">
            {nombre}
        </strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e,"Danilo Orozco")}>Cambiar nombre</button>
        &nbsp;
        <input onKeyUp={e => cambiarNombre(e, e.target.value)} type="text" placeholder="Cambia el nombre"/>
        &nbsp;
        <input onChange={e => cambiarNombre(e, e.target.value)} type="text" placeholder="Cambia el nombre"/>
    </div>
  )
};
