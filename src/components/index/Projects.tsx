import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-16"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Projects
        </motion.h1>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <ProjectCard
            url="https://bencraft.xyz"
            title="Bencraft"
            description="Bencraft ist ein Minecraft Server der von mir entwickelt wurde und weiter entwickelt wird."
            image="https://bencraft.xyz/assets/img/bencraft.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
            url="https://bencraft.xyz" //TODO: Change URL to Spigot
            title="Tycoon Plugin"
            description="Dieses Plugin ist ein Spielmodus der für den Bencraft Server entwickelt wurde aber Kostenlos nutzbar ist."
            image="https://bencraft.xyz/assets/img/Tycoon-Logo.png"
            delay={0.1}
            gradient="bg-gradient-to-br"
          />
          <ProjectCard
          url="https://alaxus.xyz"
          title="Alaxus Bot"
          description="Ein Discord Bot mit vielen Features und einem Dashboard."
          image="https://alaxus.xyz/assets/img/logo.gif"
          delay={0.1}
          gradient="bg-gradient-to-br"
          />
        </ul>
      </section>
    </>
  );
}
