angular.module('App', [])

// ====================================== Task 1 ========================================

.controller('Task_1_Controller', function(){
var self = this;

	self.light = {
		background_class: 'background-light',
		div_1_class: 'div-1-light',
		div_2_class: 'div-2-light',
		btn_class: "btn-light" 
	}

	self.dark = {
		background_class: 'background-dark',
		div_1_class: 'div-1-dark',
		div_2_class: 'div-2-dark',
		btn_class: "btn-dark" 
	}

	self.crazy = {
		background_class: 'background-crazy',
		div_1_class: 'div-1-crazy',
		div_2_class: 'div-2-crazy',
		btn_class: "btn-crazy" 
	}

	self.reset = {
		background_class: 'background-reset',
		div_1_class: 'div-1-reset',
		div_2_class: 'div-2-reset',
		btn_class: "btn-reset" 
	}

	self.userSelection = self.reset;
})

// ====================================== Task 2 ========================================

.controller('Task_2_Controller', function(){
var self = this;
self.position = 0;

self.foldersArray = [{name: 'Folder 1',
					  files: ['File 1', 'File 2 ']
					 },
					 {name: 'Folder 2',
					  files: ['File 1', 'File 2', 'File 3']
					},
					{name: 'Folder 3',
					  files: ['File 1', 'File 2', 'File 3']
					}];

self.AddToFolder = function() {
	self.foldersArray[self.position].files.push(" " + self.file + ' ');
	self.file = '';
};

});
