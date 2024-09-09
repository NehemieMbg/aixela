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
  fullName?: string;
  confirmationLink?: string;
}

const SignupTemplate = ({
  fullName,
  confirmationLink,
}: SignupTemplateProps) => (
  <Html>
    <Head />
    <Preview>Confirm your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirm Your Aixela Account</Heading>

        <Text style={{ ...text, paddingTop: '12px' }}>
          Dear {fullName || 'Naomi Liu'},
        </Text>

        <Text style={{ ...text, marginBottom: '14px' }}>
          Welcome to Aixela! We're excited to have you on board. To complete
          your registration, please confirm your email address by clicking the
          link below:
        </Text>

        <Button
          href={confirmationLink || 'http://localhost:8080'}
          target="_blank"
          style={{
            ...linkButton,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Confirm Email Address
        </Button>

        <Text style={{ ...text, marginBottom: '14px' }}>
          By confirming your email, you'll be able to access all the features
          and benefits of your account.
        </Text>

        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '60px',
          }}
        >
          If you didn&apos;t sign up for Aixela, please ignore this email.
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
  padding: '12px 16px',
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

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};

export default SignupTemplate;
