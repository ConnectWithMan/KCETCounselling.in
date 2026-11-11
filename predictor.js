// -------------------------------------------------------------
// 1. COMPREHENSIVE PREDICTOR DATABASE (55+ Reputable Colleges across Karnataka)
// -------------------------------------------------------------
const KCET_DATABASE = [
    // Top Tier 1 Elite (Bengaluru)
    {
        college: "RV College of Engineering (RVCE)",
        code: "E005",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 89,
        placementAvg: "₹21.5 LPA",
        placementHigh: "₹62 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 310, "2a": 780, "2b": 1100, "3a": 650, "3b": 490, sc: 2400, st: 4500, cat1: 850, snq: 290 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 580, "2a": 1250, "2b": 1700, "3a": 1050, "3b": 820, sc: 4200, st: 7100, cat1: 1350, snq: 510 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 720, "2a": 1400, "2b": 1950, "3a": 1200, "3b": 980, sc: 4900, st: 8200, cat1: 1550, snq: 650 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 1250, "2a": 2400, "2b": 3100, "3a": 1950, "3b": 1600, sc: 7800, st: 12500, cat1: 2600, snq: 1100 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 2950, "2a": 5200, "2b": 6800, "3a": 4400, "3b": 3800, sc: 14000, st: 21000, cat1: 5600, snq: 2600 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 7500, "2a": 12500, "2b": 16000, "3a": 10500, "3b": 9200, sc: 28000, st: 42000, cat1: 13500, snq: 6800 } },
            { name: "Civil Engineering", stream: "mech_civil", cutoffs: { gm: 14500, "2a": 22000, "2b": 28000, "3a": 19000, "3b": 17500, sc: 45000, st: 65000, cat1: 23000, snq: 12000 } }
        ]
    },
    {
        college: "BMS College of Engineering (BMSCE)",
        code: "E003",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 101,
        placementAvg: "₹14.5 LPA",
        placementHigh: "₹50 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 950, "2a": 1850, "2b": 2500, "3a": 1550, "3b": 1280, sc: 5800, st: 9800, cat1: 1950, snq: 880 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 1650, "2a": 3100, "2b": 4200, "3a": 2600, "3b": 2100, sc: 8900, st: 14500, cat1: 3300, snq: 1450 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 1850, "2a": 3400, "2b": 4600, "3a": 2900, "3b": 2350, sc: 9800, st: 15800, cat1: 3600, snq: 1650 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 3100, "2a": 5800, "2b": 7500, "3a": 4800, "3b": 3950, sc: 14500, st: 22000, cat1: 6100, snq: 2750 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 6200, "2a": 11000, "2b": 14500, "3a": 9200, "3b": 7800, sc: 25000, st: 38000, cat1: 11500, snq: 5400 } },
            { name: "Aerospace Engineering", stream: "specialized", cutoffs: { gm: 7800, "2a": 13500, "2b": 18000, "3a": 11800, "3b": 9900, sc: 31000, st: 48000, cat1: 14200, snq: 6900 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 14500, "2a": 24000, "2b": 32000, "3a": 21000, "3b": 18500, sc: 52000, st: 74000, cat1: 25000, snq: 12500 } }
        ]
    },
    {
        college: "Ramaiah Institute of Technology (MSRIT)",
        code: "E006",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 128,
        placementAvg: "₹13.2 LPA",
        placementHigh: "₹50 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 1250, "2a": 2400, "2b": 3200, "3a": 1980, "3b": 1650, sc: 6400, st: 11000, cat1: 2550, snq: 1100 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 2100, "2a": 3900, "2b": 5100, "3a": 3200, "3b": 2650, sc: 10200, st: 16500, cat1: 4100, snq: 1850 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 2400, "2a": 4400, "2b": 5800, "3a": 3700, "3b": 3100, sc: 11500, st: 18200, cat1: 4600, snq: 2100 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 3850, "2a": 6800, "2b": 8900, "3a": 5800, "3b": 4900, sc: 16800, st: 25500, cat1: 7200, snq: 3300 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 7900, "2a": 13800, "2b": 17500, "3a": 11500, "3b": 9800, sc: 29000, st: 44000, cat1: 14500, snq: 6800 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 18500, "2a": 29000, "2b": 38000, "3a": 26000, "3b": 23000, sc: 64000, st: 88000, cat1: 31000, snq: 16000 } }
        ]
    },
    {
        college: "PES University (RR Campus)",
        code: "E008",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 100,
        placementAvg: "₹15.8 LPA",
        placementHigh: "₹65 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 1100, "2a": 2200, "2b": 2900, "3a": 1800, "3b": 1500, sc: 5900, st: 10200, cat1: 2350, snq: 980 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 1750, "2a": 3200, "2b": 4300, "3a": 2700, "3b": 2200, sc: 9200, st: 15000, cat1: 3400, snq: 1550 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 3400, "2a": 6200, "2b": 8100, "3a": 5200, "3b": 4300, sc: 15200, st: 23500, cat1: 6500, snq: 2950 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 6200, "2a": 11200, "2b": 14800, "3a": 9400, "3b": 7900, sc: 26000, st: 39000, cat1: 11800, snq: 5400 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 16800, "2a": 27000, "2b": 36000, "3a": 24500, "3b": 21500, sc: 59000, st: 82000, cat1: 28500, snq: 14500 } }
        ]
    },
    {
        college: "UVCE Bengaluru (State University)",
        code: "E001",
        city: "Bengaluru",
        region: "bangalore",
        type: "Government Institution",
        nirf: 145,
        placementAvg: "₹10.8 LPA",
        placementHigh: "₹48 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 2400, "2a": 4200, "2b": 5600, "3a": 3600, "3b": 3100, sc: 10500, st: 17000, cat1: 4400, snq: 1950 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 3800, "2a": 6600, "2b": 8700, "3a": 5800, "3b": 4900, sc: 15500, st: 24000, cat1: 6900, snq: 3200 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 4200, "2a": 7100, "2b": 9400, "3a": 6200, "3b": 5300, sc: 16800, st: 26000, cat1: 7400, snq: 3500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 5500, "2a": 9400, "2b": 12200, "3a": 8200, "3b": 7100, sc: 21000, st: 32000, cat1: 9900, snq: 4600 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 9200, "2a": 15500, "2b": 19800, "3a": 13400, "3b": 11600, sc: 32000, st: 49000, cat1: 16200, snq: 7900 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 22000, "2a": 34000, "2b": 44000, "3a": 30000, "3b": 27000, sc: 72000, st: 98000, cat1: 36000, snq: 18500 } },
            { name: "Civil Engineering", stream: "mech_civil", cutoffs: { gm: 34000, "2a": 48000, "2b": 62000, "3a": 44000, "3b": 40000, sc: 95000, st: 125000, cat1: 51000, snq: 28000 } }
        ]
    },
    {
        college: "SJCE Mysuru (JSS Science & Tech)",
        code: "E021",
        city: "Mysuru",
        region: "mysuru",
        type: "Private Autonomous",
        nirf: 158,
        placementAvg: "₹12.5 LPA",
        placementHigh: "₹45 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 3100, "2a": 5600, "2b": 7300, "3a": 4800, "3b": 4100, sc: 13500, st: 21000, cat1: 5900, snq: 2650 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 4500, "2a": 7900, "2b": 10400, "3a": 6900, "3b": 5900, sc: 18000, st: 28000, cat1: 8200, snq: 3800 } },
            { name: "CS & Business Systems (CSBS)", stream: "cse_it", cutoffs: { gm: 5100, "2a": 8800, "2b": 11500, "3a": 7700, "3b": 6600, sc: 19800, st: 31000, cat1: 9100, snq: 4350 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 7800, "2a": 13400, "2b": 17200, "3a": 11700, "3b": 10100, sc: 27500, st: 42000, cat1: 14000, snq: 6700 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 14200, "2a": 22500, "2b": 29000, "3a": 20500, "3b": 18000, sc: 46000, st: 68000, cat1: 23500, snq: 12200 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 32000, "2a": 47000, "2b": 60000, "3a": 43000, "3b": 38500, sc: 95000, st: 130000, cat1: 49000, snq: 27000 } }
        ]
    },
    {
        college: "Dayananda Sagar College (DSCE)",
        code: "E012",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 175,
        placementAvg: "₹10.2 LPA",
        placementHigh: "₹42 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 3600, "2a": 6400, "2b": 8400, "3a": 5500, "3b": 4700, sc: 15000, st: 23000, cat1: 6700, snq: 3100 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 5200, "2a": 9100, "2b": 11800, "3a": 7900, "3b": 6800, sc: 20500, st: 31000, cat1: 9500, snq: 4500 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 5800, "2a": 9900, "2b": 12800, "3a": 8600, "3b": 7400, sc: 22500, st: 34000, cat1: 10400, snq: 4900 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 8900, "2a": 15200, "2b": 19500, "3a": 13100, "3b": 11400, sc: 31000, st: 47000, cat1: 15800, snq: 7700 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 16500, "2a": 26000, "2b": 34000, "3a": 23500, "3b": 20500, sc: 52000, st: 76000, cat1: 27500, snq: 14000 } },
            { name: "Biotechnology Engineering", stream: "specialized", cutoffs: { gm: 21000, "2a": 32000, "2b": 41000, "3a": 28500, "3b": 25000, sc: 65000, st: 92000, cat1: 34000, snq: 17500 } }
        ]
    },
    {
        college: "The National Institute of Engineering (NIE)",
        code: "E022",
        city: "Mysuru",
        region: "mysuru",
        type: "Private Autonomous",
        nirf: 196,
        placementAvg: "₹10.5 LPA",
        placementHigh: "₹44 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 4200, "2a": 7400, "2b": 9700, "3a": 6400, "3b": 5500, sc: 17200, st: 26000, cat1: 7700, snq: 3550 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 6100, "2a": 10500, "2b": 13600, "3a": 9200, "3b": 7900, sc: 23000, st: 34500, cat1: 10900, snq: 5200 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 6800, "2a": 11500, "2b": 14900, "3a": 10100, "3b": 8700, sc: 25000, st: 37500, cat1: 12000, snq: 5750 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 9800, "2a": 16500, "2b": 21000, "3a": 14500, "3b": 12600, sc: 34000, st: 50000, cat1: 17200, snq: 8400 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 18000, "2a": 28000, "2b": 36000, "3a": 25500, "3b": 22500, sc: 56000, st: 80000, cat1: 29500, snq: 15200 } }
        ]
    },
    {
        college: "Bangalore Institute of Technology (BIT)",
        code: "E004",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 200,
        placementAvg: "₹9.8 LPA",
        placementHigh: "₹38 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 4500, "2a": 7800, "2b": 10200, "3a": 6800, "3b": 5800, sc: 18000, st: 27000, cat1: 8100, snq: 3800 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 6800, "2a": 11500, "2b": 14800, "3a": 10100, "3b": 8700, sc: 24500, st: 37000, cat1: 11900, snq: 5800 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 7400, "2a": 12400, "2b": 16000, "3a": 10900, "3b": 9400, sc: 26500, st: 40000, cat1: 12800, snq: 6300 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 11500, "2a": 19000, "2b": 24500, "3a": 16800, "3b": 14600, sc: 38000, st: 56000, cat1: 19800, snq: 9800 } },
            { name: "Electrical & Electronics (EEE)", stream: "ece_eee", cutoffs: { gm: 21000, "2a": 32000, "2b": 41000, "3a": 28500, "3b": 25500, sc: 63000, st: 90000, cat1: 33500, snq: 17500 } }
        ]
    },
    {
        college: "BMS Institute of Tech & Mgmt (BMSIT)",
        code: "E064",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 205,
        placementAvg: "₹9.2 LPA",
        placementHigh: "₹44 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 6500, "2a": 11200, "2b": 14500, "3a": 9800, "3b": 8400, sc: 24000, st: 36000, cat1: 11500, snq: 5500 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 8900, "2a": 15100, "2b": 19400, "3a": 13200, "3b": 11500, sc: 31000, st: 46000, cat1: 15600, snq: 7600 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 9600, "2a": 16200, "2b": 20800, "3a": 14200, "3b": 12300, sc: 33000, st: 49000, cat1: 16800, snq: 8200 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 14800, "2a": 23500, "2b": 30000, "3a": 21000, "3b": 18500, sc: 47000, st: 68000, cat1: 24500, snq: 12500 } }
        ]
    },
    // Aided & Premier Regional Institutions
    {
        college: "Dr. Ambedkar Institute of Tech (Dr. AIT)",
        code: "E007",
        city: "Bengaluru",
        region: "bangalore",
        type: "Aided Autonomous",
        nirf: 170,
        placementAvg: "₹8.8 LPA",
        placementHigh: "₹32 LPA",
        fee: "₹65,000/yr (Aided)",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 8900, "2a": 15200, "2b": 19500, "3a": 13200, "3b": 11500, sc: 30000, st: 45000, cat1: 15500, snq: 7400 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 13500, "2a": 21800, "2b": 28000, "3a": 19500, "3b": 17000, sc: 43000, st: 62000, cat1: 22500, snq: 11400 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 21000, "2a": 32000, "2b": 41000, "3a": 28500, "3b": 25500, sc: 62000, st: 88000, cat1: 33000, snq: 17500 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 58000, "2a": 79000, "2b": 98000, "3a": 74000, "3b": 68000, sc: 140000, st: 175000, cat1: 85000, snq: 48000 } }
        ]
    },
    {
        college: "KLE Technological University (BVBCET)",
        code: "E031",
        city: "Hubballi",
        region: "north",
        type: "Private Autonomous",
        nirf: 180,
        placementAvg: "₹8.5 LPA",
        placementHigh: "₹43 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 6800, "2a": 11800, "2b": 15200, "3a": 10200, "3b": 8700, sc: 25000, st: 37000, cat1: 12100, snq: 5800 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 9800, "2a": 16200, "2b": 20800, "3a": 14400, "3b": 12400, sc: 33000, st: 48000, cat1: 16800, snq: 8300 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 15500, "2a": 24500, "2b": 31200, "3a": 22200, "3b": 19400, sc: 48000, st: 69000, cat1: 25500, snq: 13000 } }
        ]
    },
    {
        college: "Siddaganga Institute of Tech (SIT)",
        code: "E033",
        city: "Tumkur",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 102,
        placementAvg: "₹9.1 LPA",
        placementHigh: "₹41 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 7100, "2a": 12200, "2b": 15600, "3a": 10600, "3b": 9100, sc: 27000, st: 39000, cat1: 12500, snq: 6100 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 10100, "2a": 16800, "2b": 21500, "3a": 14800, "3b": 12800, sc: 34000, st: 49000, cat1: 17200, snq: 8600 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 16200, "2a": 25500, "2b": 32500, "3a": 23000, "3b": 20200, sc: 50000, st: 71000, cat1: 26500, snq: 13600 } }
        ]
    },
    {
        college: "SDM College of Engg & Tech (SDMCET)",
        code: "E024",
        city: "Dharwad",
        region: "north",
        type: "Private Autonomous",
        nirf: 165,
        placementAvg: "₹8.0 LPA",
        placementHigh: "₹36 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 8500, "2a": 14500, "2b": 18500, "3a": 12800, "3b": 11100, sc: 31000, st: 45000, cat1: 14800, snq: 7200 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 13200, "2a": 21000, "2b": 27000, "3a": 19000, "3b": 16500, sc: 42000, st: 60000, cat1: 22000, snq: 11000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 19500, "2a": 30500, "2b": 39000, "3a": 27500, "3b": 24500, sc: 58000, st: 82000, cat1: 31000, snq: 16500 } }
        ]
    },
    {
        college: "KLS Gogte Institute of Tech (GIT)",
        code: "E028",
        city: "Belagavi",
        region: "north",
        type: "Private Autonomous",
        nirf: 185,
        placementAvg: "₹7.8 LPA",
        placementHigh: "₹34 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 11500, "2a": 18800, "2b": 24000, "3a": 16800, "3b": 14600, sc: 39000, st: 56000, cat1: 19500, snq: 9800 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 16500, "2a": 25500, "2b": 33000, "3a": 23000, "3b": 20200, sc: 51000, st: 72000, cat1: 26500, snq: 14000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 27000, "2a": 39500, "2b": 51000, "3a": 36500, "3b": 32500, sc: 74000, st: 104000, cat1: 42000, snq: 22500 } }
        ]
    },
    {
        college: "Malnad College of Engineering (MCE)",
        code: "E023",
        city: "Hassan",
        region: "mysuru",
        type: "Aided Autonomous",
        nirf: 190,
        placementAvg: "₹7.5 LPA",
        placementHigh: "₹28 LPA",
        fee: "₹65,000/yr (Aided)",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 9200, "2a": 15800, "2b": 20200, "3a": 13900, "3b": 12100, sc: 32000, st: 47000, cat1: 16200, snq: 7900 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 14500, "2a": 22800, "2b": 29000, "3a": 20500, "3b": 18000, sc: 46000, st: 65000, cat1: 24000, snq: 12200 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 22000, "2a": 33500, "2b": 42500, "3a": 30500, "3b": 27000, sc: 66000, st: 92000, cat1: 35000, snq: 18500 } }
        ]
    },
    {
        college: "NMAM Institute of Technology (Nitte)",
        code: "E041",
        city: "Nitte, Udupi",
        region: "coastal",
        type: "Private Autonomous",
        nirf: 160,
        placementAvg: "₹8.8 LPA",
        placementHigh: "₹40 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 7500, "2a": 13200, "2b": 16800, "3a": 11400, "3b": 9800, sc: 32000, st: 45000, cat1: 13500, snq: 7900 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 11500, "2a": 18800, "2b": 24000, "3a": 16800, "3b": 14600, sc: 42000, st: 58000, cat1: 19500, snq: 11800 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 12200, "2a": 19800, "2b": 25200, "3a": 17800, "3b": 15500, sc: 44000, st: 61000, cat1: 20500, snq: 12500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 19500, "2a": 30500, "2b": 38500, "3a": 27500, "3b": 24500, sc: 62000, st: 85000, cat1: 31500, snq: 19800 } }
        ]
    },
    {
        college: "St. Joseph Engineering College (SJEC)",
        code: "E091",
        city: "Mangaluru",
        region: "coastal",
        type: "Private Autonomous",
        nirf: 210,
        placementAvg: "₹7.6 LPA",
        placementHigh: "₹30 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 16000, "2a": 25500, "2b": 33000, "3a": 23000, "3b": 20200, sc: 51000, st: 72000, cat1: 26500, snq: 13500 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 22000, "2a": 34000, "2b": 43500, "3a": 30500, "3b": 27000, sc: 66000, st: 92000, cat1: 35500, snq: 18500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 36000, "2a": 51000, "2b": 65000, "3a": 47000, "3b": 42000, sc: 95000, st: 128000, cat1: 54000, snq: 30000 } }
        ]
    },
    {
        college: "Vidyavardhaka College of Engg (VVCE)",
        code: "E070",
        city: "Mysuru",
        region: "mysuru",
        type: "Private Autonomous",
        nirf: 175,
        placementAvg: "₹8.0 LPA",
        placementHigh: "₹33 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 10800, "2a": 17800, "2b": 22800, "3a": 15800, "3b": 13800, sc: 36000, st: 53000, cat1: 18500, snq: 9200 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 16200, "2a": 25000, "2b": 32000, "3a": 22500, "3b": 19800, sc: 49000, st: 70000, cat1: 25500, snq: 13200 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 26000, "2a": 38500, "2b": 49000, "3a": 35500, "3b": 31500, sc: 72000, st: 101000, cat1: 40500, snq: 21500 } }
        ]
    },
    {
        college: "PES College of Engineering (PESCE Mandya)",
        code: "E020",
        city: "Mandya",
        region: "mysuru",
        type: "Aided Autonomous",
        nirf: 160,
        placementAvg: "₹7.8 LPA",
        placementHigh: "₹30 LPA",
        fee: "₹65,000/yr (Aided)",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 10200, "2a": 17000, "2b": 21800, "3a": 15000, "3b": 13100, sc: 34000, st: 50000, cat1: 17500, snq: 8700 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 15800, "2a": 24500, "2b": 31500, "3a": 22000, "3b": 19400, sc: 48000, st: 68000, cat1: 25000, snq: 12900 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 24000, "2a": 36000, "2b": 46000, "3a": 33000, "3b": 29500, sc: 69000, st: 96000, cat1: 38000, snq: 20000 } }
        ]
    },
    // High Demand Tier 2 & Tier 3 Colleges (Accessible to ranks 20k to 150k+)
    {
        college: "SJB Institute of Technology (SJBIT)",
        code: "E083",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 220,
        placementAvg: "₹7.2 LPA",
        placementHigh: "₹28 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 16500, "2a": 26500, "2b": 34000, "3a": 24000, "3b": 21000, sc: 52000, st: 74000, cat1: 28000, snq: 13800 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 24000, "2a": 36500, "2b": 46500, "3a": 33000, "3b": 29500, sc: 70000, st: 98000, cat1: 38500, snq: 20000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } }
        ]
    },
    {
        college: "Global Academy of Technology (GAT)",
        code: "E084",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 230,
        placementAvg: "₹7.1 LPA",
        placementHigh: "₹26 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 18000, "2a": 28500, "2b": 36500, "3a": 26000, "3b": 23000, sc: 56000, st: 80000, cat1: 29500, snq: 15200 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 24000, "2a": 36500, "2b": 46500, "3a": 33000, "3b": 29500, sc: 70000, st: 98000, cat1: 38500, snq: 20000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 39000, "2a": 55000, "2b": 70000, "3a": 50000, "3b": 45000, sc: 105000, st: 142000, cat1: 58000, snq: 32000 } }
        ]
    },
    {
        college: "Cambridge Institute of Technology (CiTech)",
        code: "E121",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 240,
        placementAvg: "₹6.8 LPA",
        placementHigh: "₹27 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 22000, "2a": 34500, "2b": 44000, "3a": 31000, "3b": 27500, sc: 66000, st: 92000, cat1: 36000, snq: 18500 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 29000, "2a": 43000, "2b": 55000, "3a": 40000, "3b": 35500, sc: 80000, st: 112000, cat1: 45000, snq: 24500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 48000, "2a": 68000, "2b": 86000, "3a": 62000, "3b": 56000, sc: 124000, st: 160000, cat1: 72000, snq: 39000 } }
        ]
    },
    {
        college: "Oxford College of Engineering",
        code: "E037",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Institution",
        nirf: 260,
        placementAvg: "₹6.2 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 28000, "2a": 41000, "2b": 52000, "3a": 38000, "3b": 34000, sc: 78000, st: 108000, cat1: 43000, snq: 23500 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 58000, "2a": 79000, "2b": 98000, "3a": 74000, "3b": 68000, sc: 140000, st: 175000, cat1: 85000, snq: 48000 } }
        ]
    },
    {
        college: "MVJ College of Engineering",
        code: "E014",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 215,
        placementAvg: "₹7.0 LPA",
        placementHigh: "₹28 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 19000, "2a": 29800, "2b": 38000, "3a": 27200, "3b": 24200, sc: 60000, st: 84000, cat1: 31000, snq: 16000 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 27000, "2a": 39500, "2b": 51000, "3a": 36500, "3b": 32500, sc: 74000, st: 104000, cat1: 42000, snq: 22500 } },
            { name: "Aeronautical Engineering", stream: "specialized", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } }
        ]
    },
    {
        college: "Don Bosco Institute of Technology (DBIT)",
        code: "E079",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Institution",
        nirf: 280,
        placementAvg: "₹5.8 LPA",
        placementHigh: "₹20 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 34000, "2a": 49000, "2b": 62000, "3a": 45000, "3b": 41000, sc: 92000, st: 125000, cat1: 52000, snq: 28500 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 48000, "2a": 68000, "2b": 86000, "3a": 62000, "3b": 56000, sc: 124000, st: 160000, cat1: 72000, snq: 39000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 68000, "2a": 91000, "2b": 114000, "3a": 85000, "3b": 79000, sc: 155000, st: 190000, cat1: 96000, snq: 54000 } }
        ]
    },
    {
        college: "Atria Institute of Technology",
        code: "E060",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 255,
        placementAvg: "₹6.4 LPA",
        placementHigh: "₹24 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 23000, "2a": 35500, "2b": 45500, "3a": 32000, "3b": 28500, sc: 68000, st: 95000, cat1: 37000, snq: 19200 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 32000, "2a": 47000, "2b": 60000, "3a": 43000, "3b": 38500, sc: 88000, st: 120000, cat1: 50000, snq: 26500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 51000, "2a": 71000, "2b": 90000, "3a": 66000, "3b": 60000, sc: 130000, st: 165000, cat1: 76000, snq: 41000 } }
        ]
    },
    {
        college: "K.S. Institute of Technology (KSIT)",
        code: "E078",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Institution",
        nirf: 265,
        placementAvg: "₹6.1 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 25000, "2a": 37500, "2b": 48000, "3a": 34500, "3b": 30500, sc: 73000, st: 102000, cat1: 40000, snq: 21000 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 34000, "2a": 49000, "2b": 62000, "3a": 45000, "3b": 41000, sc: 92000, st: 125000, cat1: 52000, snq: 28500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 52000, "2a": 73000, "2b": 92000, "3a": 67000, "3b": 61000, sc: 132000, st: 168000, cat1: 78000, snq: 43000 } }
        ]
    },
    {
        college: "RajaRajeswari College of Engg (RRCE)",
        code: "E094",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 275,
        placementAvg: "₹5.6 LPA",
        placementHigh: "₹21 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 49000, "2a": 70000, "2b": 88000, "3a": 64000, "3b": 58000, sc: 126000, st: 162000, cat1: 74000, snq: 40000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 72000, "2a": 96000, "2b": 120000, "3a": 90000, "3b": 83000, sc: 160000, st: 195000, cat1: 102000, snq: 58000 } }
        ]
    },
    {
        college: "AMC Engineering College",
        code: "E062",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 285,
        placementAvg: "₹5.5 LPA",
        placementHigh: "₹20 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 32000, "2a": 47000, "2b": 60000, "3a": 43000, "3b": 38500, sc: 88000, st: 120000, cat1: 50000, snq: 26500 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 42000, "2a": 60000, "2b": 76000, "3a": 55000, "3b": 49000, sc: 110000, st: 148000, cat1: 62000, snq: 35000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 62000, "2a": 85000, "2b": 106000, "3a": 78000, "3b": 72000, sc: 146000, st: 180000, cat1: 90000, snq: 50000 } }
        ]
    },
    {
        college: "Sambhram Institute of Technology",
        code: "E058",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Institution",
        nirf: 295,
        placementAvg: "₹5.2 LPA",
        placementHigh: "₹18 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 45000, "2a": 64000, "2b": 81000, "3a": 59000, "3b": 53000, sc: 118000, st: 154000, cat1: 68000, snq: 37000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 88000, "2a": 115000, "2b": 142000, "3a": 108000, "3b": 101000, sc: 185000, st: 215000, cat1: 125000, snq: 72000 } }
        ]
    },
    {
        college: "HKBK College of Engineering",
        code: "E057",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 270,
        placementAvg: "₹5.9 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 35000, "2a": 51000, "2b": 65000, "3a": 47000, "3b": 42000, sc: 95000, st: 128000, cat1: 54000, snq: 30000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 70000, "2a": 94000, "2b": 118000, "3a": 88000, "3b": 81000, sc: 158000, st: 192000, cat1: 100000, snq: 56000 } }
        ]
    },
    // Regional Government Colleges across Districts
    {
        college: "Govt Engineering College (GEC Hassan)",
        code: "E075",
        city: "Hassan",
        region: "mysuru",
        type: "Government Institution",
        nirf: 260,
        placementAvg: "₹6.5 LPA",
        placementHigh: "₹20 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 14500, "2a": 23000, "2b": 29500, "3a": 21000, "3b": 18500, sc: 46000, st: 66000, cat1: 23500, snq: 12200 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 28000, "2a": 41000, "2b": 52000, "3a": 38000, "3b": 34000, sc: 78000, st: 108000, cat1: 43000, snq: 23500 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 65000, "2a": 88000, "2b": 110000, "3a": 82000, "3b": 76000, sc: 150000, st: 185000, cat1: 94000, snq: 52000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Mandya)",
        code: "E149",
        city: "Mandya",
        region: "mysuru",
        type: "Government Institution",
        nirf: 275,
        placementAvg: "₹6.0 LPA",
        placementHigh: "₹18 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 24500, "2a": 37000, "2b": 47000, "3a": 33500, "3b": 30000, sc: 72000, st: 100000, cat1: 39000, snq: 20500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 46000, "2a": 65000, "2b": 82000, "3a": 60000, "3b": 54000, sc: 118000, st: 155000, cat1: 70000, snq: 38000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Ramanagara)",
        code: "E151",
        city: "Ramanagara",
        region: "bangalore",
        type: "Government Institution",
        nirf: 280,
        placementAvg: "₹5.8 LPA",
        placementHigh: "₹16 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 32000, "2a": 47000, "2b": 60000, "3a": 43000, "3b": 38500, sc: 88000, st: 120000, cat1: 50000, snq: 26500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 58000, "2a": 79000, "2b": 98000, "3a": 74000, "3b": 68000, sc: 140000, st: 175000, cat1: 85000, snq: 48000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Chamarajanagar)",
        code: "E150",
        city: "Chamarajanagar",
        region: "mysuru",
        type: "Government Institution",
        nirf: 285,
        placementAvg: "₹5.5 LPA",
        placementHigh: "₹15 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 68000, "2a": 91000, "2b": 114000, "3a": 85000, "3b": 79000, sc: 155000, st: 190000, cat1: 96000, snq: 54000 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 98000, "2a": 128000, "2b": 155000, "3a": 120000, "3b": 112000, sc: 195000, st: 225000, cat1: 135000, snq: 82000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Haveri)",
        code: "E153",
        city: "Haveri",
        region: "north",
        type: "Government Institution",
        nirf: 290,
        placementAvg: "₹5.4 LPA",
        placementHigh: "₹15 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 42000, "2a": 60000, "2b": 76000, "3a": 55000, "3b": 49000, sc: 110000, st: 148000, cat1: 62000, snq: 35000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 75000, "2a": 100000, "2b": 124000, "3a": 94000, "3b": 87000, sc: 168000, st: 200000, cat1: 108000, snq: 61000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Karwar)",
        code: "E152",
        city: "Karwar",
        region: "coastal",
        type: "Government Institution",
        nirf: 285,
        placementAvg: "₹5.6 LPA",
        placementHigh: "₹16 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 35000, "2a": 51000, "2b": 65000, "3a": 47000, "3b": 42000, sc: 95000, st: 128000, cat1: 54000, snq: 30000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 64000, "2a": 87000, "2b": 108000, "3a": 80000, "3b": 74000, sc: 148000, st: 182000, cat1: 91000, snq: 51000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Raichur)",
        code: "E155",
        city: "Raichur",
        region: "hk_region",
        type: "Government Institution",
        nirf: 295,
        placementAvg: "₹5.3 LPA",
        placementHigh: "₹14 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 48000, "2a": 68000, "2b": 86000, "3a": 62000, "3b": 56000, sc: 124000, st: 160000, cat1: 72000, snq: 39000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 82000, "2a": 108000, "2b": 134000, "3a": 102000, "3b": 95000, sc: 178000, st: 210000, cat1: 118000, snq: 67000 } }
        ]
    },
    // Kalyana-Karnataka Region Special Institutions
    {
        college: "PDA College of Engg (Kalaburagi)",
        code: "E025",
        city: "Kalaburagi",
        region: "hk_region",
        type: "Aided Autonomous",
        nirf: 245,
        placementAvg: "₹6.8 LPA",
        placementHigh: "₹24 LPA",
        fee: "₹65,000/yr (Aided)",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 16500, "2a": 26500, "2b": 34000, "3a": 24000, "3b": 21000, sc: 52000, st: 74000, cat1: 28000, snq: 13800 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 22000, "2a": 34500, "2b": 44000, "3a": 31000, "3b": 27500, sc: 66000, st: 92000, cat1: 36000, snq: 18500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 32000, "2a": 47000, "2b": 60000, "3a": 43000, "3b": 38500, sc: 88000, st: 120000, cat1: 50000, snq: 26500 } }
        ]
    },
    {
        college: "Ballari Institute of Tech & Mgmt (BITM)",
        code: "E089",
        city: "Ballari",
        region: "hk_region",
        type: "Private Autonomous",
        nirf: 250,
        placementAvg: "₹6.5 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 28000, "2a": 41000, "2b": 52000, "3a": 38000, "3b": 34000, sc: 78000, st: 108000, cat1: 43000, snq: 23500 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 39000, "2a": 55000, "2b": 70000, "3a": 50000, "3b": 45000, sc: 105000, st: 142000, cat1: 58000, snq: 32000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 55000, "2a": 76000, "2b": 95000, "3a": 70000, "3b": 64000, sc: 136000, st: 172000, cat1: 82000, snq: 45000 } }
        ]
    },
    {
        college: "Guru Nanak Dev Engg College (GNDEC)",
        code: "E035",
        city: "Bidar",
        region: "hk_region",
        type: "Private Autonomous",
        nirf: 280,
        placementAvg: "₹5.5 LPA",
        placementHigh: "₹18 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 45000, "2a": 64000, "2b": 81000, "3a": 59000, "3b": 53000, sc: 118000, st: 154000, cat1: 68000, snq: 37000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 82000, "2a": 108000, "2b": 134000, "3a": 102000, "3b": 95000, sc: 178000, st: 210000, cat1: 118000, snq: 67000 } }
        ]
    },
    // Reputable Coastal Institutions
    {
        college: "Sahyadri College of Engg (SCEM)",
        code: "E138",
        city: "Mangaluru",
        region: "coastal",
        type: "Private Autonomous",
        nirf: 235,
        placementAvg: "₹7.4 LPA",
        placementHigh: "₹34 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 18500, "2a": 29000, "2b": 37000, "3a": 26500, "3b": 23500, sc: 58000, st: 82000, cat1: 30000, snq: 15500 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 24000, "2a": 36500, "2b": 46500, "3a": 33000, "3b": 29500, sc: 70000, st: 98000, cat1: 38500, snq: 20000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 34000, "2a": 49000, "2b": 62000, "3a": 45000, "3b": 41000, sc: 92000, st: 125000, cat1: 52000, snq: 28500 } }
        ]
    },
    {
        college: "Canara Engineering College",
        code: "E087",
        city: "Mangaluru",
        region: "coastal",
        type: "Private Institution",
        nirf: 250,
        placementAvg: "₹6.6 LPA",
        placementHigh: "₹24 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 28000, "2a": 41000, "2b": 52000, "3a": 38000, "3b": 34000, sc: 78000, st: 108000, cat1: 43000, snq: 23500 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 41000, "2a": 59000, "2b": 74000, "3a": 54000, "3b": 48000, sc: 108000, st: 145000, cat1: 61000, snq: 34000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 58000, "2a": 79000, "2b": 98000, "3a": 74000, "3b": 68000, sc: 140000, st: 175000, cat1: 85000, snq: 48000 } }
        ]
    },
    {
        college: "Alva's Institute of Engg & Tech (AIET)",
        code: "E144",
        city: "Moodbidri",
        region: "coastal",
        type: "Private Autonomous",
        nirf: 260,
        placementAvg: "₹6.2 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 49000, "3b": 44000, sc: 102000, st: 138000, cat1: 56000, snq: 31000 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 50000, "2a": 70000, "2b": 88000, "3a": 64000, "3b": 58000, sc: 128000, st: 164000, cat1: 75000, snq: 41000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 74000, "2a": 98000, "2b": 122000, "3a": 92000, "3b": 85000, sc: 164000, st: 198000, cat1: 105000, snq: 60000 } }
        ]
    },
    {
        college: "East West Institute of Tech (EWIT)",
        code: "E077",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Institution",
        nirf: 290,
        placementAvg: "₹5.8 LPA",
        placementHigh: "₹18 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 36000, "2a": 52000, "2b": 66000, "3a": 48000, "3b": 43000, sc: 98000, st: 132000, cat1: 54000, snq: 30000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 64000, "2a": 87000, "2b": 108000, "3a": 80000, "3b": 74000, sc: 148000, st: 182000, cat1: 91000, snq: 51000 } }
        ]
    },
    {
        college: "Sir M. Visvesvaraya Institute of Technology (Sir MVIT)",
        code: "E010",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 201,
        placementAvg: "₹8.8 LPA",
        placementHigh: "₹38 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 7800, "2a": 13200, "2b": 16800, "3a": 11400, "3b": 9800, sc: 29000, st: 44000, cat1: 13800, snq: 6800 } },
            { name: "Information Science & Engineering (ISE)", stream: "cse_it", cutoffs: { gm: 11800, "2a": 18500, "2b": 24000, "3a": 16500, "3b": 14200, sc: 39000, st: 58000, cat1: 19500, snq: 9900 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 18500, "2a": 28000, "2b": 36000, "3a": 25000, "3b": 22000, sc: 55000, st: 79000, cat1: 29000, snq: 15500 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 48000, "2a": 68000, "2b": 85000, "3a": 62000, "3b": 57000, sc: 115000, st: 152000, cat1: 72000, snq: 42000 } }
        ]
    },
    {
        college: "R.N.S. Institute of Technology (RNSIT)",
        code: "E071",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 220,
        placementAvg: "₹8.5 LPA",
        placementHigh: "₹35 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 8200, "2a": 13800, "2b": 17500, "3a": 11900, "3b": 10200, sc: 30500, st: 46000, cat1: 14500, snq: 7100 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 11200, "2a": 17800, "2b": 23000, "3a": 15800, "3b": 13800, sc: 38000, st: 56000, cat1: 18800, snq: 9500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 19200, "2a": 29500, "2b": 38000, "3a": 26500, "3b": 23500, sc: 58000, st: 82000, cat1: 30500, snq: 16200 } }
        ]
    },
    {
        college: "Nitte Meenakshi Institute of Technology (NMIT)",
        code: "E085",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 151,
        placementAvg: "₹8.9 LPA",
        placementHigh: "₹40 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 8900, "2a": 14500, "2b": 18500, "3a": 12500, "3b": 10800, sc: 32000, st: 48000, cat1: 15200, snq: 7500 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 12500, "2a": 19500, "2b": 25000, "3a": 17200, "3b": 14900, sc: 41000, st: 60000, cat1: 20500, snq: 10500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 21000, "2a": 32000, "2b": 41000, "3a": 28500, "3b": 25000, sc: 62000, st: 88000, cat1: 33000, snq: 17800 } }
        ]
    },
    {
        college: "New Horizon College of Engineering (NHCE)",
        code: "E086",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 180,
        placementAvg: "₹9.2 LPA",
        placementHigh: "₹36 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 11000, "2a": 17500, "2b": 22500, "3a": 15200, "3b": 13200, sc: 37000, st: 55000, cat1: 18200, snq: 9200 } },
            { name: "AI & Machine Learning (AIML)", stream: "ai_ds", cutoffs: { gm: 14200, "2a": 22000, "2b": 28500, "3a": 19800, "3b": 17100, sc: 46000, st: 67000, cat1: 23000, snq: 12000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 24500, "2a": 36000, "2b": 46000, "3a": 32500, "3b": 29000, sc: 69000, st: 96000, cat1: 38000, snq: 20500 } }
        ]
    },
    {
        college: "CMR Institute of Technology (CMRIT)",
        code: "E088",
        city: "Bengaluru",
        region: "bangalore",
        type: "Private Autonomous",
        nirf: 190,
        placementAvg: "₹7.8 LPA",
        placementHigh: "₹26 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 13500, "2a": 21000, "2b": 27000, "3a": 18800, "3b": 16200, sc: 44000, st: 64000, cat1: 22000, snq: 11500 } },
            { name: "AI & Data Science (AIDS)", stream: "ai_ds", cutoffs: { gm: 16800, "2a": 25500, "2b": 33000, "3a": 23000, "3b": 20100, sc: 52000, st: 75000, cat1: 27000, snq: 14200 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 27000, "2a": 40000, "2b": 51000, "3a": 36000, "3b": 32500, sc: 75000, st: 105000, cat1: 42000, snq: 23000 } }
        ]
    },
    {
        college: "University B.D.T. College of Engg (UBDT Davangere)",
        code: "E019",
        city: "Davangere",
        region: "north",
        type: "Government Autonomous",
        nirf: 250,
        placementAvg: "₹6.2 LPA",
        placementHigh: "₹20 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 14500, "2a": 23000, "2b": 29500, "3a": 20500, "3b": 17800, sc: 47000, st: 68000, cat1: 24000, snq: 12500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 28500, "2a": 42000, "2b": 53000, "3a": 38000, "3b": 34000, sc: 78000, st: 108000, cat1: 44000, snq: 24500 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 52000, "2a": 72000, "2b": 91000, "3a": 67000, "3b": 61000, sc: 122000, st: 158000, cat1: 76000, snq: 45000 } },
            { name: "Civil Engineering", stream: "mech_civil", cutoffs: { gm: 68000, "2a": 91000, "2b": 112000, "3a": 84000, "3b": 77000, sc: 142000, st: 178000, cat1: 95000, snq: 59000 } }
        ]
    },
    {
        college: "Bapuji Institute of Engg & Tech (BIET Davangere)",
        code: "E026",
        city: "Davangere",
        region: "north",
        type: "Private Aided",
        nirf: 260,
        placementAvg: "₹6.0 LPA",
        placementHigh: "₹22 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 22000, "2a": 33000, "2b": 42000, "3a": 29500, "3b": 26000, sc: 66000, st: 92000, cat1: 34500, snq: 18500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 44000, "2a": 62000, "2b": 78000, "3a": 56000, "3b": 51000, sc: 108000, st: 142000, cat1: 65000, snq: 38000 } }
        ]
    },
    {
        college: "Basaveshwar Engineering College (BEC Bagalkote)",
        code: "E027",
        city: "Bagalkote",
        region: "north",
        type: "Private Autonomous",
        nirf: 240,
        placementAvg: "₹6.4 LPA",
        placementHigh: "₹24 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 18500, "2a": 28500, "2b": 36500, "3a": 25500, "3b": 22500, sc: 57000, st: 81000, cat1: 30000, snq: 15500 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 36000, "2a": 52000, "2b": 66000, "3a": 47000, "3b": 42000, sc: 94000, st: 128000, cat1: 55000, snq: 31000 } },
            { name: "Mechanical Engineering", stream: "mech_civil", cutoffs: { gm: 72000, "2a": 98000, "2b": 120000, "3a": 89000, "3b": 82000, sc: 155000, st: 195000, cat1: 102000, snq: 62000 } }
        ]
    },
    {
        college: "Rao Bahadur Y. Mahabaleshwarappa Engg (RYMEC Ballari)",
        code: "E029",
        city: "Ballari",
        region: "hk_region",
        type: "Private Institution",
        nirf: 280,
        placementAvg: "₹5.5 LPA",
        placementHigh: "₹18 LPA",
        fee: "₹1.15 L/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 34000, "2a": 49000, "2b": 62000, "3a": 45000, "3b": 40000, sc: 92000, st: 125000, cat1: 51000, snq: 28000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 59000, "2a": 81000, "2b": 101000, "3a": 74000, "3b": 68000, sc: 138000, st: 172000, cat1: 84000, snq: 48000 } }
        ]
    },
    {
        college: "Govt Engineering College (GEC Kushalnagar)",
        code: "E154",
        city: "Kushalnagar",
        region: "mysuru",
        type: "Government Institution",
        nirf: 295,
        placementAvg: "₹5.2 LPA",
        placementHigh: "₹15 LPA",
        fee: "₹26,000/yr",
        branches: [
            { name: "Computer Science & Engineering (CSE)", stream: "cse_it", cutoffs: { gm: 38000, "2a": 54000, "2b": 68000, "3a": 50000, "3b": 45000, sc: 102000, st: 138000, cat1: 56000, snq: 32000 } },
            { name: "Electronics & Communication (ECE)", stream: "ece_eee", cutoffs: { gm: 66000, "2a": 89000, "2b": 110000, "3a": 82000, "3b": 76000, sc: 152000, st: 188000, cat1: 94000, snq: 54000 } },
            { name: "Civil Engineering", stream: "mech_civil", cutoffs: { gm: 88000, "2a": 115000, "2b": 138000, "3a": 105000, "3b": 98000, sc: 175000, st: 215000, cat1: 120000, snq: 75000 } }
        ]
    }
];

