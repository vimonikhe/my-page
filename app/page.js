"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.general}>
      <div className={styles.Firstbackground}>
        <div className={styles.madebyvictor}>
          Made<span className={styles.by}>by</span>Victor
        </div>
        <div className={styles.menu}>
          <Link className={styles.menulink} href="#projects">
            <div className={styles.projects}>Projects</div>
          </Link>
          <Link className={styles.menulink} href="#contact">
            <div className={styles.contact}>Contact</div>
          </Link>
          <div>
            <a
              href="https://drive.google.com/file/d/1SrOtJHdfgeGPlsM9ccs2Nv6baBkvQpGd/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <button className={styles.myresume}>My Resume 👤 </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.Secondbackground}>
        <div className={styles.herosectionandimage}>
          <div className={styles.herosection}>
            <img
              className={styles.mobileimage}
              src="image.jpg"
              width="50"
              height="50"
              alt="image"
            />
            <div className={styles.hello}>
              Hello, <span className={styles.im}>{"I'm"}</span>
            </div>
            <div className={styles.victorimonikhe}>Victor Imonikhe</div>
            <div className={styles.introduction}>
              {
                " I build responsive, accessible, and user-friendly web applications using React, Next.js, JavaScript,Typescript and modern CSS. I'm currently seeking opportunities as a Frontend Developer where I can contribute while continuing to grow."
              }{" "}
              <span className={styles.connect}>Let's connect!</span>
            </div>
            <div className={styles.socials}>
              <a
                href="tel:08112825969"
                target="_blank"
                className={styles.contactmebox}
              >
                {" "}
                <button className={styles.contactme}>Contact me ➤</button>
              </a>
              <a
                href="mailto:vimonikhe94@gmail.com"
                className={styles.socialbox}
              >
                {" "}
                <button className={styles.email}>✉︎</button>
              </a>
              <a
                href="https://wa.me/08112825969"
                target="_blank"
                className={styles.socialbox}
              >
                <button className={styles.whatsaap}>✆</button>
              </a>
              <a
                href="https://ng.linkedin.com/in/victor-imonikhe-89a6b8397"
                target="_blank"
                className={styles.socialbox}
              >
                <button className={styles.linkedin}>
                  {" "}
                  <img
                    className={styles.foto}
                    src="/linkedin.png"
                    height="15"
                    width="15"
                    alt="linkedin"
                  />
                </button>
              </a>
              <a
                href="https://github.com/vimonikhe"
                target="_blank"
                className={styles.socialbox}
              >
                <button className={styles.github}>
                  <img
                    className={styles.fotos}
                    src="/github.jpg"
                    height="19"
                    width="18"
                    alt="github"
                  />
                </button>
              </a>
            </div>
          </div>
          <div className={styles.imageprofile}>
            <img
              className={styles.image}
              src="image.jpg"
              width="50"
              height="50"
              alt="image"
            />
          </div>
        </div>
        <div id="projects" className={styles.websitesheading}>
          My <span className={styles.built}>Projects</span>{" "}
        </div>
        <div className={styles.myworksintro}>
          {
            " A selection of my projects, vairous web applications I've successfully built and deployed."
          }
        </div>
        <div className={styles.myworkswrapper}>
          <Link
            className={styles.card1link}
            href="https://marshallswears.co.uk/"
            target="_blank"
          >
            <div className={styles.card1}>
              <div className={styles.marshallswearsimagecontainer}>
                <img
                  src="marshallswears.jpg"
                  width="100%"
                  height="200"
                  alt="marshall"
                />
              </div>
              <div className={styles.marshallswears}> MARSHALLSWEARS</div>
              <div className={styles.marshallswearsintro}>
                {
                  "Full featured e-commerce platform with cart, checkout and real time inventory management"
                }
              </div>
              <div className={styles.marshallswearstools}>
                <button className={styles.toolss}>React</button>
                <button className={styles.toolss}>Next js</button>
                <button className={styles.toolss}>Node js</button>
                <button className={styles.toolss}>Stripe</button>
                <button className={styles.toolss}>MongoDB</button>
              </div>
            </div>
          </Link>
          <Link
            className={styles.card2link}
            href="https://dietpage.ng/"
            target="_blank"
          >
            <div className={styles.card2}>
              <div className={styles.dietpageimagecontainer}>
                <img src="dietpage.jpg" width="100%" height="200" alt="diet" />
              </div>
              <div className={styles.dietpage}> DIETPAGE FOODS</div>
              <div className={styles.dietpageintro}>
                {
                  "Full featured e-commerce platform with cart, checkout and real time inventory management"
                }
              </div>
              <div className={styles.dietpagetools}>
                <button className={styles.toolss}>Next js</button>
                <button className={styles.toolss}>Node.js</button>
                <button className={styles.toolss}>Socket.io</button>
                <button className={styles.toolss}>MongoDB</button>
              </div>
            </div>
          </Link>
          <Link
            className={styles.card3link}
            href="https://cyooner.com/"
            target="_blank"
          >
            <div className={styles.card3}>
              <div className={styles.cyoonerimagecontainer}>
                <img
                  src="cyooner.jpg"
                  width="100%"
                  height="200"
                  alt="cyooner"
                />
              </div>
              <div className={styles.cyooner}> CYOONER FURNITURES</div>
              <div className={styles.cyoonerintro}>
                {
                  "Full featured online furniture store with cart, checkout and real time inventory management"
                }
              </div>
              <div className={styles.cyoonertools}>
                <button className={styles.toolss}>Next js</button>
                <button className={styles.toolss}>Node.js</button>
                <button className={styles.toolss}>React</button>
                <button className={styles.toolss}>MongoDB</button>
              </div>
            </div>
          </Link>
          <Link
            className={styles.card4link}
            href="https://votegreenproducts.com/"
            target="_blank"
          >
            <div className={styles.card4}>
              <div className={styles.cyoonerimagecontainer}>
                <img
                  src="votegreen.jpg"
                  width="100%"
                  height="200"
                  alt="cyooner"
                />
              </div>
              <div className={styles.votegreen}> VOTEGREENPRODUCTS</div>
              <div className={styles.votegreenintro}>
                A voting platform aimed at connecting environmentally conscious
                consumers with business offering green products and services
              </div>
              <div className={styles.votegreentools}>
                <button className={styles.toolss}>React</button>
                <button className={styles.toolss}>Next js</button>
                <button className={styles.toolss}>Javascript</button>
                <button className={styles.toolss}>zustand</button>
                <button className={styles.toolss}>MongoDB</button>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.connect2}>
          {"Let's"} <span className={styles.connectspan}>Connect</span>
        </div>
        <div id="contact" className={styles.connectcards}>
          <Link
            className={styles.githubwrapper}
            href="https://github.com/vimonikhe"
            target="_blank"
          >
            <div className={styles.githubcontact}>
              <button className={styles.githubcontactbutton}>
                <img
                  className={styles.fotoss}
                  src="/github.jpg"
                  height="25"
                  width="25"
                  alt="github"
                />
              </button>
              <div className={styles.githubdetails}>
                <div className={styles.githubdetails1}>GITHUB</div>
                <div className={styles.githubdetails2}>@VImonikhe</div>
              </div>
            </div>
          </Link>
          <Link
            className={styles.phonewrapper}
            href="tel:08112825969 "
            target="_blank"
          >
            <div className={styles.phonecontact}>
              <button className={styles.phonecontactbutton}>☏</button>
              <div className={styles.phonedetails}>
                <div className={styles.phonedetails1}>PHONE</div>
                <div className={styles.phonedetails2}>08112825969</div>
              </div>
            </div>
          </Link>
          <Link
            className={styles.emailwrapper}
            href="mailto:vimonikhe94@gmail.com"
            target="_blank"
          >
            <div className={styles.emailcontact}>
              <button className={styles.emailcontactbutton}>✉︎</button>
              <div className={styles.emaildetails}>
                <div className={styles.emaildetails1}>EMAIL</div>
                <div className={styles.emaildetails2}>
                  VImonikhe94@gmail.com
                </div>
              </div>
            </div>
          </Link>
          <Link
            className={styles.linkedinwrapper}
            href="https://ng.linkedin.com/in/victor-imonikhe-89a6b8397"
            target="_blank"
          >
            <div className={styles.linkedincontact}>
              <button className={styles.linkedincontactbutton}>
                <img
                  src="/linkedin.png"
                  height="25"
                  width="25"
                  alt="linkedin"
                />
              </button>
              <div className={styles.linkedindetails}>
                <div className={styles.linkedindetails1}>LINKEDIN</div>
                <div className={styles.linkedindetails2}>
                  linkedin.com/in/victor-imonikhe-89a6b8397
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <footer className={styles.footer}>
        © 2026 MadebyVictor.{"    "}Built with Next.js
      </footer>
    </div>
  );
}
