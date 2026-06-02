import React, { useState, useEffect, useRef } from "react";
import {
  RiShieldLine,
  RiArrowRightLine,
  RiCheckLine,
  RiLockLine,
  RiTeamLine,
  RiGovernmentLine,
  RiMessage3Line,
  RiExternalLinkLine,
  RiMenuLine,
  RiCloseLine,
  RiLineChartLine,
  RiRocketLine,
  RiCoinLine,
  RiFingerprint2Line,
  RiChatPollLine,
  RiFileCopyLine,
} from "react-icons/ri";

const CHAT_URL = "https://chat.stalios.com/";
const CONTRACT = "0x41874cE596ee47a21856E89Aba9055da59b165F1";
const ETHERSCAN = `https://etherscan.io/token/${CONTRACT}`;
const DEXSCREENER = "https://dexscreener.com/ethereum/0xa8ac4ed44849d76caf30f59382f3dd693654903a";

/* ─── Helpers ────────────────────────────────────────────────── */
const glass = (opacity = 0.028): React.CSSProperties => ({
  background: `rgba(255,255,255,${opacity})`,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.07)",
});

const glowBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  background: "var(--primary)",
  color: "#000",
  fontSize: 13,
  fontWeight: 700,
  padding: "12px 24px",
  borderRadius: 6,
  textDecoration: "none",
  letterSpacing: "0.01em",
  transition: "background 0.2s, box-shadow 0.2s",
  boxShadow: "0 0 24px rgba(254,144,1,0.45)",
};

/* ─── Hero contract card ──────────────────────────────────────── */
const HeroContract: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div style={{
      ...glass(0.05),
      borderRadius: 12,
      padding: "18px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      flexWrap: "wrap",
      boxShadow: "0 0 0 1px rgba(254,144,1,0.1), 0 8px 40px rgba(0,0,0,0.4)",
    }}>
      {/* Left: label + address */}
      <div>
        <div style={{
          fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "var(--primary)", marginBottom: 6, display: "flex", alignItems: "center", gap: 6,
        }}>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#22c55e", boxShadow: "0 0 8px rgba(34,197,94,0.8)",
          }} />
          STA Token · Ethereum Mainnet
        </div>
        <div style={{
          fontFamily: "monospace",
          fontSize: "clamp(11px, 1.4vw, 14px)",
          color: "#fff",
          letterSpacing: "0.04em",
          wordBreak: "break-all",
        }}>
          {CONTRACT}
        </div>
      </div>

      {/* Right: action buttons */}
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <a href={DEXSCREENER} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "var(--primary)", color: "#000",
          fontSize: 11, fontWeight: 700, letterSpacing: "0.04em",
          padding: "8px 14px", borderRadius: 6, textDecoration: "none",
          boxShadow: "0 0 16px rgba(254,144,1,0.4)",
          transition: "background 0.2s, box-shadow 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "#ffaa22"; e.currentTarget.style.boxShadow = "0 0 24px rgba(254,144,1,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(254,144,1,0.4)"; }}>
          DexScreener <RiExternalLinkLine size={11} />
        </a>
        <button onClick={copy} title="Copy contract address" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: copied ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.06)",
          border: `1px solid ${copied ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"}`,
          color: copied ? "#22c55e" : "var(--muted)",
          fontSize: 11, fontWeight: 600,
          padding: "8px 14px", borderRadius: 6, cursor: "pointer",
          transition: "all 0.2s",
          whiteSpace: "nowrap",
        }}>
          {copied ? <><RiCheckLine size={13} /> Copied!</> : <><RiFileCopyLine size={13} /> Copy CA</>}
        </button>
      </div>
    </div>
  );
};

