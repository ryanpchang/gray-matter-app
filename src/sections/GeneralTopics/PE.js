import { Link } from 'react-router-dom'; // Add this import



const PE = () => {
    return (
        <><div style={{ marginBottom: 20 }}>
            <Link to="/GeneralTopics">
                <button>Back to General Topics</button>
            </Link>
        </div><p><h2><center><u>Sample Normal Physical Exam</u></center></h2>

                <h3>Vitals</h3>
                <ul>
                    <li>T: ___ °F</li>
                    <li>P: ___ beats per minute</li>
                    <li>BP: ___ / ___ mmHg</li>
                    <li>R: ___ breaths per minute</li>
                    <li>SpO2: ___%</li>
                    <li>Wt: ___ lbs</li>
                    <li>Ht: ___’ ___”</li>
                </ul>

                <h3>General</h3>
                <p>The patient was cooperative and alert. No abnormal odor came off him.</p>

                <h3>HEENT</h3>
                <ul>
                    <li><strong>Head:</strong> Normocephalic, hair soft texture, no scalp tenderness. Sinuses non-tender bilaterally.</li>
                    <li><strong>Eyes:</strong> No lid swelling, no discharge, sclera white, conjunctiva pink bilaterally. No strabismus, conjugate gaze, pupils equal/reactive to light and accommodation. Converges medially.</li>
                    <li>Visual acuity not assessed (no Snellen chart).</li>
                    <li>Visual fields full to confrontation bilaterally.</li>
                    <li>Intraocular pressure soft bilaterally.</li>
                    <li>Cornea, lens, anterior chamber all clear/deep bilaterally.</li>
                    <li>PERRLA. Red reflex visualized bilaterally.</li>
                    <li><strong>Ears:</strong> Normal outer inspection, no tenderness, canals/TMs normal. Cone of light visualized bilaterally. Weber & Rinne not performed.</li>
                    <li><strong>Nose:</strong> No trauma, mucosa pink, septum midline, no drainage/polyps.</li>
                    <li><strong>Throat:</strong> Moist mucosa, no sores/erythema, no lesions on lips, gums pink, pharynx clear, uvula midline.</li>
                </ul>

                <h3>Neck</h3>
                <ul>
                    <li>Neck supple; trachea midline.</li>
                    <li>Thyroid isthmus midline, no nodules bilaterally.</li>
                    <li>No JVD. Carotid pulses 2+ bilaterally without thrills or bruits.</li>
                </ul>

                <h3>Lymph Nodes</h3>
                <p>No lymphadenopathy in preauricular, posterior auricular, submental, anterior/posterior cervical chains. Thyroid normal size.</p>

                <h3>Chest</h3>
                <p>Normal appearance. Spine straight.</p>

                <h3>Cardiovascular</h3>
                <p>Regular rate/rhythm. PMI at left 5th ICS MCL. S1/S2 normal, no murmurs/rubs/gallops/clicks/bruits.</p>

                <h3>Pulmonary</h3>
                <p>Thorax symmetric. Normal breathing pattern, excursion, tactile fremitus. Lungs resonant. Normal auscultation with vesicular breath sounds. No wheezing, rales, rhonchi, or egophony.</p>

                <h3>Abdomen</h3>
                <ul>
                    <li>Appearance normal, not distended, no scars.</li>
                    <li>Bowel sounds active in all quadrants.</li>
                    <li>Soft and non-tender to light/deep palpation. No guarding or masses.</li>
                    <li>Liver smooth, palpable 1 finger below RCM; 7 cm span.</li>
                    <li>Spleen non-palpable, no CVA tenderness.</li>
                </ul>

                <h3>Peripheral Vascular</h3>
                <p>Extremities warm, no edema. Pulses 2+ at all sites. No clubbing. Cap refill &lt;2 sec. Edema 0 bilaterally.</p>

                <h3>Musculoskeletal</h3>
                <ul>
                    <li><strong>Shoulders:</strong> Symmetric, full ROM, no tenderness/swelling. Negative Drop Arm, Neer’s, Hawkin’s. Strength 5/5.</li>
                    <li><strong>Knees:</strong> Symmetric, full ROM, no deformities or swelling. Negative Bulge sign, drawer tests, Lachman, McMurray.</li>
                </ul>

                <h3>Neurologic</h3>
                <ul>
                    <li><strong>Mental Status:</strong> Alert, oriented x3. Coherent thought process. Speech fluent with rare slurs. Good memory and insight. Serial 7s intact.</li>
                    <li><strong>Speech:</strong> Fluent, coherent, clear.</li>
                    <li><strong>Cranial Nerves:</strong>
                        <ul>
                            <li>II: Visual fields full; fundoscopic described above</li>
                            <li>III, IV, VI: EOMI</li>
                            <li>V: Motor and sensory intact</li>
                            <li>VII: Symmetric facial movement</li>
                            <li>VIII: Hearing intact</li>
                            <li>IX, X: Uvula midline</li>
                            <li>XI: SCM/trapezius strength 5/5</li>
                            <li>XII: Tongue midline</li>
                        </ul>
                    </li>
                    <li><strong>Sensation:</strong> Pinprick, vibration, position, and light touch intact UE/LE.</li>
                    <li><strong>Motor:</strong> Good tone/bulk. Strength 5/5 in UE and LE (shoulder, biceps/triceps, wrist, fingers, hip, quads, hamstrings, ankle).</li>
                    <h2>Motor & Reflexes</h2>

                    <h3>Motor</h3>
                    <p>Normal tone and bulk throughout.</p>

                    <h4>Upper Extremity Power</h4>
                    <table>
                        <thead>
                            <tr>
                                <th style={thStyle}>UE Power</th>
                                <th style={thStyle}>Deltoids</th>
                                <th style={thStyle}>Biceps</th>
                                <th style={thStyle}>Triceps</th>
                                <th style={thStyle}>Wrist Ext</th>
                                <th style={thStyle}>Wrist Fl</th>
                                <th style={thStyle}>Finger Ext</th>
                                <th style={thStyle}>Finger Fl</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Right</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Left</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                            </tr>
                        </tbody>
                    </table>

                    <h4>Lower Extremity Power</h4>
                    <table>
                        <thead>
                            <tr>
                                <th style={thStyle}>LE Power</th>
                                <th style={thStyle}>Hip Flex</th>
                                <th style={thStyle}>Quads</th>
                                <th style={thStyle}>Hams</th>
                                <th style={thStyle}>Dorsiflex</th>
                                <th style={thStyle}>Plantarflex</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Right</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Left</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                                <td style={tdStyle}>5</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Reflexes</h3>
                    <p>DTRs: Brachioradialis, biceps, triceps, achilles, and patellar reflexes are 2+ bilaterally.</p>

                    <table>
                        <thead>
                            <tr>
                                <th style={thStyle}>Reflexes</th>
                                <th style={thStyle}>Biceps</th>
                                <th style={thStyle}>Triceps</th>
                                <th style={thStyle}>B'radialis</th>
                                <th style={thStyle}>Knee</th>
                                <th style={thStyle}>Ankle</th>
                                <th style={thStyle}>Toes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={tdStyle}>Right</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                            </tr>
                            <tr>
                                <td style={tdStyle}>Left</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                                <td style={tdStyle}>2+</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Cerebellar</h3>
                    <p>
                        Rapid alternating movements and finger-to-nose testing are intact and normal bilaterally. No pronator drift.
                        Negative Romberg test. Normal regular gait, tandem gait, toe walking, and heel walking.
                    </p>

                    <h3>Skin</h3>
                    <p>Normal skin turgor. No rashes or pallor.</p>
                </ul></p></>
    );
};

export default PE;


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