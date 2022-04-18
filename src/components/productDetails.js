import axiosInstance from './../assets/axonconfig';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Movie from './movieCard';

export default function ProductDetails(){
    const [movie,setMovie] = useState({});
    const params = useParams();
    useEffect(() =>{
        axiosInstance.get(`/movie/${params.id}?api_key=669a95234065985ab65b7e5af31ec334`)
        .then((res) =>setMovie(res.data))
        .catch((error) =>console.log(error));
        },[]);
    return (
        <>
            <Movie data={movie} />
        </>
    );
}