import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Digital India Promotion Company',
        title: 'AI Solutions Company',
        subtitle: 'DIPC • Websites, AI chatbots & business automation',
        bio: 'Digital India Promotion Company (DIPC) builds websites, AI chatbots and business automation for Indian enterprises and institutions. This site documents our services, projects and journey.',
        avatar: '/dipc-light.svg',
        location: 'India',
        email: 'admin@dipc.site',
        phone: '+917091241322',
        resumeUrl: '/resume',
        website: 'https://github.com/Aryan170911/dipc',
        languages: [
            { name: 'English', level: 'Professional' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Aryan170911',
                icon: 'github',
                username: 'Aryan170911',
            },
        ],
    },
    projects: [
        {
            id: 'service-1',
            slug: 'dipc-websites-web-apps',
            title: 'Websites & Web Apps',
            description: 'Fast, modern websites and web applications for Indian businesses — from landing pages to complete online stores.',
            longDescription: 'DIPC designs and builds fast, mobile-friendly websites and web applications for Indian enterprises and institutions. Every site ships with contact and lead capture built in, so your website works like a salesperson that never sleeps.',
            techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
            tools: ['VS Code', 'Figma', 'GitHub'],
            status: 'ongoing',
            startDate: '2026-10-13',
            role: 'DIPC Service',
            team: 'DIPC',
            highlights: ['Mobile-first design', 'Lead capture built in', 'Fast loading scores'],
            category: 'Web Development',
            features: [
                {
                    title: 'What You Get',
                    items: [
                        '**Modern design** that looks sharp on phones, tablets and computers.',
                        '**Contact and quote forms** that send enquiries straight to you.',
                        '**Google-friendly setup** with proper titles, descriptions and fast loading.'
                    ]
                },
                {
                    title: 'How We Work',
                    items: [
                        '**Fixed quote first** — you approve the price before we start.',
                        '**Preview link during build** so you can watch progress and suggest changes.',
                        '**Handover + training** on updating text, photos and prices yourself.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Most small-business sites load slowly and lose mobile visitors.',
                    solution: 'We ship optimized builds with compressed images and lazy loading, keeping pages fast on 4G phones.'
                },
                {
                    problem: 'Enquiries from old contact forms get lost or ignored.',
                    solution: 'Every form writes to a database and confirms instantly, with an email backup so no lead is ever lost.'
                }
            ]
        },
        {
            id: 'service-2',
            slug: 'ai-chatbots-assistants',
            title: 'AI Chatbots & Assistants',
            description: 'Chatbots that answer customers, capture leads and support your business 24x7 on your website.',
            longDescription: 'DIPC builds AI chatbots trained on your business — products, prices, policies and FAQs. The bot answers visitors instantly, collects contact details of serious buyers, and hands tricky questions to your team.',
            techStack: ['Python', 'LangChain', 'OpenAI', 'Next.js'],
            tools: ['VS Code', 'GitHub'],
            status: 'ongoing',
            startDate: '2026-10-13',
            role: 'DIPC Service',
            team: 'DIPC',
            highlights: ['Trained on your business', 'Lead capture built in', 'Human handover'],
            category: 'AI Solutions',
            features: [
                {
                    title: 'What You Get',
                    items: [
                        '**Website chatbot** that answers FAQs instantly, day and night.',
                        '**Lead collection** — the bot asks for name and phone before handing over.',
                        '**Your knowledge only** — answers come from your content, not random internet text.'
                    ]
                },
                {
                    title: 'How We Work',
                    items: [
                        '**Content roundup** — we collect your FAQs, price lists and policies.',
                        '**Test drive before launch** — you chat with the bot and correct it.',
                        '**Monthly tuning** available as the bot meets real customers.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Generic bots give wrong answers and embarrass the business.',
                    solution: 'Our bots answer strictly from your approved content and say so when they do not know.'
                },
                {
                    problem: 'Chatbots that never involve humans lose hot leads.',
                    solution: 'Every conversation can escalate to your phone or email with full chat history attached.'
                }
            ]
        },
        {
            id: 'service-3',
            slug: 'business-process-automation',
            title: 'Business Process Automation',
            description: 'We connect your apps and automate repetitive office work like follow-ups, data entry and reports.',
            longDescription: 'DIPC studies how work actually flows through your office, then automates the repetitive parts — enquiry follow-ups, WhatsApp reminders, data entry between apps, daily and weekly reports. Your team spends time on customers, not copy-paste.',
            techStack: ['Python', 'REST APIs', 'Webhooks', 'PostgreSQL'],
            tools: ['VS Code', 'GitHub'],
            status: 'ongoing',
            startDate: '2026-10-13',
            role: 'DIPC Service',
            team: 'DIPC',
            highlights: ['Follow-up automation', 'App integrations', 'Daily reports'],
            category: 'Automation',
            features: [
                {
                    title: 'What You Get',
                    items: [
                        '**Enquiry follow-ups** that go out automatically on WhatsApp, SMS or email.',
                        '**App connections** — your forms, sheets, billing and chat tools sharing data.',
                        '**One-click reports** — daily sales, pending follow-ups and team activity.'
                    ]
                },
                {
                    title: 'How We Work',
                    items: [
                        '**Process mapping first** — we document your workflow before automating anything.',
                        '**One process at a time** — smallest useful automation ships first, then we expand.',
                        '**You stay in control** — every automation has an on/off switch and a manual override.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Staff ignore complicated new software.',
                    solution: 'Automations run inside tools they already use — WhatsApp, sheets and email — so nothing new to learn.'
                },
                {
                    problem: 'A failed automation can silently lose business.',
                    solution: 'Every automation logs its work and alerts you on failure, with a manual fallback path.'
                }
            ]
        },
        {
            id: 'service-4',
            slug: 'whatsapp-telegram-bots',
            title: 'WhatsApp & Telegram Bots',
            description: 'Order-taking, customer support and broadcast bots running where your customers already chat.',
            longDescription: 'DIPC builds bots for WhatsApp and Telegram that take orders, answer support questions and send broadcasts. Your customers never install anything new — they just chat, and your business runs inside the conversation.',
            techStack: ['Node.js', 'WhatsApp Business API', 'Telegram Bot API'],
            tools: ['VS Code', 'GitHub'],
            status: 'ongoing',
            startDate: '2026-10-13',
            role: 'DIPC Service',
            team: 'DIPC',
            highlights: ['Order on chat', 'Broadcast campaigns', 'No app to install'],
            category: 'AI Solutions',
            features: [
                {
                    title: 'What You Get',
                    items: [
                        '**Menu and ordering** over chat — products, quantities and delivery details collected automatically.',
                        '**Support bot** for hours, location, pricing and order status questions.',
                        '**Broadcasts** for offers and announcements to opted-in customers.'
                    ]
                },
                {
                    title: 'How We Work',
                    items: [
                        '**Official APIs only** — proper WhatsApp Business setup, no ban-prone shortcuts.',
                        '**Menu design together** — we map your offerings into a chat flow you approve.',
                        '**Human takeover** anytime a conversation needs a real person.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Unofficial WhatsApp tools get numbers banned.',
                    solution: 'We build only on official Business APIs with proper opt-ins and templates.'
                },
                {
                    problem: 'Chat menus that confuse customers kill orders.',
                    solution: 'Short menus, quick-reply buttons and a human-takeover escape on every screen.'
                }
            ]
        },
        {
            id: 'service-5',
            slug: 'care-maintenance-plans',
            title: 'Care Plans',
            description: 'Monthly care for your website or bot — updates, backups, small changes and priority support.',
            longDescription: 'DIPC care plans keep your website or bot healthy after launch — security updates, backups, content changes, uptime monitoring and priority support over chat. One small monthly fee, no surprise bills.',
            techStack: ['GitHub', 'Vercel', 'Uptime Monitoring'],
            tools: ['VS Code', 'GitHub'],
            status: 'ongoing',
            startDate: '2026-10-13',
            role: 'DIPC Service',
            team: 'DIPC',
            highlights: ['Monthly updates', 'Backups included', 'Priority support'],
            category: 'Support',
            features: [
                {
                    title: 'What You Get',
                    items: [
                        '**Updates and security patches** applied every month without you asking.',
                        '**Backups** so your site can always be restored.',
                        '**Small content changes** — text, photos and prices updated for you.'
                    ]
                },
                {
                    title: 'How We Work',
                    items: [
                        '**One monthly fee** quoted upfront — no hourly surprises.',
                        '**Uptime watch** with alerts if anything goes down.',
                        '**Pause or cancel monthly** — your site and data stay yours.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'Unmaintained sites get hacked or break silently.',
                    solution: 'Scheduled updates plus monitoring catch problems before your customers do.'
                },
                {
                    problem: 'Agencies disappear after launch.',
                    solution: 'A written care plan with response times, so support is a promise, not a favour.'
                }
            ]
        },
        {
            id: 'project-23',
            slug: 'mathrubhumi-steel-website',
            title: 'Mathrubhumi Enterprises — Corporate Website',
            image: '/project/mathrubhumi-hero.webp',
            description: 'Corporate site for a pre-engineered steel buildings manufacturer — local asset pack, animated UI, direct-to-database lead capture.',
            longDescription: 'Designed and built by DIPC for Mathrubhumi Enterprises (PEB steel structures, 20,000 MTPA). A single-file static site on GitHub Pages with an 18-image local asset pack, GSAP and Lenis motion, React-Bits-style interactions, and a quote form that writes leads straight to database with an email fallback so no enquiry is ever lost.',
            techStack: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP', 'Lenis', 'Supabase'],
            tools: ['VS Code', 'GitHub Pages'],
            status: 'completed',
            demoUrl: 'https://mathrubhumi.site',
            repoUrl: 'https://github.com/Aryan170911/Mathrubhumi-Enterprises',
            startDate: '2026-10-11',
            role: 'Design & Build',
            team: 'DIPC',
            highlights: ['18-image local asset pack', 'ChromaGrid gallery', 'DB-backed lead form'],
            category: 'Web Development',
            features: [
                {
                    title: 'Motion System',
                    items: [
                        '**Lenis smooth scroll** synced to the GSAP ticker with gliding anchor links.',
                        '**Split-text hero, magnetic CTAs and spotlight cards** in the React-Bits style.',
                        '**Scroll reveals, parallax hero and staggered gallery** via ScrollTrigger.'
                    ]
                },
                {
                    title: 'Content & Assets',
                    items: [
                        '**Four new sections** — capability stats, engineering diagrams, fabrication plant, client strip.',
                        '**Zero external images** — full local asset pack with lazy loading below the fold.',
                        '**SEO basics** — meta and OG tags, favicon, semantic sections.'
                    ]
                },
                {
                    title: 'Lead Capture',
                    items: [
                        '**Direct database insert** from the browser with spinner-to-check button feedback.',
                        '**Automatic email fallback** if the database is unreachable.',
                        '**Honeypot plus validation** against form spam.'
                    ]
                }
            ],
            installation: [
                {
                    title: 'Clone the Repository',
                    code: 'git clone https://github.com/Aryan170911/Mathrubhumi-Enterprises.git\ncd Mathrubhumi-Enterprises',
                    type: 'code'
                },
                {
                    title: 'Preview Locally',
                    code: 'npx serve .',
                    type: 'code'
                }
            ],
            challengesAndSolutions: [
                {
                    problem: 'No-backend hosting (GitHub Pages) but the client wanted database lead capture.',
                    solution: 'Browser-direct database inserts with an automatic email fallback, so the form works before keys exist and never loses a lead after.'
                },
                {
                    problem: 'Heavy third-party imagery slowing the page.',
                    solution: 'Replaced all external images with an optimized local WebP asset pack, cutting external requests to zero.'
                }
            ]
        }
    ],
    experiences: [
        {
            id: 'ms-1',
            company: 'Digital India Promotion Company',
            position: 'Company Founded',
            description: 'DIPC starts with a simple idea: Indian small businesses deserve modern websites, smart chatbots and automation without enterprise prices. First office, first laptop, first promise — fixed quotes, zero hidden costs.',
            responsibilities: [
                'Defined the service catalog: websites, chatbots and automation for small businesses.',
                'Set the house rules: fixed quotes first, preview links during build, client owns everything.'
            ],
            skills: ['Web Development', 'Business Planning'],
            startDate: '2026-04-01',
            endDate: '2026-04-30',
            isOngoing: false,
            location: 'India',
            type: 'self-employed',
            impact: [
                'Service catalog and pricing fixed from day one.',
                'Delivery process: preview link, corrections round, handover with training.'
            ]
        },
        {
            id: 'ms-2',
            company: 'Digital India Promotion Company',
            position: 'First Client Work — Krishi Sewa Foundation',
            description: 'DIPC builds a demo web-store for Krishi Sewa Foundation — heritage seeds, farmer-first commerce. Our first real-world project and the template for how we deliver online stores.',
            responsibilities: [
                'Designed and built a demo e-commerce store for farm products.',
                'Set up product catalog, ordering flow and contact capture.'
            ],
            skills: ['E-commerce', 'Web Design', 'Lead Capture'],
            startDate: '2026-05-01',
            endDate: '2026-07-31',
            isOngoing: false,
            location: 'India',
            type: 'self-employed',
            impact: [
                'Working demo store delivered for farmer-focused commerce.',
                'Store blueprint reused for future e-commerce clients.'
            ]
        },
        {
            id: 'ms-3',
            company: 'Digital India Promotion Company',
            position: 'AI Services Launch',
            description: 'DIPC adds artificial intelligence to the menu: chatbots trained on client businesses, WhatsApp and Telegram bots, and office automation that removes copy-paste work.',
            responsibilities: [
                'Launched chatbot building on client content with human handover.',
                'Launched WhatsApp and Telegram bots on official business APIs.',
                'Launched automation audits: map the office workflow, automate one process at a time.'
            ],
            skills: ['Conversational AI', 'Chat Platforms', 'Workflow Automation'],
            startDate: '2026-08-01',
            endDate: '2026-09-30',
            isOngoing: false,
            location: 'India',
            type: 'self-employed',
            impact: [
                'Three new service lines: chatbots, chat-platform bots, automation.',
                'House rule established: official APIs only, humans always one tap away.'
            ]
        },
        {
            id: 'ms-4',
            company: 'Digital India Promotion Company',
            position: 'Mathrubhumi Enterprises Website Live',
            description: 'DIPC designs and ships the corporate website for Mathrubhumi Enterprises, a pre-engineered steel buildings manufacturer — animated UI, full local asset pack, and a quote form that writes leads straight to database.',
            responsibilities: [
                'Designed and built the complete corporate site with motion design.',
                'Built the database-backed lead capture with automatic email fallback.'
            ],
            skills: ['Web Development', 'Motion Design', 'Lead Systems'],
            startDate: '2026-10-11',
            endDate: '2026-10-13',
            isOngoing: false,
            location: 'India',
            type: 'self-employed',
            impact: [
                'Corporate site live with zero external images and full mobile support.',
                'Lead form that never loses an enquiry, with or without database keys.'
            ]
        },
        {
            id: 'ms-5',
            company: 'Digital India Promotion Company',
            position: 'Care Plans & Ongoing Support',
            description: 'DIPC opens monthly care plans: updates, backups, small changes and priority support for every website and bot we ship. Clients get a written promise with response times — support as a plan, not a favour.',
            responsibilities: [
                'Maintaining every launched site and bot with monthly updates.',
                'Monitoring uptime and responding on priority support.'
            ],
            skills: ['Maintenance', 'Support', 'Monitoring'],
            startDate: '2026-10-13',
            isOngoing: true,
            location: 'India',
            type: 'self-employed',
            impact: [
                'Every DIPC launch now ships with a care option attached.',
                'Clients keep full ownership of site, data and code, always.'
            ]
        }
    ],
    education: [],
    achievements: [
        {
            id: 'cred-1',
            title: 'Registered Business Entity',
            issuer: 'DIPC',
            date: '2024-01-01',
            description: 'Digital India Promotion Company is a registered Indian business entity. Registration documents available on request.',
            category: 'certification',
            tags: ['Business', 'Compliance'],
        },
        {
            id: 'cred-2',
            title: 'Flagship Corporate Delivery',
            issuer: 'Mathrubhumi Enterprises',
            date: '2026-10-13',
            description: 'Corporate website with animated UI and database-backed lead capture, delivered on a fixed quote.',
            image: '/project/mathrubhumi-hero.webp',
            category: 'recognition',
            tags: ['Web Delivery', 'Flagship'],
        },
        {
            id: 'cred-3',
            title: 'E-commerce Delivery',
            issuer: 'Krishi Sewa Foundation',
            date: '2024-12-01',
            description: 'Demo web-store for farmer-focused commerce — our reusable e-commerce blueprint.',
            category: 'recognition',
            tags: ['E-commerce', 'Delivery'],
        },
        {
            id: 'cred-4',
            title: 'AI Services Launch',
            issuer: 'DIPC',
            date: '2025-04-01',
            description: 'Chatbots, chat-platform bots and office automation added to the service catalog.',
            category: 'recognition',
            tags: ['AI', 'Automation'],
        },
    ],
    techStack: [
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain', category: 'library' },
        { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai', category: 'library' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'WhatsApp', icon: 'https://cdn.simpleicons.org/whatsapp', category: 'tool' },
        { name: 'Telegram', icon: 'https://cdn.simpleicons.org/telegram', category: 'tool' },
    ],
    hardSkills: [
        { name: 'Conversational AI', level: 'advanced', category: 'ai', description: 'Chatbots trained strictly on client-approved content, with lead capture and human handover built in.' },
        { name: 'Chat Platform Bots', level: 'advanced', category: 'ai', description: 'Ordering, support and broadcast bots on official WhatsApp and Telegram business APIs.' },
        { name: 'Workflow Automation', level: 'advanced', category: 'software', description: 'Follow-ups, reminders, data sync and reports automated inside tools teams already use.' },
        { name: 'Web Development', level: 'expert', category: 'software', description: 'Fast, mobile-first websites and web apps with contact and quote forms that never lose a lead.' },
        { name: 'API Integration', level: 'advanced', category: 'backend', description: 'Connecting forms, sheets, billing, chat and databases so business data flows by itself.' },
        { name: 'Lead Capture Systems', level: 'advanced', category: 'software', description: 'Forms that write to database with instant confirmation and automatic email backup.' },
        { name: 'E-commerce Setup', level: 'intermediate', category: 'software', description: 'Product catalogs, ordering flows and enquiry capture for small online stores.' },
        { name: 'Uptime & Maintenance', level: 'advanced', category: 'devops', description: 'Monthly updates, backups, monitoring and priority support under written care plans.' },
        { name: 'SQL & Databases', level: 'advanced', category: 'database', description: 'Clean, reliable data storage behind every form, bot and report we ship.' },
    ],
    softSkills: [
        { name: 'Fixed Quotes First', description: 'Written price approved by you before any work starts' },
        { name: 'Plain Language', description: 'No jargon — you always know what is happening and why' },
        { name: 'Humans One Tap Away', description: 'Every bot and automation has a manual override' },
        { name: 'You Own Everything', description: 'Site, data, code and training stay with you, always' },
        { name: 'Small Steps, Live Previews', description: 'Watch progress on a link and correct course early' },
        { name: 'Support After Launch', description: 'Written care plans with real response times' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' }, // Default black, handled by dark:invert in component
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'devops' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', category: 'devops' },
    ],
    faqs: [
        {
            question: 'How much does a website cost?',
            answer: 'Every project gets a fixed written quote before we start — no hourly meters running in the background. Share your requirements through the quote form and we reply with one clear price.',
        },
        {
            question: 'How long does it take?',
            answer: 'A standard business website usually takes one to three weeks once your text and photos are approved. Chatbots and automation depend on scope — your quote always includes a delivery date.',
        },
        {
            question: 'Will the chatbot give wrong answers to my customers?',
            answer: 'No. Our bots answer strictly from content you approve, and say so when they do not know something. Tricky conversations hand over to you with full chat history.',
        },
        {
            question: 'Is WhatsApp automation safe for my number?',
            answer: 'Yes. We build only on official WhatsApp Business APIs with proper customer opt-ins — never the unofficial tools that get numbers banned.',
        },
        {
            question: 'Do I own my website and data?',
            answer: 'Completely. The site, the code, the database and the training all stay yours, with handover sessions so you can manage basics yourself.',
        },
        {
            question: 'What happens if something breaks later?',
            answer: 'Our monthly care plans cover updates, backups, small changes and priority support with written response times. One flat fee, no surprise bills.',
        },
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'future-of-ai-agents',
            title: 'The Future of AI Agents in Enterprise',
            excerpt: 'How autonomous agents are redefining software architecture and decision-making processes.',
            content: 'Detailed exploration of AI agents...',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-03-20',
            category: 'applied-ai',
            tags: ['AI', 'Agents', 'Enterprise'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'whatsapp-business-bots',
            title: 'WhatsApp Bots for Business',
            excerpt: 'Ordering, support and broadcasts on official APIs — without risking your number.',
            content: 'WhatsApp bots done right...',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-03-15',
            category: 'applied-ai',
            tags: ['WhatsApp', 'Bots', 'Business'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '4'
        },
        {
            id: 'blog-3',
            slug: 'mastering-nextjs-performance',
            title: 'Mastering Next.js Performance',
            excerpt: 'Advanced techniques for optimizing Core Web Vitals in modern React applications.',
            content: 'Performance optimization...',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-03-05',
            category: 'software-development',
            tags: ['Next.js', 'React', 'Performance'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '6'
        },
        {
            id: 'blog-4',
            slug: 'chatbots-that-dont-lie',
            title: 'Chatbots That Do Not Lie',
            excerpt: 'Training bots strictly on client-approved content with human handover.',
            content: 'Accuracy-first chatbot design...',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-02-28',
            category: 'applied-ai',
            tags: ['Chatbots', 'AI', 'Trust'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '7'
        },
        {
            id: 'blog-5',
            slug: 'llm-fine-tuning',
            title: 'Fine-Tuning LLMs locally',
            excerpt: 'A guide to optimizing open-source models using Ollama and LoRA techniques.',
            content: 'Local LLM fine-tuning...',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-02-15',
            category: 'applied-ai',
            tags: ['LLM', 'Python', 'Ollama'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '8'
        },
        {
            id: 'blog-6',
            slug: 'automation-roi',
            title: 'Office Automation That Pays',
            excerpt: 'Follow-ups, reminders and reports on autopilot — where the ROI actually comes from.',
            content: 'Automation ROI...',
            image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-02-01',
            category: 'software-development',
            tags: ['Automation', 'ROI', 'Business'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '5'
        },
        {
            id: 'blog-7',
            slug: 'modern-state-management',
            title: 'Modern State Management in React',
            excerpt: 'Comparing Zustand, Redux Toolkit, and React Context for large-scale apps.',
            content: 'State management...',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-01-25',
            category: 'software-development',
            tags: ['React', 'Zustand', 'Architecture'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '4'
        },
        {
            id: 'blog-8',
            slug: 'website-cost-guide',
            title: 'What Should a Website Cost?',
            excerpt: 'Fixed quotes, no hourly meters — how DIPC prices business websites.',
            content: 'Website pricing, explained...',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-01-10',
            category: 'more',
            tags: ['Websites', 'Pricing', 'Business'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '6'
        },
        {
            id: 'blog-9',
            slug: 'lead-capture-systems',
            title: 'Forms That Never Lose a Lead',
            excerpt: 'Database writes with instant confirmation and email backup on every form.',
            content: 'Lead capture engineering...',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-01-05',
            category: 'software-development',
            tags: ['Leads', 'Forms', 'Business'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '7'
        },
        {
            id: 'blog-10',
            slug: 'the-architects-manifesto',
            title: "The DIPC Playbook: Notes on Useful Software",
            excerpt: "How DIPC thinks about building useful business systems — websites, chatbots and automations that pay for themselves.",
            content: "Our journey is about making technology useful for Indian businesses — practical systems, fixed quotes and human support.",
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-03-31',
            category: 'about-me',
            tags: ['Philosophy', 'Engineering', 'About DIPC'],
            author: { name: 'DIPC Team', avatar: '/dipc-light.svg' },
            readTime: '5'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Mathrubhumi Site Live',
            description: 'Flagship corporate delivery with animated UI and database-backed lead capture.',
            date: '2026-10-13',
            type: 'image',
            url: '/project/mathrubhumi-hero.webp',
            category: 'delivery'
        },
        {
            id: 'gal-2',
            title: 'DIPC Brand',
            description: 'Company mark, light theme.',
            date: '2026-10-13',
            type: 'image',
            url: '/dipc-light.svg',
            category: 'brand'
        },
        {
            id: 'gal-3',
            title: 'DIPC Brand Dark',
            description: 'Company mark, dark theme.',
            date: '2026-10-13',
            type: 'image',
            url: '/dipc-dark.svg',
            category: 'brand'
        }
    ],
};
