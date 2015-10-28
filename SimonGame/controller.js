angular.module("app", [])

	// ======================================================
	// 						VALUE
	// ======================================================

	.value('gameOptions', 

		{
			colorOptions: {
				yellow: 'yellow', 
				green: 'green', 
				blue: 'blue', 
				red: 'red'
				},
			random: ['yellow', 'green', 'blue', 'red'],
			simonMoves: [],
			userMoves: [],
			isDisabled: true,
			newGameBtn: true,
			gameScore: 0,
			showSettings: false
		}

	)

	// ======================================================
	// 						FACTORY
	// ======================================================
	
	.factory("Simon", function (){
		function Simon() {

		};
		
		return Simon;
	})

	// ======================================================
	// 						CONTROLLER
	// ======================================================

	.controller('SimonController', function (Simon, $timeout, $interval, gameOptions) {
		var self = this;
		var y = 0;
		self.options = gameOptions;				//----SAVING VALUE TO OPTION VARIABLE----//

		self.newGame = function(){
			self.options.gameScore = 0;
			self.simonGo();
		};

		self.animation = function(color) {		//----ANIMATION FUNCTION----//

			if (color === 'yellow') {
				self.yellow = true;
			} else if (color === 'green') {
				self.green = true;	
			} else if (color === 'blue') {
				self.blue = true;
			} else if (color === 'red') {
				self.red = true;	
			} 

			$timeout(function(){
					self.yellow = false;
					self.red = false;
					self.blue = false;
					self.green = false;
				}, 200);
		};

		self.userGo = function(userColorSelection) { 		//----USER FUNCTION----//

			self.pickedColor = userColorSelection;
			self.animation(self.pickedColor);			 	//----START ANIMATION----//
			self.options.userMoves.push(self.pickedColor);  //----PUSH USERS COLOR TO ARRAY----//

			self.userArr = self.options.userMoves[y];
			self.simonArr = self.options.simonMoves[y];


			if (self.userArr === self.simonArr) {
				y++;

				if (self.options.simonMoves.length <= 3) { 		//----COUNT USERS SCORES----//
					self.options.gameScore++;
				} else if (self.options.simonMoves.length >= 3 && self.options.simonMoves.length < 5) {
					self.options.gameScore = self.options.gameScore+3;
				} else if (self.options.simonMoves.length >= 5 && self.options.simonMoves.length < 10) {
					self.options.gameScore = self.options.gameScore+5;
				} else if (self.options.simonMoves.length >= 10) {
					self.options.gameScore = self.options.gameScore+15;
				};

				if (self.options.userMoves.length === self.options.simonMoves.length) { 

					self.options.isDisabled = true; //----DISABLE COLOR DIV'S----//

					$timeout(function(){			//----CLEAR USERS ARRAY AND RUN SIMON FUNCTION----//
						self.options.userMoves = [];
						self.simonGo();
					}, 700);

					y = 0;
				};
			} else { 							//----IF GAME OVER----//
				$timeout(function() {
					// alert("Game Over! Your Score: " + self.options.score);
					self.options.simonMoves = [];
					self.options.userMoves = [];
					self.options.isDisabled = true;
					self.options.newGameBtn = true;
					self.gameOver = true;
				}, 400);
			}

		};

		self.simonGo = function() {		//----SIMONS FUNCTION----//

			self.whosTurn = "Simon's Turn!";

			self.options.newGameBtn = false;		//----HIDE NEW GAME BUTTON----//
			self.options.isDisabled = true;

			self.randomChoice = self.options.random[Math.floor(Math.random() * self.options.random.length)]; //----RANDOM COLOR----//

			self.options.simonMoves.push(self.randomChoice); //----PUSH RANDOM COLOR TO ARRAY----//

			var x = 0; 		//----POSITION IN SIMONS ARRAY----//

			$interval(function(){		//----ANIMATION FOR SIMONS MOOVE----//

				if (self.options.simonMoves[x] == 'yellow') {
					self.animation(self.options.colorOptions.yellow);
				} else if (self.options.simonMoves[x] == 'green') {
					self.animation(self.options.colorOptions.green);
				} else if (self.options.simonMoves[x] == 'blue') {
					self.animation(self.options.colorOptions.blue);
				} else if (self.options.simonMoves[x] == 'red') {
					self.animation(self.options.colorOptions.red);
				} else {
					console.log('Oops...');
				}

				x++;		//----INCREASE POSITION IN SIMONS ARRAY----//

			}, 500, self.options.simonMoves.length);

				$timeout(function() {					//----DELAY TO ALLOW USER MAKE A TURN----//
					self.whosTurn = "Your Turn!";
					self.options.isDisabled = false;
					console.log(self.options.simonMoves);
				}, 500*self.options.simonMoves.length)

		};

		self.close = function() { 		//----CLOSE BUTTON IN MODAL WINDOW----//
			self.gameOver = false;
		};

		self.showSettings = function() {
			self.options.showSettings = true;
		};

		self.hideSettings = function() {
			self.options.showSettings = false;
		};

	});

