import PolicyLayout from '../components/PolicyLayout';

const sections = [
  {
    title: '1. Service Cancellations',
    content:
      'Clients may cancel services by providing written notice via email to viswanatha@viswavardhan.in. Cancellation terms are subject to the specific service agreement signed at the time of engagement. Please refer to your individual contract for any specific notice periods or cancellation conditions.',
  },
  {
    title: '2. Refund Eligibility',
    content:
      'Refunds are evaluated on a case-by-case basis depending on the stage of project delivery and the nature of the services provided. Requests for refunds must be submitted in writing with sufficient justification. Our team will review each request and respond within 5 business days.',
  },
  {
    title: '3. Non-Refundable Items',
    content:
      'The following are strictly non-refundable under all circumstances: (a) Setup fees and onboarding costs; (b) Domain registrations and renewals; (c) Third-party tool costs, software licences, and API charges; (d) Work already delivered and accepted by the client.',
  },
  {
    title: '4. Processing Time',
    content:
      'Once a refund request has been reviewed and approved, the refund will be processed within 7–10 business days. Refunds will be issued to the original payment method used at the time of purchase, unless otherwise agreed in writing.',
  },
  {
    title: '5. Contact',
    content:
      'For any questions or to submit a refund request, please contact us at:\n\nEmail: viswanatha@viswavardhan.in\nPhone: +91 95155 81989',
  },
];

export default function Refund() {
  return (
    <PolicyLayout
      title="Cancellations & Refund Policy"
      subtitle="Last updated: March 13, 2026"
      sections={sections}
      docTitle="Cancellations & Refund Policy — ViswaVardhan Vyapara"
    />
  );
}
