import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

function Component01() {
  return (
    <div>
      <InnerContent title="INNER" text="TEKST" icon={faBlackberry} />
    </div>
  );
}

export default Component01;

function InnerContent({ title, text, icon }) {
  return (
    <div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.para}>{text}</p>
      <FontAwesomeIcon className={styles.icon} icon={icon} />
    </div>
  );
}
