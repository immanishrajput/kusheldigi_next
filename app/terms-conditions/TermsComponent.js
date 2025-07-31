"use client"
import { useEffect } from "react";


import Head from 'next/head';
import Navbar from "../COMMON/Navbar";

import Footer from "../COMMON/Footer";
import Website from "../components/Home/HomeForm";
import '../globals.css';
const TermsComponent = () => {

 
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };
  const callHandler=()=>{
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  }



  const scrollToTop = () => {
    // Scroll to the top of the page with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
const generateMetadata = ({ params }) => ({
         title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
         description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency"
       });
       
     useEffect(() => {
         const { title, description } = generateMetadata({ params: {} });
         document.title = title;
         let metaDescription = document.querySelector('meta[name="description"]');
         metaDescription ? metaDescription.content = description : 
           document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${description}">`);
       }, []);

  return (
    <>

<Head>
        {/* Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta property="og:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta property="og:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta property="og:url" content="https://www.kusheldigi.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kushel Digi | Expert eCommerce Development Services" />
        <meta name="twitter:description" content="We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png" />
        <meta name="twitter:url" content="https://www.kusheldigi.com/" />
      </Head>
      
    <Navbar/>
   
          <div className="ser-main">
      <div className="nda-back">
        <div className="nda-sect">
          <h1>TERMS & CONDITIONS</h1>
        </div>
      </div>
      <div className="nda-section termsi">
        <div className="nda-header">
          <h2>Terms & Conditions</h2>
          <div className="nda-para mt-1">
            <p className="er">
            Feel free to contact us if you're looking for a strategic partner for your search engine marketing needs. The following Terms of Use shall apply to your use of any product, service, or feature (collectively, the "Materials") made available through Kushel Digi. You accept the terms and conditions stated in this notice by using the site or downloading Materials from the site. Please do not use the website or download any materials from the website if you do not agree to adhere to these terms and conditions. This site is owned by Kushel Digi and is protected by worldwide copyright laws and treaty agreements, including all of the Materials on it (excluding any relevant materials from third parties). In using this website, you undertake to abide by all applicable copyright laws around the world and to stop anybody from making an unauthorized copy of the Materials.

            </p>
            <p className="er">
            Kushel Digi does not grant any stated or implied rights under patents, trademarks, copyrights, or trade secret information. If you or another party is mistakenly identified as the owner of any content, photographs, or copyrights, please contact us and we will delete it straight away. There are thousands of customers, suppliers, governments, and other organizations that do business with Kushel Digi. Words like joint venture, partnership, and partner are used to denote business connections involving shared interests and activities but may not always denote exact legal relationships out of ease and simplicity.

            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Limited License</h2>
          <div className="nda-para mt-1">
            <p className="er">
            You Are Granted A Limited, Non-Exclusive Permission To Access, Use, And Display This Site And The Materials On It By Kushel Digi, Subject To The Terms And Limitations Outlined In These Terms Of Use.  
            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Third Party Content</h2>
          <div className="nda-para mt-1">
            <p className="er">
            The website offers information from third parties, such as articles, reports, news stories, tools to simplify calculations, company information, and other data, available (the "Third Party Content"). You understand and accept that neither Kushel Digi nor any goods or services made available via it are responsible for the Third Party Content, its creation, or its endorsement. You acknowledge and agree that the website, any company selling goods or services on the website, and any supplier of Third Party Content are not responsible for any investment decision you may make or other transaction you may enter into based on your reliance on or use of such data, or any liability that may result from delays or disruptions in the provision of Third Party Content for any cause.
            </p>
            <p className="er">
            By using any Third Party Content, you may exit this website and be redirected to an external site, possibly operated by a company other than Kushel Digi.You visit any such site at your own risk, and you must take all necessary precautions to protect yourself from viruses and other harmful components. Kushel Digi disclaims all warranties and representations concerning any linked websites, the information included therein, or any of the goods or services mentioned therein, and does not support any of them. Links do not imply that Kushel Digi or this Site sponsor, endorses, is affiliated with, or authorized by any third party to use any trademark, trade name, logo, or copyright symbol displayed in or accessible through the links, nor do they imply that any linked site has permission to use any trademark, trade name, logo, or copyright symbol of Kushel Digi or any of its affiliates or subsidiaries.

            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>No warranties</h2>
          <div className="nda-para mt-1">
            <p className="er">
            The software made available on the site, along with the information and materials, are all provided "as is" without any express or implied representations or warranties of any kind, including but are not restricted to warranties regarding merchantability, non-infringement, and suitability for a particular purpose. As for content from third parties, there is no warranty of any kind, whether express or implied. Additionally, there is no guarantee that this website will be virus-free. The limitations mentioned above may not apply to you, as some jurisdictions do not allow the exclusion of implied warranties.
            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Limitations of damages</h2>
          <div className="nda-para mt-1">
            <p className="er">
            In no event shall Kushel Digi or any of its subsidiaries or affiliates be liable to any entity for any direct, indirect, special, consequential, or other damages incurred.(including, without limitation losses,  lost profits, business interruption, loss of information or programs or other data/information on your information handling system) that are related to the use of, or the inability to use, the content, materials, and functions of the website or any linked website, even if Kushel Digi is exempt from liability.

            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Disclaimer</h2>
          <div className="nda-para mt-1">
            <p className="er">
            The website might include clerical, typographical, and other mistakes that are inaccurate. The owner of this website, Kushel Digi, explicitly disclaims any duty to update any of the content on this website. The trustworthiness of any advice, opinion, statement, or other information published or otherwise made available through the site is not guaranteed by Kushel Digi. Neither does it guarantee the accuracy or completeness of the contents. If you choose to rely on any such statement, advice, opinion, memorandum, or information, you acknowledge that you do so at your own risk.Kushel Digi reserves the right, at its sole discretion, to correct any errors or omissions in any part of the website. The site, the materials, and the products, programs, services, or prices/rates (if any) stated in the site may all be modified by Kushel Digi at any time without prior notice.
            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Indemnity</h2>
          <div className="nda-para mt-1">
            <p className="er">
            You acknowledge that your use of this website may subject Kushel Digi, its subsidiaries, and affiliates to a claim, cost, expense, judgment, or other loss, including, without limitation, any action  you take that violates the terms and conditions outlined in these Terms of Use. You also agree to defend, indemnify, and hold harmless Kushel Digi, its subsidiaries, and affiliates from any such claim.
            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Changes</h2>
          <div className="nda-para mt-1">
            <p className="er">
            In its sole discretion, Kushel Digi maintains the right to alter, modify, add, or remove any element of these Terms of Use at any time. Modifications to these Terms of Use become effective upon their publication online. Any modifications to these Terms of Use that are posted after you start using the website again constitute your acceptance of such modifications. Any part of the Kushel Digi website, including the availability of its features, may be terminated, modified, suspended, or discontinued at any time.Additionally, without prior notice or responsibility, Kushel Digi may place restrictions on specific features and services or limit your access to any or all of the websites. The aforementioned permissions, rights, and licenses are terminable by Kushal Digi, and upon such termination, you must remove all items right away.
            </p>
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>International Users and Choice of Law</h2>
          <div className="nda-para mt-1">
            <p className="er">
            Kushel Digi controls, operates, and manages this website from its headquarters in India.
            </p>
            <p className="er">
            It is not permitted to access these materials from countries where their contents are banned because Kushel Digi makes no claims that they are acceptable or available for use in other regions outside of India. In contravention of any relevant export rules and regulations, you are not permitted to use the website or export the Materials. You are in charge of adhering to all local laws if you use our site from a place outside of India. Without regard to its rules on conflicts of law, the laws of India shall govern these Terms of Use. You consent to personal jurisdiction in India and acknowledge that India will be the only venue for the resolution of any disputes arising under these terms of use in such forums.            </p>
      
            <p className="er">
            The complete understanding between you and Kushel Digi about your use of the website is set out in these Terms of Use. You have one (1) year from the date on which a claim or cause of action arises to file a lawsuit related to how you used the website. The remainder of these Terms of Use shall remain in full force and effect if for any reason a court of competent jurisdiction finds any provision of these Terms of Use, or portion thereof, to be unenforceable. However, that provision shall be enforced to the fullest extent permitted to affect the intent of these Terms of Use. By amending this posting, Kushel Digi may at any moment change these Terms and Conditions.            </p>
            <p className="er">
            You agree to the terms specified on this page in addition to any other agreements that may have been discussed and agreed upon individually with you at the discretion of Kushel Digi IT Service by visiting this website and by reading emails sent to you from Kushel Digi IT Services email address.            
                     </p>
      
          </div>
        </div>
        <hr className="hr-quality hr-quality1" />

        <div className="nda-header nda-header1">
          <h2>Once you agree to work with Kushel Digi, you also agree to:</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul">
              <li>
              Make any checks, money orders, wire transfers, and PayPal payments payable to "Kushel Digi" once you've agreed to work with Kushel Digi. After we get your acceptance of our proposal, the necessary data, and the necessary professional fees, we will be happy to begin the project as soon as possible.

              </li>
              <li>
              Kushel Digi shall in no way be liable to the Client or any third party for any damages, including any lost profits, lost business, lost savings, or any incidental, consequential, or special damages resulting from the use of, or inability to use, the presenting application or website.

              </li>
              <li>
              If collection becomes required, the client undertakes to cover any associated legal and third-party participation costs as well as a late payment charge and 1.5% per month compound interest on the outstanding balance.

              </li>
              <li>All applicable taxes will be charged as per the actual amounts.</li>
         
              <li>
              For this paragraph, "Employee" shall relate to present employees or people who were employed before the project in question. We at Kushel Digi agree not to solicit or induce any Client Employee to terminate his or her employment with the Client or to hire any Client Employee without the prior written approval of Client, and Client agrees not to solicit or induce any Kushel Digi Employee to terminate his or her employment with Kushel Digi or to hire any Kushel Digi Employee during the term of performance of services by Kushel Digi hereunder and for twenty-four (24) months thereafter.

              </li>
              <li>
              Without the other party's prior written approval, neither this Agreement, any Statement of Work, nor any rights or licenses granted herein may be transferred, delegated, or subcontracted by any party except when (i) A party may assign and transfer this Agreement and any Statement of Work, as well as its rights and responsibilities hereunder and thereunder, to any third party that acquires substantially all of its business and assets, or assign or transfer any rights to receive payments under this Agreement and (ii) Kushel Digi may delegate its obligations under this Agreement to any of its wholly-owned subsidiaries or third-party service providers, provided that Kushel Digi remains primarily liable to Client under this Agreement, including for the acts and omissions of any such parties employed or engaged by Kushel Digi. Client, on the other hand, may not assign or transfer this Agreement to a direct competitor of Kushel Digi.

              </li>
              <li>
              Client represents to Kushel Digi that all text, graphics, photos, designs, trademarks, source code, or other artwork furnished to Kushel Digi for inclusion in the web pages are owned by Client, or that Client has permission from the rightful owner to use each of these elements, and that Client will hold harmless, protect, and defend Kushel Digi from any claim or suit arising from the use of such elements furnished by Client.

              </li>
              <li>
              Kushel Digi maintains ownership of the source code/design of any files produced/developed/designed by Kushel Digi while working on this project. After the final payment for the project, the client will receive the rights and ownership of the source code/design.

              </li>
              <li>
              This contract was established in India, and any disputes shall be litigated or arbitrated in New Delhi, India, regardless of the venue.

              </li>
              <li>
              This 'Proposal' agreement represents the exclusive agreement between Kushel Digi and the Client, including its owners.

              </li>
              <li>
              Any extra work that is not stated in the proposal will be estimated separately or will need a revision to this proposal.

              </li>
              <li>
              The customer is responsible for all photos, writing, and material. If the customer does not furnish us with the photographs, the client grants us the implied right to utilize images from the Internet. Kushel Digi will do its best to utilize royalty-free photographs, but the client must ensure that he has reviewed and consented to the work delivered. If he believes/discovers that something does not belong to him, he will promptly contact Kushel Digi to get it altered. Once the task is completed, Kushel Digi accepts no responsibility for any copyright infringement/trademark infringement/performance/damages or any legal liabilities originating from any cause. Ideally, it is in the client's best interests to give photographs and text/other content only at the time of the contract and to guarantee that work is completed by his agreement.

              </li>
              <li>
              If the client's fees are subject to tax deduction at source, the client must provide the TDS certificate to Kushel Digi upon payment. Any relevant taxes and other government charges are not included in the Professional fees. Client shall be liable for any such taxes and/or levies, whether retroactive or not.

              </li>
              <li>
              Should the client cancel the project during website creation, the initial payment will not be refunded.
              </li>
              <li>
              In the event of a legal procedure, the sum paid will not be greater than the price invoiced to the client.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Website Development Project</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
              It is the client's duty to offer us clear instructions as well as the flow or precise details/guidelines you may require during the project briefing. If such information is not provided, we will proceed based on our understanding of your needs and provide an estimate accordingly.. If a disagreement occurs later, it may result in additional charges to accommodate the modifications. As a result, you must define every aspect of your website development and confirm that you have received accurate requirements/quotes.

              </li>
              <li>
              Any additions, modifications, or upgrades to the project's functionality or design after proposal approval may impact the proposal, resulting in additional costs and a revised delivery date.All additional work that goes above and beyond the estimates is invoiced individually. Kushel Digi shall not be held accountable for any delays caused by a change in the project brief.

              </li>
              <li>
              Any complexity associated with a given delivery must be communicated ahead of time and included in the proposal for costing purposes.We strive in good faith and rely on our clients to fully reveal their expectations. Kushel Digi shall not be held liable for any mismatch caused by imprecise criteria or expectations.

              </li>
              <li>
              We require website content and other relevant resources within the first two weeks of commencing the project. Any further delays may cause the project to be delayed and may result in extra charges if they exceed a reasonable period.

              </li>
              <li>
              Clients should be aware that unforeseen factors, especially when integrating third-party software, may cause delays in the development process.We will do our best to accomplish the job by the proposal. As long as it is within a reasonable time frame, the client undertakes not to charge us for any legitimate delay when every attempt is made to keep the project on schedule.

              </li>
              <li>
              Kushel Digi does not accept responsibility for any third-party products, software, or components used in website/Application development, such as payment gateways, SSL certificates, and so on. To avoid interruptions, we recommend that you do frequent backups.
              </li>
              <li>
              Kushel Digi collaborates with third-party vendors to offer packages. Changes in the regulations and policies of these third-party suppliers may affect the services we provide or the terms and conditions mentioned above.

              </li>
              <li>
              Domain registration fees are not included in the proposal unless otherwise specified.

              </li>
              <li>
              Unless otherwise specified, hosting fees are not included in the prices. If necessary, Kushel Digi can provide a suitable hosting solution, for which a quotation will be presented separately and authorized by the customer.

              </li>
              <li>
              We will provide one month of free service, including training, upon website completion.
              </li>
              <li>
              Data input for e-commerce websites is complimentary for 20 to 55 listings/products.

              </li>
              <li>
              Kushel Digi does not let clients or any third party access its test servers and test websites.

              </li>
              <li>
              When clients opt to organize their hosting, we should be informed before completing the kind of hosting and database, as it must fulfill the criteria of the development technology. Please keep in mind that we will need full access to the server as well as hosting support to test and deploy the application. Kushel Digi shall not be held accountable for any delays or faults caused by the hosting company's direct or indirect activities.

              </li>
              <li>
              The Developer's completed web designs, photos, pages, code, and source files will be transferred to the Client upon final payment, with prior written consent.Without an agreement, the Developer retains ownership/copyright of all designs and code.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Dedicated Resource(s)</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                If necessary, the client is assigned dedicated resource(s) as
                well as functional support employees such as a team leader or
                project manager (based on the service commissioned).
              </li>
              <li>
              The developer/designer follows a fixed schedule; it is crucial that they have assigned tasks at all times to minimize delays (any delays may extend the project's timeline).
              </li>
              <li>
              The client is allocated dedicated resource(s) along with functional and support staff like a team leader and project manager.

              </li>
              <li>
              The client will not do personal business with current or former employees. Any violation of this will result in legal action involving all parties. 

              </li>
              <li>
              The resource(s) would be based at the Kushel Digi Indian office. Monday through Friday, 09:30 AM to 06:30 PM (India's time zone is GMT + 5:30 / BST +4.30). All public holidays are announced in advance and communicated directly by the development team; the holidays are often compensated by working extra hours in the evenings, on weekends, or as agreed upon with the customer.

              </li>
              <li>
              A man-month is defined as 160 hours of labor every month. When a developer(s) works on a devoted basis, they are assigned 40 hours per week, 160 hours per month, and so on. This period involves design, programming, testing, and waiting for feedback from the developer(s) to the customer.
              </li>
              <li>
              Both parties agree to limit the disclosure of information, including "confidential information," to a small number of employees who require the information on a "need-to-know" basis, and to ensure that all of the said employees comply with the obligations regarding the use and disclosure of the information.

              </li>
              <li>
              By providing written notice, either party may terminate the services/contract/agreement. The notice time for major projects is three months, while for small to medium-sized projects, it is one month. The notice time for clients with ongoing time and materials Projects (weekly and monthly running projects with dedicated developers and designers) is a minimum of one week. Kushel Digi has the authority to "define" a project's "type." Third-party services may necessitate additional time.
              </li>
              <li>
              During the "project," the client must submit all essential information, content, photographs, prior code, and so on to make the project technically possible and practical - in the absence of the above or any other important material. Kushel Digi may utilize freeware or shareware content as considered appropriate.

              </li>
              <li>
              Kushel Digi will not be held liable if the client keeps insisting on using a specific "copyrighted" material - Kushel Digi will assume that the client has considered the legal and copyright implications of using the same and that once the final amount is paid and or the website has been made "live," the client has given the go-ahead to use the above-mentioned material at the client's own risk and consequences.

              </li>
              <li>
              The client will own the actual instances of every code we develop for you after final payment, but not the algorithms, techniques, processes, or trade secrets we employ to produce it, which belong to Kushel Digi.

              </li>
              <li>
              If the client is unable to supply us with critical information, documents, or comments in a timely way when requested (within 24 hours), we may be forced to reschedule the team/resource to other projects while we wait. Any time spent re-allocating resources away from the project during these waiting periods will be deducted from the total project duration.

              </li>
              <li>
              If we require documents, information, decisions, or approvals from you and you do not give them within thirty days of our request, we shall consider the job finished and any payments due.

              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Hosting</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                Hosting is a yearly fee that must be paid in advance for the
                entire year.
              </li>
              <li>
                It is the client's duty to renew the hosting before it expires.
                Failure to renew on time might result in the loss of files,
                data, emails, backups, and so on. All unpaid hosting accounts
                are deactivated or erased from the server.
              </li>
              <li>
                All renewals must be paid for at least seven business days
                before the expiration date. Kushel Digi shall not be held liable
                for any complications arising from late payment.
              </li>
              <li>
                Hosting is provided by third-party providers on shared and
                non-shared servers. Kushel Digi does everything possible to keep
                our systems and servers safe from hackers, viruses, intruders,
                and other online and offline difficulties, but we cannot be held
                responsible for any service disruptions that may occur.
              </li>
              <li>
                The client is completely responsible for the material kept on
                and supplied by the purchased hosting service, as well as the
                activity of any scripts or email services generated through the
                service. The customer shall keep all account passwords and
                applications or scripts secure and guarantee that all scripts
                under the hosting service are free of harmful information that
                might compromise the server, other client accounts hosted, or
                the external systems of users accessing the hosted content.
              </li>
              <li>
                In the event of a malicious attack, Kushel Digi retains the
                right to erase files from the hosting service without
                notification.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Termination/ Cancellation</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                Hosting cancellation or termination requests must be sent in
                writing or by mail one month before the hosting contract
                expires. When hosting is renewed, it can't be revoked and must
                be paid for the entire year.
              </li>
              <li>
                If the hosting is not paid for and renewed prior to the
                expiration date. We retain the right to deactivate the hosting
                as well as any connected services such as emails and DNS
                records.
              </li>
              <li>
                Additional fees will apply to re-enable hosting. -Kushel Digi
                shall not be held liable for any data, file, email, backup, or
                restoration fees.
              </li>
              <li>
                If a hosting account is cancelled or disabled, all files,
                emails, databases, and backups are wiped from the server without
                any communication to the client. -Once all payments have been
                made, it is the client's obligation to request the files listed
                below:
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header1">
          <h2>1) Emails</h2>
          <div className="nda-para nda-para11 mt-1">
            <p className="er">
              All emails must be downloaded on a regular basis into the client's
              machine. Email boxes must stay within their quotas. Email box
              maintenance may be performed on a regular basis, and emails older
              than six months are erased. Clients must not use email hosting for
              unsuitable material or other unwanted communications, since this
              may result in spamming or infecting the server. In such cases,
              quick action will be taken, and the necessary files and data will
              be erased without notice. Kushel Digi provides packages in
              collaboration with third-party vendors. Changes in the third-party
              provider's regulations and policies may have an impact on the
              services we offer or the terms and conditions outlined here.
              Hosting is provided by third-party providers on shared and
              non-shared servers. Kushel Digi does everything possible to keep
              our systems and servers safe from hackers, viruses, intruders, and
              other online and offline difficulties, but we cannot be held
              responsible for any service disruptions that may occur.
            </p>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>2) Domain</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                Domain registrations and renewals must be paid for in advance.
              </li>
              <li>
                The expiration of a domain can cause service interruptions and
                domain loss.
              </li>
              <li>
                Kushel Digi is not liable if a domain expires due to non-payment
                or late payment of fees. All payments must be received at least
                seven working days before the expiration date.
              </li>
              <li>
                -It is the duty of the customer to renew their domain names with
                us.
              </li>
              <li>
                Before we may issue the desired domain name, all payments and
                dues must be paid in full.
              </li>
              <li>
                Kushel Digi has the domains in a shared pool account; hence, it
                cannot provide access to its domain administration/control
                panel.
              </li>
              <li>
                Kushel Digi provides packages in collaboration with third-party
                vendors. Changes in the third-party provider's regulations and
                policies may have an impact on the services we offer or the
                terms and conditions outlined here.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Maintenance Plan</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                All maintenance packages are for a minimum of three months.
              </li>
              <li>
                Maintenance packages are invoiced quarterly, and the price is
                due on the first day of the billed quarter.
              </li>
              <li>
                Packages are solely intended to help with modest website
                maintenance duties. The package does not cover larger projects
                or upgrades.
              </li>
              <li>
                One support request of up to 20 man-hours per month is included
                in the package. Unused man-hours may not be carried over to the
                next month. This support time may be utilised to update the
                WordPress and plugin versions once a month.
              </li>
              <li>
                Kushel Digi has a fair usage policy, which means that while we
                don't technically pass over any unused time to the following
                month or formally collect unused man-hours, we recognise that
                your needs may change from month to month, and we sometimes
                enable flexibility in good faith. Any additional hours utilised
                will be paid separately at $15 per hour. Support requests should
                be emailed to (EMAIL).
              </li>
              <li>
                Any time-sensitive work will be paid individually. Every
                quarter, the package is automatically renewed, and an invoice is
                generated.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Payment Terms</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                Monthly maintenance package payments may only be made with a
                credit card. For monthly maintenance, no other forms of payment
                will be allowed.
              </li>
              <li>
                On the first of each month, monthly maintenance package payments
                will be charged to the client's credit card on file.
              </li>
              <li>
                Any late payments or refused credit card charges will result in
                a $25 administrative fee being applied to the client's account.
              </li>
              <li>
                More than three missed payments in a year may result in package
                cancellation, and the customer will be required to pay the total
                remaining amount on the package immediately.
              </li>
              <li>
                There are no refunds for any costs associated with the monthly
                maintenance package.
              </li>
            </ul>
          </div>
        </div>

        <div className="nda-header nda-header2">
          <h2>Termination</h2>
          <div className="nda-para mt-1">
            <ul className="nda-ul nda-ul1">
              <li>
                If the client wishes to cancel the auto-yearly renewal, please
                notify us in writing at least one month before the renewal date.
              </li>
              <li>
                Ongoing term: If the client decides to cancel an ongoing
                maintenance plan for whatever reason, they must pay the balance
                for the remaining months.
              </li>
              <li>
                -Kushel Digi maintains the right to stop yearly maintenance at
                any time by giving the client written notice.
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      {/* <ContatForm1 /> */}

      <Website/>

          
       {/*  buttons  */}
       <div className="whtsApBtns">
          <button onClick={whatAppHandler}>
            <img className="what-image-universal" src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401400/whatsapp_qknuap.png' alt="whatsApp-kusheldigi" title="whatsApp-kusheldigi" />
          </button>
          <button onClick={callHandler}>
            <img src='https://res.cloudinary.com/dd9tagtiw/image/upload/v1740401442/telephone_rg2izx.png' alt="call-icon" title="call-icon" />
          </button>

        </div>
    </div>
    <Footer/>
    </>
  
  );
};

export default TermsComponent;
