interface CardProps {
  title: string;
  description: string;
}

function Card({ title, description }: CardProps) {
  return (
    <div className="card h-full w-full border">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}

export default Card;
