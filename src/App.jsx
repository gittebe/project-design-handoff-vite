import { Welcome } from './sections/Welcome';
import { HeaderSection } from './sections/HeaderSection';
import { GlobalStyles } from './styles/GlobalStyles';
import { HeaderHeroSection } from './sections/HeaderHeroSection';
import { FooterSection } from './sections/Footer';
import { SupportgroupSection } from './sections/Supportgroup';
import { CarouselSection } from './sections/Carousel';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <HeaderSection />
        <HeaderHeroSection />
        <Welcome />
        <SupportgroupSection />
        <CarouselSection />
        <FooterSection />
      </div>
    </>
  );
};

export default App;