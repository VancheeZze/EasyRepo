angular.module("app", [])

.controller('gradeController', function (Student) {
	var self = this;
	self.student = new Student();
}); 