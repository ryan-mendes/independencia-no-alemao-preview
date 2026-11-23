import Reveal from "@/components/motion/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  center?: boolean;
  /** true em seções claras (paper) */
  dark?: boolean;
  className?: string;
};

export default function SectionTitle({ eyebrow, title, description, center, dark, className }: Props) {
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className ?? ""}`}>
      <p className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] ${center ? "justify-center" : ""} ${dark ? "text-red" : "text-gold"}`}>
        <span className="flag-line h-[2px] w-8" aria-hidden />
        {eyebrow}
      </p>
      <h2 className={`text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance ${dark ? "text-ink" : "text-cream"}`}>
        {title}
      </h2>
      {description && <p className={`mt-6 text-lg leading-relaxed ${dark ? "text-ink-2" : "text-fog"}`}>{description}</p>}
    </Reveal>
  );
}
