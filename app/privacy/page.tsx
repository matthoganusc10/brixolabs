import { Footer } from "@/components/footer";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Brixo privacy policy — how we collect, use, and protect your information.",
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPage(): ReactNode {
  return (
    <>
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 pt-32 pb-24">

<h1 className="text-4xl sm:text-5xl font-serif font-medium text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-16">Last Updated: April 8th, 2026</p>

          <div className="prose-section space-y-8 text-base text-foreground leading-relaxed">

            <p>
              Brixo Labs, Inc. (the &ldquo;Company&rdquo;) is committed to maintaining robust privacy
              protections for its users. Our Privacy Policy (&ldquo;Privacy Policy&rdquo;) is designed to
              help you understand how we collect, use and safeguard the information you provide to
              us and to assist you in making informed decisions when using our Service.
            </p>
            <p>For purposes of this Agreement:</p>
            <p>
              &ldquo;Site&rdquo; refers to the Company&apos;s website, which can be accessed at{" "}
              <a href="https://brixo.com" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
                brixo.com
              </a>.
            </p>
            <p>
              &ldquo;Service&rdquo; refers to the Company&apos;s services accessed via the Site, in which
              users can access product analytics for their AI products.
            </p>
            <p>The terms &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to the Company.</p>
            <p>&ldquo;You&rdquo; refers to you, as a user of our Site or our Service.</p>
            <p>
              By accessing our Site or our Service, you accept our Privacy Policy and Terms of Use
              found here, and you consent to our collection, storage, use and disclosure of your
              Personal Information as described in this Privacy Policy.
            </p>

            <Section title="I. Information We Collect">
              <p>
                We collect &ldquo;Non-Personal Information&rdquo; and &ldquo;Personal Information.&rdquo; Non-Personal
                Information includes information that cannot be used to personally identify you,
                such as anonymous usage data, general demographic information we may collect,
                referring/exit pages and URLs, platform types, preferences you submit and
                preferences that are generated based on the data you submit and number of clicks.
                Personal Information includes your email, first name, last name, and contact
                information, which you submit to us through the registration process at the Site.
              </p>

              <SubSection title="1. Information collected via Technology">
                <p>
                  To activate the Service you do not need to submit any Personal Information other
                  than your email address. To use the Service thereafter, you do need to submit
                  further Personal Information, which may include first name, last name, and contact
                  information. However, in an effort to improve the quality of the Service, we track
                  information provided to us by your browser or by our software application when you
                  view or use the Service, such as the website you came from (known as the
                  &ldquo;referring URL&rdquo;), the type of browser you use, the device from which you connected
                  to the Service, the time and date of access, and other information that does not
                  personally identify you. We track this information using cookies, or small text
                  files which include an anonymous unique identifier. Cookies are sent to a user&apos;s
                  browser from our servers and are stored on the user&apos;s computer hard drive. Sending
                  a cookie to a user&apos;s browser enables us to collect Non-Personal information about
                  that user and keep a record of the user&apos;s preferences when utilizing our services,
                  both on an individual and aggregate basis. For example, the Company may use cookies
                  to collect the following information: usage and behavior to improve the application.
                  The Company may use both persistent and session cookies; persistent cookies remain
                  on your computer after you close your session and until you delete them, while
                  session cookies expire when you close your browser. When you visit or log in to our
                  website, cookies and similar technologies may be used by our online data partners or
                  vendors to associate these activities with other personal information they or others
                  have about you, including by association with your email. We (or service providers
                  on our behalf) may then send communications and marketing to this email. You may opt
                  out of receiving this advertising by visiting the unsubscribe link enclosed in the
                  email communication.
                </p>
              </SubSection>

              <SubSection title="2. Information you provide us by registering for an account">
                <p>
                  In addition to the information provided automatically by your browser when you
                  visit the Site, to become a subscriber to the Service you will need to create a
                  personal profile. You can create a profile by registering with the Service and
                  entering your email address, and creating a user name and a password. By
                  registering, you are authorizing us to collect, store and use your email address in
                  accordance with this Privacy Policy.
                </p>
              </SubSection>

              <SubSection title="3. Children's Privacy">
                <p>
                  The Site and the Service are not directed to anyone under the age of 13. The Site
                  does not knowingly collect or solicit information from anyone under the age of 13,
                  or allow anyone under the age of 13 to sign up for the Service. In the event that
                  we learn that we have gathered personal information from anyone under the age of 13
                  without the consent of a parent or guardian, we will delete that information as
                  soon as possible. If you believe we have collected such information, please contact
                  us at{" "}
                  <a href="mailto:privacy@brixo.com" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
                    privacy@brixo.com
                  </a>.
                </p>
              </SubSection>
            </Section>

            <Section title="II. How We Use and Share Information">
              <p className="font-medium">Personal Information</p>
              <p>
                Except as otherwise stated in this Privacy Policy, we do not sell, trade, rent or
                otherwise share for marketing purposes your Personal Information with third parties
                without your consent. We do share Personal Information with vendors who are
                performing services for the Company, such as the servers for our email
                communications who are provided access to user&apos;s email address for purposes of
                sending emails from us. Those vendors use your Personal Information only at our
                direction and in accordance with our Privacy Policy. In general, the Personal
                Information you provide to us is used to help us communicate with you. For example,
                we use Personal Information to contact users in response to questions, solicit
                feedback from users, provide technical support, and inform users about promotional
                offers.
              </p>
              <p>
                We may share Personal Information with outside parties if we have a good-faith
                belief that access, use, preservation or disclosure of the information is reasonably
                necessary to meet any applicable legal process or enforceable governmental request;
                to enforce applicable Terms of Service, including investigation of potential
                violations; address fraud, security or technical concerns; or to protect against
                harm to the rights, property, or safety of our users or the public as required or
                permitted by law.
              </p>
              <p className="font-medium">Non-Personal Information</p>
              <p>
                In general, we use Non-Personal Information to help us improve the Service and
                customize the user experience. We also aggregate Non-Personal Information in order
                to track trends and analyze use patterns on the Site. This Privacy Policy does not
                limit in any way our use or disclosure of Non-Personal Information and we reserve
                the right to use and disclose such Non-Personal Information to our partners,
                advertisers and other third parties at our discretion.
              </p>
              <p>
                In the event we undergo a business transaction such as a merger, acquisition by
                another company, or sale of all or a portion of our assets, your Personal
                Information may be among the assets transferred. You acknowledge and consent that
                such transfers may occur and are permitted by this Privacy Policy, and that any
                acquirer of our assets may continue to process your Personal Information as set
                forth in this Privacy Policy. If our information practices change at any time in the
                future, we will post the policy changes to the Site so that you may opt out of the
                new information practices. We suggest that you check the Site periodically if you
                are concerned about how your information is used.
              </p>
            </Section>

            <Section title="III. How We Protect Information">
              <p>
                We implement security measures designed to protect your information from
                unauthorized access. Your account is protected by your account password and we urge
                you to take steps to keep your personal information safe by not disclosing your
                password and by logging out of your account after each use. We further protect your
                information from potential security breaches by implementing certain technological
                security measures including encryption, firewalls and secure socket layer
                technology. However, these measures do not guarantee that your information will not
                be accessed, disclosed, altered or destroyed by breach of such firewalls and secure
                server software. By using our Service, you acknowledge that you understand and agree
                to assume these risks.
              </p>
            </Section>

            <Section title="IV. Your Rights Regarding The Use Of Your Personal Information">
              <p>
                You have the right at any time to prevent us from contacting you for marketing
                purposes. When we send a promotional communication to a user, the user can opt out
                of further promotional communications by following the unsubscribe instructions
                provided in each promotional e-mail. You can also indicate that you do not wish to
                receive marketing communications from us by contacting{" "}
                <a href="mailto:privacy@brixo.com" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  privacy@brixo.com
                </a>. Please note that notwithstanding the promotional preferences you indicate by
                either unsubscribing or opting out by emailing{" "}
                <a href="mailto:privacy@brixo.com" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  privacy@brixo.com
                </a>, we may continue to send you administrative emails including, for example,
                periodic updates to our Privacy Policy.
              </p>
            </Section>

            <Section title="V. Right to Erasure (Data Deletion Requests)">
              <p>
                You have the right to request the deletion of your Personal Information that we
                have collected and stored, subject to certain legal exceptions.
              </p>

              <SubSection title="How to Submit a Data Deletion Request">
                <p>To request deletion of your data, please follow these steps:</p>
                <ol className="list-decimal list-outside ml-5 space-y-2 mt-3">
                  <li>
                    Send an email to{" "}
                    <a href="mailto:privacy@brixo.com" className="font-medium underline underline-offset-2 hover:text-muted-foreground transition-colors">
                      privacy@brixo.com
                    </a>
                  </li>
                  <li>
                    Include the subject line: <span className="font-medium">&ldquo;Data Deletion Request&rdquo;</span>
                  </li>
                  <li>
                    In your email, please provide:
                    <ul className="list-disc list-outside ml-5 space-y-1 mt-2">
                      <li>The email address associated with your account</li>
                      <li>Your full name (if applicable)</li>
                      <li>Any additional information necessary to help us identify your data</li>
                    </ul>
                  </li>
                </ol>
              </SubSection>

              <SubSection title="Verification Process">
                <p>
                  To protect your privacy and security, we may take reasonable steps to verify your
                  identity before processing your request. This may include requesting additional
                  information.
                </p>
              </SubSection>

              <SubSection title="Processing and SLA">
                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>
                    We will acknowledge receipt of your request within{" "}
                    <span className="font-medium">5 business days</span>
                  </li>
                  <li>
                    We will process and fulfill valid data deletion requests within{" "}
                    <span className="font-medium">30 days</span> of verification
                  </li>
                  <li>
                    If additional time is required due to complexity or volume of requests, we will
                    notify you and provide an updated timeline
                  </li>
                </ul>
              </SubSection>

              <SubSection title="Exceptions">
                <p>
                  We may retain certain information where required or permitted by law, including
                  for:
                </p>
                <ul className="list-disc list-outside ml-5 space-y-2 mt-3">
                  <li>Compliance with legal obligations</li>
                  <li>Resolving disputes</li>
                  <li>Enforcing our agreements</li>
                  <li>Security or fraud prevention purposes</li>
                </ul>
              </SubSection>
            </Section>

            <Section title="VI. Links To Other Websites">
              <p>
                As part of the Service, we may provide links to or compatibility with other
                websites or applications. However, we are not responsible for the privacy practices
                employed by those websites or the information or content they contain. This Privacy
                Policy applies solely to information collected by us through the Site and the
                Service. Therefore, this Privacy Policy does not apply to your use of a third-party
                website accessed by selecting a link on our Site or via our Service. To the extent
                that you access or use the Service through or on another website or application,
                then the privacy policy of that other website or application will apply to your
                access or use of that site or application. We encourage our users to read the
                privacy statements of other websites before proceeding to use them.
              </p>
            </Section>

            <Section title="VII. Changes To Our Privacy Policy">
              <p>
                The Company reserves the right to change this policy and our Terms of Service at
                any time. We will notify you of significant changes to our Privacy Policy by
                sending a notice to the primary email address specified in your account or by
                placing a prominent notice on our site. Significant changes will go into effect 30
                days following such notification. Non-material changes or clarifications will take
                effect immediately. You should periodically check the Site and this privacy page
                for updates.
              </p>
            </Section>

            <Section title="VIII. Contact Us">
              <p>
                If you have any questions regarding this Privacy Policy or the practices of this
                Site, please contact us by sending an email to{" "}
                <a href="mailto:privacy@brixo.com" className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
                  privacy@brixo.com
                </a>.
              </p>
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }): ReactNode {
  return (
    <div className="space-y-4 pt-4 border-t border-border">
      <h2 className="text-xl font-serif font-medium text-foreground">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: ReactNode }): ReactNode {
  return (
    <div className="space-y-3 pl-0">
      <h3 className="font-medium text-foreground">{title}</h3>
      <div className="space-y-3 text-muted-foreground">{children}</div>
    </div>
  );
}
