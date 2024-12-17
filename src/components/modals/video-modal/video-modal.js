export const videoModalSample = (src) => {
  if (typeof src === "string" && src.trim() !== "") {
    return `
    <div class="video-modal__container">
      <span
        class="video-modal__btn-close"
        >X</span
      >
      <iframe
        class="video-modal__video"
        width="560"
        height="315"
        src=${src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>`;
  } else {
    return `
    <div class="video-modal__container">
      <span
        class="video-modal__btn-close"
        >X</span
      >
      
      <div
        class="video-modal__video"
      ></div>
    </div>`;
  }
};
