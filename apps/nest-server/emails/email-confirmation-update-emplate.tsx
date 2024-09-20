import {
  Body,
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
  confirmationCode?: string;
}

const EmailConfirmationUpdateTemplate = ({
  fullName,
  confirmationCode = '123456',
}: SignupTemplateProps) => (
  <Html>
    <Head />
    <Preview>
      Dear {fullName || 'Naomi Liu'}, here is your verification code to update
      your email address on Aixela.
    </Preview>

    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirm Your Email Update for Aixela</Heading>

        <Text style={{ ...text, paddingTop: '12px' }}>
          Dear {fullName || 'Naomi Liu'},
        </Text>

        <Text style={{ ...text, marginBottom: '14px' }}>
          We understand how important it is to keep your information up to date.
          To help you complete the email update process, we’ve provided a
          verification code just for you:
        </Text>

        <code style={code}>{confirmationCode}</code>

        <Text style={{ ...text, marginBottom: '14px' }}>
          Please enter this code on the email update page within the next 15
          minutes to confirm your new email address. We're here to ensure your
          experience with Aixela remains smooth and secure.
        </Text>

        <Text style={{ ...text, marginBottom: '14px' }}>
          If you didn’t request this change, feel free to ignore this email.
          We're always here to help if you have any concerns.
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

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  fontSize: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '5px',
  border: '1px solid #eee',
  color: '#333',
};

export default EmailConfirmationUpdateTemplate;
