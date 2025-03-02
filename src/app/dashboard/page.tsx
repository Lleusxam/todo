
import { JSX } from "react";
import Card from "@components/Card";

interface ArtificialCard {
    title: string,
    content: string,
    imageUrl: string
};


function Dashboard(): JSX.Element{

    const artificialCards:ArtificialCard[] = [
      {
        title: "Card 1",
        content: "Exemplo",
        imageUrl: "https://via.placeholder.com/300",
      },
      {
        title: "Card 2",
        content: "Outro exemplo",
        imageUrl: "https://via.placeholder.com/300",
      },
      {
        title: "Card 3",
        content: "Mais um",
        imageUrl: "https://via.placeholder.com/300",
      },
      {
        title: "Card 4",
        content: "Último da linha",
        imageUrl: "https://via.placeholder.com/300",
      },
      {
        title: "Card 5",
        content: "Nova linha",
        imageUrl: "https://via.placeholder.com/300",
      },
    ];

  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
      >
        <div className="columns is-multiline">
          {artificialCards.map((card, index) => (
            <div key={index} className="column is-one-quarter">
              <Card {...card} /> {/* Spread Props */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;