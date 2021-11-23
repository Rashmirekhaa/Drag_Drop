
import angular from 'angular';

const ComponentsModule = angular.module('app.components', [
       
]);

ComponentsModule.controller('MyCtrl', ($scope) => {
       $scope.tabName = "tab1";
});

export default ComponentsModule;
