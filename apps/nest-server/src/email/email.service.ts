import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import SignupTemplate from '../../emails/signup-template';
import * as process from 'node:process';
import EmailConfirmationTemplate from '../../emails/email-confirmation-template';
import ResetPasswordTemplate from '../../emails/reset-password-template';
import EmailConfirmationUpdateTemplate from '../../emails/email-confirmation-update-emplate';

export interface ResendError {
  statusCode: number;
  message: string;
  name: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly resend: Resend) {}

  /**
   * Sends an email using the Resend service.
   * @param from - The sender's email address.
   * @param to - The recipient's email address.
   * @param subject - The subject of the email.
   * @param text - The text content of the email.
   * @throws InternalServerErrorException if there is an error sending the email.
   */
  async sendEmail(
    from: string,
    to: string,
    subject: string,
    text: string,
  ): Promise<void> {
    const { error } = await this.resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${from}>`,
      to,
      subject,
      html: `<strong>${text}</strong>`,
    });

    if (error as ResendError) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async signUpEmail(
    to: string,
    name: string,
    confirmationLink: string,
  ): Promise<void> {
    // Render the SignupTemplate React component to an HTML string
    const emailHtml: string = await render(
      SignupTemplate({ fullName: name, confirmationLink }),
    );

    const { error } = await this.resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.RESEND_EMAIL}>`,
      to,
      subject: 'verify your account',
      html: emailHtml, // Pass the rendered HTML here
    });

    if (error as ResendError) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async accountConfirmationEmail(
    to: string,
    name: string,
    confirmationLink: string,
  ): Promise<void> {
    // Render the SignupTemplate React component to an HTML string
    const emailHtml: string = await render(
      EmailConfirmationTemplate({ fullName: name, confirmationLink }),
    );

    const { error } = await this.resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.RESEND_EMAIL}>`,
      to,
      subject: 'Verify your account',
      html: emailHtml, // Pass the rendered HTML here
    });

    if (error as ResendError) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async resetPasswordEmail(to: string, resetUrl: string): Promise<void> {
    // Render the ResetPasswordTemplate React component to an HTML string
    const emailHtml: string = await render(ResetPasswordTemplate({ resetUrl }));

    const { error } = await this.resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.RESEND_EMAIL}>`,
      to,
      subject: 'Reset your password',
      html: emailHtml, // Pass the rendered HTML here
    });

    if (error as ResendError) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async updateEmailConfirmationEmail(
    to: string,
    fullName: string,
    confirmationCode: string,
  ): Promise<void> {
    // Render the EmailConfirmationUpdateTemplate React component to an HTML string
    const emailHtml: string = await render(
      EmailConfirmationUpdateTemplate({ fullName, confirmationCode }),
    );

    const { error } = await this.resend.emails.send({
      from: `${process.env.EMAIL_NAME} <${process.env.RESEND_EMAIL}>`,
      to,
      subject: 'Confirm your email update',
      html: emailHtml, // Pass the rendered HTML here
    });

    if (error as ResendError) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
