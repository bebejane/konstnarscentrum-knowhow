// resend.ts
import { Client } from 'postmark';

export const sendVerificationRequest = async (params: any) => {
  console.log('sendVerificationRequest');

  let { identifier: email, url, provider: { from } } = params;

  try {
    const postmark = new Client(process.env.POSTMARK_API_KEY);
    const result = await postmark.sendEmailWithTemplate({
      TemplateAlias: "knowhow-login",
      To: email,
      From: from,
      TemplateModel: {
        url
      },
    })
    result.ErrorCode === 0 ? console.log('Email sent') : console.log('Email failed');
    console.log('Url:', url)
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to send email');
  }
};