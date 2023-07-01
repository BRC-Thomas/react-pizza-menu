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
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza, index) => {
                return <Card key={index} pizza={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 😢</p>
      )}
    </main>
  );
}
