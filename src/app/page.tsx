"use client";

import LanguageSelector, { useLanguage } from "@/components/language";
import translations from "@/utils/translate";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Codepen,
  ExternalLink,
  FileCode,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projetos = [
  {
    image: "https://imgur.com/Er8SWII.png",
    link: "https://fisioadapt.com.br/",
    name: "Fisioadapt",
    color: "#00a89b",
    desc_pt_br:
      "Site de contato para a empresa Fisioadapt onde você pode saber mais sobre os serviços e falar com os profissionais da empresa.",
    desc_eng:
      "Contact site for the company Fisioadapt where you can learn more about the services and speak with the professionals of the company.",
    stack:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    github_link: "",
  },
  {
    image: "https://imgur.com/QbiW4eA.png",
    link: "https://valorant-web.vercel.app/",
    name: "Valorant",
    color: "#e373db",
    desc_pt_br:
      "Site sobre jogo Valorant, um FPS tático, com muita diversão e competitividade. (desktop)",
    desc_eng:
      "Site about Valorant game, a tactical FPS, with lots of fun and competitiveness. (desktop)",
    stack:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    github_link: "https://github.com/AlehSouza/Valorant-Web",
  },

  {
    image: "https://imgur.com/om543O1.png",
    link: "https://password-generator-green-xi.vercel.app/",
    name: "Gerador de Senhas",
    color: "#a4ffaf",
    desc_pt_br:
      "Site para gerar senhas seguras com caracteres da sua preferência completamente customizável.",
    desc_eng:
      "Site to generate secure passwords with customizable characters of your choice.",
    stack:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    github_link: "https://github.com/AlehSouza/generate-password",
  },
  {
    image: "https://imgur.com/3aAOhYf.png",
    link: "https://flag-game-lake.vercel.app/",
    name: "Flag Game",
    color: "#f32b1e",
    desc_pt_br: "Um jogo de adivinhação de bandeiras feito em React.",
    desc_eng: "A flag guessing game made in React.",
    stack:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    github_link: "https://github.com/AlehSouza/flag-game",
  },
  // {
  //   image: "https://imgur.com/gLBnTnh.png",
  //   link: "#",
  //   name: "Portfólio",
  //   color: "#d72448",
  //   desc_pt_br: "Este é o meu portfólio, você está aqui agora 🤘!",
  //   desc_eng: "This is my portfolio, you are here now 🤘!",
  //   stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
  //   github_link: "https://github.com/AlehSouza/Portfolio",
  // },
  {
    image: "https://imgur.com/rVe6AjW.png",
    link: "https://genshin-impact-app.vercel.app/",
    name: "Genshin Impact",
    color: "#1e3cd5",
    desc_pt_br:
      "Site sobre Genshin Impact, um jogo RPG. Feito em VueJS, treinando alguns conhecimentos na stack. (Desktop)",
    desc_eng:
      "Site about Genshin Impact, an RPG game. Made in VueJS, training some knowledge on the stack. (desktop)",
    stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    github_link: "https://github.com/AlehSouza/Genshin-Impact",
  },
  {
    image: "https://imgur.com/yKDig1O.png",
    link: "https://chronno-game.vercel.app/",
    name: "Chronno Trigger",
    color: "#a63816",
    desc_pt_br:
      "Uma simulação simbólica de uma das lutas de um jogo que fez parte da minha infância.",
    desc_eng:
      "A symbolic simulation of one of the fights in a game that was part of my childhood.",
    stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    github_link: "https://github.com/AlehSouza/Chronno-Game",
  },
  {
    image: "https://imgur.com/fQtjSBe.png",
    link: "https://drpedro.vercel.app/",
    name: "Dr. Pedro ",
    color: "#00726d",
    desc_pt_br:
      "Site oficial do Dr. Pedro, onde você pode conhecer os serviços oferecidos, entre em contato com a equipe e agende sua consulta.",
    desc_eng:
      "Dr. Pedro's official website, where you can learn about the services offered, contact the team, and schedule your appointment.",
    stack:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    github_link: "",
  },
  {
    image: "https://imgur.com/iLCnLsu.png",
    link: "https://pokedex-six-delta.vercel.app/",
    name: "Pokedex",
    color: "#e0707c",
    desc_pt_br:
      "Uma pokedex feita em VueJs apenas para Desktop, quando estava iniciando meus estudos nessa stack.",
    desc_eng:
      "A pokedex made in VueJs just for Desktop, when I was starting my studies on this stack.",
    stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
    github_link: "https://github.com/AlehSouza/Pokedex",
  },
  {
    image: "https://imgur.com/LAB9fS0.png",
    link: "https://cade-alehsouza.vercel.app/",
    name: "Cadê?",
    color: "#f7ba00",
    desc_pt_br:
      "Um jogo feito em HTML, CSS, JS com o objetivo de replicar uma experiência do jogo 'cadê' das revistas Recreio.",
    desc_eng:
      "A game made in HTML, CSS, JS with the aim of replicating the experience of the 'cadê' game from Recreio magazines.",
    stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    github_link: "https://github.com/AlehSouza/Cade",
  },
  {
    image: "https://imgur.com/CkEwehW.png",
    link: "https://youtu.be/1eeQ0NzDASE",
    name: "Culture",
    color: "#2d9c47",
    desc_pt_br:
      "Culture é um aplicativo desenvolvido para meu TCC do ensino técnico. Atualmente não possui um site, mas um vídeo pitch explicativo.",
    desc_eng:
      "Culture is an application developed for my technical education TCC. It currently does not have a website, but an explanatory video pitch.",
    stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    github_link: "",
  },
  // {
  //   image: "https://imgur.com/euoNAnL.png",
  //   link: "",
  //   name: "Async Project",
  //   color: "#000000",
  //   desc_pt_br: "Site ainda em desenvolvimento.",
  //   desc_eng: "Website still under development.",
  //   stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  //   github_link: ""
  // },
  // {
  //   image: "https://imgur.com/tG1RHqN.png",
  //   link: "",
  //   name: "Qual será o próximo?",
  //   color: "#000000",
  //   desc_pt_br: "Vamos esperar pra ver o que vem por ai... 👨‍🔧",
  //   desc_eng: "",
  // },
];

