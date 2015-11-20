angular.module("payrollApp")    
    .constant("config", { 
            baseurl:"http://localhost:60838",
         })
    .value("tokenKey","accessToken")     
    .controller("payrollCtrl", ['$scope', '$http', '$rootScope','config','tokenKey', 
	function ($scope, $http, $rootScope,  config, tokenKey) {
	
        
        
	
		
	// var data = {Email:'juliusbacosa@gmail.com',Password:'Admin*88',ConfirmPassword:'Admin*88'};
	// $http.post(baseurl + "/api/account/register", data ).success(function (data) {           
        // }).error(function (error) {            
        // }).finally(function () {        	
        // });
	// 
		
	// var data2 = {Email:'alphabeta@live.com',Password:'Admin*88',ConfirmPassword:'Admin*88'};
	// $http.post(baseurl + "/api/account/register", data2 ).success(function (data) {           
        // }).error(function (error) {            
        // }).finally(function () {        	
        // });
		
	
        // 
        //         var loginData = {
        //         grant_type: 'password',
        //                 username: 'juliusbacosa@gmail.com',
        //                 password: 'Admin*88'
        //         };
        //         
        //         $http.post(baseurl + "/Token", loginData ).success(function (data) {
        //                 console.log(data);
        //                 //sessionStorage.setItem(tokenKey, data.access_token);
        //         }).error(function (error) {            
        //         }).finally(function () {        	
        //         });

        $scope.LOGOUT = function(){
                sessionStorage.removeItem(tokenKey)
        }
        
        $scope.LOGIN = function(){
                var loginD = {
                grant_type:"password",
                username:'juliusbacosa@gmail.com',
                password:'---'
                };
        
                var transform = function(data){
                return $.param(data);
                }
                var headerConfig = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                        transformRequest: transform
                };
                $http.post(config.baseurl + "/Token", loginD ,headerConfig).success(function (data) {      
                sessionStorage.setItem(tokenKey, data.access_token);    
                
                 console.log(data.access_token);
                 
                }).error(function (error) {            
                }).finally(function () {        	
                });
        };
        
        $scope.CALLOPEN = function(){
        
                $http.get(config.baseurl + "/api/test").success(function (data, status, headers, config) {        
                console.log(data);        
                }).error(function (data, status, headers, config) { });
              
        };
        $scope.CallApi = function(){
                                
                       
             
                        var token = sessionStorage.getItem(tokenKey);
                        
                        
                        
                        var headers = {};
                        if (token) {
                                headers.Authorization = 'Bearer ' + token;
                                 var headerConfig = {
                                        headers:  headers    
                                };
                                $http.get(config.baseurl + "/api/values", headerConfig).success(function (data, status) {        
                                console.log(data);        
                                }).error(function (data, status) { });
                        }else{
                                console.log("Not Login");
                        }
                
                       
                        
                       
             
        };




	}
]);