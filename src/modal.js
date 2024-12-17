import { createVideoModal } from "./components/modals/video-modal/createVideoModal";

window.Modal = {
  _openCallBack: {},
  _closeCallBack: {},
  open(id) {
    const modal = document.getElementById(id);
    if (this._openCallBack[id]) {
      this._openCallBack[id].apply(this);
    }
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
  // setOpenCallback(id, func) {
  //   const modal = document.getElementById(id);
  //   this._openCallBack[id] = func;
  // },
  // setCloseCallback() {},
};

document.addEventListener("DOMContentLoaded", initModals);

function initModals() {
  const modalsContainer = document.getElementById("modals");
  const modalTriggers = document.querySelectorAll("[data-modal]");

  modalTriggers.forEach((trigger) => {
    const ID = trigger.dataset.modal;

    if (ID.startsWith("video")) {
      let videoModal = createVideoModal(trigger);
      if (!videoModal) return;
      modalsContainer.append(videoModal);
    }
  });
}
