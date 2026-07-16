import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brandColors } from "@/app/theme";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "@/lib/icons";

const borderColor = "rgba(198, 161, 91, 0.22)";

const FOOTER_LINKS = [
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
  { label: "Request a Quote", href: "/quote" },
  { label: "Back to Top", href: "/" },
] as const;

const DETAIL_ITEMS = [
  {
    label: "Service Area",
    value: "Salt Lake City and the Wasatch Front",
    Icon: MapPin,
  },
  {
    label: "Event Coverage",
    value: "Weddings, private parties, and corporate gatherings",
    Icon: ShieldCheck,
  },
  {
    label: "Booking",
    value: "Consultations available now",
    Icon: Phone,
  },
] as const;

export default function FooterContact() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        position: "relative",
        color: brandColors.ivory,
        backgroundColor: brandColors.background,
        backgroundImage: `
          radial-gradient(
            ellipse 70% 50% at 15% 0%,
            ${brandColors.burgundy} 0%,
            ${brandColors.velvet} 55%,
            ${brandColors.background} 100%
          ),
          linear-gradient(
            180deg,
            ${brandColors.velvet} 0%,
            ${brandColors.burgundy} 55%,
            ${brandColors.background} 100%
          )
        `,
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, md: 3 } }}>
        <Box
          sx={{
            py: { xs: 7, md: 9 },
            borderTop: `1px solid ${borderColor}`,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) minmax(0, 1.05fr)" },
            gap: { xs: 5, md: 6 },
          }}
        >
          <Box>
            <Typography
              component="p"
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(243, 235, 221, 0.72)",
                mb: 1.5,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "2.6rem", md: "4rem" },
                lineHeight: 0.96,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                m: 0,
              }}
            >
              Ready to
              <Box component="br" />
              Raise a Glass?
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                maxWidth: 520,
                fontSize: { xs: "0.98rem", md: "1.05rem" },
                lineHeight: 1.75,
                color: "rgba(243, 235, 221, 0.8)",
              }}
            >
              Hosting a wedding, private party, or corporate gathering? Tell us
              what you&apos;re planning and we&apos;ll help shape a polished bar
              experience around your guest list, vibe, and venue.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: 3.5, alignItems: { sm: "center" } }}
            >
              <Button component="a" href="/quote" variant="contained" endIcon={<ArrowRight size={16} />}>
                Request a Quote
              </Button>
              <Button
                component="a"
                href="#faq"
                variant="outlined"
                sx={{
                  borderColor: "rgba(243, 235, 221, 0.34)",
                  color: brandColors.ivory,
                  "&:hover": {
                    borderColor: brandColors.ivory,
                    backgroundColor: "rgba(243, 235, 221, 0.08)",
                  },
                }}
              >
                Review FAQs
              </Button>
            </Stack>
          </Box>

          <Box
            sx={{
              border: `1px solid ${borderColor}`,
              p: { xs: 2.5, md: 3 },
              backgroundColor: "rgba(13, 12, 12, 0.22)",
              backdropFilter: "blur(4px)",
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 500,
                fontSize: { xs: "1.6rem", md: "2rem" },
                lineHeight: 1.1,
                mb: 2.5,
              }}
            >
              Event Planning Details
            </Typography>

            <Stack spacing={2}>
              {DETAIL_ITEMS.map(({ label, value, Icon }) => (
                <Box
                  key={label}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "flex-start",
                    pb: 2,
                    borderBottom: `1px solid ${borderColor}`,
                  }}
                >
                  <Box
                    sx={{
                      mt: 0.25,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      border: `1px solid ${borderColor}`,
                      color: brandColors.gold,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: brandColors.gold,
                        mb: 0.4,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.96rem",
                        lineHeight: 1.7,
                        color: "rgba(243, 235, 221, 0.82)",
                      }}
                    >
                      {value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            py: 2.5,
            borderTop: `1px solid ${borderColor}`,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "0.82rem",
              letterSpacing: "0.04em",
              color: "rgba(243, 235, 221, 0.72)",
            }}
          >
            2026 Velvet Pour. Elevated mobile bartending.
          </Typography>

          <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
            {FOOTER_LINKS.map((link) => (
              <Typography
                key={link.label}
                component="a"
                href={link.href}
                sx={{
                  fontSize: "0.78rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(243, 235, 221, 0.78)",
                  textDecoration: "none",
                  "&:hover": {
                    color: brandColors.ivory,
                  },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
