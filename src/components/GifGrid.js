import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrifItems } from './GifGrifItems';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDownBig">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            
            <div className="card-grid animate__animated animate__flipInY">
                {
                    data.map( img => (<GifGrifItems
                                            key={img.id}
                                            {...img}/>))
                }
                
            </div>
        </>
    )
}

GifGrid.propTypes={
    category: PropTypes.string.isRequired
}
