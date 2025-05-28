import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import HowItWorks from "@/components/home/how-it-works";
import FAQ from "@/components/home/faq";
import CTASection from "@/components/home/cta-section";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <CTASection />
        </div>
    );
}
