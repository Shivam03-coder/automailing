import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ShineBorder from "@/components/ui/shine-border";
import { Sparkle, Star, User } from "lucide-react";

const HighlightCards = () => {
  return (
    <div className="grid w-[90%] grid-cols-3 place-items-center">
      {HiglightCardData.map((items) => (
        <ShineBorder
          key={items.id}
          duration={10}
          borderWidth={2}
          color={["#2A3335", "#1C325B", "#22177A"]}
          className="min-h-44 w-[300px] bg-transparent transition-all duration-300 hover:scale-110"
        >
          <Card className="border-none shadow-none">
            <CardHeader className="space-y-4 text-primary">
              <div className="flex-center size-14 rounded-full bg-paleblue">
                {items.icon}
              </div>
              <h4>{items.title}</h4>
            </CardHeader>
            <CardContent>
              <h6 className="text-primary">{items.cardDesc}</h6>
            </CardContent>
          </Card>
        </ShineBorder>
      ))}
    </div>
  );
};

export default HighlightCards;

const HiglightCardData: Array<{
  id: number;
  icon: React.ReactNode;
  title: string;
  cardDesc: string;
}> = [
  {
    id: 1,
    icon: <Sparkle size={30} />,
    title: "AI-Powered Insights",
    cardDesc:
      "Harness the power of AI to gain actionable insights from your email campaigns. Improve your strategies with real-time analytics and predictive reporting.",
  },
  {
    id: 2,
    icon: <Star size={30} />,
    title: "Automated Campaigns",
    cardDesc:
      "Set up AI-driven email workflows that run automatically, delivering personalized content to your audience based on behavior, preferences, and more.",
  },
  {
    id: 3,
    icon: <User size={30} />,
    title: "24/7 AI Support",
    cardDesc:
      "Our AI assistant is available around the clock to help you with any issues, ensuring that your email campaigns run smoothly without any interruptions.",
  },
];
