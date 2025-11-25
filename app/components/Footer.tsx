export function Footer() {
    return (
        <footer className="w-full px-4 md:px-8 pb-8">
            <div className="max-w-7xl mx-auto bg-[#DBEAFE] rounded-[3rem] p-12 md:p-24 min-h-[60vh] flex flex-col justify-between relative overflow-hidden">

                {/* Center Content */}
                <div className="flex-grow flex flex-col items-center justify-center gap-4">
                    <h1 className="font-serif text-7xl md:text-9xl text-[#1E3A8A] tracking-tight mb-2 flex gap-1 cursor-default">
                        {['f', 'r', 'a', 'm', 'e'].map((letter, i) => (
                            <span
                                key={i}
                                className="inline-block hover:text-[#2563EB] transition-colors duration-300"
                            >
                                {letter}
                            </span>
                        ))}
                    </h1>
                    <p className="text-[#2563EB] font-medium tracking-[0.2em] text-sm md:text-base uppercase text-center">
                        The Creative Intelligence Company
                    </p>
                </div>

                {/* Bottom Row */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                    <p className="text-[#2563EB] font-medium text-sm md:text-base">
                        © 2024 Frame Creative Intelligence.
                    </p>

                    <div className="flex items-center gap-8">
                        <a href="#" className="text-[#2563EB] font-bold hover:opacity-80 transition-opacity uppercase text-sm tracking-wider">Twitter</a>
                        <a href="#" className="text-[#2563EB] font-bold hover:opacity-80 transition-opacity uppercase text-sm tracking-wider">Instagram</a>
                        <a href="#" className="text-[#2563EB] font-bold hover:opacity-80 transition-opacity uppercase text-sm tracking-wider">Discord</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
