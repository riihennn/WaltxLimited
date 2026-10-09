const fs = require('fs');
const path = require('path');

const pages = {
  'src/app/about/page.tsx': { name: "About WaltX", item: "https://waltx.ae/about" },
  'src/app/services/page.tsx': { name: "WaltX Services", item: "https://waltx.ae/services" },
  'src/app/products/page.tsx': { name: "WaltX Products", item: "https://waltx.ae/products" },
  'src/app/careers/page.tsx': { name: "Careers at WaltX", item: "https://waltx.ae/careers" },
  'src/app/contact/page.tsx': { name: "Contact WaltX", item: "https://waltx.ae/contact" },
  'src/app/privacy/page.tsx': { name: "Privacy Policy", item: "https://waltx.ae/privacy" },
  'src/app/terms/page.tsx': { name: "Terms & Conditions", item: "https://waltx.ae/terms" },
  'src/app/cookies/page.tsx': { name: "Cookie Policy", item: "https://waltx.ae/cookies" },
};

for (const [file, data] of Object.entries(pages)) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('BreadcrumbsJsonLd')) {
      content = content.replace(
        'import { Navbar }', 
        `import { BreadcrumbsJsonLd } from "@/components/seo/BreadcrumbsJsonLd";\nimport { Navbar }`
      );
      
      content = content.replace(
        '<Navbar />', 
        `<Navbar />\n      <BreadcrumbsJsonLd items={[{ name: "${data.name}", item: "${data.item}" }]} />`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Added breadcrumbs to ${file}`);
    }
  }
}
