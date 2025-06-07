import fs from 'fs';

import path from 'path';

const validBranchRegex = /^(feat|bugfix|hotfix|docs|refactor|perf|release)\/.+/; // Branch names must start with "feat/" or "fix/"
const branchName = getCurrentBranchName();

const isValidBranchName =
	branchName === 'main' ||
	branchName === 'develop' ||
	branchName === 'production-deployment' ||
	branchName === 'development-deployment' ||
	branchName === 'uat' ||
	validBranchRegex.test(branchName);

if (!isValidBranchName) {
	console.error(
		'Error: Branch name must start with "feat/" or "bugfix/" or "hotfix/" or "docs/ or "refactor/" or "perf/ or release/". Please rename your branch to follow the naming convention.',
	);
	process.exit(1);
}

function getCurrentBranchName() {
	const headPath = path.resolve('.git', 'HEAD');
	const headContent = fs.readFileSync(headPath, 'utf-8').trim();

	const branchMatch = headContent.match(/^ref: refs\/heads\/(.+)$/);

	if (branchMatch && branchMatch[1]) {
		return branchMatch[1];
	} else {
		console.error('Error: Unable to determine the current branch.');
		process.exit(1);
	}
}
