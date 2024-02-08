import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ ...props }) => {
  return <Skeleton baseColor="#202020" highlightColor="#444" {...props} />;
};

export default LoadingSkeleton;
