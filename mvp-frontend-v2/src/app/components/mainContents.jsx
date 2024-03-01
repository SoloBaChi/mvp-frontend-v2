import Card from "./shared/CardComponent";
import "../styles/MainContents.css";
import ArrowDown from "./svgs/ArrowDown";
import SmallImage from "./shared/SmallImage";
import EllipseLines from "./svgs/EllipseLines";

function MainContents(props) {
  const Lines = EllipseLines();
  return (
    <>
      <div className="hero-card-container">
        {/* <div className="background-image"></div> */}
        <div className="hero-card-contents">
          <div className="rounded-images">
            <SmallImage src="/img/Parent1.png" alt="Parent 1" />
            <SmallImage src="/img/PBanner.png" alt="Parent 2" />
            <SmallImage src="/img/TeenGirl.png" alt="Teen Girl 1" />
            <SmallImage src="/img/TeenBoy1.png" alt="Teen Boy 1" />
          </div>

          <Card className="hero-card">
            <div className="card-contents">
              <h1>Mussia</h1>
              <h2>
                Parenting in Your <span>Teens</span> Native Language
              </h2>
              <p>
                Charged is the first digital parenting tool in history that
                parents can use to help them parent their teenagers.
              </p>
              <p>
                Get ahead of the parenting game - Join the wait list today and
                be among the first parents to experience our innovative new app!
              </p>

              <button>Join The Waitlist</button>
            </div>

            <Lines.TopLeft
              className="ellipse-wrapper"
              top={250}
              left={-17}
              // rotate={0}
            />
            <Lines.TopRight
              className="ellipse-wrapper"
              top={0}
              right={0}
              // rotate={0}
            />
            <Lines.BottomRight
              className="ellipse-wrapper"
              bottom={0}
              right={0}
              // rotate={0}
            />
            <Lines.BottomLeft
              className="ellipse-wrapper"
              top={-25}
              left={-25}
            />
          </Card>
        </div>
      </div>
      <div className="hero-arrow">
        <span>
          <ArrowDown />
        </span>
      </div>
    </>
  );
}

export default MainContents;
