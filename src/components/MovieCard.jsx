export default function MovieCard(props){
    return (
        <a 
        href={"https://www.youtube.com/results?search_query="+props.title.replaceAll(" ","+")+"+Trailer"} 
        target="_blank" 
        rel="noopener noreferrer">
            <section className="movie-card">
            <div className="imgFrame">
                <img  className="movie-image" src={props.imgSrc} alt={props.title+" image"} />
                </div>
            <h2>{props.title} </h2>
            <div className="textDes">Ratings: <b>{props.ratings}</b></div>
            <div className="textDes">Year: <b>{props.year}</b></div>
            <div className="textDes" > Genres: <b>{props.type}</b></div>
            <div className="textDes" >Plot: <b>{props.plot}</b></div>
            </section></a>
    )
}