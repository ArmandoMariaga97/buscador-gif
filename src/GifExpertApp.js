import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GridGif } from './components/GridGif';

const GifExpertApp = props => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2> Gif Expert App </h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            { categories.map( ( category ) => (
                <GridGif 
                    key={ category }
                    category={ category }/>
            ) ) }
        </>
    )
}


export default GifExpertApp;
