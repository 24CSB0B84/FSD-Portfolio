function SkillCard({ title, items }) {
  return (
    <article className="card skill-card">
      <h3>{title}</h3>
      <p>{items}</p>
    </article>
  );
}
export default SkillCard;
