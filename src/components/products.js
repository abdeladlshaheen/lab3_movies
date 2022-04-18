import axiosInstance from './../assets/axonconfig';
import { useState } from 'react';
import { useEffect } from 'react';
import Movie from './movieCard';
export default function Products(){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        axiosInstance.get('/movie/popular?api_key=669a95234065985ab65b7e5af31ec334')
        .then((res)=>setMovies(res.data.results))
        .catch((error)=>{console.log('error with getting movies',error)});
    },[]);
    return (
        <div className="row p-4">
            {
                movies.map((movie)=>{
                    return (
                    <div className="col-4 my-3" key={movie.id}  >
                        <Movie data ={movie} />
                    </div>
                    );
                })
            } 
        
        </div>
    );
}