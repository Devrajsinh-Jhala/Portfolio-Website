import ExperienceSection from "@/containers/ExperienceSection";
import HeroSection from "@/containers/HeroSection";
import TopSkillsContainer from "@/containers/TopSkillsContainer";

export default function Home() {
  return (
    <section className=" max-w-4xl mx-auto">
      <HeroSection />
      <TopSkillsContainer />
    </section>
  );
}
