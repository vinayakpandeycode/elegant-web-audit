import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Building2, Check, ChevronRight, Globe2, Menu, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import brandImage from "@/assets/four-pillars-brand.jpg.asset.json";
import towerImage from "@/assets/tower.jpg.asset.json";
import amenitiesImage from "@/assets/amenities.png.asset.json";
import interiorImage from "@/assets/interior.jpg.asset.json";
import eveningImage from "@/assets/tower-evening.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Four Pillars | International Business Advisory" },
      { name: "description", content: "Dubai-based international business advisory connecting organisations with cross-border opportunities, partnerships and property developments." },
      { property: "og:title", content: "Four Pillars | International Business Advisory" },
      { property: "og:description", content: "Strategic cross-border partnerships, market access and property opportunities from Dubai to Australia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "Contact", href: "#contact" },
];

const advisoryPoints = [
  { number: "01", title: "Cross-border reach", body: "Headquartered in Dubai and Australian-founded, we work across finance, education, real estate and development." },
  { number: "02", title: "Market access", body: "We create valuable opportunities for organisations to access new markets, specialist expertise, investment and long-term partnerships." },
  { number: "03", title: "Structured collaboration", body: "Overseas collaboration is supported by careful planning, clear communication and respect for the laws and business practices of every participating country." },
  { number: "04", title: "Sustainable value", body: "Due diligence, contractual clarity, cultural understanding and proactive risk management underpin partnerships built for mutual success." },
];

