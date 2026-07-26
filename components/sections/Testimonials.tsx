{/* TODO: Replace empty state with real client testimonials */}
export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-[#F8F8F8] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-sm font-medium tracking-widest text-[#919599] uppercase">
          Social Proof
        </p>
        <h2 className="mb-12 text-4xl font-bold text-[#111111]">What clients say</h2>
        <div className="flex flex-col items-center justify-center gap-3 rounded-[12px] border border-dashed border-[#CDCDCB] p-12 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#CDCDCB]/50 text-xl text-[#919599]">
            ✦
          </div>
          <p className="max-w-sm text-base text-[#919599]">
            Client testimonials coming soon. Currently shipping — check back after launch.
          </p>
        </div>
      </div>
    </section>
  )
}
