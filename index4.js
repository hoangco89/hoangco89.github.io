//index_sub4.js
//<h4>4. English learning videos:</h4>
//<select id="videoSelectlearnEn" ></select><br><br>
let listIdTd_4 = [
"-epedrVRmag|000: [Private video]",
"zr40kHpQY08|001: Top 10 Tips to Improve English Speaking | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"7QL0XW6elMs|002: How to Talk About Your Work in English | How to Improve Your English Pronunciation #EnglishListening",
"Mz4emSwXWhM|003: How To Train Your Mouth For Talking | How to Improve Your English Pronunciation #englishlistening",
"XC2zGo5iDDM|004: How to Practice English Alone ❤ | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"8Du-JykB1Zg|005: How to Train Your Brain to Speak English ✅ | B2 English Speaking Practice | Improve Your English",
"nHoc12P3_eA|006: How to Speak English Fluently in 2026 | B2 English Speaking Practice ✅ | Listen and Repeat with Me!",
"xNB7HgL2w5U|007: Change Your Life in 2026 | B2 English Speaking Practice ✅ | Listen and Repeat with Me!",
"j-Jh9nNWEkU|008: How to Speak English Fluently | B2 English Speaking Practice ✅ | Listen and Repeat with Me!",
"PMTPnPpIfLU|009: How to Learn English at Home Alone | B2 English Speaking Practice ✅ | Listen and Repeat with Me!",
"clTkW1m8HCA|010: The Fastest Way to Learn English | B2 English Speaking Practice ✅ | Listen and Repeat with Me!",
"3f6pBMtvjXE|011: How to Think and Talk in English ✅ | B2 English Speaking Practice | Listen and Speak English With Me",
"cqsTodwzznc|012: How to Learn English While Sleeping 😴 | B2 English Speaking Practice ✅ | Listen and Repeat with me!",
"DeehqJhwtjo|013: How to Get Addicted to English ✅ | B2 English Speaking  Practice | Listen and Speak English With Me!",
"DTa_86yLXrg|014: How to Speak 10x Clearer English | Train Your Mind Like a Weapon  | Listen and Speak English With Me",
"-V4BhERseHI|015: Reprogram Your Brain for English Fluency | Speak English With Me ✅ | Improve Your English Fluency!",
"YM2QyfgB-Xk|016: Think in English Before You Speak ✅ | Think and Speak in English | Listen and Speak English With Me!",
"y0BMmSw6XCE|017: How to Speak English Fluently Like Natives ✅ | B1 English | Listen & Repeat English with Me!",
"Rt5H2Gf58-U|018: The Old Man and The Sea 🌊 | Learn English Through Stories | Improve your English Fluency ✅",
"Ze6j26sxOO4|019: Train Your Brain and Mouth for English Fluency ✅ | B1 English | Listen & Repeat English with Me!",
"0z2U8PpLEzU|020: The Little Prince | Learn English Through Stories level 1 | Listen & Repeat English with Me!",
"_hVwHc8dwWg|021: How I Made English a Part of My Life | Learn English Step-by-Step | Listen & Repeat English with Me!",
"0bNnFqKEobU|022: B1 English Speaking Practice: Learn English with Easy Steps | Listen & Speak Like a Pro!",
"dfu3fvsRryw|023: If You Know These 50 Words You Can Speak Fluently | B1 English Speaking Practice",
"3mZzy5lfBiU|024: How to Learn English at Home Step by Step | How to Practice at Home | Improve your English ✅",
"oa32QXPKSPc|025: How to Talk in English When You’re Shy | B1 English Speaking Practice ✅ | Improve Your English! ✅",
"oF8iF7PZgeU|026: Learn English while Sleeping 😴 | B1 English Speaking Practice ✅ | Improve Your English Fluency!",
"r9lJy2SVhE4|027: Train Your English Brain 🧠 | B1 Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"JqJ7PlMCDuE|028: Master English Alone at Home | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"HrfzVPO3Uj4|029: English Shadowing Practice: Learn Fast with Easy Vocabulary | Listen & Speak Like a Native!",
"chLDPUQInNQ|030: The Best way to Learn English || How to Improve Your English ✅ || Improve your English Fluency ✅",
"w8HYS2bwrpg|031: How to Practice English Daily | Listen & Repeat Practice ✅| Improve Your English Fluency!",
"KGDVWgjcly4|032: How to Talk to Yourself and Improve Every Day | Daily Conversation Practice for Fluency",
"sgJzkHA1Yxs|033: I Go To School | Learn English Through Stories | My School Routine Story ✅ | Improve Your English",
"p_AriekPVmI|034: How to Train Your Brain For English | English Speaking Practice ✅| Improve Your English FLUENCY",
"mMm-ZSXFIbs|035: How to Practice English | Reading & Speaking Practice ✅ | Improve Your English Fluency",
"jppHwYzVhno|036: How I Learned English in 5 Months | My English Learning Experience | Improve Your English Fluency!",
"LdDiWY3ymwA|037: How to Speak English Fluently | Reading & Speaking Practice ✅ | Improve Your English Fluency",
"gNr0deWPLbQ|038: How to Speak to People in English | Reading & Speaking Practice ✅ | Improve Your English Fluency ✅",
"SLlfaueyU-0|039: The Life Story of Jesus Christ | Learn English Through Story Level 3 🔥| Listen and Speaking Practice",
"xQY2c_E-d-A|040: How to Improve Your English Pronunciation | Listen & Repeat Practice ✅| Improve Your English Fluency",
"kvLw2DlU7gg|041: The Boy Who Never Give Up | Listen & Repeat Practice ✅| Improve Your English Fluency #englishstory",
"Gqjy90RU0Co|042: How to Speak English Fluently By Yourself | Listen & Repeat Practice ✅| Improve Your English Fluency",
"nJatCRbuUHI|043: How to Make Your Brain to Think in English | Listen & Repeat Practice ✅ | Improve Your English",
"ibI9Fy80tb4|044: I Go To The Market | Learn English Through Stories | My Daily Routine Story ✅ | Improve Your English",
"gyCBjlY5Wjs|045: I Go To New York | Learn English Through Stories | My Travel Story ✅ | Improve Your English Fluency!",
"97-atRxrJvU|046: I Go To New World | Learn English Through Stories | Listen & Repeat Practice✅ | Improve Your English",
"T8HH6Gt20_c|047: How I Trained My Brain to Speak English | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"-j-CDpiz9QU|048: Why You Must Read English? | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"gURTf30f6Ls|049: How Do People Talk in English? | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"SMH4OL14PYA|050: 7 Easy Steps to Speak English Fluently | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"k8Z2VzyCIP8|051: How to Think and Speak in English | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"XtP7y6Jg9eQ|052: Train Your Mouth , Not Your Mind| Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"TUsX2hIK67k|053: How to Talk About Yourself in English | B2 English Speaking Practice✅ | Improve Your English Fluency",
"EQzI-fSbBvc|054: How to Master English Alone | Listen & Repeat Practice ✅ | Improve Your English Fluency!",
"Ga4XRjmBEXw|055: How to Manage your Time? | Time Management | Graded Reader | Speak English Fluently ✅",
"hVGnQbSO9Ic|056: From Silence to Speech | My English Learning Journey | Graded Reader | Speak English Fluently ✅",
"AgUzC9rtQxY|057: How to Remember Everything | Train Your Brain | Boost Your Memory Power ✅",
"qFbkzzQ0RZw|058: Speak English Slowly — But Powerfully | Graded Reader | Improve Your English Fluency ✅️",
"TK7NB0xQEB8|059: Train Your Brain to Speak English Fluently | Listen & Repeat Practice ✅",
"v6BkwPc-Syg|060: How to Make English Your Habit | Turn English into a Habit | Learn Fast, Speak Confidently!",
"rJvwII1DBMQ|061: Train Your Mouth to Speak English Fluently | Listen & Repeat Practice ✅",
"sx_uMIHpib4|062: English listening Practice: How to Relax Your Mind | Graded Reader | Improve Your English Fluency✅",
"4T3vs6jAwjc|063: How to Speak English Smartly? | Learn English through Story | Listen & Speak Like a Pro ✅",
"BxA9vxWhf9I|064: How I Learn English at Home Step by Step | Improve Your Fluency ✅",
"IWRf_TpYuJk|065: How to Master English Speaking Easily? | Improve Your English Fluency ✅| Listen & Speak with me!",
"sFE7v3tytOE|066: How to Speak English Fluently | Improve Your Fluency ✅| Listen &Speak with me!",
"cTF4Q0_rCDM|067: How to Speak English Slowly and Clearly | Improve Your Fluency ✅",
"9q5nGsfkU_I|068: English listening Practice: Learn English Step-by-Step | Listen & Speak Like a Pro!",
"GkM586YMIcg|069: English listening Practice: Learn Fast with Easy Vocabulary | Listen & Speak Like a Pro!",
"bPXK5MBG9Rs|070: How to Think Like a Genius | Train Your Brain for Success | Listen & Speak Like a Pro!",
"4Xei1f_y1n0|071: Train Your Brain to Win | Learn English through Motivational Story | Listen & Speak Like a Pro ✅",
"cFj0B3J95ok|072: English Speaking Practice: My Journey to Airport | Listen & Speak Like a Pro!",
"IMBeyVinHXY|073: How To Make English Part of Your Life | Improve Your English | Listen And Practice | Graded Reader",
"GuHNoA2t1xQ|074: How To Practice For English Talking | Improve Your English | Listen And Practice | Graded Reader",
"WaC-ztBGNLc|075: Why You Must Read English || How to Improve Your Reading ✅ || Improve your English Fluency ✅",
"4ZsIaTEC08w|076: English Speaking Practice: Learn Fast with Easy Vocabulary | Listen & Speak Like a Pro!",
"2JHWj3YHedY|077: What If I Started Learning English from Zero? | From Zero to Fluent – How to Start Learning English",
"MqjYqhCafwc|078: How to Speak English with Friends – Easy & Fun! | Daily Conversation Practice for Fluency",
"Xk9FO5tyy_g|079: How to Talk About Your Daily Routine in English | Daily English Speaking Practice",
"kQTaqIgIM8k|080: 10 English Tips Will Change Your Life | Graded Reader ✅️ | Improve English Fluency",
"I0vtXjePREk|081: How to SPEAK ENGLISH without Grammar?  | Improve your English Grammar in just 1 hours!",
"p2tvL2TOrrE|082: Learn English with ChatGPT | Your Smart Speaking Partner | Speak, Read & Improve Fluency",
"56nYhvPkrps|083: How People Talk in English? | Think English, Speak English – Train Your Brain for Fluency",
"g0Utj4MWDKs|084: How to Speak English Fluently by Training Your Mouth – Speak English with Confidence!",
"FTLzczq-LHI|085: How I Mastered English at Home 🔥 | My English Learning Story | Graded Reader Practice",
"6xZit8c6cRc|086: How to Train Your Mouth to Speak English – Train Your Mouth Step by Step",
"gvQpfCi77H4|087: English Speaking Practice – From Beginner to Advanced | Listen and Speak with Me",
"u2hFfXApdfU|088: Daily English Speaking Practice | Learn English | Listen and Practice English Sentences",
"sXfD6Z2j3oM|089: How to Talk in English Fluently and Confidently | Speak to Anyone Easily | Learn English With Me!",
"xhTGg5ZEeKs|090: How to Transform Your Sleep Time into Study Time? | Learn English While Sleeping",
"o3dQwxhG8kU|091: How to Talk in Your Brain – Think and Speak in English | The English Grammar Doctor",
"dMSzjbhhWek|092: How to Speak Slowly and Clearly in English | English Speaking Practice for Beginners",
"Xp_N0bn8ZZw|093: Think Quickly, Speak Clearly –Simple English Speaking Tips | Learn English With Me!",
"PsgANnTr1wY|094: How to Speak English with Friends – Easy Listening & Practice | Improve Your English",
"Xa_R8ZnShns|095: How to Talk to People in English – Easy Steps for Beginners!| Learn English With Me!",
"N1ZauWQUSAk|096: Talk About Your Day in English --  Beginner Practice | Listen and Speak English with me!",
"YQHT3_-9C48|097: How to Learn English in Your Sleep | Improve Your English While Sleeping | Listen and Speak English",
"zqip67Iwpgo|098: How to Practice Speaking English Through Social Media? | Listen and Speak English with Me!",
"zYV2sAQqGsk|099: How to Become Mentally Strong – Train Your Mind Like a Muscle! | Improve your English Fluency!",
"UaQqJWaR2Nc|100: The Power of Positive Thinking – Change Your Mind, Change Your Life! | Improve your English Fluency!",
"bakm8dFS54k|101: How to Practice Speaking English by Yourself – No Partner Needed! | Improve your English Fluency!",
"W_piR0V3z40|102: 1 Hour of Real English Conversations | Practice Listening & Speaking Like a Native!",
"023azKYM4e4|103: How I Trained My Brain to Think in English | Learn English | Listen and Speak English With Me!",
"IxMqMeEzFKk|104: How to Speak English Even If You're Shy? | Learn English With Me | Listen and Speak English with me!",
"HIR3_WasoBI|105: Make English a Part of your Daily Routine | Learn English With Me | Listen and Speak English with me",
"9-Ny6s_C5fk|106: Speak & Think In English like a pro! | Learn English With Me | Listen and Speak English with me!",
"npUkPilOzdg|107: Learn English step-by-step at Home | Learn English With Me | Listen and Speak English with me!",
"2pHYObOIrvI|108: Why Reading is Must to Learn English? | Learn English With Me | Listen and Speak English with me!",
"bKs9Xyi7cAw|109: I Go to New York || Listening Practice || Learn English through Story || Improve Your English Story",
"PoIQRIFWDZA|110: Robinson Crusoe By Daniel Defoe | LEARN ENGLISH | Improve your English in just 90 minutes",
"ozm-M5hWo30|111: How People Talk in English? Think and Talk in English | Think and Speak in English | Improve English",
"a_9NrAzqhQg|112: How to Talk in English Every Day – Even If You’re Alone | Think and Talk | Improve your English",
"RYh_zD4tqQM|113: Change Your Life FOREVER! | LEARN ENGLISH | Improve your English #englishstory",
"CCXdYROYQXg|114: Don't Waste Your Time! | LEARN ENGLISH | Improve your English #englishstory #motivationalstory",
"LcZZJsHGJhk|115: This Mindset Will Change Your Life I Growth Mindset  speaking english online I english classes",
"FATMmqBwGUk|116: How To Improve Your Accent? Speak confidently & Clear | LEARN ENGLISH | Improve your English",
"PxjowDaNk_k|117: How I Started Learning English? My Roots in Learning English | LEARN ENGLISH | Improve your English",
"gMr9MRYCk2E|118: Why listening English is So Important? | LEARN ENGLISH | Improve your English #englishstory",
"_K0D5WM_ND8|119: Why Reading is So Important? | LEARN ENGLISH | Improve your English #englishstory",
"y2P2gHcIyYA|120: Sharpen Your Memory | Boost Your Memory Power | LEARN ENGLISH | Improve your English #englishstory",
"eaS_oOzCC4A|121: 12 Rules For Success || Success Rules of Life! || Improve your English || Graded Reader",
"F9V6thxZWj8|122: The Power of Consistency & Why Consistency Matters || Improve your English || Graded Reader",
"Hp0fTXt78wU|123: Best tips for Learning English || Graded Reader || LEARN ENGLISH || Improve your English",
"mLllFaWuPMw|124: How to speak English? || Graded Reader || LEARN ENGLISH || Improve your English #englishstory",
"SV9pW5MpC-A|125: Daily habits that Helped me Improve my English || Graded Reader || LEARN ENGLISH  #englishstory",
"PlUl2LVlydE|126: 99% of English Learners Make These Mistakes! | Improve your English Grammar in just ten Minutes!",
"GN5zYk4gFFI|127: Love or Family? | Learn English Through Story Level 3 | Graded Reader",
"xXQ9VN4DV4w|128: I go to California | Learn English Through Story Level 3 | Graded Reader",
"N6tLlykaz0o|129: The English Teacher | Reading Practice | Improve Your Speaking in English | Graded Reader",
"KOaiYf4qOb8|130: Can I trust him..?| Reading Practice | Improve Your Speaking in English | Graded Reader",
"SW7UH3fl_lA|131: My Daily Routine! || Learn English through Stories || Graded Reader || Improve your English",
"GO-_5qboYoA|132: Love or Money? || Learn English through Stories || Graded Reader || Improve your English",
"tnRu_5XQmCA|133: I Can't Speak English | Learn English Through Story Level 3 | Graded Reader | Improve your English",
"t6kYLEqtykE|134: How to use social media? || Learn English through Stories || Graded Reader || Improve your English",
"jiwRS-FnJD0|135: My new Favorite Hobby! || Learn English through Stories || Graded Reader || Improve your English",
"aRy2yspPK3k|136: Babysitting at Night || Learn English through Stories || Graded Reader || Improve your English",
"6gVX2S3S30Q|137: The Taxi Ride! || Learn English through Stories || Graded Reader || Improve your English",
"Vh6N3iaR6BI|138: I Go Visit my Son! || Learn English through Stories || Graded Reader || Improve your English",
"zV0XwVnnnRs|139: Rich Girl || Learn English through Stories || Improve Your Speaking in English || Graded Reader",
"-FyndMAQnkQ|140: I go to New York! || Reading Practice || Improve Your Speaking in English || Graded Reader",
"PmCt-av5B2I|141: Time doesn't Stop! || Reading Practice || Improve Your Speaking in English || Graded Reader",
"MNfpPITkRzY|142: The Woman. On Seat 14B || Reading Practice || Improve Your Speaking in English || Graded Reader"
];
//tao list videos chua cac thong tin id, subtitle, title
const videos_4 = listIdTd_4.map(item => {
    const [id, title] = item.split("|");
    return {
        id: id,
        subtitle: `${id}.json`,
        title: title.trim()
    };
});

//tao menu chon video (select_id)
videos_4.forEach((v, index) => {
    const option = document.createElement("option");
    option.value = v.id;
    option.textContent = v.title;
    videoSelect_4.appendChild(option);
});

videoSelect_4.addEventListener("change", async () => {
    localStorage.setItem("selectedVideoId", videoSelect_4.value);

    videochon.textContent = videoSelect_4.value; 
    const videoId = videochon.textContent;

    subtitles = await fetchSubtitles(videoId);

    // 🔥 DỊCH TOÀN BỘ JSON
    translateFullJson(subtitles);

    player.loadVideoById(videoId);
    player.playVideo();

    startSync();

  });


