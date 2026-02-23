import { BeforeAfterToggle } from "@/components/before-after-toggle";
import { ContactForm } from "@/components/contact-form";
import { DealFlow } from "@/components/deal-flow";
import { DeckSection } from "@/components/deck-section";
import { FAQItem } from "@/components/faq-item";
import { Header } from "@/components/header";
import { HeroMedia } from "@/components/hero-media";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { NarrativeToggle } from "@/components/narrative-toggle";
import { Section } from "@/components/section";
import { ThemedLogo } from "@/components/themed-logo";
import { TrustStrip } from "@/components/trust-strip";
import { ValueCard } from "@/components/value-card";
import { VideoSection } from "@/components/video-section";

const faqs = [
  {
    question: "Is Liqua a marketplace or an exchange?",
    answer:
      "Neither in the simple listing sense. Liqua is an execution infrastructure layer: structured workflows, controls, and liquidity coordination across trusted participants."
  },
  {
    question: "How do you reduce off-platform behavior?",
    answer:
      "By making in-platform execution more valuable: staged disclosure, operational tooling, and reputation signals tied to real performance outcomes."
  },
  {
    question: "Where does initial rollout start?",
    answer:
      "Rollout begins with a focused corridor and participant set, then scales corridor-by-corridor as execution quality and depth metrics are validated."
  },
  {
    question: "How are brokers onboarded?",
    answer:
      "Through verification, practical workflow training, and ongoing tiering based on measurable execution KPIs."
  },
  {
    question: "What does a partner conversation usually cover?",
    answer:
      "Operating model fit, corridor priorities, implementation sequencing, and partnership structure for early network expansion."
  }
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      <main>
        <section className="hero-shell section-divider">
          <HeroMedia />
          <div className="grain-layer" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-8xl px-6 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:pb-32 lg:pt-28">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
              <div className="max-w-3xl text-white section-fade">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                  Digital Brokerage Platform
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Liqua - Liquidity & Execution Layer for Physical Commodity Trading
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
                  Liqua converts fragmented relationships into <strong>structured,
                  reliable market liquidity</strong>.
                </p>
                <p className="mt-5 text-sm font-medium uppercase tracking-[0.12em] text-white/72">
                  Brokers keep trust and negotiation. The platform runs execution discipline.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#deck" className="button-primary cta-shine" data-ascii-role="cta">
                    View deck <span className="cta-arrow">→</span>
                  </a>
                  <a href="#contact" className="button-secondary cta-shine" data-ascii-role="cta-secondary">
                    Request access <span className="cta-arrow">→</span>
                  </a>
                </div>
              </div>

              <div className="hero-logo-float section-fade mx-auto flex w-full max-w-72 justify-center rounded-3xl border border-white/30 bg-white/10 p-10 backdrop-blur-[2px] sm:max-w-80">
                <ThemedLogo width={240} height={300} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problem"
          title="Market Problem"
          description="Physical commodity execution is still relationship-heavy but operations-light, creating friction exactly where reliability should exist."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Fragmented broker landscape and uneven process quality",
              "High manual load in contracts, documents, and follow-up",
              "Low visibility across milestones and accountability",
              "Depth exists in the market, but not in a usable structure"
            ].map((item) => (
              <div key={item} className="surface-card text-sm text-[var(--muted)] section-fade" data-ascii-role="card">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="solution"
          title="Product Thesis"
          description="Liqua separates commercial relationships from process execution and makes both stronger."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-card section-fade" data-ascii-role="card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Human layer
              </p>
              <p className="mt-3 text-2xl font-semibold">Broker = trust, context, negotiation</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Preserve local relationships and commercial intelligence where they matter most.
              </p>
            </div>
            <div className="surface-card section-fade" data-ascii-role="card">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                System layer
              </p>
              <p className="mt-3 text-2xl font-semibold">Platform = workflow, control, traceability</p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Standardize execution with shared checkpoints, discipline, and measurable outcomes.
              </p>
            </div>
          </div>
        </Section>

        <TrustStrip />

        <BeforeAfterToggle />

        <VideoSection />

        <section className="section-divider py-20 sm:py-24">
          <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <div id="brokers" className="scroll-mt-28">
                <ValueCard title="For Brokers" hero="Stay in your strength. Let the system run the routine.">
                  <p><strong>Keep:</strong> client trust, negotiation, and strategic advisory.</p>
                  <p><strong>Offload:</strong> documentation, tracking, and execution coordination.</p>
                  <p><strong>Upgrade:</strong> coaching, market intelligence, and control tooling.</p>
                </ValueCard>
              </div>

              <div id="traders" className="scroll-mt-28">
                <ValueCard title="For Traders" hero="Permanent liquidity access without headcount inflation.">
                  <p><strong>Expand coverage</strong> through broker-networked regional channels.</p>
                  <p><strong>Reduce fixed procurement overhead</strong> with flexible market access.</p>
                  <p><strong>Operate on better signals:</strong> depth, behavior, and execution reliability.</p>
                </ValueCard>
              </div>

              <div id="farmers" className="scroll-mt-28">
                <ValueCard title="For Farmers" hero="Loyalty exchanged for professional commercial support.">
                  <p><strong>Receive:</strong> timing support, advisory, and buyer-quality filtering.</p>
                  <p><strong>Trade through trusted local brokers</strong> with stronger process protection.</p>
                  <p><strong>Monetize more consistently</strong> via structured execution pathways.</p>
                </ValueCard>
              </div>
            </div>
          </div>
        </section>

        <NarrativeToggle />

        <Section
          id="triangle"
          title="Organic Value Exchange Triangle"
          description="Farmer loyalty, broker competence, and trader demand become scalable when stabilized by a common execution framework."
        >
          <div className="surface-card section-fade" data-ascii-role="card">
            <div className="mx-auto grid max-w-3xl grid-cols-1 items-center justify-items-center gap-6 sm:grid-cols-3">
              <span className="diagram-node">Farmer</span>
              <span className="text-sm text-[var(--muted)]">→</span>
              <span className="diagram-node">Broker</span>
              <span className="hidden text-sm text-[var(--muted)] sm:block">↘</span>
              <span className="diagram-node">Platform</span>
              <span className="hidden text-sm text-[var(--muted)] sm:block">↙</span>
              <span className="diagram-node">Trader</span>
            </div>
            <p className="mt-6 text-center text-sm text-[var(--muted)]">
              Liqua is the stabilizing layer that converts bilateral dependencies into
              repeatable, transparent market infrastructure.
            </p>
          </div>
        </Section>

        <DealFlow />

        <Section
          id="how-it-works"
          title="How It Works"
          description="A five-stage operating path that turns scattered interactions into dependable deal completion."
        >
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Verified participants",
              "Structured offers and orders",
              "Fit-based matching",
              "Deal-room workflow and documentation",
              "Milestones, closure, and performance scoring"
            ].map((step, index) => (
              <li key={step} className="surface-card section-fade" data-ascii-role="card">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--text)]">{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="features" title="Core Platform Modules" description="Built for partner-scale execution quality, not only deal discovery.">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Verified broker network",
              "Deal rooms with structured checklists",
              "Execution tracking and audit trail",
              "Market depth and analytics layer",
              "Broker enablement: training and coaching",
              "Performance ratings by execution KPI",
              "Dispute handling framework"
            ].map((feature) => (
              <li key={feature} className="surface-card text-sm text-[var(--muted)] section-fade" data-ascii-role="card">
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <DeckSection />

        <Section id="faq" title="FAQ" description="Short answers for partner and investor due-diligence conversations.">
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Request Access"
          description="Share your profile and goals. We prioritize early conversations with aligned partners and strategic participants."
        >
          <ContactForm />
        </Section>
      </main>

      <footer className="section-divider py-10">
        <div className="mx-auto flex w-full max-w-8xl flex-col items-start justify-between gap-4 px-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:px-10 lg:px-16">
          <p>Liqua builds execution-grade liquidity infrastructure for physical commodity markets.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-[var(--text)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--text)]">Terms</a>
          </div>
        </div>
      </footer>

      <MobileStickyCta />
    </div>
  );
}
