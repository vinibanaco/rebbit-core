import { Link } from "react-router";
import Page from "../../ui-components/page";

import styles from "./index.module.css";

export default function HomePage() {
  return (
    <Page>
      <div className={styles.container}>
        <main>
          <div className={styles.post}>
            <div className={styles.votes}>
              <button>↑</button>
              <span>235</span>
              <button>↓</button>
            </div>
            <div className={styles.postContent}>
              <h2>
                <Link to="/123">Title of Post</Link>
              </h2>
              <p className={styles.meta}>
                Posted by u/username 3h ago in r/subredditname
              </p>
              <p className={styles.excerpt}>
                Here's the first few lines of the post to preview...
              </p>
              <div className={styles.postActions}>
                <span>53 comments</span>
                <span>Share</span>
                <span>Save</span>
              </div>
            </div>
          </div>
        </main>

        <aside>
          <div className={styles.sidebarBox}>
            <h3>Trending Posts</h3>
            <ul>
              <li>Post 1</li>
              <li>Post 2</li>
            </ul>
          </div>
        </aside>
      </div>
    </Page>
  );
}
