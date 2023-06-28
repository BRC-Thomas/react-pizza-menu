import Card from "../card/Card";

export default function Menu({ pizzaData }) {
  const numPizzas = pizzaData.length;
  //console.log(numPizzas);

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Cuisine italienne authentique. 6 plats créatifs au choix. Pizza
            cuite aux feux de bois, ingrédients biologiques, pizzas d'exception.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
                return <Card key={index} pizza={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>Nous travaillions encore sur le menu veuillez revenir plus tard 😢</p>
      )}
    </main>
  );
}
