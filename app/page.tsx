import { BeforeAfterToggle } from "@/components/before-after-toggle";
import { ContactForm } from "@/components/contact-form";
import { DealFlow } from "@/components/deal-flow";
import { DeckSection } from "@/components/deck-section";
import { FAQItem } from "@/components/faq-item";
import { Header } from "@/components/header";
import { HeroMedia } from "@/components/hero-media";
import { MarketValueModel } from "@/components/market-value-model";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { NarrativeToggle } from "@/components/narrative-toggle";
import { PartnersSection } from "@/components/partners-section";
import { PreContactCta } from "@/components/pre-contact-cta";
import { Section } from "@/components/section";
import { ThemedLogo } from "@/components/themed-logo";
import { TrustStrip } from "@/components/trust-strip";
import { ValueCard } from "@/components/value-card";
import { VideoSection } from "@/components/video-section";
import { ABVX_URL, ASCII_THEME_URL } from "@/lib/constants";

const faqs = [
  {
    question: "What is Liqua in one sentence?",
    answer:
      "Liqua is the liquidity and execution layer for physical commodity trading, turning fragmented brokerage activity into structured market infrastructure."
  },
  {
    question: "Who is Liqua for first?",
    answer:
      "Initial deployment is corridor-focused with selected brokers, traders, and producers where execution consistency can be measured and scaled."
  },
  {
    question: "How does Liqua reduce off-platform leakage?",
    answer:
      "Through staged disclosure, execution workflow value, milestone tooling, and performance ratings that make on-platform completion materially better."
  },
  {
    question: "What is the relationship between Liqua and Cropto?",
    answer:
      "Liqua is the liquidity and execution layer, while Cropto adds risk tooling. Together, they form a layered market-infrastructure stack."
  }
];

