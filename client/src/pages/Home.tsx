// ============================================================
// Design: 「素笺」Eastern Scholar's Studio Aesthetic
// Layout: Scroll-based single column, max-width ~780px, generous whitespace
// Color: Parchment bg, Ink text, Indigo accent, Gold highlights
// ============================================================

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, ChevronDown, Github, Mail } from "lucide-react";

// Custom X (Twitter) Icon
function XIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Custom Xiaohongshu (小红书) Icon
function XiaohongshuIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z" />
    </svg>
  );
}
import { Link } from "wouter";
import { useRef, useState, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import TypingCarousel from "@/components/TypingCarousel";
import { personalInfo, experiences, educations } from "@/lib/data";
import { blogPosts } from "@/lib/posts";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/6vzkwkDoQu1HmU0vuMfnbd/sandbox/UJobabJIobp5iQjbz6PnrY-img-1_1770456922000_na1fn_aGVyby1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnZ6a3drRG9RdTFIbVUwdnVNZm5iZC9zYW5kYm94L1VKb2JhYkpJb2JwNWlRamJ6NlBuclktaW1nLTFfMTc3MDQ1NjkyMjAwMF9uYTFmbl9hR1Z5YnkxaVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YnYZXzy9xl0YlxR3N8k21xRX6QJ5nORa9k6ZBlCq2KGxcsgk1x6A67n~Ng-gMoT~ePn~iZG1yDPai0Ao1DsSzWd5uBxSEYdmvkc1oCb~pg7MOytNKW7REkUSGHGToiAeqQ6xC6YjWnwE8Ggn2yjtyROrTLu~0IhApy8wTezduslwjLj8vFGt1CR~pP~RNo-Uf7KTM2BLimsewTqy~0vCOKAMaWdk5DAHuh2RkiVOE~6VxEuxW4uy8cwnElfJwdwYiajpiWgWGDVDcJrdSxSjQePlm6XaPZ~9Rri86xdUjxYv53GpsD7ZdzBBgpKb02lbddefjXG0~aq70Eh7fv3oUQ__";

const EXPERIENCE_BG = "https://private-us-east-1.manuscdn.com/sessionFile/6vzkwkDoQu1HmU0vuMfnbd/sandbox/UJobabJIobp5iQjbz6PnrY-img-3_1770456921000_na1fn_ZXhwZXJpZW5jZS1iZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnZ6a3drRG9RdTFIbVUwdnVNZm5iZC9zYW5kYm94L1VKb2JhYkpJb2JwNWlRamJ6NlBuclktaW1nLTNfMTc3MDQ1NjkyMTAwMF9uYTFmbl9aWGh3WlhKcFpXNWpaUzFpWncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Vi5LX2kVUfMuWVrlE8dUEmL55P2HGyfEeC4fgb-~1v5MfamgNHkzppEDseUy7LC40nm7rutTbhczTgIqJsF6ycGZuEHabpWzuWOr9atm7o9Xva2wxbpuWy9OUxekueKaajlD006YWif7jSw-bVnpWywm5FzirUNbuzcW54xIil7J5oRnndcZ41VfxEvKsImwHZQB6y~xKqxQKGsa3aYgqu54aHWOsHmc6dnEEbSKVKQFMi2dKVTC6OF7fxXZ1jPpEZhwD-zCVnuBe6j6YdrZSkqTkRR31JB-TpcvgB-gZmrnacMgjFDJ7xg3wdq62~mpwIRsNUrcZL0WBboJlhEPTA__";

const BLOG_DECORATION = "https://private-us-east-1.manuscdn.com/sessionFile/6vzkwkDoQu1HmU0vuMfnbd/sandbox/UJobabJIobp5iQjbz6PnrY-img-2_1770456919000_na1fn_YmxvZy1kZWNvcmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnZ6a3drRG9RdTFIbVUwdnVNZm5iZC9zYW5kYm94L1VKb2JhYkpJb2JwNWlRamJ6NlBuclktaW1nLTJfMTc3MDQ1NjkxOTAwMF9uYTFmbl9ZbXh2Wnkxa1pXTnZjbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=OosXOrOuv3AiTVWo3hSWvjWvLks6n4wBco8WAczV8p4TIqlHQ9~3923NHCzZybCi790ayiDtI9-EVwXfoSeW9Gy9DDfXy0jzfAztEjCn3mgQeiJWGh6A53R5Y5XkeGlCqBWbUDlqQks6ZKcskC2fMlKRGH5mqVAk6wtk1F5CaDU54KIEZhvxKklLvSyeCTNYkOELAlzJxRW0Uxwj~6Lw0RZTyQIuTC-EhBEeLx34wCaix84nT3Rw3~-F1hg4lu-PC4GopyDh32LcYSOIRrpX4rBIfZhpLjlLXyTgU9SEXW5UsNqwBe2DpOAdNjDZHLPqTtRPcXeOfOdPrZOCWMaPAQ__";

const DIVIDER = "https://private-us-east-1.manuscdn.com/sessionFile/6vzkwkDoQu1HmU0vuMfnbd/sandbox/UJobabJIobp5iQjbz6PnrY-img-5_1770456929000_na1fn_cGF0dGVybi1kaXZpZGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNnZ6a3drRG9RdTFIbVUwdnVNZm5iZC9zYW5kYm94L1VKb2JhYkpJb2JwNWlRamJ6NlBuclktaW1nLTVfMTc3MDQ1NjkyOTAwMF9uYTFmbl9jR0YwZEdWeWJpMWthWFpwWkdWeS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eBlUo598a-2j6E2iZek7OoOjr6uhkY5eris1iKdG2G0sOfoYFs8KlaqLStooJCMs13sqzen4r8sAoUrcQMnZyZeu05Afvs4-Gy5h2ctXUsoRYNFFlGRcqFi815mTeJVNXEN7FQJylSkM97fqcmr484zUbwY3EbzgJxqgIPIUxza7oIAN7i6oHwfiC8JeE4bgTOm~j3HTsEL-UEk8hKHasW2ouPidtnescMeP1riLyx3PHaO8jfuWyxq7A4UtQ11Q7r0NxOX1HuFLVT9r0a16Dj0yAzPPk6Bd4PbE2w~W17alkwT~bWaWnNStAHY~7dMm8tp72YGN9qUXQB1QTn~8mg__";

// Renders a description string: splits on \n, auto-links URLs, and renders **bold** markdown.
const TOKEN_REGEX = /(\*\*[^*]+\*\*|https?:\/\/[^\s，。、；]+)/g;

function renderInline(segment: string, baseKey: string) {
  return segment.split(TOKEN_REGEX).map((part, j) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={`${baseKey}-${j}`}>{part.slice(2, -2)}</strong>;
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${baseKey}-${j}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo/70 underline underline-offset-2 hover:text-indigo transition-colors break-all"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

function renderDescription(text: string) {
  return (
    <span>
      {text.split("\n").map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {renderInline(line, String(i))}
        </span>
      ))}
    </span>
  );
}

const COLLAPSED_HEIGHT = 26; // px, roughly one line of text-sm leading-[1.8]

function ExpandableDescription({ text, id }: { text: string; id: string }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [fullHeight, setFullHeight] = useState(0);
  const lines = text.split("\n");
  const hasMore = lines.length > 1;

  // Measure the full content height on mount and on resize
  const measure = useCallback(() => {
    if (contentRef.current) {
      setFullHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  return (
    <div>
      <div className="relative">
        <div
          ref={contentRef}
          className="text-sm text-ink-light/80 leading-[1.8] font-light overflow-hidden"
          style={{
            maxHeight: expanded ? `${fullHeight}px` : `${COLLAPSED_HEIGHT}px`,
            transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {renderDescription(text)}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-parchment to-transparent pointer-events-none"
          style={{
            opacity: expanded ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1.5 text-xs text-indigo/50 hover:text-indigo/80 transition-colors duration-300 flex items-center gap-1 cursor-pointer"
        >
          <ChevronDown
            size={13}
            strokeWidth={1.5}
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
          {expanded ? '收起' : '展开详情'}
        </button>
      )}
    </div>
  );
}



export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section ref={heroRef} className="relative min-h-[94vh] flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/30 via-parchment/50 to-parchment" />
        </motion.div>

        {/* Vertical decorative text on the right */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block">
          <p
            className="font-wenkai text-[11px] text-indigo/15 tracking-[0.6em]"
            style={{ writingMode: "vertical-rl" }}
          >
            格物致知 · 器以载道
          </p>
        </div>

        {/* Left decorative line */}
        <div className="absolute left-6 md:left-12 top-1/3 bottom-1/3 hidden lg:block">
          <div className="h-full w-px bg-gradient-to-b from-transparent via-indigo/10 to-transparent" />
        </div>

        <motion.div className="relative max-w-[780px] mx-auto px-6 pt-28 pb-20" style={{ opacity: heroOpacity }}>


          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-wenkai text-4xl md:text-5xl lg:text-[3.5rem] text-ink font-bold tracking-wider leading-tight mb-3"
          >
            {personalInfo.nameZh}
          </motion.h1>



          {/* Tags - Typing Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <TypingCarousel
              prefix="AI Native"
              words={["Builder", "Product Manager", "Developer", "Researcher"]}
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-5"
          >
            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-light/50 hover:text-indigo transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} strokeWidth={1.5} />
              </a>
            )}
            {personalInfo.xiaohongshu && (
              <a
                href={personalInfo.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-light/50 hover:text-indigo transition-colors duration-300"
                aria-label="小红书"
              >
                <XiaohongshuIcon size={20} />
              </a>
            )}
            {personalInfo.twitter && (
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-light/50 hover:text-indigo transition-colors duration-300"
                aria-label="X"
              >
                <XIcon size={20} />
              </a>
            )}
            {personalInfo.email && (
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-ink-light/50 hover:text-indigo transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
            )}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[10px] text-indigo/30 tracking-[0.2em] uppercase font-serif-en">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-indigo/25" />
          </motion.div>
        </motion.div>
      </section>



      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-[780px] mx-auto px-6">
          <SectionTitle title="关于我" titleEn="About" subtitle="探索生产力的边界" />

          <ScrollReveal delay={0.1}>
            <div className="relative pl-6 border-l border-indigo/15">
              {/* Bio text */}
              <p className="text-base md:text-[1.05rem] text-ink/80 leading-[2] tracking-wide font-light whitespace-pre-wrap">
                {personalInfo.bio}
              </p>

              {/* Decorative quote mark */}
              <span className="absolute -top-4 -left-3 font-serif-en text-5xl text-indigo/6 select-none leading-none">
                "
              </span>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <ScrollReveal delay={0.2}>
            <div className="mt-14 space-y-3">
              <p className="font-wenkai text-sm text-ink-light/70 tracking-wide flex items-center gap-3">
                <span>技能 · Skills</span>
                <span className="flex-1 h-px bg-border/50" />
              </p>
              {personalInfo.skills.map((skill, i) => (
                <motion.p
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-sm text-ink-light/80 leading-relaxed font-light"
                >
                  {skill}
                </motion.p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section
        id="experience"
        className="py-24 md:py-32 relative"
      >
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.025]">
          <img src={EXPERIENCE_BG} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-[780px] mx-auto px-6">
          <SectionTitle
            title="经历"
            titleEn="Experience"
            subtitle="在实践中探索 AI 的无限可能"
          />

          {/* ── 教育背景 ── */}
          <div className="mb-16">
            <h3 className="font-wenkai text-xl text-ink font-bold tracking-wide mb-8 flex items-center gap-3">
              <span>教育背景</span>
              <span className="flex-1 h-px bg-border/30" />
            </h3>
            <div className="space-y-5">
              {educations.map((edu, i) => (
                <ScrollReveal key={edu.id} delay={i * 0.05}>
                  <div className="flex items-baseline gap-4 pl-2 border-l-2 border-indigo/20">
                    <span className="text-xs text-ink-light/55 flex items-center gap-1.5 font-light shrink-0">
                      <Calendar size={11} strokeWidth={1.5} />
                      {edu.period}
                    </span>
                    <div>
                      <h4 className="font-wenkai text-base text-ink font-bold tracking-wide">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-indigo/60 font-light mt-0.5">{edu.major}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── 实习 & 项目 ── */}
          {['实习经历', '项目经历'].map((category, catIndex) => {
            const categoryExps = experiences.filter(exp => exp.category === category);
            if (categoryExps.length === 0) return null;
            return (
              <div key={category} className="mb-16">
                <h3 className="font-wenkai text-xl text-ink font-bold tracking-wide mb-8 flex items-center gap-3">
                  <span>{category}</span>
                  <span className="flex-1 h-px bg-border/30" />
                </h3>

                <div className="relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo/30 via-indigo/15 to-transparent" />
                  <div className="space-y-10">
                    {categoryExps.map((exp, i) => (
                      <ScrollReveal key={exp.id} delay={catIndex * 0.1 + i * 0.05}>
                        <div className="relative pl-9">
                          <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[1.5px] border-indigo/30 bg-parchment flex items-center justify-center">
                            <div className="w-[5px] h-[5px] rounded-full bg-indigo/50" />
                          </div>
                          <div className="group">
                            <div className="flex items-center gap-3 mb-2.5">
                              <span className="text-xs text-ink-light/60 flex items-center gap-1.5 font-light">
                                <Calendar size={11} strokeWidth={1.5} />
                                {exp.period}
                              </span>
                            </div>
                            <h4 className="font-wenkai text-lg text-ink font-bold tracking-wide mb-1 group-hover:text-indigo transition-colors duration-400">
                              {exp.company}
                            </h4>
                            <p className="text-sm text-indigo/60 mb-3 font-light">{exp.role}</p>
                            <div className="mb-3">
                              <ExpandableDescription text={exp.description} id={exp.id} />
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] px-2.5 py-0.5 bg-indigo/[0.04] text-indigo/50 rounded-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== BLOG PREVIEW SECTION ===== */}
      <section className="py-24 md:py-32 relative">
        {/* Decorative image */}
        <div className="absolute right-0 bottom-0 w-48 h-48 opacity-[0.06] hidden lg:block">
          <img src={BLOG_DECORATION} alt="" className="w-full h-full object-contain" />
        </div>

        <div className="relative max-w-[780px] mx-auto px-6">
          <SectionTitle
            title="博客"
            titleEn="Blog"
            subtitle="分享 AI 产品、技术与职业思考"
          />

          {/* Blog posts grid */}
          <div className="grid gap-8 md:gap-10">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.article
                    className="group cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category & Date */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs px-2.5 py-1 bg-indigo/10 text-indigo/60 rounded-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-ink-light/50 flex items-center gap-1.5">
                        <Clock size={10} strokeWidth={1.5} />
                        {post.date}
                      </span>
                      <span className="text-xs text-ink-light/50">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-wenkai text-xl md:text-2xl text-ink font-bold tracking-wide mb-3 group-hover:text-indigo transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-ink-light/70 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags & CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 bg-indigo/[0.04] text-indigo/50 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.span
                        className="text-xs text-indigo/60 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        阅读 <ArrowRight size={12} />
                      </motion.span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-border/20 mt-6 group-hover:bg-indigo/10 transition-colors duration-300" />
                  </motion.article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* View all button */}
          <ScrollReveal delay={0.3}>
            <motion.div className="mt-12 text-center">
              <Link href="/blog">
                <motion.span
                  className="inline-flex items-center gap-2 text-sm text-indigo/70 hover:text-indigo transition-colors duration-300 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  查看全部文章
                  <ArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
