const fs = require('fs');
const path = require('path');

const seoData = {
  'src/app/about/page.tsx': {
    title: "About WaltX | Technology & Digital Products",
    description: "Learn about WaltX, a technology company building digital products, platforms, and experiences for a connected world.",
    canonical: "https://waltx.ae/about"
  },
  'src/app/services/page.tsx': {
    title: "WaltX Services | Product Engineering & Digital Experiences",
    description: "Explore WaltX services across product engineering, digital experiences, platforms, and technology.",
    canonical: "https://waltx.ae/services"
  },
  'src/app/products/page.tsx': {
    title: "WaltX Products | Digital Products & Experiences",
    description: "Explore digital products and experiences built by WaltX across events, dining, travel, lifestyle, and more.",
    canonical: "https://waltx.ae/products"
  },
  'src/app/careers/page.tsx': {
    title: "Careers at WaltX | Build What's Next",
    description: "Explore opportunities at WaltX and build digital products, platforms, and experiences for what’s next.",
    canonical: "https://waltx.ae/careers"
  },
  'src/app/contact/page.tsx': {
    title: "Contact WaltX | Let's Build What's Next",
    description: "Get in touch with WaltX about digital products, platforms, technology, and new opportunities.",
    canonical: "https://waltx.ae/contact"
  },
  'src/app/privacy/page.tsx': {
    title: "Privacy Policy | WaltX",
    canonical: "https://waltx.ae/privacy"
  },
  'src/app/terms/page.tsx': {
    title: "Terms & Conditions | WaltX",
    canonical: "https://waltx.ae/terms"
  },
  'src/app/cookies/page.tsx': {
    title: "Cookie Policy | WaltX",
    canonical: "https://waltx.ae/cookies"
  }
};

for (const [file, data] of Object.entries(seoData)) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const newMetadata = `export const metadata = {
  title: "${data.title}",${data.description ? `\n  description: "${data.description}",` : ''}
  alternates: { canonical: "${data.canonical}" },
};`;
    // Replace the existing metadata block
    content = content.replace(/export const metadata = \{[\s\S]*?\};\n?/, newMetadata + '\n\n');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}

// Now handle page.tsx manually
const homePath = path.join(process.cwd(), 'src/app/page.tsx');
let homeContent = fs.readFileSync(homePath, 'utf8');
if (!homeContent.includes('export const metadata')) {
  const homeMeta = `export const metadata = {
  title: "WaltX | Digital Products, Platforms & Experiences",
  description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
  alternates: { canonical: "https://waltx.ae/" },
};

`;
  // Insert right before export default function
  homeContent = homeContent.replace('export default function Home', homeMeta + 'export default function Home');
  fs.writeFileSync(homePath, homeContent);
  console.log('Updated src/app/page.tsx');
}
