'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SlideUp, StaggerChildren, staggerItem } from '@/components/ui/motion';
import { Mail, Phone, Instagram } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
    email: string;
    phone: string;
    instagram?: string;
}

const TEAM: TeamMember[] = [
    {
        name: 'Raden G.',
        role: 'Founder & Lead Broker',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop',
        bio: 'Pioneering the modern real estate experience in Toronto since 2015. Obsessed with data, design, and delivering results.',
        email: 'rad@radrealty.ca',
        phone: '416-555-0101',
        instagram: '@radrealestate'
    },
    {
        name: 'Sarah Jenkins',
        role: 'Senior Sales Representative',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
        bio: 'Specializing in luxury condos and investment properties. Known for her "shark-like" negotiation skills wrapped in a velvet glove.',
        email: 'sarah@radrealty.ca',
        phone: '416-555-0102',
        instagram: '@sarahjrealestate'
    },
    {
        name: 'Michael Chen',
        role: 'Tech & Analytics Lead',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop',
        bio: 'Bridging the gap between raw MLS data and actionable insights. If there is a trend, Michael finds it first.',
        email: 'mike@radrealty.ca',
        phone: '416-555-0103',
    },
    {
        name: 'Elara V.',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop',
        bio: 'Ensuring every property looks like a masterpiece. From staging to cinema-grade video tours, Elara sets the stage.',
        email: 'elara@radrealty.ca',
        phone: '416-555-0104'
    }
];

export function TeamGrid() {
    return (
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <SlideUp className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">The Minds Behind the Method</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real estate is a people business. We just happened to arm our people with the best technology in the world.
                    </p>
                </SlideUp>

                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={staggerItem}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-black shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105" // Subtle zoom
                                />

                                {/* Overlay only visible on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
                                    <p className="text-sm leading-relaxed mb-4">{member.bio}</p>
                                    <div className="flex space-x-4">
                                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors"><Mail size={18} /></a>
                                        <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors"><Phone size={18} /></a>
                                        {member.instagram && <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 relative bg-card">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-sm text-primary/80 font-medium uppercase tracking-wider">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
