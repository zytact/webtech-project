import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  /*
    Add the routes you want to protect:
    Example:
    matcher: ["/dashboard(.*)"]
  */
  matcher: ["/"],
};
