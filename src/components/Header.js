import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("onclick");
  };

  return (
    <header className="header">
      <h1>{title}</h1>np
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
