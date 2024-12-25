import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

const GoBackLink = () => {
  return (
    <div className={"mb-6"}>
      <Link to={"/"}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={"text-blue-600 w-5 h-5"}
        />
      </Link>
    </div>
  );
};

export default GoBackLink;