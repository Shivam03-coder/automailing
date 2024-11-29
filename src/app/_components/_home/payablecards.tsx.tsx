import BlurFade from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { Check, ChevronRight, Zap } from "lucide-react";
import React from "react";

const PlanCards = () => {
  return (
    <section className="mx-auto my-5 grid grid-cols-3 gap-6">
      {/* $1/month */}
      <BlurFade delay={0.3} inView>
        <Card className="max-h-auto inline-flex w-full max-w-[24rem] flex-col bg-white">
          <section className="w-full p-8">
            <div className="inline-flex min-h-[13.125rem] w-full flex-col items-center justify-start gap-4">
              <div className="flex min-h-[11.125rem] flex-col items-center justify-start gap-1 self-stretch">
                <div className="flex min-h-[5.375rem] flex-col items-center justify-start gap-4 self-stretch">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-[1.75rem] border-4 border-secondary bg-secondary p-2.5">
                    <div className="rounded-full bg-secondary p-3">
                      <Zap size={32} />
                    </div>
                  </div>
                  <div className="self-stretch text-center font-inter text-xl font-semibold leading-[30px] text-primary">
                    Basic plan
                  </div>
                </div>
                <div className="self-stretch text-center font-inter text-5xl font-semibold leading-[60px] text-primary">
                  $10/mth
                </div>
                <div className="self-stretch text-center font-inter text-base font-normal leading-normal text-primary">
                  Billed annually.
                </div>
              </div>
            </div>
            <div className="inline-flex min-h-[232px] flex-col items-start justify-start gap-4">
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Access to all basic features
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Basic reporting and analytics
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Up to 10 individual users
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  20GB individual data each user
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Basic chat and email support
                </div>
              </span>
            </div>
          </section>
          <div className="inline-flex h-[120px] flex-col items-start justify-center gap-6 p-8">
            <button className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded bg-[#001f3f] px-5 py-5">
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Get Started
                </div>
                <div className="relative h-5 w-5">
                  <ChevronRight className="absolute left-0 top-0 h-5 w-5 text-[#d9d9d9]" />
                </div>
              </div>
            </button>
          </div>
        </Card>
      </BlurFade>

      {/* $2/month */}
      <BlurFade delay={0.5} inView>
        <Card className="max-h-auto inline-flex w-full max-w-[24rem] flex-col bg-white">
          <section className="w-full p-8">
            <div className="inline-flex min-h-[13.125rem] w-full flex-col items-center justify-start gap-4">
              <div className="flex min-h-[11.125rem] flex-col items-center justify-start gap-1 self-stretch">
                <div className="flex min-h-[5.375rem] flex-col items-center justify-start gap-4 self-stretch">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-[1.75rem] border-4 border-secondary bg-secondary p-2.5">
                    <div className="rounded-full bg-secondary p-3">
                      <Zap size={32} />
                    </div>
                  </div>
                  <div className="self-stretch text-center font-inter text-xl font-semibold leading-[30px] text-primary">
                    Basic plan
                  </div>
                </div>
                <div className="self-stretch text-center font-inter text-5xl font-semibold leading-[60px] text-primary">
                  $20/mth
                </div>
                <div className="self-stretch text-center font-inter text-base font-normal leading-normal text-primary">
                  Billed annually.
                </div>
              </div>
            </div>
            <div className="inline-flex min-h-[232px] flex-col items-start justify-start gap-4">
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  200+ integrations
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Advanced reporting and analytics
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Up to 20 individual users
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  40GB individual data each user
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Priority chat and email support
                </div>
              </span>
            </div>
          </section>
          <div className="inline-flex h-[120px] flex-col items-start justify-center gap-6 p-8">
            <button className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded bg-[#001f3f] px-5 py-5">
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Get Started
                </div>
                <div className="relative h-5 w-5">
                  <ChevronRight className="absolute left-0 top-0 h-5 w-5 text-[#d9d9d9]" />
                </div>
              </div>
            </button>
          </div>
        </Card>
      </BlurFade>

      {/* $3/month */}
      <BlurFade delay={0.7} inView>
        <Card className="max-h-auto inline-flex w-full max-w-[24rem] flex-col bg-white">
          <section className="w-full p-8">
            <div className="inline-flex min-h-[13.125rem] w-full flex-col items-center justify-start gap-4">
              <div className="flex min-h-[11.125rem] flex-col items-center justify-start gap-1 self-stretch">
                <div className="flex min-h-[5.375rem] flex-col items-center justify-start gap-4 self-stretch">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-[1.75rem] border-4 border-secondary bg-secondary p-2.5">
                    <div className="rounded-full bg-secondary p-3">
                      <Zap size={32} />
                    </div>
                  </div>
                  <div className="self-stretch text-center font-inter text-xl font-semibold leading-[30px] text-primary">
                    Basic plan
                  </div>
                </div>
                <div className="self-stretch text-center font-inter text-5xl font-semibold leading-[60px] text-primary">
                  $40/mth
                </div>
                <div className="self-stretch text-center font-inter text-base font-normal leading-normal text-primary">
                  Billed annually.
                </div>
              </div>
            </div>
            <div className="inline-flex min-h-[232px] flex-col items-start justify-start gap-4">
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Advanced custom fields
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Audit log and data history
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Unlimited individual users
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Unlimited individual data
                </div>
              </span>
              <span className="inline-flex items-center gap-4">
                <div className="flex-center relative h-6 w-6 rounded-xl bg-secondary">
                  <Check />
                </div>
                <div className="font-inter text-base font-normal leading-normal text-primary">
                  Personalised+priotity service
                </div>
              </span>
            </div>
          </section>
          <div className="inline-flex h-[120px] flex-col items-start justify-center gap-6 p-8">
            <button className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded bg-[#001f3f] px-5 py-5">
              <div className="flex items-center justify-center gap-2">
                <div className="text-center font-inter text-sm font-medium leading-tight text-white">
                  Get Started
                </div>
                <div className="relative h-5 w-5">
                  <ChevronRight className="absolute left-0 top-0 h-5 w-5 text-[#d9d9d9]" />
                </div>
              </div>
            </button>
          </div>
        </Card>
      </BlurFade>
    </section>
  );
};

export default PlanCards;
