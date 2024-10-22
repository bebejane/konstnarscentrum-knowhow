// resend.ts
import { Client as PostmarkClient } from 'postmark';
import { Client } from "@datocms/cma-client-browser"
import client from '/lib/client'

export const sendVerificationRequest = async (params: any) => {
  console.log('sendVerificationRequest');

  let { identifier: email, url, provider: { from } } = params;

  try {
    const member = (await client.items.list({ filter: { type: 'member', fields: { email: { eq: email } } } }))?.[0]

    if (!member)
      throw new Error('Du är ej registrerad som medlem än. Var god fyll i formuläret nedan.');

    const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY);
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
    throw new Error(error);
  }
};