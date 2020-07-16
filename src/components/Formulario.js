import React , {Fragment ,useState} from 'react';
import uuid from 'react-uuid'
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => { 
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
});
const [ error, actualizarError ] = useState(false)

// funcion que se ejecuta cuando el usuario escribe en un input

const actualizarState = e => {
    actualizarCita({
        ...cita,
        [e.target.name]: e.target.value 
    })
}
     
 //extraer los valores  

 const {mascota , propietario , fecha , hora , sintomas} = cita;

 //cuando el usuario envia datos al forulario

 const submitCita = e =>{

    e.preventDefault();
    //validar
    if(mascota.trim()==='' ||propietario.trim()==='' ||fecha.trim()==='' ||hora.trim()===''||sintomas.trim()===''){
        actualizarError(true);
        return;
    }

    //eliminar mensaje
    actualizarError(false);
    //asignar un id

   cita.id= uuid();
    
    //crear cita
    crearCita(cita);
    //reinicia la form
    actualizarCita({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })
}
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            { error  ?<p className="alerta-error">Todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
            >
                <label> Nombre de mascota</label>
                    <input
                    
                        type="text"
                        name="mascota"
                        className="u-full-width"
                        placeholder="nombre mascota"
                        onChange={actualizarState}
                        value={mascota}
                    />
                <label> Nombre del dueño</label>
                    <input
                    
                        type="text"
                        name="propietario"
                        className="u-full-width"
                        placeholder="nombre del dueño de la mascota"
                        onChange={actualizarState}
                        value={propietario}
                    />

                    <label> Fecha</label>
                    <input
                    
                        type="date"
                        name="fecha"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                    />

                    <label> Hora</label>
                    <input
                    
                        type="time"
                        name="hora"
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                    />

                    <label> Sintomas</label>
                    <textarea
                        className="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={sintomas}
                        >

                    </textarea>
                    <button
                        type="submit"
                        className="u-full-width button-primary"


                    >Agregar Cita</button>
                

            </form>


        </Fragment>
        


    );


}

//documentacion
Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
}
export default Formulario;