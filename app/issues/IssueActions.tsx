import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssueActions = () => {
  return (
    <div>
      <div className="mb-3">
        <Button>
          <Link href="/issues/new">Create Issue</Link>
        </Button>
      </div>
    </div>
  );
};

export default IssueActions;
