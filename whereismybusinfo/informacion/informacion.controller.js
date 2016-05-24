(function() {
'use strict';

    angular
        .module('informacion')
        .controller('InformacionController', InformacionController);

    InformacionController.$inject = ['$http'];
    function InformacionController($http){
        var vm = this;
        vm.openUrl = openUrl;
        
        function openUrl(param) {
            window.open(param, "_blank");
            return false;
        }
        /*Delete on app*/
        $http.get("http://wearecode.net/whereismybusinfo/")
            .then(function(response) {
                var status = response.status;
                if(status >= 200 && status < 300 || status === 304){
                    window.location = "http://wearecode.net/whereismybusinfo/";
                }
            });
    }
})();