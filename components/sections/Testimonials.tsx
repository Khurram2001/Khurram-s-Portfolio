export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-xs font-medium tracking-widest text-[#919599] uppercase">
          Social Proof
        </p>
        <h2 className="mb-12 text-4xl font-bold text-[#111111]">What clients say</h2>
        <div className="flex flex-col items-center justify-center gap-4 rounded-[12px] border border-dashed border-[#CDCDCB] p-12 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CDCDCB]/40 text-lg font-semibold text-[#919599]">
            ✦
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#919599]">
            Client testimonials coming soon.
          </p>
        </div>
        {/* TODO: Replace with real client testimonials */}
      </div>
    </section>
  )
}
