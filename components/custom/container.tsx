import { ContainerProps } from "@/interfaces";

export const containerMb = "mb-16 md:mb-32";

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      id={props.id && props.id}
      className={`${props.className && props.className} ${props.mb && "mb-16 md:mb-32"} ${props.topSectionPadding && "pt-10 md:pt-32"} mx-auto px-5 sm:px-12 md:px-16`}
    >
      {props.children}
    </div>
  );
};

export default Container;
