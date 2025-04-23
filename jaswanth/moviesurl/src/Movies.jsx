import React from 'react';

const MovieCard = (props) => {
    const { title, showtimes, theater, rating, language, genre, isFull, isFree, isPremiere, imageUrl } = props;

    const renderShowtimePills = () => {
        return showtimes.length > 0 ? (
            showtimes.map((time, index) => {
                const hour = parseInt(time.split(':')[0]);
                const isMorning = hour < 12;
                const isAfternoon = hour >= 12 && hour < 17;
                const isEvening = hour >= 17;

                let pillColor;
                if (isMorning) pillColor = 'warning'; // Bootstrap warning for morning
                else if (isAfternoon) pillColor = 'info'; // Bootstrap info for afternoon
                else if (isEvening) pillColor = 'danger'; // Bootstrap danger for evening

                return (
                    <button
                        key={index}
                        className={`btn btn-${pillColor} btn-sm mx-1`}
                        disabled={isFull}
                    >
                        {time}
                    </button>
                );
            })
        ) : (
            <p>No shows available today</p>
        );
    };

    return (
        <div className="m card text-center mb-3 shadow  bg-body-tertiary rounded" style={{ width: '18rem' }}>
            <img src={imageUrl} alt={title} className="card-img-top" style={{height:'200px'}}/>
            <div className="card-body f">
                <h5 className="card-title">
                    {title} 
                    {isPremiere && <span className="badge bg-warning text-dark mx-2">Premiere Only</span>}
                </h5>
                <p className="card-text">🏢 {theater}</p>
                <p className="card-text">🌟 Rating: {rating} / 5</p>
                <p className="card-text">🪙 Language: {language} | Genre: {genre}</p>
                {isFull ? <p className="text-danger">House Full 🔐</p> : isFree && <p className="text-success">Free Show 🆓</p>}
                <div className="showtime-container mb-2">{renderShowtimePills()}</div>
                <button className={`btn ${isFull ? 'btn-danger' : 'btn-primary'}`}>
                    {isFull ? 'House Full' : 'Book Now'}
                </button>
            </div>
        </div>
    );
}

export default MovieCard;