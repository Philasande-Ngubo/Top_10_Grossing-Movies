export default function MovieCard(props){

    const isNumeric = (str) => {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }
  
    return Number.isFinite(+str);
    };


    const stars = "★ ".repeat( Math.round(props.ratings/2))
    
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
            <div className="textDes">Ratings: <b><span className="stars">{stars}</span>{+ props.ratings}  </b></div>
            <div className="textDes">Year: <b>{props.year}</b></div>
            <div className="textDes" > Genres: <b>{props.type}</b></div>
            <div className="textDes" >Plot: <b>{props.plot}</b></div>
            </section></a>
    )
}