/*================================================
copyright www.xn--80ajcr.net; all rights reserved;
================================================*/

window.onresize = function () {

// if(typeof ProductResize == 'function') ProductResize('100%')

/*
 if(document.body.clientWidth <= 329) {
  mobileToolBar('MobileToolBar');
 } else {
  mobileToolBar('ToolBar');
 }
*/



/*
 var containerCenterMenu = document.getElementById('containerCenterMenu');
 position('center', containerCenterMenu, function (object, element) {
   element.style.top = object.top +'px';
   element.style.left = object.left +'px';
 });
*/
}

window.onload = function () {

// if(typeof ProductResize == 'function') ProductResize('100%')


/*
 if(document.body.clientWidth <= 329) {
  mobileToolBar('MobileToolBar');
 } else {
  mobileToolBar('ToolBar');
 }
*/


//if(typeof getProducts == 'function') getProducts ();

/*
 document.body.innerHTML += '<br /><br />'+navigator.userAgent;
 console.log(useragent)
*/


/*
 var intervalTransitionBox = [];
 var containerCenterMenu = document.getElementById('containerCenterMenu');

 intervalTransitionBox.push(setInterval(function () {

  containerCenterMenu.style.opacity = '1';

  position('center', containerCenterMenu, function (object, element) {
   element.style.width = element.clientWidth + 3 + 'px'
   element.style.height = element.clientHeight + 3 + 'px'

   element.style.top = object.top + 'px';
   element.style.left = object.left + 'px';

   if(element.clientWidth >= (window.innerWidth / 3)) while(intervalTransitionBox.length) clearInterval(intervalTransitionBox.pop())

  })
 }, 1));

 var CenterItemCenterMenu = document.querySelector('td[class=CenterItemCenterMenu]')
 CenterItemCenterMenu.onmousedown = function () {
  containerCenterMenu.style.transition =  '0.3s';
//  containerCenterMenu.style.transform = 'scale(0.1)'
//  containerCenterMenu.style.borderSpacing = '1px'

  containerCenterMenu.style.width = '100%';
  containerCenterMenu.style.height = '100%';
  containerCenterMenu.style.left = '0px';
  containerCenterMenu.style.top = '0px';

this.style.height = '80%';
  this.style.width = '100%';
 };

 CenterItemCenterMenu.onmouseup = function () {

  

  this.setAttribute('class', 'CenterItemCenterMenuMouseUp');
  document.body.removeChild(containerCenterMenu)
  var iframe = document.createElement('iframe');


  attribute ('src:http://warc.info:8080/;class:iframe;', iframe, function (object, element) {
   console.log(object, element)
  });

//  iframe.setAttribute('src', 'http://warc.info:8080/');
//  iframe.setAttribute('class', 'iframe');
//  iframe.setAttribute('scrolling', 'no');
//  iframe.setAttribute('frameborder', 'no');
//  iframe.setAttribute('marginheight', '0px');
//  iframe.setAttribute('marginwidth', '0px');
//  iframe.setAttribute('vspace', '0px');
//  iframe.setAttribute('hspace', '0px');

attribute ('src:http://warc.info:8080/;class:iframe;frameborder:no;marginheight:0px;marginwidth:0px;vspace:0px;hspace:0px;', iframe, function (object, element) {

 console.log(object, element)

});


 var iframeBox = document.createElement('div');

  iframeBox.style.height = window.innerHeight + 'px'
  iframeBox.setAttribute('class', 'iframeBox');

  iframeBox.appendChild(iframe)

  document.body.appendChild(iframeBox)

 };
*/

};

/*
function mobileProductsSubmit (value) {
 if(window.location == 'hsttp://жека.net/html/Products.html') {
  var Submit = document.querySelector('div[class=Submit]');
   Submit.style.top = value.Submit;

  var Input = document.querySelectorAll('div[class=Input]');
   Input[0].style.width = value.Input;
   Input[1].style.width = value.Input;
//   console.log(value)
 }
 return false;
}
*/

function mobileToolBar (toolbar) {
/*
mobileToolBar('MobileToolBar');
mobileToolBar('ToolBar');
*/
 var classMTB = document.querySelector('div[class=MobileToolBar]');
 var classTB = document.querySelector('div[class=ToolBar]');

 if(!classMTB || !classMTB) return false;

 if(toolbar == 'MobileToolBar') {
  classMTB.style.display = 'block'
  classTB.style.display = 'none';
 } else if('ToolBar') {
  classMTB.style.display = 'none'
  classTB.style.display = '';
 } else {
  return false;
 };
};

function MobileToolBarBox (owner) {

 var onup = owner && owner.getAttribute('onup');
 if(!onup) {
  onup = 'none';
 }

 var classMTBB = document.querySelector('div[class=MobileToolBarBox]');

 if(onup == 'none') {
  classMTBB.style.display = 'block';
  owner.setAttribute('onup', 'block');
 } else if(onup == 'block') {
  classMTBB.style.display = 'none';
  owner.setAttribute('onup', 'none');
 };
}


 var toolbarcss = document.getElementById('toolbar.css');

 var checkStyleObject = [
  'transition',
  'transform',
  'transform-origin',
  'transform-style',
  'box-sizing',
 ];

 var checkPrefixObject = ['', '-moz-', '-o-', '-webkit-', '-ms-'];

 checkStyleObject.forEach(function (style) {
  var check = false;
  checkPrefixObject.forEach(function (prefix) {
   if(typeof toolbarcss.style[prefix+style] == 'string') check = true;
 });

  if(!check) {
   toolbarcss.setAttribute('href', '/css/CSS2-Toolbar.css')
   throw new Error ('css toolbar');
  }

 });
