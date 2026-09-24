import { useReveal } from '@/hooks/useReveal';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${visible ? 'animate-fade-up' : 'opacity-0'}`}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</span>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 text-balance sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
