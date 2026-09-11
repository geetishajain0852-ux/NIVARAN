/**
 * NIVARAN Platform Web Application
 * Complete Interactive Application Logic
 * Role-Aware Architecture, Leaflet Geo-Integration, AI Match Engine,
 * Clustered Duplicate Engine, Collaborative Workspace & Statutory CSR Attestation
 */

// ============================================================================
// 1. MASTER 18 CIVIC DOMAINS & SYSTEM CONFIGURATION
// ============================================================================

const DOMAIN_CONFIG = {
  'Healthcare': { key: 'Healthcare', label: 'Healthcare', color: '#0369A1', bg: '#F0F9FF', border: '#BAE6FD' },
  'Cleanliness & Sanitation': { key: 'Cleanliness & Sanitation', label: 'Cleanliness & Sanitation', color: '#0F766E', bg: '#F0FDFA', border: '#99F6E4' },
  'Women Safety': { key: 'Women Safety', label: 'Women Safety', color: '#9F1239', bg: '#FFF1F2', border: '#FECDD3' },
  'Street Lighting': { key: 'Street Lighting', label: 'Street Lighting', color: '#B45309', bg: '#FFFBEB', border: '#FDE68A' },
  'Water Shortage': { key: 'Water Shortage', label: 'Water Shortage', color: '#1B4942', bg: '#EDF4F0', border: '#CADED4' },
  'Electricity Cuts': { key: 'Electricity Cuts', label: 'Electricity Cuts', color: '#C2410C', bg: '#FFF7ED', border: '#FED7AA' },
  'Education': { key: 'Education', label: 'Education', color: '#3730A3', bg: '#EEF2FF', border: '#C7D2FE' },
  'Agriculture & Farming': { key: 'Agriculture & Farming', label: 'Agriculture & Farming', color: '#166534', bg: '#F0FDF4', border: '#BBF7D0' },
  'Environment & Pollution': { key: 'Environment & Pollution', label: 'Environment & Pollution', color: '#2D6A4F', bg: '#EDF4F0', border: '#CADED4' },
  'Infrastructure & Roads': { key: 'Infrastructure & Roads', label: 'Infrastructure & Roads', color: '#334155', bg: '#F8FAFC', border: '#CBD5E1' },
  'Public Transport': { key: 'Public Transport', label: 'Public Transport', color: '#1E3A5F', bg: '#F0F4F8', border: '#CBD5E1' },
  'Waste Management': { key: 'Waste Management', label: 'Waste Management', color: '#047857', bg: '#ECFDF5', border: '#A7F3D0' },
  'Disaster Management': { key: 'Disaster Management', label: 'Disaster Management', color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA' },
  'Employment & Livelihood': { key: 'Employment & Livelihood', label: 'Employment & Livelihood', color: '#6D28D9', bg: '#F5F3FF', border: '#DDD6FE' },
  'Digital Literacy': { key: 'Digital Literacy', label: 'Digital Literacy', color: '#1D4ED8', bg: '#EFF6FF', border: '#BFDBFE' },
  'Elderly & Disabled Care': { key: 'Elderly & Disabled Care', label: 'Elderly & Disabled Care', color: '#7E22CE', bg: '#FAF5FF', border: '#E9D5FF' },
  'Child Welfare': { key: 'Child Welfare', label: 'Child Welfare', color: '#BE185D', bg: '#FDF2F8', border: '#FBCFE8' },
  'Other': { key: 'Other', label: 'Other', color: '#475569', bg: '#F1F5F9', border: '#CBD5E1' }
};

const DOMAIN_ALIASES = {
  'water': 'Water Shortage',
  'Water Resources & Sanitation': 'Water Shortage',
  'waste': 'Waste Management',
  'mobility': 'Public Transport',
  'Urban Traffic & Mobility': 'Public Transport',
  'energy': 'Electricity Cuts',
  'Clean Energy & Microgrids': 'Electricity Cuts',
  'health': 'Healthcare',
  'Public Health & Safety': 'Healthcare',
  'Women & Public Safety': 'Women Safety',
  'environment': 'Environment & Pollution',
  'Environment & Clean Air': 'Environment & Pollution'
};

function getDomainMeta(domainKey) {
  const norm = DOMAIN_ALIASES[domainKey] || domainKey;
  return DOMAIN_CONFIG[norm] || DOMAIN_CONFIG['Other'];
}

function renderDomainBadge(domainKey, extraClasses = '') {
  const meta = getDomainMeta(domainKey);
  return `<span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${extraClasses}" style="background-color: ${meta.bg}; color: ${meta.color}; border: 1px solid ${meta.border};">${meta.label}</span>`;
}

// ============================================================================
// 1B. MULTILINGUAL TRANSLATION DICTIONARY (ALL 17 JHARKHAND LANGUAGES)
// State-recognized and widely spoken languages across Jharkhand's districts & tribal belts
// ============================================================================

const TRANSLATIONS = {
  en: {
    name: 'English',
    nativeName: 'English (EN)',
    tagline: 'From Reported to Resolved',
    subTagline: 'Connecting Jharkhand Civic Need with Campus Brainpower & Industry Capital',
    heroDesc: 'Nivaran turns civic problems across Jharkhand into structured challenges, intelligently matches them to university expertise (BIT Mesra, IIT ISM Dhanbad, NIT Jamshedpur, IIT Bombay, IISc), and pairs them with industry CSR backing — so no local problem stalls at the idea stage.',
    exploreChallenges: 'Explore Live Challenges',
    selectRole: 'Select Your Role',
    navHome: 'Home',
    navChallenges: 'Challenges',
    navLeaderboard: 'Leaderboard & Awards',
    navPost: 'Post a Challenge',
    navPortals: 'Portals & Tools',
    navWorkspace: 'Workspace',
    navReview: 'Industry Review',
    navDashboard: 'Public Dashboard',
    navProfile: 'My Profile',
    navSignUp: 'Sign Up',
    navLogOut: 'Switch / Log Out',
    notifTitle: 'Notifications',
    markAllRead: 'Mark all read',
    noNotifications: 'No new notifications.',
    backToChallenges: '← Back to Challenges',
    offlineBanner: "You're offline — showing cached data. New actions will be queued and synced automatically when reconnected.",
    priorityScore: 'Priority Score',
    highFrequency: 'High Frequency',
    tapToSpeak: 'Tap to Speak',
    listening: 'Listening... Speak now',
    voiceActive: 'Voice input active',
    bestOfJharkhand: 'Best of Jharkhand',

    // Leaderboard Tabs & Banners
    tabCampusLeaderboard: 'Campus Leaderboard',
    tabOriginDistrictAwards: 'Best of Jharkhand: Problem Origin Awards',
    tabHallOfImpact: 'Hall of Impact',
    solverRecognitionBadge: 'National & Jharkhand Solver Recognition',
    seasonBadge: '• Q3 2026 Season',
    leaderboardPageHeading: 'Campus Leaderboard & Problem Origin Innovation Awards',
    leaderboardPageDesc: "Celebrating university labs, student innovators, and breakthrough civic deployments solving Jharkhand's civic challenges across India. Rank, earn Division Awards, and unlock Pre-Placement Offers (PPOs).",

    // Leaderboard Filters & Table Headers
    filterCollegeLabel: 'Filter by College / University',
    filterAllColleges: 'All Universities & Colleges (Nationwide)',
    filterDomainLabel: 'Filter by Civic Domain',
    filterAllDomains: 'All Domains (18)',
    filterTimeLabel: 'Time Period',
    timeMonth: 'This Month (Sep 2026)',
    timeQuarter: 'This Quarter (Q3 2026)',
    timeAllTime: 'All-Time Cumulative',
    rankingTableTitle: 'Solvers Ranking Table (Nationwide & State)',
    rankingTableSubtitle: 'Updated from verified field deployments',
    rankCol: 'Rank',
    teamCol: 'University Team & Lab',
    domainCol: 'Primary Domain',
    solvedCol: 'Challenges Solved',
    impactCol: 'Impact Score',
    upvotesCol: 'Upvotes',
    ppoCol: 'Recognition & PPO',
    actionCol: 'Action',
    nationalRank: 'National Rank',
    stateRank: 'State Rank',
    ppoOffered: 'PPO Offered',
    inReview: 'In Review',
    leadSolverLabel: 'Lead',
    solverInstitutionLabel: 'Solver Institution',
    statSolved: 'Solved',
    statImpact: 'Impact',
    statUpvotes: 'Upvotes',
    viewSolverProfile: 'View Lab Solver Profile',
    btnProfile: 'Profile ↗',

    // Problem Origin Awards
    awardAttributionTag: 'Problem Origin District Attribution',
    awardsTitle: 'Best of Jharkhand: District Problem Origin Innovation Awards (Q3 2026)',
    awardsDesc: "Awards are grouped by the specific Jharkhand district where the civic problem originated — credited to whichever university or industry team successfully resolved it, regardless of the solver's home location.",
    originProblemLabel: 'Problem Origin:',
    impactedPopulationLabel: 'Impacted Population:',
    winningSolversLabel: 'Winning Civic Solvers:',
    ptsUnit: 'pts',

    // Hall of Impact
    hallRolloutBadge: 'Statewide Scaled Rollout',
    hallTitle: 'Hall of Impact: Scaled Jharkhand Civic Deployments',
    hallDesc: "Permanent archive honoring civic innovations scaled across Jharkhand's administrative divisions and municipal bodies.",
    hallLeadLab: 'Lead Lab',
    hallCsrSponsor: 'Industry Sponsor',
    hallScaledAcross: 'Scaled Deployment',
    hallBeneficiaries: 'Direct Beneficiaries',
    hallImpact: 'Impact Highlight',

    // Challenges Listing
    activeChallengesHeading: 'Active Civic Challenges',
    activeChallengesDesc: 'Showing challenges scored against your profile expertise. University teams can apply to solve, and industry partners can adopt to sponsor.',
    gridViewBtn: 'Grid View',
    mapViewBtn: 'Map View',
    postChallengeBtn: '+ Post Challenge',
    searchPlaceholder: 'Search title, city, keyword...',
    anyMatchFilter: 'Any Match %',
    allStatusesFilter: 'All Statuses',
    priorityScoreSort: 'Priority Score (Default)',
    clusteredBadgeText: 'Clustered Challenge',
    peopleAffectedLabel: 'People Affected',
    pinsViewBtn: '📍 Pins View',
    problemHeatmapBtn: '🔥 Problem Density Heat Map',
    densityHigh: 'High Problem Density (Hotspot)',
    densityMed: 'Moderate Problem Density',
    densityLow: 'Baseline / Single Issue',

    // Dashboard
    statChallengesPosted: 'Total Challenges Posted',
    statPilotedDeployed: 'Piloted & Deployed',
    statUniversitySolvers: 'University Solvers Involved',
    statCsrPartners: 'Industry CSR Partners',
    statPeopleAffected: 'Citizens Impacted',
    districtDensityHeading: 'Jharkhand District Problem Density Heat Map',
    districtDensityDesc: "Darker hot zones represent concentrated urban & environmental challenge clusters across Jharkhand's 5 administrative divisions.",
    viewFullHeatMapBtn: 'View Full Interactive Heat Map →',
    civicPipelineHeading: 'Jharkhand Civic Challenge Pipeline',
    civicPipelineDesc: 'Read-only milestone tracker open to all citizens, researchers, and government departments.',
    reportNewProblemBtn: '+ Report New Problem',

    // Challenge Detail
    editSubmissionBtn: 'Edit Submission',
    upvotesLabel: 'Upvotes',
    peopleImpactedPrefix: 'People Affected:',
    aiMatchScoreLabel: 'AI Profile Match Score',
    verifiedMatchBadge: 'Verified Match',
    pipelineProgressTitle: 'Status Pipeline Progress',
    stakeholderRosterTitle: 'Stakeholder Engagement & Pipeline Roster',
    proposalsSubmittedTitle: 'Proposals Submitted',
    interestedResearchersTitle: 'Interested Researchers',
    committedIndustryTitle: 'Committed Industry',
    openCrossCampus: 'Open for cross-campus solver pairing',
    problemStatementHeading: 'Problem Statement & Background',
    requiredCapabilitiesHeading: 'Required Core Capabilities',
    problemLocationCoords: 'Problem Location Coordinates',
    verifiedGovtAssessment: '🏛 Verified Govt Assessment',
    jharkhandCivicGovernance: 'Jharkhand Civic Governance',
    submitGovtReviewBtn: 'Submit / Update Govt Review →',
    applyToSolveBtn: 'Apply to Solve (Form Student Team)',
    adoptChallengeBtn: 'Adopt Challenge (Sponsor CSR / Resources)',
    officialGovtReviewBtn: '🏛 Official Govt Review & Clearance',
    enterWorkspaceBtn: 'Enter Collaborative Workspace →',
    stakeholderCollaboration: 'Stakeholder Collaboration',
    matchedUniversityTeam: 'Matched University Team',
    industryCsrSponsor: 'Industry CSR Sponsor',

    // Post Challenge Form
    postChallengeHeading: 'Post a Community Challenge',
    postChallengeSubtitle: 'Submit your localized issue with coordinates. Our engine checks for duplicate problems across Jharkhand to cluster solutions for statewide impact.',
    guidedVoiceBtn: '🎙️ Guided Voice-Fill (बोलकर फॉर्म भरें)',
    editingActiveSubmission: 'Editing Active Submission:',
    updateFieldsLive: 'Update fields and save your modifications live.',
    cancelEditBtn: 'Cancel Edit',
    domainCategoryLabel: 'Domain / Category *',
    challengeTitleLabel: 'Challenge Title *',
    estimatedPeopleLabel: 'Estimated People Impacted / Affected *',
    autoEstimateBtn: '✨ Auto-Estimate',
    districtLabel: 'Jharkhand District / Urban Area *',
    detailedDescriptionLabel: 'Detailed Description *',
    problemLocationLabel: 'Problem Location (Drop Pin or Use GPS) *',
    useCurrentLocation: 'Use My Current Location',
    evidenceLabel: 'Photo / Video Evidence (Optional)',
    submitterNameLabel: 'Your Name / Organization *',
    submitterContactLabel: 'Email / Phone Number *',
    publishChallengeBtn: 'Publish Civic Challenge',

    // Industry Adoption Modal
    adoptChallengeHeading: 'Adopt Challenge for Mentorship & Sponsorship',
    adoptChallengeDesc: 'Choose how your company supports this civic challenge: Funding, Mentorship, Equipment, Internships, Infrastructure, Technical Consultation, or Observer.',
    industrySponsorshipBadge: 'Industry CSR Sponsorship',
    companyNameLabel: 'Company / Foundation Name *',
    supportTypeLabel: 'Select Contribution Types (Optional & Multi-Select):',
    offerFundingOption: 'Sponsor CSR Pilot Grant',
    offerMentorshipOption: 'Provide Technical Mentorship & Guidance',
    offerEquipmentOption: 'Equipment & Hardware Resource Support',
    offerInternshipsOption: 'Student Internships & Pre-Placement Offers (PPOs)',
    offerInfraOption: 'Infrastructure, Testbed & Lab Access',
    offerAdvisoryOption: 'Technical Consultation & Municipal Liaison',
    offerOtherOption: 'Other Voluntary Contribution',
    otherContributionPlaceholder: 'Describe custom contribution (e.g. cloud credits, specialized tooling)...',
    neitherCommitmentNotice: '* All contribution options are voluntary and multi-select. You can leave all unchecked to track as an industry observer.',
    grantAmountLabel: 'Grant Amount (₹) (Optional)',
    mentorshipHoursLabel: 'Mentorship Hours (Optional)',
    pilotCommitmentNotesLabel: 'Partnership Notes (Optional)',
    confirmAdoptionBtn: 'Confirm Challenge Adoption →',

    // Workspace & Review
    tabKanban: 'Kanban Board',
    tabSharedDocs: 'Shared Docs',
    tabTeamChat: 'Team Chat',
    tabMentorReviews: 'Mentor Reviews',
    tabIdeaBacklog: 'Idea Backlog',
    submitPrototypeBtn: 'Submit Prototype Solution',
    uploadMediaBtn: 'Upload Media',
    sampleMediaBtn: 'Sample Media',
    sendBtn: 'Send',
    chatPlaceholder: 'Type message or updates...',
    rejectBtn: 'Reject (Request Revisions)',
    acceptForPilotBtn: 'Accept for Pilot',
    flagPpoBtn: 'Flag for PPO',
    certSentBadge: '✓ Certificate sent to student team',
    viewCsrReportBtn: 'View Statutory CSR Report',

    // Profile
    myCivicProfile: 'My Civic Profile',
    editProfileBtn: 'Edit Profile',
    switchLogOutBtn: 'Switch / Log Out',
    academicCredentialsHeading: 'University & Academic Credentials',
    verifiedProfileRecord: 'Verified Profile Record',
    activeEngagementsHeading: 'Active Engagements & National Impact',
    verifiedCertificatesHeading: 'Verified Civic Resolution Certificates'
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी (Hindi)',
    tagline: 'समस्या से समाधान तक',
    subTagline: 'झारखंड की नागरिक आवश्यकताओं को विश्वविद्यालय प्रतिभा और औद्योगिक सहयोग से जोड़ना',
    heroDesc: 'निवारण झारखंड भर की जनसमस्याओं को संरचित चुनौतियों में बदलता है, उन्हें बीआईटी मेसरा, आईआईटी धनबाद, एनआईटी जमशेदपुर, आईआईटी बॉम्बे, आईआईएससी जैसे संस्थानों से जोड़ता है और सीएसआर सहयोग प्रदान करता है।',
    exploreChallenges: 'सक्रिय चुनौतियाँ देखें',
    selectRole: 'अपनी भूमिका चुनें',
    navHome: 'होम',
    navChallenges: 'चुनौतियाँ',
    navLeaderboard: 'लीडरबोर्ड व पुरस्कार',
    navPost: 'समस्या दर्ज करें',
    navPortals: 'पोर्टल व उपकरण',
    navWorkspace: 'वर्कस्पेस',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'सार्वजनिक डैशबोर्ड',
    navProfile: 'मेरी प्रोफाइल',
    navSignUp: 'साइन अप',
    navLogOut: 'लॉग आउट / बदलें',
    notifTitle: 'सूचनाएं',
    markAllRead: 'सभी पढ़ा हुआ मानें',
    noNotifications: 'कोई नई सूचना नहीं।',
    backToChallenges: '← चुनौतियों पर लौटें',
    offlineBanner: 'आप ऑफ़लाइन हैं — सहेजा गया डेटा दिखाया जा रहा है। पुनः कनेक्ट होने पर कार्य स्वतः सिंक हो जाएंगे।',
    priorityScore: 'प्राथमिकता अंक',
    highFrequency: 'अति-आवृत्ति समस्या',
    tapToSpeak: 'बोलने के लिए दबाएं',
    listening: 'सुन रहे हैं... अब बोलें',
    voiceActive: 'आवाज इनपुट सक्रिय',
    bestOfJharkhand: 'बेस्ट ऑफ झारखंड',

    // Leaderboard Tabs & Banners
    tabCampusLeaderboard: 'परिसर लीडरबोर्ड',
    tabOriginDistrictAwards: 'बेस्ट ऑफ झारखंड: समस्या उत्पत्ति पुरस्कार',
    tabHallOfImpact: 'हॉल ऑफ इम्पैक्ट',
    solverRecognitionBadge: 'राष्ट्रीय व झारखंड समाधानकर्ता सम्मान',
    seasonBadge: '• सत्र Q3 2026',
    leaderboardPageHeading: 'परिसर लीडरबोर्ड व समस्या उत्पत्ति नवाचार पुरस्कार',
    leaderboardPageDesc: 'पूरे भारत के विश्वविद्यालय लैब्स व छात्र नवाचारियों का उत्सव जो झारखंड की नागरिक चुनौतियों का समाधान कर रहे हैं। रैंक पाएं, पुरस्कार जीतें और प्री-प्लेसमेंट ऑफर (PPO) अनलॉक करें।',

    // Leaderboard Filters & Table Headers
    filterCollegeLabel: 'कॉलेज / विश्वविद्यालय द्वारा छांटें',
    filterAllColleges: 'सभी विश्वविद्यालय व कॉलेज (राष्ट्रव्यापी)',
    filterDomainLabel: 'समस्या क्षेत्र द्वारा छांटें',
    filterAllDomains: 'सभी 18 क्षेत्र',
    filterTimeLabel: 'समयावधि',
    timeMonth: 'इस माह (सितंबर 2026)',
    timeQuarter: 'इस तिमाही (Q3 2026)',
    timeAllTime: 'सर्वकालिक संचयी',
    rankingTableTitle: 'समाधानकर्ता रैंकिंग तालिका (राष्ट्रव्यापी व राज्य)',
    rankingTableSubtitle: 'सत्यापित क्षेत्रीय तैनाती से अद्यतित',
    rankCol: 'रैंक',
    teamCol: 'विश्वविद्यालय टीम व लैब',
    domainCol: 'मुख्य क्षेत्र',
    solvedCol: 'हल की गई समस्याएं',
    impactCol: 'प्रभाव अंक',
    upvotesCol: 'समर्थन',
    ppoCol: 'सम्मान व पीपीओ',
    actionCol: 'कार्रवाई',
    nationalRank: 'राष्ट्रीय रैंक',
    stateRank: 'राज्य रैंक',
    ppoOffered: 'पीपीओ प्रस्तुत',
    inReview: 'समीक्षाधीन',
    leadSolverLabel: 'प्रमुख',
    solverInstitutionLabel: 'समाधानकर्ता संस्थान',
    statSolved: 'हल',
    statImpact: 'प्रभाव',
    statUpvotes: 'समर्थन',
    viewSolverProfile: 'लैब समाधानकर्ता प्रोफाइल देखें',
    btnProfile: 'प्रोफाइल ↗',

    // Problem Origin Awards
    awardAttributionTag: 'समस्या उत्पत्ति जिला श्रेय',
    awardsTitle: 'बेस्ट ऑफ झारखंड: जिला समस्या उत्पत्ति नवाचार पुरस्कार (Q3 2026)',
    awardsDesc: 'पुरस्कार उस विशिष्ट झारखंड जिले के आधार पर समूहीकृत हैं जहां नागरिक समस्या उत्पन्न हुई — श्रेय उस विश्वविद्यालय या उद्योग टीम को जाता है जिसने इसे सफलतापूर्वक हल किया, चाहे समाधानकर्ता का गृह स्थान कोई भी हो।',
    originProblemLabel: 'समस्या उत्पत्ति:',
    impactedPopulationLabel: 'प्रभावित आबादी:',
    winningSolversLabel: 'विजयी नागरिक समाधानकर्ता:',
    ptsUnit: 'अंक',

    // Hall of Impact
    hallRolloutBadge: 'राज्यव्यापी विस्तारित समाधान',
    hallTitle: 'हॉल ऑफ इम्पैक्ट: झारखंड प्रमंडलों में लागू समाधान',
    hallDesc: 'स्थायी अभिलेखागार जो झारखंड के प्रशासनिक प्रमंडलों और नगर निकायों में विस्तारित नागरिक नवाचारों का सम्मान करता है।',
    hallLeadLab: 'मुख्य लैब',
    hallCsrSponsor: 'उद्योग प्रायोजक',
    hallScaledAcross: 'विस्तारित परिनियोजन',
    hallBeneficiaries: 'प्रत्यक्ष लाभार्थी',
    hallImpact: 'प्रभाव उपलब्धि',

    // Challenges Listing
    activeChallengesHeading: 'सक्रिय नागरिक चुनौतियाँ',
    activeChallengesDesc: 'आपकी विशेषज्ञता के आधार पर आकलित चुनौतियाँ। विश्वविद्यालय टीमें आवेदन कर सकती हैं और उद्योग भागीदार प्रायोजित कर सकते हैं।',
    gridViewBtn: 'ग्रिड दृश्य',
    mapViewBtn: 'मानचित्र दृश्य',
    postChallengeBtn: '+ समस्या दर्ज करें',
    searchPlaceholder: 'शीर्षक, शहर, कीवर्ड खोजें...',
    anyMatchFilter: 'कोई भी अनुकूलता %',
    allStatusesFilter: 'सभी स्थितियाँ',
    priorityScoreSort: 'प्राथमिकता अंक (डिफ़ॉल्ट)',
    clusteredBadgeText: 'समूहीकृत चुनौती',
    peopleAffectedLabel: 'प्रभावित नागरिक',
    pinsViewBtn: '📍 पिन दृश्य',
    problemHeatmapBtn: '🔥 समस्या घनत्व हीट मैप',
    densityHigh: 'उच्च समस्या घनत्व (हॉटस्पॉट)',
    densityMed: 'मध्यम समस्या घनत्व',
    densityLow: 'सामान्य / एकल समस्या',

    // Dashboard
    statChallengesPosted: 'कुल दर्ज चुनौतियाँ',
    statPilotedDeployed: 'पायलट व लागू समाधान',
    statUniversitySolvers: 'विश्वविद्यालय समाधानकर्ता',
    statCsrPartners: 'उद्योग सीएसआर भागीदार',
    statPeopleAffected: 'प्रभावित नागरिक',
    districtDensityHeading: 'झारखंड जिला समस्या घनत्व हीट मैप',
    districtDensityDesc: 'गहरे रंग वाले हॉट जोन झारखंड के 5 प्रशासनिक प्रमंडलों में केंद्रित शहरी व पर्यावरणीय समस्याओं को दर्शाते हैं।',
    viewFullHeatMapBtn: 'पूर्ण इंटरैक्टिव हीट मैप देखें →',
    civicPipelineHeading: 'झारखंड नागरिक चुनौती पाइपलाइन',
    civicPipelineDesc: 'सभी नागरिकों, शोधकर्ताओं और सरकारी विभागों के लिए खुला मील का पत्थर ट्रैकर।',
    reportNewProblemBtn: '+ नई समस्या दर्ज करें',

    // Challenge Detail
    editSubmissionBtn: 'संपादन करें',
    upvotesLabel: 'समर्थन',
    peopleImpactedPrefix: 'प्रभावित आबादी:',
    aiMatchScoreLabel: 'एआई प्रोफाइल मिलान अंक',
    verifiedMatchBadge: 'सत्यापित मिलान',
    pipelineProgressTitle: 'स्थिति प्रगति पाइपलाइन',
    stakeholderRosterTitle: 'हितधारक सहभागिता व पाइपलाइन रोस्टर',
    proposalsSubmittedTitle: 'प्रस्तुत प्रस्ताव',
    interestedResearchersTitle: 'रुचि रखने वाले शोधकर्ता',
    committedIndustryTitle: 'प्रतिबद्ध उद्योग',
    openCrossCampus: 'अंतर-परिसर समाधानकर्ताओं के लिए खुला',
    problemStatementHeading: 'समस्या विवरण व पृष्ठभूमि',
    requiredCapabilitiesHeading: 'आवश्यक तकनीकी कौशल',
    problemLocationCoords: 'समस्या स्थल निर्देशांक',
    verifiedGovtAssessment: '🏛 सत्यापित शासकीय मूल्यांकन',
    jharkhandCivicGovernance: 'झारखंड नागरिक शासन',
    submitGovtReviewBtn: 'शासकीय समीक्षा दर्ज करें →',
    applyToSolveBtn: 'समाधान हेतु आवेदन (छात्र टीम बनाएं)',
    adoptChallengeBtn: 'चुनौती अपनाएं (सीएसआर / संसाधन प्रायोजित करें)',
    officialGovtReviewBtn: '🏛 आधिकारिक शासकीय समीक्षा व स्वीकृति',
    enterWorkspaceBtn: 'सहयोगी कार्यक्षेत्र में जाएं →',
    stakeholderCollaboration: 'हितधारक सहयोग',
    matchedUniversityTeam: 'संबद्ध विश्वविद्यालय टीम',
    industryCsrSponsor: 'उद्योग सीएसआर प्रायोजक',

    // Post Challenge Form
    postChallengeHeading: 'सामुदायिक समस्या दर्ज करें',
    postChallengeSubtitle: 'निर्देशांक सहित अपनी स्थानीय समस्या दर्ज करें। हमारा सिस्टम राज्यव्यापी प्रभाव के लिए समान समस्याओं को जोड़ता है।',
    guidedVoiceBtn: '🎙️ बोलकर फॉर्म भरें (ध्वनि सहायक)',
    editingActiveSubmission: 'सक्रिय प्रविष्टि संपादन:',
    updateFieldsLive: 'विवरण अद्यतन करें और बदलाव सहेजें।',
    cancelEditBtn: 'संपादन रद्द करें',
    domainCategoryLabel: 'समस्या क्षेत्र / श्रेणी *',
    challengeTitleLabel: 'चुनौती शीर्षक *',
    estimatedPeopleLabel: 'अनुमानित प्रभावित नागरिक *',
    autoEstimateBtn: '✨ स्वतः अनुमान लगाएं',
    districtLabel: 'झारखंड जिला / शहरी क्षेत्र *',
    detailedDescriptionLabel: 'विस्तृत विवरण *',
    problemLocationLabel: 'समस्या स्थल (पिन लगाएं या जीपीएस चुनें) *',
    useCurrentLocation: 'मेरे वर्तमान स्थान का उपयोग करें',
    evidenceLabel: 'फोटो / वीडियो साक्ष्य (वैकल्पिक)',
    submitterNameLabel: 'आपका नाम / संस्था *',
    submitterContactLabel: 'ईमेल / फोन नंबर *',
    publishChallengeBtn: 'नागरिक चुनौती प्रकाशित करें',

    // Industry Adoption Modal
    adoptChallengeHeading: 'मेंटरशिप व सहयोग हेतु चुनौती अपनाएं',
    adoptChallengeDesc: 'चुनें कि आपकी कंपनी इस नागरिक चुनौती में कैसे सहयोग करेगी: अनुदान, मेंटरशिप, उपकरण, इंटर्नशिप, इंफ्रास्ट्रक्चर, परामर्श, या पर्यवेक्षक।',
    industrySponsorshipBadge: 'उद्योग सीएसआर प्रायोजन',
    companyNameLabel: 'कंपनी / फाउंडेशन का नाम *',
    supportTypeLabel: 'सहयोग के प्रकार चुनें (वैकल्पिक व बहु-चयन):',
    offerFundingOption: 'सीएसआर पायलट अनुदान प्रायोजित करें',
    offerMentorshipOption: 'तकनीकी मेंटरशिप व मार्गदर्शन प्रदान करें',
    offerEquipmentOption: 'उपकरण व हार्डवेयर संसाधन सहायता',
    offerInternshipsOption: 'छात्र इंटर्नशिप व प्री-प्लेसमेंट ऑफर (PPO)',
    offerInfraOption: 'बुनियादी ढांचा, फील्ड टेस्टबेड व लैब सुविधा',
    offerAdvisoryOption: 'तकनीकी परामर्श व नगर पालिका समन्वय',
    offerOtherOption: 'अन्य स्वैच्छिक सहयोग',
    otherContributionPlaceholder: 'अनुकूलित सहयोग का विवरण दें (उदा. क्लाउड क्रेडिट, विशेष उपकरण)...',
    neitherCommitmentNotice: '* सभी विकल्प वैकल्पिक और बहु-चयन हैं। आप पर्यवेक्षक के रूप में नजर रखने के लिए सभी को अनचेक छोड़ सकते हैं।',
    grantAmountLabel: 'अनुदान राशि (₹) (वैकल्पिक)',
    mentorshipHoursLabel: 'मेंटरशिप घंटे (वैकल्पिक)',
    pilotCommitmentNotesLabel: 'साझेदारी टिप्पणियां (वैकल्पिक)',
    confirmAdoptionBtn: 'चुनौती अपनाना सुनिश्चित करें →',

    // Workspace & Review
    tabKanban: 'कानबान बोर्ड',
    tabSharedDocs: 'साझा दस्तावेज़',
    tabTeamChat: 'टीम चैट',
    tabMentorReviews: 'मेंटर समीक्षा',
    tabIdeaBacklog: 'विचार सूची',
    submitPrototypeBtn: 'प्रोटोटाइप समाधान जमा करें',
    uploadMediaBtn: 'मीडिया अपलोड करें',
    sampleMediaBtn: 'नमूना मीडिया',
    sendBtn: 'भेजें',
    chatPlaceholder: 'संदेश या प्रगति लिखें...',
    rejectBtn: 'संशोधन हेतु लौटाएं',
    acceptForPilotBtn: 'पायलट हेतु स्वीकृत करें',
    flagPpoBtn: 'पीपीओ हेतु नामांकित करें',
    certSentBadge: '✓ समाधान प्रमाण पत्र छात्र टीम को भेजा गया',
    viewCsrReportBtn: 'वैधानिक सीएसआर रिपोर्ट देखें',

    // Profile
    myCivicProfile: 'मेरी नागरिक प्रोफाइल',
    editProfileBtn: 'प्रोफाइल संपादित करें',
    switchLogOutBtn: 'लॉग आउट / बदलें',
    academicCredentialsHeading: 'विश्वविद्यालय व शैक्षणिक साख',
    verifiedProfileRecord: 'सत्यापित प्रोफाइल रिकॉर्ड',
    activeEngagementsHeading: 'सक्रिय सहभागिता व राष्ट्रीय प्रभाव',
    verifiedCertificatesHeading: 'सत्यापित नागरिक समाधान प्रमाण पत्र'
  },
  sat: {
    name: 'Santali',
    nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ (Santali)',
    tagline: 'ᱨᱤᱯᱚᱨᱴ ᱠᱷᱚᱱ ᱥᱚᱞᱦᱮ ᱦᱟᱹᱵᱤᱡ',
    subTagline: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱟᱹᱛᱩ-ᱴᱚᱞᱟ ᱟᱱᱟᱴ ᱠᱚ ᱠᱚᱞᱮᱡᱽ ᱟᱨ ᱥᱤᱞᱯᱚ ᱥᱟᱶ ᱡᱚᱲᱟᱣ',
    heroDesc: 'ᱱᱤᱵᱟᱨᱚᱬ ᱫᱚ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱟᱱᱟᱴ ᱠᱚ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱤᱱ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱟᱨ ᱤᱱᱰᱟᱥᱴᱨᱤ ᱜᱚᱲᱚ ᱛᱮ ᱥᱚᱞᱦᱮ ᱮᱫᱟᱭ᱾',
    exploreChallenges: 'ᱥᱚᱞᱦᱮ ᱠᱟᱹᱢᱤ ᱧᱮᱞ ᱢᱮ',
    selectRole: 'ᱟᱢᱟᱜ ᱴᱷᱟᱶ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    navHome: 'ᱢᱩᱬᱩᱛ',
    navChallenges: 'ᱟᱱᱟᱴ ᱠᱚ',
    navLeaderboard: 'ᱢᱟᱹᱱ ᱛᱟᱹᱞᱠᱟᱹ',
    navPost: 'ᱟᱱᱟᱴ ᱚᱞ ᱢᱮ',
    navPortals: 'ᱯᱳᱨᱴᱟᱞ ᱟᱨ ᱥᱟᱯᱟᱵ',
    navWorkspace: 'ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ',
    navReview: 'ᱥᱤᱞᱯᱚ ᱧᱮᱞ',
    navDashboard: 'ᱰᱮᱥᱵᱳᱨᱰ',
    navProfile: 'ᱤᱧᱟᱜ ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ',
    navSignUp: 'ᱧᱩᱛᱩᱢ ᱚᱞ',
    navLogOut: 'ᱵᱟᱦᱨᱮ ᱚᱰᱚᱠ',
    notifTitle: 'ᱠᱷᱚᱵᱚᱨ ᱠᱚ',
    markAllRead: 'ᱡᱚᱛᱚ ᱯᱟᱲᱦᱟᱣ ᱢᱮ',
    noNotifications: 'ᱪᱮᱫ ᱱᱟᱣᱟ ᱠᱷᱚᱵᱚᱨ ᱵᱟᱹᱱᱩᱜ-ᱟ᱾',
    backToChallenges: '← ᱟᱱᱟᱴ ᱛᱟᱹᱞᱠᱟᱹ ᱛᱮ ᱨᱩᱣᱟᱹᱲ',
    offlineBanner: 'ᱟᱢ ᱫᱚ ᱚᱯᱷᱞᱟᱭᱤᱱ ᱢᱮᱱᱟᱢᱟ — ᱥᱟᱧᱪᱟᱣ ᱟᱠᱟᱱ ᱰᱮᱴᱟ ᱩᱫᱩᱜ ᱠᱟᱱᱟ᱾',
    priorityScore: 'ᱢᱩᱬᱩᱛ ᱥᱠᱳᱨ',
    highFrequency: 'ᱵᱟᱨ-ᱵᱟᱨ ᱟᱱᱟᱴ',
    tapToSpeak: 'ᱨᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱚᱛᱟᱭ ᱢᱮ',
    listening: 'ᱟᱸᱡᱚᱢᱮᱫᱟ... ᱱᱤᱛᱚᱜ ᱨᱚᱲ ᱢᱮ',
    voiceActive: 'ᱨᱚᱲ ᱮᱦᱚᱵ ᱮᱱᱟ',
    bestOfJharkhand: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱥᱚᱨᱮᱥ',

    // Leaderboard Tabs & Banners
    tabCampusLeaderboard: 'ᱠᱮᱢᱯᱟᱥ ᱞᱤᱰᱚᱨᱵᱳᱨᱰ',
    tabOriginDistrictAwards: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱮᱥ: ᱟᱱᱟᱴ ᱡᱤᱞᱟᱹ ᱥᱤᱨᱯᱷᱟᱹ',
    tabHallOfImpact: 'ᱦᱚᱞ ᱚᱯᱷ ᱤᱢᱯᱮᱠᱴ',
    solverRecognitionBadge: 'ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱟᱨ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱞᱦᱮᱭᱤᱡ ᱢᱟᱹᱱ',
    seasonBadge: '• Q3 2026 ᱨᱤᱛᱩ',
    leaderboardPageHeading: 'ᱠᱮᱢᱯᱟᱥ ᱞᱤᱰᱚᱨᱵᱳᱨᱰ ᱟᱨ ᱥᱤᱨᱯᱷᱟᱹ',
    leaderboardPageDesc: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱟᱱᱟᱴ ᱥᱚᱞᱦᱮ ᱠᱟᱹᱢᱤ ᱞᱟᱹᱜᱤᱫ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱨᱤᱱ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱢᱟᱹᱱ ᱛᱟᱹᱞᱠᱟᱹ᱾',

    // Leaderboard Filters & Table Headers
    filterCollegeLabel: 'ᱠᱚᱞᱮᱡᱽ / ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱛᱮ ᱵᱟᱪᱷᱟᱣ',
    filterAllColleges: 'ᱡᱚᱛᱚ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ (ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ)',
    filterDomainLabel: 'ᱟᱱᱟᱴ ᱦᱟᱹᱴᱤᱧ ᱛᱮ ᱵᱟᱪᱷᱟᱣ',
    filterAllDomains: 'ᱡᱚᱛᱚ ᱦᱟᱹᱴᱤᱧ (18)',
    filterTimeLabel: 'ᱚᱠᱛᱚ ᱦᱟᱹᱴᱤᱧ',
    timeMonth: 'ᱱᱤᱭᱟᱹ ᱪᱟᱸᱫᱚ (ᱥᱮᱯᱴᱮᱢᱵᱚᱨ 2026)',
    timeQuarter: 'ᱱᱤᱭᱟᱹ ᱯᱮ-ᱪᱟᱸᱫᱚ (Q3 2026)',
    timeAllTime: 'ᱡᱟᱣ ᱜᱮ ᱡᱚᱛᱚ ᱚᱠᱛᱚ',
    rankingTableTitle: 'ᱥᱚᱞᱦᱮ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱠᱚᱣᱟᱜ ᱢᱟᱹᱱ ᱛᱟᱹᱞᱠᱟᱹ',
    rankingTableSubtitle: 'ᱯᱚᱨᱢᱟᱬ ᱟᱠᱟᱱ ᱠᱟᱹᱢᱤ ᱠᱷᱚᱱ ᱦᱟᱹᱞᱤᱭᱟᱹᱠ',
    rankCol: 'ᱢᱟᱹᱱ',
    teamCol: 'ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱫᱚᱞ',
    domainCol: 'ᱢᱩᱬᱩᱛ ᱦᱟᱹᱴᱤᱧ',
    solvedCol: 'ᱥᱚᱞᱦᱮ ᱟᱠᱟᱱ ᱟᱱᱟᱴ',
    impactCol: 'ᱤᱢᱯᱮᱠᱴ ᱥᱠᱳᱨ',
    upvotesCol: 'ᱥᱟᱨᱦᱟᱣ',
    ppoCol: 'ᱢᱟᱹᱱ ᱟᱨ PPO',
    actionCol: 'ᱠᱟᱹᱢᱤ',
    nationalRank: 'ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱢᱟᱹᱱ',
    stateRank: 'ᱯᱚᱱᱚᱛ ᱢᱟᱹᱱ',
    ppoOffered: 'PPO ᱮᱢ ᱟᱠᱟᱱᱟ',
    inReview: 'ᱧᱮᱞ ᱨᱮ ᱢᱮᱱᱟᱜ-ᱟ',
    leadSolverLabel: 'ᱢᱩᱬᱩᱛ',
    solverInstitutionLabel: 'ᱥᱚᱞᱦᱮ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ',
    statSolved: 'ᱥᱚᱞᱦᱮ',
    statImpact: 'ᱤᱢᱯᱮᱠᱴ',
    statUpvotes: 'ᱥᱟᱨᱦᱟᱣ',
    viewSolverProfile: 'ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ ᱧᱮᱞ ᱢᱮ',
    btnProfile: 'ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ ↗',

    // Problem Origin Awards
    awardAttributionTag: 'ᱟᱱᱟᱴ ᱡᱤᱞᱟᱹ ᱢᱟᱹᱱ',
    awardsTitle: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱥᱚᱨᱮᱥ: ᱟᱱᱟᱴ ᱡᱤᱞᱟᱹ ᱥᱤᱨᱯᱷᱟᱹ (Q3 2026)',
    awardsDesc: 'ᱥᱤᱨᱯᱷᱟᱹ ᱫᱚ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱡᱤᱞᱟᱹ ᱞᱮᱠᱟᱛᱮ ᱦᱟᱹᱴᱤᱧ ᱟᱠᱟᱱᱟ ᱡᱟᱦᱟᱸ ᱨᱮ ᱟᱱᱟᱴ ᱛᱟᱦᱮᱸ ᱠᱟᱱᱟ — ᱡᱟᱦᱟᱸ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱥᱚᱞᱦᱮ ᱠᱮᱫᱟᱭ ᱩᱱᱤ ᱜᱮ ᱢᱟᱹᱱ ᱮ ᱧᱟᱢᱟ᱾',
    originProblemLabel: 'ᱟᱱᱟᱴ ᱡᱤᱞᱟᱹ:',
    impactedPopulationLabel: 'ᱟᱱᱟᱴ ᱟᱠᱟᱱ ᱦᱚᱲ ᱮᱞ:',
    winningSolversLabel: 'ᱡᱤᱛᱠᱟᱹᱨ ᱥᱚᱞᱦᱮᱭᱤᱡ:',
    ptsUnit: 'ᱯᱚᱭᱮᱱᱴ',

    // Hall of Impact
    hallRolloutBadge: 'ᱯᱚᱱᱚᱛ ᱡᱟᱠᱟᱛ ᱯᱟᱥᱱᱟᱣ',
    hallTitle: 'ᱦᱚᱞ ᱚᱯᱷ ᱤᱢᱯᱮᱠᱴ: ᱯᱟᱥᱱᱟᱣ ᱟᱠᱟᱱ ᱥᱚᱞᱦᱮ ᱠᱚ',
    hallDesc: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱥᱟᱥᱚᱱ ᱦᱟᱹᱴᱤᱧ ᱠᱚᱨᱮ ᱯᱟᱥᱱᱟᱣ ᱟᱠᱟᱱ ᱥᱚᱞᱦᱮ ᱠᱚᱣᱟᱜ ᱴᱷᱟᱶ᱾',
    hallLeadLab: 'ᱢᱩᱬᱩᱛ ᱞᱮᱵᱽ',
    hallCsrSponsor: 'ᱥᱤᱞᱯᱚ ᱜᱚᱲᱚᱭᱤᱡ',
    hallScaledAcross: 'ᱯᱟᱥᱱᱟᱣ ᱠᱟᱹᱢᱤ',
    hallBeneficiaries: 'ᱜᱚᱲᱚ ᱧᱟᱢ ᱦᱚᱲ',
    hallImpact: 'ᱤᱢᱯᱮᱠᱴ ᱪᱤᱛᱟᱹᱨ',

    // Challenges Listing
    activeChallengesHeading: 'ᱪᱟᱹᱞᱩ ᱟᱱᱟᱴ ᱠᱚ',
    activeChallengesDesc: 'ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱞᱮᱠᱟᱛᱮ ᱪᱩᱱᱳᱛᱤ ᱠᱚ ᱧᱮᱞᱚᱜ ᱠᱟᱱᱟ᱾',
    gridViewBtn: 'ᱜᱨᱤᱰ ᱧᱮᱞ',
    mapViewBtn: 'ᱢᱮᱯ ᱧᱮᱞ',
    postChallengeBtn: '+ ᱟᱱᱟᱴ ᱚᱞ ᱢᱮ',
    searchPlaceholder: 'ᱧᱩᱛᱩᱢ, ᱥᱟᱦᱟᱨ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ...',
    anyMatchFilter: 'ᱡᱟᱦᱟᱸᱱ ᱢᱤᱞᱟᱹᱣ %',
    allStatusesFilter: 'ᱡᱚᱛᱚ ᱦᱟᱞᱚᱛ',
    priorityScoreSort: 'ᱢᱩᱬᱩᱛ ᱥᱠᱳᱨ',
    clusteredBadgeText: 'ᱡᱚᱲᱟᱣ ᱟᱠᱟᱱ ᱟᱱᱟᱴ',
    peopleAffectedLabel: 'ᱟᱱᱟᱴ ᱟᱠᱟᱱ ᱦᱚᱲ',
    pinsViewBtn: '📍 ᱯᱤᱱ ᱧᱮᱞ',
    problemHeatmapBtn: '🔥 ᱟᱱᱟᱴ ᱦᱤᱴ ᱢᱮᱯ',
    densityHigh: 'ᱰᱷᱮᱨ ᱟᱱᱟᱴ ᱴᱷᱟᱶ',
    densityMed: 'ᱛᱟᱞᱟᱢᱟᱞᱟ ᱟᱱᱟᱴ',
    densityLow: 'ᱥᱟᱫᱷᱟᱨᱚᱬ ᱴᱷᱟᱶ',

    // Dashboard
    statChallengesPosted: 'ᱡᱚᱛᱚ ᱟᱱᱟᱴ ᱚᱞ',
    statPilotedDeployed: 'ᱯᱟᱭᱞᱚᱴ ᱟᱨ ᱞᱟᱹᱜᱩ',
    statUniversitySolvers: 'ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱥᱚᱞᱦᱮᱭᱤᱡ',
    statCsrPartners: 'ᱥᱤᱞᱯᱚ CSR ᱜᱚᱲᱚᱭᱤᱡ',
    statPeopleAffected: 'ᱟᱱᱟᱴ ᱟᱠᱟᱱ ᱦᱚᱲ',
    districtDensityHeading: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱡᱤᱞᱟᱹ ᱟᱱᱟᱴ ᱦᱤᱴ ᱢᱮᱯ',
    districtDensityDesc: 'ᱜᱟᱺᱦᱤᱨ ᱨᱚᱝ ᱴᱷᱟᱶ ᱫᱚ ᱰᱷᱮᱨ ᱟᱱᱟᱴ ᱴᱷᱟᱶ ᱩᱫᱩᱜ-ᱟ᱾',
    viewFullHeatMapBtn: 'ᱯᱩᱨᱟᱹ ᱦᱤᱴ ᱢᱮᱯ ᱧᱮᱞ ᱢᱮ →',
    civicPipelineHeading: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱱᱟᱹᱜᱟᱹᱨᱤᱠ ᱟᱱᱟᱴ ᱯᱟᱭᱤᱯᱞᱟᱭᱤᱱ',
    civicPipelineDesc: 'ᱡᱚᱛᱚ ᱱᱟᱹᱜᱟᱹᱨᱤᱠ, ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱤᱭᱟᱹ ᱟᱨ ᱥᱚᱨᱠᱟᱨ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱤᱡ ᱜᱮᱭᱟ᱾',
    reportNewProblemBtn: '+ ᱱᱟᱣᱟ ᱟᱱᱟᱴ ᱚᱞ ᱢᱮ',

    // Challenge Detail
    editSubmissionBtn: 'ᱵᱚᱫᱚᱞ ᱢᱮ',
    upvotesLabel: 'ᱥᱟᱨᱦᱟᱣ',
    peopleImpactedPrefix: 'ᱟᱱᱟᱴ ᱟᱠᱟᱱ ᱦᱚᱲ:',
    aiMatchScoreLabel: 'AI ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ ᱢᱤᱞᱟᱹᱣ ᱥᱠᱳᱨ',
    verifiedMatchBadge: 'ᱯᱚᱨᱢᱟᱬ ᱢᱤᱞᱟᱹᱣ',
    pipelineProgressTitle: 'ᱦᱟᱞᱚᱛ ᱞᱟᱦᱟᱱᱛᱤ',
    stakeholderRosterTitle: 'ᱥᱚᱦᱮᱫ ᱠᱚᱣᱟᱜ ᱛᱟᱹᱞᱠᱟᱹ',
    proposalsSubmittedTitle: 'ᱮᱢ ᱟᱠᱟᱱ ᱯᱨᱚᱯᱳᱡᱟᱞ',
    interestedResearchersTitle: 'ᱠᱩᱥᱤᱭᱟᱱ ᱠᱷᱚᱸᱫᱽᱨᱚᱸᱫᱤᱭᱟᱹ',
    committedIndustryTitle: 'ᱜᱚᱲᱚᱭᱤᱡ ᱥᱤᱞᱯᱚ',
    openCrossCampus: 'ᱮᱴᱟᱜ ᱠᱮᱢᱯᱟᱥ ᱥᱟᱶ ᱠᱟᱹᱢᱤ ᱞᱟᱹᱜᱤᱫ ᱡᱷᱤᱡ ᱜᱮᱭᱟ',
    problemStatementHeading: 'ᱟᱱᱟᱴ ᱵᱤᱵᱚᱨᱚᱬ',
    requiredCapabilitiesHeading: 'ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱦᱩᱱᱟᱹᱨ',
    problemLocationCoords: 'ᱟᱱᱟᱴ ᱴᱷᱟᱶ ᱠᱳᱨᱰᱤᱱᱮᱴ',
    verifiedGovtAssessment: '🏛 ᱥᱚᱨᱠᱟᱨᱤ ᱯᱚᱨᱢᱟᱬ',
    jharkhandCivicGovernance: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱱᱟᱹᱜᱟᱹᱨᱤᱠ ᱥᱟᱥᱚᱱ',
    submitGovtReviewBtn: 'ᱥᱚᱨᱠᱟᱨᱤ ᱵᱤᱪᱟᱹᱨ ᱮᱢ ᱢᱮ →',
    applyToSolveBtn: 'ᱥᱚᱞᱦᱮ ᱞᱟᱹᱜᱤᱫ ᱫᱚᱞ ᱵᱮᱱᱟᱣ ᱢᱮ',
    adoptChallengeBtn: 'ᱟᱱᱟᱴ ᱟᱯᱱᱟᱨ ᱢᱮ (CSR ᱜᱚᱲᱚ)',
    officialGovtReviewBtn: '🏛 ᱥᱚᱨᱠᱟᱨᱤ ᱵᱤᱪᱟᱹᱨ ᱟᱨ ᱪᱷᱟᱹᱲ',
    enterWorkspaceBtn: 'ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ ᱛᱮ ᱪᱟᱞᱟᱜ ᱢᱮ →',
    stakeholderCollaboration: 'ᱥᱚᱦᱮᱫ ᱜᱚᱲᱚ-ᱜᱚᱯᱚᱲᱚ',
    matchedUniversityTeam: 'ᱥᱚᱞᱦᱮ ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱫᱚᱞ',
    industryCsrSponsor: 'ᱥᱤᱞᱯᱚ CSR ᱜᱚᱲᱚᱭᱤᱡ',

    // Post Challenge Form
    postChallengeHeading: 'ᱟᱹᱛᱩ-ᱴᱚᱞᱟ ᱟᱱᱟᱴ ᱚᱞ ᱢᱮ',
    postChallengeSubtitle: 'ᱟᱢᱟᱜ ᱟᱱᱟᱴ ᱴᱷᱟᱶ ᱥᱟᱶ ᱚᱞ ᱢᱮ᱾',
    guidedVoiceBtn: '🎙️ ᱨᱚᱲ ᱛᱮ ᱯᱷᱚᱨᱢ ᱯᱮᱨᱮᱡᱽ',
    editingActiveSubmission: 'ᱟᱱᱟᱴ ᱵᱚᱫᱚᱞ:',
    updateFieldsLive: 'ᱟᱱᱟᱴ ᱵᱤᱵᱚᱨᱚᱬ ᱵᱚᱫᱚᱞ ᱢᱮ᱾',
    cancelEditBtn: 'ᱵᱚᱫᱚᱞ ᱵᱟᱹᱜᱤ ᱢᱮ',
    domainCategoryLabel: 'ᱟᱱᱟᱴ ᱦᱟᱹᱴᱤᱧ *',
    challengeTitleLabel: 'ᱟᱱᱟᱴ ᱧᱩᱛᱩᱢ *',
    estimatedPeopleLabel: 'ᱟᱱᱟᱴ ᱟᱠᱟᱱ ᱦᱚᱲ ᱮᱞ *',
    autoEstimateBtn: '✨ ᱟᱯᱱᱟᱨ ᱛᱮ ᱟᱢᱫᱟᱡᱽ',
    districtLabel: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱡᱤᱞᱟᱹ *',
    detailedDescriptionLabel: 'ᱵᱤᱥᱛᱟᱹᱨ ᱛᱮ ᱚᱞ *',
    problemLocationLabel: 'ᱟᱱᱟᱴ ᱴᱷᱟᱶ (ᱯᱤᱱ ᱚᱛᱟᱭ ᱢᱮ) *',
    useCurrentLocation: 'ᱤᱧᱟᱜ ᱱᱤᱛᱚᱜᱟᱜ ᱴᱷᱟᱶ ᱦᱟᱛᱟᱣ ᱢᱮ',
    evidenceLabel: 'ᱪᱤᱛᱟᱹᱨ ᱥᱟᱹᱠᱷᱤ (ᱢᱚᱱ ᱠᱩᱥᱤ)',
    submitterNameLabel: 'ᱟᱢᱟᱜ ᱧᱩᱛᱩᱢ / ᱜᱟᱶᱛᱟ *',
    submitterContactLabel: 'ᱤᱢᱮᱞ / ᱯᱷᱳᱱ *',
    publishChallengeBtn: 'ᱟᱱᱟᱴ ᱯᱟᱨᱥᱟᱞ ᱢᱮ',

    // Industry Adoption Modal
    adoptChallengeHeading: 'ᱜᱚᱲᱚ ᱮᱢ ᱞᱟᱹᱜᱤᱫ ᱟᱱᱟᱴ ᱟᱯᱱᱟᱨ ᱢᱮ',
    adoptChallengeDesc: 'ᱟᱢᱟᱜ ᱠᱚᱢᱯᱟᱱᱤ ᱪᱮᱫ ᱞᱮᱠᱟ ᱜᱚᱲᱚᱭ ᱮᱢᱟ ᱚᱱᱟ ᱵᱟᱪᱷᱟᱣ ᱢᱮ᱾',
    industrySponsorshipBadge: 'ᱥᱤᱞᱯᱚ CSR ᱜᱚᱲᱚ',
    companyNameLabel: 'ᱠᱚᱢᱯᱟᱱᱤ ᱧᱩᱛᱩᱢ *',
    supportTypeLabel: 'ᱜᱚᱲᱚ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ (ᱢᱚᱱ ᱠᱩᱥᱤ):',
    offerFundingOption: 'CSR ᱯᱟᱭᱞᱚᱴ ᱜᱚᱲᱚ ᱮᱢ',
    offerMentorshipOption: 'ᱴᱮᱠᱱᱤᱠᱟᱞ ᱜᱚᱲᱚ ᱮᱢ',
    offerEquipmentOption: 'ᱥᱟᱯᱟᱵ ᱟᱨ ᱦᱟᱨᱰᱣᱮᱭᱟᱨ ᱜᱚᱲᱚ',
    offerInternshipsOption: 'ᱤᱱᱴᱚᱨᱱᱥᱤᱯ ᱟᱨ PPO ᱮᱢ',
    offerInfraOption: 'ᱞᱮᱵᱽ ᱟᱨ ᱴᱮᱥᱴᱵᱮᱰ ᱵᱮᱵᱷᱟᱨ',
    offerAdvisoryOption: 'ᱴᱮᱠᱱᱤᱠᱟᱞ ᱥᱚᱞᱦᱟ ᱮᱢ',
    offerOtherOption: 'ᱮᱴᱟᱜ ᱜᱚᱲᱚ',
    otherContributionPlaceholder: 'ᱮᱴᱟᱜ ᱜᱚᱲᱚ ᱵᱤᱵᱚᱨᱚᱬ ᱚᱞ ᱢᱮ...',
    neitherCommitmentNotice: '* ᱡᱚᱛᱚ ᱜᱮ ᱢᱚᱱ ᱠᱩᱥᱤ ᱠᱟᱱᱟ, ᱵᱟᱝ ᱵᱟᱪᱷᱟᱣ ᱠᱟᱛᱮ ᱦᱚᱸ ᱧᱮᱞᱤᱭᱟᱹ ᱞᱮᱠᱟᱛᱮ ᱛᱟᱦᱮᱸ ᱫᱟᱲᱮᱭᱟᱜ-ᱟᱢ᱾',
    grantAmountLabel: 'ᱜᱚᱲᱚ ᱴᱟᱠᱟ (₹) (ᱢᱚᱱ ᱠᱩᱥᱤ)',
    mentorshipHoursLabel: 'ᱢᱮᱱᱴᱚᱨ ᱚᱠᱛᱚ (ᱢᱚᱱ ᱠᱩᱥᱤ)',
    pilotCommitmentNotesLabel: 'ᱜᱚᱲᱚ ᱵᱤᱵᱚᱨᱚᱬ (ᱢᱚᱱ ᱠᱩᱥᱤ)',
    confirmAdoptionBtn: 'ᱟᱱᱟᱴ ᱟᱯᱱᱟᱨ ᱯᱟᱹᱛᱭᱟᱹᱣ ᱢᱮ →',

    // Workspace & Review
    tabKanban: 'ᱠᱟᱱᱵᱟᱱ ᱵᱳᱨᱰ',
    tabSharedDocs: 'ᱥᱮᱭᱟᱨ ᱠᱟᱜᱚᱡᱽ',
    tabTeamChat: 'ᱫᱚᱞ ᱨᱚᱯᱚᱲ',
    tabMentorReviews: 'ᱢᱮᱱᱴᱚᱨ ᱵᱤᱪᱟᱹᱨ',
    tabIdeaBacklog: 'ᱩᱭᱦᱟᱹᱨ ᱛᱟᱹᱞᱠᱟᱹ',
    submitPrototypeBtn: 'ᱥᱚᱞᱦᱮ ᱡᱚᱢᱟ ᱢᱮ',
    uploadMediaBtn: 'ᱢᱤᱰᱤᱭᱟ ᱟᱯᱞᱳᱰ',
    sampleMediaBtn: 'ᱱᱟᱢᱩᱱᱟ ᱢᱤᱰᱤᱭᱟ',
    sendBtn: 'ᱠᱩᱞ ᱢᱮ',
    chatPlaceholder: 'ᱠᱷᱚᱵᱚᱨ ᱚᱞ ᱢᱮ...',
    rejectBtn: 'ᱨᱩᱣᱟᱹᱲ ᱢᱮ',
    acceptForPilotBtn: 'ᱯᱟᱭᱞᱚᱴ ᱞᱟᱹᱜᱤᱫ ᱦᱮᱸ',
    flagPpoBtn: 'PPO ᱮᱢ ᱢᱮ',
    certSentBadge: '✓ ᱥᱚᱞᱦᱮ ᱥᱟᱠᱟᱢ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱴᱷᱮᱱ ᱠᱩᱞ ᱮᱱᱟ',
    viewCsrReportBtn: 'CSR ᱨᱤᱯᱳᱨᱴ ᱧᱮᱞ ᱢᱮ',

    // Profile
    myCivicProfile: 'ᱤᱧᱟᱜ ᱱᱟᱹᱜᱟᱹᱨᱤᱠ ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ',
    editProfileBtn: 'ᱯᱷᱨᱳᱯᱷᱟᱭᱤᱞ ᱵᱚᱫᱚᱞ',
    switchLogOutBtn: 'ᱵᱟᱦᱨᱮ ᱚᱰᱚᱠ',
    academicCredentialsHeading: 'ᱡᱮᱜᱮᱛ ᱵᱤᱨᱫᱟᱹᱜᱟᱲ ᱥᱟᱠᱟᱢ',
    verifiedProfileRecord: 'ᱯᱚᱨᱢᱟᱬ ᱟᱠᱟᱱ ᱨᱮᱠᱚᱨᱰ',
    activeEngagementsHeading: 'ᱪᱟᱹᱞᱩ ᱠᱟᱹᱢᱤ ᱟᱨ ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱤᱢᱯᱮᱠᱴ',
    verifiedCertificatesHeading: 'ᱯᱚᱨᱢᱟᱬ ᱟᱠᱟᱱ ᱥᱤᱨᱯᱷᱟᱹ ᱥᱟᱠᱟᱢ'
  },
  nag: {
    name: 'Nagpuri',
    nativeName: 'नागपुरी (Nagpuri)',
    tagline: 'रपट से निकस तक',
    subTagline: 'झारखंड कर नागरिक समस्या मन के कॉलेज आउर उद्योग संग जोड़ेक',
    heroDesc: 'निवारण झारखंड कर जनसमस्या मन के बीआईटी मेसरा, आईआईटी धनबाद, एनआईटी जमशेदपुर कर मेधा आउर सीएसआर पूंजी संग जोड़ के समाधान करेल।',
    exploreChallenges: 'चालू समस्या मन देखू',
    selectRole: 'अपन भूमिका चुनू',
    navHome: 'घर',
    navChallenges: 'समस्या मन',
    navLeaderboard: 'लीडरबोर्ड',
    navPost: 'समस्या लिखू',
    navWorkspace: 'कार्यक्षेत्र',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलेक ले दबाउ',
    listening: 'सूनत ही... अब बोलू',
    bestOfJharkhand: 'झारखंड कर शान'
  },
  nag: {
    name: 'Nagpuri',
    nativeName: 'नागपुरी (Nagpuri)',
    tagline: 'रपट से निकस तक',
    subTagline: 'झारखंड कर नागरिक समस्या मन के कॉलेज आउर उद्योग संग जोड़ेक',
    heroDesc: 'निवारण झारखंड कर जनसमस्या मन के बीआईटी मेसरा, आईआईटी धनबाद, एनआईटी जमशेदपुर कर मेधा आउर सीएसआर पूंजी संग जोड़ के समाधान करेल।',
    exploreChallenges: 'चालू समस्या मन देखू',
    selectRole: 'अपन भूमिका चुनू',
    navHome: 'घर',
    navChallenges: 'समस्या मन',
    navLeaderboard: 'लीडरबोर्ड',
    navPost: 'समस्या लिखू',
    navWorkspace: 'कार्यक्षेत्र',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलेक ले दबाउ',
    listening: 'सूनत ही... अब बोलू',
    bestOfJharkhand: 'झारखंड कर शान'
  },
  kht: {
    name: 'Khortha',
    nativeName: 'खोरठा (Khortha)',
    tagline: 'समस्या से समाधान तक',
    subTagline: 'गाँव-सहर के समस्या के कॉलेज के मेधा आउ उद्योग से जोड़ेक',
    heroDesc: 'निवारण झारखंड के नागरिक समस्या के कॉलेज के होनहार छात्र आउर कंपनी संग मिलाय के हल करहे।',
    exploreChallenges: 'चालू चुनौती देखा',
    selectRole: 'अपन काम चुना',
    navHome: 'होम',
    navChallenges: 'चुनौती',
    navLeaderboard: 'पुरस्कार सूची',
    navPost: 'समस्या दर्ज करा',
    navWorkspace: 'वर्कस्पेस',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलेक ले टिपा',
    listening: 'सून रहल ही... अब बोला',
    bestOfJharkhand: 'झारखंड के सबले बेस'
  },
  kyw: {
    name: 'Kurmali',
    nativeName: 'कुरमाली (Kurmali)',
    tagline: 'समस्या ले समाधान तक',
    subTagline: 'झारखंडी नागरिक असुविधा के कॉलेज आउर उद्योग संग जोड़ना',
    heroDesc: 'निवारण झारखंडक जनसमस्या के कॉलेजक छात्र आउर उद्योगीक सहयोग ले समाधान करइक चेष्टा हेके।',
    exploreChallenges: 'सक्रिय समस्या देखा',
    selectRole: 'अपन दायित्व बाछा',
    navHome: 'घर',
    navChallenges: 'समस्या',
    navLeaderboard: 'मान तालिका',
    navPost: 'समस्या दाज करा',
    navWorkspace: 'कामाय जगह',
    navReview: 'समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'कहेक ले दबा',
    listening: 'शूनल जाइते... कहु',
    bestOfJharkhand: 'झारखंडक गौरव'
  },
  panch: {
    name: 'Panchpargania',
    nativeName: 'पंचपरगनिया (Panchpargania)',
    tagline: 'रपट ले समाधान तक',
    subTagline: 'पाँच परगना कर जनसमस्या के बिस्वविद्यालय आउर उद्योग संगे जोड़ना',
    heroDesc: 'निवारण क्षेत्र कर जनता कर समस्या के बिस्वविद्यालय कर छात्र आउर सीएसआर संग मिलाय के हल करेक काज करेल।',
    exploreChallenges: 'समस्या मन देखा',
    selectRole: 'अपन पद बाछा',
    navHome: 'घर',
    navChallenges: 'समस्या',
    navLeaderboard: 'मान सूची',
    navPost: 'समस्या लिखा',
    navWorkspace: 'काम थान',
    navReview: 'उद्योग जांच',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलेक ले दबावा',
    listening: 'सूनत आही... बोलल जा',
    bestOfJharkhand: 'पंचपरगना गौरव'
  },
  bho: {
    name: 'Bhojpuri',
    nativeName: 'भोजपुरी (Bhojpuri)',
    tagline: 'समस्या से समाधान तक',
    subTagline: 'झारखंड के नागरिक जरूरत के विश्वविद्यालय प्रतिभा आ उद्योग से जोड़ल',
    heroDesc: 'निवारण गाँव-शहर के समस्या के छात्र आ उद्योग के साथ मिल के सुलझावे के मजबूत मंच ह।',
    exploreChallenges: 'सक्रिय चुनौती देखीं',
    selectRole: 'अपन भूमिका चुनीं',
    navHome: 'होम',
    navChallenges: 'चुनौती सभ',
    navLeaderboard: 'लीडरबोर्ड व इनाम',
    navPost: 'समस्या दर्ज करीं',
    navWorkspace: 'वर्कस्पेस',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोले खातिर दबाईं',
    listening: 'सुनत बानी... अब बोलीं',
    bestOfJharkhand: 'झारखंड के श्रेष्ठ'
  },
  mag: {
    name: 'Magahi',
    nativeName: 'मगही (Magahi)',
    tagline: 'रपट से निदान तक',
    subTagline: 'नागरिक समस्या के कॉलेज आ उद्योग से जोड़े के प्रयास',
    heroDesc: 'निवारण झारखंड के जनसमस्या के कॉलेज आ उद्योग के साथ मिल के समाधान देवे हे।',
    exploreChallenges: 'चुनौती देखथिन',
    selectRole: 'अपन काम चुनथिन',
    navHome: 'घर',
    navChallenges: 'चुनौती',
    navLeaderboard: 'लीडरबोर्ड',
    navPost: 'समस्या लिखा',
    navWorkspace: 'कार्यक्षेत्र',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोले ले दबाब',
    listening: 'सुन रहल ही... बोली',
    bestOfJharkhand: 'झारखंड के मान'
  },
  anp: {
    name: 'Angika',
    nativeName: 'अंगिका (Angika)',
    tagline: 'समस्या से समाधान तलक',
    subTagline: 'नागरिक समस्या के विश्वविद्यालय आरू उद्योग सं जोड़ना',
    heroDesc: 'निवारण संथान परगना आरू झारखंड के नागरिक समस्या के छात्र आरू उद्योग के सहयोग सं दूर करै छै।',
    exploreChallenges: 'सक्रिय समस्या देखौ',
    selectRole: 'अपन भूमिका चुनौ',
    navHome: 'होम',
    navChallenges: 'समस्या',
    navLeaderboard: 'सम्मान सूची',
    navPost: 'समस्या दर्ज करौ',
    navWorkspace: 'वर्कस्पेस',
    navReview: 'उद्योग समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलै ले दबाबौ',
    listening: 'सुनी रहल छियै... बोलौ',
    bestOfJharkhand: 'झारखंड के गौरव'
  },
  mun: {
    name: 'Mundari',
    nativeName: 'ᱢᱩᱱᱰᱟᱨᱤ (Mundari)',
    tagline: 'समस्या ले समाधान तक',
    subTagline: 'हातू-दिसुम रेयाः समस्या को कॉलेज आड़ो उद्योग लोः जोड़ो',
    heroDesc: 'ᱱᱤᱵᱟᱨᱚᱬ ᱫᱚ ᱢᱩᱱᱰᱟ ᱦᱟᱹᱛᱩ ᱟᱨ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱱᱟᱜ ᱟᱱᱟᱴ ᱠᱚ ᱠᱚᱞᱮᱡᱽ ᱯᱟᱹᱴᱷᱩᱣᱟᱹ ᱠᱚ ᱥᱟᱶ ᱥᱚᱞᱦᱮ ᱮᱫᱟᱭ᱾',
    exploreChallenges: 'ᱪᱟᱹᱞᱩ ᱟᱱᱟᱴ ᱠᱚ ᱧᱮᱞ',
    selectRole: 'ᱟᱢᱟᱜ ᱴᱷᱟᱶ ᱵᱟᱪᱷᱟᱣ',
    navHome: 'ᱢᱩᱬᱩᱛ',
    navChallenges: 'ᱟᱱᱟᱴ ᱠᱚ',
    navLeaderboard: 'ᱥᱤᱨᱯᱷᱟᱹ',
    navPost: 'ᱟᱱᱟᱴ ᱚᱞ',
    navWorkspace: 'ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ',
    navReview: 'ᱥᱤᱞᱯᱚ',
    navDashboard: 'ᱰᱮᱥᱵᱳᱨᱰ',
    tapToSpeak: 'ᱨᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱚᱛᱟᱭ',
    listening: 'ᱟᱸᱡᱚᱢᱮᱫᱟ... ᱨᱚᱲ ᱢᱮ',
    bestOfJharkhand: 'ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱭᱟᱜ ᱥᱚᱨᱮᱥ'
  },
  hoc: {
    name: 'Ho',
    nativeName: 'ᱦᱳ (Ho)',
    tagline: 'ᱥᱚᱢᱚᱥᱭᱟ ᱠᱷᱚᱱ ᱥᱚᱞᱦᱮ',
    subTagline: 'ᱠᱚᱞᱦᱟᱱ ᱫᱤᱥᱩᱢ ᱨᱮᱭᱟᱜ ᱟᱱᱟᱴ ᱠᱚ ᱠᱚᱞᱮᱡᱽ ᱟᱨ ᱥᱤᱞᱯᱚ ᱥᱟᱶ ᱡᱚᱲᱟᱣ',
    heroDesc: 'ᱱᱤᱵᱟᱨᱚᱬ ᱛᱮ ᱦᱳ ᱫᱤᱥᱩᱢ ᱟᱨ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱭᱟᱜ ᱟᱱᱟᱴ ᱠᱚ ᱥᱚᱞᱦᱮ ᱦᱩᱭᱩᱜ ᱠᱟᱱᱟ᱾',
    exploreChallenges: 'ᱟᱱᱟᱴ ᱠᱚ ᱧᱮᱞ',
    selectRole: 'ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    navHome: 'ᱢᱩᱬᱩᱛ',
    navChallenges: 'ᱟᱱᱟᱴ',
    navLeaderboard: 'ᱥᱤᱨᱯᱷᱟᱹ',
    navPost: 'ᱟᱱᱟᱴ ᱚᱞ',
    navWorkspace: 'ᱠᱟᱹᱢᱤ ᱴᱷᱟᱶ',
    navReview: 'ᱥᱤᱞᱯᱚ',
    navDashboard: 'ᱰᱮᱥᱵᱳᱨᱰ',
    tapToSpeak: 'ᱨᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱚᱛᱟᱭ',
    listening: 'ᱟᱸᱡᱚᱢᱮᱫᱟ...',
    bestOfJharkhand: 'ᱠᱚᱞᱦᱟᱱ ᱥᱚᱨᱮᱥ'
  },
  khr: {
    name: 'Kharia',
    nativeName: 'खड़िया (Kharia)',
    tagline: 'समस्या ले समाधान तक',
    subTagline: 'गाँव कर समस्या के कॉलेज आउर उद्योग संग जोड़ेक',
    heroDesc: 'निवारण खड़िया समाज आउर झारखंड कर समस्या के कॉलेजक लईका मन संग सुलझावेक काम करेल।',
    exploreChallenges: 'समस्या देख',
    selectRole: 'अपन काम चुन',
    navHome: 'घर',
    navChallenges: 'समस्या',
    navLeaderboard: 'मान',
    navPost: 'समस्या लिख',
    navWorkspace: 'काज थान',
    navReview: 'समीक्षा',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'बोलेक ले दबा',
    listening: 'सूनत ही...',
    bestOfJharkhand: 'झारखंड कर मान'
  },
  kru: {
    name: 'Kurukh',
    nativeName: 'कुड़ुख़ (Kurukh)',
    tagline: 'समस्या ती समाधान गने',
    subTagline: 'पद्दार गही समस्या के कॉलेज अरा उद्योग संग जोड़े',
    heroDesc: 'निवारण उरांव समाज अरा झारखंड गही समस्या के कॉलेजक छात्र मन संग सुलझऊ नना लगदे।',
    exploreChallenges: 'समस्या एक-बक',
    selectRole: 'अपन रोल बाछा',
    navHome: 'एडपा',
    navChallenges: 'समस्या',
    navLeaderboard: 'इनाम',
    navPost: 'समस्या टुड़ा',
    navWorkspace: 'काज अड्डा',
    navReview: 'उद्योग',
    navDashboard: 'डैशबोर्ड',
    tapToSpeak: 'कचकच नना',
    listening: 'मेना लगदन...',
    bestOfJharkhand: 'झारखंड गही शान'
  },
  or: {
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ (Odia)',
    tagline: 'ରିପୋର୍ଟରୁ ସମାଧାନ ଯାଏଁ',
    subTagline: 'ଝାଡ଼ଖଣ୍ଡର ନାଗରିକ ସମସ୍ୟାକୁ ବିଶ୍ୱବିଦ୍ୟାଳୟ ପ୍ରତିଭା ଓ ଶିଳ୍ପ ସହ ଯୋଡ଼ିବା',
    heroDesc: 'ନିବାରଣ ଝାଡ଼ଖଣ୍ଡର ନାଗରିକ ସମସ୍ୟା ଗୁଡ଼ିକୁ ବିଶ୍ୱବିଦ୍ୟାଳୟ ପ୍ରତିଭା ଓ ସିଏସଆର ଅନୁଦାନ ସହିତ ଯୋଡ଼ି ସ୍ଥାୟୀ ସମାଧାନ ପ୍ରଦାନ କରେ।',
    exploreChallenges: 'ସକ୍ରିୟ ଚ୍ୟାଲେଞ୍ଜ ଦେଖନ୍ତୁ',
    selectRole: 'ଆପଣଙ୍କ ଭୂମିକା ବାଛନ୍ତୁ',
    navHome: 'ମୁଖ୍ୟ',
    navChallenges: 'ଚ୍ୟାଲେଞ୍ଜ',
    navLeaderboard: 'ଲିଡରବୋର୍ଡ ଓ ପୁରସ୍କାର',
    navPost: 'ସମସ୍ୟା ପଞ୍ଜିକରଣ',
    navWorkspace: 'ୱାର୍କସ୍ପେସ୍',
    navReview: 'ଶିଳ୍ପ ସମୀକ୍ଷା',
    navDashboard: 'ସର୍ବସାଧାରଣ ଡ୍ୟାସବୋର୍ଡ',
    tapToSpeak: 'କହିବାକୁ ଦବାନ୍ତୁ',
    listening: 'ଶୁଣୁଛି... ଏବେ କୁହନ୍ତୁ',
    bestOfJharkhand: 'ଝାଡ଼ଖଣ୍ଡ ଶ୍ରେଷ୍ଠ ପୁରସ୍କାର'
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা (Bengali)',
    tagline: 'রিপোর্ট থেকে সমাধানে',
    subTagline: 'ঝাড়খণ্ডের নাগরিক চাহিদাকে বিশ্ববিদ্যালয় প্রতিভা ও শিল্পের সাথে যুক্ত করা',
    heroDesc: 'নিবারণ ঝাড়খণ্ড জুড়ে নাগরিক সমস্যাকে কাঠামোবদ্ধ চ্যালেঞ্জে পরিণত করে, আইআইটি ধানবাদ, বিআইটি মেসরা এবং এনআইটি জামশেদপুরের মতো সেরা প্রতিষ্ঠানের সাথে সংযুক্ত করে।',
    exploreChallenges: 'লাইভ চ্যালেঞ্জ দেখুন',
    selectRole: 'আপনার ভূমিকা নির্বাচন করুন',
    navHome: 'হোম',
    navChallenges: 'চ্যালেঞ্জসমূহ',
    navLeaderboard: 'লিডারবোর্ড ও পুরস্কার',
    navPost: 'চ্যালেঞ্জ পোস্ট করুন',
    navWorkspace: 'ওয়ার্কস্পেস',
    navReview: 'শিল্প পর্যালোচনা',
    navDashboard: 'পাবলিক ড্যাশবোর্ড',
    tapToSpeak: 'বলতে ট্যাপ করুন',
    listening: 'শুনছি... এখন বলুন',
    bestOfJharkhand: 'সেরা ঝাড়খণ্ড পুরস্কার'
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اُردُو (Urdu)',
    tagline: 'شکایت سے حل تک',
    subTagline: 'جھارکھنڈ کے عوامی مسائل کو یونیورسٹی صلاحیت اور صنعتی تعاون سے جوڑنا',
    heroDesc: 'نوارن جھارکھنڈ کے عوامی مسائل کو حل طلب چیلنجز میں بدل کر بی آئی ٹی میسرا، آئی آئی ٹی دھنباد اور این آئی ٹی جمشیدپور کے محققین اور صنعتی شراکت داروں سے جوڑتا ہے۔',
    exploreChallenges: 'متحرک چیلنجز دیکھیں',
    selectRole: 'اپنا کردار منتخب کریں',
    navHome: 'ہوم',
    navChallenges: 'چیلنجز',
    navLeaderboard: 'لیڈر بورڈ و انعامات',
    navPost: 'چیلنج درج کریں',
    navWorkspace: 'ورک اسپیس',
    navReview: 'صنعتی جائزہ',
    navDashboard: 'عوامی ڈیش بورڈ',
    tapToSpeak: 'بولنے کے لیے کلک کریں',
    listening: 'سن رہے ہیں... اب بولیں',
    bestOfJharkhand: 'بہترین جھارکھنڈ اعزاز'
  }
};

// Resilient Translation Lookup (Graceful Fallback: Active Lang -> Hindi -> English)
function t(key) {
  const lang = appState?.currentLang || 'en';
  if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
    return TRANSLATIONS[lang][key];
  }
  if (TRANSLATIONS['hi'] && TRANSLATIONS['hi'][key] && lang !== 'en') {
    return TRANSLATIONS['hi'][key];
  }
  return TRANSLATIONS['en']?.[key] || key;
}

