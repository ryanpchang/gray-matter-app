import { Link } from 'react-router-dom';

const sections = [
    { title: "General Topics", path: "/GeneralTopics"},
    { title: "Survival Guide for EMR", path: "/SurvivalGuideEMR"},
    { title: "Labs", path: "/Labs"},
    { title: "Neurology", path: "/Neurology"},
    { title: "Psychiatry", path: "/Psychiatry"},
    { title: "ObGyn: Labor & Delivery", path: "/ld"},
    { title: "ObGyn: Obstetrics", path: "/ob"},
    { title: "ObGyn: Gynecology", path: "/gyn"},
    { title: "Family and Community Medicine", path: "/family"},
    { title: "Pediatrics: Pediatric Hospital Medicine", path: "/PHM"},
    { title: "Pediatrics: Neonatology", path: "/neo"},
    { title: "Pediatrics: Community", path: "/peds"},
    { title: "Internal Medicine", path: "/im"},
    { title: "Surgery", path: "/surgery"},
]

const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Site</h1>
      {sections.map((section) => (
        <div key={section.path} style={{ marginBottom: 10 }}>
          <Link to={section.path}>
            <button style={{ width: '100%', padding: 10 }}>
              {section.title}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;