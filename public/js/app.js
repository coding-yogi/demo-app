var getCurrency = angular.module('getCurrency', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when submitting the add form, send the text to the node API
	$scope.getCurrency = function(country) {
		$http.post('/api/currency/' + country)
			.success(function(data) {
				$scope.response = "Currency for " + country + " is " + data;
				console.log(data);
			})
			.error(function(data) {
                $scope.response = "Oops country with name " + country + " not found";
				console.log('Error: ' + data);
			});
	};
}
