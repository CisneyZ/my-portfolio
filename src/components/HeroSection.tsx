export default function HeroSection() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-sky-50 to-white">
      <h1 className="text-5xl font-extrabold tracking-tight">
        👋 Hi, I’m <span className="text-sky-600">Cisney</span>
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
        前端工程师 / 交互设计爱好者。这里记录我的作品和技术随笔。
      </p>

      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/#projects"
          className="rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          查看作品
        </a>
        <a
          href="/blog"
          className="rounded-md border px-6 py-3 border-gray-300 hover:bg-gray-100"
        >
          阅读博客
        </a>
      </div>
    </section>
  );
}
