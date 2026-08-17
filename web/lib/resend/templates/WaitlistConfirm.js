import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import config from "@/config"

// Email de confirmación tras anotarse al waitlist (Sem 1).
// Todo el copy sale de config.js para mantener una sola fuente de verdad.
export default function WaitlistConfirm() {
  const appName = config.app.name
  const { preview, heading, body } = config.email.waitlist

  return (
    <Html lang={config.app.locale}>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>{heading}</Heading>
            <Text style={text}>{body}</Text>
            <Text style={footer}>
              {appName} · {config.landing.footer.tagline}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = { backgroundColor: "#f6f6f6", fontFamily: "system-ui, sans-serif" }
const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "32px",
  maxWidth: "480px",
  borderRadius: "12px",
}
const h1 = { fontSize: "22px", fontWeight: "700", color: "#111111" }
const text = { fontSize: "15px", lineHeight: "24px", color: "#444444" }
const footer = { fontSize: "12px", color: "#999999", marginTop: "24px" }
