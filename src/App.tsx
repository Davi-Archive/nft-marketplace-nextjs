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
        reverse={true}
      />
    </>
  );
};

export default App;
