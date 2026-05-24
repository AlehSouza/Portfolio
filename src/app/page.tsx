"use client";

import LanguageSelector, { useLanguage } from "@/components/language";
import translations from "@/utils/translate";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Codepen,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/* ---------------------------------------------------------------------- */
/*                                 DATA                                    */
/* ---------------------------------------------------------------------- */

const projetos = [
  {
    // image: "",
    image:"",
    link: "https://fisioadapt.com.br/",
    name: "Fisioadapt",
    role: { pt_br: "Site institucional", eng: "Institutional website" },
    year: "2024",
    stack: ["React", "Next.js"],
    desc_pt_br:
      "Site institucional da empresa Fisioadapt, com foco em apresentar serviços e converter contato.",
    desc_eng:
      "Institutional website for Fisioadapt, focused on presenting services and driving contact.",
    github_link: "",
  },
  {
    // image: "",
    image:"",
    link: "https://drpedro.vercel.app/",
    name: "Dr. Pedro",
    role: { pt_br: "Site institucional", eng: "Institutional website" },
    year: "2024",
    stack: ["React", "Next.js"],
    desc_pt_br:
      "Site oficial do Dr. Pedro: serviços, contato e agendamento de consultas.",
    desc_eng:
      "Dr. Pedro's official website: services, contact and appointment scheduling.",
    github_link: "",
  },
  {
    // image: "https://imgur.com/QbiW4eA.png",
    image:"",
    link: "https://valorant-web.vercel.app/",
    name: "Valorant",
    role: { pt_br: "Experiência interativa", eng: "Interactive experience" },
    year: "2023",
    stack: ["React"],
    desc_pt_br:
      "Experimento visual sobre o jogo Valorant — FPS tático — com foco em desktop.",
    desc_eng:
      "Visual experiment around the Valorant game — tactical FPS — desktop-first.",
    github_link: "https://github.com/AlehSouza/Valorant-Web",
  },
  {
    // image: "https://imgur.com/om543O1.png",
    image:"",
    link: "https://password-generator-green-xi.vercel.app/",
    name: "Password Generator",
    role: { pt_br: "Ferramenta", eng: "Tool" },
    year: "2023",
    stack: ["React"],
    desc_pt_br:
      "Gerador de senhas seguro e totalmente customizável por tipo de caractere.",
    desc_eng:
      "A secure and fully customizable password generator by character type.",
    github_link: "https://github.com/AlehSouza/generate-password",
  },
  {
    // image: "https://imgur.com/3aAOhYf.png",
    image:"",
    link: "https://flag-game-lake.vercel.app/",
    name: "Flag Game",
    role: { pt_br: "Jogo casual", eng: "Casual game" },
    year: "2023",
    stack: ["React"],
    desc_pt_br: "Um jogo de adivinhação de bandeiras feito em React.",
    desc_eng: "A flag guessing game made in React.",
    github_link: "https://github.com/AlehSouza/flag-game",
  },
  {
    // image: "https://imgur.com/rVe6AjW.png",
    image:"",
    link: "https://genshin-impact-app.vercel.app/",
    name: "Genshin Impact",
    role: { pt_br: "Experiência interativa", eng: "Interactive experience" },
    year: "2022",
    stack: ["Vue"],
    desc_pt_br:
      "Site sobre o RPG Genshin Impact — construído em Vue.js para estudo de stack.",
    desc_eng:
      "Site about the Genshin Impact RPG — built in Vue.js as a stack study.",
    github_link: "https://github.com/AlehSouza/Genshin-Impact",
  },
  {
    // image: "https://imgur.com/yKDig1O.png",
    image:"",
    link: "https://chronno-game.vercel.app/",
    name: "Chronno Trigger",
    role: { pt_br: "Mini-jogo", eng: "Mini-game" },
    year: "2022",
    stack: ["JavaScript"],
    desc_pt_br:
      "Simulação simbólica de uma das lutas do jogo que marcou minha infância.",
    desc_eng:
      "Symbolic simulation of one of the fights from a game that marked my childhood.",
    github_link: "https://github.com/AlehSouza/Chronno-Game",
  },
  {
    // image: "https://imgur.com/iLCnLsu.png",
    image:"",
    link: "https://pokedex-six-delta.vercel.app/",
    name: "Pokedex",
    role: { pt_br: "Experimento", eng: "Experiment" },
    year: "2022",
    stack: ["Vue"],
    desc_pt_br:
      "Uma Pokedex em Vue.js para desktop — projeto inicial de estudos da stack.",
    desc_eng:
      "A Pokedex built with Vue.js for desktop — early study project on the stack.",
    github_link: "https://github.com/AlehSouza/Pokedex",
  },
  {
    // image: "https://imgur.com/LAB9fS0.png",
    image:"",
    link: "https://cade-alehsouza.vercel.app/",
    name: "Cadê?",
    role: { pt_br: "Mini-jogo", eng: "Mini-game" },
    year: "2021",
    stack: ["JavaScript"],
    desc_pt_br:
      "Jogo em HTML, CSS e JS que replica a experiência do 'cadê' das revistas Recreio.",
    desc_eng:
      "HTML, CSS and JS game replicating the 'cadê' experience from Recreio magazines.",
    github_link: "https://github.com/AlehSouza/Cade",
  },
  {
    // image: "https://imgur.com/CkEwehW.png",
    image:"",
    link: "https://youtu.be/1eeQ0NzDASE",
    name: "Culture",
    role: { pt_br: "Aplicativo (TCC)", eng: "Application (Capstone)" },
    year: "2020",
    stack: ["JavaScript"],
    desc_pt_br:
      "Aplicativo desenvolvido para meu TCC do ensino técnico — disponível em vídeo pitch.",
    desc_eng:
      "App developed for my technical school capstone — available as a video pitch.",
    github_link: "",
  },
];

