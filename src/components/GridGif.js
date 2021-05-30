import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGifs.js';

export const GridGif = ( { category } ) => {

    // se utiliza para no renderizar lo que este dentro en cada cambio del component
    useEffect( () => getGif( category ).then( setImages ), [ ]);

    const [images, setImages] = useState([]);

    return (
        <>
            <h2 className="animate__animated animate__fadeInDown"> { category } </h2>
            {/* gif Item */}
            <div className="row">
                { images.map( ( { url, title, id } ) => {
                    // const complete = url.current && url.current.complete;
                    return <div key={ id } className="col-md-3 p-3 animate__animated animate__fadeInDown">
                                <div className=" card-j bg-white rounded">
                                    {/* si la imagen no ha cargado */}
                                    <img loading="lazy" height="200px" src={ url } className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title text-gray"> { title } </h5>
                                    </div>
                                </div>
                            </div>
                } ) }
            </div>



        </>
    )
}
