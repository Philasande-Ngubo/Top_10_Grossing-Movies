export default function MovieCard(props){
    return (
        <section className="movie-card">
            <div className="imgFrame">
                <img  className="movie-image" src={props.imgSrc} alt="Movie" />
                </div>
            <h2>Wuthering Heights </h2>
            <div className="textDes">Ratings: <b>6.3</b></div>
            <div className="textDes">Year: <b>2026</b></div>
            <div className="textDes" > Genres: <b>bam bam</b></div>
            <div className="textDes" >Plot: <b>A passionate and tumultuous love story set against the backdrop of the Yorkshire moors, exploring the intense and destructive relationship between Heathcliff and Catherine Earnshaw.</b></div>
            </section>
    )
}