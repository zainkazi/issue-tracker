import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Link from "@/app/components/Link";
import prisma from "@/prisma/db";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssuePage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Box className="space-y-6">
        <Heading>{issue.title}</Heading>
        <Flex gap="3">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card>
          <p>{issue.description}</p>
        </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit Issue</Link>
        </Button>
      </Box>
    </Grid>
  );
};

export default IssuePage;
