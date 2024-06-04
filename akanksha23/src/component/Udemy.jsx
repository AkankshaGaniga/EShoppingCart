import React from 'react'
import '../UdemyCss/Udemy.css';
// import { LuShoppingCart } from "react-icons/lu";
import { MdLanguage } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function Udemy() {
  return (

    <div>
        <div className="container">
            <div className="head">
                <div className="logo"></div>
                  <nav>
            <div class="up">
                <div class="category">
                    <div ><p>Categories</p></div>
                    <div class="dropdownnav">
                        <ul type="none">
                            <div class="dropdownnavchildsection">
                                <li>Development</li>
                                <div class="dropdownnavchild">
                                    <ul type="none">
                                    <li>Web Development</li>
                                    <li>Data Science</li>
                                    <li>Mobile Development</li>
                                    <li>Programming languages</li>
                                    <li>Game Development</li>
                                    <li>Data base design and development</li>
                                    <li>Software testing</li>
                                    <li>Software Engineering</li>
                                    <li>Software Development Tools</li>
                                    <li>No-code Development</li>
                                    </ul>
                                </div>
                            </div>
                            <li>Business</li>
                             <li>Finance and Accounting</li>
                            <li>IT and Software</li>
                            <li>Personal Developent</li>
                            <li>Design</li>
                            <li>Marketing</li>
                            <li>Lifestyle</li>
                            <li>Photograpy and Video</li>
                            <li>Health and Fitness</li>
                            <li>Music</li>
                        </ul>
                    </div>
                </div>
            </div>
            <input type="search" placeholder=' 🔍     Search for anything'/>
            <p>Plans & Pricing</p>
            <div class="udemybizdrop">
                        <p>Udemy Business</p>
                        <div class="udemybizdropchild">
                            <h2>Get your team access to over<br/> 15,000 top Udemy courses,<br/>anytime, anywhere.</h2>
                            <button>Try Udemy Business</button>
                        </div>
                    </div>
                    <div class="udemybizdrop">
                        <p>Teach on Udemy</p>
                        <div class="udemybizdropchild">
                            <h2>Turn what you know into an<br/> opportunity and reach<br/>millions around the world.</h2>
                            <button>Learn more</button>
                        </div>
                    </div>
            <i><MdOutlineShoppingCart /></i>
            <button className='btn1' >Log in</button>
            <button  className='btn2'>Sign up</button>
            <div className='icon'><TbWorld /></div>
        </nav>
                {/* <div className="input">
                  <input type="text" placeholder='  🔎  search for anything' />
                </div>
                <div className="business">Udemy Business</div>
                <div className="teach">Teach on Udemy</div>
                <div className="shop"><LuShoppingCart /></div>
                <button className="login">Log in</button>
                <button className="signup">Sign up</button>
                <button className="language"><MdLanguage /></button> */}
            </div>
            <div className="container2">
            <div className="body">
                <div className="inner">
                  <h1>Skills that drive you forward</h1>
                  <p>And those who will be. Learn to work, lead, and live better with new episodes of Leading Up dropping each Wednesday.</p>
                  <button className='listen'>Listen Now</button>
                </div>
            </div>
            <br /><br /><br />
           <div className="all"> 
               <h1>All the skills you need in one place</h1>
               <h3>From critical skills to technical topics, Udemy supports your professional development.</h3>
           </div>
           <br /><br />
           <div className='ban'>
            <div className='ban1'>
                
                <div className='course'>
                    <h5>Web Development</h5>
                    <h5>IT Certifications</h5>
                    <h5>Leadership</h5>
                    <h5>Data Science</h5>
                    <h5>Communication</h5> 
                    <h5>Business Analytics & Intelligence</h5>
                </div>
                <hr />
            </div>

            <div className='banner1'>
                <div className='banner2'>
                    <p className='p'>Web Development</p>
                    <p>13.3M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>Javascript</p>
                    <p>16.6M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>React JS</p>
                    <p>7M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>Angular</p>
                    <p>4M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>Java</p>
                    <p>14.4M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>Android Development</p>
                    <p>8M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>iOS Development</p>
                    <p>4M+ learners</p>
                </div>
                <div className='banner2'>
                    <p className='p'>CSS</p>
                    <p>9M+ learners</ p>
                </div>
            </div>
        </div>
        <br /><br />
           <div className="cont">
            <div id="card1" className="box"><div className="bx">
              <img src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h3>
              <p>&nbsp; Dr. Angela Yu</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(379,999)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              <button>Best Seller</button>
              <div class="ssdropdown1">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
            </div>
            </div>
            <div  id="card2" className="box"><div className="bx">
            <img src="https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Web Developer Bootcamp<br />&nbsp; 2024</h3>
              <p>&nbsp; Colt Steele</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(272,638)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              <div class="ssdropdown2">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart  style={{padding:"5px" ,backgroundColor:"red"}}/> */}
                    </div>
            </div>
            </div>
            </div>
            <div id="card3"  className="box"> <div className="bx"><img src="https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg" alt="" />
              <h3> &nbsp;&nbsp;Web Development Masterclass-<br />&nbsp; Online Certification Course</h3>
              <p>&nbsp; YuAccel Training</p>
              
              <h4>&nbsp;&nbsp; 4.4 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(9,803)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              <div class="ssdropdown3">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
            </div>
              </div>
            <div id="card4" className="box"><div className="bx"> <img src="https://img-c.udemycdn.com/course/240x135/1415652_ad99_4.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h3>
              <p>&nbsp; Dr. Angela Yu</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(379,999)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              <div class="ssdropdown4">
                    <h1>2022 Complete Python Bootcamp<br/>
                        From Zero to Hero in Python
                    </h1>
                    <span>Updated March 2021</span>
                    <p>All Levels &#183 Subtitles</p>
                    <p>Learn Python like a Professional<br/>
                        Start from the basics and go all the <br/>
                        way to creating your own applications 
                        and games
                    </p>
                    <div class="textandtick">
                        <p>
                        <TiTick />
                            Learn to use Python professionally,<br/> 
                            learning both Python 2 and Python 3!
                
                
                        </p>
                        <p>
                        <TiTick />
                            Create games with Python, like Tic Tac<br/>
                                Toe and Blackjack!
                
                
                        </p> 
                        <p>
                        <TiTick />
                            Learn advanced Python features, like<br/>
                                the collections module and how to work<br/>
                                with timestamps!
                        </p>
                    </div>
                    <div class="buttonandheart">
                        <button>Add To Cart</button>
                        {/* <FaRegHeart /> */}
                    </div>
            </div>
          </div>
          </div>
           </div>
           <button className='show'>Show all Developement courses</button>
            </div>
            <br />
            <div className="cont3">
              <h3>Trusted by over 15,000 companies and millions of learners around the world</h3 >
            </div>
            <div className="cont4">
              <div className="ct4">
              <img src="https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/ocud9ia7cf/svg/vimeo_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals" alt="" /><img src="https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals" alt="" />
              </div>
            </div>
            <div className="h1"><h1>Learing Focused On your goals</h1></div>
            <div className="cont5">
              
              <div className="ct1">
                <div className="c1">
                <div className="c"><div className="t"><img src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png" alt="" /></div><br />
                <div className="t"><h4>Hands-on training</h4>
                <p>Upskill effectively with AI-powered coding exercises,<br />practice tests,skill assessments,labs,and workspaces</p></div></div>
                <div className="c"><div className="t"><img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" /></div>
                <div className="t"><h4>Certification Prep</h4>
                <p>Prep for industry-recognized certifications by solving<br />real-world challenges and earn badges along the way.</p></div></div>
                <div className="c"><div className="t"><img src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png" alt="" /></div>
                <div className="t"><h4>Insights and analytics</h4>
                <p>Fast-track goals with advanced insights plus a dedicated<br />customer successteam to help drive effective learning.</p><span>Find out More →</span></div></div>
                <div className="c"><div className="t"><img src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png" alt="" /></div>
                <div className="t"><h4>Customizable content</h4>
                <p>Create tailored learning paths for team and organization<br />goals and even host your own content and resources</p><span>Find out More →</span></div></div> 
              </div>
              </div>
              <div className="ct2"><div className="img"><img src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png" alt="" /></div></div>
            </div>
            <div className="cont6">
              <div className="c61">
                <div className="t6">
                <h1>Top trends for the<br />future of work</h1>
                <h4>GenAI and leadership are at the <br /> core of today's skills-based <br />economy. Get the 2024 Global <br />Learning & Skills Trends Report to <br /> learn more.</h4>
                <div className="bt"><button>Get the report →</button></div>
              </div></div>
              <div className="c62">
                <img src="https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals" alt="" />
              </div>
            </div>
            <div className="cont7">
            <div className="h"><h1>Trending Now</h1></div>
            <br />
                <hr />
                <br />
              <div className="ct7">
                
                <div className="c7"><h1>chatGPT is a top <br />skill</h1>
                <h3>See ChatGPT is courses ›</h3>
                <p>3,127,423 learners</p>
                <button>Show all trending skills ↝</button></div>
                <div className="c7"><h2>Development</h2>
                <h3>Python ›</h3>
                <p>44,562,520 learners</p>
                <h3>Web Development ›</h3>
                <p>13,199,347 learners</p>
                <h3>Data Science</h3>
                <p>7,167,104 learners</p></div>
                <div className="c7"><h2>Design</h2>
                <h3>Blender ›</h3>
                <p>44,562,520 learners</p>
                <h3>Graphic design ›</h3>
                <p>13,199,347 learners</p>
                <h3>User Experience(UX) Design ›</h3>
                <p>7,167,104 learners</p>
                </div>
                <div className="c7"><h2>Business</h2>
                <h3>PMI Project Management(PMP) ›</h3>
                <p>44,562,520 learners</p>
                <h3>Microsoft Power BI ›</h3>
                <p>13,199,347 learners</p>
                <h3>Project Management›</h3>
                <p>7,167,104 learners</p></div>
              </div>
            </div>
            <br />
            <div className="a1"><h1>Learners are viewing</h1></div>
            <br />
            <div className="cont">
            <div className="box">
              <img src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h3>
              <p>&nbsp; Dr. Angela Yu</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(379,999)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              <button>Best Seller</button>
            </div>
            <div className="box">
            <img src="https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Web Developer Bootcamp<br />&nbsp; 2024</h3>
              <p>&nbsp; Colt Steele</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(272,638)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
             
            </div>
            <div className="box"> <img src="https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg" alt="" />
              <h3> &nbsp;&nbsp;Web Development Masterclass-<br />&nbsp; Online Certification Course</h3>
              <p>&nbsp; YuAccel Training</p>
              
              <h4>&nbsp;&nbsp; 4.4 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(9,803)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
              </div>
            <div className="box"> <img src="https://img-c.udemycdn.com/course/240x135/1415652_ad99_4.jpg" alt="" />
              <h3> &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h3>
              <p>&nbsp; Dr. Angela Yu</p>
              
              <h4>&nbsp;&nbsp; 4.7 <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>(379,999)
              </h4>
              <h3> &nbsp; ₹3,099</h3>
          </div>
           </div>
           <br />
           <div className="cont8">
            <div className="ct8">
              <div className="c8">
              <h2>Booz|Hallen|Hamilton</h2>
              <h1>Booz Allen Hamilton Unlocks Talent <br /> Retention and Productivity Through <br />Upskilling</h1>
              <div className="sm">
                <div className="s1"><h1>93%</h1>
                <h5>retention rate among participating employees</h5>
                <hr /></div>
                <div className="s1">
                  <h1>65%</h1>
                  <h5>of learners noted a positive impact on their productivity</h5>
                  <hr />
                </div>
              </div>
             <div className="full"> <button>Read full story →</button></div>
            </div>
            </div>
            <div className="ct8">
              <img src="https://cms-images.udemycdn.com/content/c4gpjcmcsk/png/UB_Case_Studies_Booz_Allen_image.png?position=c&quality=80&x.app=portals" alt="" />
            </div>
           </div>
           <footer>
      <div class="foot">
      <div class="last">
        <h4 class="pp">Top companies choose <span class="last1">Udemy Business</span> to build in-demand career skills.</h4>
        <div className="imgs">
        <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" alt="" />
        <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" alt="" />
        </div>
      </div>
      <hr />
      <br />
        <div class="lists">
          <ul>
            <li>Udemy Business</li>
            <li>Teach on udemy</li>
            <li>get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>investor</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
          <div className="lang"><button><MdLanguage /> English</button></div>
        </div>
        <div className="copy"><p>© 2024 Udemy, Inc.</p></div>
        <br /><br />
        <img class="pics" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
        
        </div>
       
    </footer>
        </div>
    </div>
  )
}

export default Udemy;

//<FaStar />
//<FaStarHalfAlt />
