import { blogPosts } from "../data/siteContent";

function Blog() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900">FleetMind AI Blog</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Explore practical insights on AI fleet optimization, safety, maintenance, and customer
        experience.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              {post.category}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
