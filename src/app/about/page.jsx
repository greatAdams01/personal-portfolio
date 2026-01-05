import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  WhatsAppIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/sit.jpg'

function SocialLink({ className, href, children, icon: Icon, target }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Great Adams. I live in Rivers State, Nigeria, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Great Adams, a blockchain engineer and philosopher.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My blockcahin journey began in 2022 after reading a facebook post on "Programmable money" by Oluwashina Peter. Curiosity sparked and that began my three years journey into the world of blockchain.
            </p>
            <p>
              For as long as I can remember, I've been obsessed with understanding how things work. As a kid growing up in Nigeria, I'd dismantle home appliances, wall switches, and gadgets just to figure them out—often landing me in hot water with my family 😂.
            </p>
            <p>
              Over the past few years, I've dived deep into learning, working, and building in the onchain space. I've volunteered as a Blockchain/JavaScript tutor at Borderless Dev Hub, written smart contracts for projects like Streamlivr and the Depe mini app on Farcaster and Base, and developed blockchain infrastructure for fintech startups like Pay4me. I've also built full-stack blockchain apps like VerifiedCreators, and I'm currently leading the development of VerifiedOnchain—a ZK-powered protocol for seamless onchain verification.
            </p>

            <p>
              As a DevRel Ambassador at Lisk (a Layer 2 protocol on Ethereum), I onboarded over 1,000+ devs into the ecosystem, helping them create onchain products and services. I expanded Lisk's community in Nigeria through events, workshops, and collaborations, including organizing Web3 Port Harcourt meetups and speaking at Devfests on AI agents integrated with blockchain.
            </p>

            <p>
              Today, I'm the founder of LB Labs (and the driving force behind Lets Build DAO), where we're pioneering the next generation of onchain tools and services. we're focused on human-centered Web3 solutions that drive real impact in emerging markets.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/greatAdams01" target="_blank" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://www.instagram.com/greatadams01?igsh=MXRjZnl1NTJqMXZpeg%3D%3D&utm_source=qr" target="_blank" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/greatAdams01" target="_blank" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/great-adams-606b22187/" target="_blank" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://whatsapp.com/channel/0029VbBTvR3A89Me6PL5vb0S" target="_blank" icon={WhatsAppIcon} className="mt-4">
              Follow on WhatsApp
            </SocialLink>
            <SocialLink
              href="mailto:adamsgreat001@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              adamsgreat001@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
