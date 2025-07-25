"use client";

import React from "react";

export default function SocialProofSection() {
    return (
        <section
            className="w-full flex justify-center bg-background py-16"
            aria-label="Social proof section"
        >
            <div className="w-full max-w-[1024px] px-4 md:px-8 flex flex-col items-center gap-12">
                <div className="max-w-3xl text-center space-y-6">
                    <p className="text-sm-regular text-muted-foreground">
                        Trusted by schools, district teams, and national organizations to manage over 50,000 athletes worldwide.
                    </p>

                    {/* Logos will go here */}
                    <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
                        {/* Example: 
              <Image src="/logos/school1.svg" alt="School 1" width={100} height={40} />
              <Image src="/logos/partner2.png" alt="Partner 2" width={100} height={40} />
            */}
                    </div>
                </div>
            </div>
        </section>
    );
}
