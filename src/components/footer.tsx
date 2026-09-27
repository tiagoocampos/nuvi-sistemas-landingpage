import Link from "next/link";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/social-icons";
import { Logo } from "@/components/logo";

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        <Logo iconSize={28} />

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-nuvi-fg-muted transition-colors hover:text-nuvi-accent"
            >
              <social.icon className="size-5" />
            </Link>
          ))}
        </div>

        <p className="text-sm text-nuvi-fg-muted">
          © {new Date().getFullYear()} Nuvi. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
