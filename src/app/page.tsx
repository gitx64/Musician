import { GridSmallBackgroundDemo } from "@/components/effects/BackgroundGrid";
import FeaturedCard from "@/components/FeaturedCard";
import Footer from "@/components/Footer";
import Instructors from "@/components/Instructors";
import ScrollingTabs from "@/components/ScrollingTabs";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] items-center justify-center relative">
      <GridSmallBackgroundDemo/>
      <FeaturedCard/>
      <WhyChooseUs/>
      <ScrollingTabs/>
      <UpcomingWebiners />
      <Instructors />
      <Footer />
    </main>
   </>
  )
}
