import _ from 'lodash';
import './style.css';
import reactLifecycle from './reactLifecycle.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  // 将图像添加到我们现有的 div。
  var image = new Image();
  image.src = reactLifecycle;

  element.appendChild(image);

  return element;
}

document.body.appendChild(component());