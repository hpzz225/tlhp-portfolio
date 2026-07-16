import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const ContactEmail = ({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />

      <Preview>New portfolio contact from {name}</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "40px auto",
            padding: "32px",
            borderRadius: "12px",
            maxWidth: "640px",
          }}
        >
          <Heading
            style={{
              marginTop: 0,
              color: "#111827",
            }}
          >
            📩 New Portfolio Contact
          </Heading>

          <Text>Someone has submitted the contact form on your portfolio.</Text>

          <Hr />

          <Section>
            <Text>
              <strong>Name</strong>
            </Text>

            <Text>{name}</Text>

            <Text>
              <strong>Email</strong>
            </Text>

            <Text>{email}</Text>

            <Text>
              <strong>Subject</strong>
            </Text>

            <Text>{subject}</Text>

            <Text>
              <strong>Message</strong>
            </Text>

            <Text>{message}</Text>
          </Section>

          <Hr />

          <Text
            style={{
              color: "#6b7280",
              fontSize: "13px",
            }}
          >
            This email was sent from your portfolio contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
