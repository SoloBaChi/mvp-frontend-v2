import Card from "./shared/Card";
import "../styles/MainContents.css";
import ArrowDown from "./svgs/ArrowDown";
import SmallImage from "./shared/SmallImage";

function MainContents(props) {
  return (
    <>
      <div className="hero-card-container">
        <div className="background-image"></div>
        <div className="rounded-images">
          <SmallImage src="/img/TeenBoy1.png" alt="Teen Boy 1" />
          <SmallImage src="/img/Parent1.png" alt="Parent 1" />
          <SmallImage src="/img/TeenGirl.png" alt="Teen Girl 1" />
          <SmallImage src="/img/PBanner.png" alt="Parent 2" />
        </div>

        <Card className="hero-card">
          <h1>Charged</h1>
          <h2>
            Parenting in Your <span>Teen's</span> Native Language
          </h2>
          <p>
            Charged is the first digital parenting tool in history that parents
            can use to help them parent their teenagers.
            <br />
            <br />
            Get ahead of the parenting game - Join the wait list today and be
            among the first parents to experience our innovative new app!
          </p>

          <button>Join The Waitlist</button>
        </Card>

        <div className="hero-arrow">
          <ArrowDown />
        </div>
      </div>
    </>
  );
}

export default MainContents;
