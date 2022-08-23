import React from "react"
const Contactanos = (props) => {
    return (

        <>
            <div className="fondo">

            </div>


            <div className="Contacto">

                <div>
                    <h1>Mandame tu comentario</h1>

                    <form action="" className="formulario">
                        <p>
                            <label for="text">Mail</label>
                            <br />
                            <input type="text" Mail placeholder="Su Mail" />
                        </p>

                        <p>
                            <label for="text">Nombre</label>
                            <br />
                            <input type="text" Emails placeholder="Su nombre" />
                        </p>


                        <p>
                            <label for="text">Mensaje</label>
                            <br />
                            <textarea name="" placeholder="Comprame@hotmail.com"></textarea>
                        </p>

                        <p>
                            <input type="submit" value="Enviar" />
                        </p>

                    </form>


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

