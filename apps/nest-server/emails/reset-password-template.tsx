import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface SignupTemplateProps {
  resetUrl?: string;
}

const ResetPasswordTemplate = ({ resetUrl }: SignupTemplateProps) => (
  <Html>
    <Head />
    <Preview>
      We received a request to reset the password for your Aixela account
    </Preview>

    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Reset Your Aixela Password</Heading>

        <Text style={{ ...text, paddingTop: '12px' }}>
          We received a request to reset the password for your Aixela account.
          Click the link below to reset your password:
        </Text>

        <Button
          href={resetUrl || 'http://localhost:8080'}
          target="_blank"
          style={{
            ...linkButton,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Reset my password
        </Button>

        <Text style={{ ...text, marginBottom: '14px' }}>
          If you didn’t request this, please ignore this email, and your
          password will remain unchanged.
        </Text>

        <Text style={{ ...text, marginBottom: '40px' }}>
          Best regards,
          <br />
          The Aixela Team
        </Text>

        <Img
          src={`https://utfs.io/f/55fe0ea3-72e8-46df-96c2-f318156792f7-v0scmt.png`}
          width="auto"
          height="16"
          alt="Notion's Logo"
        />
        <Text style={footer}>
          <Link
            href="https://aixela.vercel.app"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Aixela.com
          </Link>
          , The focused technology
          <br />
          fundraising platform to support your campaign.
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '28px',
  fontWeight: '400',
  margin: '20px 0 10px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const linkButton = {
  color: '#FFFF',
  width: 'max-content',
  padding: '8px 12px',
  margin: '20px 0',
  borderRadius: '4px',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  backgroundColor: '#3E61E1',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  fontWeight: '400',
  margin: '16px 0',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};

export default ResetPasswordTemplate;
