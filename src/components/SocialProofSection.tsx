"use client";

import React from "react";

export default function SocialProofSection() {
    return (
        <section
            className="s_socialproof-wrap"
            aria-label="Social proof section"
        >
            <div className="c_socialproof-container">
                <div className="_socialproof-content">
                    <p className="text-sm-regular text-center">
                        Trusted by schools, district teams, and national organizations to manage over 50,000 athletes worldwide.
                    </p>

                    {/* Logos will go here */}
                    <div className="_socialproof-content-logos">
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
