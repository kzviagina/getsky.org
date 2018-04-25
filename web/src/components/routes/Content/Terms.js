import React from 'react';
import styled from 'styled-components';

import { H1, H2, P } from 'components/layout/Text';
import TextContainer from './TextContainer';

const Ul = styled.ul`
    list-style-type: none;
    line-height: 26px;
    font-size: 14px;
`;

const Li = styled.li`
    &:before { 
        content: "- " 
    }
`

export default () => (
    <TextContainer flex='1 0 auto' flexDirection="column" py={4}>
        <H1>Terms</H1>

        <H2>Terms of Service</H2>
        <P>This web page represents a legal document and is the Terms of Service (Agreement) for our website, Buysky.org (Website). By using our Website, you agree to fully comply with and be bound by the following Agreement each time you use our Website. Please review the following terms carefully.</P>

        <H2>Our Services</H2>
        <P>Our Website offers the following services: a service for interactive content (Services). We may revise the services, with or without notice, and/or offer additional services. We reserve the right to discontinue any of the services at any time, with or without notice.</P>

        <H2>Definitions</H2>
        <P>The terms “us” or “we” or “our” refers to The Owners of this Website. A “Visitor” is someone that merely browses our Website. A “Member” is someone who has registered with our Website to use our Services. The term “User” is a collective identifier that refers to either a Visitor or a Member.</P>
        <P>All text, information, graphics, design, and data offered through our Website or Services, whether produced by our Members or by us, are collectively known as our “Content”. We distinguish content posted by our Members as “Member Content”.</P>

        <H2>Acceptance of Agreement</H2>
        <P>This Agreement is between you and The Owners of Buysky.org</P>
        <P>THIS AGREEMENT CONTAINS WARRANTY DISCLAIMERS AND OTHER PROVISIONS THAT LIMITS OUR LIABILITY TO YOU. PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY AND IN THEIR ENTIRETY, AS USING, ACCESSING AND/OR BROWSING OUR WEBSITE CONSTITUTES ACCEPTANCE OF THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO BE BOUND TO EACH AND EVERY TERM AND CONDITION SET FORTH HEREIN, PLEASE EXIT OUR WEBSITE IMMEDIATELY AND DO NOT USE, ACCESS AND/OR BROWSE IT FURTHER.</P>
        <P>Except as otherwise noted, this Agreement constitutes the entire and only Agreement between you and The Owners, and supersedes all other Agreements, representations, warranties and understandings with respect to our Website, Services, and the subject matter contained herein. However, in order for you to use our Website and/or Services, you may also be required to agree to additional terms and conditions. Those additional terms and conditions will be incorporated into this Agreement unless otherwise stated.</P>
        <P>We may amend this Agreement at any time without specific notice to you. The latest Agreement will be posted on our Website, and you should review this Agreement prior to using our Website. After any revisions to this Agreement are posted, you agree to be bound to any changes to this Agreement. Therefore, it is important for you to visit this page periodically to review the Agreement. Please read this Agreement carefully and save it. If you do not accept this Agreement, do not access and use our Website. If you have already accessed our Website and do not accept this Agreement, you should immediately discontinue use of our Website and Services.</P>

        <H2>Limited License</H2>
        <P>The Owners grant you a non-exclusive, non-transferable, revocable license to access and use our Website and Services strictly in accordance with this Agreement. Your use of our Website and Services are solely for internal, personal, non-commercial purposes, unless otherwise provided in this Agreement. No print out or electronic version of any part of our Website or Services may be used by you in any litigation or arbitration matter whatsoever under any circumstances.</P>

        <H2>Legal Compliance</H2>
        <P>You agree to comply with all applicable domestic and international laws, statutes, ordinances and regulations regarding your use of our Website, Content, Services, and any software provided therein.</P>

        <H2>Our relationship to you</H2>
        <P>This Agreement in no way creates any agency, partnership, joint venture, employee-employer or franchisor-franchisee relationship between you and The Owners.</P>

        <H2>Our Intellectual Property</H2>
        <P>Our Website may contain our service marks or trademarks as well as those of our affiliates or other companies, in the form of words, graphics, and logos. Your use of our Website or Services does not constitute any right or license for you to use our service marks or trademarks, without the prior written permission of The Owners.</P>
        <P>Our Content, as found within our Website and Services, is protected under United States and foreign copyrights. The copying, redistribution, use or publication by you of any such Content, is strictly prohibited. Your use of our Website and Services does not grant you any ownership rights to our Content.</P>

        <H2>Digital Millennium Copyright Act Compliance</H2>
        <P>Our Website will respond quickly to claims of copyright infringement as found in our Content, according to the terms of the Digital Millennium Copyright Act of 1998 (DMCA) as found under United States law (17 USC. § 512). If you believe any of your copyrights are infringed by our Content, please provide us with a written notice via mail, fax, or email that contains the following information:</P>
        <Ul>
            <Li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright interest;</Li>
            <Li>A description of the copyrighted work that you claim has been infringed;</Li>
            <Li>A description of where the material that you claim is infringing is located on our Website;</Li>
            <Li>Your address, telephone number, and email address;</Li>
            <Li>A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law; and</Li>
            <Li>A statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf.</Li>
            <Li>We are only required to respond to those notices that substantially comply with the above requirements. We will investigate your claim and will notify by the method of contact you used to file your notice with us.</Li>
        </Ul>

        <H2>Eligibility and registration for Membership</H2>
        <P>To use our Services, you must register with our Website to become a Member. Your Membership is not transferable or assignable and is void where prohibited. This is intended solely for Users who are at least age 18 years of age or older. Residents of the states of New York, Washington, and New Hampshire are not eligible to register for membership on this site, nor are they allowed to use or browse this site.</P>
        <P>Any registration by, use of or access to our Website by anyone under 18 years of age is unauthorized, unlicensed and in violation of these Terms of Service. By using our Website and/or Service, you represent and warrant that you are 18 or older and that you agree to and to abide by all of the terms and conditions of this Agreement.</P>
        <P>Any registration by, use of or access to our Website by anyone who has been required to register as a sex offender with any government entity is unauthorized, unlicensed and in violation of these Terms of Service. By using our Website and/or Service, you represent and warrant that you have not been required to register as a sex offender with any government entity, and that you agree to and to abide by all of the terms and conditions of this Agreement. The Owners does not currently conduct criminal background checks on Members, but reserves the right to do so at any time to confirm your compliance with this Agreement.</P>

        <P>The Owners has sole right and discretion to determine whether to accept a Member, and may reject a Member’s registration, with or without explanation.</P>
        <P>During the registration process, you will create or receive a password that will allow you to access our Services. You agree to maintain the confidentiality of your password and are fully responsible for all liability and damages resulting from your failure to maintain that confidentiality and all activities that occur through the use of your password.</P>
        <P>You agree to immediately notify us of any authorized use of your password or any other breach of security. You agree that Our Website cannot and will not be liable for any loss or damage arising from your failure to comply with password security as discussed herein.</P>

        <H2>Content Disclaimer</H2>
        <P>The opinions expressed on our Website are not necessarily the opinions of The Owners. The Content may be changed without notice and is not guaranteed to be complete, correct, timely, current or up-to-date. Similar to any printed materials, the Content may become out-of-date.</P>
        <P>We undertake no obligation to update any Content on our Website. Members are responsible for their own content, where applicable, and may update their Content at any time without notice and at their sole discretion. We reserve the right to make alterations or deletions to the Content at any time without notice.</P>

        <H2>Errors, corrections and changes</H2>
        <P>We do not represent or otherwise warrant that our Website will be error-free, free from viruses or other harmful components, or that we will correct any errors. We do not represent or otherwise warrant that the information available on or through our Website will be correct, accurate, timely or otherwise reliable.</P>
        <P>We may make changes to the features, functionality or content of our Website or Services at any time. We reserve the right in our sole discretion to edit or remove any documents, information or other content appearing on our Website or Services.</P>

        <H2>Financial, Legal and other Advice Disclaimer</H2>
        <P>You hereby acknowledge that nothing contained in our Website shall constitute financial, investment, legal and/or other professional advice and that no professional relationship of any kind is created between you and The Owners or our Members. You hereby agree that you shall not make any financial, investment, legal and/or other decision based in whole or in part on anything contained in our Website or Services.</P>

        <H2>Advertisers and Sponsors Disclaimer</H2>
        <P>Our Website may contain advertising and sponsorships. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on our Website is accurate and complies with applicable laws. We are not responsible for the illegality or any error, inaccuracy or problem in the advertiser’s or sponsor’s materials.</P>
        <P>THE INCLUSION OF THIRD PARTY ADVERTISEMENTS DOES NOT CONSTITUTE AN ENDORSEMENT, GUARANTEE, WARRANTY, OR RECOMMENDATION BY The Owners AND WE MAKE NO REPRESENTATIONS OR WARRANTIES ABOUT ANY PRODUCT OR SERVICE CONTAINED THEREIN.</P>

        <H2>Merchant and Advertisement Disclaimer</H2>
        <P>We may allow access to or advertise certain third-party product or service providers (“Merchants”) from which you may purchase certain goods or services. You understand that we do not operate or control the products or services offered by Merchants. Merchants are responsible for all aspects of order processing, fulfillment, billing and customer service. We are not a party to the transactions entered into between you and Merchants.</P>
        <P>You agree that use of or purchase from such Merchants is AT YOUR SOLE RISK AND IS WITHOUT WARRANTIES OF ANY KIND BY US, EXPRESSED, IMPLIED OR OTHERWISE INCLUDING WARRANTIES OF TITLE, FITNESS FOR PURPOSE, MERCHANTABILITY OR NON-INFRINGEMENT. WE ARE NOT LIABLE UNDER ANY CIRCUMSTANCES ARE FOR ANY DAMAGES ARISING FROM THE TRANSACTIONS BETWEEN YOU AND MERCHANTS OR FOR ANY INFORMATION APPEARING ON MERCHANT WEBSITES OR ANY OTHER WEBSITE LINKED TO OUR WEBSITE.</P>
        <P>All rules, legal documents (including privacy policies) and operating procedures of Merchants will apply to you while on any Merchant Websites. We are not responsible for information provided by you to Merchants. Our relationship to Merchants is solely as independent contractors and neither party has authority to make any representations or commitments on behalf of the other.</P>

        <H2>Changes to Service</H2>
        <P>The Owners reserves the right at any time, with or without notice, to change, suspend, or discontinue the Service or any part thereof. You agree that The Owners shall not be held liable to you or to any third party for any change, suspension, or discontinuance of the Service.</P>

        <H2>Warranty Disclaimer</H2>
        <P>The Owners is not responsible or liable in any manner for any Content posted on our Website or in connection with our Services, whether posted or caused by Members of our Website, or by The Owners. Although we provide rules for Member conduct and postings, we do not control and are not responsible for what Members post, transmit or share on our Website or Services, and are not responsible for any offensive, inappropriate, obscene, unlawful or otherwise objectionable content you may encounter on our Website or Services. The Owners is not responsible for the conduct, whether online or offline, of any user of our Website or Services.</P>
        <P>Our Website or Services may be temporarily unavailable from time to time for maintenance or other reasons. The Owners assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft or destruction or unauthorized access to, or alteration of, Member communications.</P>
        <P>The Owners is not responsible for any technical malfunction or other problems of any telephone network or service, computer systems, servers or providers, computer or mobile phone equipment, software, failure of email or players on account of technical problems or traffic congestion on the Internet or any combination thereof, including injury or damage to Member’s or to any other person’s computer, mobile phone, or other hardware or software, related to or resulting from using or downloading materials in connection with the our Website or Services, including without limitation any software provide through our Website or Services.</P>
        <P>Under no circumstances will The Owners be responsible for any loss or damage, including any loss or damage or personal injury or death, resulting from anyone’s use of our Website or Services, or any interactions between Users of our Website or Services, whether online or offline.</P>
        <P>The Owners reserves the right to change any and all Content, software and other items used or contained in our Website or Services, at any time without notice. Reference to any products, services, processes or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof, or any affiliation therewith, by our Website, by third parties or by any of the equipment or programming associated with or utilized by our Services.</P>
        <P>THE INFORMATION, CONTENT AND DOCUMENTS FROM OR THROUGH OUR WEBSITE ARE PROVIDED “AS-IS,” “AS AVAILABLE,” WITH “ALL FAULTS”, AND ALL WARRANTIES, EXPRESS OR IMPLIED, ARE DISCLAIMED (INCLUDING BUT NOT LIMITED TO THE DISCLAIMER OF ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE). OUR WEBSITE AND SERVICES MAY CONTAIN BUGS, ERRORS, PROBLEMS OR OTHER LIMITATIONS. The Owners, INCLUDING ALL OUR AFFILIATES, HAVE NO LIABILITY WHATSOEVER FOR YOUR USE OF OUR WEBSITE OR SERVICES. The Owners CANNOT GUARANTEE AND DOES NOT PROMISE ANY SPECIFIC RESULTS FROM USE OF OUR WEBSITE OR SERVICES, INCLUDING, BUT NOT LIMITED TO, RELATED SOFTWARE. The Owners DOES NOT REPRESENT OR WARRANT THAT OUR CONTENT, OUR SERVICES, OR ANY SOFTWARE FOUND WITHIN ARE ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE OR THAT ANY SUCH ITEMS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THEREFORE, YOU SHOULD EXERCISE CAUTION IN THE USE AND DOWNLOADING OF ANY SUCH CONTENT OR SOFTWARE AND USE INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND REMOVE VIRUSES. ALL RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES CAUSED BY VIRUSES SOMEHOW ATTRIBUTED TO OUR CONTENT, SERVICES, AND RELATED SOFTWARE IS DISCLAIMED. WITHOUT LIMITING THE FOREGOING, YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD OR OTHERWISE OBTAIN CONTENT AND RELATED SOFTWARE FROM OR THROUGH OUR WEBSITE OR SERVICES AT YOUR OWN RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR YOUR USE THEREOF AND ANY DAMAGES TO YOUR MOBILE DEVICE OR COMPUTER SYSTEM, LOSS OF DATA OR OTHER HARM OF ANY KIND THAT MAY RESULT. WE, AS WELL AS ALL OF OUR AFFILIATES, ARE NOT LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES (INCLUDING DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS, LITIGATION, OR THE LIKE), WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE NEGATION AND LIMITATION OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN YOU AND The Owners. OUR WEBSITE AND SERVICES WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US THROUGH OUR WEBSITE OR SERVICES SHALL CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE NOT EXPRESSLY STATED IN THIS AGREEMENT.</P>

        <H2>Limitation of Liability</H2>
        <P>The Owners, as well as all our Affiliates, shall not be liable for any loss, injury, claim, liability, or damage of any kind resulting in any way from (a) any errors in or omissions from our Website or Services, (b) any product liability issues to the extent that we are not involved with the manufacturer of the product(s) giving rise to liability, (c) the unavailability or interruption of our Website or Services, (d) your use of our Website our Content, (e) the content contained on our Website or Services, or (f) any delay or failure in performance of our Website and Services beyond our control.</P>
        <P>IN NO EVENT WILL The Owners OR ITS DIRECTORS, EMPLOYEES OR AGENTS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA ARISING FROM YOUR USE OF OUR WEBSITE, CONTENT, SERVICES, OR ANY RELATED SOFTWARE, ACCESSED THROUGH OR DOWNLOADED FROM OUR WEBSITE OR SERVICES, EVEN IF The Owners IS AWARE OR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, The Owners’S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US FOR WEBSITE AND/OR SERVICES ACCESS DURING THE PREVIOUS MONTH OF YOUR MEMBERSHIP PRIOR TO THE EVENT GIVING RISE TO LIABILITY. YOU UNDERSTAND THAT The Owners DOES NOT IN ANY WAY VET MEMBERS OR EXAMINE THE BACKGROUNDS OF MEMBERS, INCLUDING BUT NOT LIMITED TO CRIMINAL BACKGROUNDS, NOR DO WE MAKE ANY WARRANTIES AS TO THE CONDUCT OF CURRENT AND/OR FUTURE MEMBERS. IN NO EVENT SHALL The Owners BE LIABLE FOR ANY DAMAGES, DIRECT OR INDIRECT, SPECIAL, GENERAL, CONSEQUENTIAL, COMPENSATORY, AND/OR INCIDENTAL, AS A RESULT OF THE CONDUCT OF YOU OR ANYONE ELSE IN CONNECTION WITH THE USE OF THE SERVICE, ONLINE OR OFFLINE.</P>

        <H2>Member conduct</H2>
        <P>Members may post their own content to our Website through our Services (Member Content). Members and Visitors understand that by using our Website or Service, they may be exposed to content that is offensive, indecent, or objectionable. We have no control over Member Content and do not in any way guarantee the quality, accuracy or integrity of such content. The Owners is not responsible for the monitoring or filtering of any Member content. Should any Member Content be found illegal, The Owners will submit all necessary information to the proper authorities.</P>
        <P>If any Member Content is reported to The Owners as being offensive or inappropriate, The Owners has full authority to either restrict the Member’s ability to post Member Content OR to immediately terminate the membership of the Member, without notification to the Member. We have sole discretion to remove any Member Content that violates this Agreement or is otherwise objectionable in our sole discretion.</P>
        <P>Members are responsible for complying with all applicable federal and state laws for their content, including copyright and trademark laws. Members shall respect copyright and trademark laws.</P>
        <P>Members are solely responsible for their own interactions with other Members. The Owners reserves the right, but has no obligation, to monitor disputes between Members.</P>
        <P>Members may create only one profile and have no more than one membership.</P>
        <P>You warrant that you will not use our Services to infringe the intellectual property rights of others in any way. In accordance with the DMCA and other applicable law, we have adopted a policy of terminating Members who we deem, in our sole discretion, to be infringers of other’s intellectual property rights.</P>
        <P>As a Member, you agree not to use our Services to do any of the following:</P>
        <Ul>
            <Li>decompile, disassemble or reverse engineer our Website, Services, and any related software.</Li>
            <Li>use our Website or Services in any manner that violates this Agreement or any local, state, federal, or international laws.</Li>
        </Ul>
        <P>upload, post or otherwise transmit any Member Content that:</P>
        <Ul>
            <Li>Violates any local, state, federal, or international laws.</Li>
            <Li>Infringes on any patent, trademark, trade secret, copyright or other proprietary rights of any party.</Li>
            <Li>Harms, threatens, defames, promotes violence or illegal activities, or is otherwise vulgar, obscene, abusive, harassing, tortuous, libelous, invasive of another’s privacy, hateful, or racially, ethically or otherwise objectionable.</Li>
            <Li>Links directly or indirectly to any materials to which you do not have a right to link.</Li>
            <Li>Contains any private information of any third party, including, without limitation, addresses, phone numbers, email addresses, Social Security numbers and credit card numbers, photographs and images.</Li>
            <Li>Contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment, or to extract information from our Website or Services.</Li>
            <Li>Contains any unsolicited or unauthorized advertising, solicitations, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," or any other form of solicitation.</Li>
            <Li>You do not have a right to transmit under any law (i.e. intellectual property laws) or under contractual or fiduciary relationships (i.e. non-disclosure Agreements).</Li>
            <Li>In the sole judgment of The Owners, is objectionable or which restricts or inhibits any other person from using or enjoying our Website or Services, or which may expose The Owners, our affiliates, or our Users to any harm or liability of any type.</Li>
            <Li>Is false, misleading, or inaccurate.</Li>
        </Ul>
        <P>use our Content to:</P>
        <Ul>
            <Li>Develop a competing website.</Li>
            <Li>Create compilations or derivative works as defined under United States copyright laws.</Li>
            <Li>Re-distribute it in any manner, including, but not limited to, sale, license, lease, rental, subscription, or any other distribution mechanism.</Li>
            <Li>Conduct research.</Li>
        </Ul>

        <H2>Use of information</H2>
        <P>We reserve the right, and you authorize us, to the use and assignment of all of your information regarding your use of our Website and Services in any manner consistent with our Privacy Policy.</P>
        <P>All remarks, suggestions, ideas, graphics, or other information communicated by you to us (collectively, “Submission”) is considered assigned to us and is as such considered our property. We will not be required to treat any Submission as confidential, and will not be liable for any ideas (including without limitation, product, service or advertising ideas) and will not incur any liability as a result of any similarities that may appear in our future products, services or operations.</P>
        <P>Without limitation, we will have exclusive ownership of all present and future existing rights to the Submission of every kind and nature everywhere. We will be entitled to use the Submission for any commercial or other purpose whatsoever, without compensation to you or any other person sending the Submission. You acknowledge that you are responsible for whatever material you submit, and you, not us, have full responsibility for the message, including its legality, reliability, appropriateness, originality, and copyright.</P>

        <H2>Privacy Policy</H2>
        <P>Our Privacy Policy is considered part of this Agreement. You must review this Privacy Policy.</P>

        <H2>Unlawful activity</H2>
        <P>We reserve the right to investigate complaints or reported violations of this Agreement and to take any action we deem appropriate, including but not limited to reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties and disclosing any information necessary or appropriate to such persons or entities relating to your profile, email addresses, usage history, posted materials, IP addresses and traffic information.</P>

        <H2>Linking to our website</H2>
        <P>You may provide links to our Website, provided (a) that you do not remove or obscure, by framing or otherwise, any portion of our Website, (b) your website does not engage in illegal or pornographic activities, and (c) you discontinue providing links to our Website immediately upon request by us.</P>

        <H2>Links to other websites</H2>
        <P>Our Website may, from time to time, contain links to third party websites. These links are provided solely as a convenience to you. By linking to these websites, we do not create or have an affiliation with, or sponsor such third party websites. Inclusion of links for any website on our Website does not mean that we endorse, guarantee, warrant, or recommend the services, information, content and/or data of such third party websites. The Owners has no control over the legal documents and privacy practices of third party websites; as such, you access any such third party websites at your own risk.</P>
        
        <H2>Payments</H2>
        <P>You represent and warrant that if you are purchasing something from us that (i) any credit information you supply is true and complete, (ii) charges incurred by you will be honored by your bank or credit card company, (iii) you will pay the charges incurred by you at the posted prices, including any applicable taxes, and (iv) if your initial payment method is dishonored, you will still pay the charges incurred, including any surcharge we may incur due to such dishonored payment.</P>
       
        <H2>Refund Policy</H2>
        <P>You agree that refunds or credits will not be issued by us for any reason.</P>

        <H2>Indemnification</H2>
        <P>You agree to indemnify, defend and hold us and our partners, agents, officers, directors, employees, subcontractors, successors, assigns, third party suppliers of information and documents, attorneys, advertisers, product and service providers, and affiliates harmless from any liability, loss, claim and expense, including reasonable attorney’s fees, related to your violation of this Agreement or use of our Website or Services.</P>

        <H2>Arbitration</H2>
        <P>Any legal controversy or legal claim arising out of or relating to this Agreement and/or our Service, excluding legal action taken by us to collect or recover damages for, or obtain any injunction relating to, website operations, intellectual property, and our Service, shall be settled solely by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association. Any such controversy or claim shall be arbitrated on an individual basis, and shall not be consolidated in any arbitration with any claim or controversy of any other party.</P>
        <P>The arbitration shall be conducted in Atlanta, Georgia, and judgment on the arbitration award may be entered into any court having jurisdiction thereof. Either you or us may seek any interim or preliminary relief from a court of competent jurisdiction in Atlanta, Georgia necessary to protect the rights or property of you and us pending the completion of arbitration. Each party shall bear one-half of the arbitration fees and costs.</P>

        <H2>General Terms</H2>
        <P>This Agreement shall be treated as though it were executed and performed in Atlanta, Georgia, and shall be governed by and construed in accordance with the laws of the State of Georgia without regard to conflict of law principles. In addition, you agree to submit to the personal jurisdiction and venue of such courts. Any cause of action by you with respect to our Website or Service must be instituted within one (1) year after the cause of action arose or be forever waived and barred. Should any part of this Agreement be held invalid or unenforceable, that portion shall be construed consistent with applicable law and the remaining portions shall remain in full force and effect. To the extent that any Content is in conflict or inconsistent with this Agreement, this Agreement shall take precedence. Our failure to enforce any provision of this Agreement shall not be deemed a waiver of such provision nor of the right to enforce such provision. Our rights under this Agreement shall survive any termination of this Agreement.</P>

    </TextContainer>
);
