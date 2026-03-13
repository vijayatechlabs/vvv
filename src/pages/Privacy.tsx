import PolicyLayout from '../components/PolicyLayout';

const sections = [
  {
    title: '1. Information Collection And Use',
    content:
      'We may ask for personally identifiable information, including but not limited to your name, email address, postal address, and phone number ("Personal Information") to provide and improve the Site. Information collected will be used only to provide and improve our services.',
  },
  {
    title: '2. Log Data',
    content:
      'When you visit our Site, we automatically collect information that your browser sends ("Log Data"). This Log Data may include your computer\'s Internet Protocol ("IP") address, browser type, browser version, pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.',
  },
  {
    title: '3. Cookies',
    content:
      'Cookies are small data files that are stored on your device. We use cookies to collect information and to improve our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.',
  },
  {
    title: '4. Service Providers',
    content:
      'We may employ third-party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analysing how our Service is used. These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.',
  },
  {
    title: '5. Security',
    content:
      'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
  },
  {
    title: '6. Links To Other Sites',
    content:
      'Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party\'s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for, the content, privacy policies or practices of any third-party sites or services.',
  },
  {
    title: '7. Children\'s Privacy',
    content:
      'Our Service does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Information, please contact us so that we can take necessary actions.',
  },
  {
    title: '8. Changes To This Privacy Policy',
    content:
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
  },
  {
    title: '9. Contact Us',
    content:
      'If you have any questions about this Privacy Policy, please contact us at viswanatha@viswavardhan.in.',
  },
];

export default function Privacy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Last updated: March 13, 2026"
      sections={sections}
      docTitle="Privacy Policy — ViswaVardhan Vyapara"
    />
  );
}
