import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

const EmailCards = () => {
  return (
    <Card className="flex flex-col gap-3 p-3">
      <div className="flex justify-between">
        <h5>SHIVAM ANAND</h5>
        <h6 className="opacity-55">Last seen 1h ago</h6>
      </div>
    </Card>
  );
};

export default EmailCards;
