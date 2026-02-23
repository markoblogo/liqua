export const SITE_NAME = "Liqua";
export const SITE_URL = "https://liqua.abvx.xyz";
export const SITE_TITLE = "Liqua — Liquidity Layer for Physical Commodity Trading";
export const SITE_DESCRIPTION =
  "Liqua is a digital brokerage platform that turns fragmented physical commodity relationships into structured, reliable liquidity.";

export const YOUTUBE_VIDEO_ID = "f8te3FBX32I";
export const GOOGLE_SLIDES_EMBED_URL =
  "https://docs.google.com/presentation/d/e/2PACX-1vTPaEAPYOiRsMQabBUTs6fE3Bl_YeUA7WlgYCBTt9-tm75IXPO-n1pza5vatyJaQTv4V4AhpLxKenmq/pubembed?start=true&loop=true&delayms=3000";
export const PDF_URL = "/deck/liqua-pitch-deck.pdf";

export const HERO_IMAGES = [
  "/hero/Lhero1.svg",
  "/hero/Lhero2.svg",
  "/hero/Lhero3.svg",
  "/hero/Lhero4.svg",
  "/hero/Lhero5.svg",
  "/hero/Lhero6.svg"
] as const;

export const NAV_ITEMS = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Brokers", href: "#brokers" },
  { label: "Traders", href: "#traders" },
  { label: "Farmers", href: "#farmers" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Deck", href: "#deck" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
] as const;

type PartnerItem = {
  name: string;
  description: string;
  href: string;
  status?: string;
};

export const PARTNERS = [
  {
    name: "Spike.brokers",
    description: "International grain brokerage network",
    href: "https://spike.broker/"
  },
  {
    name: "Trade Solution",
    description: "Physical trade and commercial execution partner",
    href: "https://trade-solution.eu/"
  },
  {
    name: "Cropto (Investor Deck)",
    description: "Risk layer presentation for partners and investors",
    href: "https://cropto.abvx.xyz/deck",
    status: "deck"
  },
  {
    name: "Cropto Test Beta",
    description: "Working beta product (in development)",
    href: "https://cropto.abvx.xyz/",
    status: "beta"
  }
] as const satisfies readonly PartnerItem[];

export const ABVX_URL = "https://abvx.xyz/";
export const ASCII_THEME_URL = "https://github.com/markoblogo/AsciiTheme";
