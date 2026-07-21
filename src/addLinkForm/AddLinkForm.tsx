import styles from "./AddLinkForm.module.css";

export const AddLinkForm = () => {
  return (

    <div className={styles.addLink}>
      <div className={styles.linkTi}>
        <label>Title:</label>
        <input type="text" alt="Tittle" placeholder="write your tittle" />
      </div>

      <div className={styles.linkUrl}>
        <label>url:</label>
        <input type="text" alt="Tittle" placeholder="paste your link" />
      </div>

      <div className={styles.linkDiscr}>
        <label>Discription:</label>
        <textarea
          className="Discription"
          placeholder="write your Discription"
        ></textarea>
      </div>

      <div className={styles.linkTag}>
        <label>Tags:</label>
        <input type="text" alt="Tittle" placeholder="write your tag" />
      </div>
       < button className={styles.btnSave}>save</button>
      
    </div>
  );
};
export default AddLinkForm;
