import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/clerk/webhook(.*)",
]);

// Middleware to handle route protection
export default clerkMiddleware(async (auth, request) => {
  // Allow public routes without requiring authentication
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

// Matcher configuration
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
