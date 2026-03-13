import PolicyLayout from '../components/PolicyLayout';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. ViswaVardhan Vyapara (OPC) Private Limited reserves the right to modify these terms at any time without prior notice. Continued use of the website constitutes your acceptance of any such modifications.',
  },
  {
    title: '2. Use of Content',
    content:
      'All content published on this website is for informational purposes only. ViswaVardhan Vyapara (OPC) Private Limited makes no representations as to the accuracy or completeness of any information on this site and is not liable for any errors or omissions in the information provided, or for any actions taken in reliance on such information.',
  },
  {
    title: '3. Intellectual Property',
    content:
      'All materials on this website, including but not limited to images, illustrations, text, graphics, logos, button icons, and software, are the property of ViswaVardhan Vyapara (OPC) Private Limited or its content suppliers and are protected by Indian and international copyright and intellectual property laws. Reproduction, modification, or distribution without prior written consent is strictly prohibited.',
  },
  {
    title: '4. Limitation of Liability',
    content:
      'ViswaVardhan Vyapara (OPC) Private Limited shall not be liable for any damages of any kind arising from your access to, or inability to access, this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.',
  },
  {
    title: '5. Indemnification',
    content:
      'You agree to defend, indemnify and hold harmless ViswaVardhan Vyapara (OPC) Private Limited and its officers, directors, employees, and agents from and against any and all third-party claims, actions, damages, liability, and expenses (including attorneys\' fees) arising from your violation of these Terms and Conditions or your use of this website.',
  },
  {
    title: '6. Contact Details',
    content:
      'For any queries related to these Terms and Conditions, please contact us at:\n\nEmail: viswanatha@viswavardhan.in\nPhone: +91 95155 81989\nAddress: #28, MIES Villas, NH-44, Ananthapuramu – 515002, Andhra Pradesh, India',
  },
];

export default function Terms() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      subtitle="Last updated: March 13, 2026"
      sections={sections}
      docTitle="Terms & Conditions — ViswaVardhan Vyapara"
    />
  );
}
