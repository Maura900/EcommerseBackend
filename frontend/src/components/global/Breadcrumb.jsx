import { Link } from "react-router-dom";
import "../../styles/components/breadcrumb.css";

export const Breadcrumb = ({ breadcrumbItems }) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        {breadcrumbItems.map((item, index) => {
          return (
            <div
              className={`breadcrumb-item ${
                index === breadcrumbItems.length - 1 ? "active" : ""
              }`}
            >
              <Link to={item.link}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
