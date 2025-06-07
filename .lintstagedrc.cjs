module.exports = {
	'*.{ts,tsx}': ['eslint .'],
	'*': ['prettier --write --check --ignore-unknown'],
};
