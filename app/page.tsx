import BlogSection from "@/containers/BlogSection";
import ExperienceSection from "@/containers/ExperienceSection";
import HeroSection from "@/containers/HeroSection";
import ProjectsSection from "@/containers/ProjectsSection";
import TopSkillsContainer from "@/containers/TopSkillsContainer";

export default function Home() {
  return (
    <section className=" max-w-4xl mx-auto">
      <HeroSection />
      <TopSkillsContainer />
      <ExperienceSection />
      <ProjectsSection />
      <BlogSection />
    </section>
  );
}