const HERO_CHIPS = ["Broker network", "Execution layer", "Partner-ready", "Physical markets first"] as const;

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
              <div className="max-w-3xl text-white section-fade hero-text-pane">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/82">
                  Liquidity & Execution Layer
                </p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Liqua builds structured market liquidity for physical commodity trading
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
                  Brokers stay focused on relationships, trust, and negotiation.
                  Liqua handles execution workflow, process control, and operational consistency -
                  turning fragmented brokerage activity into scalable market infrastructure.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#contact" className="button-primary cta-shine" data-ascii-role="cta">
                    Request access <span className="cta-arrow">→</span>
                  </a>
                  <a href="#deck" className="button-secondary cta-shine" data-ascii-role="cta-secondary">
                    View deck <span className="cta-arrow">→</span>
                  </a>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Positioning highlights">
                  {HERO_CHIPS.map((chip) => (
                    <li key={chip} className="hero-proof-chip">
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-logo-float section-fade mx-auto flex w-full max-w-72 justify-center rounded-3xl border border-white/36 bg-white/14 p-10 backdrop-blur-[3px] sm:max-w-80">
                <ThemedLogo width={240} height={300} className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <Section
          id="problem"
          title="Market Problem"
          description="Fragmented coverage and manual coordination keep physical-market execution expensive and inconsistent."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Broker access is distributed but not operationally unified",
              "Contract and document operations consume core commercial time",
              "Execution responsibility is hard to track across counterparties",
              "Depth exists in the market but not in a decision-grade structure"
            ].map((item) => (
              <div key={item} className="surface-card text-[0.96rem] leading-relaxed text-[var(--muted)] section-fade" data-ascii-role="card">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="solution"
          title="Product Thesis"
          description="Brokers create trust. Liqua creates repeatability."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface-card section-fade" data-ascii-role="card">
              <p className="meta-label">
                Commercial layer
              </p>
              <p className="mt-3 card-title">Relationships, context, and negotiation</p>
              <p className="mt-4 card-copy">
                Preserve local broker intelligence and trust where market outcomes are decided.
              </p>
            </div>
            <div className="surface-card accent-surface-strong section-fade" data-ascii-role="card">
              <p className="meta-label">
                Execution layer
              </p>
              <p className="mt-3 card-title">Workflow discipline, controls, and traceability</p>
              <p className="mt-4 card-copy">
                Standardized milestones and accountability turn fragmented activity into infrastructure.
              </p>
            </div>
          </div>
        </Section>

        <BeforeAfterToggle />

        <TrustStrip />

        <VideoSection />

        <section className="section-divider py-20 sm:py-24">
          <div className="mx-auto w-full max-w-8xl px-6 sm:px-10 lg:px-16">
            <div className="grid gap-6 lg:grid-cols-3">
              <div id="brokers" className="scroll-mt-28">
                <ValueCard title="For Brokers" hero="Execution support without losing relationship ownership.">
                  <p><strong>Keep:</strong> trust, negotiation, and advisory positioning.</p>
                  <p><strong>Systematize:</strong> documentation, follow-up, and workflow control.</p>
                  <p><strong>Improve:</strong> capability through training, coaching, and market intelligence.</p>
                </ValueCard>
              </div>

              <div id="traders" className="scroll-mt-28">
                <ValueCard title="For Traders" hero="Scale coverage without scaling fixed overhead.">
                  <p><strong>Access:</strong> broker-networked regional liquidity.</p>
                  <p><strong>Expand:</strong> procurement reach without internal team inflation.</p>
                  <p><strong>Decide faster:</strong> with depth signals and execution visibility.</p>
                </ValueCard>
              </div>

              <div id="farmers" className="scroll-mt-28">
                <ValueCard title="For Farmers" hero="Professional commercial support through trusted channels.">
                  <p><strong>Benefit:</strong> from local advisory quality and better timing context.</p>
                  <p><strong>Trade safer:</strong> with clearer process checkpoints and buyer selection discipline.</p>
                  <p><strong>Monetize consistently:</strong> via structured execution rather than ad-hoc routes.</p>
                </ValueCard>
              </div>
            </div>
          </div>
        </section>

        <MarketValueModel />

        <DealFlow />

        <Section
          id="how-it-works"
          title="How It Works"
          description="Operational consistency creates market depth."
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
                <p className="meta-label">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-base font-medium leading-relaxed text-[var(--text)]">{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="features" title="Core Platform Modules" description="Execution quality, surfaced as product modules.">
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
              <li key={feature} className="surface-card text-[0.96rem] leading-relaxed text-[var(--muted)] section-fade" data-ascii-role="card">
                {feature}
              </li>
            ))}
          </ul>
        </Section>

        <NarrativeToggle />

        <DeckSection />

        <Section id="faq" title="FAQ" description="Concise answers for partner and investor due diligence.">
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Section>

        <PreContactCta />

        <Section
          id="contact"
          title="Request Access"
          description="Tell us where you operate and what collaboration path you are exploring."
        >
          <div className="space-y-3">
            <ContactForm />
            <p className="section-fade text-sm leading-relaxed text-[var(--muted)]">
              For partnerships, pilot corridors, and investor conversations. We reply personally within 1-2 business days. No mailing list spam.
            </p>
          </div>
        </Section>

        <PartnersSection />
      </main>

      <footer className="section-divider py-10">
        <div className="mx-auto flex w-full max-w-8xl flex-col gap-4 px-6 text-sm text-[var(--muted)] sm:px-10 lg:px-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>Structured liquidity, not just contacts.</p>
            <div className="flex items-center gap-5">
              <a href="/privacy" className="hover:text-[var(--text)]">Privacy</a>
              <a href="/terms" className="hover:text-[var(--text)]">Terms</a>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Liqua. All rights reserved.</p>
            <p className="text-sm">
              Built by{" "}
              <a href={ABVX_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
                ABVX
              </a>{" "}
              · ASCII mode inspired by{" "}
              <a href={ASCII_THEME_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--text)]">
                AsciiTheme
              </a>
            </p>
          </div>
        </div>
      </footer>

      <MobileStickyCta />
    </div>
  );
}
