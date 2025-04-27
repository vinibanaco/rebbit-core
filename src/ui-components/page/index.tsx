import { type PropsWithChildren } from "react";

import styles from "./index.module.css";

export default function Page({ children }: PropsWithChildren) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>RedditClone</div>
        <input type="text" placeholder="Search..." className={styles.search} />
        <div className={styles.userMenu}>Profile</div>
      </header>

      <div>{children}</div>
    </>
  );
}
