export default function SectionHead({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-5 md:mb-12">
      <h2 className="label text-text">{label}</h2>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}
