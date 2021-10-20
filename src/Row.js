import React, {useState, useEffect} from 'react';
import instance from './axios';

function Row({title, fetchUrl}){

    const baseURL= "https://www.themoviedb.org/t/p/original/";
    const [movies, setMovies]=useState([]);

    useEffect(()=>{

        async function fetchData(){
            const request = await instance.get(fetchUrl);
            //console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
        
    }, [fetchUrl]);

    
    
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie)=>(
                    <img src={`${baseURL}${movie.poster_path}`} alt={movie.name} />
                ))}
            

            </div>
            
        </div>
    )
}

export default Row;