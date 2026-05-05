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
      name: "VulnScanner",
      description: "Automated vulnerability scanner for web applications",
      url: "",
      github: "https://github.com/403-user/vuln-scanner",
      tags: ["Python", "Security", "Automation"]
    },
    {
      name: "BugBountyTools",
      description: "Custom tools for bug bounty hunting and reconnaissance",
      url: "",
      github: "https://github.com/403-user/bugbounty-tools",
      tags: ["Python", "Burp Suite", "Recon"]
    }
  ],

  certs: [
    { name: "OSCP", issuer: "Offensive Security", date: "2024-01", url: "" },
    { name: "CEH", issuer: "EC-Council", date: "2023-06", url: "" },
    { name: "CompTIA Security+", issuer: "CompTIA", date: "2023-03", url: "" }
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
    linkedin: "https://www.linkedin.com/in/shlok-tiwari-rootshell"
  }
};