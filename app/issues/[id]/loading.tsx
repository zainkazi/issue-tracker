import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Flex, Card, Box } from "@radix-ui/themes";

const LoadingIssue = () => {
  return (
    <Box className="space-y-6 max-w-screen-xl">
      <LoadingSkeleton count={2} />
      <Card>
        <LoadingSkeleton />
      </Card>
    </Box>
  );
};

export default LoadingIssue;
