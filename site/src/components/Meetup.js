/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
import meetup from '../assets/meetup-mockup (2).png';
import when2meetdesk from '../assets/when2meet-desk.png';
import when2meetmobile from '../assets/when2meet-mobile.png';
import easesched from '../assets/ease-scheduling.png';
import schedmethod from '../assets/scheduling-method.png';
import schedresp from '../assets/scheduling-responding.png';
import schedorg from '../assets/scheduling-organizing.png';
import meetwire1 from '../assets/meet-wire-1.png';
import meetwire2 from '../assets/meet-wire-2.png';
import meetproto1 from '../assets/meet-proto-1.png';
import meetproto2 from '../assets/meet-proto-2.png';
import meetproto3 from '../assets/meet-proto-3.png';
import meettest1 from '../assets/meet-test-1.png';
import meetmobilecards from '../assets/meet-mobile-cards.png';
import meetdeskcards from '../assets/meet-desk-cards.png';
import meetdesk1 from '../assets/meet-desk-1.png';
import meetdesk2 from '../assets/meet-desk-2.png';
// import meetdevicemobile from '../assets/meet-device-mobile.png';
// import meetdevicedesk from '../assets/meet-device-desk.png';
import meetdevicemock from '../assets/meet-device-mock.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Meetup({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'Meetup | Sylvia Zhao';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Meetup">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text1 nds">
          <Link to="/meetup#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text2 nds">
          <Link to="/meetup#when2meet">
            <p className="letter">WHEN2MEET</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/meetup#user-research">
            <p className="letter">USER RESEARCH</p>
          </Link>
        </div>
        <div className="table-text4 nds">
          <Link to="/meetup#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/meetup#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/meetup#reflections">
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
        <div className="project-header">Meetup</div>
        <div className="project-info">Improving group meeting scheduling on mobile & web</div>
        <img className="project-img" src={meetup} alt="meetup mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Scheduling meetings can often become a laborious process of
              coordination between organizers sending out invites and attendees
              providing their availability.
              <br />
              <br />
              Inspired by past difficulties with the popular scheduling platform When2meet,
              this project aimed to create a more efficient and usable solution for
              people providing their availability for group meetings. The design process began with
              mobile first in order to focus on usability issues before expanding to desktop.
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
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                TIMELINE
              </div>
              <div className="project-rtext">
                1.5 months
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="when2meet">When2meet</div>
        <div className="project-text">
          In work settings without shared calendars, many people rely on When2meet to coordinate
          groups meetings. Operating as a web app, When2meet has one person send out a link from
          the platform to the rest of their team members to gather their availability during a
          specified period of time. Although When2meet offers a convenient solution, the interface
          suffers from poor usability, lacking a mobile responsive site.
          <br />
          <br />
          Despite simply starting off as personal inspiration for this project, When2meet
          was also then widely mentioned in user research, driving the general structure of the
          final interface I created.
        </div>
        <img className="project-img" src={when2meetdesk} alt="when2meet-desk" />
        <img id="when2meet-mobile" className="project-img" src={when2meetmobile} alt="when2meet-mobile" />
        <div className="section-header" id="user-research"> User Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;Seeing everyone&apos;s availability in one place is crucial&rdquo;
            <span style={{ 'font-style': 'italic' }}> &mdash; Student Club Leader</span>
          </div>
        </div>
        <div className="subsection-header">SURVEY</div>
        <div className="project-text">
          Given that students consistently need to schedule group meetings for clubs and projects
          without the use of organized systems (like Microsoft Outlook), I surveyed
          19 university students to understand key factors and pain points in
          diverse scheduling processes and methods. Survey questions focused on both the meeting
          organizer and invitee sides of scheduling.
          <br />
          <br />
          The survey responses showed a general trend of people finding scheduling group meetings
          to be a difficult process. The most commonly used tool was When2meet (14 out of 19
          respondents), matching the result that people prefer to collect availability before
          proposing a meeting time. Responses also showed that from both the meeting organizer
          side and the invitee side, people value fast communication and the ability to see
          the everyone&apos;s availability in one place.
        </div>
      </div>
      <div id="graphs-meetup" className="graphs">
        <div className="graphgrid-row">
          <div className="card-lgraph">
            <div className="graphcard-label">
              QUESTION 1
            </div>
            <div className="graphcard-ques">
              When attempting to schedule a group meeting,
              how difficult do you find it to settle on a
              time that aligns with everyone&apos;s schedule?
            </div>
            <img className="graph-img" src={easesched} alt="ease-sched graph" />
          </div>
          <div className="card-rgraph">
            <div className="graphcard-label">
              QUESTION 2
            </div>
            <div className="graphcard-ques">
              Select what you are more likely to do when attempting to schedule a
              meeting with a group
            </div>
            <img className="graph-img" src={schedmethod} alt="scheduling-method graph" />
          </div>
        </div>
        <div className="graphgrid-row">
          <div className="card-lgraph-low">
            <div className="graphcard-label">
              QUESTION 3
            </div>
            <div className="graphcard-ques">
              Select all factors that you consider important to the
              process of scheduling a meeting when you are
              <span style={{ 'font-weight': '600' }}> the organizer </span>
              in charge of scheduling
            </div>
            <img className="graph-img" src={schedorg} alt="scheduling-organizing graph" />
          </div>
          <div className="card-rgraph-low">
            <div className="graphcard-label">
              QUESTION 4
            </div>
            <div className="graphcard-ques">
              Select all factors that you consider important to the process of
              scheduling a meeting when you are
              <span style={{ 'font-weight': '600' }}> an invitee </span>
              (responding to organizer)
            </div>
            <img className="graph-img" src={schedresp} alt="scheduling-responding graph" />
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER INTERVIEWS</div>
        <div className="project-text">
          For interviews, I spoke with 2 undergraduate students and 1 graduate student who had
          previous corporate work experience as well. These students were selected for their
          experiences managing teams and clubs. I spoke with each of them on the factors that are
          most important to consider when sending out a meeting invite as well as thought processes
          when providing availability.
          <br />
          <br />
          Synthesis of comments from the interviews was consistent with survey results with people
          emphasizing the need to see all availability in one place and the ease of using When2meet
          in various workflows for scheduling meetings. The interviews confirmed When2meet&apos;s
          pain points of poor mobile usability and tedious process to input availability.
        </div>
      </div>
      <div className="affinity">
        <div className="categories-wrap">
          <div className="category-flex">
            <div className="category-name">GENERAL FEELINGS</div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Organizers value flexibility when compromises are needed
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  People find it difficult to schedule meetings
                </div>
              </div>
            </div>
          </div>
          <div className="category-flex">
            <div className="category-name">WHEN2MEET</div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Commonly used to gather availability
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  Tedious to input availability
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Convenient, no account needed
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  Bad mobile interface (everything too small, dragging doesn&apos;t work right)
                </div>
              </div>
            </div>
          </div>
          <div className="category-flex">
            <div className="category-name">COMMON PRACTICES</div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  Share GCal with people from a team
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  Preference for gathering availability vs sending out set times to choose from
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="lpost-it">
                <div className="post-it-text">
                  GCal, email, & When2meet often used together
                </div>
              </div>
              <div className="rpost-it">
                <div className="post-it-text">
                  GCal useful when scheduling one-on-one meetings
                </div>
              </div>
            </div>
          </div>
          <div className="category-rflex">
            <div className="category-name">IMPORTANT FACTORS</div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Organizer: seeing all availablity in one place
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Invitee: prefer ability to compare with the rest of own calendar
                </div>
              </div>
            </div>
            <div className="post-it-row">
              <div className="rpost-it">
                <div className="post-it-text">
                  Both sides: emphasis on fast communication
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">
          KEY RESEARCH INSIGHTS
        </div>
        <div className="project-text-single">
          Following user research, these observations framed my approach to a solution:
        </div>
        <ul>
          <li>
            <div className="list-text">People enjoy When2meet for its convenience since there is no need for any account sign-up/login</div>
          </li>
          <li>
            <div className="list-text">The ability to see availability for all people invited to a meeting is important to both the organizer & invitee sides</div>
          </li>
          <li>
            <div className="list-text">Usability on mobile is important for convenience and facilitates the fast communication that both sides value as well</div>
          </li>
        </ul>
        <div className="project-text-low">
          As a result, my guiding question focused on convenience and organization of how
          people&apos;s availability would be presented in the design.
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create a user-friendly interface for group meeting scheduling from the
            invitee side so that convenience & organization of information are prioritized?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              Due to pain points surrounding the process of providing availability, I chose to
              design for the perspective of the invitee only for the scope of this project. To
              specifically address mobile usability concerns, I designed for a mobile interface
              before expanding to a desktop solution after finalizing a mobile solution.
              <br />
              <br />
              Additionally, to maintain the convenience valued by users of When2meet, the interface
              was framed as a web app without need for an account. User testing was conducted
              after wireframing and the first iteration of a prototype with the full UI design.
            </div>
          </div>
          <div className="section-rflex">
            <div className="descrip-lflex">
              <div className="stage-wrap">
                <div className="subsection-rheader-top">
                  WIREFRAMES
                </div>
                <div className="project-rtext">
                  2 iterations
                </div>
              </div>
              <div className="stage-lwrap">
                <div className="subsection-rheader-top">
                  PROTOTYPES
                </div>
                <div className="project-rtext">
                  3 iterations
                </div>
              </div>
            </div>
            <div className="descrip-rflex">
              <div className="subsection-rheader">
                USER TESTING
              </div>
              <div className="project-rtext">
                2 rounds
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          The first iteration of my solution focused on displaying the group&apos;s
          availability on the main page and having the user add their availability
          for a given day by clicking “Edit” on a card in the “My availability” section. Primary
          considerations in this first iteration included:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Visual representation of availability </span>
                through differently shaded blocks (screen 1) to provide high-level information.
                This follows When2meet&apos;s method of displaying availability where a darker
                block indicates that more people in the group are available at the specified time.
                User research showed that meeting invitees are not as concerned with specific
                people&apos;s availability, only the number of people available at a given timeslot.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Separate views for group and individual availability </span>
                to maintain organization and a different space for the user to
                update their own information
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Reliance on tapping and typing interactions </span>
                to give the user more control over how they interact with the interface (screen 4).
                The choice of interaction addresses how users disliked When2meet&apos;s imprecise
                method of dragging in a grid to indicate availability. Tapping/typing into larger
                input boxes would aim to increase precision and decrease frustration with errors.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetwire1} alt="meet-wire-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">WIREFRAMES: ITERATION 2</div>
        <div className="project-text">
          The second iteration of wireframes made minor adjustments to the
          way days were displayed in “My availability,” as well as the layout of buttons.
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Save changes&rdquo; button </span>
                in &ldquo;My availability&rdquo; was changed to a back arrow in the upper-left
                corner to better indicate to a user how to return to the main &ldquo;Group
                availability&rdquo; view. A &ldquo;Cancel&rdquo; button and back arrow
                were also added to the editing a day view.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Add timeslot&rdquo; button </span>
                in the section for editing a specific day&apos;s availability was moved to be
                grouped closer to the existing timeslots a user has. This better associates the
                button&apos;s action with its results.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetwire2} alt="meet-wire-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 1</div>
        <div className="project-text">
          To prepare for user testing, I created a simple prototype of the app for the user flow
          of adding a timeslot to provide availability for a day. UI design choices involved:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Green and mint color palette </span>
                to create a calm appearance for the platform since research showed that scheduling
                was considered difficult or stressful by most users.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Work Sans as the main font </span>
                to maintain readability and professionalism with a sans serif font while still being
                friendly
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto1} alt="meet-proto-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 1</div>
        <div className="project-text">
          Using the initial prototype, I conduced user testing with 3 students, 1 from the user
          interviews and 2 others who had responded to the survey and were
          familiar with the project context. Users commented on:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Pleasant UI design </span>
                with a simple aesthetic and clear emphasis on actionable areas
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Good clarity with tapping interaction </span>
                for actually inputting availability, more mobile-friendly than dragging
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Lack of clarity with the home page </span>
                in terms of not understanding whether the main view shows group or individual
                availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>No visualization of &ldquo;My availability&rdquo; </span>
                since timeslots are all displayed as text instead of colored blocks like the
                group section
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Too many clicks </span>
                required to even get to the adding/editing availability functionality (3 clicks
                before availability is even added)
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meettest1} alt="meet-test-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 2</div>
        <div className="project-text">
          Based on the comments from Round 1 of user testing, I reorganized how the &ldquo;
          Add availability&rdquo; user flow begins:
          streamlined
          the “Add availability” user flow and created clear emphasis on separate
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Separate &ldquo;Me&rdquo; & &ldquo;Group&rdquo; </span>
                sections to address the confusion on what information the main
                view is initially presenting; indicated by buttons at the top to toggle the view
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Reduced number of clicks </span>
                for adding/editing availability to streamline interaction; both functions are
                accessed with 1 click in this iteration
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Calendar layout </span>
                to improve visualization of availability by highlighting days with provided
                availability in bright mint and indicating the currently selected day with
                an underline
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto2} alt="meet-proto-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 2</div>
        <div className="project-text">
          Continuing with the same users from the first round of testing, I collected feedback on
          the second prototype. With this second round, comments mostly focused on how information
          could be better indicated visually:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>No side-by-side comparision of group & personal availability </span>
                limits the information a user has at their immediate disposal when inputting their
                own information
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Preference for further visual representation of availability </span>
                since calendar visualizes overall time period across days but not timeslots on
                individual days; suggestions made for a grid view calendar
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Confusion with highlight vs. underline on date </span>
                for which one is meant to indicate selected date or whether availability
                was provided
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>One-click interaction </span>
                for adding/editing availability improves previous flow and feels
                less tedious
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 3</div>
        <div className="project-text">
          The final solution mainly addresses the confusions and concerns around visual
          representation of information with the introduction of a secondary grid view calendar:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Grid view calendar </span>
                to supplement the original calendar view; the grid shows individual days
                while the original layout still gives an overview of all dates that a
                user can select from
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Scrollable side-by-side comparison columns </span>
                in the grid view to solve for the issue of not having the ability to compare
                personal and group availability in the previous prototype; a key indicates the
                two types of availability shown by the columns
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Highlighted date indicates selected date </span>
                instead of a date with availability; this choice matches how a highlighted circle on
                &ldquo;AM&rdquo; or &ldquo;PM&rdquo; indicates selection, so instead, a dot under
                a date is used to show that a user previded availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Meeting information section </span>
                at the top of the screen contextualizes the meeting invite and informs
                how users should provide their availability based on the meeting length
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Tapping in the grid to add a timeslot </span>
                in the grid view would allow for automatic population of the new timeslot&apos;s
                starting time, helping counteract the additional tap added with the interaction
                of swtiching from the main calendar to the grid view
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Info on number of people available </span>
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={meetproto3} alt="meet-proto-3" />
        <img id="meet-mobile-cards" className="mockup-img" src={meetmobilecards} alt="meet-proto-3" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">DESKTOP VERSION</div>
        <div className="project-text">
          After finalizing the mobile prototype, I created a desktop version to see how the mobile
          version could scale. Some minor features/interactions were incorporated in the desktop
          interface:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Timeslot preview when adding/editing availability </span>
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Hover interactions for editing & group availability info </span>
                shown when a user taps a block of availability; this addresses the point from
                the original user research showing that people value general information about
                the group availability
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="last-mockup">
        <img className="mockup-img" src={meetdesk1} alt="meet-desk-1" />
        <img id="meet-desk-2" className="mockup-img" src={meetdesk2} alt="meet-desk-2" />
        <img id="meet-desk-cards" className="mockup-img" src={meetdeskcards} alt="meet-desk-cards" />
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          Interact with the final prototypes at the links below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/AHxq5BvD3YoUd5bdFdI9OC/Meetup-Prototype-(Mobile)?node-id=2%3A98&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A28">
                  Mobile Solution Prototype
                </a>
              </div>
            </li>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/C9TwlLjWPRFaHFCLNZ32v2/Meetup-Prototype-(Desktop)?node-id=3%3A394&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A21">
                  Desktop Solution Prototype
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="proto-flex">
          <img className="device-mock" src={meetdevicemock} alt="meet-device-mock" />
          {/* <img className="device-mock-desk" src={meetdevicedesk} alt="meet-device-desk" /> */}
        </div>
        <div className="section-header" id="reflections">Reflections</div>
        <div className="project-text">
          As a student who has thought a lot about the pain points with group meeting scheduling,
          this project provided an opportunity to understand how people think about
          the digital tools and the factors that go into their processes. By conducting
          user research and testing, I learned to translate those key factors into
          visual representations of information that would be the most convenient to users.
          <br />
          <br />
          While the final solution addresses the main pain point of mobile usability,
          further exploration could be done on how the platform
          would appear from the organizer side. Since
          this project only focused on the invitee side, research on the
          other perspective could be an interesting way to complete an understanding
          of the problem. This current solution still explores a side of the problem
          that is impactful to understanding how people work to collaborate efficiently.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Meetup;
