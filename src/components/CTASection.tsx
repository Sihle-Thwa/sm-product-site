"use client";

import React from "react";
import { Button } from "./ui/button";

export default function CTASection() {
    return (
        <div className="s_cta-wrap" aria-labelledby="cta-section">
            <div className="c_cta-container">
                <div className="c_cta-content">
                    <div id="cta-heading" className="_cta-heading">
                        Start your free trial
                    </div>
                    <p className="_cta-heading-subtitle">
                        Join over 500+ organizations already growing with us.
                    </p>
                    <div className="c_cta-buttons">
                        <Button className="button button-primary">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
