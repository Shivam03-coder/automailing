"use client";
import HighlightCards from "@/components/shared/cards/highlightcard";
import { MarqueeBox } from "@/components/shared/marquee/marqueebox";
import { VideoModal } from "@/components/shared/modals/videomodals";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Megaphone, Rocket } from "lucide-react";
import React from "react";
import PlanCards from "./payablecards.tsx";
import FaqAccordion from "./faqsaccordion.tsx";
import { useRouter } from "next/navigation";

const MainLayout = () => {
  const Router = useRouter();

  return (
    <main className="h-screen space-y-4">
      <BlurFade
        className="flex-center mx-auto h-full max-w-[600px] flex-col gap-7"
        delay={0.3}
        inView
      >
        <nav
          className="grid w-max grid-cols-2 place-items-center gap-2 rounded-full bg-primary p-3 text-secondary"
          aria-label="Announcement Buttons"
        >
          <button
            className="flex items-center gap-2 rounded-full bg-secondary p-2 pr-5 text-[0.875rem] text-lg font-semibold text-primary"
            aria-label="Announcement"
          >
            <Megaphone className="h-4 w-4 text-violet-600" /> Announcement
          </button>
          <button
            className="flex items-center gap-2 rounded-full px-[0.375rem] pr-5 text-[0.875rem] text-lg font-semibold text-secondary"
            aria-label="Introducing Miraj"
          >
            Introducing Miraj
            <ArrowRight className="h-6 w-6 text-violet-600" />
          </button>
        </nav>
        <header className="space-y-4 px-4 text-center">
          <h1 className="text-primary">
            Automate your emails effortlessly with Miraj.
          </h1>
          <h4 className="text-slate-500">
            No matter your email challenge, <br /> Miraj is here to simplify and
            solve it.
          </h4>
        </header>
        <Button
          onClick={() => Router.push("/mail-dashboard")}
          className="flex items-center gap-3 bg-primary font-inter font-medium text-secondary"
        >
          <Rocket size={23} color="white" />
          Getting started for free
        </Button>
        <header className="text-slate-500">
          <h5>7 day free trial. No credit card required.</h5>
        </header>
      </BlurFade>

      {/* VIDEO MODAL */}
      <BlurFade
        className="flex-center mx-auto h-full w-[70%] flex-col gap-7"
        delay={0.3}
        inView
      >
        <VideoModal />
      </BlurFade>

      {/* PROBLEM AND SOLUTION */}
      <section className="h-full">
        <BlurFade
          className="flex-center mx-auto mt-16 w-full flex-col gap-5"
          delay={0.3}
          inView
        >
          <h4 className="text-primary">Trusted By Leading Teams</h4>
          <MarqueeBox />
        </BlurFade>
        <BlurFade
          className="flex-center mx-auto mt-16 w-full flex-col gap-5"
          delay={0.4}
          inView
        >
          <header className="space-y-4 px-4 text-center">
            <h4 className="mb-4 text-center text-lg font-medium text-primary">
              Let’s Know What’s the Problem ?
            </h4>
            <h1 className="text-center text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Automate your emails effortlessly with Miraj.
            </h1>
          </header>
        </BlurFade>
        <BlurFade
          className="flex-center mx-auto mt-16 w-full flex-col gap-5"
          delay={0.5}
          inView
        >
          <HighlightCards />
        </BlurFade>
      </section>

      {/* PAYABLE CARDS */}
      <section className="h-screen bg-slate-100 py-4">
        <BlurFade
          className="flex-center mx-auto mt-16 w-full flex-col gap-5"
          delay={0.3}
          inView
        >
          <header className="space-y-3 text-center text-primary">
            <h4>Pricing</h4>
            <h1>Choose the plan that's right for you</h1>
          </header>

          <PlanCards />
        </BlurFade>
        <section className="flex-center mx-auto w-full flex-col gap-5 py-16">
          <BlurFade
            delay={0.4}
            inView
            className="space-y-3 text-center text-primary"
          >
            <h4>FAQS</h4>
            <h1>Frequently asked questions</h1>
          </BlurFade>
          <FaqAccordion />
        </section>
      </section>
    </main>
  );
};

export default MainLayout;
