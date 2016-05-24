(function() {
'use strict';

    angular
        .module('informacion')
        .controller('InformacionController', InformacionController);

    InformacionController.$inject = [];
    function InformacionController(){
        var vm = this;
        vm.openUrl = openUrl;
        
        function openUrl(param) {
            window.open(param, "_blank");
            return false;
        }
    }
})();