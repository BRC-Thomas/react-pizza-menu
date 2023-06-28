export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour < closeHour;


  return (
    <footer className="footer">
      {isOpen ? (
            <div className="order">
            <p>
              Nous sommes ouvert de {openHour}:00  jusqu'à {closeHour}:00. Commandez en ligne où venez sur place
            </p>
            <button className="btn">Order</button>
          </div>
      ) : (
        <p>
          Nous sommes actuellement fermés, votre pizzeria favorite est ouverte
          entre {openHour}:00 et {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
