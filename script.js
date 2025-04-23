// script.js

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.story-card button');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      alert('此功能将带您到详细页面！');
    });
  });
});
