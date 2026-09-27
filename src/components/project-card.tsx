import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  name: string;
  description: string;
  href: string;
  tag: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <Card className="h-full border-white/10 bg-nuvi-bg-elevated transition-colors duration-300 group-hover:border-nuvi-accent/40">
        <CardHeader>
          <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-nuvi-fg-muted">
            {project.tag}
          </span>
          <div className="mt-4 flex items-center justify-between gap-4">
            <CardTitle className="font-heading text-2xl font-extrabold tracking-tight text-nuvi-fg">
              {project.name}
            </CardTitle>
            <ArrowUpRight className="size-5 shrink-0 text-nuvi-fg-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-nuvi-accent" />
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed text-nuvi-fg-muted">
            {project.description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
