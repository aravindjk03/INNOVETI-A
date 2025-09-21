import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import ImpactCounters from '@/components/ImpactCounters';
import InteractiveMap from '@/components/InteractiveMap';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ImpactCounters />
      <InteractiveMap />
    </>
  );
}