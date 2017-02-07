var app = angular.module('app', []);

app.controller('oper', ['$scope', function($scope){
	$scope.final = function(value, divisor){
		value = value / divisor + 0.5;
		return value - (value % 0.5);
	};

	$scope.ddm = function(determination, discipline, motivation, factor) {
		return (determination + discipline + motivation) * factor; 

	};

	$scope.tacticalAndFitness = function(value, multiplier, divisor, det, disc, mot, ddm_factor) {
		ddm = $scope.ddm(det, disc, mot, ddm_factor);
		return $scope.final(value * multiplier + ddm, divisor); 

	};

	$scope.goalkeeperAndDefending = function (value1, value2, det, disc, mot){
		ddm = $scope.ddm(det, disc, mot, 3);
		return $scope.final(value1 * 8 + value2 * 3 + ddm, 80);
	};

	$scope.ballHabilities = function(value1, value2, det, disc, mot){
		ddm = $scope.ddm(det, disc, mot, 2);
		return $scope.final(value1 * 6 + value2 * 3 + ddm, 60);
	};
	
	
}]);

