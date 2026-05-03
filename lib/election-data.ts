export interface ElectionTopic {
  id: string
  title: string
  shortTitle: string
  icon: string
  description: string
  content: ContentSection[]
  quiz?: QuizQuestion[]
  funFact?: string
  constitutionalArticle?: string
}

export interface ContentSection {
  heading: string
  body: string
  example?: string
  highlight?: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const electionTopics: ElectionTopic[] = [
  {
    id: "voting-rights",
    title: "Who Can Vote? Understanding Your Voting Rights",
    shortTitle: "Voting Rights",
    icon: "vote",
    description: "Discover who can vote in India and the fundamental right that makes you a part of the world's largest democracy.",
    constitutionalArticle: "Article 326 of the Indian Constitution",
    funFact: "India has over 960 million eligible voters as of 2024 – more than the entire population of Europe!",
    content: [
      {
        heading: "The Universal Adult Franchise",
        body: "In India, every citizen who is 18 years or older has the right to vote, regardless of their caste, religion, gender, education, or economic status. This is called Universal Adult Franchise. It means YOUR vote has the same power as anyone else's – whether you're a student, a farmer, a CEO, or a celebrity!",
        example: "Imagine you turn 18 on January 1st, 2025. From that day forward, you have the constitutional right to vote in any election – Lok Sabha, State Assembly, or local body elections. Your voice matters just as much as anyone else's!",
        highlight: "One Person, One Vote, One Value"
      },
      {
        heading: "Eligibility Criteria",
        body: "To vote in Indian elections, you must: (1) Be a citizen of India, (2) Be 18 years of age or older on the qualifying date, (3) Be a resident of the constituency where you want to vote, (4) Not be disqualified under any law (like unsound mind or certain criminal convictions), and (5) Be registered in the electoral roll.",
        example: "Rahul is 19, an Indian citizen living in Mumbai. He's eligible to vote. However, his friend from Nepal who's been living in India for 5 years cannot vote in Indian elections unless he becomes an Indian citizen.",
        highlight: "The qualifying date is usually January 1st of the year the electoral roll is prepared"
      },
      {
        heading: "Special Provisions",
        body: "India ensures that nobody is left out! Special provisions exist for: (1) Persons with disabilities (accessible polling booths, assistance), (2) Senior citizens (priority queues), (3) Service voters (postal ballots for armed forces), (4) NRIs (can vote if passport is valid and name is in electoral roll), and (5) Transgender persons (separate category in forms).",
        example: "A soldier posted at the Siachen glacier can vote through postal ballot. A visually impaired voter can bring a companion to assist them in the voting booth.",
        highlight: "The Election Commission provides Braille-enabled EVMs and wheelchairs at polling stations"
      }
    ],
    quiz: [
      {
        question: "At what age can an Indian citizen start voting?",
        options: ["16 years", "18 years", "21 years", "25 years"],
        correctAnswer: 1,
        explanation: "As per the 61st Amendment Act of 1988, the voting age in India was reduced from 21 to 18 years. This was done to empower the youth and increase their participation in democracy."
      },
      {
        question: "Which article of the Indian Constitution guarantees universal adult franchise?",
        options: ["Article 324", "Article 326", "Article 325", "Article 329"],
        correctAnswer: 1,
        explanation: "Article 326 states that elections to the Lok Sabha and Legislative Assemblies shall be on the basis of adult suffrage. Every person who is a citizen of India and is not less than 18 years of age is entitled to vote."
      },
      {
        question: "Can an NRI vote in Indian elections?",
        options: ["No, never", "Yes, if they have a valid passport and are registered", "Only in presidential elections", "Only if they own property in India"],
        correctAnswer: 1,
        explanation: "NRIs can vote in Indian elections at their original place of residence if they possess a valid Indian passport and are registered as an overseas elector. This was enabled by amendments to the Representation of the People Act."
      }
    ]
  },
  {
    id: "election-types",
    title: "Types of Elections in India",
    shortTitle: "Election Types",
    icon: "building",
    description: "From choosing your PM to your local ward councilor – understand the different levels of elections in the world's largest democracy.",
    constitutionalArticle: "Part XV of the Indian Constitution (Articles 324-329)",
    funFact: "India conducts elections at over 1 million polling stations – that's more than all the McDonald's outlets in the world!",
    content: [
      {
        heading: "Lok Sabha Elections (General Elections)",
        body: "The Lok Sabha or 'House of the People' is the lower house of Parliament. Elections are held every 5 years (or earlier if dissolved). India is divided into 543 constituencies, each electing one Member of Parliament (MP). The party or coalition with majority forms the government, and their leader becomes the Prime Minister.",
        example: "In the 2024 General Elections, India saw 642 million voters casting their votes across 7 phases over 44 days. That's like every person in Europe voting over a month and a half!",
        highlight: "543 seats = 543 battles across India"
      },
      {
        heading: "State Assembly Elections (Vidhan Sabha)",
        body: "Each state has its own Legislative Assembly. Elections are held every 5 years. MLAs (Members of Legislative Assembly) are elected from constituencies within the state. The party or coalition with majority forms the state government, and their leader becomes the Chief Minister.",
        example: "Uttar Pradesh has the largest assembly with 403 seats, while smaller states like Sikkim have only 32 seats. Each state has constituencies based on its population and geography.",
        highlight: "State elections can happen separately from national elections"
      },
      {
        heading: "Local Body Elections (Panchayat & Municipal)",
        body: "The 73rd and 74th Constitutional Amendments created a three-tier system: (1) Gram Panchayat (village level), (2) Block Panchayat/Panchayat Samiti (block level), (3) Zilla Panchayat (district level). In urban areas: Municipal Corporations for big cities, Municipal Councils for smaller towns, and Nagar Panchayats for transitional areas.",
        example: "When you vote for your Sarpanch (village head) or Municipal Corporator, you're participating in local body elections. These affect your daily life most directly – roads, water supply, garbage collection!",
        highlight: "One-third of all seats in local bodies are reserved for women"
      },
      {
        heading: "Rajya Sabha Elections (Indirect)",
        body: "The Rajya Sabha or 'Council of States' is the upper house. Unlike direct elections, MLAs vote to elect Rajya Sabha members. It has 245 members, with each state having seats based on population. Members serve 6-year terms, with one-third retiring every 2 years.",
        example: "You don't directly vote for Rajya Sabha members. Instead, the MLAs you elected in state elections vote on your behalf. It's like your representatives choosing representatives!",
        highlight: "12 Rajya Sabha members are nominated by the President for their expertise in arts, literature, science, or social service"
      },
      {
        heading: "Presidential & Vice-Presidential Elections",
        body: "The President is elected by an Electoral College consisting of elected MPs and MLAs. The voting power is weighted based on population. The Vice-President is elected by MPs of both houses of Parliament. Both serve 5-year terms.",
        example: "In Presidential elections, an MP's vote might be worth around 700 points, while an MLA from UP might have a vote worth around 208 points. This ensures population representation.",
        highlight: "The President is elected through Single Transferable Vote with proportional representation"
      }
    ],
    quiz: [
      {
        question: "How many constituencies are there for Lok Sabha elections?",
        options: ["435", "543", "545", "552"],
        correctAnswer: 1,
        explanation: "There are 543 elected members in the Lok Sabha. Additionally, the President can nominate 2 members from the Anglo-Indian community (though this provision was discontinued in 2020)."
      },
      {
        question: "Which Constitutional Amendment established Panchayati Raj?",
        options: ["42nd Amendment", "61st Amendment", "73rd Amendment", "86th Amendment"],
        correctAnswer: 2,
        explanation: "The 73rd Constitutional Amendment Act, 1992 gave constitutional status to Panchayati Raj institutions. It mandated regular elections, reservation for SC/ST and women, and established State Election Commissions."
      },
      {
        question: "How often are Rajya Sabha elections held?",
        options: ["Every 5 years", "Every 6 years", "Every 2 years (one-third members)", "Whenever needed"],
        correctAnswer: 2,
        explanation: "While each Rajya Sabha member serves a 6-year term, one-third of the members retire every 2 years. This ensures continuity – the Rajya Sabha is never fully dissolved, unlike the Lok Sabha."
      }
    ]
  },
  {
    id: "election-commission",
    title: "The Election Commission of India",
    shortTitle: "Election Commission",
    icon: "shield",
    description: "Meet the guardian of Indian democracy – the constitutional body that ensures free and fair elections.",
    constitutionalArticle: "Article 324 of the Indian Constitution",
    funFact: "The Election Commission has the power to even postpone elections if it deems necessary. During the 1991 elections, voting was postponed after Rajiv Gandhi's assassination!",
    content: [
      {
        heading: "What is the Election Commission?",
        body: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering elections in India. Established on January 25, 1950 (now celebrated as National Voters' Day), it ensures free, fair, and transparent elections at all levels – Parliament, State Legislatures, and the offices of President and Vice-President.",
        example: "Think of ECI as the umpire in a cricket match – it doesn't play for any team but ensures everyone follows the rules fairly. Just as no team can argue with the umpire's decision, political parties must follow ECI's guidelines.",
        highlight: "The ECI is the oldest election management body in South Asia"
      },
      {
        heading: "Structure & Composition",
        body: "The Commission consists of the Chief Election Commissioner (CEC) and Election Commissioners (currently 2). They are appointed by the President (with recommendations from a committee including PM, Leader of Opposition, and a Cabinet Minister). All have equal voting power. The CEC can only be removed through impeachment (like a Supreme Court judge).",
        example: "If there's a decision to make and the CEC and two ECs disagree, majority wins! The CEC doesn't have a veto. All three commissioners have equal say.",
        highlight: "The CEC has the same protection as a Supreme Court judge – removable only by Parliament through impeachment"
      },
      {
        heading: "Powers & Functions",
        body: "The ECI has vast powers: (1) Conducting elections for Parliament, State Assemblies, President, VP, (2) Preparing and revising electoral rolls, (3) Registering political parties and allotting symbols, (4) Implementing Model Code of Conduct, (5) Setting election schedules and phases, (6) Deciding election disputes (limited), (7) Supervising election machinery.",
        example: "During elections, even the Prime Minister must follow ECI's Model Code of Conduct. The ECI can order removal of officials it thinks aren't impartial, ban exit polls, and even order re-polling if it finds irregularities!",
        highlight: "The ECI can use Article 324 to fill gaps in election laws with its own directives"
      },
      {
        heading: "Model Code of Conduct (MCC)",
        body: "The MCC is a set of guidelines for political parties and candidates during elections. It covers: (1) General conduct – no hate speech, no personal attacks, (2) Meetings – inform police, no obstruction, (3) Processions – permission needed, (4) Polling – no campaigning within 48 hours of voting, (5) Government actions – no new schemes announced, no transfers, (6) Manifesto guidelines.",
        example: "Once elections are announced, the ruling government can't announce new welfare schemes or make promises using public funds. A CM can't inaugurate a new hospital or announce free laptops – that would be 'vote buying'!",
        highlight: "The MCC comes into force the moment elections are announced, not when voting begins"
      },
      {
        heading: "Technology in Elections",
        body: "India pioneered Electronic Voting Machines (EVMs) in 1982, fully transitioning by 2004. Now, VVPAT (Voter Verified Paper Audit Trail) machines let voters verify their vote. The ECI uses: Voter Helpline App (register, check status), cVIGIL app (report violations with photos/videos), and Elector Search portal. Recent pilots include remote voting for migrants.",
        example: "When you vote, the EVM records your vote, and the VVPAT shows you a paper slip with the party symbol for 7 seconds before it falls into a sealed box. This paper trail can be used to verify EVMs if questioned!",
        highlight: "India uses over 5.5 million EVMs – more than any other country in the world!"
      }
    ],
    quiz: [
      {
        question: "When was the Election Commission of India established?",
        options: ["15th August 1947", "26th January 1950", "25th January 1950", "26th November 1949"],
        correctAnswer: 2,
        explanation: "The Election Commission was established on 25th January 1950, a day before India became a Republic. This day is now celebrated as National Voters' Day to encourage voter registration and participation."
      },
      {
        question: "How can the Chief Election Commissioner be removed?",
        options: ["By the President", "By the Prime Minister", "Through impeachment like a Supreme Court judge", "By a simple majority in Parliament"],
        correctAnswer: 2,
        explanation: "Article 324(5) provides that the CEC can only be removed through the same process as a Supreme Court judge – impeachment by Parliament with a two-thirds majority on grounds of proved misbehavior or incapacity."
      },
      {
        question: "What does VVPAT stand for?",
        options: ["Voter Verification Paper Audit Trail", "Voter Verified Paper Audit Trail", "Verified Voter Paper Audit Trail", "Voting Verification Paper Audit Trail"],
        correctAnswer: 1,
        explanation: "VVPAT stands for Voter Verified Paper Audit Trail. It's a machine attached to EVMs that prints a paper slip showing the party symbol voted for, allowing voters to verify their vote before it's stored in a sealed box."
      }
    ]
  },
  {
    id: "election-process",
    title: "The Election Process: From Announcement to Results",
    shortTitle: "Election Process",
    icon: "workflow",
    description: "Follow the journey of how millions of votes are cast, counted, and a government is formed – step by step.",
    constitutionalArticle: "Representation of the People Act, 1950 & 1951",
    funFact: "The 2024 Indian General Election was the longest election in Indian history, spanning 44 days and 7 phases!",
    content: [
      {
        heading: "Step 1: Announcement & Schedule",
        body: "The Election Commission announces elections and releases the schedule. This includes: (1) Date of notification, (2) Last date for nominations, (3) Scrutiny of nominations, (4) Last date for withdrawal, (5) Date(s) of polling, (6) Date of counting. Multiple phases may be scheduled for larger elections to manage resources and security.",
        example: "In a typical Lok Sabha election, the EC might announce: Phase 1 voting on April 19, Phase 2 on April 26... all the way to Phase 7. The entire schedule is released at once so everyone can prepare.",
        highlight: "The Model Code of Conduct kicks in immediately when elections are announced"
      },
      {
        heading: "Step 2: Nominations",
        body: "Candidates file nomination papers with the Returning Officer. Requirements include: (1) Must be a voter in any constituency (not necessarily the one contesting from), (2) Security deposit – ₹25,000 for Lok Sabha, ₹10,000 for Assembly, (3) Proposers – varies by election, (4) Affidavit declaring criminal cases, assets, and educational qualifications. Independent candidates need more proposers than party candidates.",
        example: "If you want to contest elections, you need to file Form 2B (nomination), attach a security deposit, get proposers to sign, and submit an affidavit. If you don't get at least 1/6th of valid votes, you lose your deposit!",
        highlight: "Candidates must declare all criminal cases, assets, and liabilities – making Indian elections one of the most transparent"
      },
      {
        heading: "Step 3: Scrutiny & Withdrawal",
        body: "After nominations close, the Returning Officer scrutinizes all papers. Candidates can be rejected for: (1) Being below age, (2) Not being a citizen, (3) Having disqualifications (certain criminal convictions, holding office of profit), (4) Incomplete or incorrect forms. Candidates can withdraw their nomination before the withdrawal deadline.",
        example: "Sometimes political parties field multiple candidates and then ask some to withdraw to consolidate votes. Or sometimes candidates strategically withdraw to support others. Drama unfolds during withdrawal day!",
        highlight: "Once withdrawal deadline passes, candidates cannot back out – their names stay on the ballot"
      },
      {
        heading: "Step 4: Campaigning",
        body: "The campaign period is the exciting phase! Parties and candidates: (1) Hold rallies and public meetings, (2) Door-to-door campaigns, (3) Social media campaigns, (4) Release manifestos, (5) TV and newspaper ads. Rules: No campaigning 48 hours before voting ('silent period'), no paid news, expenditure limits (₹95 lakh for Lok Sabha, ₹40 lakh for Assembly in most states).",
        example: "A Lok Sabha candidate can spend maximum ₹95 lakh on their campaign in most states. This includes everything – vehicles, posters, hoardings, travel, even social media ads! EC flying squads check for excess spending.",
        highlight: "The 'silence period' of 48 hours before voting is meant to give voters time to reflect without last-minute influence"
      },
      {
        heading: "Step 5: Polling Day",
        body: "On voting day: (1) Polling stations open (usually 7 AM to 6 PM), (2) Voters show ID and get finger marked with indelible ink, (3) Vote on EVM with VVPAT verification, (4) EVMs are sealed and stored securely. Special provisions: Postal ballots for certain voters, home voting for very elderly/disabled (pilot schemes), transport to remote areas.",
        example: "You enter the polling station, show your Voter ID, get your finger inked, go to the voting compartment, press the button next to your chosen candidate, verify on VVPAT, and you're done! The whole process takes 2-3 minutes.",
        highlight: "The indelible ink used on fingers is made by Mysore Paints and Varnish Ltd – the only authorized manufacturer"
      },
      {
        heading: "Step 6: Counting & Results",
        body: "After all phases complete, counting happens simultaneously across all constituencies on 'Counting Day'. Process: (1) Postal ballots counted first, (2) EVMs from each round counted and recorded, (3) VVPAT verification of randomly selected 5 machines per constituency, (4) Results declared by Returning Officer. The candidate with most votes wins (First-Past-The-Post system).",
        example: "On counting day, news channels go into overdrive with live updates. Trends emerge by afternoon, and by evening, most results are clear. The whole nation watches as numbers change minute by minute!",
        highlight: "India follows the First-Past-The-Post system – whoever gets the most votes wins, even if it's not a majority"
      },
      {
        heading: "Step 7: Government Formation",
        body: "After results: (1) The party/alliance with majority (272+ in Lok Sabha) stakes claim, (2) Governor (state) or President (center) invites leader to form government, (3) Chief Minister/Prime Minister takes oath, (4) Council of Ministers appointed, (5) Government proves majority on floor of house within specified time. If no clear majority, we might see a 'hung assembly/parliament' leading to coalition talks!",
        example: "After the 2024 elections, no single party got 272 seats. Alliances were crucial! Leaders met, negotiated, and the alliance that proved majority support formed the government.",
        highlight: "The term 'hung parliament' means no single party has absolute majority – coalition politics takes center stage"
      }
    ],
    quiz: [
      {
        question: "How much security deposit is required to contest Lok Sabha elections?",
        options: ["₹10,000", "₹15,000", "₹25,000", "₹50,000"],
        correctAnswer: 2,
        explanation: "Candidates must deposit ₹25,000 for Lok Sabha elections (₹12,500 for SC/ST candidates). If they fail to secure 1/6th of total valid votes, this deposit is forfeited. For Assembly elections, it's ₹10,000 (₹5,000 for SC/ST)."
      },
      {
        question: "How many hours before polling must campaigning stop?",
        options: ["24 hours", "36 hours", "48 hours", "72 hours"],
        correctAnswer: 2,
        explanation: "The 'silence period' begins 48 hours before the polling ends. No public meetings, processions, or campaigning (including social media political ads) is allowed. This gives voters time to make a calm decision without last-minute influence."
      },
      {
        question: "What voting system does India follow for Lok Sabha elections?",
        options: ["Proportional Representation", "First-Past-The-Post", "Single Transferable Vote", "Mixed Member Proportional"],
        correctAnswer: 1,
        explanation: "India uses the First-Past-The-Post (FPTP) system where the candidate with the most votes wins, regardless of whether they have a majority. This is also called 'simple plurality system' and is used in UK and USA too."
      }
    ]
  },
  {
    id: "political-parties",
    title: "Political Parties & Symbols",
    shortTitle: "Parties & Symbols",
    icon: "users",
    description: "From national parties to regional players – understand how political parties work in Indian democracy.",
    constitutionalArticle: "Representation of the People Act, 1951 (Section 29A)",
    funFact: "India has over 2,700 registered political parties! But only 6-8 qualify as 'National Parties' at any given time.",
    content: [
      {
        heading: "What is a Political Party?",
        body: "A political party is a group of people who come together around common ideas and goals, seeking to form the government through elections. In India, parties must register with the Election Commission under Section 29A of the Representation of the People Act, 1951. Parties can be formed around ideologies (left, right, center), regional identity, caste, religion, or specific issues.",
        example: "BJP is considered right-of-center, Congress is center-left, CPI(M) is left-wing. Regional parties like TMC (West Bengal), DMK (Tamil Nadu), or TRS (Telangana) focus on regional issues and identity.",
        highlight: "Every registered party gets a unique symbol, but only recognized parties get 'reserved' symbols that only they can use"
      },
      {
        heading: "Categories of Political Parties",
        body: "The EC classifies parties as: (1) National Parties – win 2% of total Lok Sabha seats from at least 3 states, OR 6% votes in 4+ states with 4 Lok Sabha seats, OR recognized in 4+ states. (2) State Parties – 6% votes + 2 Assembly seats, OR 3% of Assembly seats, OR 1 Lok Sabha seat per 25 seats allotted, OR 8% votes in the state. (3) Registered Unrecognized Parties – all others.",
        example: "As of 2024, there are 6 National Parties: BJP, INC, BSP, CPI(M), AAP, and NPP. This list changes based on election performance! TMC lost national party status in 2024, while AAP gained it.",
        highlight: "National party status gives benefits like reserved symbol across India, free airtime on Doordarshan/AIR, and 40 'star campaigners'"
      },
      {
        heading: "Party Symbols",
        body: "Election symbols help illiterate voters identify parties. Symbols are of two types: (1) Reserved – exclusively for recognized parties (lotus for BJP, hand for Congress), (2) Free – available for independents and unrecognized parties to request. The EC maintains a list of free symbols. If a party splits, EC decides who keeps the symbol!",
        example: "When Shiv Sena split in 2022, both factions claimed the 'bow and arrow' symbol. The EC had to decide based on which faction had majority support among MPs and MLAs. This became a huge political battle!",
        highlight: "The most contested symbol case was Congress (Indira) vs Congress (Urs) in 1978, leading to the iconic 'Hand' symbol"
      },
      {
        heading: "Party Registration & Rules",
        body: "To register a party, submit: (1) Application with ₹10,000 fee, (2) Party constitution and memorandum, (3) List of at least 100 founding members (from different states if seeking national recognition), (4) Statement of assets, (5) Commitment to uphold Constitution and democracy. Parties must: file annual audit reports, conduct internal elections, follow EC guidelines on donations, and maintain expenditure records.",
        example: "When AAP (Aam Aadmi Party) was formed in 2012, it had to submit all these documents, contest elections, and gradually gain state party status in Delhi before achieving national party status in 2023 after winning in Punjab.",
        highlight: "Parties must update their list of office bearers and inform EC of any changes within 30 days"
      },
      {
        heading: "Coalition Politics in India",
        body: "Since no single party has won absolute majority consistently (except 1984 and 2014-2019), coalition governments are common. Major alliances: (1) NDA (National Democratic Alliance) – led by BJP, (2) INDIA (Indian National Developmental Inclusive Alliance) or earlier UPA – led by Congress. Regional parties often play 'kingmaker' roles, bargaining for ministerial positions and policy concessions.",
        example: "In 2024, BJP needed alliance partners to form the government. JD(U) and TDP became crucial allies, bargaining for key ministries and development funds for their states. This is coalition dharma!",
        highlight: "Coalition governments need constant consensus-building – allies can threaten to withdraw support if unhappy"
      }
    ],
    quiz: [
      {
        question: "How many National Parties are there in India (as of 2024)?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "As of 2024, there are 6 National Parties: BJP, INC (Congress), BSP, CPI(M), AAP, and NPP (National People's Party). TMC lost its status while AAP and NPP gained it after the 2024 elections."
      },
      {
        question: "What is one criterion for a party to be recognized as a National Party?",
        options: ["Win in 2 states", "Get 10% votes nationally", "Win 2% of Lok Sabha seats from at least 3 states", "Have 50 MPs"],
        correctAnswer: 2,
        explanation: "One criterion is winning at least 2% of total Lok Sabha seats (11 seats) with MPs elected from at least 3 states. Other criteria include getting 6% votes in 4+ states with 4 Lok Sabha seats each, or being recognized as a State Party in at least 4 states."
      },
      {
        question: "Who decides which faction keeps the party symbol in case of a split?",
        options: ["Supreme Court", "Election Commission", "President of India", "Speaker of Lok Sabha"],
        correctAnswer: 1,
        explanation: "The Election Commission has the authority to decide on party symbols under the Election Symbols (Reservation and Allotment) Order, 1968. It typically considers which faction has majority support among elected legislators and party delegates."
      }
    ]
  },
  {
    id: "voter-registration",
    title: "How to Register & Check Your Vote",
    shortTitle: "Voter Registration",
    icon: "clipboard",
    description: "Your step-by-step guide to becoming part of the democratic process – from registration to getting your voter ID.",
    constitutionalArticle: "Registration of Electors Rules, 1960",
    funFact: "You can register as a voter 3 months before you turn 18! Your name will be added to the electoral roll on your 18th birthday.",
    content: [
      {
        heading: "When & Where to Register",
        body: "You can register as a voter if you're 18 years old (or will turn 18 by January 1, April 1, July 1, or October 1 of the qualifying year – these are the four qualifying dates). Register where you 'ordinarily reside' – this could be your hometown, hostel, or rented apartment. Students can register at their college address!",
        example: "Priya is 17 and will turn 18 on February 15, 2025. She can apply now using April 1, 2025 as her qualifying date. Her name will appear in the electoral roll from April 1, 2025, and she can vote in any election after that!",
        highlight: "The four qualifying dates are January 1, April 1, July 1, and October 1 – check which one applies to you"
      },
      {
        heading: "Online Registration (Easiest!)",
        body: "Method 1 – Voter Helpline App: Download from Play Store/App Store, register with mobile number, fill Form 6 online. Method 2 – NVSP Portal (voterportal.eci.gov.in): Create account, apply for new registration. Documents needed: (1) Age proof (birth certificate, passport, Aadhaar, marksheet), (2) Address proof (Aadhaar, utility bill, bank statement), (3) Passport photo. You'll get an Application Reference Number to track status.",
        example: "Open the Voter Helpline App → Click 'New Registration' → Fill Form 6 → Upload photo and documents → Submit → Note your reference number → Track status online → BLO will visit for verification → Receive EPIC (voter ID) by post!",
        highlight: "The entire process is FREE! You don't need to pay any middleman or agent"
      },
      {
        heading: "Offline Registration",
        body: "If you prefer paper: (1) Get Form 6 from your local Electoral Registration Office (ERO), BLO, or download from NVSP. (2) Fill it completely. (3) Attach self-attested photo and documents. (4) Submit to BLO, ERO office, or during special registration drives. The BLO (Booth Level Officer) will visit your address for verification.",
        example: "During college elections preparation, many universities organize voter registration camps. Election officials set up booths in college premises – you can walk in with documents and register on the spot!",
        highlight: "BLOs are your local election officials – they manage about 1,500 voters each and can help you register"
      },
      {
        heading: "Check Your Registration Status",
        body: "Already applied? Check status via: (1) Voter Helpline App – enter EPIC number or reference number, (2) NVSP Portal – search by EPIC or name, (3) SMS – send SMS to 1950 with your details, (4) Call – dial 1950 (toll-free). If you're already registered but moved to a new address, fill Form 6 for new registration or Form 8A for address change within the same constituency.",
        example: "Type your name, father's name, age, and state on electoralsearch.eci.gov.in – if your name appears, you're registered and can vote! You'll also see your polling station details.",
        highlight: "Check your voter registration well before elections – don't wait until the last moment!"
      },
      {
        heading: "Common Forms You Should Know",
        body: "Form 6 – New voter registration (first-time voters, shifting to new constituency). Form 6B – Declaration of Aadhaar number (linking Aadhaar to voter ID). Form 7 – Objection to inclusion of name (report bogus voters). Form 8 – Correction of entries (name spelling, photo, etc.). Form 8A – Change of address within same constituency. Each form is available online on the NVSP portal.",
        example: "Found that your name has an extra 'a' (Priyaa instead of Priya)? Fill Form 8 to correct it. Moved from Bandra West to Andheri West? Fill Form 8A (same Mumbai constituency). Moved from Mumbai to Delhi? Fill Form 6 for new registration.",
        highlight: "Form 6B is important now – linking Aadhaar to Voter ID helps clean up electoral rolls"
      },
      {
        heading: "Getting Your Voter ID Card (EPIC)",
        body: "EPIC = Elector's Photo Identity Card. After verification, your EPIC is: (1) Sent to your address by post, (2) Can be downloaded digitally via DigiLocker or Voter Helpline App. The e-EPIC (digital version) is equally valid for voting! Your EPIC has: Name, Photo, Father's/Husband's name, Date of Birth, Gender, Address, EPIC number, and QR code.",
        example: "Rahul lost his physical voter ID card. No problem! He downloaded his e-EPIC from DigiLocker on his phone. On voting day, he showed the e-EPIC at the polling station and voted successfully.",
        highlight: "e-EPIC is valid for voting – you don't need the physical card if you have the digital version on your phone or DigiLocker"
      }
    ],
    quiz: [
      {
        question: "Which form do you fill for new voter registration?",
        options: ["Form 1", "Form 6", "Form 8", "Form 11"],
        correctAnswer: 1,
        explanation: "Form 6 is used for new voter registration – whether you're a first-time voter or you've shifted to a new constituency. Form 8 is for corrections, Form 8A is for address change within the same constituency."
      },
      {
        question: "What are the qualifying dates for voter registration?",
        options: ["Only January 1", "January 1 and July 1", "January 1, April 1, July 1, October 1", "The date you turn 18"],
        correctAnswer: 2,
        explanation: "There are four qualifying dates each year: January 1, April 1, July 1, and October 1. If you turn 18 after one qualifying date, you can apply using the next qualifying date. This continuous updating helps more young voters get registered promptly."
      },
      {
        question: "What is the toll-free number for voter helpline?",
        options: ["1900", "1950", "1800", "1947"],
        correctAnswer: 1,
        explanation: "1950 is the National Voter Helpline – a toll-free number where you can check your voter registration status, find your polling station, report complaints, and get general election information."
      }
    ]
  },
  {
    id: "your-rights",
    title: "Your Rights as a Voter",
    shortTitle: "Voter Rights",
    icon: "check-circle",
    description: "Know your rights! From secret ballot to NOTA – understand what protections Indian democracy gives you.",
    constitutionalArticle: "Article 326, Representation of the People Act 1951",
    funFact: "India introduced NOTA (None of the Above) in 2013 after a Supreme Court judgment. In some elections, NOTA has received more votes than some candidates!",
    content: [
      {
        heading: "Right to Vote Freely",
        body: "Your vote is: (1) Secret – nobody can see who you voted for, (2) Free – nobody can force you to vote a certain way, (3) Equal – your vote counts the same as anyone else's. Influencing voters through money, gifts, threats, or religious/caste appeals is illegal under Section 123 of RPA. You can complain to the EC if anyone tries to influence you.",
        example: "A local politician offers you ₹500 to vote for their party. This is illegal bribery under Section 171B of IPC. You can report this to the EC via cVIGIL app with photo/video evidence. The candidate can be disqualified!",
        highlight: "Booth capturing, voter intimidation, and bribing are serious crimes – violators can be jailed and candidates disqualified"
      },
      {
        heading: "NOTA – None of the Above",
        body: "Introduced in 2013 after the PUCL vs Union of India Supreme Court judgment, NOTA allows you to reject all candidates without revealing your choice. It's always the last button on the EVM. However, currently NOTA is only symbolic – even if NOTA gets the most votes, the candidate with the next highest votes wins.",
        example: "In a constituency, voting results are: Candidate A - 30,000, Candidate B - 28,000, Candidate C - 25,000, NOTA - 35,000. Despite NOTA winning, Candidate A is declared the winner. But NOTA's high count sends a strong message about voter dissatisfaction!",
        highlight: "NOTA lets you participate in democracy while expressing disapproval of all candidates"
      },
      {
        heading: "Right to Know About Candidates",
        body: "Thanks to SC judgments, candidates must declare: (1) All criminal cases (pending and convicted), (2) Assets and liabilities of self and spouse, (3) Educational qualifications, (4) Income sources, (5) Professional background. This information is public! You can check it on the EC website or MyNeta.info before voting.",
        example: "Before voting, check your candidates on myneta.info. You'll see if they have criminal cases, their net worth, education level, and more. Many candidates have declared assets worth crores – transparency helps you decide!",
        highlight: "Candidates with criminal cases must publicize this fact in newspapers and TV before elections"
      },
      {
        heading: "Accessibility Rights",
        body: "The EC ensures nobody is excluded: (1) Ramps at polling stations for wheelchair users, (2) Braille-enabled EVMs for visually impaired voters, (3) Sign language interpreters on request, (4) Companion allowed in voting booth for those who need assistance, (5) Priority queues for senior citizens, pregnant women, and disabled voters, (6) Home voting for elderly 80+ and PwD voters (pilot).",
        example: "Sunita, who is visually impaired, goes to vote. The polling officer guides her to a Braille-enabled EVM, and she brings a trusted companion who helps her locate the correct button. She votes independently!",
        highlight: "Every polling station must have basic accessibility – ramp, seating, drinking water, and shade"
      },
      {
        heading: "Right to Complain",
        body: "Found something wrong? You can: (1) File complaint on cVIGIL app with photo/video – it reaches Flying Squad within 100 minutes, (2) Call 1950 voter helpline, (3) Complaint to Returning Officer or District Election Officer, (4) Report on EC's Samadhan portal, (5) Approach Election Observer. Complaints about MCC violations, distribution of money/liquor, or voter intimidation are taken seriously.",
        example: "You see a candidate distributing cash near a polling booth. Open cVIGIL app → Click on incident → Take photo/video → Submit with location. Flying Squad will reach within 100 minutes to investigate!",
        highlight: "cVIGIL stands for Citizens' Vigil – you become the eyes and ears of the Election Commission"
      },
      {
        heading: "Right to Leave from Work",
        body: "Section 135B of RPA guarantees paid leave to vote! Your employer must give you 'reasonable time' to vote. No deduction from salary. This applies to both government and private sector employees. If your workplace and polling station are far apart, you can claim travel time too.",
        example: "Raj works in a factory in Gurgaon but is registered to vote in Jaipur. He can request leave to travel and vote. The factory cannot deny this or deduct his wages. If they do, they can be fined up to ₹500!",
        highlight: "Denying an employee time to vote is punishable with fine – your right to vote is legally protected"
      }
    ],
    quiz: [
      {
        question: "When was NOTA introduced in Indian elections?",
        options: ["2009", "2013", "2017", "2019"],
        correctAnswer: 1,
        explanation: "NOTA was introduced in 2013 following the Supreme Court judgment in PUCL vs Union of India. The court held that voters should have the right to reject all candidates while maintaining secrecy of their choice."
      },
      {
        question: "What happens if NOTA gets the most votes in a constituency?",
        options: ["Fresh elections are held", "The seat remains vacant", "The candidate with next highest votes wins", "President decides the winner"],
        correctAnswer: 2,
        explanation: "Currently, NOTA is only a symbolic option. Even if NOTA receives the most votes, the candidate with the next highest votes is declared the winner. However, many activists are demanding that high NOTA votes should trigger re-elections."
      },
      {
        question: "Which app can you use to report election violations?",
        options: ["VoterApp", "cVIGIL", "ElectioWatch", "EC Complaints"],
        correctAnswer: 1,
        explanation: "cVIGIL (Citizens' Vigil) is the official EC app to report election violations. You can submit photo/video evidence with location, and the Flying Squad is mandated to respond within 100 minutes. It's your tool to ensure clean elections!"
      }
    ]
  }
]

export interface TimelineEvent {
  day: string
  title: string
  description: string
  icon: string
}

export const electionTimeline: TimelineEvent[] = [
  {
    day: "Day 0",
    title: "Election Announcement",
    description: "Election Commission announces dates. Model Code of Conduct comes into effect immediately. No new government schemes can be announced.",
    icon: "megaphone"
  },
  {
    day: "Day 1-7",
    title: "Notification Issued",
    description: "Formal notification published in the Gazette. This officially calls the election. Candidates can start preparing nominations.",
    icon: "scroll"
  },
  {
    day: "Day 7-14",
    title: "Filing Nominations",
    description: "Candidates file nomination papers with the Returning Officer. Deposit security amount. Submit affidavits declaring assets and criminal cases.",
    icon: "file-text"
  },
  {
    day: "Day 15",
    title: "Scrutiny Day",
    description: "Returning Officer examines all nominations. Invalid nominations are rejected. Candidates can correct minor defects.",
    icon: "search"
  },
  {
    day: "Day 17",
    title: "Last Date for Withdrawal",
    description: "Candidates can withdraw their nomination until 3 PM. Final list of candidates is prepared. Symbols are allocated.",
    icon: "user-minus"
  },
  {
    day: "Day 18-30",
    title: "Campaign Period",
    description: "Intense campaigning begins. Rallies, door-to-door campaigns, TV debates. Social media fills up with political content!",
    icon: "trending-up"
  },
  {
    day: "Day 30 (48 hrs before)",
    title: "Campaign Ends",
    description: "All campaigning must stop 48 hours before voting. 'Silence period' begins. No public meetings, no political ads.",
    icon: "volume-x"
  },
  {
    day: "Polling Day",
    title: "Voting Day",
    description: "Polls open (usually 7 AM - 6 PM). You exercise your democratic right! EVMs record votes. VVPAT provides verification.",
    icon: "check-square"
  },
  {
    day: "Counting Day",
    title: "Results Declared",
    description: "Usually 3-4 days after last phase. Postal ballots counted first, then EVMs. Results trickle in through the day. Winners declared!",
    icon: "award"
  },
  {
    day: "Within 15 days",
    title: "Government Formation",
    description: "Winning party/alliance stakes claim. Leader takes oath as PM/CM. Council of Ministers appointed. Democracy in action!",
    icon: "landmark"
  }
]
