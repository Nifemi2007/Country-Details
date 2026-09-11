function Card({ image, country, capital, currency, symbol }) {
  return (
    <div className="card">
      <img src={image} alt="flag-image" />
      <div className="card_info">
        <h3>Country: {country}</h3>
        <p>Capital: {capital}</p>

        <p>
          Currency: {currency} ({symbol})
        </p>
      </div>
    </div>
  );
}

export default Card;
