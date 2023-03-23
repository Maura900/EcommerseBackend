import "../../styles/components/partners.css";

const partnerImgs = [
  { link: "#", imageUrl: "partner-1.png", title: "Spacing Tech" },
  { link: "#", imageUrl: "partner-2.png", title: "Spacing Tech" },
  { link: "#", imageUrl: "partner-3.png", title: "Spacing Tech" },
  { link: "#", imageUrl: "partner-4.png", title: "Spacing Tech" },
  { link: "#", imageUrl: "partner-5.png", title: "Spacing Tech" },
];

export const Partners = () => {
  return (
    <div className="partners container">
      {partnerImgs.map((partner, index) => {
        return (
          <a
            key={`partner-${index}`}
            href={partner.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={`./images/${partner.imageUrl}`} alt={partner.title} />
          </a>
        );
      })}
    </div>
  );
};
