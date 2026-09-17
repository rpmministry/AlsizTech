/**
 * AlsizTech — Motor Unificado de Despliegue a Producción
 * 
 * Uso:
 *   node deploy.js            -> Ejecuta sincronización y despliegue según configuración
 *   node deploy.js --vercel   -> Despliega a Vercel en producción
 *   node deploy.js --ftp      -> Despliega a Hosting tradicional por FTP
 *   node deploy.js --git      -> Sincroniza, comitea y hace push para CI/CD automático
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

console.log('\n======================================================');
console.log('   🚀 ALSIZTECH — SISTEMA DE DESPLIEGUE CONTINUO');
console.log('======================================================\n');

// 1. Paso fundamental: Sincronizar paridad y regenerar dark.html
console.log('📦 Paso 1: Sincronizando paridad de temas y assets con sync.js...');
try {
  execSync('node sync.js', { stdio: 'inherit', cwd: __dirname });
  console.log('✅ Archivos sincronizados y listos para producción.\n');
} catch (err) {
  console.error('❌ Error al sincronizar con sync.js:', err.message);
  process.exit(1);
}

// 2. Cargar variables de entorno si existen (.env)
function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  const env = {};
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx > 0) {
        const key = trimmed.substring(0, eqIdx).trim();
        const val = trimmed.substring(eqIdx + 1).trim();
        env[key] = val;
      }
    }
  }
  return env;
}

const env = loadEnv();
const args = process.argv.slice(2);
const forceVercel = args.includes('--vercel');
const forceFtp = args.includes('--ftp');
const forceGit = args.includes('--git');

// 3. Despliegue por Vercel
async function deployVercel() {
  console.log('☁️ Desplegando en Vercel (Producción)...');
  try {
    execSync('npx vercel --prod', { stdio: 'inherit', cwd: __dirname });
    console.log('\n🎉 ¡Despliegue en Vercel completado exitosamente!');
  } catch (err) {
    console.error('\n❌ Error durante el despliegue en Vercel:', err.message);
  }
}

// 4. Despliegue por FTP (cPanel / Hostinger)
async function deployFTP() {
  if (!env.FTP_HOST || !env.FTP_USER || !env.FTP_PASSWORD) {
    console.log('⚠️  No se han configurado credenciales FTP completas en el archivo .env');
    console.log('   Por favor revise .env.example y cree un archivo .env con:');
    console.log('   FTP_HOST=...');
    console.log('   FTP_USER=...');
    console.log('   FTP_PASSWORD=...');
    console.log('   FTP_REMOTE_DIR=/public_html/\n');
    return;
  }

  console.log(`📡 Conectando a servidor FTP: ${env.FTP_HOST} (${env.FTP_USER})...`);
  
  // Verificar si basic-ftp está instalado
  let ftp;
  try {
    ftp = require('basic-ftp');
  } catch (e) {
    console.log('📦 Instalando módulo liviano basic-ftp...');
    execSync('npm install --save-dev basic-ftp', { stdio: 'inherit', cwd: __dirname });
    ftp = require('basic-ftp');
  }

  const client = new ftp.Client();
  client.ftp.verbose = false;

  try {
    await client.access({
      host: env.FTP_HOST,
      user: env.FTP_USER,
      password: env.FTP_PASSWORD,
      port: parseInt(env.FTP_PORT || '21', 10),
      secure: env.FTP_SECURE === 'true'
    });

    console.log('✅ Conexión FTP establecida con éxito.');
    const remoteDir = env.FTP_REMOTE_DIR || '/public_html/';
    console.log(`📤 Subiendo sitio web a ${remoteDir}...`);

    await client.ensureDir(remoteDir);

    // Archivos a subir
    const filesToUpload = ['index.html', 'dark.html', 'styles.css', 'script.js'];
    for (const f of filesToUpload) {
      const localPath = path.join(__dirname, f);
      if (fs.existsSync(localPath)) {
        await client.uploadFrom(localPath, `${remoteDir}/${f}`);
        console.log(`  ✓ Subido: ${f}`);
      }
    }

    // Subir carpeta assets
    const assetsDir = path.join(__dirname, 'assets');
    if (fs.existsSync(assetsDir)) {
      console.log('  ✓ Sincronizando directorio assets/...');
      await client.uploadFromDir(assetsDir, `${remoteDir}/assets`);
      console.log('  ✓ Directorio assets/ sincronizado.');
    }

    console.log('\n🎉 ¡Despliegue por FTP completado exitosamente en su hosting!');
  } catch (err) {
    console.error('❌ Error en transferencia FTP:', err.message);
  } finally {
    client.close();
  }
}

// 5. Flujo Git CI/CD
async function deployGit() {
  console.log('🔄 Ejecutando sincronización y push con Git...');
  try {
    execSync('git add .', { stdio: 'inherit', cwd: __dirname });
    const commitMsg = `Deploy producción: ${new Date().toLocaleString('es-EC')}`;
    try {
      execSync(`git commit -m "${commitMsg}"`, { stdio: 'inherit', cwd: __dirname });
    } catch (_) {
      console.log('ℹ️  No hay cambios pendientes por commitear.');
    }
    execSync('git push origin main', { stdio: 'inherit', cwd: __dirname });
    console.log('✅ Push enviado a la rama main. La automatización CI/CD ha iniciado el despliegue.');
  } catch (err) {
    console.error('❌ Error en git push:', err.message);
  }
}

// Menú principal y resolución de estrategia
async function main() {
  if (forceVercel) {
    await deployVercel();
    return;
  }
  if (forceFtp) {
    await deployFTP();
    return;
  }
  if (forceGit) {
    await deployGit();
    return;
  }

  // Si hay credenciales FTP en .env, usar FTP
  if (env.FTP_HOST && env.FTP_USER) {
    await deployFTP();
    return;
  }

  // Si no hay configuración previa, mostrar opciones
  console.log('📋 Estado de configuración de Despliegue:');
  console.log('------------------------------------------------------');
  console.log(' 1. Despliegue en Vercel:');
  console.log('    Ejecute: npm run deploy:vercel');
  console.log('    (Despliegue directo y continuo en la nube)');
  console.log('');
  console.log(' 2. Despliegue en Hosting cPanel / Hostinger (FTP):');
  console.log('    Configure el archivo .env con sus datos FTP y ejecute:');
  console.log('    npm run deploy:ftp');
  console.log('');
  console.log(' 3. Despliegue automático vía GitHub (CI/CD):');
  console.log('    Ejecute: npm run deploy:git');
  console.log('    (Cada push a GitHub se publica en el hosting en segundos)');
  console.log('------------------------------------------------------\n');
}

main();
