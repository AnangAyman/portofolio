import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { VolunteeringMentorship } from "@/components/sections/VolunteeringMentorship";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EducationCertifications } from "@/components/sections/EducationCertifications";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Hero />
      <Experience />
      <VolunteeringMentorship />
      <FeaturedProjects />
      <EducationCertifications />
    </main>
  );
}
