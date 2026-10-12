import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Our company journey and milestones.',
};

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
