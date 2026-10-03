// translations.js — All UI strings for English, Tamil, and Telugu

const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      classification: 'Classification',
      about: 'About',
      analyzePlant: 'Analyze Plant',
    },

    // Footer
    footer: {
      tagline: 'AI-powered plant disease detection to help farmers protect crops and maximize yield.',
      navigation: 'Navigation',
      poweredBy: 'Powered By',
      builtWith: 'Built with',
      forFarmers: 'for farmers & agriculture',
      copyright: 'PlantAI · Disease Classifier',
    },

    // Home Page
    home: {
      badge: 'AI-Powered Plant Disease Detection',
      title1: 'Plant Disease',
      title2: 'Classifier',
      description:
        'Upload a photo of your plant and get instant AI-powered disease diagnosis with expert treatment recommendations — helping farmers protect crops and increase yield.',
      benefits: ['Early Detection', 'Higher Yield', 'Less Crop Loss', 'Expert Treatment'],
      getStarted: "Get Started — It's Free",
      howItWorks: 'How It Works',
      scroll: 'Scroll',

      // Benefits section
      whyUse: 'Why Use',
      whySubtitle:
        'Early detection saves crops. Our AI model analyzes plant images in seconds and provides actionable treatment advice.',
      stats: {
        diseases: 'Plant Diseases Detected',
        time: 'Analysis Time',
        accuracy: 'Accuracy Rate',
        free: 'Free to Use',
      },
      features: {
        earlyDetection: {
          title: 'Early Disease Detection',
          description:
            'Identify plant diseases at early stages before they spread, giving you time to act and save your crop from significant damage.',
        },
        cropYield: {
          title: 'Increase Crop Yield',
          description:
            'Timely treatment based on accurate diagnosis helps maintain healthy plants, leading to better quality produce and higher yields per acre.',
        },
        reduceLoss: {
          title: 'Reduce Crop Loss',
          description:
            'Minimize financial losses by treating the right disease with the right product — avoid guesswork that wastes money and time.',
        },
        expertAdvice: {
          title: 'Expert Treatment Advice',
          description:
            'Get specific fertilizer recommendations, dosage, frequency, and best time to apply — tailored to the detected disease.',
        },
        multipleInput: {
          title: 'Multiple Input Methods',
          description:
            'Upload a photo, capture with your camera, or use live video detection. Works on mobile phones right in the field.',
        },
        worksAnywhere: {
          title: 'Works Anywhere',
          description:
            'Fully browser-based with no app installation needed. Works on any device with a camera — perfect for field use.',
        },
      },

      // How it works section
      howItWorksTitle: 'How It',
      howItWorksHighlight: 'Works',
      howSubtitle: 'Three simple steps to diagnose your plant',
      steps: [
        {
          title: 'Upload Image',
          desc: 'Take a photo or upload an image of your plant leaf showing symptoms.',
        },
        {
          title: 'AI Analysis',
          desc: 'Our deep learning model analyzes the image using a trained disease classifier.',
        },
        {
          title: 'Get Treatment',
          desc: 'Receive detailed disease info, causes, and precise treatment recommendations.',
        },
      ],
      tryItNow: 'Try It Now',

      // Supported plants section
      supportedPlants: 'Supported',
      supportedHighlight: 'Plants',
      supportedSubtitle: 'Detects diseases across Chrysanthemum and Jasmine — with 6 disease classes',
      plantClasses: [
        { emoji: '🌸', name: 'Chrysanthemum — Bacterial Leaf Spot' },
        { emoji: '🌸', name: 'Chrysanthemum — Septoria Leaf Spot' },
        { emoji: '✅', name: 'Chrysanthemum — Healthy' },
        { emoji: '🌼', name: 'Jasmine — Rust' },
        { emoji: '🌼', name: 'Jasmine — Multiple Diseases' },
        { emoji: '✅', name: 'Jasmine — Healthy' },
      ],
    },

    // About Page
    about: {
      badge: 'About PlantAI',
      title: 'Helping Farmers with',
      titleHighlight: 'AI',
      description:
        'PlantAI is a free, browser-based plant disease detection tool powered by a deep learning model trained on thousands of plant disease images. Our mission is to make agricultural expertise accessible to every farmer, anywhere in the world.',

      whatIsTitle: 'What is Plant Disease Classification?',
      whatIsP1:
        'Plant disease classification is the process of automatically identifying diseases in plants from images using computer vision and machine learning. Traditional diagnosis requires a trained agronomist physically examining the plant — which is expensive, slow, and not always accessible to small-scale farmers.',
      whatIsP2:
        'With deep learning, a trained neural network can analyze a photo of a plant leaf and identify the disease (or confirm healthy status) within seconds — with accuracy comparable to expert agronomists in controlled conditions.',

      whyItMatters: 'Why It Matters',
      benefits: [
        {
          title: 'Early Detection Saves Crops',
          desc: 'Plant diseases can spread from a few infected plants to an entire field within days. Early detection allows targeted treatment before widespread damage occurs, saving 40–80% of what would otherwise be lost.',
        },
        {
          title: 'Higher Yield for Farmers',
          desc: 'Untreated plant diseases reduce global crop yield by 20–40% annually. Timely disease management directly translates to more food and income for farming families.',
        },
        {
          title: 'Reduces Crop Loss',
          desc: 'Knowing the exact disease enables targeted treatment rather than blanket pesticide use, reducing chemical costs, environmental impact, and resistance development.',
        },
        {
          title: 'Sustainable Agriculture',
          desc: 'Precision agriculture enabled by AI helps farmers apply exactly the right treatment at the right time — reducing overuse of chemicals and protecting soil health for future seasons.',
        },
      ],

      techStackTitle: 'Technology Stack',
      techStack: [
        { emoji: '⚛️', name: 'React.js', desc: 'UI Framework' },
        { emoji: '🎨', name: 'Tailwind CSS', desc: 'Styling' },
        { emoji: '🤗', name: 'Hugging Face', desc: 'AI Model Host' },
        { emoji: '🔗', name: 'Axios', desc: 'API Calls' },
        { emoji: '📷', name: 'WebRTC', desc: 'Camera API' },
        { emoji: '⚡', name: 'Vite', desc: 'Build Tool' },
        { emoji: '🧠', name: 'CNN Model', desc: 'Deep Learning' },
        { emoji: '🌐', name: 'Gradio API', desc: 'HF Spaces' },
      ],

      aiModelTitle: 'About the AI Model',
      aiModelP1a: 'The disease classification model is hosted on',
      aiModelHF: 'Hugging Face Spaces',
      aiModelP1b: 'by',
      aiModelAuthor: 'Naveen2916',
      aiModelP1c: '. It uses a Convolutional Neural Network (CNN) trained on the',
      aiModelDataset: 'PlantVillage dataset',
      aiModelP1d:
        '— a publicly available benchmark dataset containing over 54,000 images of healthy and diseased plant leaves.',
      aiModelP2a: 'The model can identify',
      aiModelClasses: '38+ classes',
      aiModelP2b:
        'of plant diseases across multiple crops including Apple, Corn, Tomato, Potato, Rice, Wheat, Grape, and more. It provides confidence scores for each prediction, allowing you to assess reliability.',
      disclaimer: '⚠️ Disclaimer',
      disclaimerText:
        'This tool is intended as a decision-support aid, not a replacement for professional agricultural advice. For critical crop decisions, please consult a certified agronomist or your local agricultural extension office.',

      ctaTitle: 'Ready to Protect Your Crops?',
      ctaDesc: 'Use our free AI classifier to detect plant diseases instantly and get expert treatment recommendations.',
      ctaButton: 'Start Analyzing',
    },

    // Classify Page
    classify: {
      badge: 'AI Disease Classifier',
      title: 'Analyze Your',
      titleHighlight: 'Plant',
      description: 'Upload a clear photo of your plant leaf to detect diseases and get expert treatment advice.',

      tabs: {
        upload: 'Upload Image',
        capture: 'Capture Photo',
        live: 'Live Detection',
      },

      upload: {
        dropPrompt: 'Drop image here or click to browse',
        formatHint: 'JPG, PNG, WebP — max 10MB',
        analyzed: 'Analyzed',
      },

      camera: {
        openCamera: 'Open Camera',
        captureAnalyze: 'Capture & Analyze',
        preview: 'Camera preview will appear here',
      },

      live: {
        start: 'Start Live Detection',
        captureFrame: 'Capture & Analyze Frame',
        analyzing: 'Analyzing...',
        stream: 'Live detection stream will appear here',
        analyzingFrame: 'Analyzing frame...',
      },

      analyze: {
        button: 'Analyze Disease',
        loading: 'Analyzing Plant…',
        another: 'Analyze Another Plant',
      },

      loading: {
        title: 'Analyzing Your Plant',
        subtitle: 'Our AI is examining the image for disease patterns…',
        timeNote: 'This may take 15–30 seconds on first run',
      },

      ready: {
        title: 'Ready to Analyze',
        subtitle: 'Upload or capture a plant image to get started with AI disease detection.',
      },

      history: 'Recent Analyses',

      tips: {
        heading: '📌 Tips for Best Results',
        items: [
          'Use clear, well-lit images of affected leaves',
          'Capture only the leaf — avoid soil or background clutter',
          'Zoom in on the diseased area for better accuracy',
          'JPG or PNG formats work best',
        ],
      },

      result: {
        healthy: '✓ Healthy',
        severity: '⚠',
        diseaseDescription: 'Disease Description',
        causes: 'Causes',
        treatment: 'Treatment & Fertilizer',
        recommendedProduct: 'Recommended Product',
        howToUseFertilizer: 'How to Use Fertilizer',
        quantity: 'Quantity',
        frequency: 'Frequency',
        bestTime: 'Best Time',
        downloadReport: 'Download Report',
        confidence: 'confidence',
      },
    },

    // Chatbot
    chatbot: {
      title: 'PlantAI Assistant',
      online: 'Online — Ask me anything',
      welcome: "🌿 Hi! I'm your PlantAI Assistant. Ask me about plant diseases, treatments, fertilizers, or how to use the classifier!",
      placeholder: 'Ask about plant diseases…',
      send: 'Send',
      error: 'Sorry, something went wrong. Please try again.',
      powered: 'Powered by Cloudflare AI',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TAMIL
  // ─────────────────────────────────────────────────────────────────────────
  ta: {
    nav: {
      home: 'முகப்பு',
      classification: 'வகைப்படுத்தல்',
      about: 'எங்களைப் பற்றி',
      analyzePlant: 'செடியை பகுப்பாய்வு செய்',
    },

    footer: {
      tagline:
        'விவசாயிகள் பயிர்களை பாதுகாக்கவும் மகசூலை அதிகரிக்கவும் உதவும் AI-சக்திவாய்ந்த தாவர நோய் கண்டறிதல்.',
      navigation: 'வழிசெலுத்தல்',
      poweredBy: 'இயக்குவது',
      builtWith: 'கட்டமைக்கப்பட்டது',
      forFarmers: 'விவசாயிகளுக்காக',
      copyright: 'PlantAI · நோய் வகைப்படுத்தி',
    },

    home: {
      badge: 'AI-சக்திவாய்ந்த தாவர நோய் கண்டறிதல்',
      title1: 'தாவர நோய்',
      title2: 'வகைப்படுத்தி',
      description:
        'உங்கள் தாவரத்தின் புகைப்படத்தை பதிவேற்றி, நிபுணர் சிகிச்சை பரிந்துரைகளுடன் உடனடி AI-சக்திவாய்ந்த நோய் நோக்கறிவு பெறுங்கள்.',
      benefits: ['முன்கூட்டிய கண்டறிதல்', 'அதிக மகசூல்', 'குறைவான பயிர் இழப்பு', 'நிபுணர் சிகிச்சை'],
      getStarted: 'தொடங்குங்கள் — இலவசம்',
      howItWorks: 'எப்படி செயல்படுகிறது',
      scroll: 'உருட்டுங்கள்',

      whyUse: 'ஏன் பயன்படுத்த வேண்டும்',
      whySubtitle:
        'முன்கூட்டிய கண்டறிதல் பயிர்களை காப்பாற்றுகிறது. எங்கள் AI மாதிரி நொடியில் தாவர படங்களை பகுப்பாய்வு செய்து செயல்படக்கூடிய சிகிச்சை ஆலோசனை வழங்குகிறது.',
      stats: {
        diseases: 'தாவர நோய்கள் கண்டறியப்பட்டன',
        time: 'பகுப்பாய்வு நேரம்',
        accuracy: 'துல்லியம்',
        free: 'இலவசமாக பயன்படுத்தலாம்',
      },
      features: {
        earlyDetection: {
          title: 'முன்கூட்டிய நோய் கண்டறிதல்',
          description:
            'நோய்கள் பரவுவதற்கு முன்பே ஆரம்ப கட்டத்தில் தாவர நோய்களை கண்டறிந்து, உங்கள் பயிரை காப்பாற்ற நேரம் பெறுங்கள்.',
        },
        cropYield: {
          title: 'பயிர் மகசூல் அதிகரிக்கவும்',
          description:
            'துல்லியமான நோக்கறிவு அடிப்படையிலான சரியான நேர சிகிச்சை ஆரோக்கியமான தாவர்களை பராமரிக்க உதவுகிறது.',
        },
        reduceLoss: {
          title: 'பயிர் இழப்பை குறைக்கவும்',
          description:
            'சரியான நோய்க்கு சரியான தயாரிப்பு மூலம் சிகிச்சையளிப்பதன் மூலம் நிதி இழப்புகளை குறைக்கவும்.',
        },
        expertAdvice: {
          title: 'நிபுணர் சிகிச்சை ஆலோசனை',
          description:
            'கண்டறியப்பட்ட நோய்க்கு ஏற்ப குறிப்பிட்ட உர பரிந்துரைகள், அளவு, அதிர்வெண் மற்றும் சிறந்த நேரம் பெறுங்கள்.',
        },
        multipleInput: {
          title: 'பல உள்ளீட்டு முறைகள்',
          description:
            'புகைப்படம் பதிவேற்றுங்கள், கேமராவில் படம் எடுங்கள் அல்லது நேரடி வீடியோ கண்டறிதல் பயன்படுத்துங்கள்.',
        },
        worksAnywhere: {
          title: 'எங்கும் செயல்படும்',
          description:
            'முழுமையாக browser-அடிப்படையில் — app நிறுவல் தேவையில்லை. கேமரா உள்ள எந்த சாதனத்திலும் செயல்படும்.',
        },
      },

      howItWorksTitle: 'எவ்வாறு',
      howItWorksHighlight: 'செயல்படுகிறது',
      howSubtitle: 'உங்கள் தாவரத்தை நோக்கறிய மூன்று எளிய படிகள்',
      steps: [
        {
          title: 'படம் பதிவேற்றுங்கள்',
          desc: 'அறிகுறிகளுடன் உங்கள் தாவர இலையின் புகைப்படம் எடுங்கள் அல்லது பதிவேற்றுங்கள்.',
        },
        {
          title: 'AI பகுப்பாய்வு',
          desc: 'எங்கள் deep learning மாதிரி பயிற்சி பெற்ற நோய் வகைப்படுத்தி மூலம் படத்தை பகுப்பாய்வு செய்கிறது.',
        },
        {
          title: 'சிகிச்சை பெறுங்கள்',
          desc: 'விரிவான நோய் தகவல், காரணங்கள் மற்றும் துல்லியமான சிகிச்சை பரிந்துரைகள் பெறுங்கள்.',
        },
      ],
      tryItNow: 'இப்போதே முயற்சிக்கவும்',

      supportedPlants: 'ஆதரிக்கப்படும்',
      supportedHighlight: 'தாவரங்கள்',
      supportedSubtitle:
        'செவந்தி மற்றும் மல்லிகை ஆகியவற்றில் நோய்களை கண்டறிகிறது — 6 நோய் வகைகளில்',
      plantClasses: [
        { emoji: '🌸', name: 'செவந்தி — பாக்டீரியல் இலை புள்ளி' },
        { emoji: '🌸', name: 'செவந்தி — செப்டோரியா இலை புள்ளி' },
        { emoji: '✅', name: 'செவந்தி — ஆரோக்கியம்' },
        { emoji: '🌼', name: 'மல்லிகை — துரு நோய்' },
        { emoji: '🌼', name: 'மல்லிகை — பல நோய்கள்' },
        { emoji: '✅', name: 'மல்லிகை — ஆரோக்கியம்' },
      ],
    },

    about: {
      badge: 'PlantAI பற்றி',
      title: 'விவசாயிகளுக்கு உதவுகிறோம்',
      titleHighlight: 'AI மூலம்',
      description:
        'PlantAI என்பது ஆயிரக்கணக்கான தாவர நோய் படங்களில் பயிற்சி பெற்ற deep learning மாதிரி மூலம் இயங்கும் இலவச, browser-அடிப்படையிலான தாவர நோய் கண்டறிதல் கருவி.',

      whatIsTitle: 'தாவர நோய் வகைப்படுத்தல் என்றால் என்ன?',
      whatIsP1:
        'தாவர நோய் வகைப்படுத்தல் என்பது computer vision மற்றும் machine learning பயன்படுத்தி படங்களில் இருந்து தாவரங்களில் நோய்களை தானாக கண்டறியும் செயல்முறையாகும்.',
      whatIsP2:
        'Deep learning மூலம், ஒரு பயிற்சி பெற்ற நரம்பியல் வலையமைப்பு தாவர இலையின் புகைப்படத்தை பகுப்பாய்வு செய்து நொடிகளில் நோயை கண்டறியலாம்.',

      whyItMatters: 'ஏன் முக்கியம்',
      benefits: [
        {
          title: 'முன்கூட்டிய கண்டறிதல் பயிர்களை காப்பாற்றுகிறது',
          desc: 'தாவர நோய்கள் சில பாதிக்கப்பட்ட தாவரங்களில் இருந்து நாட்களில் முழு வயல்வெளிக்கும் பரவலாம். முன்கூட்டிய கண்டறிதல் 40–80% இழப்பை தடுக்கலாம்.',
        },
        {
          title: 'விவசாயிகளுக்கு அதிக மகசூல்',
          desc: 'சிகிச்சையளிக்கப்படாத தாவர நோய்கள் ஆண்டுதோறும் உலகளாவிய பயிர் மகசூலை 20–40% குறைக்கின்றன.',
        },
        {
          title: 'பயிர் இழப்பை குறைக்கிறது',
          desc: 'சரியான நோயை அறிவது இலக்கு சிகிச்சைக்கு உதவுகிறது, chemicals பயன்பாட்டை குறைக்கிறது.',
        },
        {
          title: 'நிலையான விவசாயம்',
          desc: 'AI-சட்டகமிட்ட துல்லிய விவசாயம் சரியான நேரத்தில் சரியான சிகிச்சை செய்ய உதவுகிறது.',
        },
      ],

      techStackTitle: 'தொழில்நுட்ப அடுக்கு',
      techStack: [
        { emoji: '⚛️', name: 'React.js', desc: 'UI கட்டமைப்பு' },
        { emoji: '🎨', name: 'Tailwind CSS', desc: 'வடிவமைப்பு' },
        { emoji: '🤗', name: 'Hugging Face', desc: 'AI மாதிரி' },
        { emoji: '🔗', name: 'Axios', desc: 'API அழைப்புகள்' },
        { emoji: '📷', name: 'WebRTC', desc: 'கேமரா API' },
        { emoji: '⚡', name: 'Vite', desc: 'Build கருவி' },
        { emoji: '🧠', name: 'CNN மாதிரி', desc: 'ஆழமான கற்றல்' },
        { emoji: '🌐', name: 'Gradio API', desc: 'HF Spaces' },
      ],

      aiModelTitle: 'AI மாதிரி பற்றி',
      aiModelP1a: 'நோய் வகைப்படுத்தல் மாதிரி',
      aiModelHF: 'Hugging Face Spaces',
      aiModelP1b: 'இல் இல்',
      aiModelAuthor: 'Naveen2916',
      aiModelP1c: 'என்பவரால் host செய்யப்பட்டுள்ளது. இது',
      aiModelDataset: 'PlantVillage dataset',
      aiModelP1d: 'இல் பயிற்சி பெற்ற CNN பயன்படுத்துகிறது.',
      aiModelP2a: 'மாதிரி',
      aiModelClasses: '38+ வகைகளின்',
      aiModelP2b: 'தாவர நோய்களை கண்டறியலாம். ஒவ்வொரு கணிக்கலுக்கும் நம்பிக்கை மதிப்பெண்கள் வழங்கப்படுகின்றன.',
      disclaimer: '⚠️ மறுப்பு',
      disclaimerText:
        'இந்த கருவி முடிவு-ஆதரவு உதவியாக மட்டும் நோக்கப்படுகிறது, professional விவசாய ஆலோசனைக்கு மாற்றாக அல்ல.',

      ctaTitle: 'உங்கள் பயிர்களை பாதுகாக்க தயாரா?',
      ctaDesc: 'தாவர நோய்களை உடனடியாக கண்டறிய எங்கள் இலவச AI வகைப்படுத்தியை பயன்படுத்துங்கள்.',
      ctaButton: 'பகுப்பாய்வு தொடங்கவும்',
    },

    classify: {
      badge: 'AI நோய் வகைப்படுத்தி',
      title: 'உங்கள் தாவரத்தை',
      titleHighlight: 'பகுப்பாய்வு செய்யுங்கள்',
      description: 'நோய்களை கண்டறியவும் நிபுணர் சிகிச்சை ஆலோசனை பெறவும் தாவர இலையின் தெளிவான புகைப்படத்தை பதிவேற்றுங்கள்.',

      tabs: {
        upload: 'படம் பதிவேற்று',
        capture: 'புகைப்படம் எடு',
        live: 'நேரடி கண்டறிதல்',
      },

      upload: {
        dropPrompt: 'படத்தை இங்கே இழுக்கவும் அல்லது browse செய்யவும்',
        formatHint: 'JPG, PNG, WebP — max 10MB',
        analyzed: 'பகுப்பாய்வு செய்யப்பட்டது',
      },

      camera: {
        openCamera: 'கேமரா திறக்கவும்',
        captureAnalyze: 'படம் எடுத்து பகுப்பாய்வு செய்யுங்கள்',
        preview: 'கேமரா preview இங்கே தோன்றும்',
      },

      live: {
        start: 'நேரடி கண்டறிதல் தொடங்கு',
        captureFrame: 'Frame எடுத்து பகுப்பாய்வு செய்யுங்கள்',
        analyzing: 'பகுப்பாய்வு செய்கிறது...',
        stream: 'நேரடி கண்டறிதல் stream இங்கே தோன்றும்',
        analyzingFrame: 'Frame பகுப்பாய்வு செய்கிறது...',
      },

      analyze: {
        button: 'நோயை பகுப்பாய்வு செய்யுங்கள்',
        loading: 'தாவரத்தை பகுப்பாய்வு செய்கிறது…',
        another: 'மற்றொரு தாவரத்தை பகுப்பாய்வு செய்யுங்கள்',
      },

      loading: {
        title: 'உங்கள் தாவரத்தை பகுப்பாய்வு செய்கிறோம்',
        subtitle: 'எங்கள் AI நோய் வடிவங்களுக்காக படத்தை ஆய்வு செய்கிறது…',
        timeNote: 'முதல் முறை இயக்கத்தில் 15–30 நொடிகள் ஆகலாம்',
      },

      ready: {
        title: 'பகுப்பாய்வுக்கு தயார்',
        subtitle: 'AI நோய் கண்டறிதல் தொடங்க தாவர படத்தை பதிவேற்றுங்கள் அல்லது படம் எடுங்கள்.',
      },

      history: 'சமீபத்திய பகுப்பாய்வுகள்',

      tips: {
        heading: '📌 சிறந்த முடிவுகளுக்கான குறிப்புகள்',
        items: [
          'பாதிக்கப்பட்ட இலைகளின் தெளிவான, நன்கு வெளிச்சமுள்ள படங்களை பயன்படுத்துங்கள்',
          'மண் அல்லது பின்னணி குழப்பம் இல்லாமல் இலையை மட்டும் படம் எடுங்கள்',
          'சிறந்த துல்லியத்திற்கு நோய் தாக்கிய பகுதியை zoom செய்யுங்கள்',
          'JPG அல்லது PNG வடிவங்கள் சிறப்பாக செயல்படும்',
        ],
      },

      result: {
        healthy: '✓ ஆரோக்கியம்',
        severity: '⚠',
        diseaseDescription: 'நோய் விவரம்',
        causes: 'காரணங்கள்',
        treatment: 'சிகிச்சை மற்றும் உரம்',
        recommendedProduct: 'பரிந்துரைக்கப்பட்ட தயாரிப்பு',
        howToUseFertilizer: 'உரத்தை எவ்வாறு பயன்படுத்துவது',
        quantity: 'அளவு',
        frequency: 'அதிர்வெண்',
        bestTime: 'சிறந்த நேரம்',
        downloadReport: 'அறிக்கை பதிவிறக்கம்',
        confidence: 'நம்பிக்கை',
      },
    },

    // Chatbot
    chatbot: {
      title: 'PlantAI உதவியாளர்',
      online: 'ஆன்லைன் — எதையும் கேளுங்கள்',
      welcome: '🌿 வணக்கம்! நான் உங்கள் PlantAI உதவியாளர். தாவர நோய்கள், சிகிச்சை, உரங்கள் அல்லது வகைப்படுத்தியை எவ்வாறு பயன்படுத்துவது என்று கேளுங்கள்!',
      placeholder: 'தாவர நோய்களைப் பற்றி கேளுங்கள்…',
      send: 'அனுப்பு',
      error: 'மன்னிக்கவும், ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.',
      powered: 'Cloudflare AI மூலம் இயக்கப்படுகிறது',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TELUGU
  // ─────────────────────────────────────────────────────────────────────────
  te: {
    nav: {
      home: 'హోమ్',
      classification: 'వర్గీకరణ',
      about: 'మా గురించి',
      analyzePlant: 'మొక్కను విశ్లేషించండి',
    },

    footer: {
      tagline: 'రైతులు పంటలను రక్షించడానికి మరియు దిగుబడిని పెంచడానికి AI-ఆధారిత మొక్క వ్యాధి గుర్తింపు.',
      navigation: 'నావిగేషన్',
      poweredBy: 'నడిపించేది',
      builtWith: 'నిర్మించబడింది',
      forFarmers: 'రైతులు & వ్యవసాయం కోసం',
      copyright: 'PlantAI · వ్యాధి వర్గీకరణకర్త',
    },

    home: {
      badge: 'AI-ఆధారిత మొక్క వ్యాధి గుర్తింపు',
      title1: 'మొక్క వ్యాధి',
      title2: 'వర్గీకరణకర్త',
      description:
        'మీ మొక్క ఫోటో అప్‌లోడ్ చేసి, నిపుణుల చికిత్స సిఫార్సులతో తక్షణ AI-ఆధారిత వ్యాధి నిర్ధారణ పొందండి.',
      benefits: ['ముందస్తు గుర్తింపు', 'అధిక దిగుబడి', 'తక్కువ పంట నష్టం', 'నిపుణుడి చికిత్స'],
      getStarted: 'ప్రారంభించండి — ఉచితం',
      howItWorks: 'ఇది ఎలా పనిచేస్తుంది',
      scroll: 'స్క్రోల్',

      whyUse: 'ఎందుకు ఉపయోగించాలి',
      whySubtitle:
        'ముందస్తు గుర్తింపు పంటలను రక్షిస్తుంది. మా AI మోడల్ సెకన్లలో మొక్క చిత్రాలను విశ్లేషించి చర్య తీసుకోగలిగే చికిత్స సలహా అందిస్తుంది.',
      stats: {
        diseases: 'మొక్క వ్యాధులు గుర్తింపబడ్డాయి',
        time: 'విశ్లేషణ సమయం',
        accuracy: 'ఖచ్చితత్వం',
        free: 'ఉచితంగా ఉపయోగించవచ్చు',
      },
      features: {
        earlyDetection: {
          title: 'ముందస్తు వ్యాధి గుర్తింపు',
          description:
            'వ్యాధులు వ్యాపించే ముందే ప్రారంభ దశలో మొక్క వ్యాధులను గుర్తించి, మీ పంటను రక్షించుకోండి.',
        },
        cropYield: {
          title: 'పంట దిగుబడి పెంచండి',
          description:
            'ఖచ్చితమైన నిర్ధారణ ఆధారంగా సమయానికి చికిత్స ఆరోగ్యకరమైన మొక్కలను నిర్వహించడంలో సహాయపడుతుంది.',
        },
        reduceLoss: {
          title: 'పంట నష్టాన్ని తగ్గించండి',
          description:
            'సరైన వ్యాధికి సరైన ఉత్పత్తితో చికిత్స చేయడం ద్వారా ఆర్థిక నష్టాలను తగ్గించండి.',
        },
        expertAdvice: {
          title: 'నిపుణుడి చికిత్స సలహా',
          description:
            'గుర్తించిన వ్యాధికి అనుగుణంగా నిర్దిష్ట ఎరువు సిఫార్సులు, మోతాదు మరియు ఉత్తమ సమయం పొందండి.',
        },
        multipleInput: {
          title: 'బహుళ ఇన్‌పుట్ పద్ధతులు',
          description:
            'ఫోటో అప్‌లోడ్ చేయండి, కెమెరాతో తీయండి లేదా లైవ్ వీడియో గుర్తింపు ఉపయోగించండి.',
        },
        worksAnywhere: {
          title: 'ఎక్కడైనా పనిచేస్తుంది',
          description:
            'పూర్తిగా browser-ఆధారితం — app ఇన్‌స్టాలేషన్ అవసరం లేదు. కెమెరా ఉన్న ఏ పరికరంలోనైనా పనిచేస్తుంది.',
        },
      },

      howItWorksTitle: 'ఎలా',
      howItWorksHighlight: 'పనిచేస్తుంది',
      howSubtitle: 'మీ మొక్కను నిర్ధారించడానికి మూడు సరళమైన దశలు',
      steps: [
        {
          title: 'చిత్రం అప్‌లోడ్ చేయండి',
          desc: 'లక్షణాలు చూపే మీ మొక్క ఆకు ఫోటో తీయండి లేదా అప్‌లోడ్ చేయండి.',
        },
        {
          title: 'AI విశ్లేషణ',
          desc: 'మా deep learning మోడల్ శిక్షణ పొందిన వ్యాధి వర్గీకరణకర్తను ఉపయోగించి చిత్రాన్ని విశ్లేషిస్తుంది.',
        },
        {
          title: 'చికిత్స పొందండి',
          desc: 'వివరణాత్మక వ్యాధి సమాచారం, కారణాలు మరియు ఖచ్చితమైన చికిత్స సిఫార్సులు పొందండి.',
        },
      ],
      tryItNow: 'ఇప్పుడే ప్రయత్నించండి',

      supportedPlants: 'మద్దతు ఉన్న',
      supportedHighlight: 'మొక్కలు',
      supportedSubtitle:
        'చంద్రమల్లి మరియు మల్లె అంతటా వ్యాధులను గుర్తిస్తుంది — 6 వ్యాధి తరగతులతో',
      plantClasses: [
        { emoji: '🌸', name: 'చంద్రమల్లి — బ్యాక్టీరియల్ ఆకు మచ్చ' },
        { emoji: '🌸', name: 'చంద్రమల్లి — సెప్టోరియా ఆకు మచ్చ' },
        { emoji: '✅', name: 'చంద్రమల్లి — ఆరోగ్యకరమైనది' },
        { emoji: '🌼', name: 'మల్లె — తుప్పు వ్యాధి' },
        { emoji: '🌼', name: 'మల్లె — బహుళ వ్యాధులు' },
        { emoji: '✅', name: 'మల్లె — ఆరోగ్యకరమైనది' },
      ],
    },

    about: {
      badge: 'PlantAI గురించి',
      title: 'రైతులకు సహాయపడుతున్నాము',
      titleHighlight: 'AI తో',
      description:
        'PlantAI అనేది వేలాది మొక్క వ్యాధి చిత్రాలతో శిక్షణ పొందిన deep learning మోడల్ ద్వారా నడిచే ఉచిత, browser-ఆధారిత మొక్క వ్యాధి గుర్తింపు సాధనం.',

      whatIsTitle: 'మొక్క వ్యాధి వర్గీకరణ అంటే ఏమిటి?',
      whatIsP1:
        'మొక్క వ్యాధి వర్గీకరణ అనేది computer vision మరియు machine learning ఉపయోగించి చిత్రాల నుండి మొక్కలలో వ్యాధులను స్వయంచాలకంగా గుర్తించే ప్రక్రియ.',
      whatIsP2:
        'Deep learning తో, శిక్షణ పొందిన నాడీ వలయం మొక్క ఆకు ఫోటోను విశ్లేషించి సెకన్లలో వ్యాధిని గుర్తించగలదు.',

      whyItMatters: 'ఎందుకు ముఖ్యమైనది',
      benefits: [
        {
          title: 'ముందస్తు గుర్తింపు పంటలను రక్షిస్తుంది',
          desc: 'మొక్క వ్యాధులు కొన్ని సోకిన మొక్కల నుండి రోజుల్లో మొత్తం పొలానికి వ్యాపించవచ్చు. ముందస్తు గుర్తింపు 40–80% నష్టాన్ని నివారించవచ్చు.',
        },
        {
          title: 'రైతులకు అధిక దిగుబడి',
          desc: 'చికిత్స లేని మొక్క వ్యాధులు ప్రతి సంవత్సరం ప్రపంచ పంట దిగుబడిని 20–40% తగ్గిస్తాయి.',
        },
        {
          title: 'పంట నష్టాన్ని తగ్గిస్తుంది',
          desc: 'ఖచ్చితమైన వ్యాధి తెలుసుకోవడం లక్ష్య చికిత్సను అనుమతిస్తుంది, రసాయనాల వినియోగాన్ని తగ్గిస్తుంది.',
        },
        {
          title: 'స్థిరమైన వ్యవసాయం',
          desc: 'AI-ప్రారంభమైన ఖచ్చిత వ్యవసాయం సరైన సమయంలో సరైన చికిత్స చేయడంలో రైతులకు సహాయపడుతుంది.',
        },
      ],

      techStackTitle: 'సాంకేతిక స్టాక్',
      techStack: [
        { emoji: '⚛️', name: 'React.js', desc: 'UI ఫ్రేమ్‌వర్క్' },
        { emoji: '🎨', name: 'Tailwind CSS', desc: 'స్టైలింగ్' },
        { emoji: '🤗', name: 'Hugging Face', desc: 'AI మోడల్ హోస్ట్' },
        { emoji: '🔗', name: 'Axios', desc: 'API కాల్స్' },
        { emoji: '📷', name: 'WebRTC', desc: 'కెమెరా API' },
        { emoji: '⚡', name: 'Vite', desc: 'బిల్డ్ సాధనం' },
        { emoji: '🧠', name: 'CNN మోడల్', desc: 'డీప్ లెర్నింగ్' },
        { emoji: '🌐', name: 'Gradio API', desc: 'HF Spaces' },
      ],

      aiModelTitle: 'AI మోడల్ గురించి',
      aiModelP1a: 'వ్యాధి వర్గీకరణ మోడల్',
      aiModelHF: 'Hugging Face Spaces',
      aiModelP1b: 'లో',
      aiModelAuthor: 'Naveen2916',
      aiModelP1c: 'చేత హోస్ట్ చేయబడింది. ఇది',
      aiModelDataset: 'PlantVillage dataset',
      aiModelP1d: 'లో శిక్షణ పొందిన CNN ఉపయోగిస్తుంది.',
      aiModelP2a: 'మోడల్',
      aiModelClasses: '38+ రకాల',
      aiModelP2b:
        'మొక్క వ్యాధులను గుర్తించగలదు. ప్రతి అంచనాకు విశ్వాస స్కోర్లు అందించబడతాయి.',
      disclaimer: '⚠️ నిరాకరణ',
      disclaimerText:
        'ఈ సాధనం నిర్ణయ-మద్దతు సహాయంగా మాత్రమే ఉద్దేశించబడింది, professional వ్యవసాయ సలహాకు ప్రత్యామ్నాయం కాదు.',

      ctaTitle: 'మీ పంటలను రక్షించడానికి సిద్ధంగా ఉన్నారా?',
      ctaDesc:
        'మొక్క వ్యాధులను తక్షణమే గుర్తించడానికి మా ఉచిత AI వర్గీకరణకర్తను ఉపయోగించండి.',
      ctaButton: 'విశ్లేషణ ప్రారంభించండి',
    },

    classify: {
      badge: 'AI వ్యాధి వర్గీకరణకర్త',
      title: 'మీ మొక్కను',
      titleHighlight: 'విశ్లేషించండి',
      description:
        'వ్యాధులను గుర్తించడానికి మరియు నిపుణుల చికిత్స సలహా పొందడానికి మీ మొక్క ఆకు యొక్క స్పష్టమైన ఫోటో అప్‌లోడ్ చేయండి.',

      tabs: {
        upload: 'చిత్రం అప్‌లోడ్ చేయండి',
        capture: 'ఫోటో తీయండి',
        live: 'లైవ్ గుర్తింపు',
      },

      upload: {
        dropPrompt: 'చిత్రాన్ని ఇక్కడ వదలండి లేదా browse చేయండి',
        formatHint: 'JPG, PNG, WebP — max 10MB',
        analyzed: 'విశ్లేషించబడింది',
      },

      camera: {
        openCamera: 'కెమెరా తెరవండి',
        captureAnalyze: 'తీసి & విశ్లేషించండి',
        preview: 'కెమెరా preview ఇక్కడ కనుగొంటుంది',
      },

      live: {
        start: 'లైవ్ గుర్తింపు ప్రారంభించండి',
        captureFrame: 'Frame తీసి & విశ్లేషించండి',
        analyzing: 'విశ్లేషిస్తున్నాము...',
        stream: 'లైవ్ గుర్తింపు stream ఇక్కడ కనుగొంటుంది',
        analyzingFrame: 'Frame విశ్లేషిస్తున్నాము...',
      },

      analyze: {
        button: 'వ్యాధి విశ్లేషించండి',
        loading: 'మొక్కను విశ్లేషిస్తున్నాము…',
        another: 'మరొక మొక్కను విశ్లేషించండి',
      },

      loading: {
        title: 'మీ మొక్కను విశ్లేషిస్తున్నాము',
        subtitle: 'మా AI వ్యాధి నమూనాల కోసం చిత్రాన్ని పరిశీలిస్తున్నాది…',
        timeNote: 'మొదటి రన్‌లో 15–30 సెకన్లు పట్టవచ్చు',
      },

      ready: {
        title: 'విశ్లేషణకు సిద్ధంగా ఉన్నాము',
        subtitle: 'AI వ్యాధి గుర్తింపు ప్రారంభించడానికి మొక్క చిత్రం అప్‌లోడ్ చేయండి లేదా తీయండి.',
      },

      history: 'ఇటీవలి విశ్లేషణలు',

      tips: {
        heading: '📌 ఉత్తమ ఫలితాల కోసం చిట్కాలు',
        items: [
          'సోకిన ఆకుల యొక్క స్పష్టమైన, బాగా వెలిగించిన చిత్రాలను ఉపయోగించండి',
          'మట్టి లేదా నేపథ్యం లేకుండా ఆకు మాత్రమే తీయండి',
          'మెరుగైన ఖచ్చితత్వం కోసం వ్యాధి ప్రభావిత ప్రాంతాన్ని zoom చేయండి',
          'JPG లేదా PNG ఫార్మాట్లు ఉత్తమంగా పనిచేస్తాయి',
        ],
      },

      result: {
        healthy: '✓ ఆరోగ్యకరమైనది',
        severity: '⚠',
        diseaseDescription: 'వ్యాధి వివరణ',
        causes: 'కారణాలు',
        treatment: 'చికిత్స & ఎరువు',
        recommendedProduct: 'సిఫార్సు చేయబడిన ఉత్పత్తి',
        howToUseFertilizer: 'ఎరువు ఉపయోగించే విధానం',
        quantity: 'పరిమాణం',
        frequency: 'పౌనఃపున్యం',
        bestTime: 'ఉత్తమ సమయం',
        downloadReport: 'నివేదిక డౌన్‌లోడ్',
        confidence: 'విశ్వాసం',
      },
    },

    // Chatbot
    chatbot: {
      title: 'PlantAI సహాయకుడు',
      online: 'ఆన్‌లైన్ — ఏదైనా అడగండి',
      welcome: '🌿 నమస్కారం! నేను మీ PlantAI సహాయకుడిని. మొక్క వ్యాధులు, చికిత్సలు, ఎరువులు లేదా వర్గీకరణకర్తను ఎలా ఉపయోగించాలో అడగండి!',
      placeholder: 'మొక్క వ్యాధుల గురించి అడగండి…',
      send: 'పంపండి',
      error: 'క్షమించండి, ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
      powered: 'Cloudflare AI ద్వారా నడపబడుతోంది',
    },
  },
};

export default translations;
