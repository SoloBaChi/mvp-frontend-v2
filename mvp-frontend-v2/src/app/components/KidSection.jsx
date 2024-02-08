import React from "react";
import Card from "./shared/Card";
import "../styles/KidSection.css";
import StackedSVGs from "./svgs/StackedSVGs";
import ellipseContainer from "./svgs/EllipseLines";

function KidSection() {
  return (
    <div className="kidsection flex-container">
      <div className="kid-body">
        <h1>Charged FOR KIDS</h1>
        <p>
          Ensuring Your <span>Parental Presence</span> Always
        </p>
      </div>
      <div className="flex-item">
        <Card className="kid-card">
          <p className="teen-par">
            Charged for Kids offers a groundbreaking way for parents to leave a
            lasting part of themselves for their children. Our virtual parent
            technology enables you to share cherished memories, impart valuable
            advice, and express your love in a lasting digital format. This
            unique tool ensures that, should anything happen to you, your
            children will always have a part of you to provide comfort,
            guidance, and a lasting connection.
          </p>
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

          <div className="kid-btn">
            <button>Join the wait list !</button>
          </div>
        </Card>
        <div className="at-risk-kid-container">
          <img
            className="at-risk-kid"
            alt="At risk teen"
            src={`/img/Parent for Mussia Kids 1.png`}
          />
          <div className="slanted-bg-kid">
            <div className="rotated-container-kid">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 760"
                fill="none"
              >
                <path
                  d="M-973 367.225L-429.941 -42L566.99 1280.97L23.9308 1690.2L-973 367.225Z"
                  fill="#383838"
                />
              </svg>
            </div>
            <div className="rotated-container-kid-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 360 760"
                fill="none"
              >
                <path
                  d="M-900 328.225L-356.941 -81L639.99 1241.97L96.9308 1651.2L-900 328.225Z"
                  fill="#FF8C00"
                  fill-opacity="0.3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidSection;
