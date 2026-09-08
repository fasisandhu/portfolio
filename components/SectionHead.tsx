export default function SectionHead({ label, note }: { label: string; note: string }) {
  return (
    <div className="mb-10 flex items-center gap-5 md:mb-12">
      <h2 className="label text-text">{label}</h2>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      <span className="mono hidden text-[0.75rem] text-dim sm:block">{note}</span>
    </div>
  );
}
