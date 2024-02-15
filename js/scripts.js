document.querySelector(".banner__video-play").innerHTML = "СМОТРЕТЬ ВИДЕО"
  .split("")
  .map((e, i) => `<span style="--rot:${i * 12}deg">${e}</span>`)
  .join("");
