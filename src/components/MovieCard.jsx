export default function MovieCard(props){
    return (
        <section className="movie-card">
            <div className="imgFrame">
                <img  className="movie-image" src={props.imgSrc} alt={props.title+" image"} />
                </div>
            <h2>{props.title} </h2>
            <div className="textDes">Ratings: <b>{props.ratings}</b></div>
            <div className="textDes">Year: <b>{props.year}</b></div>
            <div className="textDes" > Genres: <b>{props.type}</b></div>
            <div className="textDes" >Plot: <b>{props.plot}</b></div>
            </section>
    )
}