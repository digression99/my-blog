import * as React from "react";
import { css } from "@emotion/react";
import PageLayout from "../components/PageLayout";
import CenterPage from "../components/CenterPage";

const About = () => {
  return (
    <PageLayout>
      <CenterPage>
        <h3>My name is Daniel Kim.</h3>

        <p>I live in South Korea.</p>

        <h4>Work Experience</h4>
        <div>
          <strong>Ground X, 2021. 3. ~ 2022. 3.</strong>
        </div>
        <small>Software Engineer, Klip Development Team</small>
        <ul>
          <li>
            Klip is a blockchain wallet runs on Klaytn. It securely holds assets
            such as klaytn compatible tokens, NFTs on auto generated address. I
            developed Klip main app, and Klip Global Mobile, the global version
            of Klip. I used React.js, TypeScript, emotion, redux-saga, jest,
            cypress, react-testing-library.
          </li>
        </ul>

        <small>Software Engineer, KAS Development Team</small>
        <ul>
          <li>
            KAS is the Klaytn API service. KAS focuses on servicing API services
            for reliable and easy use on Klaytn blockchain transactions, data
            fetching. I built user console and admin console frontend apps. I
            used React.js, TypeScript for main development. I used emotion and
            sass for styling. I used redux-saga and react-query for API data
            fetching.
          </li>
        </ul>

        <div>
          <strong>Viva Republica, 2020. 8. ~ 2020. 11.</strong>
        </div>
        <small>Frontend Developer, Scraping Silo</small>

        <ul>
          <li>
            KAS is the Klaytn API service. KAS focuses on servicing API services
            for reliable and easy use on Klaytn blockchain transactions, data
            fetching. I built user console and admin console frontend apps. I
            used React.js, TypeScript for main development. I used emotion and
            sass for styling. I used redux-saga and react-query for API data
            fetching.
          </li>
        </ul>

        <div>
          <strong>Line Plus, 2019. 1. ~ 2020. 7.</strong>
        </div>
        <small>Software Engineer, UIT</small>

        <ul>
          <li>
            KAS is the Klaytn API service. KAS focuses on servicing API services
            for reliable and easy use on Klaytn blockchain transactions, data
            fetching. I built user console and admin console frontend apps. I
            used React.js, TypeScript for main development. I used emotion and
            sass for styling. I used redux-saga and react-query for API data
            fetching.
          </li>
        </ul>

        <div>
          <strong>Adriel AI, 2018.10. ~ 2018. 11.</strong>
        </div>
        <small>Software Engineer, UIT</small>

        <ul>
          <li>
            KAS is the Klaytn API service. KAS focuses on servicing API services
            for reliable and easy use on Klaytn blockchain transactions, data
            fetching. I built user console and admin console frontend apps. I
            used React.js, TypeScript for main development. I used emotion and
            sass for styling. I used redux-saga and react-query for API data
            fetching.
          </li>
        </ul>

        <h4>Education</h4>
        <div>
          <strong>Konkuk University, Seoul</strong>
          <small
            css={css`
              margin-left: 8px;
            `}
          >
            2013. 3. ~ 2018. 8.
          </small>
        </div>

        <h4>Interests</h4>
        <p>
          I am a crypto enthusiast. I love building DApps using hardhat,
          ethersjs, and React.js.
        </p>
        <p>
          I am interested in functional programming. I find quite a fun learning
          Scala, Haskell, Elm, and PureScript.
        </p>
        <p>
          I always eager to build servers using node.js, nest.js, mongodb,
          mysql, docker, blablabla.
        </p>

        <h4>Personal Life</h4>
        <div>I do crossfit, olympic weightlifting after work.</div>
        <div>I love to make my own meals.</div>
        <div>I love to sing and play the piano, not both.</div>
      </CenterPage>
    </PageLayout>
  );
};

export default About;
