import { GridSmallBackgroundDemo } from "@/components/effects/BackgroundGrid";
import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
  return (
   <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] items-center justify-center relative">
      <GridSmallBackgroundDemo />
      <FeaturedCard/>
    </main>
   </>
  )
}