const midias = [
  {
    link: "https://github.com/AlehSouza",
    icon: Github,
    alt: "Github",
  },
  {
    link: "https://codepen.io/blezale/",
    icon: Codepen,
    alt: "Codepen",
  },
  {
    link: "https://www.linkedin.com/in/alehsouza/",
    icon: Linkedin,
    alt: "Linkedin",
  },
  {
    links: {
      pt_br:
        "https://drive.google.com/file/d/1FA-7cgJtdzwLI6MqhESpVRS0qEOCE0ov/view?usp=sharing",
      eng: "https://drive.google.com/file/d/1MTum0Cns5gGsRVnDv04r91DrwSe8jBgd/view?usp=sharing",
    },
    icon: FileCode,
    alt: "Currículo",
  },
];

const sections = [
  {
    id: 1,
    title: "sessão 1",
    subtitle: "Bem-vindo ao meu portfólio",
    color: "bg-white",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "sessão 2",
    subtitle: "Sobre mim",
    color: "bg-black",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "sessão 3",
    subtitle: "Projetos",
    color: "bg-white",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "sessão 4",
    subtitle: "Habilidades",
    color: "bg-black",
    textColor: "text-white",
  },
  {
    id: 5,
    title: "sessão 5",
    subtitle: "Tecnologias",
    color: "bg-white",
    textColor: "text-black",
  },
  {
    id: 6,
    title: "sessão 6",
    subtitle: "Contato",
    color: "bg-black",
    textColor: "text-white",
  },
];

