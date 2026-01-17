const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");
const https = require("https");

// Gemini API Key
const API_KEY = "AIzaSyDW1ENYcjmA6bK5ZlbCqL3UdhmAAsEvyoE";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(API_KEY);

// Output directory
const OUTPUT_DIR = path.join(__dirname, "../public/images/generated");

// Image generation tasks based on image-requirements.md
const imagePrompts = [
  // Section 3: Service Offering Icons
  {
    name: "phase1-ai-reality-check",
    prompt: "Minimalist icon illustration for AI validation assessment. Magnifying glass examining a circuit board or neural network pattern. Navy blue (#0A192F) and gold (#C9A962) only on white background. Clean line art style, no 3D effects, institutional and professional. Suggests due diligence and investigation. 400x400 pixels.",
    folder: "services"
  },
  {
    name: "phase2-proof-of-concept",
    prompt: "Minimalist icon illustration for prototype development. Blueprint or wireframe of an application interface emerging from abstract code. Navy blue (#0A192F) and gold (#C9A962) only on white background. Clean geometric style, suggests building and validation. Professional, institutional aesthetic. 400x400 pixels.",
    folder: "services"
  },
  {
    name: "full-engagement-bundle",
    prompt: "Minimalist icon illustration combining investigation and building. Two overlapping geometric shapes - a magnifying glass and a construction/build icon merging together. Navy blue (#0A192F) and gold (#C9A962) only on white background. Clean line art, professional, suggests comprehensive service. 400x400 pixels.",
    folder: "services"
  },

  // Section 4: Differentiator Icons
  {
    name: "deep-operator-bench",
    prompt: "Minimalist icon representing team expertise. Four abstract human figures or nodes connected by lines, suggesting network of experts. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Simple, geometric, professional. No realistic faces or photographs. 200x200 pixels.",
    folder: "differentiators"
  },
  {
    name: "deal-speed-delivery",
    prompt: "Minimalist icon representing speed and timing. Stopwatch or clock with motion lines suggesting rapid execution. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Clean geometric style, professional, institutional aesthetic. 200x200 pixels.",
    folder: "differentiators"
  },
  {
    name: "code-not-decks",
    prompt: "Minimalist icon showing code/terminal versus presentation slides. Code brackets { } or terminal window prominent, with crossed-out presentation icon subtle behind. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Suggests technical rigor over slideshows. 200x200 pixels.",
    folder: "differentiators"
  },
  {
    name: "radical-neutrality",
    prompt: "Minimalist icon representing objectivity and balance. Balanced scales or centered crosshair/target symbol. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Clean, geometric, suggests impartiality and fair assessment. Professional institutional style. 200x200 pixels.",
    folder: "differentiators"
  },

  // Section 5: Core Values Icons
  {
    name: "defensibility-first",
    prompt: "Minimalist icon representing defensibility/protection. Shield shape with checkmark or data pattern inside. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Clean geometric style, professional, suggests validated and secure findings. 150x150 pixels.",
    folder: "values"
  },
  {
    name: "speed-to-signal",
    prompt: "Minimalist icon representing finding signal in noise. Radio wave or signal icon cutting through scattered dots/noise. Navy blue (#0A192F) with gold (#C9A962) for the signal on white background. Clean, suggests clarity from chaos. 150x150 pixels.",
    folder: "values"
  },
  {
    name: "code-over-concepts",
    prompt: "Minimalist icon showing code superiority. Code brackets < > or { } with checkmark, versus abstract thought bubble crossed out. Navy blue (#0A192F) with gold (#C9A962) accent on white background. Suggests working software over theoretical concepts. 150x150 pixels.",
    folder: "values"
  },

  // Section 6: Four Disciplines Icons
  {
    name: "discipline-pe",
    prompt: "Minimalist icon representing private equity. Single triangular shape in navy blue (#0A192F), containing abstract upward trending chart or growth visualization. Clean, professional, institutional finance aesthetic. No dollar signs - use geometric growth representation. White background. 120x120 pixels.",
    folder: "disciplines"
  },
  {
    name: "discipline-ai",
    prompt: "Minimalist icon representing artificial intelligence. Single triangular shape in gold (#C9A962), containing neural network nodes or geometric brain pattern. Clean, technical, professional - not science-fiction. Suggests machine learning and data analysis. White background. 120x120 pixels.",
    folder: "disciplines"
  },
  {
    name: "discipline-ux",
    prompt: "Minimalist icon representing user experience design. Single triangular shape in light gray with navy outline, containing simple wireframe or interface elements. Clean, suggests product design and usability. Professional. White background. 120x120 pixels.",
    folder: "disciplines"
  },
  {
    name: "discipline-op",
    prompt: "Minimalist icon representing operations/process. Single triangular shape in navy blue (#0A192F), containing interlocking gears or workflow arrows. Clean geometric style, suggests efficient systems and processes. Professional. White background. 120x120 pixels.",
    folder: "disciplines"
  },

  // Section 7: Process Flow
  {
    name: "process-discovery",
    prompt: "Minimalist icon for Discovery phase. Magnifying glass icon in navy blue (#0A192F) with gold (#C9A962) accent. Clean line art style on white background. Suggests research and investigation. 100x100 pixels.",
    folder: "process"
  },
  {
    name: "process-build",
    prompt: "Minimalist icon for Build phase. Code brackets or construction/building blocks icon in navy blue (#0A192F) with gold (#C9A962) accent. Clean line art style on white background. Suggests development and creation. 100x100 pixels.",
    folder: "process"
  },
  {
    name: "process-deliver",
    prompt: "Minimalist icon for Deliver phase. Checkmark inside a document or package icon in navy blue (#0A192F) with gold (#C9A962) accent. Clean line art style on white background. Suggests completion and handoff. 100x100 pixels.",
    folder: "process"
  },

  // Hero backgrounds
  {
    name: "hero-homepage",
    prompt: "Abstract geometric background for PE advisory website. Pale platinum gray (#F1F5F9) base. Very subtle diamond/rhombus shapes scattered across the image at 5-10% opacity in navy blue (#0A192F). Some diamonds split into 4 triangular segments. Suggests data convergence and multi-disciplinary analysis. Clean, minimal, institutional aesthetic suitable for overlaying text. No photographs. 1920x1080 pixels.",
    folder: "heroes"
  },
  {
    name: "hero-services",
    prompt: "Abstract technical blueprint aesthetic. Dark navy background (#0A192F) with thin gold (#C9A962) and subtle grid lines forming architectural/schematic pattern. Subtle diamond shapes integrated into the grid design. Suggests precision engineering and due diligence process. Minimal, clean, no 3D effects. Suitable for PE/institutional audience. 1920x600 pixels wide horizontal format.",
    folder: "heroes"
  },
  {
    name: "hero-about",
    prompt: "Abstract geometric composition representing four disciplines converging. Dark navy (#0A192F) background. Four triangular shapes in navy, gold (#C9A962), white, and muted blue converging toward center to form a diamond pattern. Suggests collaboration and multi-disciplinary expertise merging into unified solution. Clean, institutional, minimal design. No photographs. 1920x600 pixels wide horizontal format.",
    folder: "heroes"
  },
  {
    name: "hero-contact",
    prompt: "Minimalist geometric pattern for contact page. Dark navy (#0A192F) background with subtle gold (#C9A962) horizontal lines suggesting communication/connection. Small diamond accent shapes scattered subtly. Clean, understated, professional. 1920x400 pixels wide horizontal banner format.",
    folder: "heroes"
  }
];

