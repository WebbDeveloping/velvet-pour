"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";

const borderColor = "rgba(198, 161, 91, 0.28)";

const FAQS = [
  {
    number: "01",
    question: "What comes with a Velvet Pour bar package?",
    answer:
      "Each package is built to keep your night running smoothly. That typically includes professional bartenders, mixers, garnishes, ice, bar tools, cups, napkins, full setup, and cleanup. Want to level it up? We can add signature cocktails, custom labels, or themed bar styling.",
  },
  {
    number: "02",
    question: "Do you supply the alcohol, or should I buy it myself?",
    answer:
      "We bring it. Our stocked packages cover spirits, beer, wine, mixers, garnishes, and ice — so you choose the vibe and we arrive ready to pour. No last-minute store runs required.",
  },
  {
    number: "03",
    question: "Are your bartenders licensed and insured?",
    answer:
      "Yes. Velvet Pour is fully licensed and carries general liability and liquor liability coverage. If your venue needs extra paperwork, we can provide the documentation so everything stays compliant.",
  },
  {
    number: "04",
    question: "How is pricing determined for an event?",
    answer:
      "Cost depends on guest count, package level, event length, and location. We offer everything from beer-and-wine service to elevated open bars. Send us a few details and we'll put together a quote for your celebration.",
  },
  {
    number: "05",
    question: "Can we create a custom menu or signature drinks?",
    answer:
      "Definitely. We love building cocktail menus around your theme and taste — whether that's a wedding signature pour or branded drinks for a launch party. Custom and memorable is the goal.",
  },
  {
    number: "06",
    question: "How do we know how many bartenders to book?",
    answer:
      "Most events run best with at least two bartenders so setup, service, restocking, and breakdown stay smooth. Bigger guest lists or multiple stations may need more staff — we'll help you size it right.",
  },
] as const;

function PlusIcon({ open }: { open: boolean }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: 18,
        height: 18,
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: 2,
          mt: "-1px",
          backgroundColor: brandColors.ivory,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: 2,
          height: "100%",
          ml: "-1px",
          backgroundColor: brandColors.ivory,
          transform: open ? "scaleY(0)" : "scaleY(1)",
          transition: "transform 0.2s ease",
          transformOrigin: "center",
        }}
      />
    </Box>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Box
      component="section"
      id="faq"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 60% 40% at 15% 10%,
            rgba(74, 31, 53, 0.22) 0%,
            transparent 60%
          ),
          linear-gradient(
            180deg,
            #0d0c0c 0%,
            #121010 100%
          )
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 500,
              fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
              lineHeight: 1.08,
              color: brandColors.ivory,
              m: 0,
            }}
          >
            FAQ
          </Typography>
        </Box>

        <Box>
          {FAQS.map((item, index) => {
            const open = openIndex === index;

            return (
              <Box
                key={item.number}
                sx={{
                  borderBottom: `1px solid ${borderColor}`,
                  pl: { xs: 0, md: 1.5 },
                  pr: { xs: 0, md: 1 },
                }}
              >
                <Box
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpenIndex(open ? null : index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setOpenIndex(open ? null : index);
                    }
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    cursor: "pointer",
                    py: { xs: 2.25, md: 2.5 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 1.25, md: 1.5 },
                      minWidth: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "1rem",
                        color: brandColors.gold,
                        flexShrink: 0,
                      }}
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      component="h3"
                      sx={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontWeight: 500,
                        fontSize: { xs: "1.3rem", md: "1.75rem" },
                        lineHeight: 1.25,
                        color: brandColors.ivory,
                        m: 0,
                      }}
                    >
                      {item.question}
                    </Typography>
                  </Box>

                  <PlusIcon open={open} />
                </Box>

                <Collapse in={open} timeout={220}>
                  <Box
                    sx={{
                      pb: { xs: 2.25, md: 2.5 },
                      pl: { xs: 0, md: 4.25 },
                      pr: { xs: 3.25, md: 4 },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9375rem", md: "1rem" },
                        lineHeight: 1.75,
                        color: "rgba(243, 235, 221, 0.82)",
                        m: 0,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </Box>
                </Collapse>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
