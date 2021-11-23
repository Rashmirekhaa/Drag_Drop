import template from './dragComponent.component.html';
import controller from './dragComponent.controller.js';
import './dragComponent.component.scss';

let dragComponentComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'dragComponentController'
};



export default dragComponentComponent;