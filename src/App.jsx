import { Welcome } from './sections/Welcome';
import { HeaderSection } from './sections/HeaderSection';
import { GlobalStyles } from './styles/GlobalStyles';
import { HeaderHeroSection } from './sections/HeaderHeroSection';
import { FooterSection } from './sections/Footer';
import { SupportgroupSection } from './sections/Supportgroup';
import { CarouselSection } from './sections/Carousel';
import { Calendar } from './sections/Calendar';
import { Achievements } from './sections/Achievements';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderSection />
      <HeaderHeroSection />
      <Welcome />
      <SupportgroupSection />
      <CarouselSection />
      <Calendar />
      <Achievements />
      <FooterSection />
    </>
  );
};

export default App;