const technologies = [
  {
    name: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
  },
  {
    name: "React",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    name: "Vue",
    image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
  },
  {
    name: "NodeJs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  {
    name: "MongoDB",
    image: "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png",
  },
  {
    name: "Git",
    image: "https://miro.medium.com/max/383/1*co_1qORNdM0PI1nvCp7Iig.png",
  },
  {
    name: "Vercel",
    image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
  },
];

interface GitHubUser {
  avatar_url: string;
  name: string;
  bio: string;
  // adicione mais campos conforme necessário
}

interface Job {
  title: string;
  period: string;
  description: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [githubData, setGithubData] = useState<GitHubUser | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/alehsouza"
        );
        setGithubData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchGithubData();
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollTop;
    const viewportHeight = window.innerHeight;
    const currentSection = Math.round(scrollPosition / viewportHeight);
    setActiveSection(currentSection);
  };

  return (
    <div className="relative w-full max-w-[100dvw] overflow-x-hidden">
      <div
        className="snap-y snap-mandatory h-[100dvh] w-[100dvw] overflow-y-scroll overflow-x-hidden scrollbar-hide"
        onScroll={handleScroll}
      >
        {/* sessão 1 */}
        <motion.div
          key={sections[0].id}
          className={`snap-start h-[100dvh] w-[100dvw] flex items-center justify-center px-4 sm:px-8 lg:px-24 overflow-hidden ${sections[0].color} border-t-5 border-[#1e1e1e]`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center flex flex-col items-center color-red-500 text-black w-full max-w-full px-4">
            <div className="icon-profile w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[326px] xl:h-[326px] rounded-full border-3 sm:border-4 md:border-6 lg:border-8 border-black overflow-hidden">
              <Image
                width={326}
                height={326}
                src={githubData?.avatar_url || ""}
                alt="perfil"
              />
            </div>
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold my-3 sm:my-4 md:my-6 lg:my-8 ${sections[0].textColor}`}
            >
              {githubData?.name || "Alexandre Souza"}
            </motion.h1>
            <div className="flex gap-3 sm:gap-4">
              {midias.map((midia, index) => (
                <motion.a
                  key={index}
                  href={
                    midia.links
                      ? midia.links[language === "pt-br" ? "pt_br" : "eng"]
                      : midia.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-2 sm:p-3 bg-black rounded-full text-white hover:scale-110 transition-transform"
                >
                  {<midia.icon size={20} className="sm:w-6 sm:h-6" />}
                </motion.a>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-sm sm:text-base md:text-lg lg:text-xl py-4 sm:py-6 md:py-8 lg:py-10 text-center max-w-full ${sections[0].textColor} opacity-90`}
              dangerouslySetInnerHTML={{
                __html:
                  translations.bio[language === "pt-br" ? "pt_br" : "eng"],
              }}
            />
          </div>
        </motion.div>

        {/* sessão 2 */}
        <motion.div
          key={sections[1].id}
          className={`snap-start h-[100dvh] w-[100dvw] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8 md:py-10 flex items-center justify-center overflow-hidden ${sections[1].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center text-left gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 w-full max-w-7xl h-full">
            <div className="lg:max-w-[600px] xl:max-w-[700px] flex flex-col items-center lg:items-start order-2 lg:order-1 flex-1 min-w-0 max-w-full overflow-y-auto scrollbar-hide">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 ${sections[0].textColor} opacity-90 break-words`}
                dangerouslySetInnerHTML={{
                  __html:
                    translations.title_about[
                      language === "pt-br" ? "pt_br" : "eng"
                    ],
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`w-full text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-full ${sections[0].textColor} opacity-90 leading-relaxed break-words overflow-y-auto scrollbar-hide`}
                dangerouslySetInnerHTML={{
                  __html:
                    translations.about[language === "pt-br" ? "pt_br" : "eng"],
                }}
              />
            </div>
            <div className="flex w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px] xl:w-[350px] xl:h-[350px] rounded-full border-3 sm:border-4 md:border-5 lg:border-6 xl:border-8 border-white overflow-hidden flex-shrink-0 order-1 lg:order-2 mt-3">
              <Image
                width={455}
                height={455}
                src="https://imgur.com/hYiGJ56.jpg"
                alt="perfil"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",

                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* sessão 3 */}
        <motion.div
          key={sections[2].id}
          className={`snap-start h-[100dvh] w-[100dvw] flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-24 overflow-hidden ${sections[2].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-full mx-auto py-4 sm:py-6 lg:py-8 flex flex-col items-center h-full justify-center">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 ${sections[2].textColor} text-center px-2 break-words`}
            >
              {translations.jobs_title[language === "pt-br" ? "pt_br" : "eng"]}
            </motion.h1>
            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-12 ${sections[2].textColor} opacity-80 text-center max-w-2xl px-3 sm:px-4 break-words`}
            >
              {
                translations.subtitle_trajectory[
                  language === "pt-br" ? "pt_br" : "eng"
                ]
              }
            </motion.p>

            {/* Timeline Mobile */}
            <div className="block md:hidden w-full max-w-sm mx-auto px-3 overflow-hidden">
              <div className="relative max-h-[55vh] overflow-y-auto scrollbar-hide py-2 pr-4">
                {/* Linha vertical */}
                <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>
                
                {translations.jobs_subtitle_trajectory[
                  language === "pt-br" ? "pt_br" : "eng"
                ].map((job: Job, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="relative pl-7 pb-5 last:pb-2"
                  >
                    {/* Ponto na timeline */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-black border-[3px] border-white shadow-lg z-10"></div>
                    
                    {/* Conteúdo */}
                    <div className="bg-white rounded-lg shadow-md border border-black/5 p-2.5 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-white bg-black px-2 py-0.5 rounded">
                          {job.period}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-black mb-1 leading-tight">
                        {job.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cards Desktop */}
            <div className="hidden md:flex flex-wrap justify-center max-h-[45vh] overflow-y-auto overflow-x-visible w-full max-w-full px-2 p-3">
              {translations.jobs_subtitle_trajectory[
                language === "pt-br" ? "pt_br" : "eng"
              ].map((job: Job, index: number) => (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 w-full max-w-[280px] sm:w-48 md:w-52 text-center border-t-2 border-black transition-shadow relative overflow-visible select-none"
                >
                  <div className="pointer w-[15px] h-[15px] rounded-xl bg-black absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></div>
                  <p className="text-gray-800 text-xs font-semibold bg-gray-100 px-2 py-1 mb-2 rounded">
                    {job.period}
                  </p>
                  <h3 className="text-sm sm:text-base font-bold text-black mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* sessão 4 - Projetos */}
        <motion.div
          key={sections[3].id}
          className={`snap-start h-[100dvh] w-[100dvw] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28 select-none overflow-hidden ${sections[3].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-[1300px] mx-auto py-3 sm:py-4 md:py-5 lg:py-6 flex flex-col items-center h-full justify-center">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 ${sections[3].textColor} text-center px-2 break-words`}
            >
              {language === "pt-br" ? "Meus Projetos" : "My Projects"}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-10 ${sections[3].textColor} opacity-80 text-center max-w-2xl px-3 sm:px-4 break-words`}
            >
              {language === "pt-br"
                ? "Explore alguns dos meus projetos mais relevantes e suas tecnologias"
                : "Explore some of my most relevant projects and their technologies"}
            </motion.p>

            <div className="w-full max-w-full px-4 sm:px-3 md:px-4">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={12}
                slidesPerView={1}
                loop={projetos.length > 3}
                centeredSlides={false}
                grabCursor={true}
                simulateTouch={true}
                allowTouchMove={true}
                loopAdditionalSlides={2}
                watchSlidesProgress={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                    loop: projetos.length > 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    loop: projetos.length > 2,
                  },
                  1024: {
                    slidesPerView: projetos.length >= 2 ? 2 : projetos.length,
                    spaceBetween: 20,
                    loop: projetos.length > 2,
                  },
                  1280: {
                    slidesPerView: projetos.length >= 3 ? 3 : projetos.length,
                    spaceBetween: 22,
                    loop: projetos.length > 3,
                  },
                  1440: {
                    slidesPerView: projetos.length >= 3 ? 3 : projetos.length,
                    spaceBetween: 24,
                    loop: projetos.length > 3,
                  },
                }}
                className="project-swiper"
                style={{
                  paddingTop: "8px",
                  paddingRight: "4px",
                  paddingBottom: "4px",
                  paddingLeft: "4px",
                }}
              >
                {projetos.map((projeto, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`relative rounded-xl sm:rounded-2xl overflow-hidden h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px] group transform transition-transform duration-300 hover:scale-[1.02] ${
                        projeto.link && projeto.link !== "#"
                          ? "cursor-pointer"
                          : "cursor-default"
                      }`}
                      style={{
                        background: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url('${projeto.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      onClick={() => {
                        if (projeto.link && projeto.link !== "#") {
                          window.open(
                            projeto.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      {/* Background Image with Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

                      {/* Tech Stack Icons - Top Left */}
                      <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 flex flex-col gap-2 z-10">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 shadow-lg">
                          <Image
                            src={projeto.stack}
                            alt="Stack"
                            width={20}
                            height={20}
                            className="rounded w-4 h-4 sm:w-5 sm:h-5"
                          />
                        </div>
                      </div>

                      {/* Action Buttons - Top Right */}
                      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex gap-1.5 sm:gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        {projeto.link && projeto.link !== "#" && (
                          <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
                          >
                            <ExternalLink size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                          </a>
                        )}
                        {projeto.github_link && (
                          <a
                            href={projeto.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-colors"
                          >
                            <Github size={16} className="text-white sm:w-[18px] sm:h-[18px]" />
                          </a>
                        )}
                      </div>

                      {/* Content - Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 z-10">
                        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-1.5 sm:mb-2 md:mb-3">
                          <div
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: projeto.color }}
                          />
                          <span className="text-white/70 text-[10px] sm:text-xs md:text-sm font-medium truncate">
                            {projeto.stack.includes("react")
                              ? "React Project"
                              : projeto.stack.includes("vue")
                              ? "Vue.js Project"
                              : projeto.stack.includes("5968292")
                              ? "Vanilla JS Project"
                              : "Web Project"}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3 leading-tight break-words">
                          {projeto.name}
                        </h3>

                        <p className="text-white/80 text-[11px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 break-words">
                          {language === "pt-br"
                            ? projeto.desc_pt_br
                            : projeto.desc_eng}
                        </p>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* sessão 5 */}
        <motion.div
          key={sections[4].id}
          className={`snap-start h-[100dvh] w-[100dvw] flex flex-col items-center justify-center px-4 lg:px-24 overflow-hidden ${sections[4].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col justify-center items-center text-center max-w-full mx-auto px-4 w-full">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 ${sections[4].textColor}`}
            >
              {language === "pt-br" ? "Tecnologias" : "Technologies"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-sm sm:text-base md:text-lg mb-8 sm:mb-12 ${sections[4].textColor} opacity-80 text-center max-w-2xl px-4`}
            >
              {language === "pt-br"
                ? "Aqui estão algumas das tecnologias que utilizo com mais frequência nos meus projetos."
                : "Here are some of the technologies I use most frequently in my projects."}
            </motion.p>

            {/* Primeira linha - 5 tecnologias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-3xl"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-3 sm:p-4 md:p-6  w-12 sm:w-20 md:w-24 lg:w-28"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain mb-2"
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* sessão 6 */}
        <motion.div
          key={sections[5].id}
          className={`snap-start bg-black text-white h-[100dvh] w-[100dvw] flex flex-col justify-between overflow-hidden ${sections[5].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Conteúdo principal centralizado */}
          <div className="flex-1 flex flex-col items-center justify-center text-center max-w-full mx-auto py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 lg:px-12 xl:px-24 overflow-y-auto scrollbar-hide">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 ${sections[5].textColor} break-words px-2`}
            >
              {language === "pt-br" ? "Contato" : "Contact"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-sm sm:text-base md:text-lg lg:text-xl ${sections[5].textColor} opacity-90 mb-4 sm:mb-6 md:mb-8 break-words px-2`}
            >
              {language === "pt-br"
                ? "Entre em contato comigo agora mesmo!"
                : "Get in touch with me right now!"}
            </motion.p>

            {/* Links sociais */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 flex-wrap justify-center"
            >
              {midias.map((midia, index) => (
                <a
                  key={index}
                  href={
                    midia.links
                      ? midia.links[language === "pt-br" ? "pt_br" : "eng"]
                      : midia.link
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 flex-shrink-0"
                >
                  <midia.icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </motion.div>

            {/* Formulário de contato */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="w-full max-w-[90%] sm:max-w-md space-y-2.5 sm:space-y-3 md:space-y-4 px-2"
            >
              <input
                type="text"
                placeholder={language === "pt-br" ? "Nome" : "Name"}
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 bg-white text-black rounded-none border-none outline-none placeholder-gray-500 text-xs sm:text-sm md:text-base"
              />
              <input
                type="email"
                placeholder={language === "pt-br" ? "E-mail" : "Email"}
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 bg-white text-black rounded-none border-none outline-none placeholder-gray-500 text-xs sm:text-sm md:text-base"
              />
              <textarea
                rows={3}
                placeholder={language === "pt-br" ? "Mensagem" : "Message"}
                className="w-full px-3 py-2 sm:px-4 sm:py-2.5 md:py-3 bg-white text-black rounded-none border-none outline-none placeholder-gray-500 resize-none text-xs sm:text-sm md:text-base"
              />
              <button
                type="submit"
                className="w-full bg-[#FF0040] cursor-pointer text-white py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 transition-colors duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-medium"
              >
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transform rotate-45"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                {language === "pt-br" ? "Enviar" : "Send"}
              </button>
            </motion.form>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-0 py-3 sm:py-4 md:py-6 text-[10px] sm:text-xs md:text-sm text-gray-400 px-3 sm:px-6 md:px-12 lg:px-16 border-t border-[#1e1e1e] flex-shrink-0"
          >
            <span className="text-center sm:text-left break-words">Alexandre Souza</span>
            <span className="text-center break-words">alexandrehg2001@gmail.com</span>
            <span className="text-center sm:text-right break-words">
              © 2025 copyright Alexandre Souza
            </span>
          </motion.footer>
        </motion.div>
      </div>

      {/* Dots de navegação */}
      <div className="fixed lg:right-6 right-3 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ scale: 1 }}
            animate={{
              scale: activeSection === index ? 1.2 : 1,
              backgroundColor:
                activeSection === index
                  ? section.color === "bg-white"
                    ? "#000000"
                    : "#ffffff"
                  : "#666666",
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
            }}
            className={`w-3 h-3 rounded-full cursor-pointer
              hover:scale-125 transition-transform
              ${
                activeSection === index
                  ? "shadow-lg"
                  : "opacity-50 hover:opacity-75"
              }
            `}
            onClick={() => {
              const container = document.querySelector(".snap-y");
              const viewportHeight = window.innerHeight;
              container?.scrollTo({
                top: index * viewportHeight,
                behavior: "smooth",
              });
            }}
          />
        ))}
      </div>

      <div
        className={`fixed left-4 top-4 z-50 text-md ${
          sections[activeSection].color === "bg-black"
            ? "text-white"
            : "text-black"
        }`}
      >
        <LanguageSelector />
      </div>
    </div>
  );
}
