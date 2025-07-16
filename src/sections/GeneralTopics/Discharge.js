import { Link } from 'react-router-dom'; // Add this import


const Discharge = () => {
    return (

        <><div style={{ marginBottom: 20 }}>
            <Link to="/GeneralTopics">
                <button>Back to General Topics</button>
            </Link>
        </div><p><h2><center><u>General Discharge Summary</u></center></h2>
                <p><strong>Name:</strong> [Patient's Name]</p>
                <p><strong>Date of Birth:</strong> [Patient's DOB]</p>
                <p><strong>Medical Record Number:</strong> [MRN]</p>
                <p><strong>Admission Date:</strong> [Date of Admission]</p>
                <p><strong>Discharge Date:</strong> [Date of Discharge]</p>

                <h2>Admission Diagnosis</h2>
                <ul>
                    <li><strong>Primary Diagnosis:</strong> [Primary Diagnosis at Admission]</li>
                    <li><strong>Secondary Diagnoses:</strong> [List any other diagnoses]</li>
                </ul>

                <h2>History of Present Illness</h2>
                <ul>
                    <li><strong>Chief Complaint:</strong> [Patient's chief complaint upon admission]</li>
                    <li><strong>History:</strong> [Brief summary of the history of the present illness, including onset, duration, and symptoms]</li>
                </ul>

                <h2>Hospital Course</h2>
                <ul>
                    <li><strong>Summary:</strong> [Brief summary of the patient's hospital course, including key events, treatments, procedures, and progress]</li>
                    <li><strong>Diagnostic Tests:</strong> [Important diagnostic tests and their results, such as lab tests, imaging studies, etc.]</li>
                    <li><strong>Procedures:</strong> [List any significant procedures performed during the hospital stay]</li>
                    <li><strong>Consultations:</strong> [List any consultations with other specialties and their recommendations]</li>
                </ul>
                <p><em>Tip:</em> Tell the patient’s story. Incorporate the labs and imaging to show why you think the diagnosis is the diagnosis. Don’t just copy and paste your progress note.</p>

                <h2>Treatment</h2>
                <ul>
                    <li><strong>Medications:</strong> [List of medications started, continued, or discontinued during the hospital stay]</li>
                    <li><strong>Therapies:</strong> [Any other treatments such as physical therapy, occupational therapy, etc.]</li>
                </ul>

                <h2>Discharge Condition</h2>
                <ul>
                    <li><strong>Condition at Discharge:</strong> [Patient's condition at the time of discharge, e.g., stable, improved, etc.]</li>
                    <li><strong>Vital Signs:</strong> [Relevant vital signs at discharge]</li>
                </ul>

                <h2>Discharge Instructions</h2>
                <ul>
                    <li><strong>Medications:</strong> [List of medications prescribed at discharge, including dosages and instructions]</li>
                    <li><strong>Follow-up Appointments:</strong> [Details of follow-up appointments with primary care physician or specialists]</li>
                    <li><strong>Activity:</strong> [Any activity restrictions or recommendations]</li>
                    <li><strong>Diet:</strong> [Dietary recommendations or restrictions]</li>
                    <li><strong>Signs and Symptoms to Monitor:</strong> [Instructions on signs and symptoms to monitor and when to seek medical attention]</li>
                    <li><strong>Other Instructions:</strong> [Any other specific instructions for the patient or caregiver]</li>
                </ul>

                <h2>Patient Education</h2>
                <ul>
                    <li><strong>Education Provided:</strong> [Summary of education provided to the patient about their condition, treatment plan, and follow-up care]</li>
                </ul>

                <p><strong>Signature:</strong> <br />[Medical Student's Name]</p></p></>



    );
};

export default Discharge;