/* ─── Footer contract badge ───────────────────────────────────── */
const ContractBadge: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      <span style={{
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--primary)", background: "rgba(254,144,1,0.08)",
        border: "1px solid rgba(254,144,1,0.22)", borderRadius: 3, padding: "3px 8px",
      }}>STA · ETH</span>
      <a href={ETHERSCAN} target="_blank" rel="noopener noreferrer" style={{
        fontFamily: "monospace", fontSize: 12, color: "var(--muted)",
        letterSpacing: "0.02em", textDecoration: "none",
        display: "inline-flex", alignItems: "center", gap: 5,
        transition: "color 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
      onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
        {CONTRACT.slice(0, 6)}…{CONTRACT.slice(-4)}
        <RiExternalLinkLine size={11} />
      </a>
      <button onClick={copy} title="Copy address" style={{
        background: "none", border: "none", cursor: "pointer", padding: 2,
        color: copied ? "#22c55e" : "var(--muted-2)", display: "inline-flex",
        transition: "color 0.2s",
      }}>
        {copied ? <RiCheckLine size={13} /> : <RiFileCopyLine size={13} />}
      </button>
    </div>
  );
};

/* ─── Aurora (fixed full-page layer) ────────────────────────── */
const Aurora: React.FC = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", pointerEvents: "none" }}>
    {[
      { w: "75%", h: "75%", top: "-15%", right: "-18%", c: "rgba(254,144,1,0.3)", blur: 90, anim: "aurora-1 20s ease-in-out infinite" },
      { w: "60%", h: "60%", bottom: "5%",  left: "-12%", c: "rgba(240,89,0,0.22)",  blur: 100, anim: "aurora-2 26s ease-in-out infinite" },
      { w: "40%", h: "40%", top: "45%",  left: "30%",  c: "rgba(255,190,0,0.14)", blur: 130, anim: "aurora-3 34s ease-in-out infinite" },
    ].map((b, i) => (
      <div key={i} style={{
        position: "absolute",
        width: b.w, height: b.h,
        top: b.top, bottom: (b as any).bottom,
        left: (b as any).left, right: (b as any).right,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${b.c} 0%, transparent 70%)`,
        filter: `blur(${b.blur}px)`,
        animation: b.anim,
      }} />
    ))}
  </div>
);

/* ─── Canvas particles ───────────────────────────────────────── */
const Particles: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d")!;
    const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    type P = { x:number; y:number; vx:number; vy:number; r:number; a:number };
    const W = () => c.width, H = () => c.height;
    const ps: P[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * W(), y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.3, a: Math.random() * 0.3 + 0.06,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      for (const p of ps) {
        p.x = ((p.x + p.vx) % W() + W()) % W();
        p.y = ((p.y + p.vy) % H() + H()) % H();
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254,144,1,${p.a})`; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={ref} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }} />;
};

/* ─── Terminal ───────────────────────────────────────────────── */
const TERM: { text: string; type: "cmd" | "out" | "ok" | "dim" }[] = [
  { text: "$ stalios connect --wallet",          type: "cmd" },
  { text: "> scanning blockchain...",            type: "dim" },
  { text: "> wallet: 0x1a2b...c3d4   verified", type: "ok"  },
  { text: "> STA balance: 1,250.00 STA",         type: "out" },
  { text: "> access tier: BUILDERS ROOM",        type: "ok"  },
  { text: "",                                    type: "dim" },
  { text: "$ enter builders-room",               type: "cmd" },
  { text: "> token gate: passed",                type: "ok"  },
  { text: "> 142 builders currently online",     type: "out" },
  { text: "> welcome to stalios dao  ✓",         type: "ok"  },
];

const Terminal: React.FC = () => {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown >= TERM.length) {
      const t = setTimeout(() => setShown(0), 3200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShown(s => s + 1), shown === 0 ? 700 : 420);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div className="float" style={{
      ...glass(0.06),
      borderRadius: 14,
      overflow: "hidden",
      fontFamily: "monospace",
      fontSize: 13,
      boxShadow: "0 0 0 1px rgba(254,144,1,0.1), 0 48px 100px rgba(0,0,0,0.7)",
    }}>
      {/* titlebar */}
      <div style={{
        padding: "11px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        gap: 7,
        background: "rgba(255,255,255,0.02)",
      }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }} />
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--muted-2)", letterSpacing: "0.06em" }}>
          stalios-cli · v1.0.0
        </span>
      </div>
      {/* body */}
      <div style={{ padding: "20px 22px", minHeight: 290, lineHeight: 2 }}>
        {TERM.slice(0, shown).map((line, i) => (
          <div key={`${shown}-${i}`} style={{
            color: line.type === "cmd" ? "#fff"
                 : line.type === "ok"  ? "#22c55e"
                 : line.type === "dim" ? "rgba(255,255,255,0.3)"
                 : "rgba(255,255,255,0.6)",
          }}>
            {line.type === "cmd" && <span style={{ color: "var(--primary)", marginRight: 6 }}>❯</span>}
            {line.text}
          </div>
        ))}
        {shown < TERM.length && <span className="cursor">▋</span>}
      </div>
    </div>
  );
};

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Products",    href: "#products" },
    { label: "How it works",href: "#how-it-works" },
    { label: "Ecosystem",   href: "#ecosystem" },
    { label: "Community",   href: "#community" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(6,6,10,0.82)" : "transparent",
      backdropFilter: scrolled ? "blur(28px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      transition: "all 0.3s ease",
    }}>
      <nav style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <img src="/logo.svg" alt="Stalios" style={{ height:30, width:30 }} />
          <span style={{ fontSize:17, fontWeight:700, color:"#fff", letterSpacing:"-0.02em" }}>Stalios</span>
        </a>

        <div className="hide-mobile" style={{ display:"flex", gap:32, alignItems:"center" }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              color:"var(--muted)", fontSize:13, fontWeight:500,
              textDecoration:"none", letterSpacing:"0.01em", transition:"color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
            style={{ ...glowBtn, fontSize:12, padding:"8px 18px" }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ffaa22";
              e.currentTarget.style.boxShadow = "0 0 36px rgba(254,144,1,0.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(254,144,1,0.45)";
            }}>
            Launch App <RiExternalLinkLine size={12} />
          </a>
          <button onClick={() => setOpen(!open)} className="show-mobile"
            style={{ background:"none", border:"none", color:"var(--muted)", cursor:"pointer", padding:4 }}>
            {open ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          ...glass(0.06),
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 24px 24px",
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              display:"block", color:"var(--muted)", fontSize:15,
              fontWeight:500, textDecoration:"none", padding:"10px 0",
              borderBottom:"1px solid rgba(255,255,255,0.04)",
            }}>{l.label}</a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ─── Hero ───────────────────────────────────────────────────── */
