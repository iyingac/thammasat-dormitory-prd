angular.module('select_roommatAapp', [])
.controller('mainController', function ($scope, $http) {
	
	$scope.account = {
		
	}
	
	//Get a account Detail
	$scope.getData = function (accountId) {	
		alert(accountId);
		$http.get('../userinfo/' + accountId)
		.success((data) => {
			console.log(data);
			$scope.account = data[0];
		})
		.error((data) => {
			console.log('Error: ' + data);
		});
	    
	};
	
});