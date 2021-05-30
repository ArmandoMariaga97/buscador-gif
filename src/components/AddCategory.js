import React, { useState }  from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {

    const [category, setCategory] = useState(''); 

    const handleCategory = (e) => {

        setCategory( e.target.value );
        
    }

    const submit = (e) => {
        // evitar que el submit refrezque la pagina
        e.preventDefault();
        // el trim(),nos sirve para quitar los espacios al inicio y final
        if(category.trim().length > 0){
            setCategories( (categories) => [ category, ...categories ] );
            setCategory ( '' );
        }
    }
    
    return (
        <form onSubmit={ submit } >
            <input  type="text" value={ category } onChange={ handleCategory } placeholder="Buscar GIFs " />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
