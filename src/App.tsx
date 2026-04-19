import React, { useState, useEffect } from "react";
import {
  RiShieldLine,
  RiArrowRightLine,
  RiCheckLine,
  RiLockLine,
  RiTeamLine,
  RiGovernmentLine,
  RiMessage3Line,
  RiMenuLine,
  RiCloseLine,
  RiExternalLinkLine,
  RiArrowDownLine,
  RiLineChartLine,
  RiRocketLine,
} from "react-icons/ri";

const CHAT_URL = "https://chat.stalios.com/";

/* ─── Navbar ─────────────────────────────────────────────────── */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Products", href: "#products" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
          }}
        >
          <img
            src="/logo.svg"
            alt="Stalios"
            style={{ height: 32, width: 32 }}
          />
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Stalios
          </span>
        </a>

        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "var(--muted)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href={CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "var(--primary)",
              color: "#000",
              fontSize: 13,
              fontWeight: 700,
              padding: "8px 18px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffaa22")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--primary)")
            }
          >
            Launch App
            <RiExternalLinkLine size={13} />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "var(--muted)",
              cursor: "pointer",
              display: "none",
              padding: 4,
            }}
            className="show-mobile"
          >
            {menuOpen ? <RiCloseLine size={22} /> : <RiMenuLine size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          style={{
            background: "var(--surface-1)",
            borderTop: "1px solid var(--border)",
            padding: "16px 24px 24px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "var(--muted)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* ─── Hero ───────────────────────────────────────────────────── */
type PreviewTab = "chat" | "dashboard" | "presale";

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PreviewTab>("chat");

  const tabs: { id: PreviewTab; label: string; src: string }[] = [
    { id: "chat", label: "Chat", src: "/theme.jpg" },
    {
      id: "dashboard",
      label: "Dashboard",
      src: "/whatDashboardShouldLoogLike.jpg",
    },
    { id: "presale", label: "Presale", src: "/whatPresaleShouldLooklike.jpg" },
  ];

  return (
    <section
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 75% 35%, rgba(254,144,1,0.13) 0%, transparent 65%),
          radial-gradient(ellipse 55% 65% at 10% 80%, rgba(240,89,0,0.09) 0%, transparent 55%),
          radial-gradient(ellipse 40% 50% at 50% 0%, rgba(254,144,1,0.05) 0%, transparent 50%),
          #0a0a0a
        `,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Eyebrow */}
        <div className="animate-fade-in" style={{ marginBottom: 28 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid var(--border)",
              borderRadius: 4,
              padding: "5px 12px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--primary)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <RiShieldLine size={13} />
            DAO Ecosystem · Token-Gated Access
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <h1
              className="animate-fade-in-up animate-delay-100"
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 24px",
                color: "#fff",
              }}
            >
              Build.
              <br />
              Connect.
              <br />
              <span style={{ color: "var(--primary)" }}>Own.</span>
            </h1>
            <p
              className="animate-fade-in-up animate-delay-200"
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--muted)",
                margin: "0 0 36px",
                maxWidth: 480,
              }}
            >
              Stalios is a DAO-governed ecosystem where your token holdings
              determine your access. Participate in governance, join token-gated
              communities, and co-own the products you use.
            </p>
            <div
              className="animate-fade-in-up animate-delay-300"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--primary)",
                  color: "#000",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: 6,
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ffaa22")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--primary)")
                }
              >
                Launch App <RiArrowRightLine size={15} />
              </a>
              <a
                href="#products"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "var(--muted)",
                  fontSize: 14,
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: 6,
                  textDecoration: "none",
                  border: "1px solid var(--border)",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "var(--muted-2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                Explore Products
              </a>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-in-up animate-delay-400"
              style={{
                display: "flex",
                gap: 40,
                marginTop: 56,
                paddingTop: 40,
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { val: "1 STA", label: "Minimum to participate" },
                { val: "3+", label: "Products launching" },
                { val: "DAO", label: "Community governed" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#fff",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — tabbed app preview */}
          <div className="animate-fade-in animate-delay-200 hero-preview">
            {/* Tab buttons */}
            <div
              style={{
                display: "flex",
                gap: 6,
                marginBottom: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 4,
                width: "fit-content",
              }}
            >
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    background:
                      activeTab === t.id ? "var(--primary)" : "transparent",
                    color: activeTab === t.id ? "#000" : "var(--muted)",
                    border: "none",
                    borderRadius: 5,
                    padding: "6px 16px",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Screenshot */}
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                background: "var(--surface-1)",
              }}
            >
              <img
                key={activeTab}
                src={tabs.find((t) => t.id === activeTab)!.src}
                alt={`Stalios ${activeTab} preview`}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>

        <a
          href="#products"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 64,
            color: "var(--muted-2)",
            textDecoration: "none",
            gap: 6,
            fontSize: 12,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Scroll <RiArrowDownLine size={14} />
        </a>
      </div>
    </section>
  );
};

/* ─── Marquee banner ─────────────────────────────────────────── */
const Banner: React.FC = () => {
  const items = [
    "Token-Gated Chat",
    "DAO Governance",
    "Build. Connect. Own.",
    "Community Ownership",
    "Stalios Ecosystem",
    "Token-Gated Chat",
    "DAO Governance",
    "Build. Connect. Own.",
    "Community Ownership",
    "Stalios Ecosystem",
  ];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface-1)",
        padding: "14px 0",
        overflow: "hidden",
      }}
    >
      <div
        className="animate-marquee"
        style={{ display: "inline-flex", gap: 64 }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: i % 2 === 0 ? "var(--muted)" : "var(--primary)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ─── Token Stats ─────────────────────────────────────────────── */
const TokenStats: React.FC = () => (
  <section
    style={{
      borderTop: "1px solid var(--border)",
      padding: "80px 24px",
    }}
  >
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--primary)",
          marginBottom: 40,
          textAlign: "center",
        }}
      >
        Token · Stats
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--border)",
        }}
        className="stats-grid"
      >
        {[
          { val: "100%", label: "Community-driven growth" },
          { val: "STA", label: "Core ecosystem token" },
          { val: "0%", label: "VC dependency" },
          { val: "Real", label: "Product-driven value" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--surface-1)",
              padding: "44px 36px",
              textAlign: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "var(--surface-2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.background =
                "var(--surface-1)")
            }
          >
            <div
              style={{
                fontSize: 42,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.03em",
                marginBottom: 10,
                lineHeight: 1,
              }}
            >
              {s.val}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.5,
                maxWidth: 160,
                margin: "0 auto",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Products ───────────────────────────────────────────────── */
const Products: React.FC = () => {
  const chatFeatures = [
    "Token-gated room access — hold STA to unlock channels",
    "DAO-exclusive chat for governance discussion",
    "Builders' room for 100+ STA holders",
    "Real-time messaging with wallet identity",
    "On-chain verified membership, no passwords",
  ];

  const upcomingProducts = [
    {
      icon: <RiGovernmentLine size={20} />,
      name: "Stalios Gov",
      description:
        "On-chain proposal creation and voting, weighted by your STA holdings.",
      status: "Coming soon",
    },
    {
      icon: <RiTeamLine size={20} />,
      name: "Stalios Guilds",
      description:
        "Organize into working groups, delegate responsibilities, earn rewards.",
      status: "Roadmap",
    },
  ];

  return (
    <section
      id="products"
      style={{ borderTop: "1px solid var(--border)", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 16,
          }}
        >
          Products
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            margin: "0 0 16px",
            color: "#fff",
          }}
        >
          Everything your DAO needs
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            maxWidth: 520,
            lineHeight: 1.7,
            margin: "0 0 80px",
          }}
        >
          A growing suite of tools built for token holders. Start with Chat,
          govern with STA, and expand as the ecosystem matures.
        </p>

        {/* Featured: Stalios Chat */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            marginBottom: 2,
            background: "var(--border)",
          }}
          className="product-grid"
        >
          <div style={{ background: "var(--surface-1)", overflow: "hidden" }}>
            <img
              src="/theme.jpg"
              alt="Stalios Chat"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div
            style={{
              background: "var(--surface-1)",
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  background: "var(--primary)",
                  borderRadius: 6,
                  padding: "6px 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RiMessage3Line size={16} color="#000" />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--primary)",
                }}
              >
                Live Now
              </span>
            </div>

            <h3
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: "0 0 12px",
              }}
            >
              Stalios Chat
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.7,
                margin: "0 0 32px",
              }}
            >
              The first application in the Stalios ecosystem. A token-gated chat
              platform where your STA holdings determine which rooms you can
              access — built for builders and governors alike.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 36px" }}>
              {chatFeatures.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                    fontSize: 14,
                    color: "var(--muted)",
                    lineHeight: 1.5,
                  }}
                >
                  <RiCheckLine
                    size={16}
                    color="var(--primary)"
                    style={{ flexShrink: 0, marginTop: 1 }}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--primary)",
                color: "#000",
                fontSize: 13,
                fontWeight: 700,
                padding: "11px 22px",
                borderRadius: 6,
                textDecoration: "none",
                alignSelf: "flex-start",
                letterSpacing: "0.01em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#ffaa22")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--primary)")
              }
            >
              Open Chat <RiArrowRightLine size={14} />
            </a>
          </div>
        </div>

        {/* Dashboard + Presale previews */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            marginTop: 24,
            background: "var(--border)",
          }}
          className="preview-grid"
        >
          {/* Dashboard */}
          <div
            style={{
              background: "var(--surface-1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <img
                src="/whatDashboardShouldLoogLike.jpg"
                alt="STA Dashboard"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ padding: "32px 36px", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RiLineChartLine size={18} />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 3,
                    padding: "3px 7px",
                  }}
                >
                  In Development
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                STA Dashboard
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Track STA token metrics in real time — circulating supply, burn
                rate, holder distribution, and ecosystem activity, all in one
                place.
              </p>
            </div>
          </div>

          {/* Presale / Launchpad */}
          <div
            style={{
              background: "var(--surface-1)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <img
                src="/whatPresaleShouldLooklike.jpg"
                alt="Stalios Presale / Launchpad"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ padding: "32px 36px", flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <div
                  style={{
                    color: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <RiRocketLine size={18} />
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 3,
                    padding: "3px 7px",
                  }}
                >
                  Coming Soon
                </span>
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}
              >
                Presale / Launchpad
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Curated project launches vetted by the Stalios DAO. STA holders
                get early access and priority allocation on every raise that
                goes live on the platform.
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming small cards: Gov + Guilds */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            marginTop: 24,
            background: "var(--border)",
          }}
          className="upcoming-grid"
        >
          {upcomingProducts.map((p) => (
            <div
              key={p.name}
              style={{
                background: "var(--surface-1)",
                padding: "36px 32px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--surface-2)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--surface-1)")
              }
            >
              <div
                style={{
                  color: "var(--primary)",
                  marginBottom: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {p.icon}
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--muted-2)",
                    border: "1px solid var(--border)",
                    borderRadius: 3,
                    padding: "3px 7px",
                  }}
                >
                  {p.status}
                </span>
              </div>
              <h4
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.name}
              </h4>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
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
    {
      num: "01",
      title: "Acquire STA",
      body: "Purchase or earn STA tokens through ecosystem participation. The more you hold, the more rooms and features unlock for you.",
    },
    {
      num: "02",
      title: "Connect your wallet",
      body: "Link your Web3 wallet. Your token balance is verified on-chain — no sign-ups, no passwords, ownership is your identity.",
    },
    {
      num: "03",
      title: "Access gated spaces",
      body: "Enter the General Chat freely. Unlock DAO Chat with 1 STA. Reach the Builders Room at 100 STA. Each tier unlocks new capabilities.",
    },
    {
      num: "04",
      title: "Govern and own",
      body: "Vote on proposals, shape the roadmap, and earn rewards. Your stake in the DAO means you're not just a user — you're an owner.",
    },
  ];

  return (
    <section
      id="how-it-works"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "120px 24px",
        background: "var(--surface-1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 16,
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            margin: "0 0 80px",
            color: "#fff",
            maxWidth: 520,
          }}
        >
          Your tokens are your key
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--border)",
          }}
          className="steps-grid"
        >
          {steps.map((s) => (
            <div
              key={s.num}
              style={{ background: "var(--bg)", padding: "40px 32px" }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "var(--primary)",
                  marginBottom: 20,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
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
      icon: <RiMessage3Line size={18} />,
      perks: ["Public chat rooms", "Community announcements", "Read proposals"],
    },
    {
      label: "DAO Chat",
      requirement: "Hold 1 STA",
      icon: <RiShieldLine size={18} />,
      perks: [
        "All General perks",
        "DAO governance channel",
        "Vote on proposals",
      ],
      highlight: true,
    },
    {
      label: "Builders Room",
      requirement: "Hold 100 STA",
      icon: <RiLockLine size={18} />,
      perks: [
        "All DAO perks",
        "Direct builder access",
        "Early product previews",
        "Priority support",
      ],
    },
  ];

  return (
    <section
      id="ecosystem"
      style={{ borderTop: "1px solid var(--border)", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 16,
          }}
        >
          Ecosystem
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.025em",
              margin: 0,
              color: "#fff",
              maxWidth: 480,
            }}
          >
            Token tiers, real access
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted)",
              maxWidth: 380,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            The Stalios ecosystem is built around token-weighted access. The
            more STA you hold, the deeper you go.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            border: "1px solid var(--border)",
            borderRadius: 12,
            overflow: "hidden",
            background: "var(--border)",
          }}
          className="tiers-grid"
        >
          {tiers.map((t) => (
            <div
              key={t.label}
              style={{
                background: t.highlight
                  ? "var(--surface-2)"
                  : "var(--surface-1)",
                padding: "40px 36px",
                position: "relative",
              }}
            >
              {t.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: "var(--primary)",
                  }}
                />
              )}
              <div
                style={{
                  color: t.highlight ? "var(--primary)" : "var(--muted-2)",
                  marginBottom: 20,
                }}
              >
                {t.icon}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: t.highlight ? "var(--primary)" : "var(--muted-2)",
                  marginBottom: 8,
                }}
              >
                {t.requirement}
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 24px",
                  letterSpacing: "-0.01em",
                }}
              >
                {t.label}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.perks.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 10,
                      fontSize: 14,
                      color: "var(--muted)",
                    }}
                  >
                    <RiCheckLine size={14} color="var(--primary)" />
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

/* ─── Community / CTA ────────────────────────────────────────── */
const Community: React.FC = () => (
  <section
    id="community"
    style={{
      borderTop: "1px solid var(--border)",
      padding: "120px 24px",
      background: "var(--surface-1)",
    }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }}
      className="community-grid"
    >
      <div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--primary)",
            marginBottom: 16,
          }}
        >
          Community
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            letterSpacing: "-0.025em",
            margin: "0 0 20px",
            color: "#fff",
          }}
        >
          Owned by the people who build it
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            lineHeight: 1.75,
            margin: "0 0 40px",
          }}
        >
          Stalios is not a platform you use — it's a protocol you own. Every
          product decision, fee structure, and roadmap item is subject to
          governance by the community that holds STA.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--primary)",
              color: "#000",
              fontSize: 13,
              fontWeight: 700,
              padding: "11px 22px",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffaa22")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--primary)")
            }
          >
            Join the DAO <RiArrowRightLine size={14} />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "transparent",
              color: "var(--muted)",
              fontSize: 13,
              fontWeight: 500,
              padding: "11px 22px",
              borderRadius: 6,
              textDecoration: "none",
              border: "1px solid var(--border)",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "var(--muted-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            Read the docs
          </a>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
          border: "1px solid var(--border)",
          borderRadius: 12,
          overflow: "hidden",
          background: "var(--border)",
        }}
      >
        {[
          { val: "50%", label: "On-chain governance" },
          { val: "STA", label: "Governance token" },
          { val: "20%", label: "VC allocation" },
          { val: "30%", label: "Community Ownership" },
        ].map((s) => (
          <div
            key={s.label}
            style={{ background: "var(--bg)", padding: "32px 28px" }}
          >
            <div
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: 4,
              }}
            >
              {s.val}
            </div>
            <div style={{ fontSize: 12, color: "var(--muted)" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Footer ─────────────────────────────────────────────────── */
const Footer: React.FC = () => (
  <footer
    style={{ borderTop: "1px solid var(--border)", padding: "60px 24px" }}
  >
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 40,
      }}
    >
      <div style={{ maxWidth: 280 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <img
            src="/logo.svg"
            alt="Stalios"
            style={{ height: 28, width: 28 }}
          />
          <span
            style={{
              fontSize: 16,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Stalios
          </span>
        </div>
        <p
          style={{
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          A DAO-powered ecosystem for builders, governors, and community
          members. Build. Connect. Own.
        </p>
      </div>

      {[
        {
          heading: "Products",
          links: [
            "Stalios Chat",
            "STA Dashboard",
            "Presale / Launchpad",
            "Stalios Gov",
            "Stalios Guilds",
          ],
        },
        {
          heading: "Resources",
          links: ["Documentation", "Whitepaper", "GitHub", "Brand Kit"],
        },
        {
          heading: "Community",
          links: ["Discord", "Twitter", "Telegram", "Forum"],
        },
      ].map((col) => (
        <div key={col.heading}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--muted-2)",
              marginBottom: 16,
            }}
          >
            {col.heading}
          </div>
          {col.links.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                display: "block",
                fontSize: 13,
                color: "var(--muted)",
                textDecoration: "none",
                marginBottom: 10,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {l}
            </a>
          ))}
        </div>
      ))}
    </div>

    <div
      style={{
        maxWidth: 1200,
        margin: "48px auto 0",
        paddingTop: 24,
        borderTop: "1px solid var(--border-subtle)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span style={{ fontSize: 12, color: "var(--muted-2)" }}>
        © 2026 Stalios DAO. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        {["Privacy Policy", "Terms of Service", "Token Disclaimer"].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: 12,
              color: "var(--muted-2)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--muted-2)")
            }
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

/* ─── Responsive styles ──────────────────────────────────────── */
const ResponsiveStyles: React.FC = () => (
  <style>{`
    @media (max-width: 900px) {
      .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
      .hero-preview { display: none !important; }
      .product-grid { grid-template-columns: 1fr !important; }
      .preview-grid { grid-template-columns: 1fr !important; }
      .upcoming-grid { grid-template-columns: 1fr !important; }
      .steps-grid { grid-template-columns: 1fr 1fr !important; }
      .tiers-grid { grid-template-columns: 1fr !important; }
      .community-grid { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 600px) {
      .steps-grid { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; }
      .hidden-mobile { display: none !important; }
    }
    @media (min-width: 601px) {
      .show-mobile { display: none !important; }
    }
  `}</style>
);

/* ─── App ────────────────────────────────────────────────────── */
const App: React.FC = () => (
  <>
    <ResponsiveStyles />
    <Navbar />
    <main>
      <Hero />
      <Banner />
      <TokenStats />
      <Products />
      <HowItWorks />
      <Ecosystem />
      <Community />
    </main>
    <Footer />
  </>
);

export default App;
