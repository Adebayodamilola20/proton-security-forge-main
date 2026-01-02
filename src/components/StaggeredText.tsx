import React from "react";

interface StaggeredTextProps {
    lines: (string | React.ReactNode)[];
    className?: string;
    delay?: number;
    lineHeight?: string;
}

const StaggeredText = ({ lines, className = "", delay = 0, lineHeight = "1.2" }: StaggeredTextProps) => {
    return (
        <div className={className} style={{ lineHeight }}>
            {lines.map((line, index) => (
                <div
                    key={index}
                    className="overflow-hidden" // Optional: masks the slide-up if we wanted "reveal" effect, but simple fade slide is safer for basic text
                >
                    <div
                        className="animate-slide-up-fade"
                        style={{
                            animationDelay: `${delay + (index * 0.15)}s`
                        }}
                    >
                        {line}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StaggeredText;
