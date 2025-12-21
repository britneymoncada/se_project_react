import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  return (
    <li className="card">
      <h2 className="card__item">{item.name}</h2>
      <img
        src={item.link}
        alt={item.name}
        className="card__img"
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