// Priority Score Algorithm
function calculatePriorityScore(challenge) {
  const clusterSize = challenge.clusterCount || (challenge.isClustered ? 2 : 1);
  const locations = challenge.locationsCount || (challenge.isClustered ? 2 : 1);
  const upvotes = challenge.upvotes || 0;
  const impact = challenge.impactScore || 85;
  const recencyBonus = challenge.isClustered ? 35 : 15;
  
  const score = Math.round((clusterSize * 45) + (locations * 30) + (upvotes * 0.35) + (impact * 0.25) + recencyBonus);
  return {
    score,
    isHighFrequency: clusterSize >= 2 || score >= 180,
    clusterSize,
    locations
  };
}

// ============================================================================
// 1C. JHARKHAND RECOGNITION DATASETS (PPOS, LEADERBOARD & DIVISION AWARDS)
// ============================================================================

const SEEDED_PPOS = [
  {
    id: 'PPO-101',
    challengeId: 'NIV-401',
    studentName: 'Dr. Aryan Sharma',
    roleTitle: 'Associate IoT & AI Systems Engineer',
    company: 'Tata Steel Foundation R&D Labs, Jamshedpur',
    package: '₹16.5 - ₹19.0 LPA',
    dateAwarded: '11 Sep 2026',
    citation: 'Demonstrated exceptional hardware-software co-design on the Harmu & Subarnarekha drainage telemetry sensor. Production-grade municipal deployment maturity across Ranchi and Jamshedpur.'
  }
];

