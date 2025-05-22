const tools = [
    { name: "Nmap", acronym: "Network Mapper", description: "Ağ keşfi ve port tarama için güçlü bir araçtır." },
    { name: "Wireshark", acronym: "", description: "Ağ trafiğini analiz etmek için kullanılan paket analizörüdür." },
    { name: "Burp Suite", acronym: "", description: "Web uygulamalarını test etmek için kullanılır." },
    { name: "Metasploit", acronym: "", description: "Exploit geliştirme ve güvenlik açıklarını test etmek için framework." },
    { name: "John the Ripper", acronym: "", description: "Parola kırma aracı." },
    { name: "Hydra", acronym: "", description: "Brute-force parola deneme aracı." },
    { name: "Aircrack-ng", acronym: "", description: "Kablosuz ağlar için şifre kırma araçları seti." },
    { name: "Nikto", acronym: "", description: "Web sunucularını açıklar için tarayan bir araç." },
    { name: "SQLmap", acronym: "", description: "Otomatik SQL injection test aracı." },
    { name: "Autopsy", acronym: "", description: "Dijital adli bilişim analiz aracı." },
    { name: "Maltego", acronym: "", description: "Sosyal mühendislik ve açık kaynak istihbarat (OSINT) aracı." },
    { name: "OpenVAS", acronym: "", description: "Açık kaynak güvenlik açığı tarayıcısı." },
    { name: "ZAP", acronym: "Zed Attack Proxy", description: "OWASP tarafından geliştirilen web uygulama güvenlik aracı." },
    { name: "Recon-ng", acronym: "", description: "OSINT toplama framework’ü." },
    { name: "TheHarvester", acronym: "", description: "E-posta, domain ve kullanıcı adı bilgisi toplama aracı." },
    { name: "Social-Engineer Toolkit", acronym: "SET", description: "Sosyal mühendislik saldırı simülasyon aracı." },
    { name: "Netcat", acronym: "nc", description: "Ağ bağlantı testi ve veri transferi için temel bir araç." },
    { name: "Kismet", acronym: "", description: "Kablosuz ağlar için algılama ve analiz aracı." },
    { name: "Tcpdump", acronym: "", description: "Ağ trafiğini komut satırında analiz eder." },
    { name: "Ettercap", acronym: "", description: "ARP zehirleme ve ağ ortası saldırıları için kullanılır." },
    { name: "Yersinia", acronym: "", description: "Layer 2 protokol zayıflıklarını test eder." },
    { name: "OWASP Dependency-Check", acronym: "", description: "Yazılım bileşenlerindeki güvenlik açıklarını tespit eder." },
    { name: "Binwalk", acronym: "", description: "Firmware analiz aracı." },
    { name: "Volatility", acronym: "", description: "RAM bellek dökümü analiz aracı." },
    { name: "Ghidra", acronym: "", description: "Reverse engineering için NSA tarafından geliştirilmiş araç." },
    { name: "Radare2", acronym: "", description: "Binary analiz ve debugging için gelişmiş bir araç." },
    { name: "YARA", acronym: "", description: "Zararlı yazılım tespiti için desen tanımlama aracı." },
    { name: "Snort", acronym: "", description: "Ağ saldırı tespiti ve önleme sistemi." },
    { name: "Suricata", acronym: "", description: "IDS/IPS ve ağ güvenlik monitörü." },
    { name: "ClamAV", acronym: "", description: "Açık kaynak antivirüs yazılımı." },
    { name: "Chkrootkit", acronym: "", description: "Linux sistemlerde rootkit tespiti için kullanılır." },
    { name: "Rkhunter", acronym: "", description: "Rootkit ve arka kapı tespiti için araç." },
    { name: "Fimap", acronym: "", description: "LFI/RFI açıklarını bulmaya yardımcı araç." },
    { name: "BeEF", acronym: "", description: "Browser Exploitation Framework." },
    { name: "Hashcat", acronym: "", description: "GPU destekli parola kırma aracı." },
    { name: "Dirb", acronym: "", description: "Web dizin tarayıcı." },
    { name: "Gobuster", acronym: "", description: "URL brute-force ve dizin tarayıcı." },
    { name: "Amass", acronym: "", description: "DNS keşfi ve haritalama aracı." },
    { name: "Dnsenum", acronym: "", description: "DNS bilgisi toplama aracı." },
    { name: "Sublist3r", acronym: "", description: "Alt alan adı keşfi." },
    { name: "SSLScan", acronym: "", description: "SSL yapılandırmasını analiz eder." },
    { name: "Nikto", acronym: "", description: "Web sunucusu tarayıcısı." },
    { name: "Fierce", acronym: "", description: "DNS keşif aracı." },
    { name: "Enum4linux", acronym: "", description: "Windows ağları için bilgi toplama." },
    { name: "Responder", acronym: "", description: "SMB/NetBIOS zehirleme aracı." },
    { name: "MSFvenom", acronym: "", description: "Payload üretici." },
    { name: "PwDump", acronym: "", description: "Windows parola hashlerini çıkarır." },
    { name: "PsExec", acronym: "", description: "Uzaktan komut yürütme." },
    { name: "Unicornscan", acronym: "", description: "Ağ tarama ve bilgi toplama." }
  ];
  
  const showToolsBtn = document.getElementById("showToolsBtn");
  const toolsContainer = document.getElementById("toolsContainer");
  const searchInput = document.getElementById("searchInput");
  
  function renderTools(list) {
    toolsContainer.innerHTML = "";
    if (list.length === 0) {
      toolsContainer.innerHTML = "<p>Aradığınız kriterlere uygun araç bulunamadı.</p>";
      return;
    }
    list.forEach(tool => {
      const card = document.createElement("div");
      card.className = "tool-card";
      card.innerHTML = `
        <div class="tool-name">${tool.name}</div>
        <div class="tool-acronym">${tool.acronym}</div>
        <div class="tool-desc">${tool.description}</div>
      `;
      toolsContainer.appendChild(card);
    });
  }
  
  showToolsBtn.addEventListener("click", () => {
    renderTools(tools);
    searchInput.style.display = "block";
    showToolsBtn.style.display = "none";
  });
  
  searchInput.addEventListener("input", e => {
    const filtered = tools.filter(t =>
      t.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      t.acronym.toLowerCase().includes(e.target.value.toLowerCase()) ||
      t.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderTools(filtered);
  });