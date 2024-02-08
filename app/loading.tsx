import { Grid, Flex, Card, Heading, Table } from "@radix-ui/themes";
import LoadingSkeleton from "./components/LoadingSkeleton";

const LoadingDashboard = () => {
  const containers = [1, 2, 3];
  const issues = [1, 2, 3, 4, 5];

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="8">
      <Flex direction="column" gap="8">
        <Flex gap="4">
          {containers.map((container) => (
            <Card variant="surface" key={container}>
              <Flex direction="column" gap="2">
                <LoadingSkeleton style={{ width: "100px" }} className="h-16" />
              </Flex>
            </Card>
          ))}
        </Flex>

        <Card>
          <LoadingSkeleton count={5} className="h-8 my-4" />
        </Card>
      </Flex>

      <Card>
        <Heading>Latest Issues</Heading>
        <Table.Root>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue}>
                <Table.Cell>
                  <Flex justify="between">
                    <Flex direction="column" align="start">
                      <LoadingSkeleton count={2} />
                    </Flex>
                    <LoadingSkeleton />
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
    </Grid>
  );
};

export default LoadingDashboard;
