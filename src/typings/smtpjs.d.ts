declare namespace Email {
  function send(params: EmailParams): Promise<string>;

  interface EmailParams {
    SecureToken: string;
    To: string;
    From: string;
    Subject: string;
    Body: string;
  }
}
