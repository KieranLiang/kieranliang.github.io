// ============================================================
// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Blog listing page - clean, book-like layout
// ============================================================

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/lib/posts";

const BLOG_DECORATION = "https://private-us-east-1.manuscdn.com/sessionFile/6vzkwkDoQu1HmU0vuMfnbd/sandbox/UJobabJIobp5iQjbz6PnrY-img-2_1770456919000_na1fn_YmxvZy1kZWNvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnZ6a3drRG9RdTFIbVUwdnVNZm5iZC9zYW5kYm94L1VKb2JhYkpJb2JwNWlRamJ6NlBuclktaW1nLTJfMTc3MDQ1NjkxOTAwMF9uYTFmbl9ZbXh2Wnkxa1pXTnZjbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OosXOrOuv3AiTVWo3hSWvjWvLks6n4wBco8WAczV8p4TIqlHQ9~3923NHCzZybCi790ayiDtI9-EVwXfoSeW9Gy9DDfXy0jzfAztEjCn3mgQeiJWGh6A53R5Y5XkeGlCqBWbUDlqQks6ZKcskC2fMlKRGH5mqVAk6wtk1F5CaDU54KIEZhvxKklLvSyeCTNYkOELAlzJxRW0Uxwj~6Lw0RZTyQIuTC-EhBEeLx34wCaix84nT3Rw3~-F1hg4lu-PC4GopyDh32LcYSOIRrpX4rBIfZhpLjlLXyTgU9SEXW5UsNqwBe2DpOAdNjDZHLPqTtRPcXeOfOdPrZOCWMaPAQ__";

const categories = ["全部", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("全部");

  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts =
    activeCategory === "全部"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-parchment relative">
      <Navbar />

      {/* Decorative image */}
      <div className="absolute right-0 top-32 w-40 h-40 opacity-[0.06] hidden lg:block pointer-events-none">
        <img src={BLOG_DECORATION} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Header */}
      <section className="pt-28 pb-12">
        <div className="max-w-[780px] mx-auto px-6">
          {/* Back to home */}
          <Link href="/">
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-light/60 hover:text-indigo transition-colors duration-300 mb-8">
              <ArrowLeft size={12} />
              返回首页
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-serif-en text-xs text-indigo/60 tracking-[0.25em] uppercase mb-2">
              Blog
            </p>
            <h1 className="font-wenkai text-3xl md:text-4xl text-ink font-bold tracking-wider mb-4">
              博客
            </h1>
            <p className="text-sm text-ink-light/70 leading-relaxed max-w-lg font-light">
              关于 AI 产品、技术探索与职业思考的记录
            </p>

            {/* Decorative line */}
            <div className="mt-6 flex items-center gap-2">
              <div className="w-8 h-px bg-indigo/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              <div className="w-16 h-px bg-indigo/20" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-[780px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-sm border transition-all duration-300 ${activeCategory === cat
                  ? "border-indigo/40 bg-indigo/8 text-indigo"
                  : "border-transparent text-ink-light hover:text-ink hover:border-border/60"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-24">
        <div className="max-w-[780px] mx-auto px-6">
          <div className="space-y-1">
            {filteredPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group relative p-6 border border-transparent hover:border-border/60 rounded-sm transition-all duration-400 hover:bg-card/50">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] px-2 py-0.5 bg-indigo/[0.06] text-indigo/60 rounded-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-ink-light/50 flex items-center gap-1">
                        <Calendar size={10} strokeWidth={1.5} />
                        {post.date}
                      </span>
                      <span className="text-[11px] text-ink-light/50 flex items-center gap-1">
                        <Clock size={10} strokeWidth={1.5} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-wenkai text-lg text-ink font-bold tracking-wide mb-2 group-hover:text-indigo transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* English subtitle */}
                    {post.titleEn && (
                      <p className="font-serif-en text-xs text-ink-light/50 italic mb-3">
                        {post.titleEn}
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="text-sm text-ink-light/70 leading-relaxed line-clamp-2 mb-4 font-light">
                      {post.excerpt}
                    </p>

                    {/* Tags & Read more */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 bg-ink/3 text-ink-light/70 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-xs text-indigo/50 group-hover:text-indigo transition-colors duration-300">
                        阅读
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="font-wenkai text-ink-light">暂无该分类的文章</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
