import Page from "../../ui-components/page";

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
            <h2>Comments</h2>
            <div className={styles.commentInput}>
              <textarea placeholder="What are your thoughts?" />
              <button>Comment</button>
            </div>
            <div className={styles.comment}>
              <p className={styles.commentMeta}>u/commenter • 1h ago</p>
              <p className={styles.commentText}>This is a comment.</p>
              <div className={styles.commentActions}>
                <button>Upvote</button>
                <button>Downvote</button>
                <button>Reply</button>
              </div>
            </div>
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
