import "../styles/Blog.css";
import Card from "./shared/CardComponent";
import ShareIcon from "./ShareIcon";

export default function BlogPost(props) {
  return (
    <>
      <h2 className="blog-title">Welcome to our Blog</h2>
      {/* Blog Data here */}
      <section className="blog-card-container">
        {props.blogs.map((item) => (
          <div key={item.id}>
            <Card className="blog-card">
              <div className="blog-card-header">
                <img src={item.imgUrl} alt="1" />
              </div>
              <div className="blog-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="blog-card-footer">
                <div className="flex-item-1">
                  <h5>{item.day}</h5> | <span>{item.minsRead}</span>
                </div>
                <div className="flex-item-2">
                  <ShareIcon />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </section>
    </>
  );
}
