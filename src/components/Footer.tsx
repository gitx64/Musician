"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">About Us</h2>
          <p className="text-sm text-muted-foreground">
            We are a music learning platform offering courses, tutorials, and
            community support for aspiring musicians worldwide.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="#" className="hover:text-primary">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:text-primary"
            >
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Music Academy. All rights reserved.</p>
        <p>Made with ❤️ By Goswami</p>
      </div>
    </footer>
  );
}
