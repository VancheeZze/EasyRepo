angular.module("app", [])

.controller('userCtrl', function() {
	var self = this;

	self.hideEdit = false;
	self.hideInfo = true;
	
	self.edit = function() {
		self.hideEdit = true;
		self.hideInfo = false;
	};

	self.cancel = function(){
		self.hideEdit = false;
		self.hideInfo = true;
	};

	self.done = function() {
		self.person = angular.copy(self.fakePerson);

		self.hideEdit = false;
		self.hideInfo = true;
	};

	self.person = {
		fname: "Ivan",
		lname: "Rudyuk",
		email: "Bla-bla@mail.com"
	};

	self.fakePerson = angular.copy(self.person);
});