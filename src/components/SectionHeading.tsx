type Props = {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ number, tag, title, subtitle }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-faint">
        <span className="text-accent">{number}</span>
        <span className="h-px w-6 bg-edge-2" />
        {tag}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}
