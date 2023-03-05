export default function Guarantee({ img, title, description }) {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
