import prisma from "@/prisma/db";
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
    <div>
      <p>{issue.title}</p>
    </div>
  );
};

export default IssuePage;
