var myApp = angular.module('myApp', []);

myApp.controller('FacturaCTRL', ['$scope', '$http', function($scope, $http) {
    
    console.log("Hello World from controller");

    var pedido = {
    	pelicula: 'Avengers',
    	fecha: 'Sabado 16 de mayo',
    	cantidad: 5,
    	asientos: ['h1','h2','h3','h4','h5']
    }
    

    var entradas = pedido.cantidad;
    pedido.total =  entradas * 2500;
    $scope.pedido = pedido;

    $scope.aceptar = function(){
    	alert('Compra realizada exitosamente');
    };

 }]);