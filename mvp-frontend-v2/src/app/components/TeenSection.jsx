"use client";
import React, { useState } from "react";
import "../styles/TeenSection.css";
import CardComponent from "./shared/CardComponent";
import StackedSVGs from "./svgs/StackedSVGs";
import ellipseContainer from "./svgs/EllipseLines";
import { InfinitySpin } from "react-loader-spinner";

function TeenSection() {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
  const [statusMsg, setStatusMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailMessage = (msgObj) => {
    return msgObj;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = emailValue;
    setLoading(true);
    try {
      const res = await fetch(`https://mussia.onrender.com/api/v1/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resObj = await res.json();
      console.log(resObj);
      setStatusMsg(handleEmailMessage(resObj));
      // console.log(resObj);
      setEmailValue((prev) => {
        return {
          ...prev,
          resObj,
        };
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWaitlistClick = () => {
    setShowEmailInput(!showEmailInput);
  };
  return (
    <div className="teen-wrapper">
      <div className="teenSection flex-container">
        <div className="teen-body">
          <h1>MuSSIA FOR TEENS</h1>
          <p>
            A parent’s last line of <span> defense</span>
          </p>
        </div>
        <div className="flex-item">
          <CardComponent className="teen-card">
            <p className="teen-par">
              Charged for Teens revolutionizes how parents guide their teenagers
              through life&#39;s challenges.
              <br />
              Our customizable virtual parents act like a personal video course,
              with you as the instructor imparting crucial wisdom to your teen
              when they need it the most, when they are alone in the world.
              <br />
              Our mobile on-demand app ensures that your voice and values
              counsel your teens when they find themselves alone and scared
              facing one of life&#39;s many challenges and they feel like they
              have no one to turn to for guidance.
            </p>

            <div className="teen-btn">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailValue.value}
                  onChange={(e) =>
                    setEmailValue((prev) => {
                      return {
                        ...prev,
                        [e.target.name]: e.target.value,
                      };
                    })
                  }
                  name="email"
                  required
                />
                <button className="large-screen-button">
                  {loading ? (
                    <span className="btn-spin">
                      <InfinitySpin
                        visible={true}
                        color="#fff"
                        ariaLabel="infinity-spin-loading"
                        width="70"
                      />
                    </span>
                  ) : (
                    <span>Join the wait list render</span>
                  )}
                </button>
              </form>
              <div>
                {statusMsg.status == "success" ? (
                  <span style={{ color: "green" }}>{statusMsg.message}</span>
                ) : (
                  <span style={{ color: "red" }}>{statusMsg.message}</span>
                )}
              </div>
            </div>
            <ellipseContainer.TopLeft
              className="ellipse-wrapper"
              top={-135}
              left={-15}
              // rotate={0}
            />
            <ellipseContainer.TopRight
              className="ellipse-wrapper"
              top={-20}
              right={-10}
              // rotate={0}
            />
            <ellipseContainer.BottomRight
              className="ellipse-wrapper"
              bottom={0}
              right={0}
              // rotate={0}
            />
            <ellipseContainer.BottomLeft
              className="ellipse-wrapper"
              bottom={-40}
              left={-75}
              rotate={-120}
            />

            {/* <StackedSVGs className="svg1" top="10%" left="-20%" rotate="300deg" /> */}

            {/* <StackedSVGs className="svg4" top="-2%" left="83%" rotate="350deg" /> */}

            {/* <StackedSVGs
            className="svg2"
            top="80%"
            left="100%"
            rotate="120deg"
            width="6reem"
            height="6rem"
          /> */}

            {/* <StackedSVGs className="svg3" top="80%" left="5%" rotate="60deg" /> */}
          </CardComponent>
        </div>
      </div>
      <div className="at-risk-teen-container">
        <img
          className="at-risk-teen"
          alt="At risk teen"
          src={`/img/at-risk-teen-1.png`}
        />
        <div className="slanted-bg">
          <div className="rotated-container"></div>
        </div>
      </div>
    </div>
  );
}

export default TeenSection;

// {
// <button onClick={handleWaitlistClick} >Join The Waitlist</button>
// {showEmailInput && (
// <div>
//     <input type="email" placeholder="Enter your email" />
//     <button>Submit</button>
// </div>
// )}
// }
