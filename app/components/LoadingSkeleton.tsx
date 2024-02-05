import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = ({ props }: any) => {
  return <Skeleton baseColor="#202020" highlightColor="#444" {...props} />;
};

export default LoadingSkeleton;
