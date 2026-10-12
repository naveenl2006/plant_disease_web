// Multilingual disease data (English / தமிழ் / తెలుగు)
// Keys are the exact label strings returned by the model.
// Language-independent fields (severity, color, icon) live at the top level;
// all user-facing text lives under `translations[lang]`.

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English' },
  { code: 'ta', label: 'Tamil',   nativeLabel: 'தமிழ்' },
  { code: 'te', label: 'Telugu',  nativeLabel: 'తెలుగు' },
];

export const DEFAULT_LANGUAGE = 'en';

// ── UI strings (section headings, severity names, etc.) ─────────────────────
export const uiText = {
  en: {
    plant: 'Plant',
    severity: 'Severity',
    description: 'Description',
    causes: 'Causes',
    fertilizer: 'Recommended Fertilizer / Chemical',
    treatment: 'Treatment',
    usage: 'Usage Guide',
    quantity: 'Quantity',
    frequency: 'Frequency',
    bestTime: 'Best Time',
    language: 'Language',
    severityLevels: {
      Critical: 'Critical',
      High: 'High',
      Moderate: 'Moderate',
      None: 'None',
      Unknown: 'Unknown',
    },
  },
  ta: {
    plant: 'தாவரம்',
    severity: 'தீவிரம்',
    description: 'விளக்கம்',
    causes: 'காரணங்கள்',
    fertilizer: 'பரிந்துரைக்கப்படும் உரம் / மருந்து',
    treatment: 'சிகிச்சை',
    usage: 'பயன்பாட்டு வழிகாட்டி',
    quantity: 'அளவு',
    frequency: 'எத்தனை முறை',
    bestTime: 'சிறந்த நேரம்',
    language: 'மொழி',
    severityLevels: {
      Critical: 'மிகக் கடுமை',
      High: 'அதிகம்',
      Moderate: 'மிதமான',
      None: 'இல்லை',
      Unknown: 'தெரியவில்லை',
    },
  },
  te: {
    plant: 'మొక్క',
    severity: 'తీవ్రత',
    description: 'వివరణ',
    causes: 'కారణాలు',
    fertilizer: 'సిఫార్సు చేసిన ఎరువు / మందు',
    treatment: 'చికిత్స',
    usage: 'వాడకం మార్గదర్శి',
    quantity: 'మోతాదు',
    frequency: 'ఎన్నిసార్లు',
    bestTime: 'అనువైన సమయం',
    language: 'భాష',
    severityLevels: {
      Critical: 'అత్యంత తీవ్రం',
      High: 'ఎక్కువ',
      Moderate: 'మధ్యస్థం',
      None: 'లేదు',
      Unknown: 'తెలియదు',
    },
  },
};

