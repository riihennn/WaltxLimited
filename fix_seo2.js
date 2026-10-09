const fs = require('fs');
const path = require('path');

const seoData = {
  'src/app/page.tsx': {
    title: "WaltX | Digital Products, Platforms & Experiences",
    description: "WaltX is a technology company building digital products, platforms, and experiences that connect people, businesses, and opportunities.",
    canonical: "https://waltx.ae/"
  },
  'src/app/about/page.tsx': {
    title: "About WaltX | Building What's Next",
    description: "Learn about WaltX, a technology company building digital products, platforms, and experiences.",
    canonical: "https://waltx.ae/about"
  },
  'src/app/services/page.tsx': {
    title: "WaltX Services | Product Engineering & Digital Experiences",
    description: "Explore WaltX services across product engineering, digital experiences, platforms, and technology.",
    canonical: "https://waltx.ae/services"
  },
  'src/app/products/page.tsx': {
    title: "WaltX Products | Digital Products & Experiences",
    description: "Explore digital products built by WaltX across events, dining, travel, lifestyle, and experiences.",
    canonical: "https://waltx.ae/products"
  },
  'src/app/careers/page.tsx': {
    title: "Careers at WaltX | Build What's Next",
    description: "Explore career opportunities at WaltX and contribute to digital products, platforms, and experiences.",
    canonical: "https://waltx.ae/careers"
  },
  'src/app/contact/page.tsx': {
    title: "Contact WaltX | Let's Build What's Next",
    description: "Contact WaltX to discuss digital products, technology, product engineering, and potential collaborations.",
    canonical: "https://waltx.ae/contact"
  },
  'src/app/privacy/page.tsx': {
    title: "Privacy Policy | WaltX",
    description: "Privacy Policy for WaltX.",
    canonical: "https://waltx.ae/privacy"
  },
  'src/app/terms/page.tsx': {
    title: "Terms & Conditions | WaltX",
    description: "Terms and Conditions for WaltX.",
    canonical: "https://waltx.ae/terms"
  },
  'src/app/cookies/page.tsx': {
    title: "Cookie Policy | WaltX",
    description: "Cookie Policy for WaltX.",
    canonical: "https://waltx.ae/cookies"
  }
};

for (const [file, data] of Object.entries(seoData)) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Create the comprehensive metadata block with OpenGraph and Twitter
    const metaBlock = `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${data.title}",
  ${data.description ? `description: "${data.description}",` : ''}
  alternates: {
    canonical: "${data.canonical}",
  },
  openGraph: {
    title: "${data.title}",
    ${data.description ? `description: "${data.description}",` : ''}
    url: "${data.canonical}",
  },
  twitter: {
    title: "${data.title}",
    ${data.description ? `description: "${data.description}",` : ''}
  },
};`;

    if (file === 'src/app/page.tsx') {
      content = content.replace(/export const metadata = \{[\s\S]*?\};\n\n/g, ''); 
      content = content.replace(/export const metadata: Metadata = \{[\s\S]*?\};\n\n/g, ''); 
      
      // We will replace the metadata directly
      const regex = /export const metadata: Metadata = \{[^]*?\};\n*/;
      if (regex.test(content)) {
          content = content.replace(regex, metaBlock.replace('import { Metadata } from "next";\n\n', '') + '\n\n');
      } else {
          content = content.replace('export default function', metaBlock.replace('import { Metadata } from "next";\n\n', '') + '\n\nexport default function');
      }
    } else {
      content = content.replace(/export const metadata: Metadata = \{[^]*?\};\n*/g, ''); 
      content = content.replace(/export const metadata = \{[^]*?\};\n*/g, ''); 
      
      const metaBlockNoImport = metaBlock.replace('import { Metadata } from "next";\n\n', '');
      content = content.replace(/export default function/g, metaBlockNoImport + '\n\nexport default function');
    }
    
    // Breadcrumb Logic for non-home pages
    if (file !== 'src/app/page.tsx') {
       const routeName = path.basename(path.dirname(file)); // 'about', 'services', etc.
       const title = data.title.split(' |')[0]; // Simple title for breadcrumb
       
       const breadcrumbSchema = {
         "@context": "https://schema.org",
         "@type": "BreadcrumbList",
         "itemListElement": [
           {
             "@type": "ListItem",
             "position": 1,
             "name": "Home",
             "item": "https://waltx.ae"
           },
           {
             "@type": "ListItem",
             "position": 2,
             "name": title,
             "item": data.canonical
           }
         ]
       };
       
       const scriptTag = `<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(breadcrumbSchema)}) }}
      />`;
      
      // Inject script tag right inside <main> or nearest container if possible
      // Actually wait, let's inject it into a React Fragment or div inside the component
      // Instead of doing it with regex which might be brittle, let's just make sure the page exports correctly.
      // Wait, we can add it to layout.tsx globally dynamically based on route? 
      // No, we can just insert it in the component if we can. Or we can just skip it for now and do it with tool.
    }

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
}
