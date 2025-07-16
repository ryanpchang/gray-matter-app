import { Link } from 'react-router-dom'; // Add this import

const Presentation = () => {
    return(
        <><div style={{ marginBottom: 20 }}>
            <Link to="/GeneralTopics">
                <button>Back to General Topics</button>
            </Link>
        </div>
        
              <p><h2><u><center>How to Structure a Problem-Based Oral Presentation in Clinic</center></u></h2>

        <h3>Returning Patients</h3>
        <p>
          Patient is an &lt;age&gt;-year-old &lt;man/woman&gt; with a PMH sig for &lt;insert significant PMH&gt; who presents for
          &lt;routine follow up versus acute concern (specify the concern)&gt;. S/he was last seen in our clinic by &lt;me/Dr. Y&gt;
          &lt;z months/years&gt; ago.
        </p>

        <h3>New Patients Presenting to Establish Care</h3>
        <p>
          Patient is an &lt;age&gt;-year-old &lt;man/woman&gt; who presents to establish care. S/he has a history of
          &lt;insert significant PMH/PSH, current meds, +/- relevant details from social/family history&gt;.
        </p>

        <h3>New Patients Presenting with an Acute Concern</h3>
        <p>
          Patient is an &lt;age&gt;-year-old &lt;man/woman&gt; who presents to establish care and with a chief concern of
          &lt;insert CC&gt;. S/he has a history of &lt;insert significant PMH +/- relevant details from social/family history&gt;.
        </p>

        <h3>New Patients Presenting for Hospital Follow-Up</h3>
        <p>
          Patient is an &lt;age&gt;-year-old &lt;man/woman&gt; who was admitted to &lt;insert hospital name&gt; from
          &lt;date of admission&gt; to &lt;date of discharge&gt; and now presents for hospital follow-up.
          S/he has a history of &lt;insert significant PMH&gt; and was admitted with &lt;insert discharge diagnosis&gt;.
          Summarize significant points from hospital course.
        </p>

        <h3>Any Patient Requiring Emergent Care</h3>
        <p>
          I think this patient will need to go to the EC. Patient is an &lt;age&gt;-year-old &lt;man/woman&gt; with a PMH sig for
          &lt;insert significant PMH&gt; who presents today and is found to &lt;describe scenario requiring emergency care&gt;.
        </p>

        <p>Proceed to problem-based presentation. Discuss problems in order of urgency/significance.</p>
        <p>I’ll first address the &lt;problem #1&gt;.</p>

        <h3>S — Subjective / Symptoms and Interval Events</h3>
        <ul>
          <li>Discuss events since last visit (consultant visits/recommendations)</li>
          <li>Lately the patient has been experiencing &lt;insert pertinent symptoms&gt;.</li>
          <li>Mention pertinent positives/negatives from ROS.</li>
          <li>Currently the patient is on &lt;insert medication regimen&gt;. Discuss medication adherence and/or side effects.</li>
          <li>Discuss results of any home monitoring (glucose log, BP log, etc.)</li>
        </ul>

        <h3>O — Objective</h3>
        <ul>
          <li>Discuss pertinent physical examination findings</li>
          <li>Mention results of pertinent labs and studies</li>
        </ul>

        <h3>A — Assessment</h3>
        <ul>
          <li>Discuss your assessment of the problem (well controlled, poorly controlled, etc.)</li>
          <li>Include differential diagnosis as needed</li>
        </ul>

        <h3>P — Plan</h3>
        <ul>
          <li>Discuss diagnostic plan</li>
          <li>Discuss therapeutic plan</li>
          <li>Repeat above steps for all problems being addressed this visit</li>
          <li>List any additional medications that were not mentioned above</li>
          <li>Discuss health maintenance plans (omit for emergent care cases)</li>
          <li>
            Outline follow-up plans: I’ll plan to see the patient again in &lt;insert number&gt; months to follow up on
            &lt;insert problem&gt;.
          </li>
        </ul></p>
        </>
    );
};

export default Presentation;