import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import SignupTemplate from '../../emails/signup-template';
import * as process from 'node:process';

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
      console.log(error);
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
      subject: 'Confirm your email address',
      html: emailHtml, // Pass the rendered HTML here
    });

    if (error as ResendError) {
      console.log(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
