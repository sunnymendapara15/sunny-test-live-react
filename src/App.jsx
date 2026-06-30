import { FiUsers, FiBriefcase, FiBarChart2, FiShield } from 'react-icons/fi';
import DashboardCard from './components/DashboardCard';
import TeamTable from './components/TeamTable';
import Highlights from './components/Highlights';

const metricCards = [
  {
    title: 'Total Employees',
    value: '528',
    subtitle: '2.3% increase since last month',
    icon: FiUsers,
    color: '#4c6ef5'
  },
  {
    title: 'Open Requisitions',
    value: '18',
    subtitle: '6 roles hiring this quarter',
    icon: FiBriefcase,
    color: '#10b981'
  },
  {
    title: 'Attrition Rate',
    value: '7.4%',
    subtitle: 'Stable vs last period',
    icon: FiShield,
    color: '#f97316'
  },
  {
    title: 'Engagement Score',
    value: '86/100',
    subtitle: 'Top quartile peer benchmark',
    icon: FiBarChart2,
    color: '#8b5cf6'
  }
];

const workforceSnapshot = [
  { name: 'Engineering', headcount: 210, satisfaction: 92, cadence: 'Weekly' },
  { name: 'People & Culture', headcount: 46, satisfaction: 89, cadence: 'Biweekly' },
  { name: 'Sales', headcount: 120, satisfaction: 85, cadence: 'Weekly' },
  { name: 'Customer Success', headcount: 95, satisfaction: 90, cadence: 'Monthly' }
];

const teamMembers = [
  { name: 'Taylor Banks', role: 'Engineering Manager', location: 'Remote — Austin', status: 'Onboarding', trend: '+2 new directs' },
  { name: 'Amelia Roy', role: 'People Partner', location: 'New York', status: 'Coaching', trend: '8 check-ins this month' },
  { name: 'Luis Herrera', role: 'Chief of Staff', location: 'San Francisco', status: 'Planning OKRs', trend: 'Next quarter draft ready' },
  { name: 'Nia Patel', role: 'Talent Acquisition Lead', location: 'Remote — London', status: 'Interviewing', trend: '4 offers extended' }
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">People Operations — Board View</p>
          <h1>HR Intelligence at a glance</h1>
        </div>
        <button className="primary">Refresh data</button>
      </header>

      <section className="cards-grid">
        {metricCards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </section>

      <section className="panel-grid">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Workforce Snapshot</p>
              <h2>Department health</h2>
            </div>
            <span className="badge">Updated 2h ago</span>
          </div>
          <Highlights departments={workforceSnapshot} />
        </div>

        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Leadership radar</p>
              <h2>Team focus spots</h2>
            </div>
            <span className="badge muted">Agenda synced w/ PeopleBP</span>
          </div>
          <TeamTable members={teamMembers} />
        </div>
      </section>
    </div>
  );
}
