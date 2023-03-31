/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../assets/index.css';
// import meetup from '../assets/meetup-mockup (2).png';
import chapter from '../assets/chapter-mockup.png';
import chapterwire1 from '../assets/chapter-wire-1.png';
import chapterwire2 from '../assets/chapter-wire-2.png';
import chapterproto1 from '../assets/chapter-proto-1.png';
import chapterproto2 from '../assets/chapter-proto-2.png';
import chapterproto3 from '../assets/chapter-proto-3.png';
// import meetdevicemobile from '../assets/meet-device-mobile.png';
// import meetdevicedesk from '../assets/meet-device-desk.png';
import chapterdevicemock from '../assets/chapter-device-mock.png';
import NavBar from './NavBar';
import Footer from './Footer';

function Chapter({ currPage, setCurrPage }) {
  useEffect(() => {
    setCurrPage('');
    document.title = 'Chapter | Sylvia Zhao';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Chapter">
      <NavBar currPage={currPage} />
      <div id="container-floating">
        <div className="table-text2 nds">
          <Link to="/chapter#overview">
            <p className="letter">OVERVIEW</p>
          </Link>
        </div>
        <div className="table-text3 nds">
          <Link to="/chapter#user-research">
            <p className="letter">USER RESEARCH</p>
          </Link>
        </div>
        <div className="table-text4 nds">
          <Link to="/chapter#solution">
            <p className="letter">SOLUTION</p>
          </Link>
        </div>
        <div className="table-text5 nds">
          <Link to="/chapter#prototype">
            <p className="letter">PROTOTYPE</p>
          </Link>
        </div>
        <div className="table-text6 nds">
          <Link to="/chapter#reflections">
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
        <div className="project-header">Chapter</div>
        <div className="project-info">
          Designing a virtual book club app for readers
        </div>
        <img className="project-img" src={chapter} alt="chapter mockup" />
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="overview">Overview</div>
            <div className="project-ltext">
              Reading communities exist on various social platforms online, but what about
              the traditional book club experience? Coming from my own efforts to read more
              with friends, I wondered how social interactions related to reading could be
              transferred into a digital experience.
              <br />
              <br />
              This project presents a mobile solution for how users might
              track progress and engage in discussions in a virtual book club.
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
                1 month
              </div>
            </div>
          </div>
        </div>
        <div className="section-header" id="user-research"> User Research</div>
        <div className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            &ldquo;I definitely care more about my friends&apos; opinions, I&apos;d probably
            blow off an online comment I disagree with&rdquo;
            <span style={{ 'font-style': 'italic' }}> &mdash; Reader</span>
          </div>
        </div>
        <div className="subsection-header">USER INTERVIEWS</div>
        <div className="project-text">
          The primary goal of user research was to understand what type of platform would be
          most beneficial to supporting social connections between readers (ie. social media,
          progress tracker, etc).
          I interviewed 4 people ranging in age from 20 to mid 50s who read frequently; questions
          focused on platforms that they currently use related to reading, how they find books
          to read, and how they interact with people virtually and in-person concerning books.
          One interviewee was an active member of an in-person book club.
          <br />
          <br />
          Comments from the interviews showed that people generally do not directly engage with
          other readers online but prefer to discuss thoughts with friends/family. People also
          noted that a key difference between virtual and in-person interactions is that
          they value their friends&apos; opinions much more than comments from online
          platforms. In the case of having a different perspective on a book from
          a friend, interviewees said that they would be much less likely to be dismissive
          of that perspective compared to their reaction to an online comment.
        </div>
      </div>
      <div className="affinity-col">
        <div className="categories-wrap">
          <div className="categories-row">
            <div className="category-flex">
              <div className="category-name">USE OF EXISTING PLATFORMS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    GoodReads: good for tracking and organizing what
                    you read
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    TikTok: too easy to buy into hype of popular books
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Instagram: too visually focused, &ldquo;builds
                    an aesthetic&rdquo; of reading
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Sometimes read & leave online reviews (hard to avoid spoilers)
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">HOW TO FIND BOOKS TO READ</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Heavy reliance on word of mouth/recs. from family and friends
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Recommendations on social media (mostly Instagram & TikTok), often bad
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Books from same author as previous books
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Will read blurbs of random books to see what is interesting
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="categories-row-last">
            <div className="category-flex">
              <div className="category-name">INTERACTIONS WITH FRIENDS</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Better for discussing specific thoughts/obscure questions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Enjoy more in-depth conversations to share thoughts
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    More open to discussing different opinions
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Perspectives are usually similar on topics/books
                  </div>
                </div>
              </div>
            </div>
            <div className="category-rflex">
              <div className="category-name">INTERACTIONS ONLINE</div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    Generally no direct interaction with people
                    online (forums/comment sections)
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Online resources good for fast answers & info
                  </div>
                </div>
              </div>
              <div className="post-it-row">
                <div className="lpost-it">
                  <div className="post-it-text">
                    More readily dismissive of opinions that differ from own
                  </div>
                </div>
                <div className="rpost-it">
                  <div className="post-it-text">
                    Still interesting to see range of perspectives
                  </div>
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
          User interviews provided the following core insights that framed the final design:
        </div>
        <ul>
          <li>
            <div className="list-text">Readers value their friends&apos; opinions much more highly than those of people online</div>
          </li>
          <li>
            <div className="list-text">
              Online platforms are interesting since they provide
              diverse perspectives and quick answers to minor questions
            </div>
          </li>
          <li>
            <div className="list-text">
              Readers enjoy being able to track progress &
              organize what books they have read/want to read
            </div>
          </li>
        </ul>
        <div className="project-text-low">
          Due to emphasis on how people use interactions from friends&apos; as well as
          online platforms to drive their reading decisions and processes, my guiding
          question focused on balancing the different value that both types of
          interaction bring to readers.
        </div>
        <div id="how-might-card" className="cap-card">
          <div className="cap">
            <div className="empty">c</div>
          </div>
          <div className="cap-card-text">
            How might we create a virtual experience that gives people a space to
            both interact with friends as well as access a larger community?
          </div>
        </div>
        <div className="section-flex">
          <div className="section-lflex">
            <div className="section-header" id="solution">Solution</div>
            <div className="project-ltext">
              I chose to design a mobile app for a virtual book club to help
              readers engage with their friends on books they read. The app
              allows users to track their reading progress, discuss books within
              their private group, and discuss with a public community of readers.
              I designed for mobile due to the convenience of people chatting with
              friends on mobile devices on social apps.
              <br />
              <br />
              My process involved wireframing and prototyping with user testing being conducted
              after wireframing and the first prototype iteration. The final solution presents
              user flows for updating reading progress in a group and posting a reply to a group
              discussion.
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
      {/* <div className="project-text">/////////////TO DO: USER FLOW DIAGRAM SECTION??</div> */}
      <div className="project-wrap">
        <div className="subsection-header">WIREFRAMES: ITERATION 1</div>
        <div className="project-text">
          The first iteration focused on the layout of the home and group pages
          to explore the best way for users to navigate to important features
          within the group book club section of the app. I also wireframed
          the group progress page for what a group is currently reading.
          Main sections on the pages included:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Currently Reading&rdquo; </span>
                section at the top of the home page for users to quickly access the &ldquo;
                Update My Progress&rdquo; feature and to provide summary of current reading
                activity. Also included on the group page to access the group progress page.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Quick Actions&rdquo; </span>
                on the home page for accessing the chat feature & the group progress page.
                This aims to help the user easily access features they might engage with
                frequently.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;My Progress&rdquo; </span>
                section on the group page to give the user a summary of their activity
                and to allow for updating their reading progress. This addresses comments
                from user research about organizational tools.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Group Overview&rdquo; </span>
                on the group page to show users how other people in their group are progressing
                through their reading. The timeline format visualizes how far each group
                member is in the book.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Discussions&rdquo; & &ldquo;Chat&rdquo; </span>
                sections on the group progress page to allow users to engage in public community
                discussions as well as private chatting with their group.
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="project-text">
          //////////TO DO: ADD USER FLOW DIAGRAM
        </div> */}
      </div>
      <div className="mockup">
        <img className="mockup-img" src={chapterwire1} alt="chapter-wire-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">WIREFRAMES: ITERATION 2</div>
        <div className="project-text">
          After creating the first iteration of wireframes, I gathered feedback from people
          previously interviewed for user research to gauge which features aligned with
          user needs. Updates in the second iteration included:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Changes to &ldquo;Quick Actions&rdquo; </span>
                with the removal of the chat feature. Users expressed that a chat would seem
                too similar to just texting their friends separately outside the app.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Group Overview&rdquo; timeline layout </span>
                replaced original layout too be more streamlined. Some users also commented that the
                original view for group progress felt &ldquo;competitive&rdquo;.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Chat&rdquo; changed to private discussions </span>
                to maintain a private discussion space while being more organized than a normal chat
                function. Users can toggle between private and public discussion sections
                on the group progress page.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={chapterwire2} alt="chapter-wire-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 1</div>
        <div className="project-text">
          Prior to user testing, I styled the second iteration of wireframes to create a
          prototype for the user flows of adding to a discussion and updating personal progress.
          Key UI design choices were:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Core green color </span>
                used to emphasize actionable buttons and used in icons for a cohesive
                design.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Sans serif & serif font combination </span>
                to create a more sophisticated but still simple feeling interface.
                Headers were in Lora (serif) while body text, buttons, and smaller text were in
                Noto Sans for readability.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img" src={chapterproto1} alt="chapter-proto-1" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 1</div>
        <div className="project-text">
          Using the initial prototype, I conducted user testing with the user research interviewees.
          This involved the two prototyped flows and general comments on the app.
          People mainly commented on:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Clean interface </span>
                that feels organized. Users noted that it felt much more modern
                than the popular platform Goodreads.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Unclear actions </span>
                on the home page and the group progress page. People were
                unsure whether the progress percentage indicator was clickable.
                Some people in testing thought it would lead to the &ldquo;My Progress&rdquo;
                area.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Confused by &ldquo;Group Overview&rdquo; timeline </span>
                due to cramped visualization. Users expressed confusion over how someone would tell
                clearly what chapter someone was on if there were a lot of group members.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Dislike of discussion types placed side by side</span>
                in terms of feeling like there is potential to accidentally post to the public side.
                Users also felt that the discussions crowded the group progress page.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Checkbox unclear for &ldquo;Update My Progress&rdquo; </span>
                due to small size.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 2</div>
        <div className="project-text">
          The main change in iteration 2 was the reorganization of how discussions
          were presented in the app&apos;s structure. Due to comments from user testing
          that the original discussion section created a cramped
          interface and a potential
          for mistakes, the two types of discussions became separate pages reachable
          from the group progress page. Overall, changes in this iteration involved:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Background cards </span>
                added in light colors to help visually group elements on the home
                and group progress pages. This was done in order to help make
                clickable elements clearer.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Separate pages for private & public discussions </span>
                to prevent possible mistakes with posting to the wrong section in the
                original side-by-side view.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Updated &ldquo;Quick Actions&rdquo; </span>
                to address the changes to the discussions structure. &ldquo;Group
                Discusssions&rdquo; is prioritized over public discussion as a quick action
                due to comments from research that people value their friends&apos; thoughts
                more.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Simplified &ldquo;Group Overview&rdquo; </span>
                to eliminate confusion with original progress visualization and to create
                a more scalable solution in the case of a large group.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Replaced checkbox with toggle button </span>
                for improved usability in the &ldquo;Update My Progress&rdquo; function.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="mockup">
        <img className="mockup-img-three" src={chapterproto2} alt="chapter-proto-2" />
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">USER TESTING: ROUND 2</div>
        <div className="project-text">
          Again with the people from the first round of user testing, I gathered feedback on the
          second prototype, particularly the changes to the discussion section.
          Comments were largely centered around the private group discussions page:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Threads&rdquo; terminology </span>
                felt too &ldquo;formal&rdquo; to some people, felt more appropriate for the public
                community discussions.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Unread replies/new updates </span>
                indicator missing from discussions page.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-wrap">
        <div className="subsection-header-sec">PROTOTYPE: ITERATION 3</div>
        <div className="project-text">
          The final prototype includes updates addressing the comments from the second
          round of user testing. These were the updates made to the private group discussion
          page:
          <ul>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>&ldquo;Threads&rdquo; changed to &ldquo;Topics&rdquo; </span>
                to address the issue of the private group discussions feeling too much
                like a public discussion forum.
              </div>
            </li>
            <li>
              <div className="list-text">
                <span style={{ 'font-weight': '600' }}>Indicator for new updates </span>
                added to each discussion topic.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="last-mockup">
        <img className="mockup-img-single" src={chapterproto3} alt="chapter-proto-3" />
      </div>
      <div className="project-wrap">
        <div className="section-header" id="prototype">Final Protoype</div>
        <div className="project-text">
          View the final prototype for &ldquo;Update My Progress&rdquo; and adding
          a discussion reply at the link below:
          <ul>
            <li>
              <div className="list-text">
                <a className="proto-link" target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/GhMUbVJmDgFJR9GvVNHzAh/Book-Club-Case-Study?node-id=118%3A806&scaling=scale-down&page-id=117%3A804&starting-point-node-id=118%3A806">
                  Chapter Prototype
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="proto-flex">
          <img className="device-mock" src={chapterdevicemock} alt="chapter-device-mock" />
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

export default Chapter;
