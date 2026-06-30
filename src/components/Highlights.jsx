export default function Highlights({ departments }) {
  return (
    <div className="highlights">
      {departments.map((dept) => (
        <div key={dept.name} className="highlight-row">
          <div>
            <p className="highlight-title">{dept.name}</p>
            <p className="highlight-caption">Cadence: {dept.cadence}</p>
          </div>
          <div className="highlight-stats">
            <div>
              <span className="highlight-label">Headcount</span>
              <strong>{dept.headcount}</strong>
            </div>
            <div>
              <span className="highlight-label">Satisfaction</span>
              <strong>{dept.satisfaction}%</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
