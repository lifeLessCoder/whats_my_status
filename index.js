const whatIKnow = require('./commands/what_i_know');
const whatISomewhatKnow = require('./commands/what_i_somewhat_know');
const whatIWantToLearn = require('./commands/what_i_want_to_learn');
const options = require('./options');

const index = () => {
	options();
};

index();