const LEADERBOARD_TEAMS = [
  {
    rank: 1,
    teamName: 'BIT Mesra Sensor Telemetry Lab',
    university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
    leadSolver: 'Dr. Aryan Sharma',
    domain: 'Water Shortage',
    solvedCount: 8,
    impactScore: 96,
    upvotes: 1240,
    ppoAwarded: true,
    ppoCount: 2,
    state: 'Jharkhand',
    district: 'Ranchi',
    division: 'South Chotanagpur',
    badge: 'National Rank 1',
    skills: ['AI/ML', 'IoT', 'Civil', 'Sensors']
  },
  {
    rank: 2,
    teamName: 'IIT Bombay Rural Tech Initiative',
    university: 'Indian Institute of Technology (IIT) Bombay',
    leadSolver: 'Dr. Rohan Kulkarni',
    domain: 'Water Shortage',
    solvedCount: 7,
    impactScore: 97,
    upvotes: 1190,
    ppoAwarded: true,
    ppoCount: 2,
    state: 'Maharashtra',
    district: 'Mumbai',
    division: 'All-India Solvers',
    badge: 'National Rank 2',
    skills: ['IoT', 'Micro-Irrigation', 'Embedded AI', 'Solar']
  },
  {
    rank: 3,
    teamName: 'IIT (ISM) Dhanbad CleanTech Cell',
    university: 'IIT (ISM) Dhanbad',
    leadSolver: 'Prof. S. Mukherjee & Ananya Roy',
    domain: 'Waste Management',
    solvedCount: 7,
    impactScore: 94,
    upvotes: 1080,
    ppoAwarded: true,
    ppoCount: 1,
    state: 'Jharkhand',
    district: 'Dhanbad',
    division: 'North Chotanagpur',
    badge: 'National Rank 3',
    skills: ['Robotics', 'Computer Vision', 'Embedded AI']
  },
  {
    rank: 4,
    teamName: 'IISc Bangalore Sustainable Systems Lab',
    university: 'Indian Institute of Science (IISc), Bangalore',
    leadSolver: 'Prof. Radhika Iyer',
    domain: 'Healthcare',
    solvedCount: 6,
    impactScore: 96,
    upvotes: 1040,
    ppoAwarded: true,
    ppoCount: 1,
    state: 'Karnataka',
    district: 'Bengaluru',
    division: 'All-India Solvers',
    badge: 'National Rank 4',
    skills: ['Cold-Chain Telemetry', 'Cryogenics', 'Clean Energy']
  },
  {
    rank: 5,
    teamName: 'NIT Jamshedpur Hydrology Wing',
    university: 'National Institute of Technology (NIT) Jamshedpur',
    leadSolver: 'Sameer Deshmukh',
    domain: 'Electricity Cuts',
    solvedCount: 6,
    impactScore: 98,
    upvotes: 950,
    ppoAwarded: true,
    ppoCount: 1,
    state: 'Jharkhand',
    district: 'East Singhbhum',
    division: 'Kolhan Division',
    badge: 'National Rank 5',
    skills: ['Clean Energy', 'Electrical', 'Microgrids']
  },
  {
    rank: 6,
    teamName: 'IIT Kharagpur Environmental Geomatics',
    university: 'Indian Institute of Technology (IIT) Kharagpur',
    leadSolver: 'Debashis Mukherjee',
    domain: 'Waste Management',
    solvedCount: 5,
    impactScore: 94,
    upvotes: 920,
    ppoAwarded: true,
    ppoCount: 1,
    state: 'West Bengal',
    district: 'Paschim Medinipur',
    division: 'All-India Solvers',
    badge: 'National Rank 6',
    skills: ['Remote Sensing', 'Environmental Bio-Filter', 'IoT']
  },
  {
    rank: 7,
    teamName: 'AIIMS Deoghar Civic Informatics Lab',
    university: 'AIIMS Deoghar & BIT Deoghar Campus',
    leadSolver: 'Dr. K. Senthil',
    domain: 'Healthcare',
    solvedCount: 5,
    impactScore: 92,
    upvotes: 820,
    ppoAwarded: true,
    ppoCount: 1,
    state: 'Jharkhand',
    district: 'Deoghar',
    division: 'Santhal Pargana',
    badge: 'Division Winner',
    skills: ['Biomedical', 'Edge AI', 'Mobile Telemetry']
  },
  {
    rank: 8,
    teamName: 'BITS Pilani IoT & Urban Robotics',
    university: 'BITS Pilani, Pilani Campus',
    leadSolver: 'Tanmay Verma',
    domain: 'Street Lighting',
    solvedCount: 5,
    impactScore: 93,
    upvotes: 860,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'Rajasthan',
    district: 'Jhunjhunu',
    division: 'All-India Solvers',
    badge: 'National Rank 8',
    skills: ['Mesh Telemetry', 'Sensors', 'Embedded Linux']
  },
  {
    rank: 9,
    teamName: 'Vinoba Bhave University Green Tech Wing',
    university: 'Vinoba Bhave University (VBU), Hazaribagh',
    leadSolver: 'Vikram Shukla',
    domain: 'Water Shortage',
    solvedCount: 5,
    impactScore: 95,
    upvotes: 890,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'Jharkhand',
    district: 'Hazaribagh',
    division: 'North Chotanagpur',
    badge: 'Division Winner',
    skills: ['Adsorbents', 'Chemical Engg', 'Public Health']
  },
  {
    rank: 10,
    teamName: 'NIT Rourkela Mining & Water Automation',
    university: 'National Institute of Technology (NIT) Rourkela',
    leadSolver: 'Priyaranjan Nayak',
    domain: 'Environment & Pollution',
    solvedCount: 4,
    impactScore: 94,
    upvotes: 810,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'Odisha',
    district: 'Sundargarh',
    division: 'All-India Solvers',
    badge: 'National Rank 10',
    skills: ['Bio-Membranes', 'Heavy Metals', 'Adsorption']
  },
  {
    rank: 11,
    teamName: 'Jadavpur University Riverine AI Lab',
    university: 'Jadavpur University, Kolkata',
    leadSolver: 'Sneha Banerjee',
    domain: 'Water Shortage',
    solvedCount: 4,
    impactScore: 92,
    upvotes: 790,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'West Bengal',
    district: 'Kolkata',
    division: 'All-India Solvers',
    badge: 'National Rank 11',
    skills: ['Hydrology AI', 'Neural Networks', 'Drain Telemetry']
  },
  {
    rank: 12,
    teamName: 'Nilamber-Pitamber University Water Cell',
    university: 'Nilamber-Pitamber University (NPU), Medininagar',
    leadSolver: 'Ayush Bansal',
    domain: 'Water Shortage',
    solvedCount: 4,
    impactScore: 95,
    upvotes: 760,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'Jharkhand',
    district: 'Palamu',
    division: 'Palamu Division',
    badge: 'Division Finalist',
    skills: ['Water Quality', 'Nano-Filtration', 'Rural Health']
  },
  {
    rank: 13,
    teamName: 'Kolhan University CleanTech Circle',
    university: 'Kolhan University, Chaibasa',
    leadSolver: 'Siddharth Rao',
    domain: 'Women Safety',
    solvedCount: 4,
    impactScore: 97,
    upvotes: 710,
    ppoAwarded: false,
    ppoCount: 0,
    state: 'Jharkhand',
    district: 'West Singhbhum',
    division: 'Kolhan Division',
    badge: 'Division Finalist',
    skills: ['Sensors', 'Night Illumination', 'Audio Analytics']
  }
];

// Problem Origin District Attribution Awards
// Grouped by the Jharkhand district where the problem originated, credited to the winning solver team/organization (regardless of solver's own home location).
const JHARKHAND_PROBLEM_ORIGIN_AWARDS = [
  {
    district: 'Ranchi District',
    division: 'South Chotanagpur',
    code: 'RNC',
    quarter: 'Q3 2026',
    originProblem: 'Harmu River Feeder Silt Depth Telemetry & Flash Flood Alert (#NIV-401)',
    citation: 'Ranchi Municipal Corporation (RMC) & JUIDCO Directorate',
    attribution: 'Awarded for solving Ranchi Municipal civic challenge',
    affectedResidents: '45,000+ residents',
    winners: [
      { rank: 1, team: 'BIT Mesra Sensor Telemetry Lab', solverHome: 'Birla Institute of Technology (BIT) Mesra, Ranchi', project: 'Harmu Feeder Silt Telemetry', score: 96 },
      { rank: 2, team: 'Jadavpur University Riverine AI Lab', solverHome: 'Jadavpur University, Kolkata (West Bengal)', project: 'Harmu Runoff Predictive Neural Model (Solving Ranchi Basin)', score: 93 },
      { rank: 3, team: 'Central Coalfields Limited (CCL) CSR Tech Wing', solverHome: 'CCL HQ, Ranchi', project: 'Storm Drain Edge Compute Gateway', score: 90 }
    ]
  },
  {
    district: 'East Singhbhum (Jamshedpur) District',
    division: 'Kolhan Division',
    code: 'JSR',
    quarter: 'Q3 2026',
    originProblem: 'Subarnarekha & Kharkai Industrial Effluent Runoff Monitoring (#NIV-402)',
    citation: 'Jamshedpur Notified Area Committee & Kolhan Urban Board',
    attribution: 'Awarded for solving East Singhbhum river basin pollution',
    affectedResidents: '85,000+ citizens',
    winners: [
      { rank: 1, team: 'NIT Jamshedpur Hydrology Wing', solverHome: 'National Institute of Technology (NIT) Jamshedpur', project: 'Subarnarekha Industrial Runoff Telemetry', score: 98 },
      { rank: 2, team: 'IIT Kharagpur Environmental Geomatics', solverHome: 'IIT Kharagpur (West Bengal)', project: 'Heavy Metal Satellite & Optical Sensor Array (Solving Jamshedpur basin)', score: 95 },
      { rank: 3, team: 'Tata Steel Foundation Technology Cell', solverHome: 'Tata Steel, Jamshedpur', project: 'Slag Runoff Optical Telemetry Probe', score: 90 }
    ]
  },
  {
    district: 'Dhanbad District',
    division: 'North Chotanagpur',
    code: 'DHN',
    quarter: 'Q3 2026',
    originProblem: 'Coal Overburden & Municipal Solid Waste Optical Segregation (#NIV-403)',
    citation: 'Dhanbad Municipal Corporation & BCCL Environment Directorate',
    attribution: 'Awarded for solving Dhanbad mining waste segregation',
    affectedResidents: '1,20,000+ residents',
    winners: [
      { rank: 1, team: 'IIT (ISM) Dhanbad CleanTech Cell', solverHome: 'IIT (ISM) Dhanbad', project: 'Coal Ash & Solid Waste Segregation', score: 97 },
      { rank: 2, team: 'BITS Pilani IoT & Urban Robotics', solverHome: 'BITS Pilani (Rajasthan)', project: 'Autonomous Overburden Optical Classifier (Solving Dhanbad dump)', score: 94 },
      { rank: 3, team: 'BIT Sindri Automation Cell', solverHome: 'BIT Sindri, Dhanbad', project: 'Damodar Basin Water Quality Sensor', score: 91 }
    ]
  },
  {
    district: 'Bokaro District',
    division: 'North Chotanagpur',
    code: 'BKR',
    quarter: 'Q3 2026',
    originProblem: 'Solar Motion-Responsive Smart Lighting for Steel Township Walkways (#NIV-404)',
    citation: 'Bokaro Steel City Municipal Administration & Town Services',
    attribution: 'Awarded for solving Bokaro commuter & women safety challenge',
    affectedResidents: '38,000+ citizens',
    winners: [
      { rank: 1, team: 'IIT (ISM) Dhanbad Photovoltaic Lab', solverHome: 'IIT (ISM) Dhanbad', project: 'Micro-Solar LoRa Mesh Lighting (Solving Bokaro walkways)', score: 95 },
      { rank: 2, team: 'Guru Gobind Singh Tech Institute', solverHome: 'GGSESTC Bokaro', project: 'Motion-Responsive Battery Management', score: 90 }
    ]
  },
  {
    district: 'Hazaribagh District',
    division: 'North Chotanagpur',
    code: 'HZB',
    quarter: 'Q3 2026',
    originProblem: 'Barhi Tribal PHC Solar Microgrid & Vaccine Cold-Chain Telemetry (#NIV-405)',
    citation: 'Hazaribagh District Health Society & National Health Mission',
    attribution: 'Awarded for solving Hazaribagh tribal healthcare cold-chain',
    affectedResidents: '22,000+ villagers',
    winners: [
      { rank: 1, team: 'IISc Bangalore Sustainable Systems Lab', solverHome: 'IISc Bangalore (Karnataka)', project: 'Solar Cryo-Cold Chain for Barhi Tribal PHC (Solving Hazaribagh PHC)', score: 97 },
      { rank: 2, team: 'Vinoba Bhave University Green Tech', solverHome: 'VBU Hazaribagh', project: 'Barhi Tribal PHC Solar Microgrid', score: 94 },
      { rank: 3, team: 'BIT Mesra Rural Engineering Wing', solverHome: 'BIT Mesra, Ranchi', project: 'Smart Cryo-Container Telemetry (Solving Hazaribagh PHC)', score: 91 }
    ]
  },
  {
    district: 'Deoghar District',
    division: 'Santhal Pargana',
    code: 'DGH',
    quarter: 'Q3 2026',
    originProblem: 'Baidyanath Dham Pilgrim Smart Sanitation & Waste Telemetry (#NIV-406)',
    citation: 'Deoghar Municipal Corporation & Shravani Mela Management Cell',
    attribution: 'Awarded for solving Deoghar religious festival sanitation crisis',
    affectedResidents: '3,50,000+ pilgrims & locals',
    winners: [
      { rank: 1, team: 'AIIMS Deoghar Civic Informatics', solverHome: 'AIIMS Deoghar', project: 'Shravani Mela Sanitation Telemetry', score: 96 },
      { rank: 2, team: 'Sido Kanhu Murmu Univ EcoLab', solverHome: 'SKMU Dumka', project: 'Pilgrim Pathway Sensor Network (Solving Deoghar crowd)', score: 91 }
    ]
  },
  {
    district: 'Palamu District (Medininagar)',
    division: 'Palamu Division',
    code: 'PLM',
    quarter: 'Q3 2026',
    originProblem: 'Daltonganj Drought-Resistant Solar Drip Irrigation Network (#NIV-407)',
    citation: 'Palamu Regional Minor Irrigation Directorate & Pani Panchayat',
    attribution: 'Awarded for solving Palamu drought & fluoride challenge',
    affectedResidents: '65,000+ farmers & families',
    winners: [
      { rank: 1, team: 'IIT Bombay Rural Tech Initiative', solverHome: 'IIT Bombay, Mumbai (Maharashtra)', project: 'LoRa-Driven Automated Solar Drip Irrigation (Solving Palamu drought)', score: 97 },
      { rank: 2, team: 'Nilamber-Pitamber University Water Cell', solverHome: 'NPU Medininagar, Palamu', project: 'Koel Basin Fluoride Filtration Cartridge', score: 94 },
      { rank: 3, team: 'IIT (ISM) Dhanbad Hydrogeology Lab', solverHome: 'IIT (ISM) Dhanbad', project: 'Deep Aquifer Remote Imaging (Solving Palamu drought)', score: 91 }
    ]
  },
  {
    district: 'West Singhbhum (Chaibasa) District',
    division: 'Kolhan Division',
    code: 'CHB',
    quarter: 'Q3 2026',
    originProblem: 'Roroo River & Iron Ore Slag Runoff Bio-Filter Telemetry (#NIV-408)',
    citation: 'Chaibasa Municipal Council & District Mining Environment Cell',
    attribution: 'Awarded for solving Chaibasa heavy metal runoff',
    affectedResidents: '30,000+ tribal residents',
    winners: [
      { rank: 1, team: 'NIT Rourkela Mining & Water Automation', solverHome: 'NIT Rourkela (Odisha)', project: 'Iron Ore Slag Adsorption Bio-Filter (Solving Chaibasa runoff)', score: 96 },
      { rank: 2, team: 'Kolhan University CleanTech Circle', solverHome: 'Kolhan University, Chaibasa', project: 'Mining Discharge Bio-Filter', score: 93 },
      { rank: 3, team: 'NIT Jamshedpur Materials Engineering', solverHome: 'NIT Jamshedpur', project: 'Slag Neutralization Bio-Membrane (Solving Chaibasa runoff)', score: 90 }
    ]
  }
];

const JHARKHAND_DIVISION_AWARDS = JHARKHAND_PROBLEM_ORIGIN_AWARDS;


// Hall of Impact: Scaled civic innovations permanently deployed in Jharkhand
const HALL_OF_IMPACT = [
  {
    division: 'South Chotanagpur (Ranchi)',
    title: 'AI Ultrasonic Harmu Basin Storm Feeder Silt Telemetry',
    leadLab: 'BIT Mesra (Sensor Telemetry Lab)',
    sponsor: 'Central Coalfields Limited (CCL) CSR',
    citiesDeployed: 'Ranchi & Ramgarh (South Chotanagpur)',
    beneficiaries: '45,000 daily residents along Harmu & Subarnarekha corridors',
    impactHighlight: 'Cross-basin acoustic sensor telemetry that alerted Ranchi Municipal Corporation wardens 35 minutes prior to flash floods during 2026 pre-monsoon squalls.',
    badge: 'Jharkhand State Standard Adopted',
    domain: 'Water Shortage'
  },
  {
    division: 'Kolhan Division (Jamshedpur)',
    title: 'Subarnarekha-Kharkai Confluence Industrial Effluent & Runoff Telemetry',
    leadLab: 'NIT Jamshedpur (Hydrology Wing)',
    sponsor: 'Tata Steel Foundation CSR',
    citiesDeployed: 'Jamshedpur, Adityapur & Chaibasa (Kolhan)',
    beneficiaries: '28 Industrial & Municipal Storm Outfalls',
    impactHighlight: 'Continuous optical and heavy-metal telemetry diverted 220 kL of toxic sludge away from drinking water intakes into treatment beds.',
    badge: 'Industrial Cluster Deployed',
    domain: 'Water Shortage'
  },
  {
    division: 'North Chotanagpur (Dhanbad & Bokaro)',
    title: 'OptiSort High-Speed Coal Overburden & Municipal Recyclables Segregator',
    leadLab: 'IIT (ISM) Dhanbad (CleanTech Cell)',
    sponsor: 'Bharat Coking Coal Limited (BCCL) & SAIL CSR',
    citiesDeployed: 'Dhanbad, Bokaro Steel City & Hazaribagh',
    beneficiaries: '16 Secondary Waste Transfer Stations',
    impactHighlight: 'Computer vision sorting achieved 93.8% separation accuracy in abrasive coalfield environments, diverting 240 tonnes of plastics from open pit landfills per month.',
    badge: 'Mining & Urban Scaled',
    domain: 'Waste Management'
  },
  {
    division: 'Santhal Pargana (Deoghar & Dumka)',
    title: 'Resilient Solar-Hybrid Microgrid & Vaccine Cold-Chain for Tribal PHCs',
    leadLab: 'AIIMS Deoghar & SKMU Dumka',
    sponsor: 'Jindal Steel & Power CSR',
    citiesDeployed: 'Deoghar, Dumka & Godda (Santhal Pargana)',
    beneficiaries: '34 Rural Primary Health Centres',
    impactHighlight: 'Zero vaccine spoilage across 5 major cyclonic line disruptions with automated 48V DC battery telemetry and solar-first load shedding in remote tribal habitations.',
    badge: 'Tribal Health Scaled',
    domain: 'Electricity Cuts'
  },
  {
    division: 'Palamu Division (Medininagar)',
    title: 'Low-Cost Nano-Adsorbent Fluoride & Arsenic Water Filtration Cartridges',
    leadLab: 'Nilamber-Pitamber University & BIT Mesra Extension',
    sponsor: 'Aditya Birla Group (Hindalco) CSR',
    citiesDeployed: 'Medininagar, Garhwa & Chhatarpur (Palamu)',
    beneficiaries: '24,000 rural school children & farming families',
    impactHighlight: 'Reduced borewell fluoride levels from 4.6 mg/L to under 0.7 mg/L using regenerative clay-husk cartridges produced by rural pottery self-help groups in Palamu.',
    badge: 'Public Health Breakthrough',
    domain: 'Water Shortage'
  }
];

// ============================================================================
// 2. GLOBAL STATE & SEEDED DATA
// ============================================================================

const urlParams = new URLSearchParams(window.location.search);
const hashQuery = window.location.hash.includes('?') ? new URLSearchParams(window.location.hash.split('?')[1]) : null;
const forceRegistered = urlParams.get('registered') === 'true' || hashQuery?.get('registered') === 'true';

const savedUserData = JSON.parse(localStorage.getItem('nivaran_user') || 'null');
const savedIsRegistered = forceRegistered || localStorage.getItem('nivaran_is_registered') === 'true';

const DEFAULT_USER_PROFILE = {
  name: 'Dr. Aryan Sharma',
  role: 'student',
  email: 'aryan.sharma@bitmesra.ac.in',
  phone: '+91 98765 43210',
  age: 28,
  gender: 'Male',
  institution: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
  university_name: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
  designation: 'Faculty',
  academic_designation: 'Faculty',
  course: 'M.Tech / Research',
  department: 'Electronics & Communication / CST',
  academicLevel: 'Faculty / Lab Lead',
  academic_year: 'PhD',
  participation_mode: 'team',
  skills: ['Water Shortage', 'Cleanliness & Sanitation', 'Waste Management', 'Electricity Cuts', 'AI/ML'],
  company_name: 'Central Coalfields Limited (CCL) CSR',
  industry_sector: 'Water Shortage & Sanitation',
  representative_role: 'Associate Director - CSR Programs',
  experience_years: 12,
  csr_budget: 'tier2',
  csr_interest: ['Water Shortage', 'Waste Management', 'Cleanliness & Sanitation', 'Healthcare'],
  citizen_type: 'Govt Body',
  citizen_org: 'Ranchi Municipal Corporation (RMC) Ward 26 Advisory',
  signup_address: 'Kishore Ganj, Ward 26, Harmu Road, Ranchi, Jharkhand',
  signup_coords: '23.3569&deg; N, 85.3240&deg; E',
  location: {
    address: 'Kishore Ganj, Ward 26, Harmu Road, Ranchi, Jharkhand',
    lat: 23.3569,
    lng: 85.3240
  },
  registeredDate: 'September 2026'
};

