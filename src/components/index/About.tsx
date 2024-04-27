import AboutCard from "@/components/AboutCard";
import { Tech } from "../../../typings";
import { motion } from "framer-motion";

export default function About() {

  let frontendTech: Tech[] = [
    { title: "HTML", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> },
    { title: "CSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> },
    { title: "TailwindCSS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /> },
    { title: "React", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> },
    { title: "NextJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" /> },
  ]

  let backendTech: Tech[] = [
    { title: "JavaScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /> },
    { title: "TypeScript", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /> },
    { title: "NodeJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> },
    { title: "MongoDB", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" /> },
    { title: "MySQL", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" /> },
    { title: "DiscordJS", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" /> },
    { title: "Java", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" /> },
  ]

  let otherTech: Tech[] = [
    { title: "Git", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" /> },
    { title: "Github", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /> },
    { title: "NPM", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" /> },
    { title: "Visual Studio Code", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" /> },
    { title: "IntelliJ", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" /> },
    { title: "PyCharm", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" /> },
    { title: "Cloudflare", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/me2uv8xk95n010sdwz.png" /> },
    { title: "Vercel", icon: <svg className="h-6 w-6 fill-[#000000]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg> },
    { title: "Linux", icon: <img draggable={false} loading="lazy" className="h-6 w-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" /> },
  ]

  return (
    <>
      <section id='about' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          About Me
        </motion.h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <AboutCard
            title="Overall"
            description="Ich habe mit 10 angefangen zu Programmieren und habe angefangen mit Python bin dann auch Javascript umgestiegen und dann auf Java und später kam noch ein bisschen React und NextJS dazu."
            direction="top"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Frontend"
            description="Ich habe ein erfahrung mit HTML und CSS aber auch ein bisschen mit React und Next.js."
            tech={frontendTech}
            direction="left"
            span={1}
            delay={0.15}
            gradient="bg-gradient-to-br"
          />
          <AboutCard
            title="Backend"
            description="Ich Programmiere hauptsächlich Minecraft Plugins aber auch Discord Bots etc."
            tech={backendTech}
            direction="right"
            span={1}
            delay={0.2}
            gradient="bg-gradient-to-tl"
          />
          <AboutCard
            title="Other Technologies"
            description="Sachen die ich noch benutze um zu Programmieren."
            tech={otherTech}
            direction="bottom"
            span={2}
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
