export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="w-3 h-3 rounded-full bg-[#2563EB]" />
            <span className="font-serif text-2xl font-bold tracking-tight text-black">frame</span>
        </div>
    );
}
