export default function DashboardCard({ title, value, subtitle, icon: Icon, color }) {
  return (
    <article className="card">
      <div className="card-icon" style={{ backgroundColor: `${color}22`, color }}>
        <Icon size={24} />
      </div>
      <div>
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
        <p className="card-subtitle">{subtitle}</p>
      </div>
    </article>
  );
}
