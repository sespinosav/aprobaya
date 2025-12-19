const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../data/certifications/aws-clf-c02/questions');
const domainFiles = ['domain1.ts', 'domain2.ts', 'domain3.ts', 'domain4.ts'];

const errors = [];
let totalQuestions = 0;

console.log('🔍 Validando preguntas de certificación AWS CLF-C02...\n');

for (const file of domainFiles) {
  const filePath = path.join(questionsDir, file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Archivo no encontrado: ${file}`);
    continue;
  }

  console.log(`📄 Procesando ${file}...`);
  
  // Leer el archivo
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Extraer preguntas usando regex
  const questionMatches = content.matchAll(/{\s*id:\s*"([^"]+)"[\s\S]*?type:\s*"(single|multiple)"[\s\S]*?correctAnswers:\s*\[([^\]]+)\]/g);
  
  let domainQuestions = 0;
  let domainErrors = 0;
  
  for (const match of questionMatches) {
    const questionId = match[1];
    const type = match[2];
    const correctAnswersStr = match[3];
    
    // Contar respuestas correctas
    const correctAnswers = correctAnswersStr.split(',').map(a => a.trim().replace(/"/g, '')).filter(a => a);
    const correctAnswersCount = correctAnswers.length;
    
    totalQuestions++;
    domainQuestions++;
    
    // Validar tipo vs número de respuestas
    if (type === 'single' && correctAnswersCount > 1) {
      errors.push({
        questionId,
        domain: file.replace('.ts', ''),
        type,
        correctAnswersCount,
        message: `❌ Pregunta tipo "single" con ${correctAnswersCount} respuestas correctas`
      });
      domainErrors++;
    } else if (type === 'multiple' && correctAnswersCount === 1) {
      errors.push({
        questionId,
        domain: file.replace('.ts', ''),
        type,
        correctAnswersCount,
        message: `⚠️  Pregunta tipo "multiple" con solo 1 respuesta correcta`
      });
      domainErrors++;
    }
  }
  
  console.log(`   ✓ ${domainQuestions} preguntas procesadas, ${domainErrors} errores encontrados\n`);
}

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📊 RESUMEN DE VALIDACIÓN\n`);
console.log(`Total de preguntas analizadas: ${totalQuestions}`);
console.log(`Total de errores encontrados: ${errors.length}\n`);

if (errors.length > 0) {
  console.log('🚨 ERRORES DETECTADOS:\n');
  
  // Agrupar por dominio
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
      console.log(`     Respuestas correctas: ${error.correctAnswersCount}`);
      console.log();
    });
  }
  
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(1);
} else {
  console.log('✅ ¡Todas las preguntas están correctamente tipadas!\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(0);
}
