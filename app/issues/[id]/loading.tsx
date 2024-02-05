import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Flex, Card, Box } from "@radix-ui/themes";

const LoadingIssue = () => {
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

export default LoadingIssue;
