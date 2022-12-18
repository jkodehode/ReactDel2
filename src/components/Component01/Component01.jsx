import styles from "./layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
function Component01() {
  return (
    <div>
      <h3 className={styles.title}>INNER</h3>
      <p className={styles.para}>TEKST</p>
      <FontAwesomeIcon className={styles.icon} icon={faBlackberry} />
    </div>
  );
}

export default Component01;
