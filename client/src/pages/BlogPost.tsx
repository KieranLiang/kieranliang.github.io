// ============================================================
// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Blog post detail page - book-like reading experience with progress bar
// ============================================================

import { useParams, Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Streamdown } from "streamdown";
import { useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/posts";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  const articleRef = useRef(null);

  // Scroll to top when navigating to a new blog post
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!post) {
    return (
      <div className="min-h-screen bg-parchment">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-wenkai text-2xl text-ink mb-4">文章未找到</h1>
          <Link href="/blog">
            <span className="text-sm text-indigo hover:underline">返回博客列表</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find adjacent posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-parchment" ref={articleRef}>
      <Navbar />

      {/* Reading progress bar */}
      <motion.div
        className="fixed top-14 left-0 h-[2px] bg-gradient-to-r from-indigo/60 to-indigo/30 z-40"
        style={{ width: progressWidth }}
      />

      <article className="pt-28 pb-24">
        <div className="max-w-[680px] mx-auto px-6">
          {/* Back link */}
          <Link href="/blog">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 text-xs text-ink-light/60 hover:text-indigo transition-colors duration-300 mb-12"
            >
              <ArrowLeft size={12} />
              <span className="tracking-wide">返回博客</span>
            </motion.span>
          </Link>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            {/* Category */}
            <span className="text-[11px] px-2.5 py-0.5 bg-indigo/[0.06] text-indigo/60 rounded-sm font-medium">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-wenkai text-2xl md:text-[1.75rem] text-ink font-bold tracking-wider leading-snug mt-5 mb-3">
              {post.title}
            </h1>

            {/* English title */}
            {post.titleEn && (
              <p className="font-serif-en text-sm text-ink-light/40 italic mb-5">
                {post.titleEn}
              </p>
            )}

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-ink-light/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={11} strokeWidth={1.5} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={11} strokeWidth={1.5} />
                {post.readTime}
              </span>
            </div>

            {/* Decorative divider */}
            <div className="mt-10 flex items-center gap-2">
              <div className="w-8 h-px bg-indigo/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              <div className="flex-1 h-px bg-border/40" />
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-custom"
          >
            <Streamdown>{post.content}</Streamdown>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 pt-8 border-t border-border/40"
          >
            <p className="text-[11px] text-ink-light/50 mb-3 tracking-wide uppercase font-serif-en">Tags</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 border border-border/50 text-ink-light/60 rounded-sm hover:border-indigo/30 hover:text-indigo transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation between posts */}
          <div className="mt-12 pt-8 border-t border-border/40 grid grid-cols-2 gap-6">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`}>
                <div className="group text-left">
                  <span className="text-[10px] text-ink-light/40 flex items-center gap-1 mb-2 tracking-wide">
                    <ArrowLeft size={10} />
                    上一篇
                  </span>
                  <p className="font-wenkai text-sm text-ink-light/70 group-hover:text-indigo transition-colors duration-300 line-clamp-2 leading-relaxed">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`}>
                <div className="group text-right">
                  <span className="text-[10px] text-ink-light/40 flex items-center gap-1 justify-end mb-2 tracking-wide">
                    下一篇
                    <ArrowRight size={10} />
                  </span>
                  <p className="font-wenkai text-sm text-ink-light/70 group-hover:text-indigo transition-colors duration-300 line-clamp-2 leading-relaxed">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
