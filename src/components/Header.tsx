"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="w-full border-b border-gray-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
              {/* Logo */}
              <Link href="/">
                  <Image
                      src="/logo_title.png"
                      alt="SBM Concepts logo"
                      width={100}
                      height={80}
                      className="object-contain"
                  />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex">
                  <Navigation />
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                  <Sheet>
                      <SheetTrigger asChild>
                            <Button className="button button-icon button-outline-accent">
                              <Menu className="w-5 h-5" />
                          </Button>
                      </SheetTrigger>
                      <SheetContent side="left" className="space-y-6 pt-8">
                          <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                                <Link href="/products" className="text-sm-regular">
                                  Products
                              </Link>
                                <Link href="/features" className="text-sm-regular">
                                    Features
                              </Link>
                                <Link href="/pricing" className="text-sm-regular">
                                  Pricing
                              </Link>
                          </nav>
                      </SheetContent>
                  </Sheet>
              </div>
          </div>
      </header>
  );
}
