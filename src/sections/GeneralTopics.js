import SectionTemplate from '../components/SectionTemplate';
import { Link } from 'react-router-dom';

const sections = [
  { title: "General HPI Template", path: "/HPI" },
  { title: "Discharge Summary", path: "/Discharge" },
  { title: "Review of Systems", path: "/ROS" },
  { title: "Normal Physical Exam", path: "/PE" },
  { title: "Oral Presentations", path: "/Presentation" },
];


const GeneralTopics = () => {
  return (
    <><SectionTemplate title="General Topics" /><p><strong>Welcome to the 37th Edition of Gray Matter!</strong></p><p>Hello, AMAZING MS2s! Welcome to the 37th edition of Gray Matter, a clinical handbook for Baylor College of Medicine students first conceived by Mark Edelman and David Savage in 1986. Once again, it is hoped that this collection of practical information will be useful during your clinical assignments. </p><p>
      We know the start of clinical rotations can be very daunting and all the memes you have seen of a medical student starting rotations and feeling lost are VERY REAL! But hey, that is the medical school tradition that everyone relates to. However, BCM does an amazing job of supporting one another and one of the supports that we have for you all is this document called Gray Matter. It was an annually updated document that started in the 1990s. You may even ask your attendings/residents who went to BCM if they have ever used this document as many carried it as their little pocket of medicine for quick references. This document’s appearance serves as a revival of the Gray Matter. The main object of the documents are as follows:</p><ul>
        <li>Serve as a guidebook for medical students for clinical rotations</li>
        <li>Supplementary resource guiding prerounding, presentations, and note-writing</li>
        <li>Anticipate HY conditions for each rotation</li>
        <li>Discussions of Tips for Success</li>
      </ul><p>This document has mainly been written by the following MS3s: Soham Datar, Ryan Chang, Adam Davis, Aydee Hinojosa, Isaac Miller, John Sholeen, Todd Snow, and Garrett Wortham, with additional guidance from Luay Boulahouache (MS4).  The document has been receiving plenty of oversight from the following attendings: Drs. Zaven Sargsyan, Lauren Rash, Anita Kusnoor, and Atul Maheshwari. Additionally, each director/main faculties of each clerkship has been involved to keep the materials relevant and helpful: Drs. Bellows and Anandan (Neurology), Drs. Han and Williams (Psychiatry), Dr. Harris (ObGyn), Dr. Sarkar (Family Med), Drs. Misra, McClure, Barak, Rueda and Clegg (attendings) and Dr. Bianca Gray (PGY3 resident) (Pediatrics), Drs. Rash and Sargsyan (attendings) and Drs. Lydia Glick and Trevor Jamison (Chief Resident and PGY3 resident) (Internal Medicine), and Dr. Rojas-Khalil (attending) and Dr. Nour Eddeen Bitar (PGY2 anesthesia resident) (Surgery). Lastly but not least, this could not have been done without the assistance and approval from Deans Poythress and Morrow (Student Affairs). Please if you ever see them, thank them as this required great dedication and coordination between all the faculties and students to get this final product.<p>
        This document however should not replace your CODs, didactics, UWorld, Anki, and other resources that your clerkship director will provide but rather a great supplement to those! We wish this document to be a great supplement to your many resources for you all to know expectations of each rotation and learn tricks to showcase your amazing skills on rotations.</p><p>
          Remember to always learn the best you can on each rotation as the knowledge/skills you learn in one rotation will translate to another rotation. Most of all in each of your rotation, show great passion in the care of your patients because they are yours. This is the part of medicine many of us have been waiting our whole lives for. Enjoy it and wish this Gray Matter can help form new synapses between your neurons!</p>
      </p><h2>Phone Directory References</h2><ul>
        <li>Ben Taub Interpreter: 713-873-7300 (*37300)</li>
        <li>BT Operator: 713-873-2010</li>
        <li>VA Directory: <a href="https://app.qgenda.com/landingpage/medvamc">https://app.qgenda.com/landingpage/medvamc</a></li>
        <li>TCH SpokWeb: <a href="https://tchspokweb.ad.texaschildrenshospital.org/amcom/amcomweb/">TCH Paging Directory</a></li>
      </ul>

      {sections.map((section) => (
        <div key={section.path} style={{ marginBottom: 10 }}>
          <Link to={section.path}>
            <button style={{ width: '100%', padding: 10 }}>
              {section.title}
            </button>
          </Link>
        </div>
      ))}


      <h2>ACLS: Code Logistics</h2><p>Includes bradycardia/tachycardia decision tree, arrest algorithms, role assignments, and drug protocols.</p><p>
        <strong>[Placeholder for ACLS image/chart]</strong>
      </p>
      <h2>Useful Websites & Apps</h2><ul>
        <li>UpToDate</li>
        <li>UWorld</li>
        <li>MDCalc</li>
        <li>VisualDx</li>
        <li>Touch Surgery</li>
        <li>HumanDx</li>
      </ul><h2>SmartPhrase / DotPhrase Compilation</h2><p>Access Epic and CPRS templates using: <strong>Boulahouache, Luay</strong> (search in smartphrases)</p><h2>Credentialing Contacts</h2><ul>
        <li>Ben Taub: medicalstaffservices@harrishealth.org</li>
        <li>Texas Children’s: phughes@bcm.edu</li>
        <li>OBGYN: Jessica.Reede-Lee@bcm.edu</li>
        <li>St. Luke’s: BSLMCMedEducation@stlukeshealth.org</li>
      </ul><p><strong>[Placeholder for additional diagrams and illustrations]</strong></p></>
  );
};

export default GeneralTopics;





const thStyle = {
  border: '1px solid black',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid black',
  padding: '8px',
};