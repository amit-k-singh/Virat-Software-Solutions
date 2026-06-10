import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PolicyFormattedContent from "../../components/PolicyFormattedContent";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions of Virat Software Solutions.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

const TERMS_CONDITIONS_TEXT = `**
## Terms & Conditions
Let's build something together. By using our website and services, you agree to the following terms and conditions.

At Virat Software Solutions, we provide software development and related services to businesses and individuals. These Terms & Conditions explain how you can use our website and services and outline your responsibilities when working with us.

By accessing our website or using our services, you agree to comply with these terms. If you do not agree, please do not use our website or services.

## Use of Services
You agree to use our services only for lawful purposes. You must not use our website or services in any way that may cause harm to our business, services, or other users.

We reserve the right to refuse service, suspend access, or terminate services if we find any misuse or violation of these terms.

## Project Engagement
When you engage with us for a project, you agree to provide accurate and complete information about your requirements. Project timelines, deliverables, and costs will be defined and agreed upon before the start of the project.

Any changes in requirements may affect timelines and pricing.

## Payments & Billing
All payments must be made as per the agreed terms before or during the project. Delays in payment may result in delays in project delivery or suspension of services.

We reserve the right to revise pricing based on project scope changes.

## Intellectual Property
All content, designs, code, and deliverables created during the project will be transferred to you upon full payment, unless otherwise agreed.

We reserve the right to showcase completed projects in our portfolio for marketing purposes unless restricted by agreement.

## Confidentiality
We respect the confidentiality of your project and business information. Any sensitive data shared with us will be handled securely and will not be disclosed without your permission, except where required by law.

## Limitation of Liability
We strive to deliver high-quality services, but we are not responsible for any indirect or unforeseen damages resulting from the use of our services or website.

## Third-Party Services
Our services may include integrations or tools provided by third parties. We are not responsible for the performance, security, or policies of these third-party services.

## Termination of Services
We reserve the right to terminate or suspend services if:

- Terms are violated
- Payments are not made
- Misuse of services is detected

## Changes to Terms
We may update these Terms & Conditions from time to time. Any changes will be posted on this page. Continued use of our services means you accept the updated terms.

## Contact Us
If you have any questions about these Terms & Conditions, you can contact us:

Email: sales@viratsoftwaresolutions.com

Phone: +91 99983 47578

**`;

export default function TermsConditionsPage() {
  return (
    <>
      <Header />
      <main className="sectionPad policyPage" aria-labelledby="terms-conditions-page-heading">
        <div className="container">
          <section className="policyShell">
            <div className="policyLead">
              <p className="policyBadge">Legal</p>
              <h1 id="terms-conditions-page-heading">Terms & Conditions</h1>
            </div>
            <PolicyFormattedContent content={TERMS_CONDITIONS_TEXT} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
