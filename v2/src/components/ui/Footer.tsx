export function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 mt-12 relative z-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-white/40 text-sm">
                    © {new Date().getFullYear()}. <a href="#" className="hover:text-[#10b981] transition-colors">Anang Ayman</a>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
