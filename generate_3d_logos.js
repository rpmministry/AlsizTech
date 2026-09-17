const fs = require('fs');
const path = require('path');

const dirs = [
  path.join('c:', 'Users', 'Alsiz', 'AlsizTech', 'assets', 'logos-3d'),
  path.join('C:', 'Users', 'Alsiz', 'Documents', 'ALSIZTECH', 'assets', 'logos-3d')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// 1. AlsizTech 3D Isotipo & Emblem
const alsiztech3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="100%" height="100%">
  <defs>
    <radialGradient id="shadowGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="extGradDark" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#172554"/>
      <stop offset="50%" stop-color="#1E3A8A"/>
      <stop offset="100%" stop-color="#0E7490"/>
    </linearGradient>
    <linearGradient id="extGradMid" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1D4ED8"/>
      <stop offset="50%" stop-color="#0284C7"/>
      <stop offset="100%" stop-color="#0891B2"/>
    </linearGradient>
    <linearGradient id="topFaceGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563EB"/>
      <stop offset="45%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>
  <!-- 3D Ground Cast Shadow -->
  <ellipse cx="80" cy="142" rx="60" ry="14" fill="url(#shadowGrad)"/>
  
  <!-- 3D Deep Extrusion Base (Bottommost Shadow Wall) -->
  <path d="M 44 118 L 80 44 L 116 118" fill="none" stroke="url(#extGradDark)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, 10)"/>
  
  <!-- 3D Middle Extrusion Wall -->
  <path d="M 44 118 L 80 44 L 116 118" fill="none" stroke="url(#extGradMid)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, 5)"/>
  
  <!-- 3D Front Face (Vibrant Illuminated Surface) -->
  <path d="M 44 118 L 80 44 L 116 118" fill="none" stroke="url(#topFaceGrad)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- 3D Specular Ridge Highlight (Top Light Edge) -->
  <path d="M 46 112 L 80 40 L 114 112" fill="none" stroke="rgba(255,255,255,0.75)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Specular Apex Flare -->
  <circle cx="80" cy="42" r="5" fill="#FFFFFF" opacity="0.95"/>
</svg>`;

// 2. Google Cloud 3D
const googleCloud3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="gcShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gcBlue3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#93C5FD"/><stop offset="60%" stop-color="#3B82F6"/><stop offset="100%" stop-color="#1D4ED8"/>
    </linearGradient>
    <linearGradient id="gcRed3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCA5A5"/><stop offset="60%" stop-color="#EF4444"/><stop offset="100%" stop-color="#B91C1C"/>
    </linearGradient>
    <linearGradient id="gcYellow3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A"/><stop offset="60%" stop-color="#EAB308"/><stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="gcGreen3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86EFAC"/><stop offset="60%" stop-color="#22C55E"/><stop offset="100%" stop-color="#15803D"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="46" ry="11" fill="url(#gcShadow)"/>
  <!-- Extruded 3D Cloud Base Shadow Layer -->
  <g transform="translate(0, 6)" opacity="0.35">
    <path d="M 42 74 A 18 18 0 0 1 38 40 A 24 24 0 0 1 80 34 A 20 20 0 0 1 96 52 A 18 18 0 0 1 88 82 L 42 82 Z" fill="#0F172A"/>
  </g>
  <!-- 3D Volumetric Cloud Segments -->
  <path d="M 42 72 A 18 18 0 0 1 38 38 A 24 24 0 0 1 72 32 L 64 54 Z" fill="url(#gcBlue3D)"/>
  <path d="M 64 31 A 24 24 0 0 1 82 32 A 20 20 0 0 1 96 50 L 74 54 Z" fill="url(#gcRed3D)"/>
  <path d="M 96 50 A 18 18 0 0 1 88 80 L 70 66 Z" fill="url(#gcYellow3D)"/>
  <path d="M 88 80 L 42 80 A 18 18 0 0 1 32 64 L 62 64 Z" fill="url(#gcGreen3D)"/>
  <!-- Glossy Bevel -->
  <path d="M 42 40 A 22 22 0 0 1 78 35" stroke="rgba(255,255,255,0.75)" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="58" cy="38" r="3" fill="#FFFFFF" opacity="0.8"/>
</svg>`;

// 3. AWS 3D
const aws3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="awsShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="awsTileTop" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="awsTileSide" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/><stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="awsOrange3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDBA74"/><stop offset="50%" stop-color="#FF9900"/><stop offset="100%" stop-color="#C2410C"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="46" ry="11" fill="url(#awsShadow)"/>
  <!-- Isometric 3D Beveled Cube Top -->
  <polygon points="60,20 98,40 60,58 22,40" fill="url(#awsTileTop)" stroke="rgba(255,153,0,0.4)" stroke-width="1.2"/>
  <!-- Left Side Face -->
  <polygon points="22,40 60,58 60,94 22,76" fill="#0F172A"/>
  <!-- Right Side Face -->
  <polygon points="60,58 98,40 98,76 60,94" fill="url(#awsTileSide)"/>
  <!-- 3D Bevel Rim -->
  <polyline points="22,40 60,20 98,40" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" fill="none"/>
  <!-- AWS 3D Text on Right/Center Angle -->
  <text x="60" y="60" font-family="'Montserrat', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">aws</text>
  <!-- 3D Curved Arrow -->
  <path d="M 38 68 Q 60 82 82 68" fill="none" stroke="url(#awsOrange3D)" stroke-width="4.5" stroke-linecap="round"/>
  <polygon points="84,66 82,74 76,69" fill="url(#awsOrange3D)"/>
</svg>`;

// 4. Flutter 3D
const flutter3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="flShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="flTopRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7DD3FC"/><stop offset="50%" stop-color="#0284C7"/><stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
    <linearGradient id="flMidRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/><stop offset="60%" stop-color="#0284C7"/><stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <linearGradient id="flForeRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67E8F9"/><stop offset="50%" stop-color="#06B6D4"/><stop offset="100%" stop-color="#0E7490"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="44" ry="10" fill="url(#flShadow)"/>
  <!-- 3D Folded Wing Top -->
  <g filter="drop-shadow(0 6px 6px rgba(0,0,0,0.25))">
    <path d="M 74 16 L 28 62 L 46 80 L 92 34 Z" fill="url(#flTopRibbon)"/>
    <path d="M 74 16 L 92 34 L 88 38 L 70 20 Z" fill="rgba(255,255,255,0.45)"/>
  </g>
  <!-- Background Lower Fold -->
  <path d="M 54 70 L 32 92 L 48 108 L 70 86 Z" fill="#075985"/>
  <!-- Foreground Lower 3D Diamond -->
  <g filter="drop-shadow(-2px 4px 8px rgba(0,0,0,0.35))">
    <path d="M 58 74 L 74 58 L 90 74 L 74 90 Z" fill="url(#flForeRibbon)"/>
    <path d="M 58 74 L 74 58" stroke="rgba(255,255,255,0.85)" stroke-width="2.5" stroke-linecap="round"/>
  </g>
</svg>`;

// 5. React 3D
const react3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="reactSphere" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="25%" stop-color="#A5F3FC"/>
      <stop offset="65%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#0E7490"/>
    </radialGradient>
    <radialGradient id="reShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#CFFAFE"/><stop offset="50%" stop-color="#22D3EE"/><stop offset="100%" stop-color="#0891B2"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="44" ry="11" fill="url(#reShadow)"/>
  <!-- Back of Orbit Rings with volumetric blur -->
  <ellipse cx="60" cy="58" rx="44" ry="16" fill="none" stroke="url(#ringGrad)" stroke-width="5" transform="rotate(30, 60, 58)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.25))"/>
  <ellipse cx="60" cy="58" rx="44" ry="16" fill="none" stroke="url(#ringGrad)" stroke-width="5" transform="rotate(90, 60, 58)" opacity="0.9"/>
  <ellipse cx="60" cy="58" rx="44" ry="16" fill="none" stroke="url(#ringGrad)" stroke-width="5" transform="rotate(150, 60, 58)" opacity="0.95"/>
  <!-- Central 3D Volumetric Sphere -->
  <circle cx="60" cy="58" r="13" fill="url(#reactSphere)" filter="drop-shadow(0 6px 12px rgba(6,182,212,0.6))"/>
  <circle cx="56" cy="54" r="3.5" fill="#FFFFFF" opacity="0.9"/>
</svg>`;

// 6. PostgreSQL 3D
const postgre3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="pgShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pgFace" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/><stop offset="50%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="42" ry="10" fill="url(#pgShadow)"/>
  <!-- 3D Shadow Layer -->
  <g transform="translate(0, 5)" opacity="0.35">
    <path d="M 60 20 C 40 20 26 34 26 54 C 26 70 36 84 52 88 L 52 94 C 42 94 34 86 34 76 L 40 76 C 40 82 46 86 54 86 L 64 86 C 76 86 88 76 88 62 C 88 38 76 20 60 20 Z" fill="#0F172A"/>
  </g>
  <!-- 3D Beveled Elephant Face -->
  <path d="M 60 18 C 40 18 26 32 26 52 C 26 68 36 82 52 86 L 52 92 C 42 92 34 84 34 74 L 40 74 C 40 80 46 84 54 84 L 64 84 C 76 84 88 74 88 60 C 88 36 76 18 60 18 Z" fill="url(#pgFace)"/>
  <!-- 3D Ear Flap with Depth -->
  <path d="M 60 28 C 74 28 82 40 82 54 C 82 64 74 72 64 72 C 54 72 54 60 54 50 C 54 38 56 28 60 28 Z" fill="#1D4ED8" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
  <!-- Tusk with 3D Specular -->
  <path d="M 42 64 Q 36 76 48 78 Q 42 72 44 64 Z" fill="#F8FAFC"/>
  <!-- Eye -->
  <circle cx="48" cy="42" r="3.5" fill="#FFFFFF"/>
  <circle cx="49" cy="42" r="1.5" fill="#0F172A"/>
  <!-- Top Bevel Highlight -->
  <path d="M 40 24 C 48 20 64 20 76 28" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;

// 7. Python 3D
const python3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="pyShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pyBlue3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60A5FA"/><stop offset="50%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
    <linearGradient id="pyYellow3D" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/><stop offset="50%" stop-color="#EAB308"/><stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="42" ry="10" fill="url(#pyShadow)"/>
  <!-- Blue 3D Snake Top -->
  <g filter="drop-shadow(0 6px 8px rgba(0,0,0,0.25))">
    <path d="M 58 18 C 40 18 32 26 32 36 L 32 44 L 58 44 L 58 48 L 26 48 C 18 48 14 54 14 64 C 14 74 20 80 32 80 L 38 80 L 38 70 C 38 60 46 52 58 52 L 84 52 C 92 52 96 46 96 36 C 96 26 90 18 78 18 Z" fill="url(#pyBlue3D)"/>
    <circle cx="42" cy="28" r="3.5" fill="#FFFFFF"/>
    <path d="M 42 20 C 54 20 72 20 76 26" stroke="rgba(255,255,255,0.75)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </g>
  <!-- Yellow 3D Snake Bottom -->
  <g filter="drop-shadow(0 6px 10px rgba(0,0,0,0.25))">
    <path d="M 62 96 C 80 96 88 88 88 78 L 88 70 L 62 70 L 62 66 L 94 66 C 102 66 106 60 106 50 C 106 40 100 34 88 34 L 82 34 L 82 44 C 82 54 74 62 62 62 L 36 62 C 28 62 24 68 24 78 C 24 88 30 96 42 96 Z" fill="url(#pyYellow3D)"/>
    <circle cx="78" cy="86" r="3.5" fill="#0F172A"/>
  </g>
</svg>`;

// 8. Docker 3D
const docker3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="dkShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="dkWhale" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/><stop offset="50%" stop-color="#0284C7"/><stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
    <linearGradient id="dkBox" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7DD3FC"/><stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="46" ry="11" fill="url(#dkShadow)"/>
  <!-- 3D Containers on Deck -->
  <g transform="translate(6, 0)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))">
    <rect x="30" y="32" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="44" y="32" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="58" y="32" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="16" y="44" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="30" y="44" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="44" y="44" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="58" y="44" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
    <rect x="72" y="44" width="12" height="10" rx="1.5" fill="url(#dkBox)" stroke="#0284C7" stroke-width="0.8"/>
  </g>
  <!-- 3D Whale Body with volumetric curve -->
  <path d="M 104 58 C 98 56 86 56 74 58 C 72 58 24 58 16 70 C 10 78 16 88 32 90 C 52 92 84 92 98 80 C 106 72 108 62 104 58 Z" fill="url(#dkWhale)" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.3))"/>
  <!-- Whale Tail -->
  <path d="M 16 68 C 10 60 4 60 2 64 C 4 72 10 74 16 70 Z" fill="#0284C7"/>
  <circle cx="88" cy="74" r="2.5" fill="#FFFFFF"/>
  <path d="M 32 86 Q 60 90 92 82" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
