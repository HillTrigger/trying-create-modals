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
};
