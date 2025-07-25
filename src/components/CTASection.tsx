"use client";

import React from "react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
        <section className="s_cta-wrap" aria-labelledby="cta-section">
            <div className="c_cta-container">
                <div className="c_cta-content">
                    <h2 id="cta-heading" className="heading-lg-medium text-center">
                        Start your free trial
                    </h2>
                    <p className="text-md-medium text-center text-muted-foreground">
                        Join over 500+ organizations already growing with us.
                    </p>
                    <div className="c_cta-buttons">
                        <Button className="button button-lg button-primary">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
