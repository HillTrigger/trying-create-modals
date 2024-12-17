import { videoModalSample } from "./video-modal";

export function createVideoModal(trigger) {
  const ID = trigger.dataset.modal;
  const SRC = trigger.dataset.src;

  if (document.getElementById(ID)) {
    //проверка есть ли модалка уже
    console.log(ID, " уже существует");
    return false;
  }

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

  window.Modal[ID] = videoModal; // Сохраняем ссылку на модалку в глобальную переменную переменную
  window.Modal[ID].id = ID;

  window.Modal[ID].text = addTextForModal;

  return videoModal;
}

function addTextForModal(text) {
  let container = this.firstElementChild;
  let textElement = container.querySelector(`.${this.id}-text`);
  if (textElement) {
    //если текст уже есть то удаляем его чтобы добавить новый
    textElement.remove();
  }
  textElement = document.createElement("div");
  textElement.classList.add(this.id + "-text");
  textElement.textContent = text;
  container.append(textElement);
}
