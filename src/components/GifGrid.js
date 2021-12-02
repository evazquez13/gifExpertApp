import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrifItems } from './GifGrifItems';

export const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDownBig">{category}</h3>
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
