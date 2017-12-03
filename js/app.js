var firstParagraph = document.querySelector('.p-1');
var secondParagraph = document.querySelector('.p-2');
var thirdParagraph = document.querySelector('.p-3');
var firstPic = document.querySelector('.bat-1');
var secondPic = document.querySelector('.bat-2');
var thirdPic = document.querySelector('.bat-3');

function showParagraph(event) {
  var tab = event.target.dataset.type;

  if (tab === 'one'){
    firstParagraph.style.display = 'block';
    firstPic.style.display = 'block';
    secondParagraph.style.display = 'none';
    secondPic.style.display = 'none';
    thirdParagraph.style.display = 'none';
    thirdPic.style.display = 'none';
  } else if (tab === 'two'){
    firstParagraph.style.display = 'none';
    firstPic.style.display = 'none';
    secondParagraph.style.display = 'block';
    secondPic.style.display = 'block';
    thirdParagraph.style.display = 'none';
    thirdPic.style.display = 'none';
  } else if (tab === 'three'){
    firstParagraph.style.display = 'none';
    firstPic.style.display = 'none';
    secondParagraph.style.display = 'none';
    secondPic.style.display = 'none';
    thirdParagraph.style.display = 'block';
    thirdPic.style.display = 'block';
  }

};

function loadPage() {
  firstParagraph.style.display = 'none';
  firstPic.style.display = 'none';
  secondParagraph.style.display = 'none';
  secondPic.style.display = 'none';
  thirdParagraph.style.display = 'none';
  thirdPic.style.display = 'none';
  var tabs = document.getElementsByClassName('tab-js');
  for (i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', showParagraph);
  }

}
loadPage();