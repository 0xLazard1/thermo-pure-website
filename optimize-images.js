const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// Liste des images à optimiser
const images = [
  'hero-bg.jpg',
  'logo.jpg',
  'Image_Façade_Presentation.jpg',
  'Image_Terrace_Presentation.jpg',
  'Image_Nettoyage_1.jpg',
  'Image_Nettoyage_2.jpg',
  'Image_Nettoyage_3.jpg',
  'Image_Nettoyage_4.jpg',
  'Image_Nettoyage_5.jpg',
  'Image_Nettoyage_6.jpg',
  'Image_Nettoyage_7.jpg'
];

async function optimizeImages() {
  console.log('🚀 Début de l\'optimisation des images...\n');

  for (const imageName of images) {
    const inputPath = path.join(publicDir, imageName);
    const outputWebP = path.join(publicDir, imageName.replace('.jpg', '.webp'));
    const outputAVIF = path.join(publicDir, imageName.replace('.jpg', '.avif'));

    try {
      // Vérifier que le fichier existe
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  ${imageName} n'existe pas, ignoré`);
        continue;
      }

      const stats = fs.statSync(inputPath);
      const originalSize = (stats.size / 1024).toFixed(2);

      // Convertir en WebP (qualité 85, bon compromis)
      await sharp(inputPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputWebP);

      const webpStats = fs.statSync(outputWebP);
      const webpSize = (webpStats.size / 1024).toFixed(2);
      const webpSaving = ((1 - webpStats.size / stats.size) * 100).toFixed(1);

      // Convertir en AVIF (qualité 75, meilleure compression)
      await sharp(inputPath)
        .avif({ quality: 75, effort: 6 })
        .toFile(outputAVIF);

      const avifStats = fs.statSync(outputAVIF);
      const avifSize = (avifStats.size / 1024).toFixed(2);
      const avifSaving = ((1 - avifStats.size / stats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   Original: ${originalSize} KB`);
      console.log(`   WebP: ${webpSize} KB (${webpSaving}% économisé)`);
      console.log(`   AVIF: ${avifSize} KB (${avifSaving}% économisé)\n`);

    } catch (error) {
      console.error(`❌ Erreur avec ${imageName}:`, error.message);
    }
  }

  console.log('✨ Optimisation terminée !');
}

optimizeImages();
