export default function Entry(props){
    return(
        <div id={props.key} className="entry">
            <div className="picture-container">
                <img alt={props.img.alt} src={props.img.src}/>
            </div>
            <div className="info-container">
                <div className="location-container">
                    <img className="location" alt="location" src="./img/marker.png"/>
                    <p className="country-location">{props.country}</p>
                    <a href={props.googleMapsLink} >View on Google Maps</a>
                </div>
                <div className="text-container">
                    <h1>{props.title}</h1>
                    <strong>{props.dates}</strong>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}