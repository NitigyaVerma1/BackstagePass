import { useState, useRef } from "react";

export default function AddCheckinModal({ close, onSubmit }) {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const fileRef = useRef();

  const handleUploadClick = () => {
    fileRef.current.click();
  };

  const handleFile = (e) => {
    const selected = e.target.files[0];
    setFile(selected);
  };

  const submitPost = () => {
    let imageUrl = null;

    if (file) {
      imageUrl = URL.createObjectURL(file);
    }

    onSubmit({
      text,
      image: imageUrl,
    });

    close();
  };

  return (
    <div className="modal-overlay">
      <div className="checkin-modal">
        <button className="close-btn" onClick={close}>
          ✕
        </button>

        <div className="user-row">
          <img src="https://i.pravatar.cc/80" className="modal-avatar" alt="" />
          <h2>Ashraf Idrishi</h2>
        </div>

        <p className="question">What did you complete today?</p>

        {/* TEXT INPUT */}

        <textarea
          className="post-input"
          placeholder="Write your update..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* UPLOAD AREA */}

        <div className="upload-box" onClick={handleUploadClick}>
          <input
            ref={fileRef}
            type="file"
            hidden
            onChange={handleFile}
            accept="image/*"
          />

          <div className="upload-content">
            <div className="upload-icon">⬆</div>

            <p className="upload-title">Upload</p>

            <p className="upload-info">
              Images/Videos should be horizontal, at least 1280×720px. The
              maximum image size should be 2MB.
            </p>

            {file && <p className="file-name">{file.name}</p>}
          </div>
        </div>

        {/* FOOTER */}

        <div className="modal-footer">
          <div className="media-actions">
            <button className="media-btn image">🖼</button>
            <button className="media-btn video">▶</button>
            <button className="media-btn emoji">😊</button>
          </div>

          <button
            className="submit-btn"
            disabled={!text && !file}
            onClick={submitPost}
          >
            Submit Checkin
          </button>
        </div>
      </div>
    </div>
  );
}
