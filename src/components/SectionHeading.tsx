import Reveal from "./Reveal";

type Props = {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ number, tag, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 grid gap-5 md:grid-cols-[180px_1fr] md:items-start">
      <p className="flex items-center gap-3 font-mono text-xs uppercase text-faint">
        <span className="inline-flex h-8 w-8 items-center justify-center border border-edge bg-surface text-accent">
          {number}
        </span>
        {tag}
      </p>
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h2>
      {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
      )}
      </div>
    </Reveal>
  );
}
