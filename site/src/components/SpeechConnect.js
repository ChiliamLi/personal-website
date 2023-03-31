/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import speechconnect from '../assets/speechconnect-mockup.png';
import speechapps from '../assets/speech-apps.png';
import aacexample from '../assets/aac-example.png';
// import speechicons from '../assets/speech-icons.png';
import speechgridwire from '../assets/speech-grid-wire.png';
import speechgridui from '../assets/speech-grid-ui.png';
import speechcustomizewire from '../assets/speech-customize-wire.png';
import speechcustomizeui from '../assets/speech-customize-ui.png';
import speechwordwire from '../assets/speech-word-wire.png';
import speechwordui from '../assets/speech-word-ui.png';
import speechsetwire1 from '../assets/speech-set-wire-1.png';
import speechsetwire2 from '../assets/speech-set-wire-2.png';
import speechsetui from '../assets/speech-set-ui.png';
import speechui from '../assets/speech-ui.png';
import speechdevicemock from '../assets/speech-device-mock.png';
import NavBar from './NavBar';
import Footer from './Footer';

function SpeechConnect({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'SpeechConnect | Sylvia Zhao';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="SpeechConnect">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/speechconnect#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/speechconnect#aac-devices">
            <p className="letter">AAC DEVICES</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/speechconnect#research">
            <p className="letter">RESEARCH</p>
          </Link>
        </div>
        {/* <div className="table-text3 nds">
          <Link to="/speechconnect#market-research">
            <p className="letter">MARKET RESEARCH</p>
          </Link>
        </div> */}
        <div className="table-text4 nds">
          <Link to="/speechconnect#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/speechconnect#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/speechconnect#reflections">
            <p className="letter">REFLECTIONS</p>
          </Link>
        </div>
        <div id="floating-button">
          <svg className="table-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#bdbdbd" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#bdbdbd" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#bdbdbd" />
          </svg>
          <svg className="table-icon-dark" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="icon-border" cx="28" cy="28" r="27" stroke="#033E57" strokeWidth="2" />
            <rect x="19" y="18.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="27.5" width="23" height="2" rx="1" fill="#033E57" />
            <rect x="19" y="36.5" width="23" height="2" rx="1" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="19.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="28.5" r="1.5" fill="#033E57" />
            <circle className="dot" cx="14.5" cy="37.5" r="1.5" fill="#033E57" />
          </svg>
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-header">SpeechConnect</div>
        <div className="project-info">Creating a tablet experience for alternative communication tech</div>
        <img className="project-img" src={speechconnect} alt="speechconnect mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Language drives everyday interactions and is a tool that shapes
              how people form connections with each other. Stemming from my interests
              in psychology and linguistics, I wanted to explore how design and technology can
              support different communication methods with accessibility in mind.
              <br />
              <br />
              This project focused on creating a customizable experience in augmentative and
              alternative communication to serve users who need technology to assist their
              daily interactions with others due to speech difficulties. While specialized
              hardware does exist, I framed this project as a software solution
              for standard tablets.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  ROLE
                </div>
                <div className="project-rtext">
                  UX research & design
                  <br />
                  Visual design
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                TIMELINE
              </div>
              <div className="project-rtext">
                1 month
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="aac-devices">AAC Devices</div>
        <div className="project-text">
          Digital augmentative and alternative communication (AAC) devices are speech generating
          devices that allow a user to communicate through a combination of words, images, and
          phrases that the device &ldquo;says&rdquo; out loud. Words are generally presented in a
          grid layout that users interact with either through touch, scanning, or eye gazing.
          While many groups benefit from AAC devices, core users include any individuals
          who have difficulty producing speech due to neurological or physical conditions.
          This includes individuals with aphasia, autism, apraxia, and traumatic brain injury.
          <br />
          <br />
          Made to help users increase their everyday independence and connections with others, AAC
          devices serve a crucial need but can cost thousands of dollars for high-tech models.
          This barrier to access led me to consider how digital applications
          can attempt to fill the same role; for example, in the case where a
          user already possesses a standard tablet, they could rely on an app instead of
          purchasing a new device.
        </div>
        {/* <img className="project-img" src={aacexample} alt="aac-example" /> */}
        <div className="mockup-small">
          <img className="mockup-img-small" src={aacexample} alt="speech-apps" />
        </div>
        <div className="section-header" id="research"> Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;This is an area in the field that is so critical and underserved&rdquo;
            {/* <br /> */}
            <span style={{ 'font-style': 'italic' }}> &mdash; Speech-Language Pathologist</span>
          </div>
        </div>
        <div className="subsection-header">EXPERT KNOWLEDGE</div>
        <div className="project-text">
          To better understand the user groups and use cases for AAC devices, I surveyed 4
          professional speech-language pathologists (SLPs) who have experience working with AAC
          devices. Due to logistical constraints, information was collected via Google Forms
          in long-form answers.
          <br />
          <br />
          In addition to defining the user groups, I wanted to explore how traditional
          AAC devices differ from apps, compile a list of professionally recommended apps,
          and understand the challenges that people face with AAC devices.
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row">
            <div className="category-flex">
              <div className="category-name">USER GROUPS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text-short">
                    People with neurological/physical/
                    <br />
                    mental
                    conditions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Types of interactions with devices: touch, scanning, and/or eye gaze
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Therapists, family, friends of AAC users
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    People with limited or no speech capability
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">COMMON CHALLENGES</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Lack of flexibility in devices (eg. needing to show photos in another app)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Issues with speed and precision (saying exactly what you want to say)
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Mobility impairments increase precision issues
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Very often geared towards children, lack of adult vocabulary
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">AAC DEVICES VS. APPS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text-short">
                    Devices: more durable & customizable hardware
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Devices: requires recommendation & assessment by SLP to purchase
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Apps: good for people without mobility impairments
                    (no special durability needed)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Apps: can be privately funded, widely available
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">DESIGN NEEDS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Limited icon options for diverse representation
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Color scheme can be important with cerebral visual impairment
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Layout considerations for motor planning
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Ideally 60-70 words per page max. for non-writers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">MARKET RESEARCH</div>
        <div className="project-text">
          Based on the survey responses, I looked into 4 of the most popular AAC apps for tablets
          that currently exist: LAMP Words For Life, TouchChatHD with WordPower, TD Snap, and
          Proloquo2Go. For each app, I was mainly interested in the layout of the central grid view,
          customization capabilities, and UI design.
          <br />
          <br />
          Overall, AAC apps are structured through vocabulary sets for how the grid view
          is organized. Sets vary in sophistication depending on what a
          user would need to communicate and what they are capable of communicating with
          a device based on their level of experience. For example, apps will usually
          offer a basic/beginner set of vocabulary for users new to AAC, and then users
          can adjust their set as they learn.
        </div>
      </div>
      <div id="graphs-meetup" className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              LAMP WORDS FOR LIFE
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    3 vocab levels starting with basic set of 82 words
                    that each only need 1 touch to speak
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Customizable vocab sets that maintain target words in same positions in grid
                    to help users form motor patterns
                  </div>
                </li>
                <li>
                  <div className="list-text">Icon system paired with words in grid to promote literacy</div>
                </li>
              </ul>
            </div>
            {/* <img className="graph-img" src={generalexp} alt="general-exp graph" /> */}
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              TOUCHCHAT HD WITH WORDPOWER
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    Multiple preset vocab levels starting with the most basic 4 words per page
                    set-up for users that need minimal targets
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Ability to customize words
                  </div>
                </li>
                <li>
                  <div className="list-text">Very picture/icon-based for users with aphasia who have difficulty with written language</div>
                </li>
              </ul>
            </div>
            {/* <img className="graph-img" src={easeinfo} alt="ease-info graph" /> */}
          </div>
        </div>
        <div className="graphgrid-row">
          <div className="card-lgraph-low">
            <div className="graphcard-label">
              TD SNAP
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    Multiple preset vocab levels starting with core 63 word grid; additional sets
                    available for purchase
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Ability to customize words
                  </div>
                </li>
                <li>
                  <div className="list-text">Ability to edit icons on word buttons to adjust for skin color, hair color, and other personalized traits</div>
                </li>
              </ul>
            </div>
            {/* <img className="graph-img" src={academicplan} alt="academic-plan graph" /> */}
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              PROLOQUO2GO
            </div>
            <div className="graphcard-ques">
              <ul>
                <li>
                  <div className="list-text">
                    Recommended 7 x 11 starting grid size to limit need for page navigation
                  </div>
                </li>
                <li>
                  <div className="list-text">
                    Ability to customize words and sets
                  </div>
                </li>
                <li>
                  <div className="list-text">Similar icon system/style as other apps</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechapps} alt="speech-apps" />
        <div className="iteration-caption">
          Left to right, top to bottom: LAMP, TouchChat, TDSnap, Proloquo2Go
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          I came away from my survey and interviews with these main insights:
        </div>
        <ul>
          <li>
            <div className="list-text">There is an extremely broad range of users with different needs who use AAC devices</div>
          </li>
          <li>
            <div className="list-text">Customizability of vocab sets is often limited by user&apos;s needing to pay for more advanced sets</div>
          </li>
          <li>
            <div className="list-text">
              Icons/pictures are important to guiding user&apos;s in AAC; icons
              systems are often not cohesive and may appear childish to adults
            </div>
          </li>
        </ul>
        <div className="project-text-low">
          After understanding the research results, I created two guiding questions for the design
          process, one for UX design and one for visual design.
        </div>
        <div id="how-might-card-double" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an organized & customizable AAC application so
            that users can tailor the functionality to their own needs?
            <br />
            <br />
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on text for navigation?
          </div>
        </div>
        {/* <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create an accessible system of illustrations/icons so
            that users do not need to depend only on text for navigation?
          </div>
        </div> */}
        {/* <div className="section-header" id="market-research">Market Research</div> */}
        {/* WHERE DOES THE HOW MIGHT WE GO?? */}
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              My solution focused on the user flows of speaking a sentence with the app (Home),
              allowing for customization (Customize),
              adding a custom word to the app (Add Word), and adding a custom set of vocabulary for
              the main grid view (Add Vocab Set).
              <br />
              <br />
              This was executed with a tablet size in mind
              for similarity to actual AAC devices, and feedback from SLPs was provided between
              first and second iterations for wireframes.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  WIREFRAMES
                </div>
                <div className="project-rtext">
                  <span style={{ 'font-weight': '600' }}>Home: </span>
                  3 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Customize: </span>
                  2 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Add Word: </span>
                  2 iterations
                  <br />
                  <span style={{ 'font-weight': '600' }}>Add Vocab Set: </span>
                  2 iterations
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                UI DESIGN
              </div>
              <div className="project-rtext">
                2 iterations
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        {/* <img id="project-sketches" src={pitsketches} alt="pit-sketches" /> */}
        <div className="subsection-header">HOME (GRID VIEW)</div>
        <div className="project-text">
          My solution started with the main grid view that acts as the homepage of the app.
          In this part of the app, I focused on the user flow of how someone would speak a
          sentence, paying attention to how words and categories are organized in the grid.
          Across 3 iterations, the homepage ultimately featured:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Word & category buttons </span>
                in the grid, organized based on how sentences would be commonly structured
                (pronouns and nouns on far left of grid).
                Category buttons were ultimately moved to the bottom right since SLPs noted that
                users would benefit from commonly used words being in the first row instead,
                especially if interacting through scanning or eye gazing.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Keyboard & Search buttons </span>
                included in the grid as additional buttons. SLPs recommend a keyboard feature to
                allow flexibility in communication style if a user would prefer to type. The search
                function would help users locate a word in the grid. Keyboard and Search were
                moved from the navigation bar to the grid since they would be features contained in
                the grid view, not separate pages in the app.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Navigation to customization page </span>
                included in bottom navigation bar to emphasize the app&apos;s ability to create a
                custom experience.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Top bar to display words </span>
                that a user spoke, meant to promote literacy and to help user track what
                they are communicating. This includes the option to clear a word from the bar.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechgridwire} alt="speech-grid-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1, 2, & 3
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          The final design demonstrates an example of how a user&apos;s grid could
          be set up with the general button layout outlined in the wireframes. Features
          use the main orange color while word buttons are assigned a color based on the
          part of speech. In the example of a category page, the Keyboard and Search
          buttons remain in their original
          position to enforce the idea from user research that buttons should generally
          have one consistent motor pattern for interaction.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechgridui} alt="speech-grid-ui" />
        <div className="iteration-caption">
          Main grid view & &ldquo;Activities&rdquo; category page example
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">CUSTOMIZE</div>
        <div className="project-text">
          In the Customize page, the user sees options for customizing their experience with
          the home grid view. Originally named the Edit page, I chose to rename the page for clarity
          and to emphasize the idea of a custom experience. Additionally, icons were added
          to the cards in the second iteration to account for users who can&apos;t rely on
          text for navigation. Features include:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Adding a word to the database </span>
                from the &ldquo;Add Word&rdquo; button
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Adding a custom vocab set </span>
                for the grid from the &ldquo;Add Vocab Set&rdquo; button
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Changing the vocab set for the grid </span>
                in order to allow for users to control how they progress from basic to more advanced
                set-ups. This also includes custom sets and sets that text-only (for users who
                don&apos;t want or need visual aids).
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Changing the theme for icons </span>
                to accomodate for different visual needs or preferences
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Other quick actions </span>
                for editing an existing word in the database (Edit Word) and changing the
                voice that speaks the words a user selects (Change Voice)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechcustomizewire} alt="speech-customize-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1 & 2
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          For the UI design, changes between iterations mainly involved filling cards and icons to
          better indicate interactive components.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechcustomizeui} alt="speech-customize-ui" />
        <div className="iteration-caption">
          UI design iterations 1 & 2 (final)
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">ADD WORD</div>
        <div className="project-text">
          To add to the app&apos;s database of words that can be used in vocab sets,
          I wanted to address the pain point mentioned by SLPs that apps often lack
          enough advanced vocabulary for adults. By allowing users to add their own
          words with custom pictures, the app creates a more tailored experience.
          <br />
          <br />
          The final design has the user
          specify the word and optional category before adding a picture. This decision
          reflected feedback about how the first iteration made it confusing on whether
          a picture was required for a word to be added (since some users may not want
          to add a picture). The final design also uses the updated title &ldquo;Add Word To
          Database&rdquo; since SLPs commented that &ldquo;Add Word&rdquo; could be confused
          with adding to the current main grid view.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechwordwire} alt="speech-word-wire" />
        <div className="iteration-caption">
          Wireframe iterations 1 & 2
        </div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          The final design demonstrates a flow for creating new word in the app with the
          ability to upload a photo for the icon.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechwordui} alt="speech-word-ui" />
        <div className="iteration-caption">
          Final UI design
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">ADD VOCAB SET</div>
        <div className="project-text">
          For the feature of adding a custom vocab set to configure the main grid view,
          I wanted to address the pain point in existing apps concerning the flexibility
          of standard sets. By allowing a user to create new vocab sets for their unique
          communication needs, this feature gives users more control over how they progress
          through different vocab sets as they learn. Key points include:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Optional selection of a base set </span>
                for the user to work off of when creating a custom vocab set. According to SLPs,
                this can be useful in the case where a therapist wants to create a subset of
                an existing set to train patterns for a few specific words only.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Ability to remove a word </span>
                from a base set&apos;s grid
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Ability to replace a word </span>
                in a base set&apos;s grid. This function draws from the app&apos;s existing
                word database.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechsetwire1} alt="speech-set-wire-1" />
        <div className="iteration-caption">Wireframes for iterations 1 & 2 of flow starting point</div>
        <img id="mockup-img-margin" className="mockup-img" src={speechsetwire2} alt="speech-set-wire-2" />
        <div className="iteration-caption">Wireframes for removing & replacing a word</div>
      </div>
      <div className="project-wrap">
        <div className="project-text">
          The final UI design based on wireframe iteration 2 follows the same
          format as the &ldquo;Add Word&rdquo; feature in order to maintain consistency
          throughout the app to help users learn patterns in the functionality.
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={speechsetui} alt="speech-set-ui" />
        <div className="iteration-caption">Final UI design for creating a custom vocab set</div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">UI DESIGN</div>
        <div className="project-text">
          The overall UI design of the project focused on the use of icons to aid the user&apos;s
          navigation of the app. The following choices guided the use and creation of icons:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Icons for each major feature/action </span>
                to guide user&apos;s who cannot rely entirely on text. The same icons are used on
                the cards that guide the user through each feature, maintaining consistency
                throughout the interface to orient the user.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Limited, cohesive color palette </span>
                for grid view icons to ensure that no icons compete for the user&apos;s attention
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Flat illustration style </span>
                for grid view icons to maintain clarity at small sizes
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup">
        <img className="mockup-img" src={speechui} alt="speech-ui" />
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          Interact with the final prototype at the link below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/zNMKIm85MZyPw7ucAzFpLH/AAC-Case-Study?node-id=138%3A21244&scaling=scale-down&page-id=138%3A21027&starting-point-node-id=138%3A21244">
                  SpeechConnect Prototype
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="proto-flex">
          <img className="device-mock" src={speechdevicemock} alt="speech-device-mock" />
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          Coming from a background in psychology and linguistics, this project was an interesting
          way to explore how design and technology can serve accessibility needs related to
          those areas. Speaking with speech-language pathologists through the process helped
          demonstrate the challenges of designing for diverse needs and users. Overall, this
          project helped me be more conscious of visual design choices that impact
          an interface&apos;s usability.
          <br />
          <br />
          Although my solution presents one example of an AAC device interface, my research
          process showed the complexity of how effective AAC devices are designed. Digital
          solutions address pain points concerning access and flexibility, but some users
          still need special hardware for durability. This digital solution instead focuses on
          the design needs that software can address, aiming to meet a wide range of communication
          needs.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SpeechConnect;
