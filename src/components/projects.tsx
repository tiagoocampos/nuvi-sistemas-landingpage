import { Reveal } from "@/components/reveal";
import { ProjectCard, type Project } from "@/components/project-card";

const PROJECTS: Project[] = [
  {
    name: "Kirvo",
    tag: "SaaS",
    description:
      "Plataforma de gestão para negócios que precisam de controle e organização no dia a dia — do cadastro ao relatório, em produção.",
    href: "https://kirvo-painel.vercel.app/",
  },
  {
    name: "Alô Delivery",
    tag: "Marketplace",
    description:
      "Sistema de pedidos e delivery que conecta estabelecimentos e clientes, com painel próprio e operação em tempo real.",
    href: "https://alo-delivery-website.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-nuvi-accent">
            Projetos
          </span>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-nuvi-fg sm:text-4xl">
            Produtos em produção, não protótipos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.name} delay={index * 120}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
