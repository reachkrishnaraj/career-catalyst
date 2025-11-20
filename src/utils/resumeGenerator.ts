export const generateResumePDF = () => {
  // Create a simple text-based resume that can be saved
  const resumeContent = `
KRISHNA RAJ
Austin, Texas
Email: reach.krishnaraj@gmail.com | Phone: +1 (408) 348-6083
LinkedIn: linkedin.com/in/krishnaraj | Blog: medium.com/@krishnaraj

PROFESSIONAL SUMMARY
Impact-driven, passionate, and seasoned hands-on Full Stack Engineering Leader with expertise in 
Payments & Billing, Marketplace, eCommerce, Healthcare, and Retail domains with diverse and 
progressive industry experience spanning 19+ years.

TECHNICAL SKILLS
Languages & Frameworks: Java, Spring Boot, React, NextJS, Python, TypeScript, JavaScript
Cloud & Infrastructure: AWS (EC2, ECS, Lambda, DynamoDB, RDS, S3), Kubernetes, Docker
Databases: MySQL, DynamoDB, Cassandra, PostgreSQL, MongoDB, Redis
Payment Systems: Stripe, PayPal, Authorize.net, ApplePay, GooglePay, Square
Compliance: HIPAA, PCI-DSS, SOC 2

PROFESSIONAL EXPERIENCE

Chief Technology Officer (CTO) / Architect
TBD Health | Austin, TX | Apr 2022 - Jul 2024
• Built Entire Tech Stack from Ground Up: Led complete technology transformation post-seed funding
• Platform Migration: Architected migration from Shopify to HIPAA-compliant eCommerce platform
• EMR System: Developed in-house Electronic Medical Records system with ReactJS
• AWS Infrastructure: Implemented complete cloud infrastructure with HIPAA compliance
• Payment Integration: Integrated multiple payment gateways and subscription management
• Automation & AI: Built contactless check-in flow, automated identity verification using AWS Rekognition

Consultant Architect
Paysafe (via Altimetrik) | Jul 2024 - Sep 2024
• Led platform modernization for major Canadian payment gateway
• Architectural Leadership: Designed modernization strategy for legacy payment processing systems
• Scalability Solutions: Improved platform reliability for high-volume transaction processing
• Compliance: Ensured PCI-DSS compliance and security standards

Staff Software Engineer
Turo | San Francisco, CA | Oct 2018 - Mar 2020
• Protected Millions of Users & Expanded Revenue Streams
• Account Takeover Prevention: Designed comprehensive ATO prevention system with 2FA
• Revenue Expansion: Led initiative to expand rentals to 18-20 year old drivers
• Search Performance: Improved Apache Solr vehicle search performance by 30%
• Business Rules Engine: Architected Java Easy Rules-based engine for pricing logic

Senior Software Engineer
Netflix | Los Gatos, CA | Mar 2016 - May 2018
• Built Systems Processing 150M+ Monthly Transactions
• Payment Reconciliation System: Built single source of truth for 150M+ monthly orders
• Dynamic Processor Failover: Architected intelligent routing logic with health monitoring
• Big Data Pipeline: Created ETL workflows, Kibana dashboards, Tableau visualizations
• Global Scale: Processed payments across multiple processors and regions

Lead Engineer
Walmart eCommerce Labs | San Francisco, CA | Jun 2013 - Mar 2016
• Led development of critical eCommerce platform features serving millions of daily customers
• Architected scalable fulfillment system integrating with supply chain operations
• Optimized catalog management and search functionality

Software Engineer
PayPal | San Jose, CA | Aug 2006 - Nov 2011
• Foundation in Payments & Fintech: Established deep expertise in payments architecture
• Service API Automation: Built comprehensive test automation frameworks for payment APIs
• Core Payments: Contributed to payments platform refactoring and migration initiatives
• Became Subject Matter Expert (SME) in payments processing, transaction lifecycle, and PCI compliance

Software Engineer
Various Companies | India & USA | 2003 - 2006
• Started career at HCL Technologies and HTC Global Services
• Built foundation in Java, J2EE, and web technologies

EDUCATION
Bachelor of Engineering - Electrical and Electronics
University of Madras | Graduated: 2003

CERTIFICATIONS
• AWS Certified Solutions Architect
• Certified Spring Professional
• HIPAA Compliance Training
• PCI DSS Compliance
  `;

  // Create a blob with the resume content
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Krishna_Raj_Resume.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
