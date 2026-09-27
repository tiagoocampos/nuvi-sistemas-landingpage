import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="sobre" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-nuvi-accent">
              Sobre
            </span>
          </Reveal>
          <div className="space-y-5">
            <Reveal>
              <p className="text-xl font-medium leading-relaxed text-nuvi-fg sm:text-2xl">
                A Nuvi é o estúdio por trás de sistemas que já rodam em
                produção — não uma agência grande, mas um desenvolvedor
                full-stack que projeta, constrói e mantém cada linha de
                código.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="leading-relaxed text-nuvi-fg-muted">
                Isso significa comunicação direta, decisões técnicas
                consistentes do início ao fim e responsabilidade real sobre o
                que é entregue. O diferencial não é prometer muito — é ter
                produtos reais, usados por clientes de verdade, como prova.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
