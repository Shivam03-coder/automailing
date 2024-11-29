import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    img: "https://cdn.magicui.design/companies/Instagram.svg",
  },
  {
    img: "https://cdn.magicui.design/companies/Netflix.svg",
  },
  {
    img: "https://cdn.magicui.design/companies/Uber.svg",
  },
  {
    img: "https://cdn.magicui.design/companies/Microsoft.svg",
  },
  {
    img: "https://cdn.magicui.design/companies/Google.svg",
  },
  {
    img: "https://cdn.magicui.design/companies/Spotify.svg",
  },
];

const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure
      className={cn(
        "relative flex w-36 cursor-pointer overflow-hidden rounded-xl p-4",
        "hover:bg-paleblue",
      )}
    >
      <img
        src={img}
        alt="Instagram"
        width={112}
        height={40}
        className="h-10 w-28 opacity-80 grayscale dark:brightness-0 dark:invert"
      />
    </figure>
  );
};

export function MarqueeBox() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <Marquee reverse pauseOnHover className="[--duration:7s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} img={review.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-secondary"></div>
    </div>
  );
}
