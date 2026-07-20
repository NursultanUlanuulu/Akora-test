import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  Clock,
  Compass,
  FileCheck2,
  Globe,
  GraduationCap,
  Instagram,
  Languages,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  User,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import aboutImg from "@/assets/about.jpg";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import heroImg from "@/assets/hero.jpg";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider, LANGS, localePath, type Lang, useI18n } from "@/lib/i18n";
import logo from "../assets/logo.png";
import whatsapp from "../assets/whatsapp-white-icon.webp";

/* ---------- Reveal on scroll ---------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 900ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 900ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Language switcher ---------- */
function LangSwitcher({ scrolled }: { scrolled: boolean }) {
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  const current = LANGS.find((l) => l.code === lang)!;
  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Language"
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium tracking-wider transition ${
          scrolled
            ? "border-black/10 text-navy hover:border-navy/30"
            : "border-white/25 text-white hover:bg-white/10"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        {current.short}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl">
          {LANGS.map((l) => (
            <a
              key={l.code}
              href={localePath(l.code)}
              onClick={() => setOpen(false)}
              aria-current={l.code === lang ? "page" : undefined}
              className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition ${
                l.code === lang ? "bg-mist text-navy" : "text-ink/80 hover:bg-mist"
              }`}
            >
              <span>{l.label}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40">{l.short}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Navigation ---------- */
function Nav() {
  const { t } = useI18n();
  const NAV = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img className=" h-10 w-10 " src={logo} alt="Logo" />
          <span
            className={`font-display text-xl tracking-tight ${scrolled ? "text-navy" : "text-white"}`}
          >
            AKORA<span className="text-gold"> ·</span>{" "}
            <span className="text-[11px] uppercase tracking-[0.28em] font-sans font-medium opacity-70">
              Education
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm transition-colors ${
                scrolled ? "text-ink/70 hover:text-navy" : "text-white/80 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher scrolled={scrolled} />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            {t.cta.apply} <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden rounded-full p-2 ${scrolled ? "text-navy" : "text-white"}`}
          >
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-black/5">
          <div className="container-x py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/80"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const { t } = useI18n();
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden text-white">
      <img
        src={heroImg}
        alt="AKORA Education"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_20%,rgba(7,27,69,0.55),rgba(7,27,69,0.9)_60%,rgba(7,27,69,0.98))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />

      <div className="relative container-x pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-7 animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {t.hero.badge}
            </div>
            <h1 className="mt-8 font-display text-5xl leading-[1.02] md:text-7xl md:leading-[1.02] tracking-tight text-balance">
              {t.hero.title1} <span className="italic text-gold">{t.hero.title2}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-white/75 text-balance">{t.hero.sub}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-navy shadow-[0_10px_40px_-10px_rgba(201,162,74,0.7)] transition-transform hover:-translate-y-0.5"
              >
                {t.cta.apply}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm text-white/90 backdrop-blur hover:bg-white/5"
              >
                {t.cta.explore}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative animate-float-slow">
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-gold/25 via-transparent to-white/5 blur-2xl" />
                <div className="relative rounded-3xl border border-white/15 bg-white/[0.06] p-8 backdrop-blur-2xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.28em] text-white/60">
                      {t.hero.programsLabel}
                    </span>
                    <span className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <span className="text-xs text-gold">2026</span>
                  </div>
                  <ul className="mt-6 divide-y divide-white/10">
                    {t.hero.programs.map((s) => (
                      <li key={s} className="flex items-center gap-4 py-4">
                        <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 bg-gold/10">
                          <Check className="h-4 w-4 text-gold" />
                        </span>
                        <span className="text-[15px] text-white/90">{s}</span>
                        <ArrowUpRight className="ml-auto h-4 w-4 text-white/40" />
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-white/60">{t.hero.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.28em] text-white/60 flex flex-col items-center gap-2"
      >
        {t.cta.discover} <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}

/* ---------- Trust ---------- */
const TRUST_ICONS = [BadgeCheck, GraduationCap, ShieldCheck, Target, Building2, Compass];

function Trust() {
  const { t } = useI18n();
  return (
    <section id="trust" className="relative bg-mist py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.trust.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy">
              {t.trust.title1} <em className="text-gold not-italic">{t.trust.title2}</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-3xl bg-black/[0.06] border border-black/[0.06]">
          {t.trust.cards.map((c, i) => {
            const Icon = TRUST_ICONS[i] ?? BadgeCheck;
            return (
              <Reveal key={c.title} delay={i * 60}>
                <div className="group h-full bg-white p-8 md:p-10 transition-colors hover:bg-navy hover:text-white">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-navy/15 text-navy transition-colors group-hover:border-gold group-hover:text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 group-hover:text-white/70">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
const ABOUT_ICONS = [Target, ShieldCheck, Users, BookOpen];
function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl border border-gold/30" />
            <img
              src={aboutImg}
              alt="AKORA Education"
              width={1400}
              height={1600}
              loading="lazy"
              className="relative rounded-3xl object-cover aspect-[4/5] w-full"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:pl-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.about.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
              {t.about.title1} <em className="text-gold not-italic">{t.about.title2}</em>
            </h2>
            <p className="mt-6 text-ink/70 leading-relaxed">{t.about.body}</p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {t.about.cards.map((c, i) => {
              const Icon = ABOUT_ICONS[i] ?? Target;
              return (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="rounded-2xl border border-black/[0.06] p-6 hover:border-gold/40 transition-colors">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h4 className="mt-4 font-display text-xl text-navy">{c.title}</h4>
                    <p className="mt-2 text-sm text-ink/65">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
const SERVICE_ICONS = [
  GraduationCap,
  BookOpen,
  FileCheck2,
  Target,
  Languages,
  User,
  Compass,
  BadgeCheck,
];
function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative bg-navy text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="container-x relative">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.services.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance max-w-2xl">
              {t.services.title1} <em className="text-gold not-italic">{t.services.title2}</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              {t.cta.requestConsult} <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i] ?? GraduationCap;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-gold/40 hover:bg-white/[0.06] hover:-translate-y-1">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/60">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
function Process() {
  const { t } = useI18n();
  return (
    <section id="process" className="py-24 md:py-32 bg-mist">
      <div className="container-x">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.process.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy">
              {t.process.title1} <em className="text-gold not-italic">{t.process.title2}</em>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
          <ol className="space-y-10">
            {t.process.steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <li
                    className={`relative flex md:grid md:grid-cols-2 gap-8 ${right ? "md:[&>*:first-child]:col-start-2" : ""}`}
                  >
                    <div
                      className={`md:pr-16 ${right ? "md:pl-16 md:pr-0 md:text-left md:col-start-2" : "md:text-right"} pl-12 md:pl-0`}
                    >
                      <div className="text-xs uppercase tracking-[0.28em] text-gold">
                        {t.process.stepLabel} {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 font-display text-3xl text-navy">{s.title}</h3>
                      <p className="mt-3 text-ink/65 max-w-md md:inline-block">{s.body}</p>
                    </div>
                    <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-2 grid h-4 w-4 place-items-center rounded-full bg-gold ring-8 ring-mist" />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const [i, setI] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(timer);
  }, [items.length]);
  const cur = items[i % items.length];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.testimonials.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
              {t.testimonials.title1}{" "}
              <em className="text-gold not-italic">{t.testimonials.title2}</em>
            </h2>
            <p className="mt-6 text-ink/65">{t.testimonials.sub}</p>
            <div className="mt-8 flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-navy" : "w-3 bg-navy/20"}`}
                />
              ))}
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative rounded-3xl bg-mist p-8 md:p-12 border border-black/[0.05]">
              <div className="absolute -top-4 left-8 font-display text-8xl text-gold/70 leading-none select-none">
                "
              </div>
              <p className="font-display text-2xl md:text-3xl text-navy leading-snug text-balance">
                {cur.quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-navy text-white font-display">
                  {cur.name[0]}
                </div>
                <div>
                  <div className="font-medium text-navy">
                    {cur.name} · <span className="text-gold">{cur.score}</span>
                  </div>
                  <div className="text-sm text-ink/60">
                    {cur.country} · {cur.uni}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
function Gallery() {
  const { t } = useI18n();
  const imgs = [
    { src: g1, h: "row-span-2" },
    { src: g2, h: "" },
    { src: g4, h: "" },
    { src: g3, h: "row-span-2" },
  ];
  return (
    <section id="gallery" className="py-24 md:py-32 bg-mist">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.gallery.kicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy">
              {t.gallery.title1} <em className="text-gold not-italic">{t.gallery.title2}</em>
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {imgs.map((im, i) => (
            <Reveal key={i} delay={i * 80} className={im.h}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={im.src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Partners ---------- */
function Partners() {
  const { t } = useI18n();
  return (
    <section className="py-16 border-y border-black/[0.06]">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-ink/50">
          {t.partners.kicker}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-navy/70">
          {t.partners.items.map((p) => (
            <span key={p} className="font-display text-lg md:text-xl tracking-tight">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.faq.kicker}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-navy leading-tight">
            {t.faq.title1} <em className="text-gold not-italic">{t.faq.title2}</em>
          </h2>
          <p className="mt-6 text-ink/65">{t.faq.sub}</p>
        </Reveal>
        <div className="lg:col-span-8 divide-y divide-black/10 border-y border-black/10">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl md:text-2xl text-navy">{f.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/10 transition-transform ${isOpen ? "rotate-180 bg-navy text-white border-navy" : "text-navy"}`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-14 text-ink/65 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function ContactForm() {
  const { t } = useI18n();
  const options = t.services.items.map((s) => s.title);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    service: options[0],
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<"name" | "phone" | "email" | "consent", string>>
  >({});

  useEffect(() => {
    setState((s) => ({ ...s, service: options[0] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options[0]]);

  const validate = () => {
    const nextErrors: Partial<Record<"name" | "phone" | "email" | "consent", string>> = {};
    if (!state.name.trim()) nextErrors.name = t.contact.validation.required;
    if (!state.phone.trim()) nextErrors.phone = t.contact.validation.required;
    if (state.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      nextErrors.email = t.contact.validation.email;
    }
    if (!state.consent) nextErrors.consent = t.contact.validation.consent;
    return nextErrors;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      toast.error(t.contact.error);
      return;
    }

    const details = [
      t.contact.whatsappIntro,
      "",
      `${t.contact.fields.name.replace(" *", "")}: ${state.name.trim()}`,
      `${t.contact.fields.phone.replace(" *", "")}: ${state.phone.trim()}`,
      `Email: ${state.email.trim() || "—"}`,
      `${t.nav.services}: ${state.service}`,
      `${t.contact.fields.message}: ${state.message.trim() || "—"}`,
    ];
    const url = `https://wa.me/996550878512?text=${encodeURIComponent(details.join("\n"))}`;
    const whatsappWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (!whatsappWindow) window.location.assign(url);
    toast.message(t.contact.whatsappOpened);
  };

  const inp =
    "w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:border-navy focus:ring-4 focus:ring-navy/10 transition";
  const label = "mb-2 block text-sm font-medium text-navy";
  const fieldError = "mt-1.5 text-sm text-destructive";

  return (
    <form noValidate onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="contact-name" className={label}>
          {t.contact.fields.name}
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inp}
          placeholder={t.contact.fields.name}
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        {errors.name && (
          <p id="contact-name-error" className={fieldError}>
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-phone" className={label}>
          {t.contact.fields.phone}
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className={inp}
          placeholder={t.contact.fields.phone}
          value={state.phone}
          onChange={(e) => setState({ ...state, phone: e.target.value })}
        />
        {errors.phone && (
          <p id="contact-phone-error" className={fieldError}>
            {errors.phone}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className={label}>
          {t.contact.fields.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inp}
          placeholder={t.contact.fields.email}
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
        {errors.email && (
          <p id="contact-email-error" className={fieldError}>
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-service" className={label}>
          {t.contact.fields.service}
        </label>
        <select
          id="contact-service"
          name="service"
          className={inp}
          value={state.service}
          onChange={(e) => setState({ ...state, service: e.target.value })}
        >
          {options.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="contact-message" className={label}>
          {t.contact.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={`${inp} resize-none`}
          placeholder={t.contact.fields.message}
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
      </div>
      <label className="md:col-span-2 flex items-start gap-3 text-sm text-ink/70 mt-2">
        <input
          name="consent"
          type="checkbox"
          required
          checked={state.consent}
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "contact-consent-error" : undefined}
          onChange={(e) => setState({ ...state, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-black/20 text-navy focus:ring-navy"
        />
        <span>
          {t.contact.consent}{" "}
          <a
            href="/privacy/"
            className="underline decoration-gold underline-offset-4 hover:text-navy"
          >
            {t.footer.privacy}
          </a>
        </span>
      </label>
      {errors.consent && (
        <p id="contact-consent-error" className={`${fieldError} md:col-span-2 -mt-2`}>
          {errors.consent}
        </p>
      )}
      <div className="md:col-span-2 mt-2">
        <button
          type="submit"
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy shadow-[0_10px_40px_-10px_rgba(201,162,74,0.7)] transition-transform hover:-translate-y-0.5"
        >
          {t.contact.submit}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

function Contact() {
  const { t } = useI18n();
  const rows = [
    { icon: MapPin, k: t.contact.office, v: t.contact.officeVal },
    { icon: Phone, k: t.contact.phone, v: t.contact.phoneVal },
    { icon: Mail, k: t.contact.email, v: t.contact.emailVal },
    { icon: Clock, k: t.contact.hours, v: t.contact.hoursVal },
  ];
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">{t.contact.kicker}</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            {t.contact.title1} <em className="text-gold not-italic">{t.contact.title2}</em>
          </h2>
          <p className="mt-6 text-white/70">{t.contact.sub}</p>

          <ul className="mt-10 space-y-6">
            {rows.map((c) => (
              <li key={c.k} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/5 border border-white/10 text-gold">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-white/50">{c.k}</div>
                  <div className="mt-1 text-white/90">{c.v}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-3">
            <a
              href="https://www.instagram.com/acora_education"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://t.me/+996550878512"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition"
            >
              <Send className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/996550878512"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 hover:border-gold hover:text-gold transition"
            >
              <img src={whatsapp} className="h-5 w-5" alt="" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          <div className="rounded-3xl bg-white p-8 md:p-10 text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
            <h3 className="font-display text-2xl text-navy">{t.contact.formTitle}</h3>
            <p className="mt-1 text-sm text-ink/60">{t.contact.formSub}</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const { t } = useI18n();
  const NAV = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];
  return (
    <footer className="bg-[oklch(0.18_0.06_268)] text-white/70">
      <div className="container-x py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3">
            <img className=" h-10 w-10 " src={logo} alt="Logo" />
            <span className="font-display text-xl text-white">
              AKORA <span className="text-gold">·</span> Education
            </span>
          </div>
          <p className="mt-5 text-sm">{t.footer.tagline}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">
            {t.footer.explore}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">
            {t.footer.services}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {t.services.items.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/40">
            {t.footer.contact}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>+996 550 878 512</li>
            <li>acoraeducation@gmail.com</li>
            <li>{t.contact.hoursVal}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} AKORA Education LLC. {t.footer.rights}
          </div>
          <a href="/privacy/" className="hover:text-gold">
            {t.footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function Landing() {
  return (
    <div className="bg-background text-ink">
      <Nav />
      <main>
        <Hero />
        <Trust />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Gallery />
        <Partners />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

export function LandingRoot({ initialLang = "ru" }: { initialLang?: Lang }) {
  return (
    <I18nProvider initialLang={initialLang}>
      <Landing />
    </I18nProvider>
  );
}
