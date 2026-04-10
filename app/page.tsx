import CampaignList from "../components/CampaignList";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="akcije">
        <CampaignList />
      </div>
    </>
  );
}
