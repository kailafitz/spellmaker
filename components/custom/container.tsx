import { ContainerProps } from "@/interfaces";
import PropTypes from "prop-types";

export const containerMb = "mb-16 md:mb-32";

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      id={props.id && props.id}
      className={`${props.className && props.className} ${props.mb && "mb-16 md:mb-32"} ${props.topSectionPadding && "pt-10 md:pt-14"} container ${props.topViewHeight && "md:h-[calc(100vh_-_78.7px)]"} px-5 sm:px-12 md:px-16 lg:px-20`}
    >
      {props.children}
    </div>
  );
};

Container.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  mb: PropTypes.bool,
  topSectionPadding: PropTypes.bool,
  topViewHeight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
