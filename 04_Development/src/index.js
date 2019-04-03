import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import reactLifecycle from './reactLifecycle.png';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

    // 将图像添加到我们现有的 div。
    var image = new Image();
    image.src = reactLifecycle;
  
    element.appendChild(image);

  return element;
}

document.body.appendChild(component());