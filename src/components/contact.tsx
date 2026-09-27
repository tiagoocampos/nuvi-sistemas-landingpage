import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const EMAIL = "tiago.campos.da.silva1@gmail.com";
const WHATSAPP_NUMBER = "5500000000000"; // TODO: substituir pelo número real

export function Contact() {
  return (
    <section id="contato" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-nuvi-bg-elevated px-8 py-14 text-center sm:px-16">
            <span className="text-sm font-semibold uppercase tracking-widest text-nuvi-accent">
              Contato
            </span>
            <h2 className="mx-auto mt-3 max-w-xl font-heading text-3xl font-extrabold tracking-tight text-nuvi-fg sm:text-4xl">
              Vamos conversar sobre o seu projeto
            </h2>
            <p className="mx-auto mt-4 max-w-md text-nuvi-fg-muted">
              Conte o que você precisa construir ou manter — a resposta é
              direta, sem intermediários.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                render={
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="bg-nuvi-accent text-nuvi-accent-foreground hover:bg-nuvi-accent/90"
              >
                <MessageCircle className="size-4" />
                Chamar no WhatsApp
              </Button>
              <Button
                render={<Link href={`mailto:${EMAIL}`} />}
                size="lg"
                variant="outline"
                className="border-white/15 bg-transparent text-nuvi-fg hover:bg-white/5"
              >
                <Mail className="size-4" />
                {EMAIL}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
