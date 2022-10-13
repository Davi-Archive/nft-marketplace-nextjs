import assets from "../assets";
import styles from "../styles/Global";

interface FeatureCardProp {
  iconUrl: string;
  iconText: string;
}

const FeatureCard = ({ iconUrl, iconText }: FeatureCardProp) => {
  return (
    <div className={styles.featureCard}>
      <picture>
        <img src={iconUrl} alt="icon" className={`${styles.featureImg}`} />
      </picture>
      <p className={styles.featureText}>{iconText}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been developed using a cross-platform technology, React
            Native.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText="React Native" />
          <FeatureCard iconUrl={assets.javascript} iconText="Javascript" />
        </div>
      </div>
    </section>
  );
};

export default Features;
