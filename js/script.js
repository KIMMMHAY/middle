$(document).ready(function () {
  $(".background").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
  });
});

function toggleAudio() {
  const audio = document.getElementById("audioElement");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

//.button이라는 clss를 가진 태그를 클릭하면, (조건)
//.box라는 clss를 가진 div의 css 속성중
//background-color를 blue로 바꾸고 싶어

//모든 css컨트롤 가능
//line-height, letter-spacing, 인덴트, margin, padding

//네모를 파란색으로 바꾸고 싶어
// .box라는 class를 가진 div를 파란색으로 바꾸고 싶어
// .box라는 class를 가진 div의 background-color를 blue로 바꾸고 싶어
// .box라는 class를 가진 div의 css 속성 중, background-color를 blue로 바꾸고 싶어.

// 노란색 - method
