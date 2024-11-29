"use client";

import StoreProvider from "@/store/store";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-primary-600 flex min-h-screen w-full">
      <main className="dark:bg-dark-primary flex w-full flex-col">
        {children}
      </main>
    </div>
  );
};

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <AppLayout>{children}</AppLayout>
    </StoreProvider>
  );
};

export default AppWrapper;