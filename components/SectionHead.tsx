export default function SectionHead({ label, lead }: { label: string; lead?: string }) {
  return (
    <div className="mb-9 md:mb-12">
      <h2 className="section-title">{label}</h2>
      {lead && (
        <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">{lead}</p>
      )}
    </div>
  );
}
