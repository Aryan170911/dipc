import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Live Demo for The Dentist | DIPC',
    description: 'Try the AI receptionist DIPC built as a demo for The Dentist, Khemnichak Patna.',
    robots: { index: false, follow: false },
};

export default function DentistDemoLayout({ children }: { children: React.ReactNode }) {
    return children;
}
