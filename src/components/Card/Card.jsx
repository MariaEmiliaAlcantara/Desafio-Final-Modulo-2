import "./Card.css";

const Card = () => {
  return (
    <div className="cardWrapper">
      <div className="cardHeader">
        <img
          className="profilePhoto"
          src="../../public/img/antman.png"
          alt=""
        />
        <div className="cardVotes">
          <p>19%</p>
          <p>200.000 votos</p>
        </div>
      </div>
      <div className="cardMain">
        <h3>Batman</h3>
        <p>Não eleito</p>
      </div>
    </div>
  );
};

export default Card;
