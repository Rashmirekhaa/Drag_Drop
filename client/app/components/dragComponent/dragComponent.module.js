import angular from 'angular';
import dragComponentComponent from './dragComponent.component';

const dragComponentModule = angular.module('dragComponent', [])
  .component('dragComponent', dragComponentComponent);
export default dragComponentModule;