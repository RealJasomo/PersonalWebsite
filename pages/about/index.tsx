import React from 'react';
import FrostedGlass from '@components/FrostedGlass';
import Image from 'next/image';

import QueerSpace from '@res/QueerSpace.png';
import LegoTracker from '@res/LegoTracker.png';
import Joust from '@res/joust.gif';
import ReactIcon from '@res/React.svg';
import Firebase from '@res/Firebase.svg';
import Sql from '@res/SqlIcon.png';
import TypescriptIcon from '@res/typescript.svg';

import styles from './index.module.scss';

export default function About(){
    return (
        <FrostedGlass>
            <section className={styles.section} id="about">
                <h1>About</h1>
                <p className={styles.about}>
                    I am Jason Cramer, a 20yr old developer studying at Rose-Hulman Institute of Technology in Computer Science and Software Engineering.
                    I am a rising Junior and looking for internships focusing in web application development, cybersecurity, artifical intelligence, or machine learning.
                    My favorite programming language would have to be <b>Typescript</b> using <b>React</b>.
                    If you would like to get to know me further, feel free to reach out by email via
                        <a href="mailto:cramerj1@rose-hulman.edu">cramerj1@rose-hulman.edu</a>
                </p>
            </section>

            <section className={styles.section} id="experience">
                <h1>Experience</h1>
                <ul>
                    <li>
                        <div>
                            <h2>Rose-Hulman Ventures - <span>October 2020 - Current</span></h2>
                            <ul>
                                <li>Worked with a small team of developers to make an enterprise software suite.</li>
                                <li>Using <b>React Typescript</b> for our frontend and <b>.NET Core</b> and <b>Elasticsearch</b> for our backend.</li>
                                <li>My role is specializing in creating frontend components and creating our search backend.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
            <section className={styles.section} id="projects">
                <h1>Projects</h1>
                <div className={styles.projectCards}>
                    <FrostedGlass className={styles.project}>
                        <h1>
                            QueerSpaces
                            <div className={styles.icons}>
                                <Image src={ReactIcon}/>
                                <Image src={TypescriptIcon}/>
                                <Image src={Firebase} />
                            </div>
                        </h1>
                        <Image src={QueerSpace}/>
                        <p>A social media platform as a safe place for LGBTQIA+ students</p>
                    </FrostedGlass>
                    <FrostedGlass className={styles.project}>
                        <h1>
                            Lego Inventory Tracker
                            <div className={styles.icons}>
                                <Image src={ReactIcon}/>
                                <Image src={Sql} />
                            </div>
                        </h1>
                        <Image src={LegoTracker}/>
                        <p>A web application to track your lego collection</p>
                    </FrostedGlass>
                    <FrostedGlass className={styles.project}>
                        <h1>Java Joust</h1>
                        <Image src={Joust} />
                        <p>An arcade game originally developed in 1982 by Williams Electronics. This is a clone created in Java</p>
                    </FrostedGlass>
                </div>
            </section>
        </FrostedGlass>
    );
}