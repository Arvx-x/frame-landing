export default function Manifesto() {
    return (
        <div className="w-full bg-[#F0F8FF] min-h-screen py-20 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-16">

                {/* Header */}
                <div className="space-y-6">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#0F172A] tracking-tight">
                        Creative Intelligence Workspace
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0F172A]">
                        Design is within reach.
                    </h2>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-serif">
                        <p>
                            Building the world's first AI-native creative workspace is the most important design problem of our time.
                        </p>
                        <p>
                            We have started the world's first creative intelligence workspace, with one goal and one product: a workspace that thinks like a designer.
                        </p>
                        <p className="font-bold">It's called Frame.</p>
                    </div>
                </div>

                {/* The Problem */}
                <section className="space-y-6">
                    <h3 className="font-serif text-3xl font-bold text-[#0F172A]">The Problem</h3>
                    <p className="font-bold text-lg">Power users don't start from scratch. They start with intent.</p>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-serif">
                        <p>
                            Every designer knows this moment: you have the vision, the art direction lives in your head, but execution takes hours. You're not stuck on what to create—you're stuck translating it into reality. Resizing assets. Adapting concepts. Maintaining consistency. The work between vision and execution is where creative momentum dies.
                        </p>
                        <p>
                            Traditional tools make you the executor. AI tools make you the prompter. Neither understands that <span className="font-bold">great design is iterative, contextual, and cumulative</span>—it builds on itself, learns from your decisions, and amplifies your creative direction.
                        </p>
                        <p className="font-bold">
                            We're solving a different problem: How do you design at the speed of thought?
                        </p>
                    </div>
                </section>

                {/* The Vision */}
                <section className="space-y-6">
                    <h3 className="font-serif text-3xl font-bold text-[#0F172A]">The Vision</h3>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-serif">
                        <p>
                            We approach creative intelligence and design execution in tandem, as technical problems to be solved through revolutionary AI and design thinking. We plan to advance AI capabilities as fast as possible while making sure it always remains a complement to human creativity, never a replacement.
                        </p>
                        <p>This way, designers can scale in peace.</p>
                        <p className="font-bold">
                            Our workspace is built AI-native from day one. Not AI bolted onto legacy tools. Not chat-based generation that forgets context. A living creative environment where:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Images and environments generate <span className="italic">with you</span>, not for you</li>
                            <li>Chat becomes your design partner, understanding your intent, your system, your constraints, your likes, dislikes everything that gives you an ick</li>
                            <li>Automation learns your style, so repetitive execution happens invisibly</li>
                            <li>Every iteration teaches the AI your design thinking, making each session smarter than the last</li>
                        </ul>
                        <p>
                            This is the Cursor moment for design—but deeper. Code has syntax. Design has taste. We're building AI that understands both the rules and the exceptions.
                        </p>
                    </div>
                </section>

                {/* Our Moat */}
                <section className="space-y-6">
                    <h3 className="font-serif text-3xl font-bold text-[#0F172A]">Our Moat</h3>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-serif">
                        <p>Others are building AI that generates. We're building AI that <span className="italic">learns</span>.</p>
                        <p className="font-bold">The workspace becomes yours. It learns your:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Design system and component logic</li>
                            <li>Brand POV and stylistic choices</li>
                            <li>Grid systems and spatial reasoning</li>
                            <li>The "why" behind your creative decisions</li>
                        </ul>
                        <p>
                            Each project makes it smarter. Each iteration refines its understanding of your creative direction. This isn't a tool you use—it's a partner that evolves with you.
                        </p>
                        <p>
                            The moat isn't the model. It's the <span className="font-bold">cumulative creative intelligence</span> that compounds over time. Your workspace becomes an extension of your design thinking, trained on your taste, amplifying your art direction.
                        </p>
                        <p>
                            Nobody else is solving this. Everyone's racing to generate prettier images. We're building the system that makes power users 10x more powerful.
                        </p>
                    </div>
                </section>

                {/* How We Work */}
                <section className="space-y-6 border-t border-blue-200 pt-12">
                    <h3 className="font-serif text-3xl font-bold text-[#0F172A]">How We Work</h3>
                    <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-serif">
                        <p>
                            Our singular focus means no distraction by management overhead or product cycles for consumer features. We're not building for everyone. We're building for designers who know their craft and need AI that respects it.
                        </p>
                        <p className="font-bold">
                            We're an AI-first design company. Everything we build starts with creative intelligence at the core.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}
