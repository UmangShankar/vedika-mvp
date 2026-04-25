export function ManasDeviation({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="bg-lotus-light border-l-[3px] border-[#E88080] rounded-r-lg p-4 mt-2">
      <p className="text-[9px] tracking-[0.12em] uppercase text-lotus font-bold mb-1">{heading}</p>
      <p className="text-[12.5px] text-[#6B2020] leading-relaxed">{body}</p>
    </div>
  );
}
