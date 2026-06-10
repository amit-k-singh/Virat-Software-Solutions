import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PolicyFormattedContent from "../../components/PolicyFormattedContent";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy of Virat Software Solutions.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const PRIVACY_POLICY_TEXT = `**
## Privacy Policy
Let's build something together. Feel free to contact us anytime.

At Virat Software Solutions, we respect your privacy and are committed to protecting your information. When you use our website or services, we may collect and use certain information to provide you with better services and improve your experience. If you do not provide certain information, we may not be able to offer some of our services effectively.

This Privacy Policy explains how we collect, use, disclose, and protect your information. We recommend that you read this policy carefully to understand our practices.

## Personal Information

We may collect personal information that you provide to us when you contact us or use our services. This may include your name, email address, phone number, and company details.

We use this information to understand your requirements, communicate with you, and provide our software development services. We may also use it to improve our services and offer better solutions.

We do not sell or misuse your personal information. We may disclose your information only in the following situations: with your permission, if required by law, or to protect our legal rights and interests.

## Non-Personal Information

We may collect non-personal information such as browser type, device information, usage data, and pages visited. This information helps us understand how users interact with our website and allows us to improve our services and overall user experience.

If non-personal information is combined with personal information, we treat it as personal information.

## Information from Your Use of Our Services

When you use our website or services, we may collect information about how you interact with them. This may include the pages you visit, features you use, time spent on the website, and other interaction data.

This information helps us improve performance, fix issues, and provide better services.

## Information Security

We take appropriate measures to protect your information from unauthorized access, misuse, or disclosure. We use secure systems and follow standard practices to keep your data safe.

## Links to Other Websites

Our website may contain links to third-party websites. These websites are not operated by us, and we are not responsible for their content or privacy practices. We recommend reviewing their privacy policies before sharing your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page. We encourage you to review this page regularly to stay informed about how we protect your information.

## Contact Us

If you have any questions or concerns about this Privacy Policy or your data, you can contact us at:

Email: sales@viratsoftwaresolutions.com

Phone: +91 99983 47578

**`;

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="sectionPad policyPage" aria-labelledby="privacy-policy-page-heading">
        <div className="container">
          <section className="policyShell">
            <div className="policyLead">
              <p className="policyBadge">Legal</p>
              <h1 id="privacy-policy-page-heading">Privacy Policy</h1>
            </div>
            <PolicyFormattedContent content={PRIVACY_POLICY_TEXT} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
