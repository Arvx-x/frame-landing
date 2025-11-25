import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-4 md:px-8 py-8 bg-white">
      {/* Hero Section - Inspired by Perplexity Comet */}
      <div className="max-w-6xl mx-auto bg-[#F6F0E6] border border-[#E7DDCF] rounded-[3.5rem] px-8 py-16 md:px-20 md:py-24 shadow-[0_30px_60px_rgba(15,23,42,0.08)] relative overflow-hidden">
        <div className="absolute inset-x-[-15%] -top-24 h-56 bg-gradient-to-r from-[#0F6FD7]/30 via-[#38BDF8]/50 to-[#0EA5E9]/30 blur-3xl opacity-80 pointer-events-none rotate-2" />
        <div className="absolute inset-x-[-10%] top-0 h-64 bg-gradient-to-r from-[#0EA5E9]/40 via-[#0284C7]/50 to-[#0F6FD7]/30 blur-[100px] opacity-70 pointer-events-none -rotate-3" />
        <div className="absolute inset-x-[-20%] bottom-[-30%] h-72 bg-gradient-to-r from-[#0F6FD7]/30 via-[#38BDF8]/45 to-[#0EA5E9]/30 blur-[140px] opacity-70 pointer-events-none rotate-6" />

        <div className="max-w-3xl relative z-10 space-y-8 text-center mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/70 border border-white shadow-sm text-xs tracking-[0.35em] text-[#0F172A] uppercase">
            A Creative Intelligence Environment
          </div>

          <h1 className="font-serif text-5xl md:text-[4.5rem] leading-tight text-[#0F172A]">
            Creative intelligence that works <span className="italic">with</span> you.
          </h1>

          <p className="text-lg md:text-2xl text-[#4B5563] leading-relaxed">
            Frame is a new browser-scale studio built for designers and creative directors. It understands intent, collaborates in real time, and brings ideas to life without the busywork.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-all shadow-lg">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-white/10 border border-white/30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 5v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              Download Frame
            </button>
            <button className="text-[#0F172A] font-medium text-lg hover:opacity-70 transition-opacity">
              Learn more →
            </button>
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-[#6B7280]">
            Available for Web · macOS soon
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto py-24 space-y-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Native Tools",
              desc: "From best-in-class image generation to vector creation, our tools are built to understand your design intent."
            },
            {
              title: "Comprehensive Chat",
              desc: "A chat mode that speaks design. Discuss your needs, refine your vision, and execute with precision."
            },
            {
              title: "Flow State",
              desc: "The workspace flows with your creative process, never fighting against it. It's the partner you've always wanted."
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-blue-50 hover:border-blue-200 transition-colors shadow-sm hover:shadow-md group">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section (Image 2 Ref) - Removed Card Styling */}
      <div className="max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center relative mb-12">
        <div className="max-w-4xl mx-auto space-y-8 z-10">
          <h2 className="font-serif text-5xl md:text-7xl leading-tight text-[#0F172A]">
            We're not here to <br />
            <span className="italic">automate</span> creativity.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We're here to bring more of it to life. Frame is the tool designed for the messy, non-linear, <span className="text-[#2563EB] font-medium">fluid</span> process of creation.
          </p>

          <div className="pt-8">
            <Link
              href="/manifesto"
              className="inline-block bg-[#0F172A] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-black transition-colors hover:scale-105 transform duration-200"
            >
              Read our Mission
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
