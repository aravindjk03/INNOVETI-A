import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import GoogleReviews from '@/components/GoogleReviews';
import ServicesOverview from '@/components/ServicesOverview';
import ImpactCounters from '@/components/ImpactCounters';
import InteractiveMap from '@/components/InteractiveMap';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageGallery />
      <GoogleReviews />
      <ServicesOverview />
      <ImpactCounters />
      <InteractiveMap />
    </>
  );
}