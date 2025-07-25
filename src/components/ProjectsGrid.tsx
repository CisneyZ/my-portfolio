type Project = {
  title: string;
  description: string;
  href: string;
  img: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Site",
    description: "用 Next.js & Tailwind 构建的响应式作品集",
    href: "https://portfolio.example.com",
    img: "/vercel.svg",
  },
  {
    title: "Todo App",
    description: "使用 React + Zustand 的极简代办清单",
    href: "#",
    img: "/next.svg",
  },
  {
    title: "3D Card Demo",
    description: "CSS ✕ Three.js 实现沉浸式卡片交互",
    href: "#",
    img: "/globe.svg",
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 bg-white">
      <h2 className="text-center text-3xl font-bold">精选项目</h2>

      <div className="mt-14 grid gap-10 px-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group rounded-xl border p-6 shadow-sm transition hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={p.img}
              alt={p.title}
              className="h-36 w-full object-contain transition group-hover:scale-105"
            />
            <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-500">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
