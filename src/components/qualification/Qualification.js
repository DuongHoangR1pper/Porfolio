import React, { useState } from "react";
import "./Qualification.scss";
export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);
  
      const toggleTab = (index)=>{
          setToggleState(index)
      }
  return (
    <section className="qualification section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtile">My personel journey</span>

      <div className="qualification-container container">
        <div className="qualification-tabs">
          <div className={toggleState === 1 ? "qualification-button qualification-active button-flex": "qualification-button button-flex"}  onClick={()=>toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification-icon"></i>{" "}
            Education
          </div>

          <div className={toggleState === 2 ? "qualification-button qualification-active button-flex": "qualification-button button-flex"} onClick={()=>toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification-icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification-sections">
          <div className={toggleState === 1 ? "qualification-content qualification-content-active": "qualification-content"}>
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Design</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">Art Direct</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Development</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">UX Expert</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2017 - 2018</i>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification-content qualification-content-active": "qualification-content"} >
            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Product Designer</h3>
                <span className="qualification-subtitle">Microspft - Spain </span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            <div className="qualification-data">
              <div></div>
              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
              <div>
                <h3 className="qualification-title">UX Designer</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>
            </div>

            <div className="qualification-data">
              <div>
                <h3 className="qualification-title">Web Designer</h3>
                <span className="qualification-subtitle">Spain - Institue</span>
                <div className="qualification-calender">
                  <i className="uil uil-calender-alt">2021 - Present</i>
                </div>
              </div>

              <div>
                <span className="qualification-rounder"></span>
                <span className="qualification-line"></span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
