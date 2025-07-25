// src/app/blog/page.tsx
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

// Tailwind：用 3 列响应式网格；可根据喜好调整
export default function BlogList() {
  // 按日期倒序排列
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Blog</h1>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="rounded-lg border p-4 shadow-sm transition hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString("zh-CN")}
            </p>
            <p className="mt-4 line-clamp-3 text-gray-700">{post.summary}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}