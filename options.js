const inquirer = require('inquirer');
const whatIKnow = require('./commands/what_i_know');
const whatISomewhatKnow = require('./commands/what_i_somewhat_know');
const whatIWantToLearn= require('./commands/what_i_want_to_learn');
const whatISomewhatWantToLearn = require('./commands/what_i_somewhat_want_to_learn');

const options = () => {
	console.log('Select the options from below');
	inquirer.prompt([
		{
			type : 'list',
			name : 'response',
			message : 'Pick your option',
			choices : ['What I know', 'What I somewhat know', 'What I want to learn']
		}
	])
	.then(answer => {
		switch(answer.response){
			case 'What I know' : 
				whatIKnow();
				break;
			case 'What I somewhat know' : 
				whatISomewhatKnow();
				break;
			case 'What I want to learn' :
				whatIWantToLearn();
			case 'What I somewhat want to learn' :
				whatISomewhatWantToLearn();
		}
	});
};

module.exports = options;
