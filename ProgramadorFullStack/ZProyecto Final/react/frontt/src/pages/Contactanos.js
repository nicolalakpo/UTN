import React from "react"
import { useState } from "react";
import axios from "axios";


const Contactanos = (props) => {


    const initialForm = {
        nombre: '',
        telefono: '',
        mails: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await 
    axios.post('http://localhost:3000/api/contacto', formData);   
        setSending(false)
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return (

        <>
            <div className="fondo">

            </div>


            <div className="Contacto">




                <div>
                    <h1>Mandame tu comentario</h1>

                    <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
                        {/* <p>
                            <label for="text">Mail</label>
                            <br />
                            <input type="text" Mail placeholder="Su Mail" value={formData.email} onChange = {handleChange} />
                        </p> */}
                        <p>
                            <label for="nombre">Nombre</label>
                            <br />
                            <input type="text" name="nombre" placeholder="Su nombre" value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <br />
                            <input type="text" name="telefono" placeholder="Su telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="mails">Mail</label>
                            <br />
                            <input type="text" name="mails" placeholder="Su Mail" value={formData.mails} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <br />
                            <textarea name="mensaje" placeholder="mensaje.." value={formData.mensaje} onChange={handleChange}  ></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>

                    </form>

                    {sending ? <p>Enviando..</p> : null}
                    {msg ? <p>{msg}</p> : null}


                </div>

                <div className="OtrosContactos">


                    <h1>
                        Otras Formas de Contactarme
                    </h1>
                    <ul>
                        <li>Telefono: 0800 666 1234</li>
                        <li>Instagram: Lehmann's Cakes and cookies</li>
                    </ul>

                </div>
            </div>




        </>
    )
}
export default Contactanos;

