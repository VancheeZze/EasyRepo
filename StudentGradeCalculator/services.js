angular.module("app")

.factory('Student', function(MathCalc){

	function Student (name, assName, assGrade) {
		this.userName = name,
		this.grades =[],
		this.average = 0,
		this.grade = '',
		this.pass = true,
		this.hideInfo = true
	};

	Student.prototype.submitScore = function(assName, assScore, valid) {
		if (!valid) {
			return none;
		} else {
			this.grades.push({name: assName, score: assScore});
			this.average = MathCalc.average(this.grades);
			this.grade = MathCalc.grade(this.average);
			this.pass = MathCalc.passing(this.average);

			this.hideInfo = false; 
			this.assName = '';
			this.assScore = 0;
		};
	};

	return Student;

})

.service('MathCalc', function (){
	var self = this;

	self.average = function(grades) {
		var total = 0;
		for (var i = grades.length - 1; i >= 0; i--) {
			total += grades[i].score;
		};
		return  (total/grades.length);
	};


	self.grade = function(average) {
		if (average>80) {
			return "A"
		} else  if (average>50) {
			return "B"
		} else if (average>30) {
			return "C"
		} else {
			return "F"
		}
	};

	self.passing = function(average) {
		if (average>30) {
			return "Passed";
		} else {
			return "Faild";
		}
	};
	
})