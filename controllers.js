/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl($scope) {

    this.userName = 'IDS';
    this.helloText = 'Welcome to IDS';
    this.descriptionText = 'It is a demo app that renders a dynamic chart controlled by inputs from user.';
    $scope.initialData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.voltage = 1;
    $scope.frequency = 1;
}

function MixedChartCtr($scope) {
    $scope.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

    $scope.labels = ['5ms', '10ms', '15ms', '20ms', '25ms', '30ms', '35ms'];

    $scope.data = $scope.initialData;

    $scope.changeChart = function () {
        $scope.data = $scope.initialData;
        $scope.newData = [];
        var tempList1 = [];
        var tempList2 = [];

        angular.forEach($scope.data,function(arr,ind){
            angular.forEach(arr,function(val,index){
                if(ind==0)
                    tempList1.push(val * $scope.voltage);
                else
                    tempList2.push(val * $scope.voltage);
            });
            if(ind==1){
                $scope.newData.push(tempList1);
                if($scope.frequency){
                   for(var i = 1; i < $scope.frequency; i++){
                       $scope.newData.push(tempList1);
                   }
                }
                $scope.newData.push(tempList2);
            }

        });
        $scope.data = $scope.newData;
    };

    $scope.reset = function () {
        $scope.data = $scope.initialData;
    };

    $scope.datasetOverride = [
        {
            label: "Digital Signal",
            borderWidth: 3,
            type: 'bar'
        },
        {
            label: "Analog Signal",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            type: 'line'
        }
    ];
}


angular
    .module('IDSDemo')
    .controller('MainCtrl', MainCtrl)
    .controller('MixedChartCtr', MixedChartCtr);