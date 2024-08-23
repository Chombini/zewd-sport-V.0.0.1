import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const isProtectedRoute = createRouteMatcher(['/dashboard', '/admin']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    const user = auth().getUser();

    // Check if the user is loaded and has the 'isAdmin' metadata
    if (user.isLoaded && user.metadata.isAdmin) {
      auth().protect(); // Allow access to the protected route
    } else {
        redirect("/")
      // Handle authentication failure or missing 'isAdmin' metadata
    //   throw new Error('Unauthorized');
    }
  }
});
export const config = {
  matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', '/(api|trpc)(.*)'],
};