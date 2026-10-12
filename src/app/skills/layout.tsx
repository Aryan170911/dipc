import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Skills',
    description: 'Our capabilities, tech stack and tools.',
};

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
