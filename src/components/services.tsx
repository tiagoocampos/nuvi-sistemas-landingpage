import { Code2, LayoutTemplate, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";

const SERVICES = [
  {
    icon: Code2,
    title: "Sistemas sob medida",
    description:
      "SaaS, painéis administrativos e automações desenhados para o processo real do seu negócio, não um template genérico.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing pages",
    description:
      "Páginas rápidas, responsivas e com identidade visual própria — pensadas para converter visitantes em contato.",
  },
  {
    icon: Wrench,
    title: "Manutenção e evolução",
    description:
      "Suporte contínuo, correções e novas funcionalidades para sistemas que já existem e precisam continuar evoluindo.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-nuvi-accent">
            Serviços
          </span>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-nuvi-fg sm:text-4xl">
            O que a Nuvi coloca em produção
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <div className="h-full rounded-xl border border-white/10 bg-nuvi-bg-elevated p-6">
                <div className="flex size-11 items-center justify-center rounded-lg bg-nuvi-accent/10">
                  <service.icon className="size-5 text-nuvi-accent" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-nuvi-fg">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-nuvi-fg-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