// ── Disease database ────────────────────────────────────────────────────────
export const diseaseDatabase = {

  // ── Chrysanthemum ─────────────────────────────────────────────────────────

  "Chrysanthemum - Bacterial Leaf Spot": {
    severity: "High",
    color: "from-yellow-900 to-orange-800",
    icon: "🌸",
    translations: {
      en: {
        name: "Bacterial Leaf Spot",
        plant: "Chrysanthemum",
        description: "Bacterial leaf spot in chrysanthemums is caused by Pseudomonas cichorii and Xanthomonas campestris. It produces small, water-soaked lesions that enlarge into dark brown or black irregular spots surrounded by yellow halos. In severe cases, infected leaves wilt, die, and drop prematurely, greatly reducing ornamental value.",
        causes: [
          "Bacterial pathogens Pseudomonas cichorii and Xanthomonas campestris",
          "Overhead irrigation splashing bacteria between plants",
          "Warm, humid weather (75–86°F) with leaf wetness",
          "Contaminated pruning tools and hands",
          "Overcrowded planting with poor air circulation",
          "Working among plants when foliage is wet"
        ],
        fertilizer: "Copper hydroxide (Kocide 3000) or Copper octanoate (Cueva) bactericide",
        treatment: [
          "Remove and destroy all infected leaves immediately",
          "Apply copper-based bactericide spray preventively and at first sign",
          "Switch to drip or base irrigation — avoid wetting foliage",
          "Space plants adequately (at least 30 cm apart) for airflow",
          "Disinfect pruning tools with 70% isopropyl alcohol between cuts",
          "Avoid working with plants when wet; work in dry conditions"
        ],
        usage: {
          quantity: "Kocide 3000: 0.5–1 tsp per liter of water; Cueva: 1–2 oz per gallon",
          frequency: "Every 7–10 days during wet, warm conditions; preventive sprays every 14 days",
          bestTime: "Early morning when leaves can dry quickly; avoid evening application"
        }
      },
      ta: {
        name: "பாக்டீரியா இலைப்புள்ளி நோய்",
        plant: "சாமந்தி",
        description: "சாமந்தியில் பாக்டீரியா இலைப்புள்ளி நோய் Pseudomonas cichorii மற்றும் Xanthomonas campestris பாக்டீரியாக்களால் ஏற்படுகிறது. இது நீர் தோய்ந்தது போன்ற சிறிய புள்ளிகளாகத் தொடங்கி, மஞ்சள் வளையத்தால் சூழப்பட்ட கரும்பழுப்பு அல்லது கருப்பு நிற ஒழுங்கற்ற புள்ளிகளாகப் பெரிதாகிறது. கடுமையான நிலையில் பாதிக்கப்பட்ட இலைகள் வாடி, காய்ந்து, முன்கூட்டியே உதிர்ந்து, அலங்கார மதிப்பை வெகுவாகக் குறைக்கின்றன.",
        causes: [
          "Pseudomonas cichorii மற்றும் Xanthomonas campestris பாக்டீரியா நோய்க்கிருமிகள்",
          "மேலிருந்து நீர் பாய்ச்சுவதால் பாக்டீரியா செடிகளுக்கிடையே தெறித்துப் பரவுதல்",
          "இலைகள் ஈரமாக இருக்கும் வெப்பமான, ஈரப்பதமான வானிலை (24–30°C)",
          "நோய்த்தொற்றுள்ள கத்தரிக்கும் கருவிகள் மற்றும் கைகள்",
          "காற்றோட்டம் குறைவான நெருக்கமான நடவு",
          "இலைகள் ஈரமாக இருக்கும்போது செடிகளுக்கிடையே வேலை செய்தல்"
        ],
        fertilizer: "காப்பர் ஹைட்ராக்சைடு (Kocide 3000) அல்லது காப்பர் ஆக்டனோயேட் (Cueva) பாக்டீரியா எதிர்ப்பு மருந்து",
        treatment: [
          "பாதிக்கப்பட்ட இலைகள் அனைத்தையும் உடனே அகற்றி அழிக்கவும்",
          "காப்பர் அடிப்படையிலான பாக்டீரியா எதிர்ப்பு மருந்தை தடுப்பு முறையாகவும், நோயின் முதல் அறிகுறியிலும் தெளிக்கவும்",
          "சொட்டு நீர் அல்லது அடிப்பகுதியில் நீர் பாய்ச்சவும் — இலைகள் நனையாமல் பார்த்துக்கொள்ளவும்",
          "காற்றோட்டத்திற்காக செடிகளுக்கு இடையே குறைந்தது 30 செ.மீ இடைவெளி விடவும்",
          "ஒவ்வொரு வெட்டுக்கும் இடையே கத்தரிக்கும் கருவிகளை 70% ஐசோப்ரோபைல் ஆல்கஹாலால் கிருமி நீக்கம் செய்யவும்",
          "செடிகள் ஈரமாக இருக்கும்போது வேலை செய்வதைத் தவிர்க்கவும்; காய்ந்த நேரத்தில் வேலை செய்யவும்"
        ],
        usage: {
          quantity: "Kocide 3000: ஒரு லிட்டர் நீருக்கு 0.5–1 தேக்கரண்டி; Cueva: ஒரு கேலனுக்கு 1–2 அவுன்ஸ்",
          frequency: "ஈரமான, வெப்பமான காலத்தில் 7–10 நாட்களுக்கு ஒருமுறை; தடுப்பு தெளிப்பு 14 நாட்களுக்கு ஒருமுறை",
          bestTime: "இலைகள் விரைவாகக் காயும் அதிகாலை நேரம்; மாலையில் தெளிப்பதைத் தவிர்க்கவும்"
        }
      },
      te: {
        name: "బాక్టీరియల్ ఆకు మచ్చ తెగులు",
        plant: "చామంతి",
        description: "చామంతిలో బాక్టీరియల్ ఆకు మచ్చ తెగులు Pseudomonas cichorii మరియు Xanthomonas campestris బాక్టీరియా వల్ల వస్తుంది. ఇది నీటిలో తడిసినట్లు కనిపించే చిన్న మచ్చలుగా మొదలై, పసుపు రంగు వలయంతో కూడిన ముదురు గోధుమ లేదా నల్లని క్రమరహిత మచ్చలుగా పెద్దవుతుంది. తీవ్రమైన సందర్భాల్లో సోకిన ఆకులు వాడిపోయి, ఎండిపోయి, ముందుగానే రాలిపోతాయి; దీనివల్ల అలంకార విలువ చాలా తగ్గుతుంది.",
        causes: [
          "Pseudomonas cichorii మరియు Xanthomonas campestris బాక్టీరియా క్రిములు",
          "పై నుండి నీరు పోయడం వల్ల బాక్టీరియా మొక్కల మధ్య చిమ్మి వ్యాపించడం",
          "ఆకులు తడిగా ఉండే వెచ్చని, తేమతో కూడిన వాతావరణం (24–30°C)",
          "కలుషితమైన కత్తిరింపు పనిముట్లు మరియు చేతులు",
          "గాలి ఆడని దట్టమైన నాటడం",
          "ఆకులు తడిగా ఉన్నప్పుడు మొక్కల మధ్య పని చేయడం"
        ],
        fertilizer: "కాపర్ హైడ్రాక్సైడ్ (Kocide 3000) లేదా కాపర్ ఆక్టనోయేట్ (Cueva) బాక్టీరియా నివారణ మందు",
        treatment: [
          "సోకిన ఆకులన్నింటినీ వెంటనే తీసివేసి నాశనం చేయండి",
          "కాపర్ ఆధారిత బాక్టీరియా నివారణ మందును ముందస్తుగా మరియు తొలి లక్షణం కనిపించగానే పిచికారీ చేయండి",
          "డ్రిప్ లేదా మొదళ్ల వద్ద నీరు పోయండి — ఆకులు తడవకుండా చూడండి",
          "గాలి ఆడేందుకు మొక్కల మధ్య కనీసం 30 సెం.మీ. దూరం ఉంచండి",
          "ప్రతి కత్తిరింపు మధ్య పనిముట్లను 70% ఐసోప్రొపైల్ ఆల్కహాల్‌తో శుభ్రపరచండి",
          "మొక్కలు తడిగా ఉన్నప్పుడు పని చేయవద్దు; పొడి వాతావరణంలో పని చేయండి"
        ],
        usage: {
          quantity: "Kocide 3000: లీటరు నీటికి 0.5–1 టీస్పూన్; Cueva: గ్యాలన్‌కు 1–2 ఔన్సులు",
          frequency: "తడి, వెచ్చని వాతావరణంలో ప్రతి 7–10 రోజులకు; నివారణ పిచికారీ ప్రతి 14 రోజులకు",
          bestTime: "ఆకులు త్వరగా ఆరిపోయే తెల్లవారుజాము; సాయంత్రం పిచికారీ చేయవద్దు"
        }
      }
    }
  },

  "Chrysanthemum - Septoria Leaf Spot": {
    severity: "Moderate",
    color: "from-amber-900 to-yellow-800",
    icon: "🌸",
    translations: {
      en: {
        name: "Septoria Leaf Spot",
        plant: "Chrysanthemum",
        description: "Septoria leaf spot (Septoria chrysanthemi) is one of the most common fungal diseases of chrysanthemums. It starts as small, circular brown spots with tan or gray centers on lower leaves and progresses upward. Heavily infected plants lose leaves prematurely, reducing vigor and flower production significantly.",
        causes: [
          "Fungal pathogen Septoria chrysanthemi or S. chrysanthemella",
          "Wet, humid weather especially during summer and fall",
          "Overhead watering keeping foliage wet",
          "Infected plant debris from previous season",
          "Closely planted beds limiting air movement",
          "Temperatures between 60–80°F with prolonged leaf wetness"
        ],
        fertilizer: "Chlorothalonil (Daconil 2787) or Mancozeb (Dithane M-45)",
        treatment: [
          "Apply protective fungicide at first appearance of spots",
          "Remove lower infected leaves to reduce disease source",
          "Water at the base of plants only; never overhead",
          "Mulch around plants to prevent soil splash onto leaves",
          "Clean up all fallen leaves and debris at end of season",
          "Plant chrysanthemums in full sun to promote quick drying"
        ],
        usage: {
          quantity: "Daconil: 1.5 tsp per gallon of water; Mancozeb: 1–2 tsp per gallon",
          frequency: "Every 7–14 days from early season; increase to every 7 days in wet weather",
          bestTime: "Late afternoon so leaves dry before nightfall; reapply after heavy rain"
        }
      },
      ta: {
        name: "செப்டோரியா இலைப்புள்ளி நோய்",
        plant: "சாமந்தி",
        description: "செப்டோரியா இலைப்புள்ளி நோய் (Septoria chrysanthemi) சாமந்தியைத் தாக்கும் மிகவும் பொதுவான பூஞ்சை நோய்களில் ஒன்றாகும். இது கீழ் இலைகளில் பழுப்பு அல்லது சாம்பல் நிற மையத்துடன் கூடிய சிறிய வட்டவடிவ பழுப்புப் புள்ளிகளாகத் தொடங்கி மேல்நோக்கிப் பரவுகிறது. கடுமையாகப் பாதிக்கப்பட்ட செடிகள் முன்கூட்டியே இலைகளை இழந்து, வளர்ச்சியும் பூ உற்பத்தியும் கணிசமாகக் குறைகின்றன.",
        causes: [
          "Septoria chrysanthemi அல்லது S. chrysanthemella பூஞ்சை நோய்க்கிருமி",
          "குறிப்பாக கோடை மற்றும் இலையுதிர் காலத்தில் ஈரமான, ஈரப்பதமான வானிலை",
          "மேலிருந்து நீர் பாய்ச்சுவதால் இலைகள் ஈரமாக இருத்தல்",
          "முந்தைய பருவத்தின் நோய்த்தொற்றுள்ள செடிக் கழிவுகள்",
          "காற்றோட்டத்தைத் தடுக்கும் நெருக்கமான பாத்திகள்",
          "இலைகள் நீண்ட நேரம் ஈரமாக இருக்கும் 16–27°C வெப்பநிலை"
        ],
        fertilizer: "குளோரோதலோனில் (Daconil 2787) அல்லது மான்கோசெப் (Dithane M-45)",
        treatment: [
          "புள்ளிகள் முதலில் தென்பட்டவுடன் பாதுகாப்பு பூஞ்சைக்கொல்லியைத் தெளிக்கவும்",
          "நோய் மூலத்தைக் குறைக்க கீழ்ப்பகுதியில் உள்ள பாதிக்கப்பட்ட இலைகளை அகற்றவும்",
          "செடியின் அடிப்பகுதியில் மட்டும் நீர் பாய்ச்சவும்; ஒருபோதும் மேலிருந்து வேண்டாம்",
          "மண் தெறித்து இலைகளில் படாமல் இருக்க செடிகளைச் சுற்றி மூடாக்கு (மல்ச்) இடவும்",
          "பருவ முடிவில் உதிர்ந்த இலைகள் மற்றும் கழிவுகள் அனைத்தையும் சுத்தம் செய்யவும்",
          "இலைகள் விரைவாகக் காய, சாமந்தியை முழு வெயிலில் நடவும்"
        ],
        usage: {
          quantity: "Daconil: ஒரு கேலன் நீருக்கு 1.5 தேக்கரண்டி; Mancozeb: ஒரு கேலனுக்கு 1–2 தேக்கரண்டி",
          frequency: "பருவத்தின் தொடக்கத்தில் இருந்து 7–14 நாட்களுக்கு ஒருமுறை; ஈரமான வானிலையில் 7 நாட்களுக்கு ஒருமுறை",
          bestTime: "இரவுக்கு முன் இலைகள் காயும்படி பிற்பகல் நேரம்; கனமழைக்குப் பின் மீண்டும் தெளிக்கவும்"
        }
      },
      te: {
        name: "సెప్టోరియా ఆకు మచ్చ తెగులు",
        plant: "చామంతి",
        description: "సెప్టోరియా ఆకు మచ్చ తెగులు (Septoria chrysanthemi) చామంతిని ఎక్కువగా ఆశించే శిలీంధ్ర వ్యాధులలో ఒకటి. ఇది కింది ఆకులపై గోధుమ లేదా బూడిద రంగు మధ్యభాగంతో చిన్న గుండ్రని గోధుమ రంగు మచ్చలుగా మొదలై పైకి వ్యాపిస్తుంది. తీవ్రంగా సోకిన మొక్కలు ముందుగానే ఆకులను కోల్పోతాయి; దీనివల్ల మొక్క బలం, పూల దిగుబడి గణనీయంగా తగ్గుతాయి.",
        causes: [
          "Septoria chrysanthemi లేదా S. chrysanthemella శిలీంధ్ర క్రిమి",
          "ముఖ్యంగా వేసవి మరియు శరదృతువులో తడి, తేమతో కూడిన వాతావరణం",
          "పై నుండి నీరు పోయడం వల్ల ఆకులు తడిగా ఉండటం",
          "గత సీజన్‌లోని సోకిన మొక్కల అవశేషాలు",
          "గాలి ఆడకుండా చేసే దట్టమైన మడులు",
          "ఆకులు ఎక్కువసేపు తడిగా ఉండే 16–27°C ఉష్ణోగ్రత"
        ],
        fertilizer: "క్లోరోథలోనిల్ (Daconil 2787) లేదా మాంకోజెబ్ (Dithane M-45)",
        treatment: [
          "మచ్చలు మొదట కనిపించగానే రక్షణ శిలీంధ్రనాశినిని పిచికారీ చేయండి",
          "వ్యాధి మూలాన్ని తగ్గించడానికి కింది సోకిన ఆకులను తీసివేయండి",
          "మొక్కల మొదళ్ల వద్ద మాత్రమే నీరు పోయండి; ఎప్పుడూ పై నుండి వద్దు",
          "మట్టి ఆకులపై చిమ్మకుండా మొక్కల చుట్టూ మల్చింగ్ చేయండి",
          "సీజన్ చివరలో రాలిన ఆకులు, చెత్త అంతా శుభ్రం చేయండి",
          "ఆకులు త్వరగా ఆరేందుకు చామంతిని పూర్తి ఎండలో నాటండి"
        ],
        usage: {
          quantity: "Daconil: గ్యాలన్ నీటికి 1.5 టీస్పూన్లు; Mancozeb: గ్యాలన్‌కు 1–2 టీస్పూన్లు",
          frequency: "సీజన్ ప్రారంభం నుండి ప్రతి 7–14 రోజులకు; తడి వాతావరణంలో ప్రతి 7 రోజులకు",
          bestTime: "రాత్రికి ముందే ఆకులు ఆరేలా మధ్యాహ్నం తర్వాత; భారీ వర్షం తర్వాత మళ్లీ పిచికారీ చేయండి"
        }
      }
    }
  },

  "Chrysanthemum - Healthy": {
    severity: "None",
    color: "from-green-900 to-green-700",
    icon: "✅",
    translations: {
      en: {
        name: "Healthy Plant",
        plant: "Chrysanthemum",
        description: "Your chrysanthemum plant is in excellent health with no signs of bacterial, fungal, or viral disease. The foliage shows vibrant green color with no spots, lesions, or discoloration. Continue your current care routine to maintain this optimal plant health through the blooming season.",
        causes: ["No disease detected"],
        fertilizer: "Balanced slow-release fertilizer (10-10-10) or high-potassium bloom booster (5-10-15)",
        treatment: [
          "Water consistently at the base — avoid wetting foliage",
          "Pinch growing tips in early season to encourage bushy growth",
          "Apply balanced fertilizer every 2–3 weeks during growing season",
          "Monitor weekly for early signs of aphids or spider mites",
          "Apply preventive copper spray before wet season as protection"
        ],
        usage: {
          quantity: "10-10-10: 1 tbsp per gallon of water or 1 cup per 10 sq ft of bed",
          frequency: "Fertilize every 2–3 weeks spring through mid-summer; switch to bloom formula before flowering",
          bestTime: "Morning watering for best absorption; fertilize after watering to avoid root burn"
        }
      },
      ta: {
        name: "ஆரோக்கியமான செடி",
        plant: "சாமந்தி",
        description: "உங்கள் சாமந்தி செடி பாக்டீரியா, பூஞ்சை அல்லது வைரஸ் நோய்களின் எந்த அறிகுறியும் இன்றி மிகவும் ஆரோக்கியமாக உள்ளது. இலைகள் புள்ளிகள், காயங்கள் அல்லது நிறமாற்றம் இல்லாமல் பசுமையாகத் தெரிகின்றன. பூக்கும் பருவம் முழுவதும் இந்த ஆரோக்கிய நிலையைத் தக்கவைக்க தற்போதைய பராமரிப்பைத் தொடரவும்.",
        causes: ["நோய் எதுவும் கண்டறியப்படவில்லை"],
        fertilizer: "சமச்சீர் மெதுவாக வெளியாகும் உரம் (10-10-10) அல்லது அதிக பொட்டாசியம் கொண்ட பூ ஊக்கி (5-10-15)",
        treatment: [
          "அடிப்பகுதியில் தொடர்ந்து நீர் பாய்ச்சவும் — இலைகளை நனைக்க வேண்டாம்",
          "புதர் போல வளர, ஆரம்பப் பருவத்தில் வளரும் நுனிகளைக் கிள்ளி விடவும்",
          "வளரும் பருவத்தில் 2–3 வாரங்களுக்கு ஒருமுறை சமச்சீர் உரம் இடவும்",
          "அசுவினி அல்லது சிலந்திப் பேன் அறிகுறிகளுக்காக வாரந்தோறும் கண்காணிக்கவும்",
          "மழைக்காலத்துக்கு முன் பாதுகாப்பாக காப்பர் தெளிப்பைத் தடுப்பு முறையாகத் தெளிக்கவும்"
        ],
        usage: {
          quantity: "10-10-10: ஒரு கேலன் நீருக்கு 1 மேசைக்கரண்டி அல்லது 10 சதுர அடி பாத்திக்கு 1 கப்",
          frequency: "வசந்தம் முதல் கோடை நடுப்பகுதி வரை 2–3 வாரங்களுக்கு ஒருமுறை உரமிடவும்; பூக்கும் முன் பூ உரத்துக்கு மாறவும்",
          bestTime: "சிறந்த உறிஞ்சுதலுக்கு காலை நேர நீர்ப்பாசனம்; வேர் எரிவதைத் தவிர்க்க நீர் பாய்ச்சிய பின் உரமிடவும்"
        }
      },
      te: {
        name: "ఆరోగ్యకరమైన మొక్క",
        plant: "చామంతి",
        description: "మీ చామంతి మొక్క బాక్టీరియా, శిలీంధ్ర లేదా వైరస్ వ్యాధుల ఎలాంటి లక్షణాలు లేకుండా చాలా ఆరోగ్యంగా ఉంది. ఆకులు మచ్చలు, గాయాలు లేదా రంగు మార్పు లేకుండా పచ్చగా కనిపిస్తున్నాయి. పూల సీజన్ అంతా ఈ ఆరోగ్య స్థితిని కొనసాగించడానికి ప్రస్తుత సంరక్షణ పద్ధతిని కొనసాగించండి.",
        causes: ["ఎలాంటి వ్యాధి కనుగొనబడలేదు"],
        fertilizer: "సమతుల్య నెమ్మదిగా విడుదలయ్యే ఎరువు (10-10-10) లేదా అధిక పొటాషియం పూల బూస్టర్ (5-10-15)",
        treatment: [
          "మొదళ్ల వద్ద క్రమం తప్పకుండా నీరు పోయండి — ఆకులు తడవకుండా చూడండి",
          "పొదలా పెరిగేందుకు ప్రారంభ సీజన్‌లో పెరుగుతున్న కొనలను గిల్లండి",
          "పెరుగుదల సీజన్‌లో ప్రతి 2–3 వారాలకు సమతుల్య ఎరువు వేయండి",
          "పేనుబంక లేదా సాలీడు పురుగుల తొలి సంకేతాల కోసం వారానికోసారి గమనించండి",
          "వర్షాకాలానికి ముందు రక్షణగా కాపర్ పిచికారీ చేయండి"
        ],
        usage: {
          quantity: "10-10-10: గ్యాలన్ నీటికి 1 టేబుల్‌స్పూన్ లేదా 10 చదరపు అడుగుల మడికి 1 కప్పు",
          frequency: "వసంతం నుండి వేసవి మధ్య వరకు ప్రతి 2–3 వారాలకు ఎరువు వేయండి; పూతకు ముందు పూల ఫార్ములాకు మారండి",
          bestTime: "మెరుగైన శోషణకు ఉదయం నీరు పోయండి; వేర్లు కాలకుండా నీరు పోసిన తర్వాత ఎరువు వేయండి"
        }
      }
    }
  },

  // ── Jasmine ───────────────────────────────────────────────────────────────

  "Jasmine - Rust": {
    severity: "Moderate",
    color: "from-orange-900 to-yellow-800",
    icon: "🌼",
    translations: {
      en: {
        name: "Rust Disease",
        plant: "Jasmine",
        description: "Jasmine rust, caused by Uromyces hobsoni, produces characteristic orange-yellow powdery pustules (uredinia) on the undersides of leaves, with corresponding yellow spots on upper surfaces. Severe infections cause leaf yellowing, premature drop, and weakened plants that flower poorly. It spreads rapidly in cool, moist conditions.",
        causes: [
          "Fungal pathogen Uromyces hobsoni (rust fungus)",
          "Cool temperatures (60–70°F) with high humidity or dew",
          "Wind-dispersed spores from infected nearby plants",
          "Overcrowded planting limiting air circulation",
          "Extended periods of leaf wetness from rain or irrigation",
          "Stressed plants with weakened immune defenses"
        ],
        fertilizer: "Tebuconazole (Folicur) or Trifloxystrobin + Tebuconazole (Nativo) systemic fungicide",
        treatment: [
          "Remove and bag all infected leaves — do not compost",
          "Apply systemic fungicide immediately upon first rust pustule detection",
          "Improve air circulation by pruning dense growth",
          "Avoid overhead irrigation; switch to drip at base",
          "Apply potassium silicate foliar spray to strengthen leaf cell walls",
          "Treat soil around plant with sulfur-based product to reduce spore survival"
        ],
        usage: {
          quantity: "Folicur 250EW: 0.5 ml per liter of water; Nativo 75WG: 0.3 g per liter",
          frequency: "Two sprays 10–14 days apart at first detection; preventive every 21 days in rust season",
          bestTime: "Morning sprays on windless days for complete coverage of leaf undersides"
        }
      },
      ta: {
        name: "துரு நோய்",
        plant: "மல்லிகை",
        description: "Uromyces hobsoni பூஞ்சையால் ஏற்படும் மல்லிகைத் துரு நோய், இலைகளின் அடிப்பகுதியில் ஆரஞ்சு-மஞ்சள் நிற தூள் போன்ற கொப்புளங்களையும் (யூரிடினியா), மேற்பரப்பில் அதற்கேற்ற மஞ்சள் புள்ளிகளையும் உருவாக்குகிறது. கடுமையான தொற்றில் இலைகள் மஞ்சளாகி, முன்கூட்டியே உதிர்ந்து, செடி வலுவிழந்து குறைவாகவே பூக்கும். குளிர்ந்த, ஈரப்பதமான சூழலில் இது வேகமாகப் பரவுகிறது.",
        causes: [
          "Uromyces hobsoni (துரு பூஞ்சை) நோய்க்கிருமி",
          "அதிக ஈரப்பதம் அல்லது பனியுடன் கூடிய குளிர்ந்த வெப்பநிலை (16–21°C)",
          "அருகிலுள்ள நோய்த்தொற்றுள்ள செடிகளிலிருந்து காற்றில் பரவும் வித்துகள்",
          "காற்றோட்டத்தைத் தடுக்கும் நெருக்கமான நடவு",
          "மழை அல்லது நீர்ப்பாசனத்தால் இலைகள் நீண்ட நேரம் ஈரமாக இருத்தல்",
          "நோய் எதிர்ப்புச் சக்தி குறைந்த, அழுத்தத்தில் உள்ள செடிகள்"
        ],
        fertilizer: "டெபுகோனசோல் (Folicur) அல்லது டிரைஃப்ளாக்சிஸ்ட்ரோபின் + டெபுகோனசோல் (Nativo) உள்ளுறிஞ்சும் பூஞ்சைக்கொல்லி",
        treatment: [
          "பாதிக்கப்பட்ட இலைகள் அனைத்தையும் அகற்றி பையில் போடவும் — உரமாக்க வேண்டாம்",
          "முதல் துரு கொப்புளம் தென்பட்டவுடன் உடனே உள்ளுறிஞ்சும் பூஞ்சைக்கொல்லியைத் தெளிக்கவும்",
          "அடர்ந்த வளர்ச்சியைக் கத்தரித்து காற்றோட்டத்தை மேம்படுத்தவும்",
          "மேலிருந்து நீர் பாய்ச்சுவதைத் தவிர்த்து, அடிப்பகுதியில் சொட்டு நீர் முறைக்கு மாறவும்",
          "இலை செல் சுவர்களை வலுப்படுத்த பொட்டாசியம் சிலிகேட் இலைவழி தெளிப்பைப் பயன்படுத்தவும்",
          "வித்துகள் உயிர்வாழ்வதைக் குறைக்க செடியைச் சுற்றியுள்ள மண்ணில் கந்தகம் சார்ந்த பொருளைப் பயன்படுத்தவும்"
        ],
        usage: {
          quantity: "Folicur 250EW: ஒரு லிட்டர் நீருக்கு 0.5 மி.லி; Nativo 75WG: ஒரு லிட்டருக்கு 0.3 கிராம்",
          frequency: "முதலில் கண்டறிந்தவுடன் 10–14 நாட்கள் இடைவெளியில் இரண்டு முறை தெளிக்கவும்; துரு பருவத்தில் 21 நாட்களுக்கு ஒருமுறை தடுப்பாகத் தெளிக்கவும்",
          bestTime: "இலைகளின் அடிப்பகுதி முழுவதும் படும்படி காற்று இல்லாத நாளில் காலை நேரத்தில் தெளிக்கவும்"
        }
      },
      te: {
        name: "తుప్పు తెగులు",
        plant: "మల్లె",
        description: "Uromyces hobsoni శిలీంధ్రం వల్ల వచ్చే మల్లె తుప్పు తెగులు, ఆకుల అడుగు భాగంలో నారింజ-పసుపు రంగు పొడి వంటి బొబ్బలను (యురెడినియా), పై భాగంలో వాటికి అనుగుణంగా పసుపు మచ్చలను కలిగిస్తుంది. తీవ్రమైన సోకిడంలో ఆకులు పసుపు రంగులోకి మారి ముందుగానే రాలిపోతాయి; మొక్క బలహీనపడి తక్కువగా పూస్తుంది. చల్లని, తేమ వాతావరణంలో ఇది వేగంగా వ్యాపిస్తుంది.",
        causes: [
          "Uromyces hobsoni (తుప్పు శిలీంధ్రం) క్రిమి",
          "అధిక తేమ లేదా మంచుతో కూడిన చల్లని ఉష్ణోగ్రత (16–21°C)",
          "సమీపంలోని సోకిన మొక్కల నుండి గాలిలో వ్యాపించే బీజాంశాలు",
          "గాలి ఆడకుండా చేసే దట్టమైన నాటడం",
          "వర్షం లేదా నీటి పారుదల వల్ల ఆకులు ఎక్కువసేపు తడిగా ఉండటం",
          "రోగనిరోధక శక్తి తగ్గిన, ఒత్తిడిలో ఉన్న మొక్కలు"
        ],
        fertilizer: "టెబుకోనజోల్ (Folicur) లేదా ట్రైఫ్లాక్సిస్ట్రోబిన్ + టెబుకోనజోల్ (Nativo) అంతర్వాహక శిలీంధ్రనాశిని",
        treatment: [
          "సోకిన ఆకులన్నింటినీ తీసివేసి సంచిలో వేయండి — కంపోస్ట్ చేయవద్దు",
          "మొదటి తుప్పు బొబ్బ కనిపించగానే వెంటనే అంతర్వాహక శిలీంధ్రనాశినిని పిచికారీ చేయండి",
          "దట్టమైన పెరుగుదలను కత్తిరించి గాలి ఆడేలా చేయండి",
          "పై నుండి నీరు పోయడం మానేసి, మొదళ్ల వద్ద డ్రిప్ పద్ధతికి మారండి",
          "ఆకు కణ గోడలను బలపరచడానికి పొటాషియం సిలికేట్ ఆకులపై పిచికారీ చేయండి",
          "బీజాంశాలు బతికి ఉండటాన్ని తగ్గించడానికి మొక్క చుట్టూ మట్టిలో గంధకం ఆధారిత ఉత్పత్తిని వాడండి"
        ],
        usage: {
          quantity: "Folicur 250EW: లీటరు నీటికి 0.5 మి.లీ.; Nativo 75WG: లీటరుకు 0.3 గ్రా.",
          frequency: "మొదట గుర్తించగానే 10–14 రోజుల వ్యవధిలో రెండుసార్లు పిచికారీ చేయండి; తుప్పు సీజన్‌లో ప్రతి 21 రోజులకు నివారణగా చేయండి",
          bestTime: "ఆకుల అడుగు భాగమంతా తడిసేలా గాలి లేని రోజున ఉదయం పిచికారీ చేయండి"
        }
      }
    }
  },

  "Jasmine - Multiple Diseases": {
    severity: "High",
    color: "from-red-900 to-orange-900",
    icon: "🌼",
    translations: {
      en: {
        name: "Multiple Diseases",
        plant: "Jasmine",
        description: "The model has detected signs of multiple concurrent diseases affecting this jasmine plant. Multiple infections simultaneously stress the plant severely, weakening its immune system, causing accelerated leaf loss, reduced flowering, and if untreated, can lead to plant death. Immediate comprehensive management is essential.",
        causes: [
          "Concurrent fungal and bacterial infections",
          "Severely stressed plant with compromised immune system",
          "Prolonged wet, humid conditions favoring multiple pathogens",
          "Neglected or overloaded pest pressure weakening the plant",
          "Poor nutrition making plant vulnerable to multiple attackers",
          "Infected neighboring plants spreading multiple disease sources"
        ],
        fertilizer: "Broad-spectrum systemic fungicide (Thiophanate-methyl) + Copper bactericide tank mix",
        treatment: [
          "Prune all visibly infected branches and leaves immediately",
          "Apply a tank mix of systemic fungicide + copper bactericide for broad coverage",
          "Improve drainage around root zone — waterlogging worsens all diseases",
          "Boost plant immunity with potassium silicate and seaweed extract foliar spray",
          "Isolate plant from other susceptible plants to prevent further spread",
          "Reassess plant nutrition — apply balanced slow-release fertilizer after disease control"
        ],
        usage: {
          quantity: "Topsin M 70WP (Thiophanate-methyl): 1g per liter + Kocide 3000: 1g per liter, tank mixed",
          frequency: "Every 7 days for first 3 applications; then every 14 days for maintenance",
          bestTime: "Morning application; ensure thorough coverage of all leaf surfaces including undersides"
        }
      },
      ta: {
        name: "பல நோய்கள்",
        plant: "மல்லிகை",
        description: "இந்த மல்லிகைச் செடியைப் பல நோய்கள் ஒரே நேரத்தில் தாக்கியிருப்பதற்கான அறிகுறிகளை மாடல் கண்டறிந்துள்ளது. ஒரே நேரத்தில் பல தொற்றுகள் செடியை மிகவும் அழுத்தத்திற்கு உள்ளாக்கி, அதன் நோய் எதிர்ப்புச் சக்தியைக் குறைத்து, இலைகள் வேகமாக உதிரவும் பூக்கள் குறையவும் காரணமாகின்றன; சிகிச்சையளிக்காவிட்டால் செடி இறக்கவும் கூடும். உடனடியாக முழுமையான மேலாண்மை அவசியம்.",
        causes: [
          "ஒரே நேரத்தில் பூஞ்சை மற்றும் பாக்டீரியா தொற்றுகள்",
          "நோய் எதிர்ப்புச் சக்தி குறைந்து கடுமையான அழுத்தத்தில் உள்ள செடி",
          "பல நோய்க்கிருமிகளுக்குச் சாதகமான நீண்டகால ஈரமான, ஈரப்பதமான சூழல்",
          "கவனிக்கப்படாத அல்லது அதிகமான பூச்சித் தாக்கத்தால் செடி வலுவிழத்தல்",
          "மோசமான ஊட்டச்சத்தால் பல நோய்களுக்கு எளிதில் பாதிக்கப்படுதல்",
          "அருகிலுள்ள நோய்த்தொற்றுள்ள செடிகளிலிருந்து பல நோய்கள் பரவுதல்"
        ],
        fertilizer: "பரந்த வீச்சு உள்ளுறிஞ்சும் பூஞ்சைக்கொல்லி (Thiophanate-methyl) + காப்பர் பாக்டீரியா எதிர்ப்பு மருந்து கலவை",
        treatment: [
          "கண்ணுக்குத் தெரியும் பாதிக்கப்பட்ட கிளைகள், இலைகள் அனைத்தையும் உடனே கத்தரிக்கவும்",
          "பரவலான பாதுகாப்புக்கு உள்ளுறிஞ்சும் பூஞ்சைக்கொல்லி + காப்பர் பாக்டீரியா எதிர்ப்பு மருந்து கலவையைத் தெளிக்கவும்",
          "வேர்ப்பகுதியில் வடிகால் வசதியை மேம்படுத்தவும் — நீர் தேங்குவது எல்லா நோய்களையும் மோசமாக்கும்",
          "பொட்டாசியம் சிலிகேட் மற்றும் கடல்பாசி சாறு இலைவழி தெளிப்பால் செடியின் நோய் எதிர்ப்பைக் கூட்டவும்",
          "மேலும் பரவாமல் தடுக்க, பாதிக்கப்படக்கூடிய பிற செடிகளிலிருந்து இதைத் தனிமைப்படுத்தவும்",
          "ஊட்டச்சத்தை மறுஆய்வு செய்யவும் — நோய் கட்டுப்பாட்டுக்குப் பிறகு சமச்சீர் மெதுவாக வெளியாகும் உரம் இடவும்"
        ],
        usage: {
          quantity: "Topsin M 70WP (Thiophanate-methyl): ஒரு லிட்டருக்கு 1 கிராம் + Kocide 3000: ஒரு லிட்டருக்கு 1 கிராம், கலந்து தெளிக்கவும்",
          frequency: "முதல் 3 முறை 7 நாட்களுக்கு ஒருமுறை; பிறகு பராமரிப்புக்காக 14 நாட்களுக்கு ஒருமுறை",
          bestTime: "காலை நேரத்தில் தெளிக்கவும்; இலைகளின் அடிப்பகுதி உட்பட அனைத்து பரப்பும் நன்கு நனையுமாறு பார்த்துக்கொள்ளவும்"
        }
      },
      te: {
        name: "బహుళ వ్యాధులు",
        plant: "మల్లె",
        description: "ఈ మల్లె మొక్కను ఒకేసారి అనేక వ్యాధులు ఆశించిన సంకేతాలను మోడల్ గుర్తించింది. ఒకేసారి అనేక ఇన్ఫెక్షన్లు మొక్కపై తీవ్ర ఒత్తిడిని కలిగించి, దాని రోగనిరోధక శక్తిని తగ్గిస్తాయి; ఆకులు వేగంగా రాలిపోవడం, పూత తగ్గడం జరుగుతుంది; చికిత్స చేయకపోతే మొక్క చనిపోవచ్చు. తక్షణమే సమగ్ర నిర్వహణ అవసరం.",
        causes: [
          "ఒకేసారి శిలీంధ్ర మరియు బాక్టీరియా ఇన్ఫెక్షన్లు",
          "రోగనిరోధక శక్తి తగ్గి తీవ్ర ఒత్తిడిలో ఉన్న మొక్క",
          "అనేక క్రిములకు అనుకూలమైన ఎక్కువకాలం తడి, తేమ వాతావరణం",
          "నిర్లక్ష్యం చేసిన లేదా ఎక్కువైన పురుగుల ఒత్తిడి వల్ల మొక్క బలహీనపడటం",
          "పోషకాల లోపం వల్ల అనేక వ్యాధులకు గురయ్యే అవకాశం",
          "సమీపంలోని సోకిన మొక్కల నుండి అనేక వ్యాధులు వ్యాపించడం"
        ],
        fertilizer: "విస్తృత వర్ణపట అంతర్వాహక శిలీంధ్రనాశిని (Thiophanate-methyl) + కాపర్ బాక్టీరియా నివారణ మందు కలిపిన మిశ్రమం",
        treatment: [
          "కనిపిస్తున్న సోకిన కొమ్మలు, ఆకులన్నింటినీ వెంటనే కత్తిరించండి",
          "విస్తృత రక్షణ కోసం అంతర్వాహక శిలీంధ్రనాశిని + కాపర్ బాక్టీరియా నివారణ మందు మిశ్రమాన్ని పిచికారీ చేయండి",
          "వేరు ప్రాంతంలో నీరు నిలవకుండా మురుగు నీటి పారుదల మెరుగుపరచండి — నీరు నిలిస్తే అన్ని వ్యాధులు ముదురుతాయి",
          "పొటాషియం సిలికేట్ మరియు సముద్రపు నాచు సారం ఆకులపై పిచికారీతో మొక్క రోగనిరోధకతను పెంచండి",
          "మరింత వ్యాప్తి నివారించడానికి ఇతర వ్యాధి గ్రహణశీల మొక్కల నుండి దీన్ని వేరుచేయండి",
          "పోషణను పునఃపరిశీలించండి — వ్యాధి నియంత్రణ తర్వాత సమతుల్య నెమ్మదిగా విడుదలయ్యే ఎరువు వేయండి"
        ],
        usage: {
          quantity: "Topsin M 70WP (Thiophanate-methyl): లీటరుకు 1 గ్రా. + Kocide 3000: లీటరుకు 1 గ్రా., కలిపి పిచికారీ చేయండి",
          frequency: "మొదటి 3 సార్లు ప్రతి 7 రోజులకు; ఆ తర్వాత నిర్వహణకు ప్రతి 14 రోజులకు",
          bestTime: "ఉదయం పిచికారీ చేయండి; ఆకుల అడుగు భాగంతో సహా అన్ని ఉపరితలాలు పూర్తిగా తడిసేలా చూడండి"
        }
      }
    }
  },

  "Jasmine - Healthy": {
    severity: "None",
    color: "from-green-900 to-green-700",
    icon: "✅",
    translations: {
      en: {
        name: "Healthy Plant",
        plant: "Jasmine",
        description: "Your jasmine plant is healthy and thriving with no signs of rust, fungal, bacterial, or viral disease. The leaves display normal deep green color, firm texture, and no spots or discoloration. Keep up your current care practices to enjoy abundant, fragrant blooms throughout the flowering season.",
        causes: ["No disease detected"],
        fertilizer: "Bloom-boosting fertilizer (5-10-15) with added magnesium sulfate (Epsom salt)",
        treatment: [
          "Water deeply but infrequently — allow topsoil to dry slightly between watering",
          "Fertilize monthly during growing season with high-potassium formula",
          "Prune after flowering to shape plant and improve air circulation",
          "Check weekly for aphids and whiteflies on new growth",
          "Apply preventive neem oil spray monthly to deter fungal and pest issues"
        ],
        usage: {
          quantity: "5-10-15: 1 tsp per liter of water; Epsom salt: 1 tbsp per gallon every 4–6 weeks",
          frequency: "Fertilize every 3–4 weeks from spring through fall; pause in winter",
          bestTime: "Water in morning; fertilize in spring just as new growth begins for best response"
        }
      },
      ta: {
        name: "ஆரோக்கியமான செடி",
        plant: "மல்லிகை",
        description: "உங்கள் மல்லிகைச் செடி துரு, பூஞ்சை, பாக்டீரியா அல்லது வைரஸ் நோய்களின் எந்த அறிகுறியும் இன்றி ஆரோக்கியமாகச் செழித்து வளர்கிறது. இலைகள் அடர் பச்சை நிறத்துடனும் உறுதியான தன்மையுடனும், புள்ளிகள் அல்லது நிறமாற்றம் இன்றியும் உள்ளன. பூக்கும் பருவம் முழுவதும் அதிக மணமுள்ள பூக்களைப் பெற, தற்போதைய பராமரிப்பைத் தொடரவும்.",
        causes: ["நோய் எதுவும் கண்டறியப்படவில்லை"],
        fertilizer: "பூ ஊக்க உரம் (5-10-15) மற்றும் கூடுதலாக மெக்னீசியம் சல்பேட் (எப்சம் உப்பு)",
        treatment: [
          "ஆழமாக ஆனால் அடிக்கடி இல்லாமல் நீர் பாய்ச்சவும் — நீர்ப்பாசனங்களுக்கு இடையே மேல்மண் சற்று காயட்டும்",
          "வளரும் பருவத்தில் மாதம் ஒருமுறை அதிக பொட்டாசியம் கொண்ட உரம் இடவும்",
          "பூத்த பிறகு செடியை வடிவமைக்கவும் காற்றோட்டத்தை மேம்படுத்தவும் கவாத்து செய்யவும்",
          "புதிய தளிர்களில் அசுவினி மற்றும் வெள்ளை ஈ உள்ளதா என வாரந்தோறும் பார்க்கவும்",
          "பூஞ்சை மற்றும் பூச்சிப் பிரச்சனைகளைத் தடுக்க மாதம் ஒருமுறை வேப்பெண்ணெய் தெளிப்பைத் தெளிக்கவும்"
        ],
        usage: {
          quantity: "5-10-15: ஒரு லிட்டர் நீருக்கு 1 தேக்கரண்டி; எப்சம் உப்பு: 4–6 வாரங்களுக்கு ஒருமுறை ஒரு கேலனுக்கு 1 மேசைக்கரண்டி",
          frequency: "வசந்தம் முதல் இலையுதிர் காலம் வரை 3–4 வாரங்களுக்கு ஒருமுறை உரமிடவும்; குளிர்காலத்தில் நிறுத்தவும்",
          bestTime: "காலையில் நீர் பாய்ச்சவும்; சிறந்த பலனுக்கு புதிய வளர்ச்சி தொடங்கும் வசந்த காலத்தில் உரமிடவும்"
        }
      },
      te: {
        name: "ఆరోగ్యకరమైన మొక్క",
        plant: "మల్లె",
        description: "మీ మల్లె మొక్క తుప్పు, శిలీంధ్ర, బాక్టీరియా లేదా వైరస్ వ్యాధుల ఎలాంటి లక్షణాలు లేకుండా ఆరోగ్యంగా, బాగా పెరుగుతోంది. ఆకులు ముదురు ఆకుపచ్చ రంగు, గట్టి స్వభావంతో, మచ్చలు లేదా రంగు మార్పు లేకుండా ఉన్నాయి. పూల సీజన్ అంతా సమృద్ధిగా సువాసనగల పూలు పొందడానికి ప్రస్తుత సంరక్షణను కొనసాగించండి.",
        causes: ["ఎలాంటి వ్యాధి కనుగొనబడలేదు"],
        fertilizer: "పూత పెంచే ఎరువు (5-10-15) తో పాటు మెగ్నీషియం సల్ఫేట్ (ఎప్సమ్ ఉప్పు)",
        treatment: [
          "లోతుగా కానీ తరచుగా కాకుండా నీరు పోయండి — నీరు పోసే మధ్య పై మట్టి కొంత ఆరనివ్వండి",
          "పెరుగుదల సీజన్‌లో నెలకోసారి అధిక పొటాషియం ఎరువు వేయండి",
          "పూత తర్వాత మొక్కకు ఆకృతి ఇవ్వడానికి, గాలి ఆడేందుకు కత్తిరింపు చేయండి",
          "కొత్త చిగుర్లపై పేనుబంక, తెల్ల దోమ ఉన్నాయేమో వారానికోసారి చూడండి",
          "శిలీంధ్ర, పురుగు సమస్యలను నివారించడానికి నెలకోసారి వేప నూనె పిచికారీ చేయండి"
        ],
        usage: {
          quantity: "5-10-15: లీటరు నీటికి 1 టీస్పూన్; ఎప్సమ్ ఉప్పు: ప్రతి 4–6 వారాలకు గ్యాలన్‌కు 1 టేబుల్‌స్పూన్",
          frequency: "వసంతం నుండి శరదృతువు వరకు ప్రతి 3–4 వారాలకు ఎరువు వేయండి; శీతాకాలంలో ఆపండి",
          bestTime: "ఉదయం నీరు పోయండి; మంచి ఫలితానికి కొత్త పెరుగుదల మొదలయ్యే వసంతంలో ఎరువు వేయండి"
        }
      }
    }
  },

  // ── Fallback ──────────────────────────────────────────────────────────────

  "default": {
    severity: "Unknown",
    color: "from-green-900 to-teal-800",
    icon: "🌿",
    translations: {
      en: {
        name: "Disease Detected",
        plant: "Unknown",
        description: "A plant condition has been detected. Please consult a local agricultural extension officer or plant pathologist for a precise diagnosis and region-specific treatment recommendations.",
        causes: [
          "Fungal, bacterial, or viral pathogen",
          "Environmental stress (drought, waterlogging, temperature extremes)",
          "Nutrient deficiency or toxicity",
          "Pest damage creating entry points for secondary infections"
        ],
        fertilizer: "Consult local agricultural extension for specific recommendations",
        treatment: [
          "Isolate affected plants to prevent spread",
          "Remove and destroy severely infected plant material",
          "Improve drainage and air circulation around plants",
          "Apply broad-spectrum fungicide or copper bactericide as appropriate",
          "Consult your local agricultural extension service"
        ],
        usage: {
          quantity: "Follow product label instructions precisely",
          frequency: "As recommended by local agricultural experts based on disease severity",
          bestTime: "Early morning when plants are cool and wind is calm"
        }
      },
      ta: {
        name: "நோய் கண்டறியப்பட்டது",
        plant: "தெரியவில்லை",
        description: "தாவரத்தில் ஒரு பாதிப்பு கண்டறியப்பட்டுள்ளது. துல்லியமான நோய் கண்டறிதலுக்கும் உங்கள் பகுதிக்கு ஏற்ற சிகிச்சை பரிந்துரைகளுக்கும் உள்ளூர் வேளாண் விரிவாக்க அலுவலர் அல்லது தாவர நோயியல் நிபுணரை அணுகவும்.",
        causes: [
          "பூஞ்சை, பாக்டீரியா அல்லது வைரஸ் நோய்க்கிருமி",
          "சுற்றுச்சூழல் அழுத்தம் (வறட்சி, நீர் தேக்கம், மிகை வெப்பநிலை)",
          "ஊட்டச்சத்துக் குறைபாடு அல்லது மிகுதி",
          "இரண்டாம் நிலை தொற்றுகளுக்கு வழிவகுக்கும் பூச்சிச் சேதம்"
        ],
        fertilizer: "குறிப்பிட்ட பரிந்துரைகளுக்கு உள்ளூர் வேளாண் விரிவாக்க மையத்தை அணுகவும்",
        treatment: [
          "பரவாமல் தடுக்க பாதிக்கப்பட்ட செடிகளைத் தனிமைப்படுத்தவும்",
          "கடுமையாகப் பாதிக்கப்பட்ட செடிப் பகுதிகளை அகற்றி அழிக்கவும்",
          "செடிகளைச் சுற்றி வடிகால் மற்றும் காற்றோட்டத்தை மேம்படுத்தவும்",
          "தேவைக்கேற்ப பரந்த வீச்சு பூஞ்சைக்கொல்லி அல்லது காப்பர் பாக்டீரியா எதிர்ப்பு மருந்தைப் பயன்படுத்தவும்",
          "உங்கள் உள்ளூர் வேளாண் விரிவாக்கச் சேவையை அணுகவும்"
        ],
        usage: {
          quantity: "மருந்து லேபிளில் உள்ள வழிமுறைகளை துல்லியமாகப் பின்பற்றவும்",
          frequency: "நோயின் தீவிரத்தைப் பொறுத்து உள்ளூர் வேளாண் நிபுணர்கள் பரிந்துரைப்படி",
          bestTime: "செடிகள் குளிர்ச்சியாகவும் காற்று அமைதியாகவும் இருக்கும் அதிகாலை நேரம்"
        }
      },
      te: {
        name: "వ్యాధి గుర్తించబడింది",
        plant: "తెలియదు",
        description: "మొక్కలో ఒక సమస్య గుర్తించబడింది. ఖచ్చితమైన నిర్ధారణ మరియు మీ ప్రాంతానికి తగిన చికిత్స సిఫార్సుల కోసం స్థానిక వ్యవసాయ విస్తరణ అధికారిని లేదా మొక్కల వ్యాధి నిపుణుడిని సంప్రదించండి.",
        causes: [
          "శిలీంధ్ర, బాక్టీరియా లేదా వైరస్ క్రిమి",
          "పర్యావరణ ఒత్తిడి (కరువు, నీరు నిలవడం, తీవ్ర ఉష్ణోగ్రతలు)",
          "పోషకాల లోపం లేదా అధికం",
          "ద్వితీయ ఇన్ఫెక్షన్లకు దారితీసే పురుగుల నష్టం"
        ],
        fertilizer: "నిర్దిష్ట సిఫార్సుల కోసం స్థానిక వ్యవసాయ విస్తరణ కేంద్రాన్ని సంప్రదించండి",
        treatment: [
          "వ్యాప్తి నివారించడానికి సోకిన మొక్కలను వేరుచేయండి",
          "తీవ్రంగా సోకిన మొక్క భాగాలను తీసివేసి నాశనం చేయండి",
          "మొక్కల చుట్టూ నీటి పారుదల, గాలి ప్రసరణ మెరుగుపరచండి",
          "అవసరాన్ని బట్టి విస్తృత వర్ణపట శిలీంధ్రనాశిని లేదా కాపర్ బాక్టీరియా నివారణ మందు వాడండి",
          "మీ స్థానిక వ్యవసాయ విస్తరణ సేవను సంప్రదించండి"
        ],
        usage: {
          quantity: "మందు లేబుల్‌పై ఉన్న సూచనలను ఖచ్చితంగా పాటించండి",
          frequency: "వ్యాధి తీవ్రతను బట్టి స్థానిక వ్యవసాయ నిపుణుల సూచన ప్రకారం",
          bestTime: "మొక్కలు చల్లగా, గాలి ప్రశాంతంగా ఉండే తెల్లవారుజాము"
        }
      }
    }
  }
};

