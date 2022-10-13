import styles from "../styles/Global";
import assets from "../assets";

const Download = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/davi38/react-native-nft-marketplace-client",
      "_blank"
    );
  };
  return (
    <section className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Download the Source Code
          </h1>
          <p className={`${styles.h1Text} ${styles.blackText}`}>
            Get the full source code on GitHub
          </p>
        </div>
        <button className={`${styles.btnPrimary}`} onClick={handleClick}>
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <picture>
            <img
              src={assets.scene}
              alt="download.png"
              className={styles.fullImg}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Download;
