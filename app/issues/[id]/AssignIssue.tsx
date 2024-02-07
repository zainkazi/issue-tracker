"use client";

import LoadingSkeleton from "@/app/components/LoadingSkeleton";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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

  const assignIssue = async (userId: string) => {
    try {
      if (userId != "0") {
        await axios.patch("/api/issues/" + issue.id, {
          assignedToUserId: userId,
        });
      } else {
        await axios.patch("/api/issues/" + issue.id, {
          assignedToUserId: null,
        });
      }
    } catch (error) {
      toast.error("Changes could not be saved");
    }
  };

  if (isLoading) return <LoadingSkeleton />;

  if (error) return null;

  return (
    <>
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
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "black",
            color: "#ffffcc",
          },
        }}
      />
    </>
  );
};

export default AssignIssue;
