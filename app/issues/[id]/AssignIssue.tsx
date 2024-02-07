"use client";

import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AssignIssue = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  const assignIssue = (userId: string) => {
    console.log(userId);
    if (userId != "0") {
      axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: userId,
      });
    } else {
      axios.patch("/api/issues/" + issue.id, {
        assignedToUserId: null,
      });
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  if (error) return null;

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || "0"}
      onValueChange={(userId) => assignIssue(userId)}
    >
      <Select.Trigger placeholder="Assign issue..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="0">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssignIssue;