// Global State for Results & Choice List
let currentMatches = [];
let activeTierFilter = 'all';
let savedChoices = [];

// -------------------------------------------------------------
// 2. PREDICTOR ENGINE LOGIC
// -------------------------------------------------------------
// Clear inline rank error styling
function clearRankError() {
    const errDiv = document.getElementById('userRankError');
    const rankInput = document.getElementById('userRank');
    if (errDiv) { errDiv.style.display = 'none'; errDiv.textContent = ''; }
    if (rankInput) rankInput.classList.remove('input-error');
}

function runCollegePrediction() {
    const rankInput = document.getElementById('userRank');
    // Clean value: extract digits and remove commas/spaces
    const digitsMatch = rankInput.value.match(/\d[\d,\s]*/);
    const rawVal = digitsMatch ? digitsMatch[0].replace(/[,\s]/g, '') : '';
    const studentRank = parseInt(rawVal, 10);

    if (isNaN(studentRank) || studentRank <= 0) {
        // Show inline error if element exists, else alert
        const errDiv = document.getElementById('userRankError');
        if (errDiv) {
            errDiv.textContent = 'Please enter a valid KCET Merit Rank (e.g., 4500).';
            errDiv.style.display = 'block';
            rankInput.classList.add('input-error');
        } else {
            alert('Please enter a valid KCET Merit Rank (e.g., 4500).');
        }
        rankInput.focus();
        return;
    }

    // Clear any previous error
    clearRankError();

    const category = document.getElementById('userCategory').value;
    const subQuota = document.getElementById('userSubQuota').value;
    const location = document.getElementById('userLocation').value;
    const branchStream = document.getElementById('userBranch').value;
    const round = document.getElementById('userRound').value;

    // Round Multiplier (Round 1 = 1.0, Round 2 = 1.25, 2nd Extended = 1.48)
    let roundMultiplier = 1.0;
    if (round === 'round2') roundMultiplier = 1.25;
    else if (round === 'extended') roundMultiplier = 1.48;

    // Sub-quota multiplier
    let subQuotaMultiplier = 1.0;
    if (subQuota === 'rural') subQuotaMultiplier = 1.15; // 15% Rural sub-quota expansion
    else if (subQuota === 'kannada') subQuotaMultiplier = 1.10; // 5% Kannada Medium expansion

    currentMatches = [];

    KCET_DATABASE.forEach(college => {
        // Location filter
        if (location !== 'all' && college.region !== location) {
            return;
        }

        college.branches.forEach(branch => {
            // Branch stream filter
            if (branchStream !== 'all') {
                if (branchStream === 'computing' && branch.stream !== 'cse_it' && branch.stream !== 'ai_ds') return;
                if (branchStream === 'cse_it' && branch.stream !== 'cse_it') return;
                if (branchStream === 'ai_ds' && branch.stream !== 'ai_ds') return;
                if (branchStream === 'ece_eee' && branch.stream !== 'ece_eee') return;
                if (branchStream === 'mech_civil' && branch.stream !== 'mech_civil') return;
                if (branchStream === 'specialized' && branch.stream !== 'specialized') return;
            }

            // Base cutoff rank for chosen category
            let baseCutoff = branch.cutoffs[category] || branch.cutoffs.gm;

            // If SNQ chosen
            if (subQuota === 'snq') {
                baseCutoff = branch.cutoffs.snq || Math.round(branch.cutoffs.gm * 0.95);
            } else if (subQuota === 'hk') {
                // HK 371J quota relaxes by 35% in general, or 50% in HK region colleges
                let hkBoost = (college.region === 'hk_region') ? 1.50 : 1.20;
                baseCutoff = Math.round(baseCutoff * hkBoost);
            } else {
                baseCutoff = Math.round(baseCutoff * subQuotaMultiplier);
            }

            // Apply Round expansion
            const effectiveCutoff = Math.round(baseCutoff * roundMultiplier);

            // Ratio of student rank to cutoff
            // ratio < 1 means student rank is BETTER (lower number) than cutoff
            const ratio = studentRank / effectiveCutoff;

            let tier = '';
            let probBadge = '';
            let probClass = '';
            let probPercent = 0;

            if (ratio <= 0.75) {
                tier = 'safe';
                probBadge = 'Safe College (95%+ Allotment)';
                probClass = 'badge-safe';
                probPercent = 95;
            } else if (ratio <= 1.15) {
                tier = 'target';
                probBadge = 'Target Match (75% Probability)';
                probClass = 'badge-target';
                probPercent = 75;
            } else if (ratio <= 1.45) {
                tier = 'reach';
                probBadge = 'Ambitious Reach (35% Probability)';
                probClass = 'badge-reach';
                probPercent = 35;
            } else {
                // Out of reach for this round
                return;
            }

            const choiceId = `${college.code}_${branch.stream}_${effectiveCutoff}_${branch.name.replace(/[^a-zA-Z0-9]/g, '_')}`;

            currentMatches.push({
                choiceId: choiceId,
                collegeName: college.college,
                code: college.code,
                city: college.city,
                type: college.type,
                nirf: college.nirf,
                placementAvg: college.placementAvg,
                placementHigh: college.placementHigh,
                fee: college.fee,
                branchName: branch.name,
                stream: branch.stream,
                effectiveCutoff: effectiveCutoff,
                baseCutoff: baseCutoff,
                studentRank: studentRank,
                ratio: ratio,
                tier: tier,
                probBadge: probBadge,
                probClass: probClass,
                probPercent: probPercent
            });
        });
    });

    // Update UI
    displayPredictionResults();
}

