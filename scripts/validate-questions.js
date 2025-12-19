const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../data/certifications/aws-clf-c02/questions');
const domainFiles = ['domain1.ts', 'domain2.ts', 'domain3.ts', 'domain4.ts'];

const errors = [];
let totalQuestions = 0;
const multipleChoiceStats = {
  2: 0,
  3: 0,
  4: 0,
  moreThan4: 0
};

console.log('🔍 Validating AWS CLF-C02 certification questions...\n');

for (const file of domainFiles) {
  const filePath = path.join(questionsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    continue;
  }

  console.log(`📄 Processing ${file}...`);
  
  // Read the file
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Split by question objects and parse each one
  const questionBlocks = content.split(/(?=\n  {[\s\n]*id:)/g).filter(block => block.includes('id:'));
  
  let domainQuestions = 0;
  let domainErrors = 0;
  
  for (const block of questionBlocks) {
    // Extract question ID
    const idMatch = block.match(/id:\s*"([^"]+)"/);
    if (!idMatch) continue;
    const questionId = idMatch[1];
    
    // Extract type
    const typeMatch = block.match(/type:\s*"(single|multiple)"/);
    if (!typeMatch) continue;
    const type = typeMatch[1];
    
    // Extract correct answers
    const answersMatch = block.match(/correctAnswers:\s*\[([^\]]+)\]/);
    if (!answersMatch) continue;
    const correctAnswersStr = answersMatch[1];
    
    // Count correct answers
    const correctAnswers = correctAnswersStr.split(',').map(a => a.trim().replace(/"/g, '')).filter(a => a);
    const correctAnswersCount = correctAnswers.length;
    
    totalQuestions++;
    domainQuestions++;
    
    // Validate type vs number of answers
    if (type === 'single' && correctAnswersCount > 1) {
      errors.push({
        questionId,
        domain: file.replace('.ts', ''),
        type,
        correctAnswersCount,
        message: `❌ "single" type question with ${correctAnswersCount} correct answers`
      });
      domainErrors++;
    } else if (type === 'multiple' && correctAnswersCount === 1) {
      errors.push({
        questionId,
        domain: file.replace('.ts', ''),
        type,
        correctAnswersCount,
        message: `⚠️  "multiple" type question with only 1 correct answer`
      });
      domainErrors++;
    }
    
    // Track multiple choice statistics
    if (type === 'multiple') {
      if (correctAnswersCount === 2) {
        multipleChoiceStats[2]++;
      } else if (correctAnswersCount === 3) {
        multipleChoiceStats[3]++;
      } else if (correctAnswersCount === 4) {
        multipleChoiceStats[4]++;
      } else if (correctAnswersCount > 4) {
        multipleChoiceStats.moreThan4++;
      }
    }
  }
  
  console.log(`   ✓ ${domainQuestions} questions processed, ${domainErrors} errors found\n`);
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📊 VALIDATION SUMMARY\n`);
console.log(`Total questions analyzed: ${totalQuestions}`);
console.log(`Total errors found: ${errors.length}\n`);

// Show multiple choice statistics
const totalMultiple = Object.values(multipleChoiceStats).reduce((a, b) => a + b, 0);
if (totalMultiple > 0) {
  console.log('📈 MULTIPLE CHOICE QUESTIONS BREAKDOWN:\n');
  console.log(`   Questions with 2 correct answers: ${multipleChoiceStats[2]}`);
  console.log(`   Questions with 3 correct answers: ${multipleChoiceStats[3]}`);
  console.log(`   Questions with 4 correct answers: ${multipleChoiceStats[4]}`);
  console.log(`   Questions with >4 correct answers: ${multipleChoiceStats.moreThan4}`);
  console.log(`   Total multiple choice questions: ${totalMultiple}\n`);
}

if (errors.length > 0) {
  console.log('🚨 ERRORS DETECTED:\n');
  
  // Group by domain
  const errorsByDomain = {};
  errors.forEach(error => {
    if (!errorsByDomain[error.domain]) {
      errorsByDomain[error.domain] = [];
    }
    errorsByDomain[error.domain].push(error);
  });
  
  for (const [domain, domainErrors] of Object.entries(errorsByDomain)) {
    console.log(`\n📁 ${domain.toUpperCase()}`);
    console.log('─'.repeat(50));
    domainErrors.forEach(error => {
      console.log(`  ${error.message}`);
      console.log(`     ID: ${error.questionId}`);
      console.log(`     Correct answers: ${error.correctAnswersCount}`);
      console.log();
    });
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(1);
} else {
  console.log('✅ All questions are correctly typed!\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(0);
}
