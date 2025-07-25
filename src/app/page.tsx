import HeroSection from "@/components/HeroSection";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsGrid />

      <footer className="py-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Cisney • Powered by Next.js & Vercel
      </footer>
    </>
  );
}
