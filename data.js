const siteData = {
  title: "Shlok Tiwari",
  description: "Cybersecurity Researcher & Bug Bounty Hunter",
  hero: {
    tagline: "Breaking systems to make them safer",
    subtitle: "Offensive Security | Penetration Testing | Bug Bounty"
  },
  about: `Cybersecurity researcher and bug bounty hunter with hands-on experience in OSCP-style penetration testing, API security testing, and real-world web exploitation. Actively solving labs on Hack The Box and practicing advanced attack techniques including Active Directory enumeration, privilege escalation, and post-exploitation.

Skilled in identifying vulnerabilities such as XSS, SQL Injection, IDOR, SSRF, and authentication flaws across modern web and API architectures. Experienced with tools like Burp Suite, Nmap, Metasploit, SQLMap, FFUF, BloodHound, and Impacket, along with strong proficiency in Kali Linux environments.

Recognized for responsible disclosure and continuously engaged in bug bounty programs, focusing on uncovering high-impact security issues. Passionate about offensive security, automation, and building custom tools to enhance vulnerability discovery and exploitation workflows.`,

  apps: [
    {
      name: "AutoNet",
      description: "Modular network vulnerability scanner. Privilege-aware async scanning engine with service enumeration via nmap, CVE matching via Vulners API, and multi-stage Docker deployment.",
      url: "",
      github: "https://github.com/403-user/autonet",
      tags: ["Python", "asyncio", "Nmap", "Docker", "Security"]
    },
    {
      name: "SUTRA-X",
      description: "AI-driven autonomous cybersecurity console powered by Google Gemini. Orchestrates Nmap and Metasploit through an interactive REPL with zero-config OAuth and real-time mission monitoring.",
      url: "",
      github: "https://github.com/403-user/sutra-x",
      tags: ["TypeScript", "Node.js", "Gemini AI", "Nmap", "Metasploit"]
    },
    {
      name: "AutoTest",
      description: "Dual-purpose security tool documentation repository with 215+ tools, capabilities index, MITRE ATT&CK mapping, artifact type indexing, and LLM-ready corpus for automated MCP execution.",
      url: "https://intro-shlok.github.io/AutoTest",
      github: "https://github.com/Intro-Shlok/AutoTest",
      tags: ["Astro", "TypeScript", "MCP", "Documentation", "Security"]
    }
  ],

  certs: [
    { name: "OSCP+", issuer: "Offensive Security", date: "2026-01", url: "https://credentials.offsec.com/561893d2-aba0-49a4-8f4c-17b087ece722", badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/172918372" },
    { name: "OSCP", issuer: "Offensive Security", date: "2026-01", url: "https://credentials.offsec.com/dca46679-2629-4e75-9d1e-e180802d0a7c", badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/172915099" },
    { name: "ISO/IEC 27001 Information Security Associate\u2122", issuer: "SkillFront", date: "", url: "https://www.skillfront.com/Badges/66762573664675", badge: "" },
    { name: "Introduction to the Threat Landscape 3.0", issuer: "Fortinet", date: "", url: "https://www.credly.com/badges/3df266ff-fda2-478f-85cd-b4f34b9e5e84/public_url", badge: "" },
    { name: "Fortinet Certified Fundamentals Cybersecurity", issuer: "Fortinet", date: "", url: "https://www.credly.com/badges/8e6fdcc5-751a-4060-a9dc-9668e03c5a06/public_url", badge: "" },
    { name: "API Penetration Testing (12 hours)", issuer: "APIsec University", date: "", url: "https://www.credly.com/badges/35a23e04-3b42-4f95-ab47-de98dec896e9/public_url", badge: "" },
  ],

  skills: [
    { category: "Penetration Testing", items: ["Web App Testing", "API Security", "Network Penetration", "Active Directory", "Privilege Escalation", "Post-Exploitation"] },
    { category: "Bug Bounty", items: ["XSS", "SQL Injection", "IDOR", "SSRF", "Authentication Flaws", "Authorization Issues"] },
    { category: "Tools", items: ["Burp Suite", "Nmap", "Metasploit", "SQLMap", "FFUF", "BloodHound", "Impacket"] },
    { category: "Languages", items: ["Python", "Bash", "PowerShell", "JavaScript", "SQL"] },
    { category: "Platforms", items: ["Kali Linux", "Parrot OS", "Windows Server", "Linux", "Docker"] }
  ],

  links: {
    github: "https://github.com/403-user",
    linkedin: "https://www.linkedin.com/in/intro-shlok-tiwari"
  }
};