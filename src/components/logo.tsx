import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  showWordmark?: boolean;
}

export function Logo({ className, iconSize = 36, showWordmark = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Image
        src="/brand/icone-marca.png"
        alt="Nuvi"
        width={iconSize}
        height={iconSize}
        className="rounded-[22%]"
        priority
      />
      {showWordmark && (
        <span
          className="font-heading font-extrabold tracking-tight text-2xl leading-none"
          style={{ fontWeight: 900 }}
        >
          <span className="text-nuvi-fg">nuv</span>
          <span className="text-nuvi-accent">i</span>
        </span>
      )}
    </div>
  );
}
