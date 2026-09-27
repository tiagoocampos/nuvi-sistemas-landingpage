import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-nuvi-accent/10 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-nuvi-fg-muted">
            <span className="size-1.5 rounded-full bg-nuvi-accent" />
            Estúdio de software
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black leading-[1.05] tracking-tight text-nuvi-fg sm:text-5xl md:text-6xl">
            Construímos os sistemas por trás do seu negócio
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-nuvi-fg-muted">
            Desenvolvemos e mantemos sistemas sob medida — SaaS, sites e
            automações — para negócios que precisam de tecnologia que
            simplesmente funciona.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              render={<Link href="#contato" />}
              size="lg"
              className="group bg-nuvi-accent text-nuvi-accent-foreground hover:bg-nuvi-accent/90"
            >
              Vamos conversar sobre seu projeto
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Link
              href="#projetos"
              className="text-sm font-medium text-nuvi-fg-muted underline decoration-white/20 underline-offset-4 transition-colors hover:text-nuvi-fg"
            >
              Ver projetos em produção
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
