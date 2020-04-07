let isAllCheckPassed = true;

const ngWords = ['WIP', 'DNM'];
ngWords.forEach(word => {
  if (danger.github.pr.title.includes(word)) {
    fail(`:rotating_light: Should NOT inclued '${word}' in your PR title`);
  }  
});

if (!danger.github.pr.reviewer) {
  warn(":rotating_light: Should select PR reviewer");
  isAllCheckPassed = false;
}

message(JSON.stringify(danger.github.pr))

const hasIssuesNumber = /#[0-9]/.test(danger.github.pr.title);
if (!hasIssuesNumber) {
  warn(":rotating_light: Should include issues number in your PR title");
  isAllCheckPassed = false;
}

const diffSize = Math.max(danger.github.pr.additions, danger.github.pr.deletions);
if (diffSize > 500) {
  warn(":rotating_light: Should reduce diffs less than 500");
  isAllCheckPassed = false;
}

if (danger.github.pr.changed_files > 10 ) {
  warn(":rotating_light: Should reduce change files less than 10");
  isAllCheckPassed = false;
}

if (isAllCheckPassed) markdown('<div align="center"><h2>All checkes have passed :tada:</h2></div>')
markdown('<div align="center"><h3>:robot: PR Reviewing By Danger :robot:</h3></div>')