const midias = [
  {
    link: "https://github.com/AlehSouza",
    icon: Github,
    alt: "Github",
    label: "Github",
  },
  {
    link: "https://www.linkedin.com/in/alehsouza/",
    icon: Linkedin,
    alt: "Linkedin",
    label: "LinkedIn",
  },
  {
    link: "https://codepen.io/blezale/",
    icon: Codepen,
    alt: "Codepen",
    label: "Codepen",
  },
  {
    links: {
      pt_br:
        "https://drive.google.com/file/d/1FA-7cgJtdzwLI6MqhESpVRS0qEOCE0ov/view?usp=sharing",
      eng: "https://drive.google.com/file/d/1MTum0Cns5gGsRVnDv04r91DrwSe8jBgd/view?usp=sharing",
    },
    icon: FileText,
    alt: "Currículo",
    label: "Currículo",
  },
];

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "Figma",
  "Vercel",
];

const NAV_ITEMS: { id: string; key: "work" | "about" | "career" | "stack" | "contact" }[] = [
  { id: "work", key: "work" },
  { id: "about", key: "about" },
  { id: "career", key: "career" },
  { id: "stack", key: "stack" },
  { id: "contact", key: "contact" },
];

/* ---------------------------------------------------------------------- */
/*                              COMPONENT                                  */
/* ---------------------------------------------------------------------- */

