import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        gold: "bg-gold-400 text-forest-950 hover:bg-gold-300 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]",
        forest: "bg-forest-900 text-white hover:bg-forest-800",
        outline: "border border-forest-900/25 text-forest-900 hover:bg-forest-900 hover:text-white",
        outlineLight: "border border-white/30 text-white hover:bg-white hover:text-forest-950",
        ghost: "text-forest-900 hover:bg-forest-900/5",
        whatsapp: "bg-[#25D366] text-forest-950 hover:bg-[#1ebe5b]",
      },
      size: {
        sm: "h-9 px-4 text-[13px]",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-[15px]",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type Props = VariantProps<typeof button> & {
  className?: string;
  children: React.ReactNode;
} & (
    | ({ href: string } & Omit<React.ComponentProps<typeof Link>, "href" | "className">)
    | ({ href?: undefined } & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

export function Button({ variant, size, className, children, ...rest }: Props) {
  const classes = cn(button({ variant, size }), className);
  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest as { href: string } & Record<string, unknown>;
    const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    if (external)
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" {...(linkProps as object)}>
          {children}
        </a>
      );
    return (
      <Link href={href} className={classes} {...(linkProps as object)}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
