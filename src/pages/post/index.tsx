import { lazy, Suspense } from "react";
import Page from "../../ui-components/page";
const Comments = lazy(
  // @ts-expect-error - micro-frontend
  async () => import("comments/comments")
);

import styles from "./index.module.css";

export default function PostPage() {
  return (
    <Page>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.postFull}>
            <div className={styles.votes}>
              <button>↑</button>
              <span>235</span>
              <button>↓</button>
            </div>
            <div className={styles.postContent}>
              <h1>Title of Full Post</h1>
              <p className={styles.meta}>
                Posted by u/username 3h ago in r/subredditname
              </p>
              <p className={styles.fullText}>
                This is the full content of the post. It can be text, images, or
                videos.
              </p>
              <div className={styles.postActions}>
                <span>Share</span>
                <span>Save</span>
                <span>Report</span>
              </div>
            </div>
          </div>

          <section className={styles.comments}>
            <Suspense fallback={<span>Loading comments...</span>}>
              <Comments />
            </Suspense>
          </section>
        </main>

        <aside className={styles.aside}>
          <div className={styles.sidebarBox}>
            <h3>About Community</h3>
            <p>Description of the subreddit or trending topics.</p>
          </div>
        </aside>
      </div>
    </Page>
  );
}
