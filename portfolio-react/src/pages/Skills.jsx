import SkillsComponent from "../components/SkillsGrid";
import SkillsOrbit from "../components/SkillsOrbit";

export default function Skills() {
  return (
    <div className="page">
      <SkillsOrbit />
      <SkillsComponent />
    </div>
  );
}
