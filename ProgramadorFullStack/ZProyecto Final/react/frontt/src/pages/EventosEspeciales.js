import React from "react"
const EventosEspeciales = (props) => {
    return (

        <>
            <div className="fondo">

            </div>
            

            <div className="Precentacion">

                <p>

                    Hacemos productos especiales todo el año tales como:
                    <br />
                    Productos navideños: pan dulce, etc.
                    <br />
                    Rosca de pascua y de reyes
                    <br />
                    Dia del padre: picadas
                    <br />
                    catering: fiestas de 15, casamientos, bautismos, etc.
                    <br />
                    Dias patrios: pastelitos


                </p>


            </div>

            <div class="contenedor">



                <div className="info">
                    <h2>

                        Pan Dulce

                    </h2>

                    <p>

                        <br />
                        Chips de chocolate, fruta glaseada o frutos secos.

                    </p>

                </div>


                <img src="IMG/pan-dulce.jpg" alt="" />
            </div>

            <div className="contenedor">
                <div className="info">

                    <h2>

                        Rosca de pascua

                    </h2>

                    <p>

                        <br />
                        Masa.
                        <br />
                        Relleno de crema pastelera o dulce de leche.

                    </p>
                </div>
                <img src="IMG/RoscaDePascua.jpg" alt="" />
            </div>



        </>
    )
}
export default EventosEspeciales;