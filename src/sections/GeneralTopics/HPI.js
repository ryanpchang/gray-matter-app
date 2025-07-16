import { Link } from 'react-router-dom'; // Add this import


const HPI = () => {
    return (
        <><div style={{ marginBottom: 20 }}>
            <Link to="/GeneralTopics">
                <button>Back to General Topics</button>
            </Link>
        </div><><h2>General HPI Template</h2><p>CC: Patient's Words<p><u><em><strong><center>HPI</center></strong></em></u></p><p>
            [Name] is XX-year-old [male/female] with PMH of [insert PMH] who presents with [symptoms].  [Story before ED: OLDCAARTS]. On presentation to the ED, [story during ED]. [Relevant risk factors and medications]. The patient [relevant positive and negative ROS].
        </p><p><h2>ROS</h2></p><ul>
                <li>General</li>
                <li>ENT</li>
                <li>CV</li>
                <li>Resp</li>
                <li>GI</li>
                <li>GU</li>
                <li>MSK</li>
                <li>Skin</li>
                <li>Neuro</li>
                <li>Psych</li>
                <li>Endo</li>
                <li>Heme</li>
                <li>A&I</li>
            </ul><p><h2>Past Medical History</h2>
                <ul>
                    <li>PMHx/Hosp</li>
                    <li>PSHx</li>
                    <li>Meds</li>
                    <li>Allergies</li>
                    <li>Screening</li>
                    <li>Vax</li>
                </ul>
            </p><p><h2>Family History</h2></p><p><h2>Social Hx</h2>
                <ul>
                    <li>Occupation</li>
                    <li>Exercise</li>
                    <li>Diet</li>
                    <li>Housing</li>
                    <li>Alcohol, Smoking, Drug Use</li>
                    <li>Sexual activity</li>
                </ul></p><p><h2>Physical Exam</h2>
                <p><strong>Vitals:</strong></p>
                <ul>
                    <li>T: ___ °F</li>
                    <li>P: ___ beats per minute</li>
                    <li>BP: ___ / ___ mmHg</li>
                    <li>R: ___ breaths per minute</li>
                    <li>SpO2: ___ %</li>
                    <li>Wt: ___ lbs</li>
                    <li>Ht: ___ ' ___"</li>
                    <li>BMI: ___</li>
                </ul></p><p><h3>Physical Exam Findings</h3></p><center><p><u><h3><em>Additional Studies</em></h3></u></p></center><ul>
                <li>Labs</li>
                <li>Imaging</li></ul><p><em><h3><center>
                    Assessment and Plan</center></h3></em></p><p><strong><p>
                        “Mr/Ms. [name] is an [x]-year-old man/woman with [pertinent medical history], who presented with [salient symptoms with qualifiers and time course], found to have [key physical exam or lab/imaging findings], most concerning for [suspected diagnosis].”</p> <p>Problem List: (#’s)</p>
                    </strong></p></p></></>
    );
};

export default HPI;