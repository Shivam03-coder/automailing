import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function VideoModal() {
  return (
    <div className="relative rounded-xl bg-white shadow-none">
      <HeroVideoDialog
        className="block p-2 shadow-none dark:hidden"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <div className="opacityBg absolute bottom-0 h-[200px] w-full" />
    </div>
  );
}
