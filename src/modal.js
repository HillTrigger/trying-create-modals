import { videoModalSample } from "./components/modals/video-modal/video-modal";

window.Modal = {
  open(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("hidden");
  },
  close(id) {
    const modal = document.getElementById(id);
    modal.classList.add("hidden");
  },
  closeAll() {
    const modalContainer = document.getElementById("modals");
    const allModals = modalContainer.children;
    let counter = 0;

    for (let modal of allModals) {
      modal.classList.add("hidden");
      counter++;
    }

    console.log(`Закрыто ${counter} модалок`);
  },
  initAll: () => initModals(),
};

document.addEventListener("DOMContentLoaded", initModals);

function initModals() {
  const modalsContainer = document.getElementById("modals");
  const modalTriggers = document.querySelectorAll("[data-modal]");

  modalTriggers.forEach((trigger) => {
    const ID = trigger.dataset.modal;

    if (ID.startsWith("video")) {
      if (document.getElementById(ID)) {
        console.log(ID, " уже существует");
        return;
      }

      const SRC = trigger.dataset.src;

      let videoModal = document.createElement("div");
      videoModal.className = `video-modal hidden`;
      videoModal.id = ID;
      videoModal.innerHTML = videoModalSample(SRC);

      const btnClose = videoModal.querySelector(".video-modal__btn-close");

      trigger.addEventListener("click", () => {
        videoModal.classList.remove("hidden");
      });

      btnClose.addEventListener("click", () => {
        videoModal.classList.add("hidden");
      });

      modalsContainer.append(videoModal);
    }
  });
}
