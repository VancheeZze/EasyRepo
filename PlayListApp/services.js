angular.module("app")

	.factory("Songs", function (){
		function Songs() {

			this.musicArray = [{genre: "pop", titles: [{title: "Bad Blood Taylor Swift (pop)",},
													 {title: "Pocker Face Lady Gaga (pop)"},
													 {title: "Ray of light Madonna (pop)"},
													 {title: "Ray of light 1 Madonna (pop)"}]},

							{genre: "rock", titles: [{title: "Bad Blood 1 Taylor Swift (rock)"},
													{title: "Pocker Face 1 Lady Gaga (rock)"}]},

							{genre: "rap", titles: [ {title: "Bad Blood Taylor Swift (rap)"},
													{title: "Pocker Face Lady Gaga (rap)"},
													{title: "Ray of light Madonna (rap)"}]}];

			this.selectedArray = [];
			this.explicit = false;
			this.genreNum = 0;
			this.userAge = '';
			this.windowHeight = screen.height-72;
			this.bot_section = {'height':this.windowHeight*0+'px'};
			this.top_section = {'height':this.windowHeight+'px'};			// this.bot_section = {'height':this.windowHeight*0.35+'px'};



	};


	Songs.prototype.submit = function (userSelection, explicit){

		if (explicit) {
			explicit = "Explicit";
		} else{
			explicit = "Clean";
		};

		for (var i = this.musicArray.length - 1; i >= 0; i--) {
			for (var t = this.musicArray[i].titles.length - 1; t >= 0; t--) {
				// console.log(this.musicArray[i].titles[t]);
				if (this.musicArray[i].titles[t].userSelection) {
					this.selectedArray.push({title: this.musicArray[i].titles[t].title, type: explicit})
					console.log(this.selectedArray);
				};
			};
		};

		if (this.selectedArray.length>0) {
			this.bot_section = {'height':this.windowHeight*0.35+'px'};
			this.top_section = {'height':this.windowHeight*0.65+'px'};
		} else {
			alert('You Should Choose At Least One Song!');
		};
	};

	Songs.prototype.allowExp = function(userAge) {
		if (this.userAge < 21) {
			return true;
		} else{
			return false;
		};
	}
	
	return Songs;
	})