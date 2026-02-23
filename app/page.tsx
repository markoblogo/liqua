import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { DeckSection } from "@/components/deck-section";
import { FAQItem } from "@/components/faq-item";
import { Header } from "@/components/header";
import { HeroMedia } from "@/components/hero-media";
import { Section } from "@/components/section";
import { ValueCard } from "@/components/value-card";
import { CONTACT_EMAIL } from "@/lib/constants";

const faqs = [
  {
    question: "Is Liqua a marketplace or an exchange?",
    answer:
      "Liqua is infrastructure for execution and liquidity formation, not only a listing surface."
  },
  {
    question: "How do you reduce off-platform deals?",
    answer:
      "Staged disclosure, execution value, and reputation ratings create practical incentives to close inside the system."
  },
  {
    question: "Where does Liqua start?",
    answer:
      "Initial rollout can focus on a single corridor, including the Ukraine grain corridor, and scale by market depth."
  },
  {
    question: "How are brokers onboarded?",
    answer:
      "Brokers pass verification, complete training, and move through tiers based on execution quality KPIs."
  }
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-black">
      <Header />

      <main>
        <section className="relative isolate overflow-hidden">
          <HeroMedia />

          <div className="relative mx-auto w-full max-w-8xl px-6 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:pb-32 lg:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
              <div className="max-w-3xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Digital Brokerage Platform
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Liqua - Liquidity Layer for Physical Commodity Trading
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
                  A digital brokerage platform that converts relationships into
                  structured, reliable liquidity.
                </p>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-white/70">
                  Brokers stay in relationships. The platform handles execution.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#deck"
                    className="rounded-full border border-white bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-transparent hover:text-white"
                  >
                    View deck
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black"
                  >
                    Request access
                  </a>
                </div>
              </div>

              <div className="mx-auto flex w-full max-w-72 justify-center rounded-3xl border border-white/30 bg-white/10 p-10 backdrop-blur-[2px] sm:max-w-80">
                <Image
                  src="/liqua-logo.png"
                  alt="Liqua logo icon"
                  width={240}
                  height={300}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problem"
          title="Problem"
          description="Physical commodity markets remain fragmented, manually operated, and difficult to scale with predictable execution quality."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fragmented regional brokerage market",
              "High operational overhead from manual routines",
              "Inconsistent execution and procedural control",
              "Low visibility into real market depth"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-black/15 p-5 text-sm text-black/80">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="solution"
          title="Solution"
          description="Liqua separates commercial relationships from operational execution so each role can perform at its best."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-black/15 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
                Broker
              </p>
              <p className="mt-3 text-2xl font-semibold">Relationships + trust + strategy</p>
              <p className="mt-4 text-sm leading-relaxed text-black/75">
                Focus on communication, negotiation, and commercial context.
              </p>
            </div>
            <div className="rounded-2xl border border-black/15 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/60">
                Platform
              </p>
              <p className="mt-3 text-2xl font-semibold">Contracting + workflow + control</p>
              <p className="mt-4 text-sm leading-relaxed text-black/75">
                Handle routine execution with standardized process and transparent checkpoints.
              </p>
            </div>
          </div>
        </Section>

        <section className="section-divider py-20 sm:py-24">
          <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <div id="brokers" className="scroll-mt-28">
                <ValueCard
                  title="For Brokers"
                  hero="Stay in your strength. Let the system handle the rest."
                >
                  <p>
                    Remove routine work: contracting, paperwork, deal tracking,
                    execution control, logistics coordination, and procedural risk routines.
                  </p>
                  <p>Keep the core edge: relationships, negotiation, and strategy.</p>
                  <p>Add growth through training, coaching, and daily market intelligence.</p>
                </ValueCard>
              </div>

              <div id="traders" className="scroll-mt-28">
                <ValueCard
                  title="For Traders"
                  hero="Permanent access to liquidity without expanding headcount."
                >
                  <p>Use regional broker networks for daily physical supply coverage.</p>
                  <p>Replace fixed procurement overhead with a procurement network model.</p>
                  <p>Gain market depth and behavioral insight to improve execution timing.</p>
                </ValueCard>
              </div>

              <div id="farmers" className="scroll-mt-28">
                <ValueCard
                  title="For Farmers"
                  hero="Loyalty exchanged for professional commercial support."
                >
                  <p>
                    Receive advisory, market signals, timing support, and buyer selection
                    through local brokers and platform process.
                  </p>
                  <p>Turn trusted relationships into more stable monetization outcomes.</p>
                </ValueCard>
              </div>
            </div>
          </div>
        </section>

        <Section
          id="triangle"
          title="Organic Value Exchange Triangle"
          description="Farmer loyalty, broker competence, and trader demand are stabilized by a common execution layer."
        >
          <div className="rounded-2xl border border-black/15 px-6 py-10 sm:px-8">
            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-3">
              <span className="diagram-node">Farmer</span>
              <span className="text-sm text-black/50">→</span>
              <span className="diagram-node">Broker</span>
              <span className="hidden text-sm text-black/50 sm:block">↘</span>
              <span className="diagram-node">Platform</span>
              <span className="hidden text-sm text-black/50 sm:block">↙</span>
              <span className="diagram-node">Trader</span>
            </div>
          </div>
        </Section>

        <Section
          id="how-it-works"
          title="How It Works"
          description="Five steps that convert fragmented interactions into structured execution."
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Verified participants",
              "Structured offers and orders",
              "Matching",
              "Deal-room workflow",
              "Execution milestones and performance rating"
            ].map((step, index) => (
              <li key={step} className="rounded-xl border border-black/15 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-black/85">{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="features" title="Features">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Verified broker network",
              "Deal rooms and checklists",
              "Execution tracking and audit trail",
              "Market depth and analytics layer",
              "Training and coaching",
              "Ratings based on execution KPIs",
              "Dispute handling framework"
            ].map((feature) => (
              <li key={feature} className="rounded-xl border border-black/15 p-5 text-sm text-black/80">
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <DeckSection />

        <Section id="faq" title="FAQ">
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Request Access"
          description="Tell us who you are and how you want to collaborate with Liqua."
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <ContactForm />
            <aside className="space-y-4 rounded-2xl border border-black/15 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
                Contact
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base font-medium text-black underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-sm leading-relaxed text-black/70">
                Partnerships, onboarding, and investor requests.
              </p>
            </aside>
          </div>
        </Section>
      </main>

      <footer className="section-divider py-10">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-4 px-6 text-sm text-black/65 sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <p>© {new Date().getFullYear()} Liqua. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-black">
              Privacy
            </a>
            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
