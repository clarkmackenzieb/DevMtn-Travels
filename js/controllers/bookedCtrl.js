angular.module("devmtnTravel").controller("bookedCtrl", function($scope, mainSrv, $stateParams){

    $scope.packageInfo = mainSrv.packageInfo;
    for(var i = 0; i < $scope.packageInfo.length; i++){
        for(var key in $scope.packageInfo[i]){
            if($scope.packageInfo[i].id === $stateParams.id){
                $scope.thisPackage = $scope.packageInfo[i];
            }
            
        }
}

console.log($scope.thisPackage)
})