// Auto-refresh when any filter select is changed if a prediction was already run
function autoRefreshPrediction() {
    const rankVal = document.getElementById('userRank').value.replace(/[,\s]/g, '');
    if (rankVal && !isNaN(parseInt(rankVal, 10)) && document.getElementById('resultsContainer').classList.contains('active')) {
        runCollegePrediction();
    }
}

// -------------------------------------------------------------
// 3. RENDER RESULTS IN THE DOM
// -------------------------------------------------------------
function displayPredictionResults() {
    const resultsContainer = document.getElementById('resultsContainer');
    const resultsGrid = document.getElementById('resultsGrid');
    const noMatchesBox = document.getElementById('noMatchesBox');

    resultsContainer.classList.add('active');

    // Counts
    const total = currentMatches.length;
    const safeCount = currentMatches.filter(m => m.tier === 'safe').length;
    const targetCount = currentMatches.filter(m => m.tier === 'target').length;
    const reachCount = currentMatches.filter(m => m.tier === 'reach').length;

    document.getElementById('summaryRank').innerText = '#' + parseInt(document.getElementById('userRank').value.replace(/[,\s]/g, ''), 10).toLocaleString('en-IN');
    const catName = document.getElementById('userCategory').options[document.getElementById('userCategory').selectedIndex].text;
    const phaseName = document.getElementById('userRound').options[document.getElementById('userRound').selectedIndex].text;
    document.getElementById('summaryCat').innerText = catName;
    document.getElementById('summaryPhase').innerText = phaseName;

    document.getElementById('countSafe').innerText = safeCount;
    document.getElementById('countTarget').innerText = targetCount;
    document.getElementById('countReach').innerText = reachCount;

    document.getElementById('tabCountAll').innerText = total;
    document.getElementById('tabCountSafe').innerText = safeCount;
    document.getElementById('tabCountTarget').innerText = targetCount;
    document.getElementById('tabCountReach').innerText = reachCount;

    if (total === 0) {
        resultsGrid.innerHTML = '';
        noMatchesBox.style.display = 'block';
        setTimeout(() => {
            try {
                const yOffset = -90;
                const y = resultsContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
            } catch (e) {
                resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 40);
        return;
    }

    noMatchesBox.style.display = 'none';

    // Initial Sort
    sortResults();

    // Smooth scroll to results accounting for sticky navbar
    setTimeout(() => {
        try {
            const yOffset = -90;
            const y = resultsContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
        } catch (e) {
            resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 40);
}

function renderCards(matchesToRender) {
    const resultsGrid = document.getElementById('resultsGrid');
    resultsGrid.innerHTML = '';

    if (matchesToRender.length === 0) {
        resultsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: #ffffff; border: 1px dashed var(--slate-border); border-radius: var(--radius-md);">
                        <p style="color:var(--slate-text-muted); margin:0;">No colleges match the selected tier filter. Click "All Predicted Matches" to view all possibilities.</p>
                    </div>
                `;
        return;
    }

    matchesToRender.forEach((m) => {
        const isAdded = savedChoices.some(c => c.choiceId === m.choiceId);
        const buttonText = isAdded ? '<i class="fas fa-check"></i> Added' : '<i class="fas fa-plus"></i> Add to Option List';
        const buttonClass = isAdded ? 'btn-add-choice added' : 'btn-add-choice';

        const marginRanks = m.effectiveCutoff - m.studentRank;
        const marginText = marginRanks >= 0 ? `+${marginRanks.toLocaleString()} Safety Margin` : `${Math.abs(marginRanks).toLocaleString()} Stretch Reach`;

        const cardHtml = `
                    <div class="predict-card" data-tier="${m.tier}">
                        <div class="predict-card-header">
                            <div class="college-info">
                                <h4>${m.collegeName}</h4>
                                <div class="college-meta-tag">
                                    <span class="code-pill">${m.code}</span>
                                    <span><i class="fas fa-location-dot"></i> ${m.city}</span>
                                    <span>&bull; ${m.type}</span>
                                </div>
                            </div>
                            <span class="prob-badge ${m.probClass}">
                                ${m.probBadge}
                            </span>
                        </div>

                        <div class="branch-info-row">
                            <div class="branch-name-wrap">
                                <i class="fas fa-laptop-code"></i>
                                <span>${m.branchName}</span>
                            </div>
                            <div class="cutoff-meta">
                                <div class="cutoff-label">Expected Cutoff</div>
                                <div class="cutoff-val">~${m.effectiveCutoff.toLocaleString()}</div>
                            </div>
                        </div>

                        <div class="predict-specs">
                            <div class="spec-item">
                                <span class="spec-label">Placement Median</span>
                                <span class="spec-val">${m.placementAvg}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Highest Package</span>
                                <span class="spec-val">${m.placementHigh}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Margin over Rank</span>
                                <span class="spec-val" style="color:${marginRanks >= 0 ? 'var(--emerald)' : 'var(--accent-gold)'};">
                                    ${marginText}
                                </span>
                            </div>
                        </div>

                        <div class="card-actions-row">
                            <button type="button" class="${buttonClass}" data-choice-id="${m.choiceId}" onclick="toggleSaveChoiceById('${m.choiceId}', this)">
                                ${buttonText}
                            </button>
                            <a href="/cutoff" class="detail-link" target="_blank">
                                View Cutoff Matrix <i class="fas fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                `;
        resultsGrid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Tier Filtering (All, Safe, Target, Reach)
function filterResultsByTier(tier, btn) {
    activeTierFilter = tier;
    document.querySelectorAll('.tier-tab').forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    sortResults();
}

// Sorting Logic
function sortResults() {
    const sortMode = document.getElementById('resultsSortSelect').value;
    let filtered = (activeTierFilter === 'all') ? [...currentMatches] : currentMatches.filter(m => m.tier === activeTierFilter);

    filtered.sort((a, b) => {
        if (sortMode === 'probability') {
            // Highest probability first (Safe -> Target -> Reach)
            return b.probPercent - a.probPercent || a.effectiveCutoff - b.effectiveCutoff;
        } else if (sortMode === 'cutoff_asc') {
            return a.effectiveCutoff - b.effectiveCutoff;
        } else if (sortMode === 'cutoff_desc') {
            return b.effectiveCutoff - a.effectiveCutoff;
        } else if (sortMode === 'placement') {
            const avgA = parseFloat(a.placementAvg.replace(/[^0-9.]/g, '')) || 0;
            const avgB = parseFloat(b.placementAvg.replace(/[^0-9.]/g, '')) || 0;
            return avgB - avgA;
        }
        return 0;
    });

    renderCards(filtered);
}

// Broaden search button when 0 matches found
function broadenSearchCriteria() {
    document.getElementById('userLocation').value = 'all';
    document.getElementById('userBranch').value = 'all';
    document.getElementById('userRound').value = 'round2';
    runCollegePrediction();
}

// -------------------------------------------------------------
// 4. CHOICE LIST DRAWER & OPTION ENTRY WORKSHEET
// -------------------------------------------------------------
function toggleSaveChoiceById(choiceId, btn) {
    const match = currentMatches.find(m => m.choiceId === choiceId) || savedChoices.find(c => c.choiceId === choiceId);
    if (!match) return;

    const existingIdx = savedChoices.findIndex(c => c.choiceId === choiceId);

    if (existingIdx >= 0) {
        savedChoices.splice(existingIdx, 1);
        if (btn) {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-plus"></i> Add to Option List';
        }
    } else {
        savedChoices.push({
            choiceId: choiceId,
            code: match.code,
            collegeName: match.collegeName,
            branchName: match.branchName,
            cutoff: match.effectiveCutoff || match.cutoff
        });
        if (btn) {
            btn.classList.add('added');
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
        }
    }

    updateChoiceDrawerUI();
}

function updateCardButtons() {
    document.querySelectorAll('.btn-add-choice').forEach(btn => {
        const choiceId = btn.getAttribute('data-choice-id');
        const isAdded = savedChoices.some(c => c.choiceId === choiceId);
        if (isAdded) {
            btn.classList.add('added');
            btn.innerHTML = '<i class="fas fa-check"></i> Added';
        } else {
            btn.classList.remove('added');
            btn.innerHTML = '<i class="fas fa-plus"></i> Add to Option List';
        }
    });
}

function updateChoiceDrawerUI() {
    const count = savedChoices.length;
    document.getElementById('choiceBadgeCount').innerText = count;
    document.getElementById('modalTotalCount').innerText = count;

    const modalBody = document.getElementById('modalChoiceList');

    if (count === 0) {
        modalBody.innerHTML = `
                    <div style="text-align:center; padding:2rem 1rem; color:var(--slate-text-muted);">
                        <i class="fas fa-folder-open" style="font-size:2rem; margin-bottom:0.75rem; color:var(--slate-border);"></i>
                        <p style="margin:0;">No colleges added yet. Click <strong>"+ Add to Option List"</strong> on any predicted college card to build your preferred sequence.</p>
                    </div>
                `;
        return;
    }

    let html = '';
    savedChoices.forEach((choice, index) => {
        html += `
                    <div class="choice-item">
                        <div class="choice-rank-num">#${index + 1}</div>
                        <div class="choice-text">
                            <div class="choice-title">${choice.collegeName}</div>
                            <div class="choice-sub">${choice.branchName} &bull; Code: <strong>${choice.code}</strong> &bull; Cutoff: ~${choice.cutoff.toLocaleString()}</div>
                        </div>
                        <button type="button" class="choice-remove-btn" onclick="removeChoice(${index})" title="Remove choice">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
    });

    modalBody.innerHTML = html;
}

function removeChoice(index) {
    savedChoices.splice(index, 1);
    updateChoiceDrawerUI();
    updateCardButtons();
}

function clearAllChoices() {
    if (savedChoices.length === 0) return;
    if (confirm('Clear all items from your KEA option entry list?')) {
        savedChoices = [];
        updateChoiceDrawerUI();
        updateCardButtons();
    }
}

function openChoiceModal() {
    document.getElementById('choiceModalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeChoiceModal() {
    document.getElementById('choiceModalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function closeChoiceModalOnOverlay(e) {
    if (e.target.id === 'choiceModalOverlay') {
        closeChoiceModal();
    }
}

function copyChoiceList() {
    if (savedChoices.length === 0) {
        alert('Add at least one college choice before copying your worksheet.');
        return;
    }

    let text = `KCET 2027 Option Entry Priority List (${savedChoices.length} Choices)\n`;
    text += `Generated via KcetCounselling.in\n`;
    text += `Powered By Famral College Predictor (https://www.famral.com/college-predictor)\n\n`;
    savedChoices.forEach((c, i) => {
        text += `#${i + 1} | [${c.code}] ${c.collegeName} - ${c.branchName} (Cutoff: ~${c.cutoff.toLocaleString()})\n`;
    });

    navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById('btnCopyChoices');
        const orig = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            btn.innerHTML = orig;
        }, 2000);
    }).catch(() => {
        alert('Clipboard access denied. Please use the Print/Save option instead.');
    });
}

function printChoiceList() {
    if (savedChoices.length === 0) {
        alert('Add at least one college choice before printing or saving your worksheet.');
        return;
    }

    let printContent = `
                <head>
                    <title>KEA KCET 2027 Option Entry Worksheet</title>
                    <style>
                        body { font-family: sans-serif; padding: 25px; line-height: 1.5; color: #1e293b; }
                        h1 { font-size: 20px; color: #0f172a; margin-bottom: 5px; }
                        p { font-size: 13px; color: #64748b; margin-top: 0; margin-bottom: 20px; }
                        table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px; }
                        th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
                        th { background: #f1f5f9; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <h1>KCET 2027 Option Entry Priority Worksheet</h1>
                    <p>Generated via KcetCounselling.in &bull; Powered By <a href="https://www.famral.com/college-predictor" target="_blank">Famral College Predictor</a> &bull; Total Choices: ${savedChoices.length}</p>
                    <table>
                        <thead>
                            <tr>
                                <th style="width:10%;">Priority</th>
                                <th style="width:15%;">KEA Code</th>
                                <th style="width:45%;">College Name</th>
                                <th style="width:30%;">Branch / Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${savedChoices.map((c, i) => `
                                <tr>
                                    <td><strong>#${i + 1}</strong></td>
                                    <td>${c.code}</td>
                                    <td>${c.collegeName}</td>
                                    <td>${c.branchName}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </body>
            `;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
        alert('Pop-up window was blocked by your browser. Please allow pop-ups for this site or use "Copy List" instead.');
        return;
    }
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
    }, 250);
}

function resetPredictorForm() {
    document.getElementById('kcetPredictorForm').reset();
    document.getElementById('resultsContainer').classList.remove('active');
    currentMatches = [];
    activeTierFilter = 'all';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function togglePredictorFaq(btn) {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
    if (!isOpen) {
        item.classList.add('active');
    }
}

// On document load: Attach redundant listeners & check query param
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kcetPredictorForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            runCollegePrediction();
        });
    }
    const btn = document.getElementById('predictSubmitBtn');
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            runCollegePrediction();
        });
    }
    const rankInp = document.getElementById('userRank');
    if (rankInp) {
        rankInp.addEventListener('input', clearRankError);
        rankInp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                runCollegePrediction();
            }
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const rankParam = urlParams.get('rank');
    if (rankParam && !isNaN(parseInt(rankParam, 10))) {
        document.getElementById('userRank').value = rankParam;
        runCollegePrediction();
    }
});
