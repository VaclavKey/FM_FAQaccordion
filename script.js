let activeQuestion = null;

document.querySelectorAll(".question").forEach(div => {
  if (!div.dataset.state) {
    div.dataset.state = "plus";
  }

  div.addEventListener("mouseover", function(event) {
    toggleHoverImage(this);
  });

  div.addEventListener("mouseleave", function(event) {
    resetImage(this);
  });

  div.addEventListener("mousedown", function(event) {
    togglePressedImage(this);
  });

  div.addEventListener("click", function() {
      if (activeQuestion && activeQuestion !== this) {
        closeAnswer(activeQuestion);
      }

      if (this.dataset.state === "plus") {
        openAnswer(this);
        activeQuestion = this;
      } else {
        closeAnswer(this);
        activeQuestion = null;
      }
  });
});

function openAnswer(div) {
  let img = div.querySelector("button img");
  let answer = document.querySelector(`#a${div.id.slice(1)}`)

  div.dataset.state = "minus";
  img.src = "assets/images/icon-minus.svg";
  answer.classList.add("show");
  answer.style.maxHeight = answer.scrollHeight + "px";
}

function closeAnswer(div) {
  let img = div.querySelector("button img");
  let answer = document.querySelector(`#a${div.id.slice(1)}`)

  div.dataset.state = "plus";
  img.src = "assets/images/icon-plus.svg";
  answer.classList.remove("show");
  answer.style.maxHeight = "0";
}

function opensAnswer(div) {
      
  let answer = document.querySelector(`#a${div.id.slice(1)}`);
  let isOpening = div.dataset.state === "minus";

  if (isOpening) {
    answer.classList.add("show");
    answer.style.maxHeight = answer.scrollHeight + "px";
  } else {
    answer.classList.remove("show");
    answer.style.maxHeight = "0";
  }
}

function toggleHoverImage(div) {
  let img = div.querySelector("button img");
  img.style.filter = "brightness(1.2)";
}

function resetImage(div) {
  let img = div.querySelector("button img");
  img.style.filter = "brightness(1)";
}

function togglePressedImage(div) {
  let img = div.querySelector("button img");
  img.style.filter = "brightness(0.8)";
}

function toggleClickStyle(div) {
  let img = div.querySelector("button img");

  if (div.dataset.state === "plus") {
    div.dataset.state = "minus";
    img.src = "assets/images/icon-minus.svg";
  } else {
    div.dataset.state = "plus";
    img.src = "assets/images/icon-plus.svg";
  }
}
