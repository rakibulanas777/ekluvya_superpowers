import { css } from "@emotion/css";

const PausedOverlay = ({ img, courseName }) => (
  <div>
    <img
      src={img}
      alt=""
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 10rem;
        height: 10rem;
        top: 10px,
        left: 64px,
        object-fit: cover;
        border: 1px solid #000000;
        
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        position: absolute;
        width: 10rem;
        left: 1rem;
        bottom: 0rem;
        letter-spacing: 0.88px;
        font-size: 20px;
        color: white;
        font-weight: 600;
        z-index: 5000;
      `}
    >
      {courseName}
    </div>
  </div>
);

export default PausedOverlay;
