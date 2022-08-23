import React from 'react';

const NovedadItem = (props) =>{
    const {product, description, imagen, mony} = props;


    return(
        <div className='novedades'>
            <h1>{product}</h1>
            <h2>{description}</h2>
            <img src= {imagen} />
            <h2>{mony}</h2>
            {/* <div dangerouslySetInnerHTML={{__html: body}}/> aca nose si le tengo que poner esta linea  */}
            <hr />
            

        </div>
    )
}
export default NovedadItem;