const Hero: React.FC = () => (
  <section style={{
    position: "relative",
    overflow: "hidden",
    minHeight: "100vh",
    background: "radial-gradient(circle, rgba(255,255,255,0.038) 1px, transparent 1px) center/28px 28px var(--bg)",
    display: "flex",
    alignItems: "center",
  }}>
    <Particles />
    <div style={{
      maxWidth: 1200, margin: "0 auto", padding: "120px 24px 80px",
      width: "100%", position: "relative", zIndex: 1,
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 64, alignItems: "center",
    }} className="hero-grid">

      {/* ── Left ── */}
      <div>
        <div className="anim-in" style={{ marginBottom: 32 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: "1px solid rgba(254,144,1,0.3)",
            borderRadius: 4, padding: "5px 12px",
            fontSize: 11, fontWeight: 600, color: "var(--primary)",
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "rgba(254,144,1,0.05)",
            boxShadow: "0 0 18px rgba(254,144,1,0.18)",
          }}>
            <RiShieldLine size={12} />
            DAO Ecosystem · Token-Gated Access
          </span>
        </div>

        <h1 className="anim-up d-100" style={{
          fontSize: "clamp(56px, 8vw, 100px)",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-0.04em",
          margin: "0 0 32px",
          color: "#fff",
        }}>
          Build.<br />
          Connect.<br />
          <span className="gradient-text" style={{ filter: "drop-shadow(0 0 30px rgba(254,144,1,0.5))" }}>
            Own.
          </span>
        </h1>

        <p className="anim-up d-200" style={{
          fontSize: 16, lineHeight: 1.75, color: "var(--muted)",
          margin: "0 0 40px", maxWidth: 460,
        }}>
          Stalios is a DAO-governed ecosystem where your token holdings
          determine your access. Govern, build, and co-own the products you use.
        </p>

        <div className="anim-up d-300" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
          <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
            style={glowBtn}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#ffaa22";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(254,144,1,0.75)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(254,144,1,0.45)";
            }}>
            Launch App <RiArrowRightLine size={14} />
          </a>
          <a href="#products" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            ...glass(0.03),
            color: "var(--muted)", fontSize: 13, fontWeight: 500,
            padding: "12px 24px", borderRadius: 6, textDecoration: "none",
            transition: "color 0.2s, background 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
            Explore Products
          </a>
        </div>

        {/* Stats strip */}
        <div className="anim-up d-400" style={{
          display: "flex", gap: 36,
          paddingTop: 36, borderTop: "1px solid rgba(255,255,255,0.07)",
        }}>
          {[
            { val: "1 STA", sub: "to participate" },
            { val: "3+",    sub: "products live" },
            { val: "DAO",   sub: "governed" },
          ].map(s => (
            <div key={s.val}>
              <div style={{
                fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #fff 20%, #fe9001 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.val}</div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2, letterSpacing: "0.04em" }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Contract address */}
        <div className="anim-up d-500" style={{ marginTop: 28 }}>
          <HeroContract />
        </div>
      </div>

      {/* ── Right: Terminal ── */}
      <div className="terminal-col anim-in d-300">
        <Terminal />
      </div>
    </div>
  </section>
);

/* ─── Live belt ──────────────────────────────────────────────── */
const LiveBelt: React.FC = () => {
  const items = [
    { text: "● LIVE ON-CHAIN", accent: true },
    { text: "STA TOKEN", accent: false },
    { text: "TOKEN-GATED ACCESS", accent: false },
    { text: "DAO GOVERNED", accent: true },
    { text: "ETH MAINNET", accent: false },
    { text: "ON-CHAIN VERIFIED", accent: false },
    { text: "BUILD. CONNECT. OWN.", accent: true },
    { text: "0% VC DEPENDENCY", accent: false },
    { text: `CA: ${CONTRACT.slice(0,6)}…${CONTRACT.slice(-4)}`, accent: false },
    { text: "● LIVE ON-CHAIN", accent: true },
    { text: "STA TOKEN", accent: false },
    { text: "TOKEN-GATED ACCESS", accent: false },
    { text: "DAO GOVERNED", accent: true },
    { text: "ETH MAINNET", accent: false },
    { text: "ON-CHAIN VERIFIED", accent: false },
    { text: "BUILD. CONNECT. OWN.", accent: true },
    { text: "0% VC DEPENDENCY", accent: false },
    { text: `CA: ${CONTRACT.slice(0,6)}…${CONTRACT.slice(-4)}`, accent: false },
  ];
  return (
    <div style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      ...glass(0.02),
      padding: "13px 0",
      overflow: "hidden",
    }}>
      <div className="marquee" style={{ display: "inline-flex", gap: 56, alignItems: "center" }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontSize: 11, fontWeight: 600, letterSpacing: "0.1em",
            color: item.accent ? "var(--primary)" : "var(--muted-2)",
            textShadow: item.accent ? "0 0 14px rgba(254,144,1,0.5)" : "none",
          }}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Features ───────────────────────────────────────────────── */
const Features: React.FC = () => {
  const cards = [
    {
      icon: <RiCoinLine size={22} />,
      title: "Token-Gated by Design",
      body: "Every room, every feature, every proposal — access is governed by your STA balance. Hold more, unlock more.",
    },
    {
      icon: <RiFingerprint2Line size={22} />,
      title: "Wallet = Identity",
      body: "No passwords. No sign-ups. Connect your wallet and your on-chain identity unlocks everything instantly.",
    },
    {
      icon: <RiChatPollLine size={22} />,
      title: "DAO Governance",
      body: "Every fee, roadmap item, and product decision is voted on by STA holders. You don't use Stalios — you own it.",
    },
    {
      icon: <RiShieldLine size={22} />,
      title: "On-Chain Verified",
      body: "All access checks happen on-chain. No server decides your tier. The contract does — transparently.",
    },
  ];

  return (
    <section style={{ padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--primary)",
            marginBottom: 16, textShadow: "0 0 20px rgba(254,144,1,0.4)",
          }}>The Protocol</p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800,
            letterSpacing: "-0.03em", margin: 0, color: "#fff",
            maxWidth: 560,
          }}>
            Built for owners,<br />not users.
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1, border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, overflow: "hidden",
          background: "rgba(254,144,1,0.07)",
        }} className="feat-grid">
          {cards.map((c, i) => (
            <div key={i}
              style={{
                ...glass(),
                padding: "40px 32px",
                transition: "background 0.25s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.055)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.028)"}>
              <div style={{
                color: "var(--primary)", marginBottom: 20,
                filter: "drop-shadow(0 0 10px rgba(254,144,1,0.6))",
              }}>
                {c.icon}
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 700, color: "#fff",
                margin: "0 0 10px", letterSpacing: "-0.01em",
              }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>

        {/* Big stat row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, marginTop: 1,
          background: "rgba(254,144,1,0.07)",
          borderLeft: "1px solid rgba(255,255,255,0.07)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "0 0 14px 14px",
          overflow: "hidden",
        }}>
          {[
            { val: "100%", label: "Community-driven" },
            { val: "0%",   label: "VC dependency" },
            { val: "STA",  label: "Core ecosystem token" },
          ].map(s => (
            <div key={s.val} style={{ ...glass(), padding: "32px 36px", textAlign: "center" }}>
              <div style={{
                fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8,
                background: "linear-gradient(135deg, #fff 0%, #fe9001 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Products ───────────────────────────────────────────────── */
const Products: React.FC = () => {
  const chatFeatures = [
    "Token-gated room access — hold STA to unlock",
    "DAO-exclusive channel for governance discussion",
    "Builders Room for 100+ STA holders",
    "Real-time messaging with wallet identity",
    "On-chain verified membership, zero passwords",
  ];
  const upcoming = [
    { icon: <RiLineChartLine size={20} />, name: "STA Dashboard",       status: "In Development", body: "Track STA metrics, burn rate, holder distribution in real time." },
    { icon: <RiRocketLine size={20} />,    name: "Presale / Launchpad", status: "Coming Soon",    body: "Curated DAO-vetted launches with early access for STA holders." },
    { icon: <RiGovernmentLine size={20} />,name: "Stalios Gov",         status: "Coming Soon",    body: "On-chain proposal creation and token-weighted voting." },
    { icon: <RiTeamLine size={20} />,      name: "Stalios Guilds",      status: "Roadmap",        body: "Working groups, delegation, and on-chain rewards." },
  ];

  return (
    <section id="products" style={{ padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--primary)",
          marginBottom: 16, textShadow: "0 0 20px rgba(254,144,1,0.4)",
        }}>Products</p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800,
          letterSpacing: "-0.03em", margin: "0 0 80px", color: "#fff",
        }}>Everything your DAO needs</h2>

        {/* ── Featured: Chat ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 1, border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, overflow: "hidden",
          background: "rgba(254,144,1,0.07)", marginBottom: 1,
        }} className="prod-grid">
          <div style={{ overflow: "hidden", background: "rgba(6,6,10,0.6)" }}>
            <img src="/theme.jpg" alt="Stalios Chat"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ ...glass(), padding: "52px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{
                background: "var(--primary)", borderRadius: 7, padding: "7px 9px",
                display: "flex", alignItems: "center",
                boxShadow: "0 0 18px rgba(254,144,1,0.55)",
              }}>
                <RiMessage3Line size={16} color="#000" />
              </div>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "var(--primary)",
                display: "inline-flex", alignItems: "center", gap: 7,
              }}>
                <span className="live-dot" /> Live Now
              </span>
            </div>
            <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", margin: "0 0 14px" }}>
              Stalios Chat
            </h3>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, margin: "0 0 32px" }}>
              The first Stalios product. Token-gated rooms where your STA
              holdings define your access — no passwords, no servers, just chain.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
              {chatFeatures.map(f => (
                <li key={f} style={{
                  display: "flex", alignItems: "flex-start", gap: 10,
                  marginBottom: 10, fontSize: 13, color: "var(--muted)", lineHeight: 1.5,
                }}>
                  <RiCheckLine size={15} color="var(--primary)" style={{ flexShrink: 0, marginTop: 1 }} />
                  {f}
                </li>
              ))}
            </ul>
            <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
              style={{ ...glowBtn, alignSelf: "flex-start" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ffaa22"; e.currentTarget.style.boxShadow = "0 0 36px rgba(254,144,1,0.7)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(254,144,1,0.45)"; }}>
              Open Chat <RiArrowRightLine size={14} />
            </a>
          </div>
        </div>

        {/* ── Upcoming 4-col ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1, border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, overflow: "hidden",
          background: "rgba(254,144,1,0.07)", marginTop: 24,
        }} className="feat-grid">
          {upcoming.map(p => (
            <div key={p.name} style={{ ...glass(), padding: "32px 28px", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.055)"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.028)"}>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                marginBottom: 20,
              }}>
                <div style={{ color: "var(--primary)", filter: "drop-shadow(0 0 8px rgba(254,144,1,0.5))" }}>
                  {p.icon}
                </div>
                <span style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "var(--muted-2)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 3, padding: "3px 7px",
                }}>{p.status}</span>
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "#fff", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
                {p.name}
              </h4>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── How it works ───────────────────────────────────────────── */
const HowItWorks: React.FC = () => {
  const steps = [
    { num: "01", title: "Acquire STA",         body: "Purchase or earn STA tokens. The more you hold, the more rooms and features unlock." },
    { num: "02", title: "Connect your wallet", body: "Link your Web3 wallet. Your token balance is verified on-chain — ownership is your identity." },
    { num: "03", title: "Access gated spaces", body: "General Chat is free. DAO Chat unlocks at 1 STA. Builders Room opens at 100 STA." },
    { num: "04", title: "Govern and own",      body: "Vote on proposals, shape the roadmap, earn rewards. You're an owner, not just a user." },
  ];

  return (
    <section id="how-it-works" style={{
      padding: "100px 24px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      background: "rgba(6,6,10,0.65)",
      backdropFilter: "blur(2px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 80, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Left heading */}
          <div style={{ flexShrink: 0, maxWidth: 280 }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
              textTransform: "uppercase", color: "var(--primary)",
              marginBottom: 16, textShadow: "0 0 20px rgba(254,144,1,0.4)",
            }}>How it works</p>
            <h2 style={{
              fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 800,
              letterSpacing: "-0.03em", margin: 0, color: "#fff", lineHeight: 1.1,
            }}>
              Your tokens are your key.
            </h2>
          </div>

          {/* Steps */}
          <div style={{ flex: 1, minWidth: 300 }}>
            {steps.map((s, i) => (
              <div key={s.num} style={{
                display: "flex", gap: 28, alignItems: "flex-start",
                paddingBottom: i < steps.length - 1 ? 40 : 0,
                marginBottom: i < steps.length - 1 ? 40 : 0,
                borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, fontFamily: "monospace",
                  letterSpacing: "0.08em", flexShrink: 0, paddingTop: 3,
                  background: "linear-gradient(135deg, #fe9001, #ffb347)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{s.num}</div>
                <div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: "#fff",
                    margin: "0 0 8px", letterSpacing: "-0.01em",
                  }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Ecosystem ──────────────────────────────────────────────── */
const Ecosystem: React.FC = () => {
  const tiers = [
    {
      label: "General Chat",
      requirement: "Open access",
      icon: <RiMessage3Line size={20} />,
      perks: ["Public chat rooms", "Community announcements", "Read proposals"],
      highlight: false,
    },
    {
      label: "DAO Chat",
      requirement: "Hold 1 STA",
      icon: <RiShieldLine size={20} />,
      perks: ["All General perks", "DAO governance channel", "Vote on proposals"],
      highlight: true,
    },
    {
      label: "Builders Room",
      requirement: "Hold 100 STA",
      icon: <RiLockLine size={20} />,
      perks: ["All DAO perks", "Direct builder access", "Early product previews", "Priority support"],
      highlight: false,
    },
  ];

  return (
    <section id="ecosystem" style={{ padding: "100px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--primary)",
          marginBottom: 16, textShadow: "0 0 20px rgba(254,144,1,0.4)",
        }}>Ecosystem</p>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 64, flexWrap: "wrap", gap: 24,
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 800,
            letterSpacing: "-0.03em", margin: 0, color: "#fff",
          }}>Token tiers, real access</h2>
          <p style={{ fontSize: 14, color: "var(--muted)", maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
            The more STA you hold, the deeper you go. Access isn't bought — it's earned through ownership.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14, overflow: "hidden",
          background: "rgba(254,144,1,0.07)",
        }} className="tiers-grid">
          {tiers.map(t => (
            <div key={t.label}
              className={t.highlight ? "spin-border" : ""}
              style={{
                background: t.highlight
                  ? "linear-gradient(180deg, rgba(254,144,1,0.13) 0%, rgba(255,255,255,0.022) 50%)"
                  : "rgba(255,255,255,0.022)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "44px 36px",
                position: "relative",
              }}>
              {t.highlight && (
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, transparent, #fe9001 25%, #ffb347 75%, transparent)",
                  boxShadow: "0 0 18px rgba(254,144,1,0.6)",
                }} />
              )}
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 44, height: 44, borderRadius: 10, marginBottom: 20,
                background: t.highlight ? "rgba(254,144,1,0.15)" : "rgba(255,255,255,0.05)",
                color: t.highlight ? "var(--primary)" : "var(--muted)",
                border: t.highlight ? "1px solid rgba(254,144,1,0.3)" : "1px solid rgba(255,255,255,0.07)",
                filter: t.highlight ? "drop-shadow(0 0 12px rgba(254,144,1,0.6))" : "none",
              }}>
                {t.icon}
              </div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", marginBottom: 8,
                color: t.highlight ? "var(--primary)" : "var(--muted-2)",
                textShadow: t.highlight ? "0 0 14px rgba(254,144,1,0.5)" : "none",
              }}>{t.requirement}</div>
              <h3 style={{
                fontSize: 22, fontWeight: 800, color: "#fff",
                margin: "0 0 24px", letterSpacing: "-0.02em",
              }}>{t.label}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.perks.map(p => (
                  <li key={p} style={{
                    display: "flex", alignItems: "center", gap: 9,
                    marginBottom: 10, fontSize: 13, color: "var(--muted)",
                  }}>
                    <RiCheckLine size={13} color="var(--primary)" style={{ flexShrink: 0 }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── Community CTA ──────────────────────────────────────────── */
const Community: React.FC = () => (
  <section id="community" style={{
    padding: "120px 24px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    background: "rgba(6,6,10,0.65)",
    backdropFilter: "blur(2px)",
  }}>
    <div style={{
      maxWidth: 760, margin: "0 auto", textAlign: "center",
    }}>
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: "var(--primary)",
        marginBottom: 24, textShadow: "0 0 20px rgba(254,144,1,0.4)",
      }}>Community</p>
      <h2 style={{
        fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 800,
        letterSpacing: "-0.035em", margin: "0 0 24px", color: "#fff", lineHeight: 1.05,
      }}>
        Owned by the people<br />
        <span className="gradient-text">who build it.</span>
      </h2>
      <p style={{
        fontSize: 17, color: "var(--muted)", lineHeight: 1.75,
        margin: "0 auto 48px", maxWidth: 520,
      }}>
        Stalios is not a platform you use — it's a protocol you own. Every decision
        is governed by STA holders. Every product serves the community.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
        <a href={CHAT_URL} target="_blank" rel="noopener noreferrer"
          style={{ ...glowBtn, padding: "13px 28px", fontSize: 14 }}
          onMouseEnter={e => { e.currentTarget.style.background = "#ffaa22"; e.currentTarget.style.boxShadow = "0 0 40px rgba(254,144,1,0.75)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "var(--primary)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(254,144,1,0.45)"; }}>
          Join the DAO <RiArrowRightLine size={15} />
        </a>
        <a href="#" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          ...glass(0.03),
          color: "var(--muted)", fontSize: 14, fontWeight: 500,
          padding: "13px 28px", borderRadius: 6, textDecoration: "none",
          transition: "color 0.2s, background 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
        onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
          Read the docs
        </a>
      </div>

      {/* Mini stats */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 48,
        marginTop: 72, paddingTop: 48,
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        {[
          { val: "50%",  label: "On-chain governance" },
          { val: "STA",  label: "Governance token" },
          { val: "30%",  label: "Community treasury" },
        ].map(s => (
          <div key={s.val} style={{ textAlign: "center" }}>
            <div style={{
              fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 4,
              background: "linear-gradient(135deg, #fff 0%, #fe9001 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>{s.val}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Footer ─────────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer style={{
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "60px 24px",
    ...glass(0.02),
  }}>
    <div style={{
      maxWidth: 1200, margin: "0 auto",
      display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 48, flexWrap: "wrap",
    }} className="footer-grid">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <img src="/logo.svg" alt="Stalios" style={{ height: 26, width: 26 }} />
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Stalios</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 20px", maxWidth: 240 }}>
          A DAO-powered ecosystem for builders, governors, and community members.
        </p>
        <p style={{ fontSize: 11, color: "var(--muted-2)", margin: "0 0 16px", fontFamily: "monospace", letterSpacing: "0.04em" }}>
          Build. Connect. Own.
        </p>
        <ContractBadge />
      </div>

      {[
        { heading: "Products",  links: ["Stalios Chat", "STA Dashboard", "Presale / Launchpad", "Stalios Gov", "Stalios Guilds"] },
        { heading: "Resources", links: ["Documentation", "Whitepaper", "GitHub", "Brand Kit"] },
        { heading: "Community", links: ["Discord", "Twitter", "Telegram", "Forum"] },
      ].map(col => (
        <div key={col.heading}>
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--muted-2)", marginBottom: 18,
          }}>{col.heading}</div>
          {col.links.map(l => (
            <a key={l} href="#" style={{
              display: "block", fontSize: 13, color: "var(--muted)",
              textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {l}
            </a>
          ))}
        </div>
      ))}
    </div>

    <div style={{
      maxWidth: 1200, margin: "48px auto 0",
      paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.04)",
      display: "flex", justifyContent: "space-between",
      alignItems: "center", flexWrap: "wrap", gap: 16,
    }}>
      <span style={{ fontSize: 12, color: "var(--muted-2)" }}>
        © 2026 Stalios DAO. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy Policy", "Terms of Service", "Token Disclaimer"].map(l => (
          <a key={l} href="#" style={{
            fontSize: 12, color: "var(--muted-2)", textDecoration: "none", transition: "color 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--muted)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-2)")}>
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

/* ─── App ────────────────────────────────────────────────────── */
const App: React.FC = () => (
  <>
    <Aurora />
    <Navbar />
    <main>
      <Hero />
      <LiveBelt />
      <Features />
      <Products />
      <HowItWorks />
      <Ecosystem />
      <Community />
    </main>
    <Footer />
  </>
);

export default App;


