angular.module("app")

	.factory("Simon", function ($timeout){
		function Simon() {
			this.colorOption = {
				yellow: 'yellow', 
				green: 'green', 
				blue: 'blue', 
				red: 'red',
			}
			this.green = true;
		};
		
		return Simon;
	})