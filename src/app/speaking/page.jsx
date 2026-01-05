import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at events all around the country and been able to share my web3 knowledge as many as I can',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at events all around the country and been able to share my web3 knowledge as many as I can"
      intro="Having benefited immensely from the insights and inspiration shared at tech events throughout my career, I view speaking invitations as both an honor and a responsibility. I’m deeply committed to giving back by sharing practical knowledge, lessons learned, and emerging ideas with the community. This act of paying it forward fuels my passion for fostering growth, collaboration, and continuous learning in tech."
    >
      <div className="space-y-20">
        <SpeakingSection title="Events">
          <Appearance
            href="https://www.canva.com/design/DAGYlpsiOt0/BKQQGF4jV3RNlEAecwUMRw/edit?utm_content=DAGYlpsiOt0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            title="Journey into the future of the internet"
            description="A theoretical and philosophical talk on the future of the internet and how it will shape the future of the world."
            event="Web3 conference, Port Harcourt 2024"
            cta="View presentation"
          />
          <Appearance
            href="https://www.canva.com/design/DAGgEg_4sIg/uNJx6RpZfv6VE0oGjhjZxw/edit?utm_content=DAGgEg_4sIg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            title="A Brave new world: A peek into Blockchains."
            description="An introduction to the world of blockchains and how they work."
            event="Roqqu campus tour, Rivers State 2025"
            cta="View presentation"
          />
          <Appearance
            href="https://www.canva.com/design/DAGw4GyfUdk/w2au73-_Q2Yhw4vuuvOEWQ/edit?utm_content=DAGw4GyfUdk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            title="Data Sovereignty: The Future of Data monetization with web3."
            description="Shared insights on the future of data monetization with web3."
            event="Biz merchant conference, Rivers State 2025"
            cta="View presentation"
          />
        </SpeakingSection>
        {/* <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection> */}
      </div>
    </SimpleLayout>
  )
}
