

    export const getGif = async( category ) => {
        const res       = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&api_key=xZxkp6bmYkbX25gtCmmuD58cyFfQhxvo&limit=8`);
        const { data }  = await res.json();
        // de la data estamos tomando solo lo que necesitamos y lo almacenamos en
        // la const gif, que tendra un array de objetos
        const gifs = data.map( (gif) => {
            return {
                id      : gif.id,
                title   : gif.title,
                url     : gif.images.fixed_height_small.url
            }
        } );
        
        console.log( data );


       return gifs;
    }