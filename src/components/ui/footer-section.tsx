"use client";

import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Footerdemo() {
  // Force light mode: ensure the 'dark' class is never present
  React.useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 font-bold text-3xl tracking-tight">
              Gauhati University
            </h2>
            <p className="mb-6 text-muted-foreground">
              Excellence in education, research, and innovation. Subscribe to
              receive campus news, admission notices, and examination updates.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email for university updates"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute top-1 right-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="-right-4 absolute top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="/admissions"
                className="block transition-colors hover:text-primary"
              >
                Admissions
              </a>
              <a
                href="/departments"
                className="block transition-colors hover:text-primary"
              >
                Departments
              </a>
              <a
                href="/examination"
                className="block transition-colors hover:text-primary"
              >
                Examination
              </a>
              <a
                href="/research"
                className="block transition-colors hover:text-primary"
              >
                Research
              </a>
              <a
                href="/library"
                className="block transition-colors hover:text-primary"
              >
                Library
              </a>
              <a
                href="/alumni"
                className="block transition-colors hover:text-primary"
              >
                Alumni
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-lg">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Jalukbari, Guwahati</p>
              <p>Assam 781014, India</p>
              <p>Phone: +91 361 2570 000</p>
              <p>Email: info@gauhatiuniv.example</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 font-semibold text-lg">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* Dark mode toggle removed to keep the site in light mode */}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-muted-foreground text-sm">
            © 2025 Gauhati University. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a
              href="/cookie-settings"
              className="transition-colors hover:text-primary"
            >
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
