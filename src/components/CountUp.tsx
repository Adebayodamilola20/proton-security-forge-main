import { useEffect, useState, useRef } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

const CountUp = ({ end, duration = 2000, suffix = "", className = "" }: CountUpProps) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);

                        // Ease out quart
                        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

                        setCount(Math.floor(easeOutQuart * end));

                        if (progress < duration) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [end, duration]);

    return (
        <span ref={elementRef} className={className}>
            {count}{suffix}
        </span>
    );
};

export default CountUp;
