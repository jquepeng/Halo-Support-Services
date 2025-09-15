type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`w-full  ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-responsive">
        {children}
      </div>
    </section>
  );
}
