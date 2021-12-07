import React from "react";
import SectionTitle from "../SectionTitle";


export default function ProjectSection(){
    return(
        <div>
            <div className="container">
                <SectionTitle heading="Contact" highlight="Me"></SectionTitle>
                <section id="contact" class="section">
                <div class="contact-content">
            <div class="column left">
                <div class="icons">
                    <div class="row">
                        <i class="fas fa-user highlight"></i><span class="head highlight">Name</span>
                        <div class="sub-title">Shreya Shrestha</div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt  highlight"></i><span class="head highlight">Address</span>
                            <div class="sub-title">Swoyambhu,Kimdol</div>
                        </div>
                    
                    <div class="row">
                        
                        
                        <i class="fas fa-envelope  highlight"></i><span class="head highlight">Email</span>
                            <div class="sub-title">shreya.shrestha1999@gmail.com</div>
                        </div>
                    
                </div>
            </div>
            
          
  </div>
  <div class="column right">
              <div class="text highlight">Message me</div>
              <form action="#">
                  
                  <div class="field contact-name">
                      <input type="text" placeholder="Name" required />
                  </div>
                      <div class="field email">
                      <input type="email" placeholder="Email" required />
                  </div>
                 
                  <div class="field">
                      <input type="text" placeholder="Subject" required />
                  </div>
                  <div class="field textarea">
                      <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                  </div>
                  <button className="btn " type='submit'>Send message</button>
                 
              </form>
          </div>

    </section>
    
            </div>


        </div>
    );

}