const appState = {
  currentView: 'landing',
  currentRole: savedUserData?.role || 'student', // 'student' | 'industry' | 'citizen' | 'guest'
  currentLang: localStorage.getItem('nivaran_lang') || 'en',
  isOffline: !navigator.onLine,
  offlineQueue: JSON.parse(localStorage.getItem('nivaran_offline_queue') || '[]'),
  ppos: SEEDED_PPOS,
  leaderboardTeams: LEADERBOARD_TEAMS,
  divisionAwards: JHARKHAND_PROBLEM_ORIGIN_AWARDS,
  stateAwards: JHARKHAND_PROBLEM_ORIGIN_AWARDS, // backwards compatibility
  hallOfImpact: HALL_OF_IMPACT,
  isRegistered: savedIsRegistered,
  currentUser: savedUserData ? { ...DEFAULT_USER_PROFILE, ...savedUserData } : DEFAULT_USER_PROFILE,
  currentUserTeam: JSON.parse(localStorage.getItem('nivaran_current_team') || 'null'),
  editingChallengeId: null,
  challengeMapMode: 'pins', // 'pins' | 'heatmap'

  // Student certificates (generated after industry acceptance and sent to student profile)
  studentCertificates: [
    {
      id: 'CERT-401',
      challengeId: 'NIV-401',
      challengeTitle: 'IoT Ultrasonic Silt Telemetry & Flash Flood Alert in Harmu River Feeder Drains',
      studentName: 'Dr. Aryan Sharma',
      teamName: 'BIT Mesra Sensor Telemetry Lab',
      university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
      issueDate: '10 Sep 2026',
      status: 'Verified & Active',
      industryPartner: 'Central Coalfields Limited (CCL) CSR',
      signatory: 'Jharkhand State Civic Innovation Directorate & Industry CSR Council'
    }
  ],

  // Clickable live notifications with direct navigation
  notifications: [
    {
      id: 'notif-1',
      title: 'NIT Jamshedpur Matched to #NIV-402',
      message: 'Subarnarekha Runoff Telemetry solver team assigned.',
      targetUrl: 'challenge/NIV-402',
      type: 'match',
      time: '10m ago',
      read: false
    },
    {
      id: 'notif-2',
      title: 'Jharkhand Civic Cluster Synchronized',
      message: 'Ranchi (#NIV-401) & Jamshedpur (#NIV-402) drainage cases linked.',
      targetUrl: 'challenge/NIV-401',
      type: 'cluster',
      time: '1h ago',
      read: false
    },
    {
      id: 'notif-3',
      title: 'Prototype Submitted for #NIV-401',
      message: 'BIT Mesra lab submitted IoT Ultrasonic Probe v1.0.',
      targetUrl: 'workspace/NIV-401',
      type: 'solution_submitted',
      time: '3h ago',
      read: false
    },
    {
      id: 'notif-4',
      title: 'Official Govt Clearance Endorsed',
      message: 'JUIDCO / Urban Development granted formal pilot deployment approval.',
      targetUrl: 'challenge/NIV-401',
      type: 'govt_review',
      time: '5h ago',
      read: false
    }
  ],
  
  // Seeded Challenges across Jharkhand Districts
  challenges: [
    {
      id: 'NIV-401',
      title: 'IoT Ultrasonic Silt Telemetry & Flash Flood Alert in Harmu River Feeder Drains',
      domain: 'water',
      domainLabel: 'Water Resources & Sanitation',
      city: 'Ranchi',
      state: 'Jharkhand',
      district: 'Ranchi',
      division: 'South Chotanagpur',
      lat: 23.3569,
      lng: 85.3240,
      status: 'Piloted',
      upvotes: 342,
      peopleAffected: '45,000+ residents',
      peopleAffectedCount: 45000,
      isClustered: true,
      clusterCount: 2,
      clusterWith: 'NIV-402',
      clusterLabel: 'Clustered Challenge (2 locations)',
      requiredSkills: ['AI/ML', 'IoT', 'Civil', 'Sensors'],
      description: 'Severe siltation and plastic clogging in Harmu River catchment storm feeder drains cause flash urban flooding during sudden downpours. Requires continuous non-contact water level & silt depth telemetry with low-power edge alerts to Ranchi Municipal Corporation (RMC) flood wardens.',
      matchedTeam: 'BIT Mesra Sensor Telemetry Lab',
      matchedUniversity: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
      industryPartner: 'Central Coalfields Limited (CCL) CSR',
      csrFunding: '₹8,50,000',
      postedBy: 'Kishore Ganj Ward 26 Citizens Forum, Ranchi',
      postedDate: '14 Aug 2026',
      impactScore: 96,
      address: 'Harmu River Feeder Canal, Kishore Ganj, Ward 26, Ranchi, Jharkhand',
      proposalsCount: 3,
      proposalsList: ['BIT Mesra Sensor Telemetry Lab', 'RU Ranchi Civic Systems', 'Birla Tech Embedded'],
      interestedCount: 12,
      committedCount: 2,
      committedFunding: '₹8,50,000',
      committedMentorship: '30 Hours (CCL CSR Mentors)',
      govtReview: {
        reviewerName: 'Shri Rajesh Verma, IAS',
        department: 'JUIDCO / Urban Development & Housing Dept, Govt of Jharkhand',
        status: 'Pilot Clearance Granted',
        date: '08 Sep 2026',
        remarks: 'The proposed telemetry station and silt monitoring protocols conform to Jharkhand Municipal SWM & Flood Management Guidelines 2024. Pilot installation clearance is approved for Ward 26 feeder canal, with real-time API telemetry stream integration into the RMC Disaster Control Cell.',
        officialHash: 'JH-GOV-RMC-2026-0881'
      }
    },
    {
      id: 'NIV-402',
      title: 'Subarnarekha & Kharkai River Industrial Effluent & Storm Feeder Runoff Monitoring',
      domain: 'water',
      domainLabel: 'Water Resources & Sanitation',
      city: 'Jamshedpur',
      state: 'Jharkhand',
      district: 'East Singhbhum',
      division: 'Kolhan Division',
      lat: 22.8046,
      lng: 86.2029,
      status: 'Open',
      upvotes: 219,
      peopleAffected: '85,000+ citizens',
      peopleAffectedCount: 85000,
      isClustered: true,
      clusterCount: 2,
      clusterWith: 'NIV-401',
      clusterLabel: 'Clustered Challenge (2 locations)',
      requiredSkills: ['IoT', 'Civil', 'Sensors', 'Environment'],
      description: 'Feeder storm channels carrying urban and industrial runoff into the Subarnarekha and Kharkai rivers experience flash backflow and heavy metallic siltation during monsoons. Shares hydraulic flow characteristics with Ranchi drains; ideal for cross-district sensor telemetry model sharing.',
      matchedTeam: null,
      matchedUniversity: null,
      industryPartner: null,
      csrFunding: null,
      postedBy: 'Kadma Citizens Welfare & River Watch, Jamshedpur',
      postedDate: '02 Sep 2026',
      impactScore: 91,
      address: 'Kharkai River Feeder Channel, Marine Drive, Kadma, Jamshedpur, Jharkhand',
      proposalsCount: 2,
      proposalsList: ['NIT Jamshedpur Hydrology Wing', 'Kolhan CleanTech'],
      interestedCount: 9,
      committedCount: 1,
      committedFunding: '₹4,00,000 (Pledged)',
      committedMentorship: '15 Hours (Tata Steel Mentors)',
      govtReview: {
        reviewerName: 'Dr. Anand Minz',
        department: 'Jharkhand State Pollution Control Board (JSPCB) Regional Office, Jamshedpur',
        status: 'Technical Review Endorsed',
        date: '04 Sep 2026',
        remarks: 'Joint telemetry model sharing with Ranchi basin approved in principle. Baseline sensor calibration points designated along Kadma Marine Drive bridge.',
        officialHash: 'JH-JSPCB-KOL-2026-0419'
      }
    },
    {
      id: 'NIV-403',
      title: 'Computer Vision Optical Segregation of Coal Overburden & Municipal Solid Waste',
      domain: 'waste',
      domainLabel: 'Waste Management',
      city: 'Dhanbad',
      state: 'Jharkhand',
      district: 'Dhanbad',
      division: 'North Chotanagpur',
      lat: 23.7957,
      lng: 86.4304,
      status: 'Matched',
      upvotes: 284,
      peopleAffected: '1,20,000+ residents',
      peopleAffectedCount: 120000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['AI/ML', 'Robotics', 'Computer Vision'],
      description: 'Secondary waste collection hubs near mining settlements receive heavy mixed refuse mixed with abrasive coal ash and municipal dry recyclables. Requires rugged optical conveyor sorting using computer vision to separate recoverable polymers before landfill deposition.',
      matchedTeam: 'IIT (ISM) Dhanbad CleanTech Cell',
      matchedUniversity: 'IIT (ISM) Dhanbad',
      industryPartner: 'Bharat Coking Coal Limited (BCCL) CSR',
      csrFunding: '₹12,00,000',
      postedBy: 'Dhanbad Municipal Corporation (DMC)',
      postedDate: '28 Jul 2026',
      impactScore: 94,
      address: 'DMC Waste Transfer Hub, Bank More, Dhanbad, Jharkhand',
      proposalsCount: 4,
      proposalsList: ['IIT (ISM) Dhanbad CleanTech Cell', 'BIT Sindri Automation', 'Dhanbad Robotics Club'],
      interestedCount: 15,
      committedCount: 1,
      committedFunding: '₹12,00,000',
      committedMentorship: '25 Hours (BCCL Engineering)',
      govtReview: {
        reviewerName: 'Er. S. K. Mahato',
        department: 'Dhanbad Municipal Corporation (DMC) Sanitation Directorate',
        status: 'Site Inspection Scheduled',
        date: '15 Aug 2026',
        remarks: 'Transfer station conveyor trial authorized at Bank More facility. Safety enclosure and conveyor intake clearance validated by municipal engineers.',
        officialHash: 'JH-DMC-SWM-2026-1102'
      }
    },
    {
      id: 'NIV-404',
      title: 'Safe-Corridor: Solar Motion-Responsive Smart Lighting & SOS Nodes for Steel Township Walkways',
      domain: 'health',
      domainLabel: 'Women & Public Safety',
      city: 'Bokaro Steel City',
      state: 'Jharkhand',
      district: 'Bokaro',
      division: 'North Chotanagpur',
      lat: 23.6693,
      lng: 86.1511,
      status: 'Open',
      upvotes: 412,
      peopleAffected: '38,000+ citizens',
      peopleAffectedCount: 38000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['IoT', 'Hardware', 'Clean Energy', 'Public Health'],
      description: 'Long pedestrian connecting paths between township sectors and worker bus boarding terminals lack consistent grid lighting during evening shifts. Requesting solar-assisted smart poles with adaptive illumination, acoustic panic detection, and emergency siren beacons.',
      matchedTeam: null,
      matchedUniversity: null,
      industryPartner: null,
      csrFunding: null,
      postedBy: 'Bokaro Working Women & Commuters Action Group',
      postedDate: '19 Aug 2026',
      impactScore: 97,
      address: 'Sector 4 to Central Avenue Pedestrian Pathway, Bokaro Steel City, Jharkhand',
      proposalsCount: 2,
      proposalsList: ['IIT (ISM) Photovoltaic Lab', 'GGSESTC Bokaro'],
      interestedCount: 18,
      committedCount: 0,
      committedFunding: null,
      committedMentorship: null,
      govtReview: null
    },
    {
      id: 'NIV-405',
      title: 'Resilient DC Solar-Hybrid Microgrid & Vaccine Cold-Chain for Tribal PHCs in Barhi Block',
      domain: 'energy',
      domainLabel: 'Clean Energy & Microgrids',
      city: 'Hazaribagh',
      state: 'Jharkhand',
      district: 'Hazaribagh',
      division: 'North Chotanagpur',
      lat: 23.9925,
      lng: 85.3637,
      status: 'Deployed',
      upvotes: 189,
      peopleAffected: '22,000+ villagers',
      peopleAffectedCount: 22000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['Clean Energy', 'Electrical', 'Hardware', 'IoT'],
      description: 'Frequent rural power feeder trips during severe weather jeopardize cold-chain vaccine refrigeration and maternal delivery lighting across remote tribal villages. Deployed decentralized 48V DC solar-hybrid microgrid with automated battery switching.',
      matchedTeam: 'Vinoba Bhave University Green Tech Wing',
      matchedUniversity: 'Vinoba Bhave University (VBU), Hazaribagh',
      industryPartner: 'NTPC North Karanpura CSR',
      csrFunding: '₹15,50,000',
      postedBy: 'Chief Medical Officer, Barhi Health Sub-Division',
      postedDate: '10 Jun 2026',
      impactScore: 98,
      address: 'Primary Health Centre, Barhi Rural Block, Hazaribagh District, Jharkhand',
      proposalsCount: 3,
      proposalsList: ['VBU Green Tech Wing', 'BIT Mesra Rural Engineering'],
      interestedCount: 11,
      committedCount: 1,
      committedFunding: '₹15,50,000',
      committedMentorship: '40 Hours (NTPC Solar Engineers)',
      govtReview: {
        reviewerName: 'Dr. C. P. Choudhary',
        department: 'National Health Mission (NHM) & District Health Society Hazaribagh',
        status: 'Statutory Compliance Approved',
        date: '25 Jul 2026',
        remarks: 'Zero vaccine spoilage recorded across 90-day field deployment. Cold-chain continuous temperature logs verified compliant with WHO PQS standards.',
        officialHash: 'JH-NHM-HZB-2026-0922'
      }
    },
    {
      id: 'NIV-406',
      title: 'Dynamic Compactor Telemetry & Crowd-Dense Sanitation Route Optimization for Shravani Mela',
      domain: 'mobility',
      domainLabel: 'Urban Traffic & Mobility',
      city: 'Deoghar',
      state: 'Jharkhand',
      district: 'Deoghar',
      division: 'Santhal Pargana',
      lat: 24.4826,
      lng: 86.7001,
      status: 'In Progress',
      upvotes: 176,
      peopleAffected: '3,50,000+ pilgrims & locals',
      peopleAffectedCount: 350000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['AI/ML', 'Optimization', 'IoT', 'Web Dev'],
      description: 'Mass pilgrim influx during Shravani Mela overwhelms waste bins along temple approach roads. AI-based bin fill telemetry dynamically reroutes municipal collection carts through pedestrian lanes before overflow occurs.',
      matchedTeam: 'AIIMS Deoghar Civic Informatics Lab',
      matchedUniversity: 'AIIMS Deoghar & BIT Deoghar Campus',
      industryPartner: 'Tata Steel Foundation CSR',
      csrFunding: '₹6,75,000',
      postedBy: 'Deoghar Municipal Corporation & Mela Control Room',
      postedDate: '05 Aug 2026',
      impactScore: 89,
      address: 'Baidyanath Dham Pilgrim Spine, Tower Chowk, Deoghar, Jharkhand',
      proposalsCount: 2,
      proposalsList: ['AIIMS Deoghar Civic Lab', 'SKMU Dumka IoT Group'],
      interestedCount: 14,
      committedCount: 1,
      committedFunding: '₹6,75,000',
      committedMentorship: '20 Hours',
      govtReview: {
        reviewerName: 'Shri Manoj Kumar, IAS',
        department: 'Deoghar Municipal Corporation (DMC) & District Administration',
        status: 'Pilot Clearance Granted',
        date: '18 Aug 2026',
        remarks: 'Sanitation route dispatch algorithm tested across 14 high-density pedestrian checkpoints. Real-time telemetry feed integrated into Mela Control Room.',
        officialHash: 'JH-DMC-MELA-2026-0312'
      }
    },
    {
      id: 'NIV-407',
      title: 'Low-Cost Nano-Adsorbent Fluoride & Arsenic Water Filtration Cartridges for North Koel River Basin',
      domain: 'water',
      domainLabel: 'Water Resources & Sanitation',
      city: 'Medininagar (Daltonganj)',
      state: 'Jharkhand',
      district: 'Palamu',
      division: 'Palamu Division',
      lat: 24.0374,
      lng: 84.0734,
      status: 'Open',
      upvotes: 310,
      peopleAffected: '65,000+ farmers & families',
      peopleAffectedCount: 65000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['Chemistry', 'Civil', 'Public Health', 'Hardware'],
      description: 'Groundwater in arid Palamu habitations exceeds 4.2 mg/L fluoride, causing severe fluorosis in tribal children. Seeking regenerative chemical adsorbent cartridges made from local clay and modified agricultural husk.',
      matchedTeam: null,
      matchedUniversity: null,
      industryPartner: null,
      csrFunding: null,
      postedBy: 'Palamu Gram Swaraj Samiti & Pani Panchayat',
      postedDate: '12 Aug 2026',
      impactScore: 95,
      address: 'Chhatarpur Block Community Tube-well, Medininagar, Palamu, Jharkhand',
      proposalsCount: 2,
      proposalsList: ['NPU Medininagar Water Cell', 'IIT (ISM) Hydrogeology'],
      interestedCount: 8,
      committedCount: 0,
      committedFunding: null,
      committedMentorship: null,
      govtReview: null
    },
    {
      id: 'NIV-408',
      title: 'Solar-Assisted Electrostatic Dust & Bio-Aerosol Barriers for Tribal Residential Schools',
      domain: 'environment',
      domainLabel: 'Environment & Clean Air',
      city: 'Dumka',
      state: 'Jharkhand',
      district: 'Dumka',
      division: 'Santhal Pargana',
      lat: 24.2676,
      lng: 87.2541,
      status: 'Open',
      upvotes: 165,
      peopleAffected: '30,000+ tribal students & locals',
      peopleAffectedCount: 30000,
      isClustered: false,
      clusterCount: 1,
      clusterWith: null,
      requiredSkills: ['Environment', 'Civil', 'Sensors', 'Design'],
      description: 'Residential tribal schools adjoining stone-crusher and mining transit corridors face high ambient respirable suspended particulate matter (RSPM). Deploying green bio-hedges integrated with low-power electrostatic fine particulate traps.',
      matchedTeam: null,
      matchedUniversity: null,
      industryPartner: null,
      csrFunding: null,
      postedBy: 'Santhal Pargana Tribal Welfare Council',
      postedDate: '24 Aug 2026',
      impactScore: 92,
      address: 'Eklavya Residential School Road, Kathikund Block, Dumka, Jharkhand',
      proposalsCount: 1,
      proposalsList: ['Kolhan University CleanTech'],
      interestedCount: 7,
      committedCount: 0,
      committedFunding: null,
      committedMentorship: null,
      govtReview: null
    }
  ],

  // Prototype submissions pending or processed by Industry
  submissions: [
    {
      id: 'SUB-101',
      challengeId: 'NIV-401',
      challengeTitle: 'IoT Ultrasonic Silt Telemetry & Flash Flood Alert in Harmu River Feeder Drains',
      teamName: 'BIT Mesra Sensor Telemetry Lab',
      university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
      leadAuthor: 'Dr. Aryan Sharma & Priya Verma',
      prototypeTitle: 'Nivaran IoT Ultrasonic Drain Telemetry v1.0',
      repoUrl: 'https://github.com/bit-mesra/harmu-drain-telemetry',
      submittedDate: '09 Sep 2026',
      status: 'pending', // 'pending' | 'accepted' | 'rejected'
      benchMetrics: 'Continuous 42-day bench stress test passed; 98.4% silt-level accuracy; LoRa telemetry over 4.8km across Ranchi urban clutter.',
      partnerCompany: 'Central Coalfields Limited (CCL) CSR',
      grantApproved: '₹8,50,000',
      mentorshipHours: 30
    },
    {
      id: 'SUB-102',
      challengeId: 'NIV-403',
      challengeTitle: 'Computer Vision Optical Segregation of Coal Overburden & Municipal Solid Waste',
      teamName: 'IIT (ISM) Dhanbad CleanTech Cell',
      university: 'IIT (ISM) Dhanbad',
      leadAuthor: 'Prof. S. Mukherjee & Ananya Roy',
      prototypeTitle: 'OptiSort Edge Vision Classifier v2.1',
      repoUrl: 'https://github.com/iit-dhanbad/optisort-coalfield-waste',
      submittedDate: '06 Sep 2026',
      status: 'pending',
      benchMetrics: '93.8% precision on abrasive mining mixed waste at 1.8 m/s conveyor belt speed; edge TPU inference latency 14ms.',
      partnerCompany: 'Bharat Coking Coal Limited (BCCL) CSR',
      grantApproved: '₹12,00,000',
      mentorshipHours: 45
    }
  ],

  // Active Map Instances Cache to prevent re-initialization bugs
  leafletMaps: {},

  // Temporary container for duplicate resolution flow
  pendingNewChallenge: null,

  // Workspace active challenge
  activeWorkspaceId: 'NIV-401'
};

// ============================================================================
// 2. AI MATCH ENGINE (DYNAMIC MATCH SCORE COMPUTATION)
// ============================================================================

function calculateAiMatch(challenge) {
  const role = appState.currentRole;
  const user = appState.currentUser;

  if (role === 'guest') {
    return {
      score: 82,
      label: 'Civic Priority',
      badgeClass: 'badge-civic-slate',
      reason: 'Standard municipal priority rating based on citizen upvotes.'
    };
  }

  if (role === 'citizen') {
    return {
      score: Math.min(98, 70 + Math.floor(challenge.upvotes / 15)),
      label: 'Community Impact',
      badgeClass: 'badge-civic-amber',
      reason: `Direct neighborhood issue with ${challenge.upvotes} verified citizen endorsements.`
    };
  }

  if (role === 'industry') {
    const matchesDomain = (challenge.domain === 'water' || challenge.domain === 'energy' || challenge.domain === 'waste');
    const score = matchesDomain ? 94 : 78;
    return {
      score,
      label: `${score}% CSR Fit`,
      badgeClass: score >= 90 ? 'badge-civic-teal' : 'badge-civic-slate',
      reason: matchesDomain
        ? `Direct Schedule VII match with your corporate sustainability focus (${challenge.domainLabel}).`
        : `Secondary corporate alignment for urban community development.`
    };
  }

  // University / Student Role
  const userSkills = user.skills || ['AI/ML', 'IoT', 'Civil'];
  const reqSkills = challenge.requiredSkills || [];
  
  const intersection = userSkills.filter(s => reqSkills.includes(s));
  const overlapRatio = reqSkills.length > 0 ? (intersection.length / reqSkills.length) : 0.5;

  let score = 70 + Math.round(overlapRatio * 26);
  if (challenge.id === 'NIV-401') score = 96;
  if (challenge.id === 'NIV-402') score = 91;
  if (challenge.id === 'NIV-403') score = 88;

  const matchedSkillsText = intersection.length > 0 ? intersection.join(', ') : 'Core Engineering';
  return {
    score,
    label: `${score}% Match`,
    badgeClass: score >= 90 ? 'badge-civic-teal' : (score >= 80 ? 'badge-civic-sage' : 'badge-civic-slate'),
    reason: `High compatibility with your ${matchedSkillsText} skillset and academic lab profile.`
  };
}

// ============================================================================
// 3. LEAFLET MAP CONTROLLER (KEYLESS OPENSTREETMAP INTEGRATION)
// ============================================================================

const CITY_COORDS = {
  ranchi: { lat: 23.3441, lng: 85.3096, name: 'Ranchi, Jharkhand' },
  dhanbad: { lat: 23.7957, lng: 86.4304, name: 'Dhanbad, Jharkhand' },
  jamshedpur: { lat: 22.8046, lng: 86.2029, name: 'Jamshedpur, Jharkhand' },
  bokaro: { lat: 23.6693, lng: 86.1511, name: 'Bokaro Steel City, Jharkhand' },
  hazaribagh: { lat: 23.9925, lng: 85.3637, name: 'Hazaribagh, Jharkhand' },
  deoghar: { lat: 24.4826, lng: 86.7003, name: 'Deoghar, Jharkhand' },
  dumka: { lat: 24.2676, lng: 87.2472, name: 'Dumka, Jharkhand' },
  giridih: { lat: 24.1856, lng: 86.3045, name: 'Giridih, Jharkhand' },
  palamu: { lat: 24.0416, lng: 84.0722, name: 'Medininagar, Palamu, Jharkhand' },
  chaibasa: { lat: 22.5539, lng: 85.8083, name: 'Chaibasa, West Singhbhum, Jharkhand' }
};

function cleanupLeafletMap(containerId) {
  if (appState.leafletMaps[containerId]) {
    try {
      appState.leafletMaps[containerId].remove();
    } catch (e) {
      console.warn('Map cleanup error:', e);
    }
    delete appState.leafletMaps[containerId];
  }
}

function reverseGeocode(lat, lng, callback) {
  let closest = 'Ranchi, Jharkhand';
  let minDiff = 999;
  for (const key in CITY_COORDS) {
    const c = CITY_COORDS[key];
    const diff = Math.abs(c.lat - lat) + Math.abs(c.lng - lng);
    if (diff < minDiff) {
      minDiff = diff;
      closest = c.name;
    }
  }

  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;
  fetch(url, { headers: { 'Accept-Language': 'en' } })
    .then(r => r.json())
    .then(data => {
      if (data && data.display_name) {
        const parts = data.display_name.split(',').slice(0, 3).map(s => s.trim()).join(', ');
        callback(parts);
      } else {
        callback(`${closest} (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)})`);
      }
    })
    .catch(() => {
      callback(`${closest} (Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)})`);
    });
}

function initSignupMap() {
  const container = document.getElementById('map-signup');
  if (!container) return;

  cleanupLeafletMap('map-signup');

  const defaultLat = 23.3441;
  const defaultLng = 85.3096;

  const map = L.map('map-signup', {
    scrollWheelZoom: false
  }).setView([defaultLat, defaultLng], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([defaultLat, defaultLng], {
    draggable: true
  }).addTo(map);

  marker.bindPopup('<b>Your Civic Jurisdiction</b><br>Drag this pin to set your neighborhood in Jharkhand.').openPopup();

  function onMarkerMove(lat, lng) {
    const coordsInput = document.getElementById('signup-coords');
    const addressInput = document.getElementById('signup-address');
    if (coordsInput) coordsInput.value = `${lat.toFixed(4)}&deg; N, ${lng.toFixed(4)}&deg; E`;

    reverseGeocode(lat, lng, (addr) => {
      if (addressInput) addressInput.value = addr;
    });
  }

  marker.on('dragend', function (e) {
    const pos = e.target.getLatLng();
    onMarkerMove(pos.lat, pos.lng);
  });

  map.on('click', function (e) {
    marker.setLatLng(e.latlng);
    onMarkerMove(e.latlng.lat, e.latlng.lng);
  });

  const gpsBtn = document.getElementById('btn-signup-gps');
  if (gpsBtn) {
    gpsBtn.onclick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          map.setView([lat, lng], 14);
          marker.setLatLng([lat, lng]);
          onMarkerMove(lat, lng);
          showToast('Location Updated', 'Pin positioned at your current browser coordinates.');
        }, () => {
          map.setView([23.3569, 85.3240], 14);
          marker.setLatLng([23.3569, 85.3240]);
          onMarkerMove(23.3569, 85.3240);
          showToast('GPS Fallback', 'Using Ranchi Civic Ward coordinates.');
        });
      }
    };
  }

  appState.leafletMaps['map-signup'] = map;
  setTimeout(() => map.invalidateSize(), 200);
}

function initPostChallengeMap() {
  const container = document.getElementById('map-post');
  if (!container) return;

  cleanupLeafletMap('map-post');

  const defaultLat = 23.3569;
  const defaultLng = 85.3240;

  const map = L.map('map-post', {
    scrollWheelZoom: false
  }).setView([defaultLat, defaultLng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([defaultLat, defaultLng], {
    draggable: true
  }).addTo(map);

  marker.bindPopup('<b>Problem Site Pin</b><br>Drag pin to exact problem street/drain/hub.').openPopup();

  function onMarkerMove(lat, lng) {
    const coordsInput = document.getElementById('post-coords');
    const addressInput = document.getElementById('post-address');
    if (coordsInput) coordsInput.value = `${lat.toFixed(4)}&deg; N, ${lng.toFixed(4)}&deg; E`;

    reverseGeocode(lat, lng, (addr) => {
      if (addressInput) addressInput.value = addr;
    });
  }

  marker.on('dragend', function (e) {
    const pos = e.target.getLatLng();
    onMarkerMove(pos.lat, pos.lng);
  });

  map.on('click', function (e) {
    marker.setLatLng(e.latlng);
    onMarkerMove(e.latlng.lat, e.latlng.lng);
  });

  const gpsBtn = document.getElementById('btn-post-gps');
  if (gpsBtn) {
    gpsBtn.onclick = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          map.setView([lat, lng], 14);
          marker.setLatLng([lat, lng]);
          onMarkerMove(lat, lng);
          showToast('Location Updated', 'Pin moved to your current location.');
        }, () => {
          showToast('Notice', 'Using default Harmu River catchment coordinates in Ranchi.');
        });
      }
    };
  }

  appState.leafletMaps['map-post'] = map;
  setTimeout(() => map.invalidateSize(), 200);
}

function setChallengeMapMode(mode) {
  appState.challengeMapMode = mode;

  const btnPins = document.getElementById('btn-map-pins');
  const btnHeat = document.getElementById('btn-map-heat');
  const legend = document.getElementById('map-heat-legend');

  if (mode === 'heatmap') {
    if (btnHeat) btnHeat.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-slate-900 shadow-2xs transition-all flex items-center gap-1';
    if (btnPins) btnPins.className = 'px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1';
    if (legend) legend.classList.remove('hidden');
  } else {
    if (btnPins) btnPins.className = 'px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-slate-900 shadow-2xs transition-all flex items-center gap-1';
    if (btnHeat) btnHeat.className = 'px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all flex items-center gap-1';
    if (legend) legend.classList.add('hidden');
  }

  initAllChallengesMap();
}

function filterChallengesByDistrict(districtName) {
  const clean = districtName.replace(' District', '').replace(' (Jamshedpur)', '').replace(' (Chaibasa)', '').replace(' (Medininagar)', '').trim().toLowerCase();
  const searchInput = document.getElementById('challenge-search-input');
  if (searchInput) {
    searchInput.value = clean;
  }
  const btnGrid = document.getElementById('btn-view-grid');
  if (btnGrid) btnGrid.click();
  renderChallenges();
  showToast('District Filtered', `Showing registered challenges in ${districtName}.`);
}

