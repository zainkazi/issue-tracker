import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Box, Flex, Card } from "@radix-ui/themes";

const LoadingNewIssue = () => {
  return (
    <Box className="space-y-6">
      <LoadingSkeleton />
      <Flex gap="3">
        <LoadingSkeleton />
        <LoadingSkeleton />
      </Flex>
      <Card>
        <LoadingSkeleton />
      </Card>
    </Box>
  );
};

export default LoadingNewIssue;
