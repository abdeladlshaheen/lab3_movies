import { Link } from "react-router-dom";
export default function Movie (props)
{  
    return (
       
        <div className="card " style={{height:'700px'}}>
            <div className="card-header">
                <h2>{props.data.original_title}</h2>
            </div>
            <div className="card-body">
                <p><span className="padge padge-primary h6 text-primary bg-light p-1  rounded">Popularity : </span>{props.data.popularity}</p>
                <p><span className="padge padge-primary h6 text-primary bg-light p-1  rounded">Language : </span>{props.data.original_language}</p>
                <p><span className="padge padge-primary h6 text-primary bg-light p-1  rounded">Description:</span> {props.data.overview}</p>
                <p><span className="padge padge-primary h6 text-primary bg-light p-1  rounded">release date :</span> {props.data.release_date}</p>
                <p><span className="padge padge-primary h6 text-primary bg-light p-1  rounded">Vote :</span> {props.data.vote_average > 6 ? "very Good": props.data.vote_average > 4 ? "Good": props.data.vote_average >2 ? "Bad" : "" }</p>
            </div>
            <div className="card-footer">
                <h2><Link className="btn btn-success mx-auto" to={`/movie/${props.data.id}`}>Show Movie Details</Link></h2>
            </div>
        </div>
    );
}