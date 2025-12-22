import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-12">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="text-xl font-bold tracking-tighter">
                        RAD<span className="text-primary">REALTY</span>
                    </Link>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                        Boutique Real Estate Services.
                        Redefining the experience.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Discover</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/search" className="hover:text-foreground">Properties</Link></li>
                        <li><Link href="/neighborhoods" className="hover:text-foreground">Neighborhoods</Link></li>
                        <li><Link href="/agents" className="hover:text-foreground">Agents</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                        <li><Link href="/careers" className="hover:text-foreground">Careers</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold">Connect</h4>
                    <div className="flex space-x-4">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                        <div className="w-8 h-8 bg-muted rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Rad Realty. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