// Create directories
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Generate image using Gemini Imagen
async function generateImage(prompt, outputPath) {
  try {
    // Use Gemini 2.0 Flash for image generation (experimental)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["image", "text"],
      }
    });

    console.log(`Generating: ${path.basename(outputPath)}...`);

    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Check for image parts in the response
    if (response.candidates && response.candidates[0]) {
      const parts = response.candidates[0].content.parts;

      for (const part of parts) {
        if (part.inlineData && part.inlineData.mimeType.startsWith('image/')) {
          // Save the image
          const imageData = Buffer.from(part.inlineData.data, 'base64');
          const extension = part.inlineData.mimeType.split('/')[1] || 'png';
          const finalPath = outputPath.replace('.png', `.${extension}`);

          fs.writeFileSync(finalPath, imageData);
          console.log(`✓ Saved: ${finalPath}`);
          return true;
        }
      }
    }

    console.log(`✗ No image generated for: ${path.basename(outputPath)}`);
    return false;

  } catch (error) {
    console.error(`✗ Error generating ${path.basename(outputPath)}: ${error.message}`);
    return false;
  }
}

// Alternative: Use Imagen 3 via REST API
async function generateImageViaRest(prompt, outputPath) {
  return new Promise((resolve, reject) => {
    const requestBody = JSON.stringify({
      contents: [{
        parts: [{
          text: prompt
        }]
      }],
      generationConfig: {
        responseModalities: ["image", "text"]
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent?key=${API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);

          if (response.candidates && response.candidates[0]) {
            const parts = response.candidates[0].content.parts;

            for (const part of parts) {
              if (part.inlineData && part.inlineData.mimeType) {
                const imageData = Buffer.from(part.inlineData.data, 'base64');
                fs.writeFileSync(outputPath, imageData);
                console.log(`✓ Saved: ${outputPath}`);
                resolve(true);
                return;
              }
            }
          }

          if (response.error) {
            console.error(`✗ API Error: ${response.error.message}`);
          }
          resolve(false);

        } catch (e) {
          console.error(`✗ Parse error: ${e.message}`);
          resolve(false);
        }
      });
    });

    req.on('error', (e) => {
      console.error(`✗ Request error: ${e.message}`);
      resolve(false);
    });

    req.write(requestBody);
    req.end();
  });
}

// Main execution
async function main() {
  console.log("========================================");
  console.log("CoreFour Image Generator");
  console.log("Using Gemini API for image generation");
  console.log("========================================\n");

  // Ensure base output directory exists
  ensureDir(OUTPUT_DIR);

  // Create subdirectories
  const folders = [...new Set(imagePrompts.map(p => p.folder))];
  folders.forEach(folder => {
    ensureDir(path.join(OUTPUT_DIR, folder));
  });

  console.log(`\nGenerating ${imagePrompts.length} images...\n`);

  let successCount = 0;
  let failCount = 0;

  for (const item of imagePrompts) {
    const outputPath = path.join(OUTPUT_DIR, item.folder, `${item.name}.png`);

    // Add delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000));

    const success = await generateImageViaRest(item.prompt, outputPath);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  console.log("\n========================================");
  console.log(`Complete! Generated: ${successCount}/${imagePrompts.length}`);
  console.log(`Failed: ${failCount}`);
  console.log("========================================");

  if (successCount > 0) {
    console.log(`\nImages saved to: ${OUTPUT_DIR}`);
    console.log("\nRemember to REVOKE your API key now!");
  }
}

main().catch(console.error);