export default function Home() {
  const { language } = useLanguage();
  const isPt = language === "pt-br";
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const currentYearShort = useMemo(
    () => String(currentYear).slice(-2),
    [currentYear]
  );

  // Embla carousel for projects
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, slidesToScroll: 1 },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const now = useMemo(() => {
    const d = new Date();
    return d.toLocaleString(isPt ? "pt-BR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  }, [isPt]);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen w-full overflow-x-hidden">
      {/* ============================ TOP NAV ============================ */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-line">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 text-[11px] font-mono uppercase tracking-[0.18em]">
          <div className="flex items-center gap-3">
            <span className="opacity-50">[ A — &apos;{currentYearShort} ]</span>
            <span className="hidden sm:inline opacity-90">Alexandre Souza</span>
          </div>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="link-underline opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {translations.nav[item.key][isPt ? "pt_br" : "eng"]}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* ============================ HERO ============================ */}
      <section
        id="top"
        className="relative min-h-[100dvh] w-full pt-24 sm:pt-28 pb-16 px-5 sm:px-8 lg:px-12 grid-hairlines"
      >
        <div className="mx-auto max-w-[1440px] h-full flex flex-col justify-between gap-12">
          {/* Top row: kicker */}
          <div className="flex items-start justify-between gap-6 text-[11px] font-mono uppercase tracking-[0.18em]">
            <div className="flex items-center gap-3 opacity-60">
              <span className="inline-block w-2 h-2 rounded-full bg-foreground animate-pulse" />
              <span>
                {translations.hero_status[isPt ? "pt_br" : "eng"]} ·{" "}
                {currentYear}
              </span>
            </div>
            <div className="hidden md:block opacity-60 text-right max-w-[40ch]">
              {translations.hero_kicker[isPt ? "pt_br" : "eng"]}
            </div>
          </div>

          {/* Headline */}
          <div className="grid grid-cols-12 gap-6 items-start">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-12 text-[clamp(2.2rem,6.2vw,5.6rem)] leading-[1.05] tracking-[-0.02em] font-light text-foreground max-w-[20ch]"
            >
              {translations.hero_headline[isPt ? "pt_br" : "eng"]}
            </motion.h1>

            {/* Social blocks */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="col-span-12 mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
            >
              {midias.map((m, i) => {
                const href = m.links ? m.links[isPt ? "pt_br" : "eng"] : m.link;
                const Icon = m.icon;
                return (
                  <li key={m.alt}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-3 px-4 py-3 border border-line hover:border-foreground/60 transition-colors"
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        <span className="opacity-50 font-mono text-[11px] uppercase tracking-[0.18em]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon size={16} className="shrink-0" />
                        <span className="text-[11px] font-mono uppercase tracking-[0.18em] truncate">
                          {m.label}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                      />
                    </a>
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* Bottom info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[11px] font-mono uppercase tracking-[0.18em] pt-10 border-t border-line">
            <div>
              <div className="opacity-50 mb-1">
                {isPt ? "Função" : "Role"}
              </div>
              <div>{translations.hero_role[isPt ? "pt_br" : "eng"]}</div>
            </div>
            <div>
              <div className="opacity-50 mb-1">
                {isPt ? "Localização" : "Location"}
              </div>
              <div>São Paulo, BR</div>
            </div>
            <div>
              <div className="opacity-50 mb-1">
                {isPt ? "Experiência" : "Experience"}
              </div>
              <div>5+ {isPt ? "anos" : "yrs"}</div>
            </div>
            <div className="text-right md:text-left">
              <div className="opacity-50 mb-1">
                {isPt ? "Atualizado" : "Updated"}
              </div>
              <div>{now}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================ MARQUEE ============================ */}
      <section
        aria-hidden
        className="border-y border-line py-6 overflow-hidden"
      >
        <div className="flex whitespace-nowrap marquee-track">
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Vue.js",
                "Angular",
                "Node.js",
                "Tailwind",
                "Design Systems",
                "UI / UX",
                "Performance",
              ].map((w, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="text-[clamp(1.6rem,4vw,3rem)] tracking-[-0.02em] font-light px-8 opacity-90"
                >
                  {w}
                  <span className="opacity-40 mx-6">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ============================ ABOUT ============================ */}
      <Section id="about" index="01" label={translations.index_labels.about[isPt ? "pt_br" : "eng"]} title={translations.title_about[isPt ? "pt_br" : "eng"]}>
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <div
              className="text-[clamp(1.05rem,1.5vw,1.45rem)] leading-[1.55] font-light text-foreground/90 space-y-5 [&_span]:block"
              dangerouslySetInnerHTML={{
                __html: translations.about[isPt ? "pt_br" : "eng"],
              }}
            />
          </div>

          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-line">
              <Image
                src="/me.jpeg"
                alt="Alexandre Souza"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-[11px] font-mono uppercase tracking-[0.18em] flex items-center justify-between opacity-60">
              <span>Alexandre Souza</span>
              <span>
                {isPt ? "Retrato" : "Portrait"} — {currentYear}
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================ WORK ============================ */}
      <Section
        id="work"
        index="02"
        label={translations.index_labels.work[isPt ? "pt_br" : "eng"]}
        title={translations.title_projects[isPt ? "pt_br" : "eng"]}
        subtitle={translations.subtitle_projects[isPt ? "pt_br" : "eng"]}
      >
        <div
          className="relative"
          onMouseEnter={() => autoplay.current?.stop()}
          onMouseLeave={() => autoplay.current?.play()}
        >
          {/* Top controls bar */}
          <div className="flex items-center justify-between gap-6 mb-8 sm:mb-10 text-[11px] font-mono uppercase tracking-[0.18em]">
            <div className="flex items-center gap-2 opacity-70">
              <span>{String(selectedIndex + 1).padStart(2, "0")}</span>
              <span className="opacity-40">/</span>
              <span>{String(projetos.length).padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label={isPt ? "Anterior" : "Previous"}
                onClick={scrollPrev}
                className="inline-flex items-center justify-center w-10 h-10 border border-line hover:border-foreground/60 transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label={isPt ? "Próximo" : "Next"}
                onClick={scrollNext}
                className="inline-flex items-center justify-center w-10 h-10 border border-line hover:border-foreground/60 transition-colors cursor-pointer"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Embla viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-6 md:-ml-7 lg:-ml-8">
              {projetos.map((p, i) => {
                const clickable = !!(p.link && p.link !== "#");
                return (
                  <div
                    key={p.name}
                    className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6 md:pl-7 lg:pl-8"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.6 }}
                      className={`project-card group relative h-full ${
                        clickable ? "cursor-pointer" : "cursor-default"
                      }`}
                    >
                      {/* Stretched link */}
                      {clickable && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${p.name} — ${
                            p.role[isPt ? "pt_br" : "eng"]
                          }`}
                          className="absolute inset-0 z-10"
                        />
                      )}

                      {/* Header */}
                      <div className="flex items-baseline justify-between gap-4 mb-4 text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
                        <span>
                          ({String(i + 1).padStart(2, "0")}) — {p.year}
                        </span>
                        <span className="truncate">{p.stack.join(" / ")}</span>
                      </div>

                      {/* Image (or beige placeholder) */}
                      <div className="relative w-full aspect-[16/11] overflow-hidden border border-line bg-surface">
                        {p.image ? (
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                            className="object-cover project-img"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ backgroundColor: "var(--beige)" }}
                          >
                            <span
                              className="font-mono uppercase tracking-[0.18em] text-[11px] sm:text-xs"
                              style={{ color: "var(--beige-ink)" }}
                            >
                              {p.name}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="mt-5 flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          <h3 className="text-[clamp(1.25rem,1.8vw,1.65rem)] leading-tight tracking-[-0.01em] font-light flex items-center gap-3">
                            {p.name}
                            {clickable && (
                              <ArrowUpRight
                                size={18}
                                className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                              />
                            )}
                          </h3>
                          <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
                            {p.role[isPt ? "pt_br" : "eng"]}
                          </p>
                          <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                            {isPt ? p.desc_pt_br : p.desc_eng}
                          </p>
                        </div>

                        {p.github_link ? (
                          <a
                            href={p.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-20 shrink-0 inline-flex items-center justify-center w-10 h-10 border border-line hover:border-foreground/60 transition-colors bg-background"
                            aria-label={`${p.name} — source code`}
                          >
                            <Github size={16} />
                          </a>
                        ) : null}
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination — thin bars (editorial) */}
          <div className="flex items-center justify-center gap-2 mt-12">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${isPt ? "Ir para slide" : "Go to slide"} ${
                  index + 1
                }`}
                onClick={() => scrollTo(index)}
                className={`work-bullet ${
                  index === selectedIndex ? "work-bullet-active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ============================ CAREER ============================ */}
      <Section
        id="career"
        index="03"
        label={translations.index_labels.career[isPt ? "pt_br" : "eng"]}
        title={translations.title_trajectory[isPt ? "pt_br" : "eng"]}
        subtitle={translations.subtitle_trajectory[isPt ? "pt_br" : "eng"]}
      >
        <ol className="divide-y divide-line border-y border-line">
          {translations.jobs_subtitle_trajectory[isPt ? "pt_br" : "eng"].map(
            (job, i) => (
              <motion.li
                key={job.title + i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-12 gap-4 sm:gap-6 py-7 sm:py-9 items-start group"
              >
                <div className="col-span-2 sm:col-span-1 text-[11px] font-mono uppercase tracking-[0.18em] opacity-50 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 sm:col-span-3 text-[11px] font-mono uppercase tracking-[0.18em] opacity-70 pt-1">
                  {job.period}
                </div>
                <div className="col-span-12 sm:col-span-8">
                  <h3 className="text-[clamp(1.5rem,2.4vw,2.4rem)] tracking-[-0.01em] leading-tight font-light">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-foreground/70 leading-relaxed max-w-[68ch]">
                    {job.description}
                  </p>
                </div>
              </motion.li>
            )
          )}
        </ol>
      </Section>

      {/* ============================ STACK ============================ */}
      <Section
        id="stack"
        index="04"
        label={translations.index_labels.stack[isPt ? "pt_br" : "eng"]}
        title={translations.title_technologies[isPt ? "pt_br" : "eng"]}
        subtitle={translations.subtitle_technologies[isPt ? "pt_br" : "eng"]}
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-line">
          {technologies.map((t, i) => (
            <li
              key={t}
              className="flex items-center justify-between gap-4 px-5 py-6 border-r border-b border-line group hover:bg-surface transition-colors"
            >
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base sm:text-lg font-light tracking-tight">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ============================ CONTACT ============================ */}
      <section
        id="contact"
        className="border-t border-line px-5 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-12"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] opacity-60 mb-10">
            <span>(05)</span>
            <span>—</span>
            <span>{translations.index_labels.contact[isPt ? "pt_br" : "eng"]}</span>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            {/* Headline + links */}
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-[clamp(2.2rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.02em] font-light">
                {translations.send_mail_title[isPt ? "pt_br" : "eng"]}
              </h2>
              <p className="mt-6 max-w-[48ch] text-base sm:text-lg text-foreground/70 leading-relaxed">
                {translations.send_mail_span[isPt ? "pt_br" : "eng"]}
              </p>

              <a
                href="mailto:alexandrehg2001@gmail.com"
                className="mt-10 inline-flex items-center gap-3 text-[clamp(1.1rem,1.8vw,1.6rem)] font-light tracking-tight link-underline"
              >
                alexandrehg2001@gmail.com
                <ArrowUpRight size={20} className="opacity-60" />
              </a>

              <ul className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md">
                {midias.map((m) => {
                  const href = m.links ? m.links[isPt ? "pt_br" : "eng"] : m.link;
                  const Icon = m.icon;
                  return (
                    <li key={m.alt}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 border border-line hover:border-foreground/60 transition-colors text-[11px] font-mono uppercase tracking-[0.18em]"
                      >
                        <Icon size={14} />
                        <span>{m.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Form */}
            <form
              className="col-span-12 lg:col-span-5 flex flex-col gap-4 lg:pl-12 lg:border-l border-line"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field
                label={isPt ? "Nome" : "Name"}
                placeholder={isPt ? "Seu nome completo" : "Your full name"}
                name="name"
                type="text"
              />
              <Field
                label={isPt ? "E-mail" : "Email"}
                placeholder="you@example.com"
                name="email"
                type="email"
              />
              <FieldTextarea
                label={isPt ? "Mensagem" : "Message"}
                placeholder={
                  isPt ? "Conte um pouco sobre o projeto..." : "Tell me a bit about the project..."
                }
                name="message"
              />
              <button
                type="submit"
                className="mt-4 group inline-flex items-center justify-between gap-3 px-5 py-4 border border-foreground/80 hover:bg-foreground hover:text-background transition-colors text-[12px] font-mono uppercase tracking-[0.18em]"
              >
                <span>{isPt ? "Enviar mensagem" : "Send message"}</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Footer */}
          <footer className="mt-24 pt-8 border-t border-line grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
            <span>Alexandre Souza</span>
            <span className="text-center">
              {isPt
                ? "Construído com cuidado em Next.js"
                : "Built with care in Next.js"}
            </span>
            <span className="md:text-right">
              © {currentYear} — All rights reserved
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}

/* ---------------------------------------------------------------------- */
/*                          Small inline pieces                            */
/* ---------------------------------------------------------------------- */

function Section({
  id,
  index,
  label,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-line px-5 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-24 sm:pb-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 mb-12 sm:mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-60 flex items-center gap-3">
              <span>({index})</span>
              <span>—</span>
              <span>{label}</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-[clamp(1.8rem,4vw,3.6rem)] leading-[1.08] tracking-[-0.02em] font-light max-w-[24ch]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-foreground/60 text-base sm:text-lg max-w-[60ch] leading-relaxed">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  name,
  type,
}: {
  label: string;
  placeholder: string;
  name: string;
  type: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="bg-transparent border-b border-line py-3 px-1 text-base outline-none focus:border-foreground/80 transition-colors placeholder:text-foreground/30"
      />
    </label>
  );
}

function FieldTextarea({
  label,
  placeholder,
  name,
}: {
  label: string;
  placeholder: string;
  name: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] opacity-60">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="bg-transparent border-b border-line py-3 px-1 text-base outline-none focus:border-foreground/80 transition-colors resize-none placeholder:text-foreground/30"
      />
    </label>
  );
}
