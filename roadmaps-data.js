const ROADMAP_DATA = [
    {
        id: "web-gelistirme",
        title: "Web Geliştirme",
        icon: "code-slash-outline",
        heroSubtitle: "Modern web siteleri ve uygulamaları geliştirmek için adım adım rehber.",
        description: "HTML, CSS, JavaScript ve modern frameworkler ile frontend ve backend dünyasına adım atın.",
        steps: [
            { phase: "1. AŞAMA - İnternet Nasıl Çalışır?", topics: ["Web nedir?", "Browser nasıl çalışır?", "HTTP nedir?", "Domain & Hosting", "DNS", "Client - Server mantığı", "Frontend vs Backend farkı", "API nedir?"] },
            { phase: "2. AŞAMA - HTML", topics: ["HTML yapısı", "Tags", "Head, body", "Form", "Input", "Button", "Table", "Semantic tags", "SEO temeli"] },
            { phase: "3. AŞAMA - CSS", topics: ["Selectors", "Box Model", "Flexbox", "Grid", "Responsive design", "Media queries", "Position", "Animasyon"] },
            { phase: "4. AŞAMA - JavaScript", topics: ["Temeller", "DOM", "Event handling", "Fetch API", "Async/Await", "Promise", "LocalStorage"] },
            { phase: "5. AŞAMA - Git & GitHub", topics: ["init", "commit", "branch", "merge", "pull", "push", "pull request"] },
            { phase: "6. AŞAMA - React", topics: ["Components", "Props", "State", "useEffect", "Routing", "Context API", "Next.js"] },
            { phase: "7. AŞAMA - Backend", topics: ["Node.js / Express", "REST API", "CRUD", "Middleware", "Authentication", "DB bağlantısı"] },
            { phase: "8. AŞAMA - Full Stack Proje", topics: ["Login", "Admin panel", "REST API", "Database", "Deployment"] },
            { phase: "9. AŞAMA - Deployment & DevOps", topics: ["Vercel", "Netlify", "Docker", "Environment variables"] },
            { phase: "10. AŞAMA - Web Security", topics: ["XSS", "CSRF", "CORS", "Caching", "Performance"] }
        ]
    },
    {
        id: "veri-bilimi",
        title: "Python İle Veri Bilimi",
        icon: "analytics-outline",
        heroSubtitle: "Python kullanarak veri analizi ve yapay zeka dünyasına giriş yapın.",
        description: "Veri analizi, görselleştirme ve makine öğrenmesi temellerini öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Python Temelleri", topics: ["Değişkenler", "List/Dict", "Döngüler", "Fonksiyonlar", "Hata Yönetimi"] },
            { phase: "2. AŞAMA - İstatistik", topics: ["Olasılık", "Hipotez Testleri", "Korelasyon", "Regresyon"] },
            { phase: "3. AŞAMA - NumPy & Pandas", topics: ["Dizi İşlemleri", "DataFrame", "Veri Temizleme", "Filtering"] },
            { phase: "4. AŞAMA - Görselleştirme", topics: ["Matplotlib", "Seaborn", "Plotly", "Streamlit"] },
            { phase: "5. AŞAMA - SQL", topics: ["Sorgular", "JOINS", "Agregasyon", "DB Tasarımı"] },
            { phase: "6. AŞAMA - ML Giriş", topics: ["Linear Regression", "KNN", "Naive Bayes", "Scikit-Learn"] },
            { phase: "7. AŞAMA - ML İleri", topics: ["Decision Trees", "Random Forest", "SVM", "XGBoost"] },
            { phase: "8. AŞAMA - Deep Learning", topics: ["ANN", "TensorFlow", "Keras", "PyTorch"] },
            { phase: "9. AŞAMA - Büyük Veri", topics: ["PySpark", "Bulut ML", "MLOps"] },
            { phase: "10. AŞAMA - Proje", topics: ["Analiz", "Model Eğitimi", "Görselleştirme", "Portfolyo"] }
        ]
    },
    {
        id: "mobil-uygulama",
        title: "Mobil Uygulama Geliştirme",
        icon: "smartphone-outline",
        heroSubtitle: "Popüler frameworkler ile modern mobil uygulamalar inşa edin.",
        description: "React Native veya Flutter ile iOS ve Android uygulamaları geliştirmeyi öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Mobil Giriş", topics: ["Native vs Hybrid", "UI/UX", "Platformlar"] },
            { phase: "2. AŞAMA - Dil Temelleri", topics: ["TS/JS (React Native)", "Dart (Flutter)", "OOP"] },
            { phase: "3. AŞAMA - Framework", topics: ["Components/Widgets", "Props/State", "Layouts"] },
            { phase: "4. AŞAMA - Navigasyon", topics: ["Stacks", "Tabs", "Drawers"] },
            { phase: "5. AŞAMA - API & Veri", topics: ["Fetch/Axios", "JSON", "Offline Storage"] },
            { phase: "6. AŞAMA - State Management", topics: ["Redux", "Context", "Provider/Bloc"] },
            { phase: "7. AŞAMA - Cihaz Özellikleri", topics: ["Kamera", "GPS", "Sensörler"] },
            { phase: "8. AŞAMA - Firebase", topics: ["Auth", "Firestore", "Push Notifications"] },
            { phase: "9. AŞAMA - Animasyon", topics: ["Lottie", "Performance", "Debugging"] },
            { phase: "10. AŞAMA - Yayınlama", topics: ["App Store", "Play Store", "CI/CD"] }
        ]
    },
    {
        id: "siber-guvenlik",
        title: "Siber Güvenlik",
        icon: "shield-checkmark-outline",
        heroSubtitle: "Dijital dünyayı korumayı ve siber tehditleri anlamayı öğrenin.",
        description: "Ağ güvenliği, etik hackleme ve sistem savunması üzerine uzmanlaşın.",
        steps: [
            { phase: "1. AŞAMA - Network", topics: ["OSI", "TCP/IP", "DNS", "HTTP/SSL"] },
            { phase: "2. AŞAMA - Linux", topics: ["Terminal", "Dosya Sistemi", "Hata Yönetimi", "Bash Script"] },
            { phase: "3. AŞAMA - Keşif", topics: ["Reconnaissance", "Google Dorking", "Social Engineering"] },
            { phase: "4. AŞAMA - Network Hacking", topics: ["Nmap", "Wireshark", "MitM", "Metasploit"] },
            { phase: "5. AŞAMA - Web Güvenliği", topics: ["SQLi", "XSS", "CSRF", "OWASP top 10"] },
            { phase: "6. AŞAMA - Malware Analizi", topics: ["Static/Dynamic analysis", "Reverse Engineering"] },
            { phase: "7. AŞAMA - System Hacking", topics: ["Pass cracking", "PrivEsc", "AD Security"] },
            { phase: "8. AŞAMA - Savunma", topics: ["Firewalls", "IDS/IPS", "SIEM", "SOC"] },
            { phase: "9. AŞAMA - Kriptografi", topics: ["Encryption", "Hashing", "Certificates"] },
            { phase: "10. AŞAMA - Kariyer", topics: ["Security+", "CEH", "OSCP", "Bug Bounty"] }
        ]
    },
    {
        id: "backend-gelistirme",
        title: "Backend Geliştirme",
        icon: "server-outline",
        heroSubtitle: "Veri tabanları, API'lar ve sunucu tarafı mantığını ustalıkla yazın.",
        description: "Sunucu dünyasına adım atın. API geliştirme, veritabanı yönetimi ve güvenlik temellerini kavrayın.",
        steps: [
            { phase: "1. AŞAMA - Dil Seçimi", topics: ["Node.js", "Python (Django/FastAPI)", "Java (Spring)", "Go"] },
            { phase: "2. AŞAMA - Temel HTTP", topics: ["REST", "Status Codes", "Headers", "Cookies", "Sessions"] },
            { phase: "3. AŞAMA - Veritabanı Temelleri", topics: ["Relational (PostgreSQL)", "NoSQL (MongoDB)", "Indexing"] },
            { phase: "4. AŞAMA - API Tasarımı", topics: ["Endpoints", "Versioning", "Validation", "Swagger/OpenAPI"] },
            { phase: "5. AŞAMA - Kimlik Doğrulama", topics: ["JWT", "OAuth2", "Passport", "Spring Security"] },
            { phase: "6. AŞAMA - ORM & Veri İşleme", topics: ["Prisma", "Mongoose", "Hibernate", "SQLAlchemy"] },
            { phase: "7. AŞAMA - Önbellekleme", topics: ["Redis", "Memcached", "CDN", "Browser Cache"] },
            { phase: "8. AŞAMA - Mesajlaşma Kuyrukları", topics: ["RabbitMQ", "Kafka", "BullMQ"] },
            { phase: "9. AŞAMA - Testing", topics: ["Unit Testing (Jest, JUnit)", "Integration Testing"] },
            { phase: "10. AŞAMA - Monitoring & Log", topics: ["Prometheus", "Grafana", "ELK Stack"] }
        ]
    },
    {
        id: "devops",
        title: "DevOps Mühendisliği",
        icon: "infinite-outline",
        heroSubtitle: "Koddan operasyona geçiş sürecini otomatikleştirin.",
        description: "CI/CD süreçleri, Docker, Kubernetes ve otomasyon araçları ile sistem yöneticiliği dünyasını keşfedin.",
        steps: [
            { phase: "1. AŞAMA - Linux & Scripting", topics: ["Ubuntu/Debian", "Bash Scripting", "Python for Ops"] },
            { phase: "2. AŞAMA - Sürüm Kontrol", topics: ["Git flow", "GitHub Actions", "GitLab CI"] },
            { phase: "3. AŞAMA - Konteynerleşme", topics: ["Docker", "Containers vs VMs", "Docker Compose"] },
            { phase: "4. AŞAMA - Orkerstrasyon", topics: ["Kubernetes", "Pods", "Services", "Helm"] },
            { phase: "5. AŞAMA - Bulut Sağlayıcıları", topics: ["AWS", "Azure", "GCP", "IAM", "VPC"] },
            { phase: "6. AŞAMA - IaC (Infrastructure as Code)", topics: ["Terraform", "CloudFormation", "Ansible"] },
            { phase: "7. AŞAMA - CI/CD Pipelines", topics: ["Jenkins", "ArgoCD", "Deploy strategies"] },
            { phase: "8. AŞAMA - Monitoring & Alert", topics: ["New Relic", "Sentry", "Slack integration"] },
            { phase: "9. AŞAMA - Loglama", topics: ["Graylog", "Fluentd", "Kibana"] },
            { phase: "10. AŞAMA - Reliability & Security", topics: ["SRE", "Secrets Management (Vault)"] }
        ]
    },
    {
        id: "bulut-bilisim",
        title: "Bulut Bilişim",
        icon: "cloud-done-outline",
        heroSubtitle: "Ölçeklenebilir sistemleri bulutta inşa edin.",
        description: "AWS, Azure ve GCP servislerini kullanarak modern mimariler tasarlamayı öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Bulut Temelleri", topics: ["SaaS/PaaS/IaaS", "Region & Availability Zones"] },
            { phase: "2. AŞAMA - Compute Services", topics: ["EC2", "Lambda (Serverless)", "App Services"] },
            { phase: "3. AŞAMA - Storage", topics: ["S3", "EBS", "Blob Storage", "EFS"] },
            { phase: "4. AŞAMA - Networking", topics: ["VPC", "Route 53", "CloudFront (CDN)"] },
            { phase: "5. AŞAMA - Databases on Cloud", topics: ["RDS", "DynamoDB", "CosmosDB", "Redshift"] },
            { phase: "6. AŞAMA - Identity & Access", topics: ["IAM", "User/Groups/Policies", "Multi-factor Auth"] },
            { phase: "7. AŞAMA - Cloud Security", topics: ["Shield", "WAF", "Key Management Service"] },
            { phase: "8. AŞAMA - Cost Management", topics: ["Pricing models", "Budget alerts", "Resource tags"] },
            { phase: "9. AŞAMA - Serverless Architecture", topics: ["Event-driven designs", "API Gateway"] },
            { phase: "10. AŞAMA - Cloud Certifications", topics: ["AWS Solutions Architect", "Azure Fundamentals"] }
        ]
    },
    {
        id: "full-stack",
        title: "Full Stack Geliştirme",
        icon: "layers-outline",
        heroSubtitle: "Hem ön yüzü hem arka yüzü hakimiyetiniz altına alın.",
        description: "Frontend ve Backend becerilerini birleştirerek uçtan uca modern web uygulamaları geliştirin.",
        steps: [
            { phase: "1. AŞAMA - Modern Frontend", topics: ["Advanced React/Vue", "State Management", "SSR (Next.js/Nuxt.js)"] },
            { phase: "2. AŞAMA - Backend Temelleri", topics: ["Node.js/Django/FastAPI", "Auth", "REST/GraphQL"] },
            { phase: "3. AŞAMA - Veritabanı Stratejileri", topics: ["Relational vs NoSQL", "Schema Design", "Migrations"] },
            { phase: "4. AŞAMA - Authentication Ecosystem", topics: ["OAuth2", "Social Auth", "Passwordless (OTP)"] },
            { phase: "5. AŞAMA - Communication", topics: ["RESTful", "WebSockets", "gRPC", "Message Queues"] },
            { phase: "6. AŞAMA - Testing Suite", topics: ["Unit", "Integration", "E2E (Cypress/Playwright)"] },
            { phase: "7. AŞAMA - DevOps for Devs", topics: ["Docker", "GitHub Actions", "CI/CD pipelines"] },
            { phase: "8. AŞAMA - System Design", topics: ["Performance", "Scalability", "Microservices vs Monolith"] },
            { phase: "9. AŞAMA - Deployment & Analytics", topics: ["AWS/Vercel", "Monitoring", "Posthog/Google Analytics"] },
            { phase: "10. AŞAMA - Portfolio Project", topics: ["Real-world app", "Full deployment", "Documentation"] }
        ]
    },
    {
        id: "ui-ux-tasarim",
        title: "UI/UX Tasarım",
        icon: "color-palette-outline",
        heroSubtitle: "Kullanıcı dostu ve estetik arayüzler tasarlayın.",
        description: "Kullanıcı araştırmalarından profesyonel prototiplere kadar tasarım sürecini öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Tasarım Temelleri", topics: ["Typography", "Color Theory", "Grid Systems", "Composition"] },
            { phase: "2. AŞAMA - Araçlar (Tools)", topics: ["Figma", "Adobe XD", "Sketch", "Pen & Paper"] },
            { phase: "3. AŞAMA - UX Research", topics: ["User Interviews", "Personas", "User Journeys", "Card Sorting"] },
            { phase: "4. AŞAMA - Wireframing", topics: ["Low-fidelity", "Information Architecture", "User Flow"] },
            { phase: "5. AŞAMA - UI Design", topics: ["Visual Design", "Iconography", "Accessibility (WCAG)"] },
            { phase: "6. AŞAMA - Prototyping", topics: ["Interactive Prototypes", "Micro-interactions", "Animations"] },
            { phase: "7. AŞAMA - Design Systems", topics: ["Tokens", "Components", "Documentation", "Storybook"] },
            { phase: "8. AŞAMA - User Testing", topics: ["Usability Testing", "A/B Testing", "Heatmaps"] },
            { phase: "9. AŞAMA - Handoff", topics: ["Developer handoff", "Zeplin", "Exporting assets"] },
            { phase: "10. AŞAMA - Portfolio", topics: ["Case Studies", "Behance/Dribbble", "Resume building"] }
        ]
    },
    {
        id: "ai-muhendisligi",
        title: "Yapay Zeka Mühendisliği",
        icon: "hardware-chip-outline",
        heroSubtitle: "Akıllı sistemleri tasarlayın ve uygulayın.",
        description: "Uçtan uca yapay zeka çözümleri geliştirmek için gerekli araçları ve algoritmaları keşfedin.",
        steps: [
            { phase: "1. AŞAMA - Gelişmiş Matematik", topics: ["Lineer Cebir", "Kalkülüs", "Olasılık"] },
            { phase: "2. AŞAMA - Python for AI", topics: ["Logic", "Classes", "Scientific stack"] },
            { phase: "3. AŞAMA - Veri İşleme (Pre-processing)", topics: ["Cleaning", "Standardization", "Imputation"] },
            { phase: "4. AŞAMA - Klasik Algoritmalar", topics: ["Regression", "Trees", "SVM", "Ensemble"] },
            { phase: "5. AŞAMA - Derin Öğrenme (DL)", topics: ["CNN", "RNN", "Transformers", "Autoencoders"] },
            { phase: "6. AŞAMA - NLP (Doğal Dil İşleme)", topics: ["Tokenization", "BERT", "GPT Models", "Spacy"] },
            { phase: "7. AŞAMA - Computer Vision", topics: ["OpenCV", "Object Detection", "Segmentation"] },
            { phase: "8. AŞAMA - AI Deployment", topics: ["Model serving (Triton)", "Quantization", "ONNX"] },
            { phase: "9. AŞAMA - Generative AI", topics: ["Stable Diffusion", "LLMs", "LangChain"] },
            { phase: "10. AŞAMA - AI Etik", topics: ["Bias", "Privacy", "Explainable AI (XAI)"] }
        ]
    },
    {
        id: "makine-ogrenmesi",
        title: "Yapay Öğrenme",
        icon: "flash-outline",
        heroSubtitle: "Veriden öğrenen algoritmalar dünyasına girin.",
        description: "Makine öğrenmesi modelleri oluşturmak için pratik beceriler kazanın.",
        steps: [
            { phase: "1. AŞAMA - İstatistik Temeli", topics: ["Tanımlayıcı İstatistik", "Hipotez Testleri", "Bayes Teorisi"] },
            { phase: "2. AŞAMA - Exploratory Data Analysis", topics: ["Pandas", "Matplotlib", "Seaborn"] },
            { phase: "3. AŞAMA - Model Selection", topics: ["Bias-Variance Tradeoff", "Cross Validation"] },
            { phase: "4. AŞAMA - Regresyon Modelleri", topics: ["Linear", "Polynomial", "Regularization (Lasso/Ridge)"] },
            { phase: "5. AŞAMA - Sınıflandırma", topics: ["Logistic Regression", "Decision Trees", "K-NN"] },
            { phase: "6. AŞAMA - Kümeleme (Clustering)", topics: ["K-Means", "DBSCAN", "Hierarchical"] },
            { phase: "7. AŞAMA - Feature Engineering", topics: ["PCA", "Label Encoding", "Scaling"] },
            { phase: "8. AŞAMA - Hyperparameter Tuning", topics: ["GridSearch", "RandomizedSearch", "Optuna"] },
            { phase: "9. AŞAMA - Metrics", topics: ["F1 Score", "ROC/AUC", "Confusion Matrix"] },
            { phase: "10. AŞAMA - Real World ML", topics: ["Kaggle Competitions", "Project pipelines"] }
        ]
    },
    {
        id: "veri-muhendisligi",
        title: "Veri Mühendisliği",
        icon: "construct-outline",
        heroSubtitle: "Büyük veri boru hatlarını inşa edin ve yönetin.",
        description: "Veri toplama, saklama ve işleme mimarilerini kurmayı öğrenin.",
        steps: [
            { phase: "1. AŞAMA - SQL & Databases", topics: ["Advanced SQL", "Postgres", "Indexing", "Query Plan"] },
            { phase: "2. AŞAMA - Programming", topics: ["Python", "Scala/Java", "Functional programming"] },
            { phase: "3. AŞAMA - Data Warehousing", topics: ["Snowflake", "BigQuery", "Redshift", "ETL vs ELT"] },
            { phase: "4. AŞAMA - Data Modeling", topics: ["Star Schema", "Snowflake Schema", "Normalization"] },
            { phase: "5. AŞAMA - Pipeline Orchestration", topics: ["Airflow", "Dagster", "Prefect"] },
            { phase: "6. AŞAMA - Big Data Processing", topics: ["Spark", "Flink", "Hadoop MapReduce"] },
            { phase: "7. AŞAMA - NoSQL Stacks", topics: ["MongoDB", "Cassandra", "Elasticsearch"] },
            { phase: "8. AŞAMA - Stream Processing", topics: ["Kafka", "Kinesis", "Spark Streaming"] },
            { phase: "9. AŞAMA - Data Quality", topics: ["Great Expectations", "Data lineage", "Observability"] },
            { phase: "10. AŞAMA - Data Lakehouse", topics: ["Databricks", "S3 Data Lake", "Delta Lake"] }
        ]
    },
    {
        id: "oyun-gelistirme-unity",
        title: "Oyun Geliştirme (Unity)",
        icon: "game-controller-outline",
        heroSubtitle: "Hayalinizdeki oyunları Unity ile gerçeğe dönüştürün.",
        description: "C# ve Unity Engine kullanarak 2D ve 3D dünyalar inşa etmeyi öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Unity Arayüzü", topics: ["Scene view", "Inspector", "Assets", "Prefabs"] },
            { phase: "2. AŞAMA - C# Temelleri", topics: ["Variables", "Unity lifecycle (Start/Update)", "Input", "Classes"] },
            { phase: "3. AŞAMA - 2D Oyun Temelleri", topics: ["Sprites", "Tilemaps", "2D Physics", "Animators"] },
            { phase: "4. AŞAMA - 3D Oyun Temelleri", topics: ["Primitives", "Lighting", "Cameras", "Transforms"] },
            { phase: "5. AŞAMA - Fizik Motoru", topics: ["Rigidbody", "Colliders", "Triggers", "Raycasting"] },
            { phase: "6. AŞAMA - UI Tasarımı", topics: ["Canvas", "Text-Mesh Pro", "Buttons", "Health bars"] },
            { phase: "7. AŞAMA - Ses & Efektler", topics: ["Audio Sources", "Particle Systems", "Shaders"] },
            { phase: "8. AŞAMA - Scriptable Objects", topics: ["Data management", "In-game shops", "Global events"] },
            { phase: "9. AŞAMA - AI & Pathfinding", topics: ["NavMesh", "State Machines", "Simple AI logic"] },
            { phase: "10. AŞAMA - Yayınlama (Build)", topics: ["Android/iOS build", "Desktop Export", "Optimization"] }
        ]
    },
    {
        id: "oyun-gelistirme-unreal",
        title: "Oyun Geliştirme (Unreal)",
        icon: "cube-outline",
        heroSubtitle: "AAA kalitesinde oyunlar Unreal Engine ile mümkün.",
        description: "Blueprint ve C++ ile en modern grafikleri ve mekanikleri hazırlayın.",
        steps: [
            { phase: "1. AŞAMA - Unreal Editor", topics: ["Viewport", "World Outliner", "Content Browser"] },
            { phase: "2. AŞAMA - Blueprints (Visual Code)", topics: ["Nodes", "Variables", "Events", "Functions"] },
            { phase: "3. AŞAMA - Materyaller & Grafikler", topics: ["Material Editor", "PBR materials", "Texture maps"] },
            { phase: "4. AŞAMA - Level Design", topics: ["Landscape mode", "Foliage", "Lighting (Lumen)"] },
            { phase: "5. AŞAMA - Character Basics", topics: ["Characters", "Physics", "Movement components"] },
            { phase: "6. AŞAMA - Unreal C++", topics: ["UClasses", "UFunctions", "Pointer basics", "UPROPERTY"] },
            { phase: "7. AŞAMA - Animasyon", topics: ["Persona", "Animation Blueprints", "Blends"] },
            { phase: "8. AŞAMA - VFX (Niagara)", topics: ["Particle emitters", "Emitters with Niagara"] },
            { phase: "9. AŞAMA - AI (Behavior Trees)", topics: ["Blackboards", "Decorators", "Sequencers"] },
            { phase: "10. AŞAMA - Optimization", topics: ["Draw calls", "Profiling", "Packaging project"] }
        ]
    },
    {
        id: "blokzincir",
        title: "Blokzincir Geliştirme",
        icon: "link-outline",
        heroSubtitle: "Merkeziyetsiz dünyada akıllı kontratlar yazın.",
        description: "Web3, Ethereum, Solidity and dApps dünyasına giriş yapın.",
        steps: [
            { phase: "1. AŞAMA - Web3 Temelleri", topics: ["Decentralization", "Wallets (MetaMask)", "GAS fees"] },
            { phase: "2. AŞAMA - Blockchain Basics", topics: ["Blocks", "Hashes", "Consensus (PoW, PoS)"] },
            { phase: "3. AŞAMA - Solidity Başlangıç", topics: ["Syntax", "Storage", "Events", "Modifiers"] },
            { phase: "4. AŞAMA - Akıllı Kontratlar", topics: ["Truffle/Hardhat", "Deploying", "Compiling"] },
            { phase: "5. AŞAMA - Standards", topics: ["ERC-20 (Tokens)", "ERC-721 (NFTs)", "ERC-1155"] },
            { phase: "6. AŞAMA - Security", topics: ["Reentrancy attacks", "Auditing", "Best practices"] },
            { phase: "7. AŞAMA - Frontend Web3", topics: ["Ethers.js", "Web3.js", "Connecting wallet"] },
            { phase: "8. AŞAMA - Layer 2 Solutions", topics: ["Polygon", "Arbitrum", "Optimism"] },
            { phase: "9. AŞAMA - Decentralized Storage", topics: ["IPFS", "Arweave"] },
            { phase: "10. AŞAMA - DAOs & DeFi", topics: ["Uniswap logic", "Voting mechanisms"] }
        ]
    },
    {
        id: "gomulu-sistemler",
        title: "Gömülü Sistemler",
        icon: "hardware-chip-outline",
        heroSubtitle: "Donanım ve yazılımın kesiştiği noktayı keşfedin.",
        description: "Mikrodenetleyiciler, C/C++ ve temel devre tasarımı üzerine uzmanlaşın.",
        steps: [
            { phase: "1. AŞAMA - Elektronik Temeli", topics: ["Volt/Amper", "Resistors", "Capacitors", "Transistors"] },
            { phase: "2. AŞAMA - Embedded C", topics: ["Bitwise operations", "Pointers", "Memory management"] },
            { phase: "3. AŞAMA - MCU Architecture", topics: ["STM32", "Arduino (ATmega)", "Registers", "Interrupts"] },
            { phase: "4. AŞAMA - Peripherals", topics: ["GPIO", "UART", "I2C", "SPI"] },
            { phase: "5. AŞAMA - Analog to Digital", topics: ["ADC", "DAC", "PWM for motor control"] },
            { phase: "6. AŞAMA - Real-Time OS (RTOS)", topics: ["FreeRTOS", "Tasks", "Semaphores"] },
            { phase: "7. AŞAMA - Debugging Tools", topics: ["Oscilloscopes", "Logic Analyzers", "JTAG/SWD"] },
            { phase: "8. AŞAMA - Sensors & Actuators", topics: ["IMUs", "Temperature sensors", "Servos"] },
            { phase: "9. AŞAMA - IoT Protocols", topics: ["MQTT", "LoRaWAN", "Bluetooth Low Energy (BLE)"] },
            { phase: "10. AŞAMA - PCB Design", topics: ["Altium", "Eagle", "KiCad", "Soldering"] }
        ]
    },
    {
        id: "qa-test",
        title: "Yazılım Testi (QA)",
        icon: "checkbox-outline",
        heroSubtitle: "Yazılım kalitesini garanti altına alan uzman olun.",
        description: "Manuel test ve otomasyon araçları ile hatasız projeler üretin.",
        steps: [
            { phase: "1. AŞAMA - QA Temelleri", topics: ["SDLC & STLC", "Manual Testing", "Requirement Analysis"] },
            { phase: "2. AŞAMA - Test Tipleri", topics: ["Black-box vs White-box", "Regression", "Functional"] },
            { phase: "3. AŞAMA - Bug Reporting", topics: ["Jira", "Reproducing steps", "Severity vs Priority"] },
            { phase: "4. AŞAMA - API Testing", topics: ["Postman", "Rest Assured", "JSON Schema validation"] },
            { phase: "5. AŞAMA - UI Automation (Web)", topics: ["Selenium", "Playwright", "Cypress"] },
            { phase: "6. AŞAMA - Mobile Testing", topics: ["Appium", "Emulator vs Real device"] },
            { phase: "7. AŞAMA - Performance Testing", topics: ["JMeter", "LoadRunner", "Benchmarking"] },
            { phase: "8. AŞAMA - Security Testing Basics", topics: ["ZAP", "SQLi checks", "Authentication bugs"] },
            { phase: "9. AŞAMA - CI/CD Integration", topics: ["Nightly builds", "Testing in pipelines"] },
            { phase: "10. AŞAMA - ISTQB Certification", topics: ["Foundation level syllabus", "Project work"] }
        ]
    },
    {
        id: "flutter-gelistirme",
        title: "Flutter Geliştirme",
        icon: "phone-portrait-outline",
        heroSubtitle: "Google'ın SDK'sı ile tek kodla her yerde olun.",
        description: "Dart programlama dili ve Flutter framework ile mobil, web ve masaüstü uygulamaları geliştirin.",
        steps: [
            { phase: "1. AŞAMA - Dart Programlama", topics: ["Variables", "Functions", "OOP", "Asynchronous Programming"] },
            { phase: "2. AŞAMA - Flutter Giriş", topics: ["Everything is a Widget", "Stateless vs Stateful"] },
            { phase: "3. AŞAMA - UI Design (Material/Cupertino)", topics: ["Layouts", "Styling", "Common widgets"] },
            { phase: "4. AŞAMA - State Management", topics: ["Provider", "Riverpod", "Bloc/Cubit"] },
            { phase: "5. AŞAMA - Networking", topics: ["Http package", "Dio", "JSON serialization"] },
            { phase: "6. AŞAMA - Data Persistence", topics: ["Shared Preferences", "Sqflite", "Hive"] },
            { phase: "7. AŞAMA - Animations", topics: ["Implicit", "Explicit", "CustomPainter"] },
            { phase: "8. AŞAMA - Firebase for Flutter", topics: ["Auth", "Firestore", "Cloud Messaging"] },
            { phase: "9. AŞAMA - Native Integration", topics: ["Method Channels", "Platform views"] },
            { phase: "10. AŞAMA - Testing & Clean Architecture", topics: ["Unit testing", "Widget testing", "Folders"] }
        ]
    },
    {
        id: "ios-gelistirme",
        title: "iOS Geliştirme",
        icon: "logo-apple",
        heroSubtitle: "Apple ekosistemi için mükemmel aplikasyonlar tasarlayın.",
        description: "Swift ve SwiftUI/UIKit ile iPhone ve iPad uygulamaları geliştirmeyi öğrenin.",
        steps: [
            { phase: "1. AŞAMA - Swift Temelleri", topics: ["Optionals", "Closures", "Structs vs Classes"] },
            { phase: "2. AŞAMA - Xcode Core", topics: ["Interface Builder", "Debug console", "Simulator"] },
            { phase: "3. AŞAMA - SwiftUI Basics", topics: ["Views", "Stacks", "Modifiers", "State & Binding"] },
            { phase: "4. AŞAMA - UIKit System", topics: ["ViewControllers", "Delegates", "Auto Layout"] },
            { phase: "5. AŞAMA - Networking", topics: ["URLSession", "JSONDecoder", "Combine framework"] },
            { phase: "6. AŞAMA - Apple Frameworks", topics: ["CoreData", "MapKit", "PhotosUI"] },
            { phase: "7. AŞAMA - Persistence", topics: ["UserDefaults", "SwiftData (New)", "KeyChain"] },
            { phase: "8. AŞAMA - Architecture", topics: ["MVVM", "Clean", "Coordinators"] },
            { phase: "9. AŞAMA - Design Guidelines", topics: ["Human Interface Guidelines (HIG)"] },
            { phase: "10. AŞAMA - App Store Connect", topics: ["TestFlight", "Guidelines", "Metadata"] }
        ]
    },
    {
        id: "android-gelistirme",
        title: "Android Geliştirme",
        icon: "logo-android",
        heroSubtitle: "Dünya genelinde milyonlarca kullanıcıya Android ile ulaşın.",
        description: "Kotlin ve Jetpack Compose ile modern Android uygulamaları inşa edin.",
        steps: [
            { phase: "1. AŞAMA - Kotlin Deep Dive", topics: ["Null safety", "Coroutines", "Flows", "Extensions"] },
            { phase: "2. AŞAMA - Android Studio", topics: ["Build system (Gradle)", "Emulator", "Logcat"] },
            { phase: "3. AŞAMA - Jetpack Compose", topics: ["Composables", "State hoisting", "Themes"] },
            { phase: "4. AŞAMA - Android Architecture", topics: ["MVVM", "ViewModel", "LiveData", "Room"] },
            { phase: "5. AŞAMA - Networking", topics: ["Retrofit", "OkHttp", "Gson/Moshi"] },
            { phase: "6. AŞAMA - Dependency Injection", topics: ["Hilt", "Dagger", "Koin"] },
            { phase: "7. AŞAMA - Material Design 3", topics: ["Design system", "Components", "Animations"] },
            { phase: "8. AŞAMA - Background Work", topics: ["WorkManager", "Services", "Broadcast Receivers"] },
            { phase: "9. AŞAMA - Multi-module Projects", topics: ["Navigation", "Sharing code"] },
            { phase: "10. AŞAMA - Play Store Publishing", topics: ["ProGuard/R8", "Bundle", "Console management"] }
        ]
    },
    {
        id: "java-gelistirme",
        title: "Java Geliştirme",
        icon: "cafe-outline",
        heroSubtitle: "Kurumsal ve güçlü yazılımların temelini atın.",
        description: "En köklü programlama dillerinden biri olan Java ile backend dünyasına hakim olun.",
        steps: [
            { phase: "1. AŞAMA - Java Core", topics: ["Syntax", "JVM", "JDK vs JRE", "Data types"] },
            { phase: "2. AŞAMA - OOP Mastery", topics: ["Inheritance", "Polymorphism", "Abstraction", "Interfaces"] },
            { phase: "3. AŞAMA - Collections Framework", topics: ["List", "Map", "Set", "Generics"] },
            { phase: "4. AŞAMA - Streams & Lambda", topics: ["Functional interface", "Optional", "Stream API"] },
            { phase: "5. AŞAMA - Maven & Gradle", topics: ["Build tools", "Dependency management"] },
            { phase: "6. AŞAMA - Spring Framework", topics: ["Inversion of Control (IoC)", "Beans", "AOP"] },
            { phase: "7. AŞAMA - Spring Boot", topics: ["Auto-configuration", "Embedded Tomcat", "Actuator"] },
            { phase: "8. AŞAMA - Data Access (JPA)", topics: ["Hibernate", "Repositories", "Transactions"] },
            { phase: "9. AŞAMA - Spring Security", topics: ["Auth", "Authorization", "Encryption"] },
            { phase: "10. AŞAMA - Microservices", topics: ["Cloud Config", "Service Discovery", "Gateway"] }
        ]
    },
    {
        id: "go-gelistirme",
        title: "Go Geliştirme",
        icon: "rocket-outline",
        heroSubtitle: "Yüksek performanslı ve eşzamanlı sistemler geliştirin.",
        description: "Google'ın geliştirdiği Go dili ile modern backend ve CLI araçları üretin.",
        steps: [
            { phase: "1. AŞAMA - Go Basics", topics: ["Structs", "Interfaces", "Pointers", "Slices"] },
            { phase: "2. AŞAMA - Concurrency (Goroutines)", topics: ["Channels", "Select", "WaitGroup", "Mutexes"] },
            { phase: "3. AŞAMA - Error Handling", topics: ["Idiomatic Go", "Wrapping errors"] },
            { phase: "4. AŞAMA - Module System", topics: ["go mod", "Vendoring", "Dependency tracking"] },
            { phase: "5. AŞAMA - Web Frameworks", topics: ["Gin", "Echo", "Standard Library (net/http)"] },
            { phase: "6. AŞAMA - API & Databases", topics: ["SQL drivers", "GORM", "Ent setup"] },
            { phase: "7. AŞAMA - Microservices in Go", topics: ["gRPC", "Protobuf", "Service meshes"] },
            { phase: "8. AŞAMA - CLI Development", topics: ["Cobra", "Viper", "Terminal apps"] },
            { phase: "9. AŞAMA - Testing in Go", topics: ["Table-driven tests", "Mocking", "Benchmarking"] },
            { phase: "10. AŞAMA - Deploying Go Ops", topics: ["Binary builds", "Small Docker images"] }
        ]
    },
    {
        id: "rust-gelistirme",
        title: "Rust Geliştirme",
        icon: "settings-outline",
        heroSubtitle: "Güvenli, hızlı ve modern sistem programlama.",
        description: "Bellek güvenliğini garantileyen Rust ile performanstan ödün vermeden kod yazın.",
        steps: [
            { phase: "1. AŞAMA - Rust Foundations", topics: ["Ownership", "Borrowing", "Lifetime basics"] },
            { phase: "2. AŞAMA - Enums & Patterns", topics: ["Match", "Option", "Result", "Standard Library"] },
            { phase: "3. AŞAMA - Traits & Generics", topics: ["Shared behavior", "Bounds", "Derive"] },
            { phase: "4. AŞAMA - Error Management", topics: ["Unwrap", "Panic", "Customer errors"] },
            { phase: "5. AŞAMA - Macros", topics: ["Declarative macros", "Procedural macros"] },
            { phase: "6. AŞAMA - Cargo Ecosystem", topics: ["Crates.io", "Profiles", "Workspaces"] },
            { phase: "7. AŞAMA - Async Rust", topics: ["Tokio", "Future trait", "Await"] },
            { phase: "8. AŞAMA - Wasm (WebAssembly)", topics: ["Rust in the browser", "JS bindings"] },
            { phase: "9. AŞAMA - Systems Programming", topics: ["FFI", "Unsafe rust", "Hardware optimization"] },
            { phase: "10. AŞAMA - Rust Backend (Axum)", topics: ["Type safe routing", "Performance servers"] }
        ]
    },
    {
        id: "php-laravel",
        title: "PHP/Laravel Geliştirme",
        icon: "logo-laravel",
        heroSubtitle: "Zarif ve hızlı web geliştirme.",
        description: "Dünyanın en popüler PHP framework'ü Laravel ile güçlü web uygulamaları geliştirin.",
        steps: [
            { phase: "1. AŞAMA - Modern PHP", topics: ["Classes", "Namespaces", "Composer", "Type hinting"] },
            { phase: "2. AŞAMA - Laravel Basics", topics: ["Routing", "Controllers", "Blade Templates"] },
            { phase: "3. AŞAMA - Database & Eloquent", topics: ["Migrations", "ORM", "Relationships", "Seeders"] },
            { phase: "4. AŞAMA - Authentication", topics: ["Breeze", "Jetstream", "Sanctum for APIs"] },
            { phase: "5. AŞAMA - Frontend (Inertia/Livewire)", topics: ["The TALL stack", "Vue JS in Laravel"] },
            { phase: "6. AŞAMA - Queues & Jobs", topics: ["Queue workers", "Redis driver", "Batching"] },
            { phase: "7. AŞAMA - Testing (Pest/PHPUnit)", topics: ["Feature tests", "Unit tests", "Moeking"] },
            { phase: "8. AŞAMA - Advanced Features", topics: ["Events", "Listeners", "Service Containers"] },
            { phase: "9. AŞAMA - Deployment (Forge/Vapor)", topics: ["Zero downtime", "Env management"] },
            { phase: "10. AŞAMA - API & Architecture", topics: ["Resources", "SOLID design", "Packages"] }
        ]
    }
];
