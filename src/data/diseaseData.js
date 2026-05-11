// Disease data keyed by the exact label strings returned by the model
export const diseaseDatabase = {

  // ── Chrysanthemum ──────────────────────────────────────────────────────────

  "Chrysanthemum - Bacterial Leaf Spot": {
    name: "Bacterial Leaf Spot",
    plant: "Chrysanthemum",
    severity: "High",
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
    },
    color: "from-yellow-900 to-orange-800",
    icon: "🌸"
  },

  "Chrysanthemum - Septoria Leaf Spot": {
    name: "Septoria Leaf Spot",
    plant: "Chrysanthemum",
    severity: "Moderate",
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
    },
    color: "from-amber-900 to-yellow-800",
    icon: "🌸"
  },

  "Chrysanthemum - Healthy": {
    name: "Healthy Plant",
    plant: "Chrysanthemum",
    severity: "None",
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
    },
    color: "from-green-900 to-green-700",
    icon: "✅"
  },

  // ── Jasmine ────────────────────────────────────────────────────────────────

  "Jasmine - Rust": {
    name: "Rust Disease",
    plant: "Jasmine",
    severity: "Moderate",
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
    },
    color: "from-orange-900 to-yellow-800",
    icon: "🌼"
  },

  "Jasmine - Multiple Diseases": {
    name: "Multiple Diseases",
    plant: "Jasmine",
    severity: "High",
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
    },
    color: "from-red-900 to-orange-900",
    icon: "🌼"
  },

  "Jasmine - Healthy": {
    name: "Healthy Plant",
    plant: "Jasmine",
    severity: "None",
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
    },
    color: "from-green-900 to-green-700",
    icon: "✅"
  },

  // ── Fallback ───────────────────────────────────────────────────────────────

  "default": {
    name: "Disease Detected",
    plant: "Unknown",
    severity: "Unknown",
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
    },
    color: "from-green-900 to-teal-800",
    icon: "🌿"
  }
};

export const getDiseaseInfo = (label) => {
  if (!label) return diseaseDatabase["default"];
  const trimmed = label.trim();
  if (diseaseDatabase[trimmed]) return diseaseDatabase[trimmed];
  // Fallback with label name filled in
  const base = { ...diseaseDatabase["default"] };
  base.name = trimmed;
  return base;
};

export const getSeverityColor = (severity) => {
  switch (severity) {
    case 'Critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
    case 'High':     return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
    case 'Moderate': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
    case 'None':     return 'text-green-400 bg-green-400/10 border-green-400/30';
    default:         return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
  }
};