const unitTypes = [
  { type: "Studio", price: "From AED 781K", size: "Approx. 447 sq ft" },
  { type: "1 Bedroom", price: "From AED 1.23M", size: "From approx. 747 sq ft" },
  { type: "2 Bedroom", price: "From AED 1.80M", size: "From approx. 1,243 sq ft" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" aria-label="Four Pillars home" className="group flex shrink-0 items-center gap-3">
      <span className="grid h-10 w-10 place-items-center border border-brand-gold/50 text-brand-gold transition-colors duration-300 group-hover:border-brand-gold">
        <Building2 aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <span className={compact ? "hidden sm:block" : "block"}>
        <span className="block font-display text-[17px] leading-none text-brand-gold">FOUR PILLARS</span>
        <span className="mt-1 block text-[9px] uppercase tracking-[0.24em] text-brand-cream/65">Business Advisory</span>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSubmitted(true);
  };

  return (
    <main id="top" className="overflow-x-clip bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-brand-gold/20 bg-brand-green/95 shadow-header backdrop-blur-md" : "border-transparent bg-transparent"}`}>
        <div className="mx-auto grid h-20 max-w-site grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-page sm:h-24 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
          <BrandMark compact />
          <nav aria-label="Primary navigation" className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => <li key={item.href}><a className="nav-link" href={item.href}>{item.label}</a></li>)}
            </ul>
          </nav>
          <Button asChild variant="gold" size="lg" className="hidden lg:inline-flex"><a href="#contact">Discuss an opportunity <ArrowRight /></a></Button>
          <Button variant="ghostLight" size="iconLg" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="lg:hidden">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        <div className={`absolute inset-x-0 top-full border-b border-brand-gold/20 bg-brand-green transition-[opacity,transform,visibility] duration-300 lg:hidden ${menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"}`}>
          <nav aria-label="Mobile navigation" className="min-h-[calc(100svh-5rem)] px-page py-10 sm:min-h-[calc(100svh-6rem)]">
            <ul className="divide-y divide-brand-cream/10">
              {navItems.map((item, index) => <li key={item.href}><a onClick={() => setMenuOpen(false)} className="flex min-h-16 items-center justify-between font-display text-2xl text-brand-cream" href={item.href}><span><span className="mr-4 font-sans text-xs text-brand-gold">0{index + 1}</span>{item.label}</span><ChevronRight className="h-5 w-5 text-brand-gold" /></a></li>)}
            </ul>
            <Button asChild variant="gold" size="xl" className="mt-10 w-full"><a onClick={() => setMenuOpen(false)} href="#contact">Discuss an opportunity</a></Button>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-[760px] items-end overflow-hidden bg-brand-green pt-28 sm:min-h-[820px] lg:min-h-[min(920px,100svh)]">
        <img src={brandImage.url} alt="Meraki and Four Pillars brand collaboration" className="absolute inset-0 h-full w-full object-cover object-center opacity-65" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-site px-page pb-16 pt-44 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow text-brand-gold">Dubai · Australia · International</p>
            <h1 className="mt-6 max-w-[17ch] font-display text-5xl leading-[1.02] text-brand-cream sm:text-6xl lg:text-8xl">Four Pillars Business Advisory</h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-brand-cream/80 sm:text-lg sm:leading-8">Creating considered pathways to new markets, investment and long-term international partnerships.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="xl"><a href="#expertise">Explore our expertise <ArrowRight /></a></Button>
              <Button asChild variant="outlineLight" size="xl"><a href="#opportunity">Featured opportunity</a></Button>
            </div>
          </div>
          <a href="#about" aria-label="Scroll to about" className="mt-14 inline-flex h-12 w-12 items-center justify-center border border-brand-cream/25 text-brand-cream transition-colors duration-300 hover:border-brand-gold hover:text-brand-gold"><ArrowDown className="h-4 w-4" /></a>
        </div>
      </section>

      <section id="about" className="section-shell bg-brand-ivory">
        <div className="mx-auto grid max-w-site gap-12 px-page lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="eyebrow text-brand-bronze">01 · Our perspective</p><h2 className="section-title mt-5 max-w-[12ch]">Built across borders. Grounded in trust.</h2></div>
          <div className="lg:pt-9">
            <p className="font-display text-2xl leading-9 text-brand-green sm:text-3xl sm:leading-10">An Australian-founded advisory headquartered in Dubai, connecting organisations with opportunity across international markets.</p>
            <p className="body-copy mt-7">Our work spans finance, education, real estate and development. Every engagement is approached with careful due diligence, cultural understanding and a long-term view.</p>
            <div className="mt-10 grid gap-4 border-t border-brand-green/15 pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-4"><Globe2 className="mt-1 h-5 w-5 shrink-0 text-brand-bronze" /><div><p className="font-semibold text-brand-green">International perspective</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Experience working beyond geographic and commercial boundaries.</p></div></div>
              <div className="flex items-start gap-4"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-bronze" /><div><p className="font-semibold text-brand-green">Careful execution</p><p className="mt-1 text-sm leading-6 text-muted-foreground">Clear communication, legal awareness and proactive risk management.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="section-shell bg-brand-green text-brand-cream">
        <div className="mx-auto max-w-site px-page">
          <div className="grid gap-8 border-b border-brand-cream/15 pb-12 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div><p className="eyebrow text-brand-gold">02 · Our expertise</p><h2 className="section-title mt-5 max-w-[13ch] text-brand-cream">Advisory for meaningful market expansion.</h2></div>
            <p className="body-copy max-w-xl text-brand-cream/65 lg:justify-self-end">We help organisations navigate new markets and create structured partnerships that support durable, mutual value.</p>
          </div>
          <div className="divide-y divide-brand-cream/15">
            {advisoryPoints.map((point) => (
              <article key={point.number} className="group grid gap-4 py-8 sm:grid-cols-[72px_0.7fr_1.3fr] sm:items-start sm:gap-8 lg:py-10">
                <span className="font-display text-xl text-brand-gold">{point.number}</span>
                <h3 className="font-display text-2xl text-brand-cream transition-colors duration-300 group-hover:text-brand-gold sm:text-3xl">{point.title}</h3>
                <p className="max-w-2xl leading-7 text-brand-cream/65">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunity" className="bg-brand-ivory py-8 sm:py-12 lg:py-20">
        <div className="mx-auto max-w-site px-page">
          <div className="grid overflow-hidden bg-brand-charcoal lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[520px] sm:min-h-[640px] lg:min-h-[760px]">
              <img src={towerImage.url} alt="Nirvana Residences I tower exterior" className="absolute inset-0 h-full w-full object-cover object-center" loading="lazy" />
              <div className="image-shade absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10"><p className="eyebrow text-brand-gold">Exclusive ANZ opportunity</p><p className="mt-3 font-display text-2xl text-brand-cream">Meraki Developers × Four Pillars</p></div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="eyebrow text-brand-gold">Nirvana Residences I · Dubai</p>
              <h2 className="mt-5 font-display text-4xl leading-tight text-brand-cream sm:text-5xl lg:text-6xl">Come home to harmony.</h2>
              <p className="mt-7 text-base leading-7 text-brand-cream/68">A 22-storey residential tower in Me’aisem offering 392 studios, one-, two- and three-bedroom residences, designed around continuity, tactile depth and composure.</p>
              <dl className="mt-10 grid grid-cols-2 gap-px bg-brand-cream/12">
                <div className="bg-brand-charcoal px-4 py-6"><dt className="text-xs uppercase tracking-[0.16em] text-brand-cream/50">Residences</dt><dd className="mt-2 font-display text-3xl text-brand-gold">392</dd></div>
                <div className="bg-brand-charcoal px-4 py-6"><dt className="text-xs uppercase tracking-[0.16em] text-brand-cream/50">Storeys</dt><dd className="mt-2 font-display text-3xl text-brand-gold">22</dd></div>
              </dl>
              <Button asChild variant="gold" size="xl" className="mt-9 self-start"><a href="#residences">View residences <ArrowDown /></a></Button>
            </div>
          </div>
        </div>
      </section>

      <section id="residences" className="section-shell bg-background">
        <div className="mx-auto max-w-site px-page">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div><p className="eyebrow text-brand-bronze">03 · The residences</p><h2 className="section-title mt-5 max-w-[11ch]">Thoughtful design. Holistic living.</h2><p className="body-copy mt-7 max-w-lg">Each residence is shaped by continuity, tactile depth and composure. Materials are selected for their honesty, texture and interplay with light.</p></div>
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[5/4]"><img src={interiorImage.url} alt="Light-filled interior at Nirvana Residences I" className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]" loading="lazy" /></div>
          </div>
          <div className="mt-14 grid gap-px bg-brand-green/15 md:grid-cols-3">
            {unitTypes.map((unit) => <article key={unit.type} className="bg-background p-7 transition-colors duration-300 hover:bg-brand-ivory sm:p-9"><p className="eyebrow text-brand-bronze">{unit.type}</p><h3 className="mt-5 font-display text-3xl text-brand-green">{unit.price}</h3><p className="mt-3 text-sm text-muted-foreground">{unit.size}</p></article>)}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <img src={amenitiesImage.url} alt="Nirvana Residences I amenities and community spaces" className="aspect-[16/10] h-full w-full object-cover" loading="lazy" />
            <img src={eveningImage.url} alt="Nirvana Residences I at dusk" className="aspect-[16/10] h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell bg-brand-green text-brand-cream">
        <div className="mx-auto grid max-w-site gap-14 px-page lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div><p className="eyebrow text-brand-gold">04 · Start a conversation</p><h2 className="section-title mt-5 max-w-[12ch] text-brand-cream">Discuss an international opportunity.</h2><p className="mt-7 max-w-md leading-7 text-brand-cream/65">Tell us about your market, project or partnership goals. The Four Pillars team will review your enquiry.</p></div>
          <div className="lg:border-l lg:border-brand-cream/15 lg:pl-16">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-start justify-center" role="status"><span className="grid h-12 w-12 place-items-center border border-brand-gold text-brand-gold"><Check /></span><h3 className="mt-7 font-display text-3xl text-brand-cream">Thank you for your enquiry.</h3><p className="mt-3 max-w-md leading-7 text-brand-cream/65">Your details have been prepared for the Four Pillars team.</p><Button variant="outlineLight" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>Send another enquiry</Button></div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6" noValidate={false}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="field-label">Full name<input className="field-input" name="name" autoComplete="name" required placeholder="Your name" /></label>
                  <label className="field-label">Work email<input className="field-input" name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
                </div>
                <label className="field-label">Organisation<input className="field-input" name="organisation" autoComplete="organization" placeholder="Company or organisation" /></label>
                <label className="field-label">Area of interest<select className="field-input" name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>International business advisory</option><option>Market access and partnerships</option><option>Real estate and development</option><option>Nirvana Residences I</option></select></label>
                <label className="field-label">How can we help?<textarea className="field-input min-h-32 resize-y py-3" name="message" required placeholder="Share a short overview of your opportunity" /></label>
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-sm text-xs leading-5 text-brand-cream/45">By submitting, you agree that Four Pillars may contact you about this enquiry.</p><Button type="submit" variant="gold" size="xl">Send enquiry <ArrowRight /></Button></div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-brand-charcoal py-10 text-brand-cream">
        <div className="mx-auto grid max-w-site gap-8 px-page sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div><BrandMark /><p className="mt-6 max-w-md text-sm leading-6 text-brand-cream/50">International business advisory connecting Dubai, Australia and global markets.</p></div>
          <div className="sm:text-right"><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 sm:justify-end">{navItems.map((item) => <a className="text-sm text-brand-cream/65 transition-colors duration-300 hover:text-brand-gold" key={item.href} href={item.href}>{item.label}</a>)}</nav><p className="mt-6 text-xs text-brand-cream/35">© {new Date().getFullYear()} Four Pillars Business Advisory</p></div>
        </div>
      </footer>
    </main>
  );
}