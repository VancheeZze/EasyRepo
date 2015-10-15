angular.module("app", [])

.controller('playlistController', function (Songs) {
	var self = this;
	self.music = new Songs();
});