// ── Helpers ─────────────────────────────────────────────────────────────────

const normalizeLang = (lang) =>
  SUPPORTED_LANGUAGES.some((l) => l.code === lang) ? lang : DEFAULT_LANGUAGE;

/**
 * Returns a flat object in the requested language, e.g.
 * { name, plant, description, causes, fertilizer, treatment, usage,
 *   severity, severityLabel, color, icon, lang }
 * so existing components keep working — just pass the language as 2nd argument.
 */
export const getDiseaseInfo = (label, lang = DEFAULT_LANGUAGE) => {
  const code = normalizeLang(lang);
  const key = label ? label.trim() : null;
  const entry = key && diseaseDatabase[key] ? diseaseDatabase[key] : null;
  const source = entry || diseaseDatabase["default"];

  const text = { ...(source.translations[code] || source.translations[DEFAULT_LANGUAGE]) };

  // Unknown label: show the raw label as the disease name
  if (!entry && key) text.name = key;

  return {
    ...text,
    severity: source.severity, // stable English key (use with getSeverityColor)
    severityLabel: uiText[code].severityLevels[source.severity] || source.severity,
    color: source.color,
    icon: source.icon,
    lang: code,
  };
};

export const getUiText = (lang = DEFAULT_LANGUAGE) => uiText[normalizeLang(lang)];

export const getSeverityLabel = (severity, lang = DEFAULT_LANGUAGE) =>
  uiText[normalizeLang(lang)].severityLevels[severity] || severity;

export const getSeverityColor = (severity) => {
  switch (severity) {
    case 'Critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
    case 'High':     return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
    case 'Moderate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'None':     return 'text-green-400 bg-green-400/10 border-green-400/30';
    default:         return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
  }
};