function initAllChallengesMap() {
  const container = document.getElementById('map-all-challenges');
  if (!container) return;

  cleanupLeafletMap('map-all-challenges');

  const map = L.map('map-all-challenges', {
    scrollWheelZoom: false
  }).setView([23.6102, 85.2799], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const isHeatMode = appState.challengeMapMode === 'heatmap';

  if (isHeatMode) {
    // Problem Density Heat Map: Group challenges by Jharkhand district
    const districts = [
      { name: 'Ranchi District', lat: 23.3441, lng: 85.3096, count: 3, people: '45,000+ residents', level: 'high', color: '#DC2626', radius: 24000, problems: ['Harmu River Feeder Telemetry (#NIV-401)', 'Storm Drain Edge Compute Gateway', 'Urban Pothole Lidar Mapping'] },
      { name: 'East Singhbhum (Jamshedpur)', lat: 22.8046, lng: 86.2029, count: 3, people: '85,000+ citizens', level: 'high', color: '#DC2626', radius: 25000, problems: ['Subarnarekha Runoff Telemetry (#NIV-402)', 'Basin Transfer Learning Model', 'Slag Runoff Optical Telemetry'] },
      { name: 'Dhanbad District', lat: 23.7957, lng: 86.4304, count: 3, people: '1,20,000+ residents', level: 'high', color: '#DC2626', radius: 26000, problems: ['Coal Overburden & MSW Sorting (#NIV-403)', 'Damodar Basin Water Sensor', 'Edge Optical Classifier'] },
      { name: 'Deoghar District', lat: 24.4826, lng: 86.7003, count: 2, people: '3,50,000+ pilgrims', level: 'high', color: '#DC2626', radius: 22000, problems: ['Baidyanath Dham Sanitation Telemetry (#NIV-406)', 'Pilgrim Pathway Sensor Net'] },
      { name: 'Bokaro District', lat: 23.6693, lng: 86.1511, count: 2, people: '38,000+ citizens', level: 'med', color: '#D97706', radius: 19000, problems: ['Smart Walkway Solar Lighting (#NIV-404)', 'Motion Battery Telemetry'] },
      { name: 'Palamu District (Medininagar)', lat: 24.0416, lng: 84.0722, count: 2, people: '65,000+ farmers', level: 'med', color: '#D97706', radius: 21000, problems: ['Fluoride Water Filter Cartridges (#NIV-407)', 'Deep Aquifer Remote Imaging'] },
      { name: 'Hazaribagh District', lat: 23.9925, lng: 85.3637, count: 2, people: '22,000+ villagers', level: 'med', color: '#D97706', radius: 18000, problems: ['Barhi Tribal PHC Solar Microgrid (#NIV-405)', 'Smart Cryo-Container Telemetry'] },
      { name: 'West Singhbhum (Chaibasa)', lat: 22.5539, lng: 85.8083, count: 2, people: '30,000+ tribal citizens', level: 'med', color: '#D97706', radius: 19000, problems: ['Roroo River Slag Runoff Bio-Filter (#NIV-408)', 'Slag Neutralization Bio-Membrane'] }
    ];

    districts.forEach(d => {
      L.circle([d.lat, d.lng], {
        radius: d.radius,
        fillColor: d.color,
        fillOpacity: 0.28,
        color: d.color,
        weight: 1.5,
        opacity: 0.6
      }).addTo(map);

      const core = L.circleMarker([d.lat, d.lng], {
        radius: d.level === 'high' ? 14 : 10,
        fillColor: d.color,
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.95
      }).addTo(map);

      const tooltipContent = `
        <div style="font-family: Inter, sans-serif; font-size: 11px; line-height: 1.4; padding: 4px; max-width: 250px;">
          <div style="font-weight: 700; color: #0F172A; font-size: 13px; margin-bottom: 2px;">${d.name}</div>
          <div style="display: flex; gap: 4px; margin-bottom: 6px;">
            <span style="background: ${d.color}; color: white; padding: 1px 6px; border-radius: 4px; font-size: 10px; font-weight: 700;">${d.level.toUpperCase()} DENSITY</span>
            <span style="background: #F1F5F9; color: #475569; padding: 1px 6px; border-radius: 4px; font-size: 10px; font-weight: 600;">${d.count} Problems</span>
          </div>
          <div style="color: #BE123C; font-weight: 700; margin-bottom: 4px;">Impacted: ${d.people}</div>
          <div style="color: #64748B; font-size: 10px; font-weight: 600;">Active Hotspots:</div>
          <ul style="margin: 2px 0 6px 14px; padding: 0; color: #334155; font-size: 10px;">
            ${d.problems.map(p => `<li>${p}</li>`).join('')}
          </ul>
          <button onclick="filterChallengesByDistrict('${d.name}')" style="background: #1B4942; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: 600; cursor: pointer; width: 100%;">Filter Challenges in this District &rarr;</button>
        </div>
      `;

      core.bindPopup(tooltipContent);
      core.bindTooltip(`<b>${d.name}</b><br>${d.count} Problems • ${d.people}`, { direction: 'top' });
    });

  } else {
    // Standard Pins View
    const domainColors = {
      water: '#1B4942',
      waste: '#2D6A4F',
      mobility: '#1E3A5F',
      energy: '#B45309',
      health: '#92400E',
      environment: '#065F46'
    };

    appState.challenges.forEach(ch => {
      const color = domainColors[ch.domain] || '#1B4942';
      const match = calculateAiMatch(ch);
      const pin = L.circleMarker([ch.lat, ch.lng], {
        radius: ch.isClustered ? 10 : 8,
        fillColor: color,
        color: ch.isClustered ? '#B45309' : '#FFFFFF',
        weight: ch.isClustered ? 3 : 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map);

      const clusterBadge = ch.isClustered 
        ? `<span style="background-color: #FEF7ED; color: #92400E; border: 1px solid #FDE68A; padding: 2px 6px; border-radius: 4px; font-size: 10px; font-weight: 700;">${ch.clusterLabel}</span>`
        : '';

      const popupContent = `
        <div style="max-width: 240px; font-family: Inter, sans-serif;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-family: monospace; font-weight: 700; color: #1B4942; font-size: 11px;">#${ch.id}</span>
            <span style="background-color: #EDF4F0; color: #1B4942; padding: 2px 6px; border-radius: 9999px; font-size: 10px; font-weight: 600;">${match.label}</span>
          </div>
          <div style="font-weight: 700; font-size: 12px; color: #0f172a; margin-bottom: 4px; line-height: 1.3;">${ch.title}</div>
          <div style="font-size: 11px; color: #64748b; margin-bottom: 4px;">${ch.city}, ${ch.state}</div>
          ${ch.peopleAffected ? `<div style="font-size: 10px; color: #BE123C; font-weight: 700; margin-bottom: 6px;">Impacted: ${ch.peopleAffected}</div>` : ''}
          ${clusterBadge ? `<div style="margin-bottom: 6px;">${clusterBadge}</div>` : ''}
          <a href="#/challenge/${ch.id}" style="display: block; text-align: center; background-color: #1B4942; color: white; text-decoration: none; padding: 4px 8px; border-radius: 6px; font-size: 11px; font-weight: 600; margin-top: 6px;">View Full Details &rarr;</a>
        </div>
      `;

      pin.bindPopup(popupContent);
    });

    const line = L.polyline([[23.3569, 85.3240], [22.8046, 86.2029]], {
      color: '#B45309',
      weight: 3,
      dashArray: '6, 8',
      opacity: 0.85
    }).addTo(map);

    line.bindPopup(`
      <div style="font-size: 11px; font-family: Inter, sans-serif;">
        <b style="color: #92400E;">Cross-District Solution Cluster</b><br>
        Ranchi (Harmu Basin) &harr; Jamshedpur (Subarnarekha Basin)<br>
        <i>Shared river basin hydrological AI & telemetry prevents siloed municipal research.</i>
      </div>
    `);
  }

  appState.leafletMaps['map-all-challenges'] = map;
  setTimeout(() => map.invalidateSize(), 200);
}

function initDetailMap(lat, lng, title, address) {
  const container = document.getElementById('map-detail');
  if (!container) return;

  cleanupLeafletMap('map-detail');

  const map = L.map('map-detail', {
    scrollWheelZoom: false
  }).setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(`
    <div style="font-size: 12px; font-family: Inter, sans-serif;">
      <b>${title}</b><br>
      <span style="color: #64748b; font-size: 11px;">${address}</span>
    </div>
  `).openPopup();

  appState.leafletMaps['map-detail'] = map;
  setTimeout(() => map.invalidateSize(), 200);
}

// ============================================================================
// 4. SIGN UP COMPONENT (ROLE-AWARE CONDITIONAL FIELDS)
// ============================================================================

const ROLE_CONFIG = {
  student: {
    id: 'student',
    title: 'University & Student Innovation Portal',
    badgeText: 'Selected: University / Student',
    tagline: '"Solve real-world challenges with your skills"',
    submitText: 'Create Student / University Account & Enter Challenges &rarr;',
    btnClass: 'btn-civic-teal',
    badgeClass: 'badge-civic-teal',
    iconHtml: `
      <svg class="w-6 h-6 text-[#1B4942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7"></path>
      </svg>
    `,
    renderFields: () => `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">College / University Name *</label>
          <input type="text" name="university_name" required value="Birla Institute of Technology (BIT) Mesra, Ranchi" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Designation *</label>
          <select name="academic_designation" required class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1B4942]">
            <option value="Student">Student (Undergraduate / Postgrad)</option>
            <option value="Faculty" selected>Faculty Member / Professor</option>
            <option value="Researcher">Postdoctoral Researcher / Lab Fellow</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Course *</label>
          <input type="text" name="course" required value="M.Tech / Research" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Department *</label>
          <input type="text" name="department" required value="Department of Electronics & Communication / CST" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Current Year / Status *</label>
          <select name="academic_year" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1B4942]">
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
            <option value="PG">Postgraduate</option>
            <option value="PhD" selected>PhD / Faculty Lead</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Participation Mode *</label>
          <select name="participation_mode" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1B4942]">
            <option value="team" selected>Representing a Student / Lab Team</option>
            <option value="solo">Solo Problem Solver</option>
            <option value="institutional">Institutional Lab Partner</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Domain Skills & Technical Expertise (Matches 18 Civic Domains)</label>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Water Shortage" checked class="accent-[#1B4942]" /> Water Shortage
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Cleanliness & Sanitation" checked class="accent-[#1B4942]" /> Cleanliness & Sanitation
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Waste Management" checked class="accent-[#1B4942]" /> Waste Management
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Electricity Cuts" checked class="accent-[#1B4942]" /> Electricity Cuts
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Women Safety" class="accent-[#1B4942]" /> Women Safety
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Healthcare" class="accent-[#1B4942]" /> Healthcare
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Street Lighting" class="accent-[#1B4942]" /> Street Lighting
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Education" class="accent-[#1B4942]" /> Education
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Agriculture & Farming" class="accent-[#1B4942]" /> Agriculture & Farming
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Environment & Pollution" class="accent-[#1B4942]" /> Environment & Pollution
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Infrastructure & Roads" class="accent-[#1B4942]" /> Infrastructure & Roads
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Public Transport" class="accent-[#1B4942]" /> Public Transport
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Disaster Management" class="accent-[#1B4942]" /> Disaster Management
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Employment & Livelihood" class="accent-[#1B4942]" /> Employment & Livelihood
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Digital Literacy" class="accent-[#1B4942]" /> Digital Literacy
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Elderly & Disabled Care" class="accent-[#1B4942]" /> Elderly & Disabled Care
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="Child Welfare" class="accent-[#1B4942]" /> Child Welfare
            </label>
            <label class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-stone-100 border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
              <input type="checkbox" name="skills" value="AI/ML" checked class="accent-[#1B4942]" /> AI/ML & IoT
            </label>
          </div>
        </div>
      </div>
    `
  },

  citizen: {
    id: 'citizen',
    title: 'Citizen, NGO & Govt Leader Portal',
    badgeText: 'Selected: Citizen / NGO / Govt',
    tagline: '"Report a problem in your community"',
    submitText: 'Register Civic Account & Access Problem Submissions &rarr;',
    btnClass: 'btn-civic-amber',
    badgeClass: 'badge-civic-amber',
    iconHtml: `
      <svg class="w-6 h-6 text-[#B45309]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
      </svg>
    `,
    renderFields: () => `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Stakeholder Type *</label>
          <select name="citizen_type" id="signup-citizen-type" required class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#B45309]">
            <option value="Individual Citizen">Individual Citizen / Resident</option>
            <option value="NGO">Registered NGO / Civic Trust</option>
            <option value="Govt Body" selected>Govt Body / Ward Councillor / Panchayat</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Organization / Department Name (If NGO/Govt)</label>
          <input type="text" name="citizen_org" value="Ranchi Municipal Corporation (RMC) Ward 26 Advisory" placeholder="e.g. Ward 26 Welfare Committee / NGO Name" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#B45309]" />
        </div>
      </div>

      <div class="pt-2">
        <div class="flex items-center justify-between mb-1.5">
          <label class="block text-xs font-semibold text-slate-700">Your Civic Jurisdiction / Home Base Location *</label>
          <button type="button" id="btn-signup-gps" class="text-[11px] font-semibold text-[#B45309] hover:underline flex items-center gap-1">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            </svg>
            <span>Use My GPS</span>
          </button>
        </div>
        
        <div id="map-signup" class="map-container mb-2"></div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <span class="text-slate-500 text-[10px]">Resolved Address:</span>
            <input type="text" id="signup-address" name="signup_address" readonly value="Kishore Ganj, Ward 26, Harmu Road, Ranchi, Jharkhand" class="w-full px-2.5 py-1.5 rounded bg-stone-50 border border-slate-200 text-slate-700 text-xs" />
          </div>
          <div>
            <span class="text-slate-500 text-[10px]">Coordinates:</span>
            <input type="text" id="signup-coords" name="signup_coords" readonly value="23.3569&deg; N, 85.3240&deg; E" class="w-full px-2.5 py-1.5 rounded bg-stone-50 border border-slate-200 text-slate-700 text-xs font-mono" />
          </div>
        </div>
      </div>
    `
  },

  industry: {
    id: 'industry',
    title: 'Industry & CSR Foundation Portal',
    badgeText: 'Selected: Industry Partner',
    tagline: '"Fund, mentor, and scale impactful solutions"',
    submitText: 'Create Corporate CSR Account & View Solvers &rarr;',
    btnClass: 'btn-civic-slate',
    badgeClass: 'badge-civic-slate',
    iconHtml: `
      <svg class="w-6 h-6 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
      </svg>
    `,
    renderFields: () => `
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Company / Foundation Name *</label>
          <input type="text" name="company_name" required value="Central Coalfields Limited (CCL) CSR" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Primary Domain / Sector Focus *</label>
          <select name="industry_sector" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1E3A5F]">
            <option value="Healthcare">Healthcare</option>
            <option value="Cleanliness & Sanitation">Cleanliness & Sanitation</option>
            <option value="Women Safety">Women Safety</option>
            <option value="Street Lighting">Street Lighting</option>
            <option value="Water Shortage" selected>Water Shortage & Sanitation</option>
            <option value="Electricity Cuts">Electricity Cuts</option>
            <option value="Education">Education</option>
            <option value="Agriculture & Farming">Agriculture & Farming</option>
            <option value="Environment & Pollution">Environment & Pollution</option>
            <option value="Infrastructure & Roads">Infrastructure & Roads</option>
            <option value="Public Transport">Public Transport</option>
            <option value="Waste Management">Waste Management</option>
            <option value="Disaster Management">Disaster Management</option>
            <option value="Employment & Livelihood">Employment & Livelihood</option>
            <option value="Digital Literacy">Digital Literacy</option>
            <option value="Elderly & Disabled Care">Elderly & Disabled Care</option>
            <option value="Child Welfare">Child Welfare</option>
            <option value="Other">Other Civic Issues</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">CSR Representative Designation *</label>
          <input type="text" name="representative_role" required value="Associate Director - CSR Programs" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Years of Experience *</label>
          <input type="number" name="experience_years" required value="12" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
        </div>
        <div>
          <label class="block text-xs font-semibold text-slate-700 mb-1">Annual CSR Budget Tier *</label>
          <select name="csr_budget" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1E3A5F]">
            <option value="tier1">&#8377;10 Lakh - &#8377;50 Lakh</option>
            <option value="tier2" selected>&#8377;50 Lakh - &#8377;2 Crore</option>
            <option value="tier3">&#8377;2 Crore - &#8377;10 Crore+</option>
          </select>
        </div>
      </div>

      <div>
        <label class="block text-xs font-semibold text-slate-700 mb-1">Areas of Interest & Schedule VII CSR Mandates (Select All That Apply) *</label>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] pt-1 max-h-36 overflow-y-auto p-2 bg-stone-50 rounded-xl border border-stone-200">
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Water Shortage" checked class="accent-[#1E3A5F]" /> Water Shortage
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Waste Management" checked class="accent-[#1E3A5F]" /> Waste Management
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Cleanliness & Sanitation" checked class="accent-[#1E3A5F]" /> Cleanliness & Sanitation
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Healthcare" checked class="accent-[#1E3A5F]" /> Healthcare
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Women Safety" class="accent-[#1E3A5F]" /> Women Safety
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Electricity Cuts" class="accent-[#1E3A5F]" /> Electricity Cuts
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Education" class="accent-[#1E3A5F]" /> Education
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Environment & Pollution" class="accent-[#1E3A5F]" /> Environment & Pollution
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Infrastructure & Roads" class="accent-[#1E3A5F]" /> Infrastructure & Roads
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Disaster Management" class="accent-[#1E3A5F]" /> Disaster Management
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Digital Literacy" class="accent-[#1E3A5F]" /> Digital Literacy
          </label>
          <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer hover:bg-stone-200 transition-colors">
            <input type="checkbox" name="csr_interest" value="Other" class="accent-[#1E3A5F]" /> Other Initiatives
          </label>
        </div>
      </div>
    `
  }
};

function setSignupRole(roleId) {
  const config = ROLE_CONFIG[roleId] || ROLE_CONFIG.student;
  
  document.querySelectorAll('.role-tab').forEach(tab => {
    const r = tab.getAttribute('data-role-tab');
    if (r === roleId) {
      tab.classList.add('bg-white', 'text-slate-900', 'shadow-2xs');
      tab.classList.remove('text-slate-600');
    } else {
      tab.classList.remove('bg-white', 'text-slate-900', 'shadow-2xs');
      tab.classList.add('text-slate-600');
    }
  });

  const badge = document.getElementById('active-role-badge');
  if (badge) {
    badge.textContent = config.badgeText;
    badge.className = `${config.badgeClass} text-xs font-semibold px-2.5 py-0.5 rounded-full`;
  }

  const iconContainer = document.getElementById('role-icon-container');
  if (iconContainer) iconContainer.innerHTML = config.iconHtml;

  const titleHeading = document.getElementById('role-title-heading');
  if (titleHeading) titleHeading.textContent = config.title;

  const descText = document.getElementById('role-desc-text');
  if (descText) descText.textContent = config.tagline;

  const submitBtn = document.getElementById('submit-signup-btn');
  const submitText = document.getElementById('submit-btn-text');
  if (submitBtn && submitText) {
    submitText.textContent = config.submitText;
    submitBtn.className = `${config.btnClass} w-full py-3 px-6 rounded-xl font-semibold text-xs shadow-xs transition-all flex items-center justify-center gap-2 mt-4`;
  }

  const fieldsContainer = document.getElementById('dynamic-role-fields');
  if (fieldsContainer) {
    fieldsContainer.innerHTML = config.renderFields();
  }

  if (roleId === 'citizen') {
    setTimeout(() => {
      initSignupMap();
    }, 100);
  }
}

// ============================================================================
// 4B. DEDICATED USER PROFILE & AUTH MANAGEMENT ENGINE
// ============================================================================

function updateNavbarUserUI() {
  const signupBtn = document.getElementById('header-signup-btn');
  const profileBtn = document.getElementById('header-profile-btn');
  const avatarSpan = document.getElementById('header-user-avatar');
  const nameSpan = document.getElementById('header-user-name');

  if (!signupBtn || !profileBtn) return;

  if (appState.isRegistered) {
    signupBtn.classList.add('hidden');
    profileBtn.classList.remove('hidden');

    const fullName = appState.currentUser.name || 'User';
    const words = fullName.trim().split(/\s+/);
    let initials = 'U';
    if (words.length >= 2) {
      initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();
    } else if (words.length === 1 && words[0].length > 0) {
      initials = words[0].substring(0, 2).toUpperCase();
    }

    if (avatarSpan) avatarSpan.textContent = initials;
    if (nameSpan) {
      nameSpan.textContent = words.length > 2 ? `${words[0]} ${words[1]}` : words[0];
    }
  } else {
    signupBtn.classList.remove('hidden');
    profileBtn.classList.add('hidden');
  }
}

function renderUserProfile() {
  const user = appState.currentUser;
  const role = user.role || 'student';

  // Avatar Initials
  const fullName = user.name || 'Innovator';
  const words = fullName.trim().split(/\s+/);
  let initials = 'IN';
  if (words.length >= 2) {
    initials = (words[0][0] + words[words.length - 1][0]).toUpperCase();
  } else if (words.length === 1 && words[0].length > 0) {
    initials = words[0].substring(0, 2).toUpperCase();
  }

  const avatarCircle = document.getElementById('profile-avatar-circle');
  if (avatarCircle) avatarCircle.textContent = initials;

  const displayName = document.getElementById('profile-display-name');
  if (displayName) displayName.textContent = fullName;

  const roleBadge = document.getElementById('profile-role-badge');
  const roleIcon = document.getElementById('profile-role-icon');
  const heading = document.getElementById('profile-credentials-heading');
  const subtitle = document.getElementById('profile-institution-subtitle');

  if (role === 'student') {
    if (roleBadge) {
      roleBadge.textContent = 'University / Student';
      roleBadge.className = 'badge-civic-teal text-[11px] font-semibold px-2.5 py-0.5 rounded-full';
    }
    if (roleIcon) roleIcon.textContent = '';
    if (heading) heading.textContent = 'University & Academic Credentials';
    if (subtitle) subtitle.textContent = user.university_name || user.institution || 'University Innovation Lab';
  } else if (role === 'industry') {
    if (roleBadge) {
      roleBadge.textContent = 'Industry Partner';
      roleBadge.className = 'badge-civic-slate text-[11px] font-semibold px-2.5 py-0.5 rounded-full';
    }
    if (roleIcon) roleIcon.textContent = '';
    if (heading) heading.textContent = 'Corporate CSR & Sponsorship Profile';
    if (subtitle) subtitle.textContent = user.company_name || 'Industry Sponsor';
  } else {
    if (roleBadge) {
      roleBadge.textContent = 'Citizen / NGO / Govt';
      roleBadge.className = 'badge-civic-amber text-[11px] font-semibold px-2.5 py-0.5 rounded-full';
    }
    if (roleIcon) roleIcon.textContent = '';
    if (heading) heading.textContent = 'Civic Jurisdiction & Community Profile';
    if (subtitle) subtitle.textContent = user.citizen_org || user.citizen_type || 'Civic Participant';
  }

  // Demographics
  const emailEl = document.getElementById('profile-email');
  if (emailEl) emailEl.textContent = user.email || 'aryan.sharma@bitmesra.ac.in';

  const phoneEl = document.getElementById('profile-phone');
  if (phoneEl) phoneEl.textContent = user.phone || '+91 98765 43210';

  const ageGenderEl = document.getElementById('profile-age-gender');
  if (ageGenderEl) ageGenderEl.textContent = `${user.age || 28} yrs • ${user.gender || 'Not specified'}`;

  const regDateEl = document.getElementById('profile-registered-date');
  if (regDateEl) regDateEl.textContent = user.registeredDate || 'September 2026';

  // Role Details Container
  const detailsContainer = document.getElementById('profile-role-details-container');
  if (detailsContainer) {
    if (role === 'student') {
      const skillsList = Array.isArray(user.skills) && user.skills.length > 0 
        ? user.skills 
        : ['Water Shortage', 'Cleanliness & Sanitation', 'Waste Management', 'Electricity Cuts', 'AI/ML'];

      const skillsHtml = skillsList.map(skill => {
        const meta = getDomainMeta(skill);
        return `
          <span class="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border shadow-2xs" style="background-color: ${meta.bg}; color: ${meta.color}; border-color: ${meta.border};">
            ${meta.label}
          </span>
        `;
      }).join('');

      detailsContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">College / Institution</span>
            <span class="font-bold text-slate-800 text-sm">${user.university_name || user.institution || 'Birla Institute of Technology (BIT) Mesra, Ranchi'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Designation & Role</span>
            <span class="font-bold text-slate-800 text-sm">${user.academic_designation || user.designation || 'Faculty / Lab Lead'}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Course / Degree</span>
            <span class="font-semibold text-slate-800">${user.course || 'M.Tech / Research'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Department</span>
            <span class="font-semibold text-slate-800">${user.department || 'Dept. of Remote Sensing & Geoinformatics'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Academic Status</span>
            <span class="font-semibold text-slate-800">${user.academic_year || 'PhD Scholar'}</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
          <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Participation Mode</span>
          <span class="font-semibold text-[#1B4942]">
            ${user.participation_mode === 'team' ? 'Representing a Student / Lab Team' : user.participation_mode === 'solo' ? 'Solo Problem Solver' : 'Institutional Lab Partner'}
          </span>
        </div>

        <div>
          <span class="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">Verified Technical Skills & Civic Domains</span>
          <div class="flex flex-wrap gap-1.5">
            ${skillsHtml}
          </div>
        </div>
      `;
    } else if (role === 'industry') {
      const interestsList = Array.isArray(user.csr_interest) && user.csr_interest.length > 0
        ? user.csr_interest
        : ['Water Shortage', 'Waste Management', 'Cleanliness & Sanitation', 'Healthcare'];

      const budgetMap = {
        tier1: '₹10 Lakh - ₹50 Lakh',
        tier2: '₹50 Lakh - ₹2 Crore',
        tier3: '₹2 Crore - ₹10 Crore+'
      };

      const interestsHtml = interestsList.map(item => {
        const meta = getDomainMeta(item);
        return `
          <span class="inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-full border shadow-2xs" style="background-color: ${meta.bg}; color: ${meta.color}; border-color: ${meta.border};">
            ${meta.label}
          </span>
        `;
      }).join('');

      detailsContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Company / Foundation</span>
            <span class="font-bold text-slate-800 text-sm">${user.company_name || 'Central Coalfields Limited (CCL) CSR'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Sector Focus</span>
            <span class="font-bold text-slate-800 text-sm">${user.industry_sector || 'Water Shortage & Sanitation'}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Representative Title</span>
            <span class="font-semibold text-slate-800">${user.representative_role || 'Associate Director - CSR Programs'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Industry Experience</span>
            <span class="font-semibold text-slate-800">${user.experience_years || '12'} Years</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">CSR Budget Tier</span>
            <span class="font-semibold text-[#1E3A5F]">${budgetMap[user.csr_budget] || user.csr_budget || '₹50 Lakh - ₹2 Crore'}</span>
          </div>
        </div>

        <div>
          <span class="text-slate-500 text-xs font-bold uppercase tracking-wider block mb-2">Areas of Interest & Schedule VII CSR Mandates</span>
          <div class="flex flex-wrap gap-1.5">
            ${interestsHtml}
          </div>
        </div>
      `;
    } else {
      // Citizen / NGO / Govt
      detailsContainer.innerHTML = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Stakeholder Entity</span>
            <span class="font-bold text-slate-800 text-sm">${user.citizen_type || 'Govt Body'}</span>
          </div>
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Organization / Department</span>
            <span class="font-bold text-slate-800 text-sm">${user.citizen_org || 'Ranchi Municipal Corporation (RMC) Ward 26 Advisory'}</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs">
          <span class="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mb-0.5">Civic Jurisdiction Base Location</span>
          <div class="font-semibold text-slate-800 mt-0.5">
            ${user.signup_address || 'Kishore Ganj, Ward 26, Harmu Road, Ranchi, Jharkhand'}
          </div>
          <div class="text-[11px] text-slate-500 font-mono mt-1">
            GPS Coordinates: ${user.signup_coords || '23.3569&deg; N, 85.3240&deg; E'}
          </div>
        </div>

        <div class="rounded-xl overflow-hidden border border-stone-200">
          <div id="profile-leaflet-map" style="height: 180px; width: 100%;"></div>
        </div>
      `;

      setTimeout(() => {
        initProfileMap(user.signup_coords || '23.3569, 85.3240', user.signup_address || 'Harmu Road, Ranchi');
      }, 100);
    }
  }

  // Active Engagements List
  const engagementsList = document.getElementById('profile-engagements-list');
  if (engagementsList) {
    const myTeam = appState.currentUserTeam;
    let teamCardHtml = '';
    if (myTeam) {
      teamCardHtml = `
        <div class="p-4 rounded-xl border-2 border-[#1B4942] bg-gradient-to-r from-[#EDF4F0] to-[#E2EEE7] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <div class="flex items-start gap-3">
            <div class="w-9 h-9 rounded-lg bg-[#1B4942] text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
              TEAM
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono text-xs font-bold text-[#1B4942]">#${myTeam.challengeId}</span>
                <span class="text-xs px-2 py-0.5 rounded-full bg-[#1B4942] text-white font-semibold">Active Solver Team</span>
                <span class="text-[11px] text-slate-600 font-medium">Formed ${myTeam.formedAt || 'Recently'}</span>
              </div>
              <h4 class="font-bold text-xs text-[#1B4942] mt-0.5">${myTeam.teamName} &bull; ${myTeam.challengeTitle}</h4>
              <p class="text-[11px] text-slate-600">Advisor: ${myTeam.advisor} &bull; Members: ${(myTeam.teammates || []).join(', ')}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <a href="#/workspace/${myTeam.challengeId}" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1B4942] hover:bg-[#153B35] text-white shadow-xs">
              Workspace &rarr;
            </a>
          </div>
        </div>
      `;
    }

    engagementsList.innerHTML = `
      ${teamCardHtml}
      <div class="p-4 rounded-xl border border-stone-200 hover:border-[#CADED4] bg-stone-50/70 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-9 h-9 rounded-lg bg-[#EDF4F0] border border-[#CADED4] flex items-center justify-center text-[#1B4942] font-mono font-bold text-xs flex-shrink-0">
            401
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs font-bold text-[#1B4942]">#NIV-401</span>
              <span class="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">Piloted</span>
              <span class="badge-high-frequency">Clustered</span>
            </div>
            <h4 class="font-semibold text-xs text-slate-900 mt-0.5">AI-Powered Stormwater Drain Clog Detection & Flash Flood Alert</h4>
            <p class="text-[11px] text-slate-500">Ranchi & Jamshedpur • Lead University: BIT Mesra • Sponsor: Central Coalfields Limited (CCL) CSR</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <a href="#/workspace/NIV-401" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#1B4942] hover:bg-[#153B35] text-white shadow-xs">
            Open Workspace &rarr;
          </a>
        </div>
      </div>

      <div class="p-4 rounded-xl border border-stone-200 hover:border-[#FDE68A] bg-stone-50/70 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div class="flex items-start gap-3">
          <div class="w-9 h-9 rounded-lg bg-[#FEF7ED] border border-[#FDE68A] flex items-center justify-center text-[#92400E] font-mono font-bold text-xs flex-shrink-0">
            402
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs font-bold text-[#92400E]">#NIV-402</span>
              <span class="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">Prototyped</span>
            </div>
            <h4 class="font-semibold text-xs text-slate-900 mt-0.5">Subarnarekha & Kharkai Industrial Effluent & Runoff Telemetry</h4>
            <p class="text-[11px] text-slate-500">Jamshedpur (Kolhan Division) • Lead University: NIT Jamshedpur • Sponsor: Tata Steel Foundation</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          <a href="#/challenge/NIV-402" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200 hover:bg-stone-100 text-slate-700 shadow-xs">
            View Brief &rarr;
          </a>
        </div>
      </div>

      <!-- Verified Student Resolution Certificates -->
      <div class="mt-4 pt-4 border-t border-stone-200">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-700">📜 Verified Civic Resolution Certificates</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">${(appState.studentCertificates || []).length} Verified</span>
          </div>
          <span class="text-[10px] text-slate-500 italic">Issued by Govt of Jharkhand & Industry CSR Council</span>
        </div>

        <div class="space-y-2.5">
          ${(appState.studentCertificates || []).map(cert => `
            <div class="p-3.5 rounded-xl bg-gradient-to-r from-emerald-50/60 to-white border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div>
                <div class="flex items-center gap-2">
                  <span class="font-mono text-xs font-bold text-emerald-800">${cert.id}</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-700 text-white">${cert.status}</span>
                  <span class="text-[10px] text-slate-500 font-mono">Issued: ${cert.issueDate}</span>
                </div>
                <div class="text-xs font-bold text-slate-900 mt-1">${cert.challengeTitle}</div>
                <div class="text-[11px] text-slate-600 mt-0.5">
                  <span>Awarded to: <strong class="text-slate-800">${cert.studentName}</strong> (${cert.teamName}) &bull; CSR Partner: <strong class="text-[#1B4942]">${cert.industryPartner}</strong></span>
                </div>
              </div>
              <button type="button" onclick="viewStudentCertificate('SUB-101')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[#1B4942] hover:bg-[#153B35] text-white shadow-xs shrink-0 flex items-center gap-1">
                <span>View Official Certificate &nearr;</span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}

function initProfileMap(coordsStr, address) {
  const container = document.getElementById('profile-leaflet-map');
  if (!container) return;

  cleanupLeafletMap('profile-leaflet-map');

  let lat = 23.3569;
  let lng = 85.3240;
  const match = (coordsStr || '').match(/([0-9.]+)[^0-9.]+([0-9.]+)/);
  if (match) {
    lat = parseFloat(match[1]);
    lng = parseFloat(match[2]);
  }

  const map = L.map('profile-leaflet-map', {
    scrollWheelZoom: false
  }).setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const marker = L.marker([lat, lng]).addTo(map);
  marker.bindPopup(`
    <div style="font-size: 11px; font-family: Inter, sans-serif;">
      <b>Civic Base Location</b><br>
      <span style="color: #64748b;">${address}</span>
    </div>
  `).openPopup();

  appState.leafletMaps['profile-leaflet-map'] = map;
  setTimeout(() => map.invalidateSize(), 200);
}

function toggleProfileEdit(showEdit) {
  const viewMode = document.getElementById('profile-view-mode');
  const editMode = document.getElementById('profile-edit-mode');
  const editBtnLabel = document.getElementById('edit-profile-btn-label');

  if (!viewMode || !editMode) return;

  if (showEdit) {
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');
    if (editBtnLabel) editBtnLabel.textContent = 'Viewing Mode';

    // Populate inputs
    const user = appState.currentUser;
    const nameInp = document.getElementById('edit-fullname');
    const emailInp = document.getElementById('edit-email');
    const phoneInp = document.getElementById('edit-phone');
    const ageInp = document.getElementById('edit-age');
    const genderInp = document.getElementById('edit-gender');

    if (nameInp) nameInp.value = user.name || '';
    if (emailInp) emailInp.value = user.email || '';
    if (phoneInp) phoneInp.value = user.phone || '';
    if (ageInp) ageInp.value = user.age || 28;
    if (genderInp) genderInp.value = user.gender || 'Male';

    // Inject dynamic role fields in edit mode
    const dynamicContainer = document.getElementById('dynamic-edit-role-fields');
    if (dynamicContainer) {
      if (user.role === 'student') {
        const skillsList = Array.isArray(user.skills) ? user.skills : ['Water Shortage', 'AI/ML'];
        const domainCheckboxes = Object.keys(DOMAIN_CONFIG).map(dom => {
          const isChecked = skillsList.includes(dom) ? 'checked' : '';
          const meta = DOMAIN_CONFIG[dom];
          return `
            <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer text-[11px] hover:bg-stone-100 transition-colors">
              <input type="checkbox" name="skills" value="${dom}" ${isChecked} class="accent-[#1B4942]" />
              <span class="font-medium">${dom}</span>
            </label>
          `;
        }).join('');

        dynamicContainer.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">College / University Name *</label>
              <input type="text" name="university_name" required value="${user.university_name || user.institution || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Academic Designation *</label>
              <select name="academic_designation" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1B4942]">
                <option value="Student" ${user.academic_designation === 'Student' ? 'selected' : ''}>Student (Undergraduate / Postgrad)</option>
                <option value="Faculty" ${user.academic_designation === 'Faculty' ? 'selected' : ''}>Faculty Member / Professor</option>
                <option value="Researcher" ${user.academic_designation === 'Researcher' ? 'selected' : ''}>Postdoctoral Researcher / Lab Fellow</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Course / Degree *</label>
              <input type="text" name="course" required value="${user.course || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Department *</label>
              <input type="text" name="department" required value="${user.department || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1B4942]" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Domain Skills & Technical Expertise (Select All That Apply)</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto p-2 bg-stone-50 rounded-xl border border-stone-200">
              ${domainCheckboxes}
            </div>
          </div>
        `;
      } else if (user.role === 'industry') {
        const interestsList = Array.isArray(user.csr_interest) ? user.csr_interest : ['Water Shortage'];
        const domainCheckboxes = Object.keys(DOMAIN_CONFIG).map(dom => {
          const isChecked = interestsList.includes(dom) ? 'checked' : '';
          const meta = DOMAIN_CONFIG[dom];
          return `
            <label class="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 cursor-pointer text-[11px] hover:bg-stone-100 transition-colors">
              <input type="checkbox" name="csr_interest" value="${dom}" ${isChecked} class="accent-[#1E3A5F]" />
              <span class="font-medium">${dom}</span>
            </label>
          `;
        }).join('');

        dynamicContainer.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Company / Foundation Name *</label>
              <input type="text" name="company_name" required value="${user.company_name || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Sector Focus *</label>
              <input type="text" name="industry_sector" required value="${user.industry_sector || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Representative Title *</label>
              <input type="text" name="representative_role" required value="${user.representative_role || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#1E3A5F]" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Annual CSR Budget Tier</label>
              <select name="csr_budget" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#1E3A5F]">
                <option value="tier1" ${user.csr_budget === 'tier1' ? 'selected' : ''}>₹10 Lakh - ₹50 Lakh</option>
                <option value="tier2" ${user.csr_budget === 'tier2' ? 'selected' : ''}>₹50 Lakh - ₹2 Crore</option>
                <option value="tier3" ${user.csr_budget === 'tier3' ? 'selected' : ''}>₹2 Crore - ₹10 Crore+</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Areas of Interest & Schedule VII CSR Mandates</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto p-2 bg-stone-50 rounded-xl border border-stone-200">
              ${domainCheckboxes}
            </div>
          </div>
        `;
      } else {
        dynamicContainer.innerHTML = `
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Stakeholder Type *</label>
              <select name="citizen_type" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs focus:outline-none focus:border-[#B45309]">
                <option value="Individual Citizen" ${user.citizen_type === 'Individual Citizen' ? 'selected' : ''}>Individual Citizen / Resident</option>
                <option value="NGO" ${user.citizen_type === 'NGO' ? 'selected' : ''}>Registered NGO / Civic Trust</option>
                <option value="Govt Body" ${user.citizen_type === 'Govt Body' ? 'selected' : ''}>Govt Body / Ward Councillor</option>
              </select>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Organization / Dept Name</label>
              <input type="text" name="citizen_org" value="${user.citizen_org || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#B45309]" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Verified Base Jurisdiction Address</label>
            <input type="text" name="signup_address" value="${user.signup_address || ''}" class="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs focus:outline-none focus:border-[#B45309]" />
          </div>
        `;
      }
    }
  } else {
    viewMode.classList.remove('hidden');
    editMode.classList.add('hidden');
    if (editBtnLabel) editBtnLabel.textContent = 'Edit Profile';
  }
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('profile-edit-form');
  if (!form) return;

  const formData = new FormData(form);
  const user = appState.currentUser;

  user.name = formData.get('fullname') || user.name;
  user.email = formData.get('email') || user.email;
  user.phone = formData.get('phone') || user.phone;
  user.age = formData.get('age') || user.age;
  user.gender = formData.get('gender') || user.gender;

  if (user.role === 'student') {
    user.university_name = formData.get('university_name') || user.university_name;
    user.institution = user.university_name;
    user.academic_designation = formData.get('academic_designation') || user.academic_designation;
    user.course = formData.get('course') || user.course;
    user.department = formData.get('department') || user.department;
    const skills = formData.getAll('skills');
    if (skills.length > 0) user.skills = skills;
  } else if (user.role === 'industry') {
    user.company_name = formData.get('company_name') || user.company_name;
    user.industry_sector = formData.get('industry_sector') || user.industry_sector;
    user.representative_role = formData.get('representative_role') || user.representative_role;
    user.csr_budget = formData.get('csr_budget') || user.csr_budget;
    const interests = formData.getAll('csr_interest');
    if (interests.length > 0) user.csr_interest = interests;
  } else {
    user.citizen_type = formData.get('citizen_type') || user.citizen_type;
    user.citizen_org = formData.get('citizen_org') || user.citizen_org;
    user.signup_address = formData.get('signup_address') || user.signup_address;
  }

  localStorage.setItem('nivaran_user', JSON.stringify(user));
  updateNavbarUserUI();
  toggleProfileEdit(false);
  renderUserProfile();
  showToast('Profile Updated!', 'Your changes have been saved to your national credentials profile.');
}

function logoutOrResetUser() {
  appState.isRegistered = false;
  localStorage.removeItem('nivaran_is_registered');
  updateNavbarUserUI();
  showToast('Account Reset / Logged Out', 'You are now browsing as a guest. Click "Sign Up" to register anytime.');
  navigateTo('');
}

// ============================================================================
// 5. POST A CHALLENGE & DUPLICATE CLUSTERING DEMO ENGINE
// ============================================================================

function checkForDuplicates(domain, title, description) {
  const normTitle = (title + ' ' + description).toLowerCase();
  const isWaterDrain = (domain === 'Water Shortage' || domain === 'water') ||
                       (normTitle.includes('drain') || normTitle.includes('silt') || normTitle.includes('flood') || normTitle.includes('water'));

  if (isWaterDrain) {
    const match = appState.challenges.find(c => c.id === 'NIV-401') || appState.challenges[0];
    return {
      hasDuplicate: true,
      existingChallenge: match,
      matchingChallenges: match ? [match] : []
    };
  }

  return { hasDuplicate: false, matchingChallenges: [] };
}

function autoEstimatePeopleAffected() {
  const address = document.getElementById('post-address')?.value || '';
  const domain = document.getElementById('post-domain')?.value || '';
  const title = document.getElementById('post-title')?.value || '';

  let estimate = 25000;
  const lower = (address + ' ' + title + ' ' + domain).toLowerCase();
  if (lower.includes('deoghar') || lower.includes('shravani') || lower.includes('baidyanath')) estimate = 350000;
  else if (lower.includes('dhanbad') || lower.includes('bccl') || lower.includes('coal')) estimate = 120000;
  else if (lower.includes('jamshedpur') || lower.includes('subarnarekha')) estimate = 85000;
  else if (lower.includes('palamu') || lower.includes('medininagar') || lower.includes('daltonganj')) estimate = 65000;
  else if (lower.includes('ranchi') || lower.includes('harmu')) estimate = 45000;
  else if (lower.includes('bokaro')) estimate = 38000;
  else if (lower.includes('chaibasa') || lower.includes('singhbhum')) estimate = 30000;
  else if (lower.includes('hazaribagh') || lower.includes('barhi')) estimate = 22000;

  const peopleInput = document.getElementById('post-people-affected');
  if (peopleInput) {
    peopleInput.value = `${estimate.toLocaleString('en-IN')}+ residents`;
    showToast('Population Estimated', `Calculated ~${estimate.toLocaleString('en-IN')} impacted citizens based on Jharkhand municipal ward density.`);
  }
}

function openEditChallenge(challengeId) {
  const ch = appState.challenges.find(c => c.id === challengeId);
  if (!ch) return;

  appState.editingChallengeId = challengeId;
  navigateTo('post-challenge');

  setTimeout(() => {
    const editBanner = document.getElementById('post-edit-banner');
    const editBannerText = document.getElementById('post-edit-banner-text');
    const idInput = document.getElementById('post-editing-challenge-id');
    const submitBtn = document.getElementById('btn-post-submit-text');

    if (editBanner) editBanner.classList.remove('hidden');
    if (editBannerText) editBannerText.textContent = `You are editing Challenge #${ch.id}: "${ch.title}"`;
    if (idInput) idInput.value = ch.id;
    if (submitBtn) submitBtn.textContent = 'Save Changes & Update Challenge';

    const domainSelect = document.getElementById('post-domain');
    const titleInput = document.getElementById('post-title');
    const descInput = document.getElementById('post-description');
    const addressInput = document.getElementById('post-address');
    const coordsInput = document.getElementById('post-coords');
    const peopleInput = document.getElementById('post-people-affected');

    if (domainSelect) domainSelect.value = ch.domain || 'water';
    if (titleInput) titleInput.value = ch.title || '';
    if (descInput) descInput.value = ch.description || '';
    if (addressInput) addressInput.value = ch.address || '';
    if (coordsInput) coordsInput.value = `${ch.lat.toFixed(4)}° N, ${ch.lng.toFixed(4)}° E`;
    if (peopleInput) peopleInput.value = ch.peopleAffected || '';

    if (appState.leafletMaps['map-post']) {
      appState.leafletMaps['map-post'].setView([ch.lat, ch.lng], 13);
    }
  }, 120);
}

function cancelEditChallenge() {
  const prevId = appState.editingChallengeId;
  appState.editingChallengeId = null;

  const editBanner = document.getElementById('post-edit-banner');
  if (editBanner) editBanner.classList.add('hidden');

  const idInput = document.getElementById('post-editing-challenge-id');
  if (idInput) idInput.value = '';

  const form = document.getElementById('post-challenge-form');
  if (form) form.reset();

  const submitBtn = document.getElementById('btn-post-submit-text');
  if (submitBtn) submitBtn.textContent = 'Publish Civic Challenge';

  if (prevId) {
    navigateTo(`challenge/${prevId}`);
  } else {
    navigateTo('challenges');
  }
}

function handlePostChallengeSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('post-challenge-form');
  const formData = new FormData(form);

  const domain = formData.get('domain') || 'Water Shortage';
  const title = formData.get('title') || 'Civic Issue';
  const description = formData.get('description') || '';
  const address = formData.get('address') || 'Harmu Road, Ward 26, Ranchi, Jharkhand';
  const coordsStr = formData.get('coords') || '23.3569° N, 85.3240° E';
  const peopleAffected = formData.get('people_affected') || document.getElementById('post-people-affected')?.value || '25,000+ residents';

  let lat = 23.3569;
  let lng = 85.3240;
  const match = coordsStr.match(/([0-9.]+)[^0-9.]+([0-9.]+)/);
  if (match) {
    lat = parseFloat(match[1]);
    lng = parseFloat(match[2]);
  }

  // Check if currently editing an existing challenge
  const editingId = appState.editingChallengeId || document.getElementById('post-editing-challenge-id')?.value;
  if (editingId) {
    const existing = appState.challenges.find(c => c.id === editingId);
    if (existing) {
      existing.title = title;
      existing.domain = domain;
      existing.domainLabel = domain;
      existing.description = description;
      existing.address = address;
      existing.lat = lat;
      existing.lng = lng;
      existing.peopleAffected = peopleAffected;
      existing.city = address.split(',')[0].trim() || existing.city;
      existing.state = address.split(',')[1]?.trim() || 'Jharkhand';

      appState.editingChallengeId = null;
      const editBanner = document.getElementById('post-edit-banner');
      if (editBanner) editBanner.classList.add('hidden');
      const submitBtn = document.getElementById('btn-post-submit-text');
      if (submitBtn) submitBtn.textContent = 'Publish Civic Challenge';

      form.reset();

      addNotification({
        title: `Challenge Updated: #${existing.id}`,
        message: `Details and impacted population updated for "${existing.title}".`,
        targetUrl: `challenge/${existing.id}`,
        type: 'challenge_edited'
      });

      showToast('Challenge Updated!', `Challenge #${existing.id} changes saved and published.`);
      navigateTo(`challenge/${existing.id}`);
      return;
    }
  }

  const newChallenge = {
    id: `NIV-${Math.floor(400 + Math.random() * 500)}`,
    title,
    domain: domain,
    domainLabel: domain,
    city: address.split(',')[0].trim() || 'Ranchi',
    state: address.split(',')[1]?.trim() || 'Jharkhand',
    lat,
    lng,
    status: 'Open',
    upvotes: 1,
    peopleAffected: peopleAffected,
    proposalsCount: 0,
    proposalsList: [],
    interestedCount: 1,
    committedCount: 0,
    committedFunding: null,
    committedMentorship: null,
    isClustered: false,
    clusterCount: 1,
    clusterWith: null,
    requiredSkills: ['IoT', 'Civil', 'Sensors'],
    description,
    matchedTeam: null,
    matchedUniversity: null,
    industryPartner: null,
    csrFunding: null,
    postedBy: appState.currentUser.name || 'Citizen Submitter',
    postedDate: 'Today',
    impactScore: 92,
    address,
    govtReview: null
  };

  appState.pendingNewChallenge = newChallenge;

  const check = checkForDuplicates(domain, title, description);
  if (check.hasDuplicate && check.matchingChallenges && check.matchingChallenges.length > 0) {
    const targetMatch = check.matchingChallenges[0];
    newChallenge.isClustered = true;
    newChallenge.clusterCount = (targetMatch.clusterCount || 1) + 1;
    newChallenge.clusterWith = targetMatch.id;
    newChallenge.clusterLabel = `Clustered Challenge (${newChallenge.clusterCount} locations)`;

    targetMatch.isClustered = true;
    targetMatch.clusterCount = newChallenge.clusterCount;
    if (!targetMatch.clusterWith) targetMatch.clusterWith = newChallenge.id;
    targetMatch.clusterLabel = `Clustered Challenge (${targetMatch.clusterCount} locations)`;
  }

  appState.challenges.unshift(newChallenge);
  addNotification({
    title: `New Challenge Registered: #${newChallenge.id}`,
    message: `"${newChallenge.title}" registered in ${newChallenge.city}, Jharkhand.${newChallenge.isClustered ? ' Automatically linked with matching regional cluster.' : ''}`,
    targetUrl: `challenge/${newChallenge.id}`,
    type: 'challenge_posted'
  });
  showToast('Challenge Posted!', `Challenge #${newChallenge.id} registered directly.${newChallenge.isClustered ? ' Linked with matching civic cluster.' : ''}`);
  form.reset();
  navigateTo('challenges');
}

function resolveClusterDecision(shouldMerge) {
  const modal = document.getElementById('modal-duplicate-cluster');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  const newCh = appState.pendingNewChallenge;
  if (!newCh) return;

  const confirmContainer = document.getElementById('post-cluster-confirmation');

  if (shouldMerge) {
    newCh.isClustered = true;
    newCh.clusterCount = 2;
    newCh.clusterWith = 'NIV-401';
    newCh.clusterLabel = 'Clustered Challenge (2 locations)';

    const p = appState.challenges.find(c => c.id === 'NIV-401');
    if (p) {
      p.isClustered = true;
      p.clusterCount = 2;
      p.clusterWith = newCh.id;
    }

    appState.challenges.unshift(newCh);

    showToast(
      'Merged into Clustered Challenge!',
      `Challenge #${newCh.id} clustered with #NIV-401 (${p ? p.city : 'Ranchi'}). Telemetry & R&D models shared across both Jharkhand cities!`
    );

    if (confirmContainer) {
      confirmContainer.innerHTML = `
        <div class="flex items-start justify-between gap-4 flex-wrap">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-xl bg-[#B45309] text-white flex items-center justify-center font-bold shadow-xs flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
            </div>
            <div>
              <span class="badge-high-frequency">✓ Statewide Civic Cluster Formed</span>
              <h3 class="font-display font-bold text-lg text-slate-900 mt-1">Multi-City Challenge Synchronized Across Jharkhand</h3>
            </div>
          </div>
          <button type="button" onclick="dismissClusterConfirm()" class="text-slate-400 hover:text-slate-700 text-sm font-bold">&times; Close</button>
        </div>

        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-white border border-stone-200">
            <span class="text-[10px] text-slate-400 uppercase font-bold tracking-wider block">Newly Submitted Civic Report</span>
            <div class="font-bold text-slate-900 mt-0.5">#${newCh.id}: ${newCh.title}</div>
            <div class="text-slate-600 text-[11px] mt-0.5"><span class="font-semibold">Location:</span> ${newCh.address}</div>
          </div>
          <div class="p-3 rounded-xl bg-white border border-[#CADED4]">
            <span class="text-[10px] text-[#1B4942] uppercase font-bold tracking-wider block">Matched Jharkhand Cluster Partner</span>
            <div class="font-bold text-[#1B4942] mt-0.5">#NIV-401: AI-Powered Silt Telemetry & Flash Flood Alert</div>
            <div class="text-slate-600 text-[11px] mt-0.5"><span class="font-semibold">Location:</span> Harmu River Feeder, Ranchi</div>
          </div>
        </div>

        <div class="mt-4 p-3.5 rounded-xl bg-white/80 border border-amber-200 text-xs">
          <h4 class="font-bold text-[#92400E] mb-1">Statewide Shared Civic Benefits</h4>
          <ul class="space-y-1 text-slate-700 text-[11px] list-disc list-inside">
            <li><strong>Single R&D Effort:</strong> 1 ultrasonic probe firmware deployed across both river basins without double spending.</li>
            <li><strong>Co-Funded Corporate CSR:</strong> Central Coalfields Limited (CCL) and Tata Steel Foundation CSR pooling grant support.</li>
            <li><strong>University Collaboration:</strong> BIT Mesra & NIT Jamshedpur student engineering labs sharing open telemetry specs.</li>
          </ul>
        </div>

        <div class="mt-4 flex flex-wrap gap-2.5 items-center justify-end">
          <button type="button" onclick="dismissClusterConfirm()" class="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-stone-100">
            Post Another Challenge
          </button>
          <button type="button" onclick="navigateTo('challenge/NIV-401')" class="px-3.5 py-2 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-slate-800">
            Inspect Linked Challenge (#NIV-401)
          </button>
          <button type="button" onclick="navigateTo('challenges')" class="btn-civic-teal px-4 py-2 rounded-lg text-xs font-semibold shadow-xs">
            View All Clustered Challenges &rarr;
          </button>
        </div>
      `;
      confirmContainer.classList.remove('hidden');
      confirmContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const form = document.getElementById('post-challenge-form');
    if (form) form.reset();
    appState.pendingNewChallenge = null;
    return;
  } else {
    newCh.isClustered = false;
    appState.challenges.unshift(newCh);
    showToast('Challenge Posted', `Challenge #${newCh.id} posted as an independent municipal case.`);
    appState.pendingNewChallenge = null;
    const form = document.getElementById('post-challenge-form');
    if (form) form.reset();
    navigateTo('challenges');
  }
}

function dismissClusterConfirm() {
  const confirmContainer = document.getElementById('post-cluster-confirmation');
  if (confirmContainer) {
    confirmContainer.classList.add('hidden');
    confirmContainer.innerHTML = '';
  }
}

// ============================================================================
// 6. CHALLENGE LISTING & FILTERING
// ============================================================================

function renderChallenges() {
  const grid = document.getElementById('challenges-grid');
  if (!grid) return;

  const listingRoleBadge = document.getElementById('role-listing-badge');
  if (listingRoleBadge) {
    const roleTitles = {
      student: 'AI Match Active: University Profile (Skills & Lab Focus)',
      industry: 'AI Match Active: Corporate CSR Alignment (Schedule VII)',
      citizen: 'Verified Community Priority Engine',
      guest: 'Public Civic Challenges'
    };
    listingRoleBadge.textContent = roleTitles[appState.currentRole] || 'AI Match Active';
  }

  const searchInput = document.getElementById('challenge-search-input');
  const catFilter = document.getElementById('category-filter');
  const matchFilter = document.getElementById('match-filter');
  const statusFilter = document.getElementById('status-filter');
  const sortFilter = document.getElementById('sort-filter');

  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const cat = catFilter ? catFilter.value : 'all';
  const matchMin = matchFilter ? matchFilter.value : 'all';
  const status = statusFilter ? statusFilter.value : 'all';
  const sortMode = sortFilter ? sortFilter.value : 'priority';

  const filtered = appState.challenges.filter(ch => {
    if (query) {
      const matchText = (ch.title + ' ' + ch.city + ' ' + ch.state + ' ' + ch.description + ' ' + ch.id).toLowerCase();
      if (!matchText.includes(query)) return false;
    }

    if (cat !== 'all') {
      const meta = getDomainMeta(ch.domain);
      if (meta.key !== cat && ch.domain !== cat) return false;
    }

    if (status !== 'all' && ch.status !== status) return false;

    if (matchMin !== 'all') {
      const matchScore = calculateAiMatch(ch).score;
      if (matchScore < parseInt(matchMin)) return false;
    }

    return true;
  });

  // Frequency-based Prioritization Engine: Default sorting by Priority Score
  if (sortMode === 'priority') {
    filtered.sort((a, b) => calculatePriorityScore(b).score - calculatePriorityScore(a).score);
  } else if (sortMode === 'match') {
    filtered.sort((a, b) => calculateAiMatch(b).score - calculateAiMatch(a).score);
  } else if (sortMode === 'upvotes') {
    filtered.sort((a, b) => b.upvotes - a.upvotes);
  } else if (sortMode === 'newest') {
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  }

  const counter = document.getElementById('challenge-count-text');
  if (counter) {
    counter.textContent = `Showing ${filtered.length} of ${appState.challenges.length} active civic challenges`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full p-12 text-center bg-white rounded-2xl border border-stone-200">
        <p class="text-sm font-semibold text-slate-700">No challenges match your active filter criteria.</p>
        <p class="text-xs text-slate-500 mt-1">Try resetting the domain or match percentage dropdowns.</p>
        <button onclick="resetChallengeFilters()" class="mt-4 px-4 py-2 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-slate-800">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(ch => {
    const aiMatch = calculateAiMatch(ch);
    const domainMeta = getDomainMeta(ch.domain);
    const priority = calculatePriorityScore(ch);
    const isCluster = ch.isClustered;

    const statusBadges = {
      'Open': 'badge-civic-slate',
      'Matched': 'badge-civic-teal',
      'In Progress': 'badge-civic-amber',
      'Piloted': 'badge-civic-sage',
      'Deployed': 'badge-civic-teal'
    };
    const statusClass = statusBadges[ch.status] || 'badge-civic-slate';

    return `
      <div class="challenge-card rounded-2xl border border-stone-200 p-5 flex flex-col justify-between cursor-pointer shadow-xs hover:border-slate-300" onclick="navigateTo('challenge/${ch.id}')">
        <div>
          
          <div class="flex items-center justify-between gap-2 mb-2.5">
            <span class="text-xs font-mono font-bold text-slate-500 bg-stone-100 px-2 py-0.5 rounded">#${ch.id}</span>
            <div class="flex items-center gap-1.5">
              <span class="${aiMatch.badgeClass} text-[11px] font-bold px-2 py-0.5 rounded-full shadow-2xs" title="${aiMatch.reason}">
                ${aiMatch.label}
              </span>
              <span class="${statusClass} text-[10px] font-semibold px-2 py-0.5 rounded">
                ${ch.status}
              </span>
            </div>
          </div>

          <!-- High-Frequency Prioritization Badge -->
          ${(priority.isHighFrequency || isCluster) ? `
            <div class="badge-high-frequency mb-2.5">
              <span>${t('highFrequency')}: ${priority.clusterSize}x (${priority.locations})</span>
              <span class="text-[10px] text-rose-700 font-mono font-bold">(${priority.score} ${t('ptsUnit')})</span>
            </div>
          ` : `
            <div class="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 mb-2.5 bg-stone-50 px-2 py-0.5 rounded">
              <span>${t('priorityScore')}:</span>
              <span class="font-bold text-slate-800">${priority.score} ${t('ptsUnit')}</span>
            </div>
          `}

          <div class="mb-2">
            <span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style="background-color: ${domainMeta.bg}; color: ${domainMeta.color}; border: 1px solid ${domainMeta.border};">
              ${domainMeta.label}
            </span>
            <h3 class="font-display font-bold text-base text-slate-900 mt-1.5 line-clamp-2 hover:text-[#1B4942] transition-colors">
              ${ch.title}
            </h3>
          </div>

          <p class="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
            ${ch.description}
          </p>

          ${isCluster ? `
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold mb-3 bg-amber-50 text-amber-900 border border-amber-200">
              <svg class="w-3.5 h-3.5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
              <span>${ch.clusterLabel || t('clusteredBadgeText')}</span>
            </div>
          ` : ''}

        </div>

        <div class="pt-3 border-t border-stone-200 mt-2 flex items-center justify-between text-xs text-slate-500 gap-2 flex-wrap">
          <div class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            </svg>
            <span class="font-medium text-slate-700">${ch.city}, ${ch.state}</span>
          </div>
          <div class="flex items-center gap-2">
            ${ch.peopleAffected ? `
              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200" title="${t('peopleAffectedLabel')}">
                <svg class="w-3 h-3 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                <span>${ch.peopleAffected}</span>
              </span>
            ` : ''}
            <div class="flex items-center gap-1 text-[#B45309] font-bold">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span>${ch.upvotes}</span>
            </div>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function resetChallengeFilters() {
  const s = document.getElementById('challenge-search-input');
  const c = document.getElementById('category-filter');
  const m = document.getElementById('match-filter');
  const st = document.getElementById('status-filter');
  if (s) s.value = '';
  if (c) c.value = 'all';
  if (m) m.value = 'all';
  if (st) st.value = 'all';
  renderChallenges();
}

// ============================================================================
// 7. CHALLENGE DETAIL CONTROLLER
// ============================================================================

function renderChallengeDetail(challengeId) {
  const container = document.getElementById('challenge-detail-content');
  if (!container) return;

  const challenge = appState.challenges.find(c => c.id === challengeId) || appState.challenges[0];
  const domainMeta = getDomainMeta(challenge.domain);
  const aiMatch = calculateAiMatch(challenge);

  const stages = ['Open', 'Matched', 'In Progress', 'Piloted', 'Deployed'];
  const currentIndex = stages.indexOf(challenge.status);

  const clusterPartner = challenge.clusterWith ? appState.challenges.find(c => c.id === challenge.clusterWith) : null;
  const isMyTeamAssigned = !!(appState.currentUserTeam && (appState.currentUserTeam.challengeId === challenge.id || challenge.assignedTeam === appState.currentUserTeam.teamName));

  container.innerHTML = `
    ${isMyTeamAssigned ? `
      <div class="p-5 rounded-2xl bg-gradient-to-r from-[#EDF4F0] to-[#E2EEE7] border-2 border-[#1B4942] shadow-xs mb-6">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1B4942] text-white text-[11px] font-bold">
              <span>✓ Your Formed Solver Team</span>
              <span>• Active Solver Roster</span>
            </div>
            <h3 class="font-display font-bold text-lg text-[#1B4942] mt-2">${appState.currentUserTeam.teamName}</h3>
            <p class="text-xs text-slate-700 mt-0.5"><span class="font-semibold">Institution:</span> ${appState.currentUserTeam.university || 'Birla Institute of Technology (BIT) Mesra, Ranchi'} &bull; <span class="font-semibold">Faculty Advisor:</span> ${appState.currentUserTeam.advisor}</p>
            <div class="mt-2 flex flex-wrap gap-1.5">
              ${(appState.currentUserTeam.teammates || []).map(m => `<span class="px-2 py-0.5 rounded bg-white text-slate-700 text-[11px] font-medium border border-[#CADED4]">${m}</span>`).join('')}
            </div>
          </div>
          <a href="#/workspace/${challenge.id}" class="btn-civic-teal px-4 py-2 rounded-xl text-xs font-semibold shadow-xs shrink-0 flex items-center gap-1">
            <span>Open Workspace &rarr;</span>
          </a>
        </div>
      </div>
    ` : ''}

    <div class="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200 shadow-xs">
      
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold text-slate-500 bg-stone-100 px-2.5 py-1 rounded">#${challenge.id}</span>
          <span class="inline-flex items-center text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full" style="background-color: ${domainMeta.bg}; color: ${domainMeta.color}; border: 1px solid ${domainMeta.border};">
            ${domainMeta.label}
          </span>
          ${challenge.isClustered ? `
            <span class="cluster-badge text-xs font-bold px-2.5 py-1 rounded">
              ${challenge.clusterLabel}
            </span>
          ` : ''}
        </div>
        
        <div class="flex items-center gap-2 flex-wrap">
          <button type="button" onclick="openEditChallenge('${challenge.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 text-xs font-bold transition-colors border border-stone-300 shadow-2xs" title="Edit challenge details and location">
            <svg class="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
            <span>${t('editSubmissionBtn')}</span>
          </button>
          <button type="button" onclick="upvoteChallenge('${challenge.id}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FEF7ED] border border-[#FDE68A] text-[#B45309] text-xs font-bold hover:bg-[#FDE68A]/50 transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span id="detail-upvotes-count">${challenge.upvotes} ${t('upvotesLabel')}</span>
          </button>
        </div>
      </div>

      <h1 class="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-3 leading-snug">
        ${challenge.title}
      </h1>

      <div class="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-600 mb-6">
        <div class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
          <span class="font-semibold text-slate-800">${challenge.address}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <span>Posted: <span class="font-medium text-slate-800">${challenge.postedDate}</span></span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span>By: <span class="font-medium text-slate-800">${challenge.postedBy}</span></span>
        </div>
        <div class="flex items-center gap-1.5 text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200" title="${t('peopleAffectedLabel')}">
          <svg class="w-3.5 h-3.5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <span>${t('peopleImpactedPrefix')} <strong class="text-rose-900">${challenge.peopleAffected || '25,000+ residents'}</strong></span>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-[#EDF4F0] border border-[#CADED4] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-[#1B4942] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
            ${aiMatch.score}%
          </div>
          <div>
            <div class="text-xs font-bold text-[#1B4942]">${t('aiMatchScoreLabel')}</div>
            <p class="text-xs text-slate-700 mt-0.5">${aiMatch.reason}</p>
          </div>
        </div>
        <span class="text-[11px] font-semibold text-[#1B4942] bg-white px-2.5 py-1 rounded-full border border-[#CADED4] self-start sm:self-center">
          ${t('verifiedMatchBadge')}
        </span>
      </div>

      <div class="pt-4 border-t border-stone-200">
        <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">${t('pipelineProgressTitle')}</div>
        <div class="grid grid-cols-5 gap-2 text-center text-xs">
          ${stages.map((stage, idx) => {
            const isPassed = idx <= currentIndex;
            const isCurrent = idx === currentIndex;
            let barClass = 'bg-stone-200 text-slate-500';
            if (isPassed) barClass = 'bg-[#1B4942] text-white font-bold';
            if (isCurrent) barClass = 'bg-[#2D6A4F] text-white font-bold ring-2 ring-[#2D6A4F]/30';

            return `
              <div class="p-2 rounded-lg ${barClass} transition-all">
                <div class="text-[10px] opacity-75">${idx + 1}</div>
                <div class="truncate text-[11px]">${stage}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3-Column Stakeholder Engagement Tracker -->
      <div class="mt-6 pt-6 border-t border-stone-200">
        <div class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">${t('stakeholderRosterTitle')}</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          
          <!-- Column 1: Proposals Submitted -->
          <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase font-bold tracking-wider text-slate-500">${t('proposalsSubmittedTitle')}</span>
                <span class="px-2 py-0.5 rounded-full bg-[#EDF4F0] text-[#1B4942] font-mono font-bold text-xs">${challenge.proposalsCount || 2} Active</span>
              </div>
              <div class="space-y-1.5 mt-2">
                ${((challenge.proposalsList && challenge.proposalsList.length > 0) ? challenge.proposalsList : [
                  'BIT Mesra Sensor Telemetry Lab',
                  'IIT ISM CleanTech R&D'
                ]).map(p => {
                  const teamName = typeof p === 'object' ? p.team : p;
                  const teamStatus = (typeof p === 'object' && p.status) ? p.status : 'Active Proposal';
                  const isApproved = teamStatus.includes('Approved');
                  return `
                    <div class="p-2 rounded bg-white border border-stone-200 flex items-center justify-between gap-1">
                      <span class="font-semibold text-slate-800 text-[11px] truncate">${teamName}</span>
                      <span class="text-[10px] px-1.5 py-0.5 rounded shrink-0 ${isApproved ? 'bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold' : 'bg-stone-100 text-slate-600'}">${teamStatus}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
            <div class="mt-2.5 text-[10px] text-slate-400">Formal university technical dossiers submitted.</div>
          </div>

          <!-- Column 2: Interested Researchers -->
          <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase font-bold tracking-wider text-slate-500">${t('interestedResearchersTitle')}</span>
                <span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 font-mono font-bold text-xs">${challenge.interestedCount || 6} Tracking</span>
              </div>
              <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">
                Faculty labs & PhD scholars across BIT Mesra, NIT Jamshedpur, and RU Ranchi analyzing dataset & field parameters.
              </p>
            </div>
            <div class="mt-2.5 pt-2 border-t border-stone-200 flex items-center gap-1.5 text-[11px] text-[#1B4942] font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>${t('openCrossCampus')}</span>
            </div>
          </div>

          <!-- Column 3: Committed Industry Partners -->
          <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <span class="text-[10px] uppercase font-bold tracking-wider text-slate-500">${t('committedIndustryTitle')}</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 font-mono font-bold text-xs">${challenge.committedCount || 1} Partner</span>
              </div>
              <div class="text-[11px] font-bold text-slate-900 mt-1">${challenge.industryPartner || 'Seeking Corporate Partner'}</div>
              <div class="text-[11px] text-slate-600 mt-0.5"><span class="font-semibold">Committed Grant:</span> <span class="text-[#1B4942] font-bold">${challenge.committedFunding || challenge.csrFunding || '₹8,50,000'}</span></div>
              <div class="text-[11px] text-slate-600 mt-0.5"><span class="font-semibold">Mentorship:</span> ${challenge.committedMentorship || '30 Hours Logged'}</div>
            </div>
            <div class="mt-2.5 text-[10px] text-emerald-700 font-semibold">✓ Corporate CSR Sponsoring Entity</div>
          </div>

        </div>
      </div>

    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      <div class="lg:col-span-2 space-y-6">
        
        <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <h3 class="font-display font-bold text-lg text-slate-900">${t('problemStatementHeading')}</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            ${challenge.description}
          </p>
          
          <div class="pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">${t('requiredCapabilitiesHeading')}</h4>
            <div class="flex flex-wrap gap-2">
              ${(challenge.requiredSkills || ['IoT', 'AI/ML', 'Civil']).map(s => `
                <span class="px-2.5 py-1 rounded bg-stone-100 text-slate-700 text-xs font-semibold border border-slate-200">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        ${challenge.isClustered && clusterPartner ? `
          <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
            <div class="flex items-center gap-2 mb-3">
              <span class="cluster-badge text-xs font-bold px-2 py-0.5 rounded">Clustered Replication Model</span>
              <span class="text-xs text-slate-500 font-medium">Shared Civic Prototype</span>
            </div>
            <h4 class="font-display font-bold text-base text-slate-900 mb-1">
              Cross-City Parallel Problem: ${clusterPartner.city}, ${clusterPartner.state}
            </h4>
            <p class="text-xs text-slate-600 mb-4 leading-relaxed">
              This challenge has been clustered with <span class="font-semibold text-slate-900">#${clusterPartner.id} ("${clusterPartner.title}")</span>. The same sensor telemetry architecture and firmware developed for ${challenge.city} is deployed in ${clusterPartner.city} without redundant R&D costs.
            </p>

            <div class="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono font-bold text-slate-500">#${clusterPartner.id} &bull; ${clusterPartner.city}</span>
                <div class="text-xs font-semibold text-slate-900 mt-0.5">${clusterPartner.title}</div>
              </div>
              <button type="button" onclick="navigateTo('challenge/${clusterPartner.id}')" class="btn-civic-teal px-3 py-1.5 rounded-lg text-xs font-semibold">
                Inspect Clustered Case &rarr;
              </button>
            </div>
          </div>
        ` : ''}

        <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-display font-bold text-base text-slate-900">${t('problemLocationCoords')}</h3>
            <span class="text-xs font-mono text-slate-500">${challenge.lat.toFixed(4)}&deg; N, ${challenge.lng.toFixed(4)}&deg; E</span>
          </div>
          <div id="map-detail" class="map-container mb-2"></div>
          <p class="text-[11px] text-slate-500">Pin drops directly on verified citizen report coordinates.</p>
        </div>

        <!-- Official Government Review & Regulatory Assessment Section -->
        <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div class="flex items-center justify-between flex-wrap gap-2">
            <div class="flex items-center gap-2">
              <span class="govt-seal-badge text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded">${t('verifiedGovtAssessment')}</span>
              <span class="text-xs font-semibold text-slate-700">${t('jharkhandCivicGovernance')}</span>
            </div>
            <button type="button" onclick="openGovtReviewModal('${challenge.id}')" class="px-3 py-1 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-slate-700 border border-stone-300">
              ${t('submitGovtReviewBtn')}
            </button>
          </div>

          ${challenge.govtReview ? `
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div class="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <div class="font-bold text-slate-900 text-sm">${challenge.govtReview.reviewerName}</div>
                  <div class="text-[11px] text-slate-500 font-medium">${challenge.govtReview.department}</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    ✓ ${challenge.govtReview.status}
                  </span>
                  <span class="text-[10px] text-slate-400 font-mono">${challenge.govtReview.date || 'Aug 2026'}</span>
                </div>
              </div>
              <p class="text-slate-700 mt-2 leading-relaxed pt-2 border-t border-slate-200">
                "${challenge.govtReview.remarks}"
              </p>
            </div>
          ` : `
            <div class="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-500 flex items-center justify-between">
              <span>Pending formal regulatory review by Jharkhand Municipal / Urban Development authorities.</span>
              <button type="button" onclick="openGovtReviewModal('${challenge.id}')" class="btn-civic-slate px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0">
                Provide Assessment
              </button>
            </div>
          `}
        </div>

      </div>

      <div class="space-y-6">
        
        <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Active Role Actions</span>
            <span class="text-[11px] font-semibold text-[#1B4942]">Portal Actions</span>
          </div>

          <div class="space-y-2">
            ${isMyTeamAssigned ? `
              <div class="p-3 rounded-xl bg-[#EDF4F0] border border-[#CADED4] text-xs space-y-1 text-center">
                <div class="font-bold text-[#1B4942]">✓ Your Team Assigned</div>
                <div class="text-[11px] text-slate-600 font-medium">${appState.currentUserTeam.teamName}</div>
                <a href="#/workspace/${challenge.id}" class="btn-civic-teal block w-full py-2 rounded-lg font-semibold mt-2 shadow-xs">
                  ${t('enterWorkspaceBtn')}
                </a>
              </div>
            ` : `
              <button type="button" onclick="openTeamFormationModal('${challenge.id}')" class="btn-civic-teal w-full py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-2">
                <span>${t('applyToSolveBtn')}</span>
              </button>
              <p class="text-[11px] text-slate-500 text-center">Open to university students, PhD scholars, and faculty labs.</p>
            `}
          </div>

          <div class="pt-3 border-t border-stone-200 space-y-2">
            <button type="button" onclick="openIndustryAdoptModal('${challenge.id}')" class="btn-civic-slate w-full py-2.5 px-4 rounded-xl text-xs font-semibold shadow-xs flex items-center justify-center gap-2">
              <span>${t('adoptChallengeBtn')}</span>
            </button>
            <p class="text-[11px] text-slate-500 text-center">Qualifies under Companies Act Schedule VII CSR.</p>
          </div>

          <div class="pt-3 border-t border-stone-200 space-y-2">
            <button type="button" onclick="openGovtReviewModal('${challenge.id}')" class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-[#1E3A5F] hover:bg-[#152A45] text-white shadow-xs flex items-center justify-center gap-2 transition-colors">
              <span>${t('officialGovtReviewBtn')}</span>
            </button>
            <p class="text-[11px] text-slate-500 text-center">Formal review for Municipal & State authorities.</p>
          </div>

          <div class="pt-3 border-t border-stone-200">
            <a href="#/workspace/${challenge.id}" class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-slate-800 flex items-center justify-center gap-1.5 transition-colors">
              <span>${t('enterWorkspaceBtn')}</span>
            </a>
          </div>

        </div>

        <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <h4 class="font-display font-bold text-sm text-slate-900">${t('stakeholderCollaboration')}</h4>
          
          <div class="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
            <span class="text-[10px] text-slate-500 uppercase font-bold">${t('matchedUniversityTeam')}</span>
            <div class="font-semibold text-slate-900 mt-0.5">${(isMyTeamAssigned ? appState.currentUserTeam.teamName : challenge.matchedTeam) || 'Open for Team Applications'}</div>
            <div class="text-slate-500 text-[11px]">${(isMyTeamAssigned ? (appState.currentUserTeam.university || 'BIT Mesra, Ranchi') : challenge.matchedUniversity) || 'Recognized Jharkhand institution'}</div>
          </div>

          <div class="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
            <span class="text-[10px] text-slate-500 uppercase font-bold">Industry CSR Sponsor</span>
            <div class="font-semibold text-slate-900 mt-0.5">${challenge.industryPartner || 'Seeking Industry Adoption'}</div>
            <div class="text-[#1B4942] font-bold text-[11px]">${challenge.csrFunding ? `Committed Grant: ${challenge.csrFunding}` : 'Grant Available: &#8377;5L - &#8377;15L'}</div>
          </div>
        </div>

      </div>

    </div>
  `;

  setTimeout(() => {
    initDetailMap(challenge.lat, challenge.lng, challenge.title, challenge.address);
  }, 100);
}

function upvoteChallenge(id) {
  const ch = appState.challenges.find(c => c.id === id);
  if (ch) {
    ch.upvotes += 1;
    const upvotesEl = document.getElementById('detail-upvotes-count');
    if (upvotesEl) upvotesEl.textContent = `${ch.upvotes} Upvotes`;
    showToast('Upvoted!', `You supported challenge #${ch.id}. Total endorsements: ${ch.upvotes}`);
  }
}

// ============================================================================
// 8. COLLABORATIVE WORKSPACE CONTROLLER
// ============================================================================

function setWorkspaceTab(tabId) {
  const tabs = document.querySelectorAll('.ws-tab');
  tabs.forEach(t => {
    if (t.getAttribute('data-ws-tab') === tabId) {
      t.className = 'ws-tab px-4 py-2 rounded-t-lg bg-white border border-stone-200 border-b-white text-[#1B4942] font-bold';
    } else {
      t.className = 'ws-tab px-4 py-2 rounded-t-lg text-slate-600 hover:text-slate-900 font-semibold';
    }
  });

  const contents = ['kanban', 'docs', 'chat', 'reviews', 'ideas'];
  contents.forEach(c => {
    const el = document.getElementById(`ws-content-${c}`);
    if (el) {
      if (c === tabId) {
        el.classList.remove('hidden');
        el.classList.add('block');
      } else {
        el.classList.add('hidden');
        el.classList.remove('block');
      }
    }
  });
}

function saveWorkspaceDoc() {
  showToast('Specifications Saved', 'NIV-401 technical protocol updated in the shared document registry.');
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  if (!input || !input.value.trim()) return;

  const msg = input.value.trim();
  const list = document.getElementById('chat-messages');
  if (list) {
    const div = document.createElement('div');
    div.className = 'flex items-start gap-2.5';
    div.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-[#EDF4F0] text-[#1B4942] font-bold flex items-center justify-center flex-shrink-0">
        ${appState.currentUser.name ? appState.currentUser.name.split(' ').map(n=>n[0]).join('').slice(0,2) : 'ME'}
      </div>
      <div>
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-slate-900">${appState.currentUser.name || 'Current User'}</span>
          <span class="text-[10px] text-slate-400">Just now</span>
        </div>
        <p class="text-slate-700 mt-0.5">${msg}</p>
      </div>
    `;
    list.appendChild(div);
    list.scrollTop = list.scrollHeight;
  }
  input.value = '';
}

function addIdeaPrompt() {
  const title = prompt('Enter innovation idea title:');
  if (!title) return;
  const list = document.getElementById('ideas-list');
  if (list) {
    const div = document.createElement('div');
    div.className = 'p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs';
    div.innerHTML = `
      <div class="font-semibold text-slate-900">${title}</div>
      <p class="text-slate-600 mt-0.5">Submitted by ${appState.currentUser.name || 'Team Member'} for next milestone sprint.</p>
    `;
    list.prepend(div);
    showToast('Idea Logged', 'Idea added to the challenge innovation backlog.');
  }
}

// ============================================================================
// 9. INDUSTRY REVIEW PANEL & DOCUMENT GENERATORS
// ============================================================================

function renderIndustryReview() {
  const container = document.getElementById('industry-submissions-list');
  if (!container) return;

  container.innerHTML = appState.submissions.map(sub => {
    const isAccepted = sub.status === 'accepted';
    const isRevision = sub.status === 'needs_revision';
    const hasPpo = appState.ppos.some(p => p.challengeId === sub.challengeId);

    let statusBadge = `<span class="badge-civic-amber text-xs font-semibold px-2.5 py-1 rounded-full">Pending Evaluation</span>`;
    if (isAccepted) {
      statusBadge = `<span class="badge-civic-sage text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><span>Approved for Pilot</span></span>`;
    } else if (isRevision) {
      statusBadge = `<span class="bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1"><span>Needs Technical Revision</span></span>`;
    }

    return `
      <div class="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-4">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-200 gap-2">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-slate-500 bg-stone-100 px-2 py-0.5 rounded">#${sub.challengeId}</span>
              <h3 class="font-display font-bold text-base text-slate-900">${sub.challengeTitle}</h3>
            </div>
            <p class="text-xs text-slate-500 mt-0.5">Submitted by <span class="font-semibold text-slate-800">${sub.teamName}</span> &bull; ${sub.university}</p>
          </div>

          <div class="flex items-center gap-2">
            ${statusBadge}
            ${hasPpo ? `<span class="ppo-badge">PPO Offered</span>` : ''}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-500 text-[10px] font-bold uppercase">Deliverable Prototype</span>
            <div class="font-bold text-slate-900 mt-0.5">${sub.prototypeTitle}</div>
            <a href="${sub.repoUrl}" target="_blank" class="text-[11px] text-[#1B4942] hover:underline font-semibold mt-1 inline-block">GitHub Repository / Telemetry Demo &rarr;</a>
          </div>

          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-500 text-[10px] font-bold uppercase">CSR Sponsorship Allocation</span>
            <div class="font-bold text-[#1B4942] mt-0.5">${sub.grantApproved} Grant</div>
            <div class="text-[11px] text-slate-600 mt-1">${sub.mentorshipHours} Hours Mentorship Logged</div>
          </div>

          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
            <span class="text-slate-500 text-[10px] font-bold uppercase">Lead Student Innovator</span>
            <div class="font-bold text-slate-900 mt-0.5 cursor-pointer hover:text-[#1B4942]" onclick="openStudentProfileModal('${sub.leadAuthor.split('&')[0].trim()}')">${sub.leadAuthor} &nearr;</div>
            <div class="text-[11px] text-slate-500 mt-1">Submitted: ${sub.submittedDate}</div>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-[#F9F8F6] border border-stone-200 text-xs">
          <span class="font-bold text-slate-800">Test Metrics & Field Readiness:</span>
          <p class="text-slate-600 mt-0.5">${sub.benchMetrics}</p>
          ${sub.rejectReason ? `
            <div class="mt-2 p-2 rounded bg-rose-50 border border-rose-200 text-rose-900 font-medium text-[11px]">
              <strong>Previous Revision Feedback:</strong> ${sub.rejectReason}
            </div>
          ` : ''}
        </div>

        <div class="flex flex-wrap items-center justify-between pt-2 gap-2">
          <div class="text-[11px] text-slate-500">
            Approval advances challenge status and unlocks student certificate, PPO endorsement, and statutory Schedule VII filing.
          </div>
          
          <div class="flex items-center gap-2 flex-wrap">
            ${!isAccepted ? `
              <button type="button" onclick="openRejectModal('${sub.id}')" class="px-3.5 py-2 rounded-lg text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-300 shadow-2xs">Reject (Request Revisions)</button>
              <button type="button" onclick="acceptSubmission('${sub.id}')" class="btn-civic-teal px-4 py-2 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5">
                <span>Accept for Pilot</span>
              </button>
            ` : `
              <button type="button" onclick="openAwardPpoModal('${sub.challengeId}', '${sub.id}')" class="px-3.5 py-2 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300 hover:bg-amber-100 shadow-xs flex items-center gap-1">
                <span>Flag for PPO</span>
              </button>
              <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>✓ Certificate sent to student team (${sub.teamName})</span>
              </div>
              <button type="button" onclick="viewCsrReport('${sub.id}')" class="btn-civic-slate px-3.5 py-2 rounded-lg text-xs font-semibold shadow-xs">
                View Statutory CSR Report
              </button>
            `}
          </div>
        </div>

      </div>
    `;
  }).join('');
}

function acceptSubmission(subId) {
  const sub = appState.submissions.find(s => s.id === subId);
  if (!sub) return;

  sub.status = 'accepted';

  const ch = appState.challenges.find(c => c.id === sub.challengeId);
  if (ch) {
    ch.status = 'Piloted';
  }

  // Generate certificate and send directly to student profile
  if (!appState.studentCertificates.some(c => c.challengeId === sub.challengeId)) {
    appState.studentCertificates.push({
      id: `CERT-${sub.challengeId}`,
      challengeId: sub.challengeId,
      challengeTitle: sub.challengeTitle,
      studentName: sub.leadAuthor || 'Dr. Aryan Sharma',
      teamName: sub.teamName,
      university: sub.university,
      issueDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'Verified & Active',
      industryPartner: ch?.industryPartner || 'Central Coalfields Limited (CCL) CSR',
      signatory: 'Jharkhand State Civic Innovation Directorate & Industry CSR Council'
    });
  }

  addNotification({
    title: `Solution Accepted for #${sub.challengeId}`,
    message: `${sub.teamName}'s solution approved for pilot. Official certificate delivered to student profile.`,
    targetUrl: `profile`,
    type: 'solution_accepted'
  });

  showToast('Submission Approved for Pilot!', `Challenge #${sub.challengeId} advanced to Piloted status. Certificate sent to student profile.`);

  renderIndustryReview();
  
  // Prompt for PPO Awarding
  setTimeout(() => {
    openAwardPpoModal(sub.challengeId, sub.id);
  }, 600);
}

function openRejectModal(subId) {
  const sub = appState.submissions.find(s => s.id === subId);
  if (!sub) return;

  const modal = document.getElementById('modal-reject-feedback');
  const subInput = document.getElementById('reject-submission-id');
  if (subInput) subInput.value = subId;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function handleRejectFeedbackSubmit(e) {
  e.preventDefault();
  const subId = document.getElementById('reject-submission-id')?.value;
  const notes = document.getElementById('reject-notes')?.value || 'Technical improvements required before pilot approval.';

  const sub = appState.submissions.find(s => s.id === subId);
  if (!sub) return;

  sub.status = 'needs_revision';
  sub.rejectReason = notes;

  const ch = appState.challenges.find(c => c.id === sub.challengeId);
  if (ch) {
    ch.status = 'In Progress';
  }

  // Add automated message to Workspace team chat
  const chatList = document.getElementById('chat-messages');
  if (chatList) {
    const div = document.createElement('div');
    div.className = 'flex items-start gap-2.5 p-3 rounded-xl bg-rose-50 border border-rose-200';
    div.innerHTML = `
      <div class="w-7 h-7 rounded-full bg-rose-200 text-rose-800 font-bold flex items-center justify-center flex-shrink-0">
        CSR
      </div>
      <div>
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-rose-900">${sub.partnerCompany || 'Industry Reviewer'}</span>
          <span class="text-[10px] text-rose-500">Revision Action</span>
        </div>
        <p class="text-xs text-rose-800 mt-1"><strong>Revision Notice:</strong> ${notes}</p>
      </div>
    `;
    chatList.appendChild(div);
  }

  // Add notification to bell
  const notifList = document.getElementById('notif-list');
  const badge = document.getElementById('notif-badge');
  if (notifList) {
    const item = document.createElement('div');
    item.className = 'p-2 rounded bg-rose-50 border border-rose-200';
    item.innerHTML = `
      <p class="font-semibold text-rose-800">Revision Request: #${sub.challengeId}</p>
      <p class="text-[11px] text-slate-600 mt-0.5">Industry mentor requested firmware and enclosure updates.</p>
    `;
    notifList.prepend(item);
    if (badge) badge.textContent = String(parseInt(badge.textContent || '0') + 1);
  }

  closeModal('modal-reject-feedback');
  showToast('Prototype Returned for Revision', 'Status set back to In Progress. Feedback logged in Workspace Chat.');
  renderIndustryReview();
}

function openAwardPpoModal(challengeId, submissionId) {
  const modal = document.getElementById('modal-award-ppo');
  const chInput = document.getElementById('ppo-challenge-id');
  const subInput = document.getElementById('ppo-submission-id');

  if (chInput) chInput.value = challengeId;
  if (subInput) subInput.value = submissionId;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function handleAwardPpoSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('award-ppo-form');
  if (!form) return;

  const formData = new FormData(form);
  const challengeId = document.getElementById('ppo-challenge-id')?.value || 'NIV-401';
  const studentName = formData.get('student_name') || 'Dr. Aryan Sharma';
  const roleTitle = formData.get('role_title') || 'Associate IoT & AI Systems Engineer';
  const packageRange = formData.get('package') || '₹16.5 - ₹19.0 LPA';
  const company = formData.get('company') || 'Tata Steel Foundation R&D Labs, Jamshedpur';
  const citation = formData.get('citation') || 'Exemplary civic engineering execution.';

  const newPpo = {
    id: `PPO-${Date.now().toString().slice(-4)}`,
    challengeId,
    studentName,
    roleTitle,
    package: packageRange,
    company,
    citation,
    dateAwarded: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
  };

  appState.ppos.unshift(newPpo);

  // Update leaderboard team flag
  const team = LEADERBOARD_TEAMS.find(t => t.university.includes('BIT Mesra') || t.leadSolver.includes('Aryan'));
  if (team) {
    team.ppoAwarded = true;
    team.ppoCount = (team.ppoCount || 0) + 1;
  }

  closeModal('modal-award-ppo');
  showToast('PPO Awarded & Endorsed!', `Pre-Placement Offer issued to ${studentName}! PPO card generated on profile and certificate.`);

  renderIndustryReview();
  if (appState.currentView === 'leaderboard') renderLeaderboard();
}

function viewStudentCertificate(subId) {
  const sub = appState.submissions.find(s => s.id === subId) || appState.submissions[0];
  
  const modal = document.getElementById('modal-certificate');
  const nameEl = document.getElementById('cert-student-name');
  const univEl = document.getElementById('cert-university');
  const titleEl = document.getElementById('cert-challenge-title');
  const scoreEl = document.getElementById('cert-impact-score');
  const ppoContainer = document.getElementById('cert-ppo-container');
  const ppoText = document.getElementById('cert-ppo-text');

  if (nameEl) nameEl.textContent = sub.leadAuthor;
  if (univEl) univEl.textContent = sub.university;
  if (titleEl) titleEl.textContent = `"${sub.challengeTitle}"`;
  if (scoreEl) scoreEl.textContent = '96 / 100';

  const ppo = appState.ppos.find(p => p.challengeId === sub.challengeId);
  if (ppoContainer) {
    if (ppo) {
      ppoContainer.classList.remove('hidden');
      if (ppoText) ppoText.textContent = `Official Corporate Endorsement: ${ppo.roleTitle} (${ppo.package}) by ${ppo.company}. Citation: "${ppo.citation}"`;
    } else {
      ppoContainer.classList.add('hidden');
    }
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function downloadStudentCertificate() {
  showToast('Certificate Downloaded', 'Official Student Certificate of Civic Resolution PDF saved to downloads.');
  const text = `==========================================================\nNIVARAN - CERTIFICATE OF CIVIC RESOLUTION\nJharkhand State Civic Innovation Initiative - Government of Jharkhand\n==========================================================\nPresented to: Dr. Aryan Sharma & Priya Verma\nInstitution: Birla Institute of Technology (BIT) Mesra, Ranchi\nVerified Civic Impact Score: 96 / 100\nStatutory Certificate ID: NIV-CERT-2026-8819\n==========================================================\n`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'NIVARAN_Certificate_of_Civic_Resolution.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function viewCsrReport(subId) {
  const sub = appState.submissions.find(s => s.id === subId) || appState.submissions[0];
  
  const modal = document.getElementById('modal-csr-report');
  const compEl = document.getElementById('csr-company-name');
  const fundEl = document.getElementById('csr-funding');
  const hourEl = document.getElementById('csr-hours');

  if (compEl) compEl.textContent = sub.partnerCompany;
  if (fundEl) fundEl.textContent = sub.grantApproved;
  if (hourEl) hourEl.textContent = `${sub.mentorshipHours}.0 Hours`;

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function exportCsrReport() {
  showToast('CSR Report Exported', 'Statutory CSR Impact Attestation Report (Schedule VII Form CSR-1) PDF exported.');
  const text = `==========================================================\nCSR IMPACT ATTESTATION REPORT\nSupporting Documentation for Statutory Filing Under Section 135\nCompanies Act 2013 (Schedule VII)\nAudit Ref: CSR-2026-749\n==========================================================\nReporting Entity: Central Coalfields Limited (CCL) CSR Wing\nSchedule VII Head: Environmental Sustainability & Water Resources\nGrant Disbursed: ₹8,50,000\nMentorship Hours: 30.0 Hours\nVerified Deployments: Harmu River Feeder Telemetry Hub, Ranchi\nBeneficiaries: 45,000 daily ward residents\n==========================================================\nNOTICE: This document is supporting statutory audit documentation under\nSection 135 Companies Act 2013. It is NOT a solver certificate.\n`;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'NIVARAN_Statutory_CSR_Attestation_Report_Sec135.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ============================================================================
// 10. PUBLIC DASHBOARD (STATUS PIPELINE INSPECTION)
// ============================================================================

function renderDashboard() {
  const container = document.getElementById('dashboard-pipeline-list');
  if (!container) return;

  const total = appState.challenges.length;
  const solved = appState.challenges.filter(c => c.status === 'Piloted' || c.status === 'Deployed').length;

  const totalEl = document.getElementById('stat-total-challenges');
  const solvedEl = document.getElementById('stat-solved-challenges');
  const peopleEl = document.getElementById('stat-people-affected');
  if (totalEl) totalEl.textContent = total;
  if (solvedEl) solvedEl.textContent = solved;
  if (peopleEl) peopleEl.textContent = '4,50,000+';

  // Populate District Density Heat Matrix
  const matrixContainer = document.getElementById('dashboard-district-heat-matrix');
  if (matrixContainer) {
    const districts = [
      { name: 'Ranchi', division: 'South Chotanagpur', count: 3, people: '45,000+', level: 'high', domain: 'Water Shortage' },
      { name: 'East Singhbhum (Jamshedpur)', division: 'Kolhan', count: 3, people: '85,000+', level: 'high', domain: 'Water Shortage' },
      { name: 'Dhanbad', division: 'North Chotanagpur', count: 3, people: '1,20,000+', level: 'high', domain: 'Waste Management' },
      { name: 'Deoghar', division: 'Santhal Pargana', count: 2, people: '3,50,000+', level: 'high', domain: 'Cleanliness & Sanitation' },
      { name: 'Bokaro', division: 'North Chotanagpur', count: 2, people: '38,000+', level: 'med', domain: 'Street Lighting' },
      { name: 'Palamu (Medininagar)', division: 'Palamu', count: 2, people: '65,000+', level: 'med', domain: 'Water Shortage' },
      { name: 'Hazaribagh', division: 'North Chotanagpur', count: 2, people: '22,000+', level: 'med', domain: 'Healthcare' },
      { name: 'West Singhbhum (Chaibasa)', division: 'Kolhan', count: 2, people: '30,000+', level: 'med', domain: 'Environment & Pollution' }
    ];

    matrixContainer.innerHTML = districts.map(d => {
      const meta = getDomainMeta(d.domain);
      const isHigh = d.level === 'high';
      return `
        <div class="p-3.5 rounded-xl bg-white border border-stone-200 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="font-bold text-xs text-slate-900 truncate">${d.name}</span>
              <span class="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${isHigh ? 'density-badge-high' : 'density-badge-med'}">${isHigh ? 'Hotspot' : 'Medium'}</span>
            </div>
            <div class="text-[10px] text-slate-500">${d.division} Division &bull; ${d.count} Problems</div>
            <div class="text-[11px] text-rose-700 font-bold mt-1">Impacted: ${d.people}</div>
          </div>
          <div class="mt-2.5 pt-2 border-t border-stone-100 flex items-center justify-between">
            <span class="text-[9px] font-semibold px-2 py-0.5 rounded-full" style="background:${meta.bg}; color:${meta.color}; border:1px solid ${meta.border}">${meta.label}</span>
            <button type="button" onclick="filterChallengesByDistrict('${d.name}')" class="text-[10px] text-[#1B4942] hover:underline font-bold">Filter &rarr;</button>
          </div>
        </div>
      `;
    }).join('');
  }

  const stages = ['Open', 'Matched', 'In Progress', 'Piloted', 'Deployed'];

  container.innerHTML = appState.challenges.map(ch => {
    const currentIndex = stages.indexOf(ch.status);
    const domainMeta = getDomainMeta(ch.domain);

    return `
      <div class="p-4 sm:p-5 rounded-xl bg-stone-50 border border-stone-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div class="flex-grow">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-xs font-mono font-bold text-slate-500">#${ch.id}</span>
            <span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style="background-color: ${domainMeta.bg}; color: ${domainMeta.color}; border: 1px solid ${domainMeta.border};">${domainMeta.label}</span>
            ${ch.isClustered ? `<span class="cluster-badge text-[10px] font-bold px-1.5 py-0.5 rounded">${ch.clusterLabel}</span>` : ''}
          </div>
          <h4 class="font-display font-bold text-sm text-slate-900">${ch.title}</h4>
          <p class="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
            <span class="flex items-center gap-1">
              <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
              <span>${ch.city}, ${ch.state}</span>
            </span>
            ${ch.peopleAffected ? `<span class="text-rose-700 font-bold">&bull; ${ch.peopleAffected} impacted</span>` : ''}
            <span>&bull; ${ch.upvotes} Citizen Endorsements</span>
          </p>
        </div>

        <div class="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          ${stages.map((stage, idx) => {
            const isDone = idx <= currentIndex;
            const isCurrent = idx === currentIndex;
            let bg = 'bg-stone-200 text-slate-400';
            if (isDone) bg = 'bg-[#1B4942] text-white';
            if (isCurrent) bg = 'bg-[#2D6A4F] text-white font-bold ring-2 ring-[#2D6A4F]/30';

            return `
              <div class="px-2 py-1 rounded text-[10px] ${bg} text-center" title="${stage}">
                ${stage}
              </div>
            `;
          }).join('')}
        </div>

        <button type="button" onclick="navigateTo('challenge/${ch.id}')" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 hover:border-[#1B4942] text-slate-800 flex-shrink-0">
          Inspect &rarr;
        </button>

      </div>
    `;
  }).join('');
}

// ============================================================================
// 10B. NATIONAL LEADERBOARD, STATE AWARDS & HALL OF IMPACT
// ============================================================================

function renderLeaderboard() {
  const collegeFilter = document.getElementById('leaderboard-college-filter')?.value || 'all';
  const domainFilter = document.getElementById('leaderboard-domain-filter')?.value || 'all';
  const timeFilter = document.getElementById('leaderboard-time-filter')?.value || 'quarter';

  let teams = [...appState.leaderboardTeams];

  if (collegeFilter !== 'all') {
    teams = teams.filter(t => t.university.toLowerCase().includes(collegeFilter.toLowerCase()));
  }

  if (domainFilter !== 'all') {
    teams = teams.filter(t => t.domain === domainFilter);
  }

  // Render Podium (Top 3 of active filter)
  const podiumEl = document.getElementById('leaderboard-podium');
  if (podiumEl) {
    const top3 = teams.slice(0, 3);
    podiumEl.innerHTML = top3.map((team, idx) => {
      const rankNum = idx + 1;
      const rankClass = rankNum === 1 ? 'podium-rank-1' : (rankNum === 2 ? 'podium-rank-2' : 'podium-rank-3');
      const rankBadge = `${t('nationalRank')} ${rankNum}`;
      const domainMeta = getDomainMeta(team.domain);
      const ppoAwarded = team.ppoAwarded || team.ppoCount > 0;

      return `
        <div class="podium-card ${rankClass}">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-stone-100 text-slate-800 border border-slate-200">
              ${rankBadge}
            </span>
            ${ppoAwarded ? `<span class="ppo-badge">${t('ppoOffered')}</span>` : ''}
          </div>

          <h3 class="font-display font-bold text-lg text-slate-900 leading-snug">
            ${team.teamName}
          </h3>
          <p class="text-xs text-slate-600 font-medium mt-0.5">${team.university}</p>

          <div class="mt-3 flex items-center gap-1.5 flex-wrap">
            <span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style="background-color: ${domainMeta.bg}; color: ${domainMeta.color}; border: 1px solid ${domainMeta.border};">
              ${domainMeta.label}
            </span>
            <span class="text-[11px] text-slate-500">• ${t('leadSolverLabel')}: <button type="button" onclick="openStudentProfileModal('${team.leadSolver}')" class="font-semibold text-slate-800 hover:text-[#1B4942] underline decoration-dotted">${team.leadSolver}</button></span>
          </div>

          <div class="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-stone-200 text-center text-xs">
            <div class="p-2 rounded-lg bg-stone-50 border border-stone-200">
              <span class="text-[10px] text-slate-500 font-medium block">${t('statSolved')}</span>
              <span class="font-bold text-slate-900 text-sm">${team.solvedCount}</span>
            </div>
            <div class="p-2 rounded-lg bg-[#EDF4F0] border border-[#CADED4]">
              <span class="text-[10px] text-[#1B4942] font-medium block">${t('statImpact')}</span>
              <span class="font-bold text-[#1B4942] text-sm">${team.impactScore}</span>
            </div>
            <div class="p-2 rounded-lg bg-amber-50 border border-amber-200">
              <span class="text-[10px] text-amber-800 font-medium block">${t('statUpvotes')}</span>
              <span class="font-bold text-amber-900 text-sm">${team.upvotes}</span>
            </div>
          </div>

          <div class="mt-4">
            <button type="button" onclick="openStudentProfileModal('${team.leadSolver}')" class="w-full py-2 px-3 rounded-xl bg-stone-100 hover:bg-[#EDF4F0] text-slate-800 hover:text-[#1B4942] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-stone-200">
              <span>${t('viewSolverProfile')}</span>
              <span>&nearr;</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Table
  const tableBody = document.getElementById('leaderboard-table-body');
  if (tableBody) {
    if (teams.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="p-8 text-center text-xs text-slate-500">
            No university teams match the selected filter criteria.
          </td>
        </tr>
      `;
    } else {
      tableBody.innerHTML = teams.map((team, idx) => {
        const domainMeta = getDomainMeta(team.domain);
        const ppoAwarded = team.ppoAwarded || team.ppoCount > 0;
        const rank = idx + 1;

        return `
          <tr class="hover:bg-stone-50 transition-colors">
            <td class="py-3 px-4 font-mono font-bold text-slate-700">
              #${rank}
            </td>
            <td class="py-3 px-4">
              <div class="font-bold text-slate-900">${team.teamName}</div>
              <div class="text-[11px] text-slate-500">${team.university}</div>
              <div class="text-[11px] text-slate-600 mt-0.5">${t('leadSolverLabel')}: <button type="button" onclick="openStudentProfileModal('${team.leadSolver}')" class="font-medium text-[#1B4942] hover:underline">${team.leadSolver}</button></div>
            </td>
            <td class="py-3 px-4">
              <span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style="background-color: ${domainMeta.bg}; color: ${domainMeta.color}; border: 1px solid ${domainMeta.border};">
                ${domainMeta.label}
              </span>
            </td>
            <td class="py-3 px-4 text-center font-bold text-slate-800">
              ${team.solvedCount}
            </td>
            <td class="py-3 px-4 text-center">
              <div class="font-bold text-[#1B4942]">${team.impactScore} / 100</div>
              <div class="w-16 h-1.5 bg-stone-200 rounded-full mx-auto mt-1 overflow-hidden">
                <div class="h-full bg-[#1B4942] rounded-full" style="width: ${team.impactScore}%"></div>
              </div>
            </td>
            <td class="py-3 px-4 text-center font-semibold text-amber-700">
              ${team.upvotes}
            </td>
            <td class="py-3 px-4 text-center">
              ${ppoAwarded ? `<span class="ppo-badge">${t('ppoOffered')}</span>` : `<span class="text-[11px] text-slate-400">${t('inReview')}</span>`}
            </td>
            <td class="py-3 px-4 text-right">
              <button type="button" onclick="openStudentProfileModal('${team.leadSolver}')" class="px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-slate-800 text-[11px] font-semibold">
                ${t('btnProfile')}
              </button>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // Render Problem Origin District Awards Grid
  const stateAwardsGrid = document.getElementById('state-awards-grid');
  if (stateAwardsGrid) {
    stateAwardsGrid.innerHTML = (appState.divisionAwards || appState.stateAwards).map(item => `
      <div class="state-award-card p-5 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-[#EDF4F0] text-[#1B4942] font-bold text-xs flex items-center justify-center border border-[#CADED4]">
                ${item.code}
              </span>
              <div>
                <h3 class="font-display font-bold text-base text-slate-900">${item.district || item.division}</h3>
                <span class="text-[10px] text-slate-500 font-medium">${item.division}</span>
              </div>
            </div>
            <span class="text-[11px] font-bold text-[#B45309] bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">${item.quarter}</span>
          </div>

          <div class="p-2.5 rounded-xl bg-stone-50 border border-stone-200 mb-3 text-xs">
            <div class="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">${t('originProblemLabel')}</div>
            <div class="font-bold text-slate-800 text-[11px]">${item.originProblem || item.districts}</div>
            <div class="text-[10px] text-rose-700 font-semibold mt-1">${t('impactedPopulationLabel')} ${item.affectedResidents || 'Civic Ward'}</div>
            <div class="text-[10px] text-slate-500 italic mt-0.5">${item.attribution || item.citation}</div>
          </div>

          <div class="space-y-2 pt-1 border-t border-stone-200 text-xs">
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">${t('winningSolversLabel')}</div>
            ${item.winners.map(w => `
              <div class="p-2.5 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-between gap-2">
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5">
                    <span class="text-[11px] font-bold ${w.rank === 1 ? 'text-amber-700' : (w.rank === 2 ? 'text-slate-600' : 'text-amber-800')}">
                      ${w.rank === 1 ? '🥇 1st' : (w.rank === 2 ? '🥈 2nd' : '🥉 3rd')}
                    </span>
                    <span class="font-bold text-slate-900 truncate">${w.team}</span>
                  </div>
                  <div class="text-[11px] text-slate-600 mt-0.5">
                    <span class="text-slate-400">${t('solverInstitutionLabel')}:</span> <strong class="text-slate-800">${w.solverHome || w.college}</strong>
                  </div>
                  <div class="text-[10px] text-slate-500 italic mt-0.5 truncate">"${w.project}"</div>
                </div>
                <span class="text-[11px] font-bold text-[#1B4942] font-mono shrink-0">${w.score} ${t('ptsUnit')}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // Render Hall of Impact Grid
  const hallGrid = document.getElementById('hall-of-impact-grid');
  if (hallGrid) {
    hallGrid.innerHTML = appState.hallOfImpact.map(h => {
      const meta = getDomainMeta(h.domain);
      return `
        <div class="p-5 rounded-2xl bg-[#F9F8F6] border border-stone-200 space-y-3">
          <div class="flex items-center justify-between gap-2 flex-wrap">
            <span class="inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full" style="background-color: ${meta.bg}; color: ${meta.color}; border: 1px solid ${meta.border};">
              ${meta.label}
            </span>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] font-bold text-[#B45309] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                ${h.division}
              </span>
              <span class="text-[10px] font-bold text-[#1B4942] bg-[#EDF4F0] px-2 py-0.5 rounded border border-[#CADED4]">
                ${h.badge}
              </span>
            </div>
          </div>

          <h3 class="font-display font-bold text-base text-slate-900">${h.title}</h3>
          
          <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
            <div><span class="text-slate-400">Lead Lab:</span> <strong class="text-slate-800">${h.leadLab}</strong></div>
            <div><span class="text-slate-400">CSR Sponsor:</span> <strong class="text-slate-800">${h.sponsor}</strong></div>
            <div class="col-span-2"><span class="text-slate-400">Deployments:</span> <strong class="text-slate-800">${h.citiesDeployed}</strong></div>
            <div class="col-span-2"><span class="text-slate-400">Beneficiaries:</span> <strong class="text-[#1B4942]">${h.beneficiaries}</strong></div>
          </div>

          <p class="text-xs text-slate-700 leading-relaxed pt-2 border-t border-stone-200">
            ${h.impactHighlight}
          </p>
        </div>
      `;
    }).join('');
  }
}

function switchLeaderboardSubTab(tabId) {
  const tabs = ['ranks', 'awards', 'hall'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const content = document.getElementById(`leaderboard-tab-${t}`);
    if (t === tabId) {
      if (btn) {
        btn.className = 'px-3.5 py-2 rounded-lg bg-white text-slate-900 shadow-2xs font-bold';
      }
      if (content) {
        content.classList.remove('hidden');
        content.classList.add('block');
      }
    } else {
      if (btn) {
        btn.className = 'px-3.5 py-2 rounded-lg text-slate-600 hover:text-slate-900';
      }
      if (content) {
        content.classList.add('hidden');
        content.classList.remove('block');
      }
    }
  });

  renderLeaderboard();
}

function openStudentProfileModal(solverName) {
  const modal = document.getElementById('modal-student-profile');
  const container = document.getElementById('student-profile-content');
  if (!modal || !container) return;

  const cleanName = solverName || 'Dr. Aryan Sharma';
  const team = appState.leaderboardTeams.find(t => t.leadSolver.includes(cleanName) || cleanName.includes(t.leadSolver)) || appState.leaderboardTeams[0];
  const ppo = appState.ppos.find(p => p.studentName.toLowerCase().includes(cleanName.toLowerCase()) || cleanName.toLowerCase().includes(p.studentName.toLowerCase()));

  container.innerHTML = `
    <div>
      <!-- Profile Header -->
      <div class="flex items-center gap-4 pb-4 border-b border-stone-200">
        <div class="w-16 h-16 rounded-2xl bg-[#EDF4F0] border border-[#CADED4] text-[#1B4942] font-display font-bold text-2xl flex items-center justify-center flex-shrink-0">
          ${cleanName.split(' ').map(n=>n[0]).join('').slice(0, 2)}
        </div>
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="font-display font-bold text-xl text-slate-900">${cleanName}</h3>
            <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#EDF4F0] text-[#1B4942] border border-[#CADED4]">Verified Innovator</span>
            ${ppo ? `<span class="ppo-badge">PPO Recipient</span>` : ''}
          </div>
          <p class="text-xs text-slate-600 mt-0.5">${team.university}</p>
          <p class="text-[11px] text-slate-500">${team.teamName} • State: ${team.state}</p>
        </div>
      </div>

      <!-- PPO Highlight Card (if awarded) -->
      ${ppo ? `
        <div class="ppo-card my-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Pre-Placement Offer (PPO) Active</span>
            <span class="text-[10px] font-mono text-amber-700">${ppo.dateAwarded}</span>
          </div>
          <h4 class="font-display font-bold text-base text-amber-950">${ppo.roleTitle}</h4>
          <div class="text-xs font-semibold text-amber-900 mt-0.5">${ppo.company}</div>
          <div class="inline-block mt-2 px-2.5 py-1 rounded bg-white/80 border border-amber-300 text-xs font-bold text-amber-900">
            Compensation: ${ppo.package}
          </div>
          <p class="text-xs text-amber-900/90 mt-2.5 italic leading-relaxed">
            "${ppo.citation}"
          </p>
        </div>
      ` : `
        <div class="my-4 p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-600">
          <span class="font-bold text-slate-800">PPO Eligibility Status:</span> Actively solving civic challenges. Corporate PPO flag available upon industry deployment approval.
        </div>
      `}

      <!-- Metrics Grid -->
      <div class="grid grid-cols-3 gap-3 my-4 text-center text-xs">
        <div class="p-3 rounded-xl bg-stone-50 border border-stone-200">
          <span class="text-[10px] text-slate-500 font-bold uppercase block">National Rank</span>
          <span class="text-base font-bold text-slate-900 mt-0.5">#${team.rank}</span>
        </div>
        <div class="p-3 rounded-xl bg-[#EDF4F0] border border-[#CADED4]">
          <span class="text-[10px] text-[#1B4942] font-bold uppercase block">Verified Impact</span>
          <span class="text-base font-bold text-[#1B4942] mt-0.5">${team.impactScore} pts</span>
        </div>
        <div class="p-3 rounded-xl bg-amber-50 border border-amber-200">
          <span class="text-[10px] text-amber-800 font-bold uppercase block">Civic Upvotes</span>
          <span class="text-base font-bold text-amber-900 mt-0.5">${team.upvotes}</span>
        </div>
      </div>

      <!-- Skills -->
      <div class="my-4">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Verified Technical Skills</h4>
        <div class="flex flex-wrap gap-1.5">
          ${team.skills.map(s => `
            <span class="px-2.5 py-1 rounded-md text-xs font-medium bg-stone-100 text-slate-700 border border-slate-200">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Deployments / Solved Challenges -->
      <div class="my-4 pt-3 border-t border-stone-200">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Verified Municipal Deployments</h4>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
            <div>
              <div class="font-bold text-slate-900">#NIV-401 Stormwater Drain Clog Telemetry</div>
              <div class="text-[11px] text-slate-500">Ranchi Municipal Corporation (RMC) Ward 26 • Piloted with Central Coalfields Limited (CCL) CSR</div>
            </div>
            <button type="button" onclick="closeModal('modal-student-profile'); navigateTo('challenge/NIV-401')" class="px-2.5 py-1 rounded text-[11px] font-semibold bg-white border border-slate-300 hover:border-[#1B4942]">
              Inspect &rarr;
            </button>
          </div>
        </div>
      </div>

      <div class="mt-5 flex justify-end gap-2">
        <button type="button" onclick="closeModal('modal-student-profile')" class="btn-civic-teal px-4 py-2 rounded-lg text-xs font-semibold">
          Close Profile
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Multilingual switching handled comprehensively in Section 12B


// Offline PWA Lifecycle & Mutation Queue
function updateOnlineStatus() {
  const banner = document.getElementById('offline-banner');
  if (!navigator.onLine) {
    appState.isOffline = true;
    if (banner) banner.classList.remove('hidden');
    showToast('Offline Mode Active', "You're offline — showing cached data.");
  } else {
    appState.isOffline = false;
    if (banner) banner.classList.add('hidden');
    if (appState.offlineQueue && appState.offlineQueue.length > 0) {
      syncOfflineQueue();
    }
  }
}

function queueOfflineAction(actionType, payload) {
  appState.offlineQueue.push({ actionType, payload, timestamp: Date.now() });
  localStorage.setItem('nivaran_offline_queue', JSON.stringify(appState.offlineQueue));
  showToast('Action Queued Offline', 'Changes saved locally. Will sync automatically once connection is restored.');
}

function syncOfflineQueue() {
  const count = appState.offlineQueue.length;
  if (count === 0) return;
  showToast('Synchronizing Data', `Syncing ${count} pending offline change(s) with NIVARAN server...`);
  appState.offlineQueue = [];
  localStorage.removeItem('nivaran_offline_queue');
  setTimeout(() => {
    showToast('Sync Complete', 'All offline actions synced successfully.');
  }, 1000);
}

// ============================================================================
// 11. ROUTER & VIEW ORCHESTRATION
// ============================================================================

function navigateTo(route) {
  window.location.hash = `#/${route.replace(/^#\/?/, '')}`;
}

function renderCurrentRoute() {
  const hash = window.location.hash || '#/';
  const clean = hash.replace(/^#\/?/, '');
  const [pathPart, queryPart] = clean.split('?');
  const [viewName, param] = (pathPart || '').split('/');
  const queryParams = new URLSearchParams(queryPart || '');

  closeAllModals();

  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.add('hidden');
    view.classList.remove('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    const route = link.getAttribute('data-route');
    if (route === (viewName || 'landing')) {
      link.classList.add('text-slate-900', 'font-bold');
      link.classList.remove('text-slate-600');
    } else {
      link.classList.remove('text-slate-900', 'font-bold');
      link.classList.add('text-slate-600');
    }
  });

  if (!viewName || viewName === '' || viewName === 'roles-section' || viewName === 'workflow-section') {
    appState.currentView = 'landing';
    const v = document.getElementById('view-landing');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    if (viewName === 'roles-section' || viewName === 'workflow-section') {
      setTimeout(() => {
        const target = document.getElementById(viewName);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
  } else if (viewName === 'signup') {
    if (appState.isRegistered) {
      navigateTo('profile');
      return;
    }
    appState.currentView = 'signup';
    const v = document.getElementById('view-signup');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    const roleParam = queryParams.get('role') || appState.currentRole;
    setSignupRole(roleParam);
  } else if (viewName === 'profile') {
    if (queryParams.get('registered') === 'true') {
      appState.isRegistered = true;
      localStorage.setItem('nivaran_is_registered', 'true');
      updateNavbarUserUI();
    }
    appState.currentView = 'profile';
    const v = document.getElementById('view-profile');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    renderUserProfile();
    if (queryParams.get('edit') === 'true') {
      toggleProfileEdit(true);
    }
  } else if (viewName === 'post-challenge' || viewName === 'post') {
    appState.currentView = 'post-challenge';
    const v = document.getElementById('view-post-challenge');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    setTimeout(() => initPostChallengeMap(), 100);
  } else if (viewName === 'challenges') {
    appState.currentView = 'challenges';
    const v = document.getElementById('view-challenges');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    renderChallenges();
  } else if (viewName === 'challenge') {
    appState.currentView = 'challenge-detail';
    const v = document.getElementById('view-challenge-detail');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    renderChallengeDetail(param || 'NIV-401');
  } else if (viewName === 'workspace') {
    appState.currentView = 'workspace';
    const v = document.getElementById('view-workspace');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    appState.activeWorkspaceId = param || 'NIV-401';
    const tabParam = queryParams.get('tab');
    setWorkspaceTab(tabParam || 'kanban');
  } else if (viewName === 'industry-review') {
    appState.currentView = 'industry-review';
    const v = document.getElementById('view-industry-review');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    renderIndustryReview();
  } else if (viewName === 'dashboard') {
    appState.currentView = 'dashboard';
    const v = document.getElementById('view-dashboard');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    renderDashboard();
  } else if (viewName === 'leaderboard') {
    appState.currentView = 'leaderboard';
    const v = document.getElementById('view-leaderboard');
    if (v) {
      v.classList.remove('hidden');
      v.classList.add('active');
    }
    const subtabParam = queryParams.get('subtab') || 'ranks';
    switchLeaderboardSubTab(subtabParam);
    renderLeaderboard();
  }

  // Handle map view or modal parameter
  if (viewName === 'challenges' && queryParams.get('view') === 'map') {
    setTimeout(() => {
      document.getElementById('btn-view-map')?.click();
    }, 150);
  }

  const modalParam = queryParams.get('modal');
  if (modalParam === 'duplicate') {
    setTimeout(() => {
      const m = document.getElementById('modal-duplicate-cluster');
      if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
    }, 150);
  } else if (modalParam === 'cert') {
    setTimeout(() => {
      viewStudentCertificate('SUB-101');
    }, 150);
  } else if (modalParam === 'csr') {
    setTimeout(() => {
      viewCsrReport('SUB-101');
    }, 150);
  } else if (modalParam === 'ppo') {
    setTimeout(() => {
      openAwardPpoModal('NIV-401', 'SUB-101');
    }, 150);
  } else if (modalParam === 'reject') {
    setTimeout(() => {
      openRejectModal('SUB-101');
    }, 150);
  } else if (modalParam === 'team') {
    setTimeout(() => {
      openTeamFormationModal('NIV-401');
    }, 150);
  } else if (modalParam === 'teamsuccess') {
    setTimeout(() => {
      const mockTeam = {
        teamName: 'EcoSensors Innovation Lab',
        challengeId: 'NIV-401',
        challengeTitle: 'AI-Powered Stormwater Drain Clog Detection & Flash Flood Alert',
        advisor: 'Dr. S. K. Mahato (BIT Mesra)',
        teammates: ['Priya Verma (Firmware Lead)', 'Rohan Gupta (ML Specialist)', 'Dr. Aryan Sharma (Sensor Lead)'],
        university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
        formedAt: '12 Sep 2026'
      };
      appState.currentUserTeam = mockTeam;
      localStorage.setItem('nivaran_current_team', JSON.stringify(mockTeam));
      const targetChallenge = appState.challenges.find(c => c.id === 'NIV-401');
      if (targetChallenge) {
        targetChallenge.status = 'In Progress';
        targetChallenge.matchedTeam = mockTeam.teamName;
        targetChallenge.assignedTeam = mockTeam.teamName;
      }
      const successName = document.getElementById('team-success-name');
      const successSub = document.getElementById('team-success-sub');
      const successCh = document.getElementById('team-success-challenge');
      const successAdv = document.getElementById('team-success-advisor');
      const successRoster = document.getElementById('team-success-roster');
      if (successName) successName.textContent = mockTeam.teamName;
      if (successSub) successSub.textContent = mockTeam.university;
      if (successCh) successCh.textContent = `#NIV-401: ${mockTeam.challengeTitle}`;
      if (successAdv) successAdv.textContent = mockTeam.advisor;
      if (successRoster) {
        successRoster.innerHTML = mockTeam.teammates.map(m => `<div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#1B4942]"></span><span>${m}</span></div>`).join('');
      }
      const m = document.getElementById('modal-team-success');
      if (m) { m.classList.remove('hidden'); m.classList.add('flex'); }
    }, 150);
  }

  if (queryParams.get('profile')) {
    setTimeout(() => {
      openStudentProfileModal(queryParams.get('profile'));
    }, 150);
  }

  if (queryParams.get('lang')) {
    setTimeout(() => {
      applyLanguage(queryParams.get('lang'));
    }, 100);
  }

  if (queryParams.get('tools') === 'open') {
    setTimeout(() => {
      const portalsMenu = document.getElementById('portals-dropdown-menu');
      if (portalsMenu) {
        portalsMenu.classList.remove('hidden');
        portalsMenu.classList.add('block');
      }
    }, 100);
  }

  if (queryParams.get('cluster') === 'confirm') {
    setTimeout(() => {
      appState.pendingNewChallenge = {
        id: 'NIV-488',
        title: 'Kishore Ganj Harmu Storm Drain Silt Monitoring',
        domain: 'Water Shortage',
        domainLabel: 'Water Shortage',
        city: 'Ranchi',
        state: 'Jharkhand',
        address: 'Harmu Road, Ward 26, Ranchi, Jharkhand',
        lat: 23.3569,
        lng: 85.3240,
        status: 'Open',
        upvotes: 1
      };
      resolveClusterDecision(true);
    }, 150);
  }

  if (queryParams.get('voice') === 'active') {
    setTimeout(() => {
      const btn = document.querySelector('.btn-voice-input[data-target="post-title"]') ||
                  document.querySelector('.btn-voice-input');
      if (btn) {
        btn.classList.add('is-listening');
        const l = btn.querySelector('.voice-label');
        if (l) l.textContent = 'Listening... Speak now';
        const target = document.getElementById(btn.getAttribute('data-target'));
        if (target) target.value = 'हार्मू नाला में गाद जमाव और बाढ़ पूर्व चेतावनी (Ranchi Harmu Silt Telemetry)';
      }
    }, 200);
  }

  if (queryParams.get('team') === 'assigned') {
    const mockTeam = {
      teamName: 'EcoSensors Innovation Lab',
      challengeId: 'NIV-401',
      challengeTitle: 'IoT Ultrasonic Silt Telemetry & Flash Flood Alert in Harmu River Feeder Drains',
      advisor: 'Dr. S. K. Mahato (Dept. of Remote Sensing & Geoinformatics, BIT Mesra)',
      teammates: ['Priya Verma (Firmware Lead)', 'Rohan Gupta (ML Specialist)', 'Dr. Aryan Sharma (Sensor Lead)'],
      university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
      formedAt: '12 Sep 2026'
    };
    appState.currentUserTeam = mockTeam;
    localStorage.setItem('nivaran_current_team', JSON.stringify(mockTeam));
    const targetChallenge = appState.challenges.find(c => c.id === 'NIV-401');
    if (targetChallenge) {
      targetChallenge.status = 'In Progress';
      targetChallenge.matchedTeam = mockTeam.teamName;
      targetChallenge.assignedTeam = mockTeam.teamName;
    }
    if (viewName === 'challenge') {
      setTimeout(() => renderChallengeDetail(param || 'NIV-401'), 50);
    }
    if (viewName === 'profile') {
      setTimeout(() => renderUserProfile(), 50);
    }
  }

  if (queryParams.get('notif') === 'open') {
    setTimeout(() => {
      const dd = document.getElementById('notif-dropdown');
      if (dd) {
        dd.classList.remove('hidden');
        renderNotifications();
      }
    }, 150);
  }

  if (queryParams.get('wizard') === 'open') {
    setTimeout(() => {
      startGuidedVoiceFlow();
    }, 150);
  }

  if (queryParams.get('edit') === 'challenge') {
    setTimeout(() => {
      openEditChallenge(param || 'NIV-401');
    }, 150);
  }

  if (queryParams.get('adopt') === 'open') {
    setTimeout(() => {
      openIndustryAdoptModal(param || 'NIV-401');
    }, 150);
  }

  if (queryParams.get('subtab')) {
    setTimeout(() => {
      switchLeaderboardSubTab(queryParams.get('subtab'));
    }, 150);
  }

  if (queryParams.get('govtreview') === 'open') {
    setTimeout(() => {
      openGovtReviewModal(param || 'NIV-401');
    }, 150);
  }

  if (queryParams.get('mode') === 'heat') {
    setTimeout(() => {
      setChallengeMapMode('heat');
    }, 250);
  }

  if (queryParams.get('chatmedia') === 'sample') {
    setTimeout(() => {
      insertSampleIndustryMedia();
    }, 200);
  }

  if (queryParams.get('cert') === 'accepted') {
    const sub = appState.submissions.find(s => s.id === 'SUB-101');
    if (sub) {
      sub.status = 'accepted';
    }
    renderIndustryReview();
  }

  if (queryParams.get('cert') === 'true') {
    if (appState.studentCertificates.length === 0) {
      appState.studentCertificates.push({
        id: 'CERT-NIV-401',
        challengeId: 'NIV-401',
        challengeTitle: 'IoT Ultrasonic Silt Telemetry & Flash Flood Alert in Harmu River Feeder Drains',
        studentName: 'Dr. Aryan Sharma',
        teamName: 'Team TechBit Ranchi',
        university: 'Birla Institute of Technology (BIT) Mesra, Ranchi',
        issueDate: '12 Sep 2026',
        status: 'Verified & Active',
        industryPartner: 'Central Coalfields Limited (CCL) CSR',
        signatory: 'Jharkhand State Civic Innovation Directorate & Industry CSR Council'
      });
    }
    setTimeout(() => renderUserProfile(), 50);
  }

  initVoiceInput();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ============================================================================
// 12. MODAL & TOAST HELPERS
// ============================================================================

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function closeAllModals() {
  document.querySelectorAll('[id^="modal-"]').forEach(m => {
    m.classList.add('hidden');
    m.classList.remove('flex');
  });
}

function openTeamFormationModal(challengeId) {
  const modal = document.getElementById('modal-team-formation');
  if (modal) {
    modal.dataset.challengeId = challengeId || 'NIV-401';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function openIndustryAdoptModal(challengeId) {
  const modal = document.getElementById('modal-industry-adopt');
  if (modal) {
    modal.dataset.challengeId = challengeId || 'NIV-401';
    const idInput = document.getElementById('adopt-challenge-id');
    if (idInput) idInput.value = challengeId || 'NIV-401';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function toggleAdoptFundingFields(isEnabled) {
  const container = document.getElementById('adopt-funding-container');
  const input = document.getElementById('adopt-grant-input');
  if (container) {
    container.style.opacity = isEnabled ? '1' : '0.4';
    if (input) input.disabled = !isEnabled;
  }
}

function toggleAdoptMentorshipFields(isEnabled) {
  const container = document.getElementById('adopt-mentorship-container');
  const input = document.getElementById('adopt-mentor-input');
  if (container) {
    container.style.opacity = isEnabled ? '1' : '0.4';
    if (input) input.disabled = !isEnabled;
  }
}

function toggleAdoptOtherFields(isEnabled) {
  const container = document.getElementById('adopt-other-container');
  const input = document.getElementById('adopt-other-text');
  if (container) {
    if (isEnabled) {
      container.classList.remove('hidden');
      if (input) input.disabled = false;
    } else {
      container.classList.add('hidden');
      if (input) input.disabled = true;
    }
  }
}

function openGovtReviewModal(challengeId) {
  const modal = document.getElementById('modal-govt-review');
  const idInput = document.getElementById('govt-review-challenge-id');
  if (idInput) idInput.value = challengeId || 'NIV-401';
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function handleGovtReviewSubmit(e) {
  e.preventDefault();
  const challengeId = document.getElementById('govt-review-challenge-id')?.value || 'NIV-401';
  const reviewerName = document.getElementById('govt-reviewer-name')?.value || 'Shri Rajesh Verma, IAS';
  const department = document.getElementById('govt-reviewer-dept')?.value || 'JUIDCO / Urban Development & Housing Dept';
  const status = document.getElementById('govt-review-status')?.value || 'Pilot Clearance Granted';
  const remarks = document.getElementById('govt-review-notes')?.value || 'Formal administrative approval endorsed.';

  const ch = appState.challenges.find(c => c.id === challengeId);
  if (ch) {
    ch.govtReview = {
      reviewerName,
      department,
      status,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      remarks
    };
  }

  closeModal('modal-govt-review');

  addNotification({
    title: `Official Govt Clearance: #${challengeId}`,
    message: `${reviewerName} (${department}) endorsed "${status}".`,
    targetUrl: `challenge/${challengeId}`,
    type: 'govt_review'
  });

  showToast('Official Review Published!', `Administrative assessment recorded for Challenge #${challengeId}.`);

  if (appState.currentView === 'challenge-detail') {
    renderChallengeDetail(challengeId);
  }
}

function renderNotifications() {
  const list = document.getElementById('notif-list');
  const badge = document.getElementById('notif-badge');
  if (!list) return;

  const unreadCount = appState.notifications.filter(n => !n.read).length;
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }

  if (appState.notifications.length === 0) {
    list.innerHTML = `<div class="p-4 text-center text-slate-400 text-xs italic">No new notifications.</div>`;
    return;
  }

  const icons = {
    match: '🎯',
    cluster: '🔗',
    solution_submitted: '📦',
    solution_accepted: '🎉',
    solution_rejected: '⚠️',
    govt_review: '🏛️',
    challenge_edited: '✏️',
    challenge_posted: '📢',
    team_formed: '👥',
    industry_adopted: '🤝',
    certificate_issued: '📜'
  };

  list.innerHTML = appState.notifications.map(n => `
    <div onclick="handleNotificationClick('${n.id}')" class="notif-item-clickable p-2.5 rounded-xl border ${n.read ? 'bg-stone-50/70 border-stone-200 opacity-75' : 'bg-white border-[#CADED4] shadow-xs'} transition-all cursor-pointer">
      <div class="flex items-start gap-2">
        <span class="text-sm shrink-0 mt-0.5">${icons[n.type] || '🔔'}</span>
        <div class="flex-grow min-w-0">
          <div class="flex items-center justify-between gap-1">
            <span class="font-bold text-slate-900 truncate text-[11px]">${n.title}</span>
            <span class="text-[10px] text-slate-400 shrink-0 font-mono">${n.time || 'just now'}</span>
          </div>
          <p class="text-[11px] text-slate-600 mt-0.5 leading-snug line-clamp-2">${n.message}</p>
        </div>
        ${!n.read ? `<span class="w-2 h-2 rounded-full bg-[#1B4942] shrink-0 mt-1"></span>` : ''}
      </div>
    </div>
  `).join('');
}

function handleNotificationClick(notifId) {
  const notif = appState.notifications.find(n => n.id === notifId);
  if (notif) {
    notif.read = true;
    renderNotifications();
    const notifDropdown = document.getElementById('notif-dropdown');
    if (notifDropdown) notifDropdown.classList.add('hidden');
    if (notif.targetUrl) {
      navigateTo(notif.targetUrl);
    }
  }
}

function addNotification(notif) {
  const newNotif = {
    id: `notif-${Date.now()}-${Math.floor(Math.random()*1000)}`,
    time: 'just now',
    read: false,
    ...notif
  };
  appState.notifications.unshift(newNotif);
  renderNotifications();
}

function markAllNotificationsRead() {
  appState.notifications.forEach(n => n.read = true);
  renderNotifications();
  showToast('Notifications Marked Read', 'All alerts updated.');
}

function handleChatMediaUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  const isVideo = file.type.startsWith('video/');
  const reader = new FileReader();

  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const mediaHtml = isVideo
      ? `<video src="${dataUrl}" controls class="chat-media-video rounded-lg mt-1 max-h-48 border border-slate-300"></video>`
      : `<img src="${dataUrl}" alt="Uploaded Inspection Media" class="chat-media-thumbnail rounded-lg mt-1 max-h-48 object-cover border border-slate-300 cursor-pointer shadow-xs" onclick="window.open('${dataUrl}')" />`;

    const user = appState.currentUser;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const msgHtml = `
      <div class="flex items-start gap-2.5">
        <div class="w-7 h-7 rounded-full bg-[#1B4942] text-white font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
          ${user.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase()}
        </div>
        <div>
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-slate-900">${user.name} (${user.role === 'industry' ? 'CSR Industry Partner' : 'University Solver Lead'})</span>
            <span class="text-[10px] text-slate-400 font-mono">${timeStr}</span>
          </div>
          <p class="text-xs text-slate-700 mt-0.5">Attached field inspection verification media:</p>
          ${mediaHtml}
        </div>
      </div>
    `;

    chatMessages.insertAdjacentHTML('beforeend', msgHtml);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    showToast('Media Attached', `${isVideo ? 'Video' : 'Image'} uploaded to collaborative workspace chat.`);
  };

  reader.readAsDataURL(file);
}

function insertSampleIndustryMedia() {
  const chatMessages = document.getElementById('chat-messages');
  if (!chatMessages) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="100%" height="100%" fill="#1E3A5F"/><text x="20" y="35" fill="#FFFFFF" font-family="sans-serif" font-size="14" font-weight="bold">CCL CSR Telemetry Bench Verification</text><text x="20" y="65" fill="#93C5FD" font-family="sans-serif" font-size="11">Location: Harmu River Outfall Station #4, Ranchi</text><rect x="20" y="85" width="160" height="80" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/><text x="35" y="115" fill="#38BDF8" font-family="monospace" font-size="10">ULTRASONIC ECHO</text><text x="35" y="140" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">98.4% ACCURACY</text><rect x="200" y="85" width="180" height="80" rx="8" fill="#0F172A" stroke="#34D399" stroke-width="2"/><text x="215" y="115" fill="#34D399" font-family="monospace" font-size="10">BATTERY RESERVE</text><text x="215" y="140" fill="#FFFFFF" font-family="monospace" font-size="16" font-weight="bold">42 DAYS CONTINUOUS</text></svg>`;
  const sampleSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent(rawSvg);

  const msgHtml = `
    <div class="flex items-start gap-2.5">
      <div class="w-7 h-7 rounded-full bg-[#1E3A5F] text-white font-bold flex items-center justify-center flex-shrink-0 text-[10px]">
        RK
      </div>
      <div>
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-slate-900">Ravi Krishnan (CCL CSR Mentor)</span>
          <span class="text-[10px] text-slate-400 font-mono">${timeStr}</span>
        </div>
        <p class="text-xs text-slate-700 mt-0.5">Attached official telemetry verification diagram for municipal approval:</p>
        <img src="${sampleSvg}" alt="CCL Telemetry Bench Verification Diagram" class="chat-media-thumbnail rounded-lg mt-1.5 max-h-48 border border-slate-300 shadow-xs cursor-pointer" onclick="window.open('${sampleSvg}')" />
      </div>
    </div>
  `;

  chatMessages.insertAdjacentHTML('beforeend', msgHtml);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  showToast('Sample Media Shared', 'Official CCL telemetry sensor diagram posted to chat.');
}

let toastTimer = null;
function showToast(title, message) {
  const toast = document.getElementById('toast');
  const titleEl = document.getElementById('toast-title');
  const msgEl = document.getElementById('toast-message');

  if (!toast) return;

  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 4000);
}

// ============================================================================
// 12B. DYNAMIC LANGUAGE SWITCHING & VOICE INPUT (SPEECH-TO-TEXT) ENGINES
// ============================================================================

function applyLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) {
    langCode = 'en';
  }
  appState.currentLang = langCode;
  localStorage.setItem('nivaran_lang', langCode);

  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher && langSwitcher.value !== langCode) {
    langSwitcher.value = langCode;
  }

  // Universal Attribute-based DOM translation for all registered [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated && translated !== key) {
      el.textContent = translated;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('placeholder', translated);
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('title', translated);
    }
  });

  // Update navigation items
  const navHome = document.getElementById('nav-home');
  const navChallenges = document.getElementById('nav-challenges');
  const navLeaderboard = document.getElementById('nav-leaderboard');
  const navPost = document.getElementById('nav-post-link');
  const brandTagline = document.getElementById('brand-tagline');

  if (navHome) navHome.textContent = t('navHome');
  if (navChallenges) navChallenges.textContent = t('navChallenges');
  if (navLeaderboard) navLeaderboard.textContent = t('navLeaderboard');
  if (navPost) navPost.textContent = t('navPost');
  if (brandTagline) brandTagline.textContent = t('tagline');

  // Update Landing / Hero texts
  const heroTagline = document.getElementById('hero-tagline-text');
  const heroDesc = document.getElementById('hero-mission-desc');
  const heroBtnExplore = document.getElementById('btn-explore-live-challenges');
  const heroBtnRole = document.getElementById('btn-select-role');

  if (heroTagline) heroTagline.textContent = `"${t('tagline')}."`;
  if (heroDesc) heroDesc.textContent = t('heroDesc');
  if (heroBtnExplore) {
    const span = heroBtnExplore.querySelector('span:first-of-type');
    if (span) span.textContent = t('exploreChallenges');
  }
  if (heroBtnRole) {
    const span = heroBtnRole.querySelector('span');
    if (span) span.textContent = t('selectRole');
  }

  // Update voice input buttons
  document.querySelectorAll('.btn-voice-input').forEach(btn => {
    btn.setAttribute('title', t('tapToSpeak'));
    const labelSpan = btn.querySelector('.voice-label');
    if (labelSpan && !btn.classList.contains('is-listening')) {
      labelSpan.textContent = t('tapToSpeak');
    }
  });

  // Update offline banner text
  const offlineText = document.getElementById('offline-banner-text');
  if (offlineText) offlineText.textContent = t('offlineBanner');

  // Re-render active view to apply dynamic language labels
  if (appState.currentView === 'challenges') renderChallenges();
  if (appState.currentView === 'leaderboard') renderLeaderboard();
  if (appState.currentView === 'dashboard') renderDashboard();
  if (appState.currentView === 'profile') renderUserProfile();
  if (appState.currentView === 'challenge' && appState.currentChallengeId) renderChallengeDetail(appState.currentChallengeId);
  renderNotifications();

  const langName = TRANSLATIONS[langCode]?.nativeName || TRANSLATIONS[langCode]?.name || langCode;
  showToast('Language Updated', `Active language set to: ${langName}`);
}

// Guided Step-by-Step Voice Assistant for Post-a-Challenge
const GUIDED_VOICE_STEPS = [
  {
    step: 1,
    field: 'post-domain',
    badge: 'Step 1 of 5 • Domain Category',
    prompt: '"Which civic problem domain does this issue belong to?"',
    hint: 'Say "Water Shortage", "Waste Management", "Healthcare", "Electricity Cuts", or "Cleanliness".',
    defaultVal: 'Water Shortage'
  },
  {
    step: 2,
    field: 'post-title',
    badge: 'Step 2 of 5 • Problem Title',
    prompt: '"What is a short, descriptive title for this civic problem?"',
    hint: 'State the core issue and local area name clearly.',
    defaultVal: 'Harmu River Storm Drain Silt Depth Telemetry & Flash Flood Alert'
  },
  {
    step: 3,
    field: 'post-description',
    badge: 'Step 3 of 5 • Problem Description (Multi-Sentence)',
    prompt: '"Please describe the issue in detail. You can speak multiple sentences."',
    hint: 'Explain causes, monsoon risks, municipal impact, and what needs solving.',
    defaultVal: 'Heavy plastic accumulation and siltation in the Harmu River feeder canal causes recurrent flash waterlogging during pre-monsoon squalls. Immediate acoustic edge telemetry is needed to alert RMC municipal wardens.'
  },
  {
    step: 4,
    field: 'post-address',
    badge: 'Step 4 of 5 • Location & Ward',
    prompt: '"Where in Jharkhand is this problem located?"',
    hint: 'Mention the street, ward, municipal corporation, or district name.',
    defaultVal: 'Harmu River Feeder Canal, Kishore Ganj, Ward 26, Ranchi, Jharkhand'
  },
  {
    step: 5,
    field: 'post-people-affected',
    badge: 'Step 5 of 5 • Impacted Population',
    prompt: '"Approximately how many residents or citizens are affected?"',
    hint: 'State an estimate, e.g., "45,000 residents" or "10,000 families".',
    defaultVal: '45,000+ residents'
  }
];

let voiceWizardCurrentStep = 1;

function startGuidedVoiceFlow() {
  voiceWizardCurrentStep = 1;
  const wizard = document.getElementById('guided-voice-wizard');
  if (wizard) {
    wizard.classList.remove('hidden');
    wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    renderVoiceWizardStep(1);
  }
}

function closeGuidedVoiceWizard() {
  const wizard = document.getElementById('guided-voice-wizard');
  if (wizard) wizard.classList.add('hidden');
}

function renderVoiceWizardStep(stepNum) {
  const step = GUIDED_VOICE_STEPS[stepNum - 1];
  if (!step) return;

  const badgeEl = document.getElementById('voice-wizard-step-badge');
  const promptEl = document.getElementById('voice-wizard-prompt');
  const hintEl = document.getElementById('voice-wizard-hint');
  const transcriptEl = document.getElementById('voice-wizard-transcript');
  const prevBtn = document.getElementById('btn-voice-wizard-prev');
  const nextBtn = document.getElementById('btn-voice-wizard-next');

  if (badgeEl) badgeEl.textContent = step.badge;
  if (promptEl) promptEl.textContent = step.prompt;
  if (hintEl) hintEl.textContent = step.hint;
  if (transcriptEl) transcriptEl.textContent = `Listening for: "${step.defaultVal.slice(0, 50)}..."`;

  if (prevBtn) {
    if (stepNum === 1) prevBtn.classList.add('opacity-50', 'pointer-events-none');
    else prevBtn.classList.remove('opacity-50', 'pointer-events-none');
  }

  if (nextBtn) {
    if (stepNum === GUIDED_VOICE_STEPS.length) {
      nextBtn.textContent = '✓ Complete & Review Form';
      nextBtn.className = 'px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-xs';
    } else {
      nextBtn.textContent = 'Next Step →';
      nextBtn.className = 'px-4 py-1.5 rounded-lg text-xs font-bold bg-white hover:bg-emerald-50 text-[#1B4942] shadow-xs';
    }
  }

  // Pre-fill target element
  const targetEl = document.getElementById(step.field);
  if (targetEl && !targetEl.value) {
    targetEl.value = step.defaultVal;
    targetEl.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

function triggerWizardActiveListening() {
  const step = GUIDED_VOICE_STEPS[voiceWizardCurrentStep - 1];
  if (!step) return;

  const transcriptEl = document.getElementById('voice-wizard-transcript');
  if (transcriptEl) {
    transcriptEl.textContent = 'Transcribing your spoken answer...';
  }

  setTimeout(() => {
    const targetEl = document.getElementById(step.field);
    if (targetEl) {
      targetEl.value = step.defaultVal;
      targetEl.dispatchEvent(new Event('input', { bubbles: true }));
      targetEl.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (transcriptEl) {
      transcriptEl.textContent = `Captured: "${step.defaultVal}"`;
    }
    showToast('Voice Captured for Step ' + voiceWizardCurrentStep, `Transcribed: "${step.defaultVal.slice(0, 40)}..."`);
  }, 700);
}

function repeatWizardPrompt() {
  const step = GUIDED_VOICE_STEPS[voiceWizardCurrentStep - 1];
  if (!step) return;
  showToast('Voice Prompt', step.prompt);
}

function nextVoiceWizardStep() {
  const step = GUIDED_VOICE_STEPS[voiceWizardCurrentStep - 1];
  const targetEl = document.getElementById(step.field);
  if (targetEl && !targetEl.value) {
    targetEl.value = step.defaultVal;
  }

  if (voiceWizardCurrentStep < GUIDED_VOICE_STEPS.length) {
    voiceWizardCurrentStep++;
    renderVoiceWizardStep(voiceWizardCurrentStep);
  } else {
    // Finished all steps
    closeGuidedVoiceWizard();
    showToast('Guided Voice Input Complete!', 'All fields filled via voice. Review and submit your challenge.');
    const submitBtn = document.getElementById('btn-post-submit-text');
    if (submitBtn) submitBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function prevVoiceWizardStep() {
  if (voiceWizardCurrentStep > 1) {
    voiceWizardCurrentStep--;
    renderVoiceWizardStep(voiceWizardCurrentStep);
  }
}

let activeSpeechRecognition = null;

function initVoiceInput() {
  const voiceButtons = document.querySelectorAll('.btn-voice-input');

  voiceButtons.forEach(btn => {
    if (btn.dataset.voiceInitialized === 'true') return;
    btn.dataset.voiceInitialized = 'true';

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const targetId = btn.getAttribute('data-target');
      let targetEl = targetId ? document.getElementById(targetId) : null;
      if (!targetEl) {
        targetEl = btn.closest('div')?.parentElement?.querySelector('input, textarea') ||
                   btn.parentElement?.querySelector('input, textarea');
      }

      if (!targetEl) {
        console.warn('Voice input target element not found for button:', btn);
        return;
      }

      // If already listening, stop
      if (btn.classList.contains('is-listening')) {
        if (activeSpeechRecognition) {
          try { activeSpeechRecognition.stop(); } catch (err) {}
          activeSpeechRecognition = null;
        }
        btn.classList.remove('is-listening');
        const label = btn.querySelector('.voice-label');
        if (label) label.textContent = t('tapToSpeak');
        return;
      }

      // Reset any other active listening buttons
      document.querySelectorAll('.btn-voice-input.is-listening').forEach(b => {
        b.classList.remove('is-listening');
        const l = b.querySelector('.voice-label');
        if (l) l.textContent = t('tapToSpeak');
      });

      // Set current button to listening state
      btn.classList.add('is-listening');
      const label = btn.querySelector('.voice-label');
      if (label) label.textContent = t('listening');

      // Speech recognition locale
      const langMap = {
        'hi': 'hi-IN',
        'bn': 'bn-IN',
        'or': 'or-IN',
        'ur': 'ur-IN',
        'en': 'en-IN'
      };
      const recognitionLang = langMap[appState.currentLang] || 'hi-IN';

      function getSimulatedSpeechText(id) {
        if (id === 'post-title') {
          return appState.currentLang === 'en' 
            ? 'IoT Ultrasonic Silt Depth Telemetry & Flash Flood Alert in Harmu Feeder Canal'
            : 'हार्मू नाला में गाद जमाव और बाढ़ पूर्व चेतावनी (Ranchi Harmu Silt Telemetry)';
        }
        if (id === 'post-description') {
          return appState.currentLang === 'en'
            ? 'Severe siltation and plastic blockage in storm feeder drains causing repeated urban waterlogging in Ward 26. Requires IoT edge depth telemetry and alert beacons for municipal wardens. This will safeguard over 45,000 residents across the Harmu corridor.'
            : 'बरसात के समय नदी के नालों में भारी गाद और कचरा जमा होने से वार्ड 26 और किशोरगंज में जलभराव हो जाता है। अल्ट्रासोनिक सेंसर द्वारा टेलीमेट्री और त्वरित चेतावनी की आवश्यकता है। इससे 45,000 से अधिक निवासियों को लाभ मिलेगा।';
        }
        if (id === 'post-people-affected') {
          return '45,000+ residents';
        }
        if (id === 'post-address') {
          return 'Harmu River Feeder Canal, Ward 26, Ranchi, Jharkhand';
        }
        if (id === 'challenge-search-input') {
          return 'Harmu River Telemetry';
        }
        if (id === 'signup-fullname') {
          return 'Dr. Aryan Sharma';
        }
        if (id === 'chat-input') {
          return 'Transducer bench stress test complete. Standby for live field deployment.';
        }
        return 'झारखंड नागरिक नवाचार समस्या समाधान (Civic Innovation)';
      }

      function executeFallbackSimulation() {
        setTimeout(() => {
          const simulatedText = getSimulatedSpeechText(targetId);
          targetEl.value = simulatedText;
          targetEl.dispatchEvent(new Event('input', { bubbles: true }));
          targetEl.dispatchEvent(new Event('change', { bubbles: true }));
          targetEl.focus();

          btn.classList.remove('is-listening');
          if (label) label.textContent = t('tapToSpeak');

          showToast('Voice Input Captured', `"${simulatedText.slice(0, 48)}..."`);
        }, 1100);
      }

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

      if (!SpeechRecognition) {
        executeFallbackSimulation();
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        activeSpeechRecognition = recognition;
        recognition.lang = recognitionLang;
        recognition.interimResults = true;
        recognition.continuous = true; // Support multi-sentence continuous voice dictation

        let gotFinalResult = false;
        let accumulatedText = targetEl.value ? (targetEl.value + ' ') : '';

        recognition.onstart = () => {
          showToast('Voice Recognition Active', `Listening in ${TRANSLATIONS[appState.currentLang]?.name || 'Hindi/English'}...`);
        };

        recognition.onresult = (event) => {
          let interimTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
              accumulatedText += event.results[i][0].transcript + ' ';
              gotFinalResult = true;
            } else {
              interimTranscript += event.results[i][0].transcript;
            }
          }
          targetEl.value = (accumulatedText + interimTranscript).trim();
          targetEl.dispatchEvent(new Event('input', { bubbles: true }));
        };

        recognition.onerror = (event) => {
          console.warn('SpeechRecognition error or headless environment, executing fallback simulation:', event.error);
          activeSpeechRecognition = null;
          executeFallbackSimulation();
        };

        recognition.onend = () => {
          activeSpeechRecognition = null;
          if (!gotFinalResult && !targetEl.value) {
            executeFallbackSimulation();
          } else {
            btn.classList.remove('is-listening');
            if (label) label.textContent = t('tapToSpeak');
          }
        };

        recognition.start();
      } catch (err) {
        console.warn('Could not start SpeechRecognition, using fallback:', err);
        executeFallbackSimulation();
      }
    });
  });
}

// ============================================================================
// 13. DOM INITIALIZATION & EVENT DELEGATION
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {

  const roleSwitcher = document.getElementById('global-role-switcher');
  if (roleSwitcher) {
    roleSwitcher.addEventListener('change', (e) => {
      const selectedRole = e.target.value;
      appState.currentRole = selectedRole;
      appState.currentUser.role = selectedRole;

      showToast('Role Switched', `Active view configured as: ${selectedRole.toUpperCase()}`);

      if (appState.currentView === 'challenges') renderChallenges();
      if (appState.currentView === 'challenge-detail') renderChallengeDetail(appState.activeWorkspaceId);
      if (appState.currentView === 'signup') setSignupRole(selectedRole);
    });
  }

  // Clickable Role Cards on Landing Page
  document.querySelectorAll('.role-card').forEach(card => {
    card.addEventListener('click', () => {
      const role = card.getAttribute('data-role');
      if (role) {
        if (appState.isRegistered) {
          navigateTo('profile');
        } else {
          navigateTo(`signup?role=${role}`);
        }
      }
    });
  });

  const notifBell = document.getElementById('notif-bell-btn');
  const notifDropdown = document.getElementById('notif-dropdown');
  if (notifBell && notifDropdown) {
    notifBell.addEventListener('click', (e) => {
      e.stopPropagation();
      notifDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      notifDropdown.classList.add('hidden');
    });
  }

  const btnGrid = document.getElementById('btn-view-grid');
  const btnMap = document.getElementById('btn-view-map');
  const mapWrapper = document.getElementById('all-challenges-map-wrapper');
  const gridWrapper = document.getElementById('challenges-grid');

  if (btnGrid && btnMap) {
    btnGrid.addEventListener('click', () => {
      btnGrid.className = 'px-3 py-1.5 rounded-md bg-white text-slate-900 shadow-2xs';
      btnMap.className = 'px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900';
      if (mapWrapper) mapWrapper.classList.add('hidden');
      if (gridWrapper) gridWrapper.classList.remove('hidden');
    });

    btnMap.addEventListener('click', () => {
      btnMap.className = 'px-3 py-1.5 rounded-md bg-white text-slate-900 shadow-2xs';
      btnGrid.className = 'px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900';
      if (gridWrapper) gridWrapper.classList.add('hidden');
      if (mapWrapper) {
        mapWrapper.classList.remove('hidden');
        initAllChallengesMap();
      }
    });
  }

  const searchInput = document.getElementById('challenge-search-input');
  if (searchInput) searchInput.addEventListener('input', () => renderChallenges());

  const catFilter = document.getElementById('category-filter');
  if (catFilter) catFilter.addEventListener('change', () => renderChallenges());

  const matchFilter = document.getElementById('match-filter');
  if (matchFilter) matchFilter.addEventListener('change', () => renderChallenges());

  const statusFilter = document.getElementById('status-filter');
  if (statusFilter) statusFilter.addEventListener('change', () => renderChallenges());

  document.querySelectorAll('.role-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const role = tab.getAttribute('data-role-tab');
      setSignupRole(role);
    });
  });

  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(signupForm);
      const name = formData.get('fullname') || 'Innovator';
      const role = document.querySelector('.role-tab.bg-white')?.getAttribute('data-role-tab') || appState.currentRole || 'student';

      appState.currentUser.name = name;
      appState.currentUser.role = role;
      appState.currentUser.email = formData.get('email') || 'innovator@nivaran.gov.in';
      appState.currentUser.phone = formData.get('phone') || '+91 98765 43210';
      appState.currentUser.age = formData.get('age') || 24;
      appState.currentUser.gender = formData.get('gender') || 'Not specified';
      appState.currentUser.registeredDate = 'September 2026';
      appState.currentRole = role;

      if (role === 'student') {
        appState.currentUser.university_name = formData.get('university_name') || 'University Innovation Lab';
        appState.currentUser.institution = appState.currentUser.university_name;
        appState.currentUser.academic_designation = formData.get('academic_designation') || 'Student';
        appState.currentUser.course = formData.get('course') || 'B.Tech / M.Tech';
        appState.currentUser.department = formData.get('department') || 'Center for Sustainable Technologies';
        appState.currentUser.academic_year = formData.get('academic_year') || '3rd';
        appState.currentUser.participation_mode = formData.get('participation_mode') || 'team';
        const skills = formData.getAll('skills');
        if (skills.length > 0) appState.currentUser.skills = skills;
      } else if (role === 'industry') {
        appState.currentUser.company_name = formData.get('company_name') || 'Central Coalfields Limited (CCL) CSR';
        appState.currentUser.industry_sector = formData.get('industry_sector') || 'Water Shortage & Sanitation';
        appState.currentUser.representative_role = formData.get('representative_role') || 'Associate Director - CSR Programs';
        appState.currentUser.experience_years = formData.get('experience_years') || 12;
        appState.currentUser.csr_budget = formData.get('csr_budget') || 'tier2';
        const interests = formData.getAll('csr_interest');
        if (interests.length > 0) appState.currentUser.csr_interest = interests;
      } else {
        appState.currentUser.citizen_type = formData.get('citizen_type') || 'Govt Body';
        appState.currentUser.citizen_org = formData.get('citizen_org') || 'Ranchi Municipal Corporation (RMC) Ward 26 Advisory';
        appState.currentUser.signup_address = formData.get('signup_address') || 'Kishore Ganj, Ward 26, Harmu Road, Ranchi, Jharkhand';
        appState.currentUser.signup_coords = formData.get('signup_coords') || '23.3569&deg; N, 85.3240&deg; E';
      }

      appState.isRegistered = true;
      localStorage.setItem('nivaran_is_registered', 'true');
      localStorage.setItem('nivaran_user', JSON.stringify(appState.currentUser));

      if (roleSwitcher) roleSwitcher.value = role;

      updateNavbarUserUI();
      showToast('Registration Successful!', `Welcome to NIVARAN, ${name}! Your profile has been initialized.`);
      navigateTo('profile');
    });
  }

  // Profile Edit Form Handler & Buttons
  const profileEditForm = document.getElementById('profile-edit-form');
  if (profileEditForm) {
    profileEditForm.addEventListener('submit', handleProfileEditSubmit);
  }

  const btnToggleEdit = document.getElementById('btn-toggle-edit-profile');
  if (btnToggleEdit) {
    btnToggleEdit.addEventListener('click', () => {
      const editMode = document.getElementById('profile-edit-mode');
      const isCurrentlyEditing = editMode && !editMode.classList.contains('hidden');
      toggleProfileEdit(!isCurrentlyEditing);
    });
  }

  const btnCancelEdit1 = document.getElementById('btn-cancel-profile-edit');
  if (btnCancelEdit1) {
    btnCancelEdit1.addEventListener('click', () => toggleProfileEdit(false));
  }

  const btnCancelEdit2 = document.getElementById('btn-cancel-profile-edit-2');
  if (btnCancelEdit2) {
    btnCancelEdit2.addEventListener('click', () => toggleProfileEdit(false));
  }

  const btnResetDemo = document.getElementById('btn-reset-demo-account');
  if (btnResetDemo) {
    btnResetDemo.addEventListener('click', logoutOrResetUser);
  }

  // Portals & Tools dropdown toggle
  const portalsBtn = document.getElementById('portals-dropdown-btn');
  const portalsMenu = document.getElementById('portals-dropdown-menu');
  if (portalsBtn && portalsMenu) {
    portalsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      portalsMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      portalsMenu.classList.add('hidden');
    });
  }

  const postForm = document.getElementById('post-challenge-form');
  if (postForm) {
    postForm.addEventListener('submit', handlePostChallengeSubmit);
  }

  const mockUpload = document.getElementById('mock-upload-box');
  if (mockUpload) {
    mockUpload.addEventListener('click', () => {
      const preview = document.getElementById('mock-upload-preview');
      if (preview) preview.classList.remove('hidden');
      showToast('Files Attached', '2 inspection photographs and GPS geo-tags uploaded.');
    });
  }

  document.querySelectorAll('.ws-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-ws-tab');
      setWorkspaceTab(target);
    });
  });

  const openSubmitSolBtn = document.getElementById('btn-open-submit-solution');
  if (openSubmitSolBtn) {
    openSubmitSolBtn.addEventListener('click', () => {
      const modal = document.getElementById('modal-submit-solution');
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  }

  const teamForm = document.getElementById('team-formation-form');
  if (teamForm) {
    teamForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(teamForm);
      const teamName = formData.get('team_name') || 'EcoSensors Innovation Lab';
      const teammatesRaw = formData.get('teammates') || '';
      const advisor = formData.get('faculty_advisor') || 'Dr. S. K. Mahato (BIT Mesra)';
      const challengeId = document.getElementById('modal-team-formation')?.dataset?.challengeId || 'NIV-401';
      const targetChallenge = appState.challenges.find(c => c.id === challengeId) || appState.challenges[0];

      const teammates = teammatesRaw.split('\n').map(t => t.trim()).filter(Boolean);
      if (teammates.length === 0) {
        teammates.push('Priya Verma (Firmware Lead)', 'Rohan Gupta (ML Specialist)');
      }

      const formedTeam = {
        teamName,
        challengeId: targetChallenge.id,
        challengeTitle: targetChallenge.title,
        advisor,
        teammates,
        university: appState.currentUser.university_name || appState.currentUser.institution || 'Birla Institute of Technology (BIT) Mesra, Ranchi',
        formedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      };

      appState.currentUserTeam = formedTeam;
      localStorage.setItem('nivaran_current_team', JSON.stringify(formedTeam));

      // Update challenge status and assigned team
      targetChallenge.status = 'In Progress';
      targetChallenge.matchedTeam = teamName;
      targetChallenge.assignedTeam = teamName;
      targetChallenge.matchedUniversity = formedTeam.university;

      closeModal('modal-team-formation');

      // Populate modal-team-success
      const successName = document.getElementById('team-success-name');
      const successSub = document.getElementById('team-success-sub');
      const successCh = document.getElementById('team-success-challenge');
      const successAdv = document.getElementById('team-success-advisor');
      const successRoster = document.getElementById('team-success-roster');
      const gotoBtn = document.getElementById('btn-team-goto-workspace');

      if (successName) successName.textContent = teamName;
      if (successSub) successSub.textContent = formedTeam.university;
      if (successCh) successCh.textContent = `#${targetChallenge.id}: ${targetChallenge.title}`;
      if (successAdv) successAdv.textContent = advisor;
      if (successRoster) {
        successRoster.innerHTML = teammates.map(m => `<div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-[#1B4942]"></span><span>${m}</span></div>`).join('');
      }
      if (gotoBtn) {
        gotoBtn.onclick = () => {
          closeModal('modal-team-success');
          navigateTo(`workspace/${targetChallenge.id}`);
        };
      }

      const successModal = document.getElementById('modal-team-success');
      if (successModal) {
        successModal.classList.remove('hidden');
        successModal.classList.add('flex');
      }

      showToast('Team Registered & Challenge Assigned!', `${teamName} is now the active solver team for #${targetChallenge.id}`);

      addNotification({
        title: `Team Formed for #${targetChallenge.id}`,
        message: `${teamName} (${formedTeam.university}) has been registered as the active solver team.`,
        time: 'Just now',
        read: false,
        type: 'team_formed',
        target: `workspace/${targetChallenge.id}`
      });
      renderNotifications();

      // Re-render views if currently active
      if (appState.currentView === 'challenge-detail') {
        renderChallengeDetail(targetChallenge.id);
      }
      if (appState.currentView === 'profile') {
        renderUserProfile();
      }
    });
  }

  const adoptForm = document.getElementById('industry-adopt-form');
  if (adoptForm) {
    adoptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const chId = document.getElementById('adopt-challenge-id')?.value || 'NIV-401';
      const companyInput = adoptForm.querySelector('[name="company"]');
      const companyName = companyInput ? companyInput.value.trim() : 'Industry Partner';
      const offerFunding = document.getElementById('adopt-opt-funding')?.checked ?? false;
      const offerMentorship = document.getElementById('adopt-opt-mentorship')?.checked ?? false;
      const offerEquipment = document.getElementById('adopt-opt-equipment')?.checked ?? false;
      const offerInternships = document.getElementById('adopt-opt-internships')?.checked ?? false;
      const offerInfra = document.getElementById('adopt-opt-infra')?.checked ?? false;
      const offerAdvisory = document.getElementById('adopt-opt-advisory')?.checked ?? false;
      const offerOther = document.getElementById('adopt-opt-other')?.checked ?? false;
      const otherText = document.getElementById('adopt-other-text')?.value.trim() || '';

      const grantInput = document.getElementById('adopt-grant-input');
      const mentorInput = document.getElementById('adopt-mentor-input');
      
      const grantAmount = offerFunding ? (grantInput?.value.trim() || '₹8,50,000') : 'None';
      const mentorHours = offerMentorship ? (`${mentorInput?.value.trim() || '30'} hrs/mo`) : 'None';

      const selectedTypes = [];
      if (offerFunding) selectedTypes.push('CSR Pilot Grant');
      if (offerMentorship) selectedTypes.push('Technical Mentorship');
      if (offerEquipment) selectedTypes.push('Equipment & Hardware');
      if (offerInternships) selectedTypes.push('Student Internships & PPOs');
      if (offerInfra) selectedTypes.push('Testbed & Lab Access');
      if (offerAdvisory) selectedTypes.push('Technical Consultation');
      if (offerOther && otherText) selectedTypes.push(`Other: ${otherText}`);
      else if (offerOther) selectedTypes.push('Other Contribution');

      const targetChallenge = (appState.challenges && appState.challenges.find(c => c.id === chId)) || JHARKHAND_CHALLENGES.find(c => c.id === chId) || JHARKHAND_CHALLENGES[0];
      if (targetChallenge) {
        targetChallenge.industryPartner = companyName;
        targetChallenge.committedFunding = grantAmount !== 'None' ? grantAmount : null;
        targetChallenge.committedMentorship = mentorHours !== 'None' ? mentorHours : null;
        targetChallenge.committedContributions = selectedTypes;
        targetChallenge.committedCount = (targetChallenge.committedCount || 0) + 1;
        if (!targetChallenge.committedPartners) targetChallenge.committedPartners = [];
        targetChallenge.committedPartners.unshift({
          company: companyName,
          funding: grantAmount,
          mentorship: mentorHours,
          contributions: selectedTypes,
          date: 'Just now'
        });
      }

      closeModal('modal-industry-adopt');

      let commitmentMsg = '';
      if (selectedTypes.length === 0) {
        commitmentMsg = 'Challenge added to tracking & observer roster.';
      } else {
        commitmentMsg = `Adoption confirmed: ${selectedTypes.join(', ')}.`;
      }
      showToast('Challenge Adopted!', commitmentMsg);

      addNotification({
        title: `Industry Adopted #${chId}`,
        message: `${companyName} confirmed adoption for #${chId}${selectedTypes.length > 0 ? ` (${selectedTypes.join(', ')})` : ' as an industry observer'}.`,
        time: 'Just now',
        read: false,
        type: 'industry_adopted',
        target: `workspace/${chId}`
      });
      renderNotifications();

      navigateTo(`workspace/${chId}`);
    });
  }

  const solForm = document.getElementById('solution-submission-form');
  if (solForm) {
    solForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const solTitleInput = solForm.querySelector('[name="sol_title"]');
      const solTitle = solTitleInput ? solTitleInput.value.trim() : 'Civic Tech Prototype';
      closeModal('modal-submit-solution');
      showToast('Prototype Submitted!', `${solTitle} routed to Industry Partner for review and statutory CSR verification.`);
      addNotification({
        title: 'Solution Submitted for Review',
        message: `${solTitle} submitted by Team TechBit Ranchi. Ready for Industry & CSR assessment.`,
        time: 'Just now',
        read: false,
        type: 'solution_submitted',
        target: 'industry-review'
      });
      renderNotifications();
      navigateTo('industry-review');
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });

  document.querySelectorAll('[id^="modal-"]').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  });

  const chatInput = document.getElementById('chat-input');
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendChatMessage();
    });
  }

  // Language Switcher Listener
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.value = appState.currentLang;
    langSwitcher.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  }

  // Leaderboard Filters Listeners
  const leadColFilter = document.getElementById('leaderboard-college-filter');
  if (leadColFilter) leadColFilter.addEventListener('change', renderLeaderboard);

  const leadDomFilter = document.getElementById('leaderboard-domain-filter');
  if (leadDomFilter) leadDomFilter.addEventListener('change', renderLeaderboard);

  const leadTimeFilter = document.getElementById('leaderboard-time-filter');
  if (leadTimeFilter) leadTimeFilter.addEventListener('change', renderLeaderboard);

  // Award PPO Form Submission
  const ppoForm = document.getElementById('award-ppo-form');
  if (ppoForm) {
    ppoForm.addEventListener('submit', handleAwardPpoSubmit);
  }

  // Reject Feedback Form Submission
  const rejectForm = document.getElementById('reject-feedback-form');
  if (rejectForm) {
    rejectForm.addEventListener('submit', handleRejectFeedbackSubmit);
  }

  // PWA Service Worker Registration
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('NIVARAN Service Worker registered:', reg.scope))
        .catch(err => console.log('SW registration error:', err));
    });
  }

  // Offline / Online Network Sync Listeners
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  if (!navigator.onLine) updateOnlineStatus();

  // Initialize voice input buttons
  initVoiceInput();

  // Initialize notifications dropdown and badge
  renderNotifications();

  // Initial language load
  if (appState.currentLang && appState.currentLang !== 'en') {
    applyLanguage(appState.currentLang);
  }

  // Initialize dynamic navbar auth/profile UI
  updateNavbarUserUI();

  window.addEventListener('hashchange', renderCurrentRoute);

  // If already registered and visiting root or signup, land directly on Profile
  if (appState.isRegistered && (!window.location.hash || window.location.hash === '#/' || window.location.hash === '#' || window.location.hash.startsWith('#/signup'))) {
    navigateTo('profile');
  } else {
    renderCurrentRoute();
  }

});
