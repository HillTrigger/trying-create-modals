const videoModal = (id, src) => {
  return `<div class="video-modal hidden" id=${id}>
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
          </div>s
        </div>`;
};

document.addEventListener("DOMContentLoaded", (e) => {
  const modalsContainer = document.getElementById("modals");
  const modalTriggers = document.querySelectorAll("[data-modal]");
  modalTriggers.forEach((trigger) => {
    const ID = trigger.dataset.modal;

    if (ID.startsWith("video")) {
      const SRC = trigger.dataset.src;
      modalsContainer.insertAdjacentHTML("afterbegin", videoModal(ID, SRC));
      // let modal = document.createDocumentFragment();
      // modal.innerHTML = "Hello world";
      // videoModal(ID, SRC);
      // modalsContainer.append(modal);
    }
  });
});
