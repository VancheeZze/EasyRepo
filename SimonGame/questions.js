List of questions!

========================================

					1

========================================

if (self.options.userMoves.length = self.options.simonMoves.length)

// = and ===

?----------------------?
// Why '=' doesnt work?
?----------------------?




========================================

					2

========================================

$timeout(function(){
		self.yellow = false;
		self.red = false;
		self.blue = false;
		self.green = false;
}, 200);

// self.nameOfValue.colorOptions.yellow = false;

?------------------------------------------------?
// How to use values from .value inside $timeout?
?------------------------------------------------?




========================================

					3

========================================

.factory("Simon", function ($timeout, $interval){
	function Simon() {
	
	};
	return Simon;
})

.controller('SimonController', function (Simon, $timeout, $interval, gameOptions) {

	});

?--------------------------------------------------------------------?
// We passing '$timeout, $interval' either to factory and controller?
?--------------------------------------------------------------------?




========================================

					4

========================================
.value('gameOptions', 

		{
			colorOptions: {
				yellow: 'yellow', 
				green: 'green', 
				blue: 'blue', 
				red: 'red'
				},
		}

	)

.controller('SimonController', function (Simon) {

self.options = gameOptions;
var color = self.options.colorOptions.red;

});

?-------------------------------------------------------------------?
// Why cant use .value direct without "self.options = gameOptions;"?
?-------------------------------------------------------------------?




========================================

					5

========================================

<div ng-disabled="true"
	 ng-class="{'lit' : ctrl.green}" 
	 class="blink square green" 
	 ng-click="ctrl.userGo('green')">
</div>

?---------------------------------------?
// How to disable div? ng-click still work.
?---------------------------------------?




========================================

					6

========================================

if (x === self.options.simonMoves.length - 1) {
	$timeout(function() {
		self.options.isDisabled = false;
	}, 500)
};

?-----------------------------------?
// How to disable div while simon runs?
?-----------------------------------?













