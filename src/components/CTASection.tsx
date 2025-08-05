"use client";

import React from "react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
        <div className="s_cta-wrap" aria-labelledby="cta-section">
            <div className="c_cta-container">
                <div className="c_cta-content">
                    <h2 id="cta-heading" className="heading-lg-medium sm:heading-md-medium text-center">
                        Start your free trial
                    </h2>
                    <p className="text-md-medium sm:text-sm-medium text-center ">
                        Join over 500+ organizations already growing with us.
                    </p>
                    <div className="c_cta-buttons">
                        <Button className="button button-xl lg:button-lg md:button-md sm:button-sm button-primary">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