</svg>`;

// 9. Node.js 3D
const nodejs3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="nodeShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="nodeTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#86EFAC"/><stop offset="50%" stop-color="#22C55E"/><stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
    <linearGradient id="nodeSideGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#16A34A"/><stop offset="100%" stop-color="#14532D"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="46" ry="11" fill="url(#nodeShadow)"/>
  <!-- 3D Isometric Hexagon Top -->
  <polygon points="60,20 96,40 60,60 24,40" fill="url(#nodeTopGrad)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
  <!-- Left Side Face -->
  <polygon points="24,40 60,60 60,94 24,74" fill="#15803D"/>
  <!-- Right Side Face -->
  <polygon points="60,60 96,40 96,74 60,94" fill="url(#nodeSideGrad)"/>
  <!-- Node JS Glyph in 3D -->
  <text x="60" y="62" font-family="'Montserrat', sans-serif" font-size="20" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">JS</text>
  <!-- Highlight Ridge -->
  <polyline points="24,40 60,20 96,40" stroke="rgba(255,255,255,0.7)" stroke-width="2" fill="none"/>
</svg>`;

// Enterprise Client 3D Badges
// 10. Nexus Logistics 3D
const nexus3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="clShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/><stop offset="50%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1E3A8A"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="44" ry="10" fill="url(#clShadow)"/>
  <!-- 3D Infinity Ribbon -->
  <path d="M 36 60 C 24 46 24 34 36 28 C 48 22 56 36 60 48 C 64 60 72 74 84 68 C 96 62 96 50 84 44 C 72 38 68 50 60 60" fill="none" stroke="url(#nexusGrad)" stroke-width="16" stroke-linecap="round" filter="drop-shadow(0 6px 8px rgba(0,0,0,0.3))"/>
  <path d="M 36 60 C 24 46 24 34 36 28 C 48 22 56 36 60 48" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="3" stroke-linecap="round"/>
</svg>`;

// 11. Apex Global 3D
const apex3D = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="100%" height="100%">
  <defs>
    <radialGradient id="apShadow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="apGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D"/><stop offset="50%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="44" ry="10" fill="url(#apShadow)"/>
  <!-- 3D Pyramid Delta Shield -->
  <polygon points="60,20 96,82 60,68" fill="url(#apGold)" filter="drop-shadow(0 6px 8px rgba(0,0,0,0.25))"/>
  <polygon points="60,20 24,82 60,68" fill="#B45309"/>
  <!-- Specular apex -->
  <line x1="60" y1="20" x2="60" y2="68" stroke="rgba(255,255,255,0.7)" stroke-width="2.5"/>
</svg>`;

// Write to all directories
const files = {
  'alsiztech_3d_emblem.svg': alsiztech3D,
  'google_cloud_3d.svg': googleCloud3D,
  'aws_3d.svg': aws3D,
  'flutter_3d.svg': flutter3D,
  'react_3d.svg': react3D,
  'postgresql_3d.svg': postgre3D,
  'python_3d.svg': python3D,
  'docker_3d.svg': docker3D,
  'nodejs_3d.svg': nodejs3D,
  'nexus_client_3d.svg': nexus3D,
  'apex_client_3d.svg': apex3D
};

dirs.forEach(d => {
  for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(path.join(d, filename), content, 'utf8');
  }
  console.log(`Saved ${Object.keys(files).length} 3D SVGs in: ${d}`);
});

