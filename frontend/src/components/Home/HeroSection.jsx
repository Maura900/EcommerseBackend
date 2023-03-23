import "../../styles/components/heroSection.css";

const heroProduct = {
  title: "Canon Camera",
  imageUrl: "hero-picture.png",
  link: "#",
};

export const HeroSection = () => {
  return (
    <div className="hero primary-bg">
      <div className="container">
        <div className="content">
          <h1>
            {heroProduct.title.split(" ").map((word, index) => {
              if (index === 0) return <span>{word}</span>;
              else return <> {word}</>;
            })}
          </h1>
          <div className="buttons">
            <div className="white-btn">Shop now</div>
            <div className="outline-secondary-btn">View More</div>
          </div>
        </div>
        <div className="picture">
          <img
            src={`./images/${heroProduct.imageUrl}`}
            alt={heroProduct.title}
          />
        </div>
      </div>
    </div>
  );
};
