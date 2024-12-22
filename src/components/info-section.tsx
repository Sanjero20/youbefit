interface Props {
  title: string;
  description: string;
}

function InfoSection({ title, description }: Props) {
  return (
    <div>
      <h2 className="card-title">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default InfoSection;
