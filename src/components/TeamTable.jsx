export default function TeamTable({ members }) {
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <p>Member</p>
        <p>Status</p>
        <p>Notes</p>
      </div>
      <div className="table-body">
        {members.map((member) => (
          <div key={member.name} className="table-row">
            <div>
              <p className="member-name">{member.name}</p>
              <p className="member-meta">{member.role}</p>
              <span className="member-location">{member.location}</span>
            </div>
            <p className="status-pill">{member.status}</p>
            <p className="member-trend">{member.trend}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
