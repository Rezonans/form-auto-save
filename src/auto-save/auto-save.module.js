angular.module('autoSave', ['LocalStorageModule'])
  .config(function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('autoSave');
  })
  .directive('autoSave', ['$interval', 'localStorageService',
    function($interval, localStorageService) {
      return {
        restrict: 'A',
        require: 'form',
        link: function ($scope, $element, $attrs) {
          var name = $attrs.autoSaveName,
              autoSaved = localStorageService.get(name),
              formElement = $element[0],
              interval = $scope.$eval($attrs.autoSaveInterval) || 1000;

          $scope.$resetAutoSave = function() {
            localStorageService.remove(name);
          };

          $element.bind('reset submit auto-save-reset', $scope.$resetAutoSave);

          if (!name) {
            throw new Error('auto-save-name attribute should be specified.');
          }

          if (autoSaved && autoSaved.length) {
            autoSaved.map(function (elem) {
              $(formElement[elem.name]).val(elem.value).trigger('input');
            });
          }

          $interval(function () {
            var newData = $element.serializeArray();
            localStorageService.set(name, newData);
          }, interval);
        }
      };
    }
  ]);
