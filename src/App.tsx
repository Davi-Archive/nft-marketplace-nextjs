import { SectionWrapper, Download, Button, Features } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs."
        description="Buy, store, collect NFTS, exchange & earn crypto.
     Join 25 million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace."
        description="Experience a buttery UI of ProNef Marketplace.
        Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />

      <Features />
    </>
  );
};

export default App;
