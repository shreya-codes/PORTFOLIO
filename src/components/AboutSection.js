import React from "react";
import SectionTitle from "../SectionTitle";
import Shreya from '../image/shreya.jpg'

export default function ProjectSection(){
    return(
        <div>
            <div className="container">
                <SectionTitle heading="About" highlight="Me"></SectionTitle>
                <section id="about" class="section">
                <div className="imagecontainer">
               <img src={Shreya} height="300px" alt="" class="img-responsive floating-image right" />
             </div>
        <div class="AboutContent ">
          Hello! My name is Shreya Shrestha and I enjoy creating.
        I am enthusiastic learner who has a deep passion for coding. I am really fascinated by the fact
that only by a few lines of code we can convert someone’s imagination into reality and make an
actual impact which can help users in their daily life.I'm quietly confident, naturally curious, and perpetually learning on improving my skills.
</div>
<br/>
<div className="tech">
  Here are a few technologiess I've been working with recently
  <br/><ul className="SkillsList">
    <li className="skill"> HTML </li>
    <li  className="skill"> CSS </li>
    <li  className="skill">Javascript(ES6+)</li>
    <li  className="skill">React</li>
    <li  className="skill">Node.js</li>
    <li  className="skill">MongoDb</li>
  </ul>

</div>
     
    </section>
            </div>


        </div>
    );

}