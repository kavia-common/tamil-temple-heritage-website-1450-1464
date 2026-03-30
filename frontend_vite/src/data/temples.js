/**
 * temples.js
 * Local JSON data store for Tamil temple heritage content.
 * All content is in Tamil with English transliterations where helpful.
 * This module serves as the single source of truth for all temple-related data.
 */

// PUBLIC_INTERFACE
/**
 * Array of featured Tamil temples with details in Tamil.
 * Each temple includes name, location, deity, description, history, and image.
 * @type {Array<Object>}
 */
export const temples = [
  {
    id: 1,
    name: "மீனாட்சி அம்மன் கோயில்",
    nameEn: "Meenakshi Amman Temple",
    location: "மதுரை",
    deity: "மீனாட்சி அம்மன் & சுந்தரேஸ்வரர்",
    description: "மதுரையில் உள்ள மீனாட்சி அம்மன் கோயில் திராவிட கட்டடக்கலையின் உச்சகட்ட வெளிப்பாடாகும். இக்கோயிலில் 14 கோபுரங்கள் உள்ளன. தெற்கு கோபுரம் 51.9 மீட்டர் உயரம் கொண்டது.",
    history: "இக்கோயில் 6ஆம் நூற்றாண்டில் கட்டப்பட்டது. நாயக்கர் காலத்தில் விரிவாக்கம் செய்யப்பட்டது. இது 2500 ஆண்டுகள் பழமை வாய்ந்தது.",
    architecture: "திராவிட பாணி கட்டடக்கலை. 14 கோபுரங்கள், ஆயிரம்கால் மண்டபம், பொற்றாமரைக் குளம் ஆகியவை முக்கிய அம்சங்கள்.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Madurai_Meenakshi_Amman_Temple_North_Tower.jpg/800px-Madurai_Meenakshi_Amman_Temple_North_Tower.jpg",
    festival: "சித்திரை திருவிழா",
    yearBuilt: "6ஆம் நூற்றாண்டு"
  },
  {
    id: 2,
    name: "பிரகதீஸ்வரர் கோயில்",
    nameEn: "Brihadeeswarar Temple",
    location: "தஞ்சாவூர்",
    deity: "பிரகதீஸ்வரர் (சிவன்)",
    description: "தஞ்சாவூரில் உள்ள பிரகதீஸ்வரர் கோயில் சோழர் கட்டடக்கலையின் மகத்தான படைப்பு. இதன் விமானம் 66 மீட்டர் உயரம் கொண்டது. யுனெஸ்கோ உலக பாரம்பரிய களமாக அறிவிக்கப்பட்டது.",
    history: "ராஜராஜ சோழன் முதலாம் அவர்களால் 1010ஆம் ஆண்டு கட்டப்பட்டது. சோழப் பேரரசின் பெருமையின் சின்னம்.",
    architecture: "கிரானைட் கற்களால் கட்டப்பட்டது. விமானம் 66 மீ உயரம். நந்தி சிலை 6 மீ நீளம். நிழல் விழாத கோபுரம் என்ற சிறப்பு உண்டு.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Brihadeeswara_Temple%2C_Thanjavur%2C_Fix.jpg/800px-Brihadeeswara_Temple%2C_Thanjavur%2C_Fix.jpg",
    festival: "மகா சிவராத்திரி",
    yearBuilt: "1010 CE"
  },
  {
    id: 3,
    name: "ரங்கநாதசுவாமி கோயில்",
    nameEn: "Ranganathaswamy Temple",
    location: "ஸ்ரீரங்கம்",
    deity: "ரங்கநாதர் (விஷ்ணு)",
    description: "ஸ்ரீரங்கத்தில் உள்ள ரங்கநாதசுவாமி கோயில் உலகின் மிகப்பெரிய செயல்படும் இந்து கோயிலாகும். 156 ஏக்கர் பரப்பளவு கொண்டது. 7 பிரகார சுவர்கள் மற்றும் 21 கோபுரங்கள் உள்ளன.",
    history: "சங்க காலத்திலிருந்து அறியப்படுகிறது. பல்லவர், சோழர், பாண்டியர், நாயக்கர் ஆகியோர் பங்களிப்பு செய்துள்ளனர்.",
    architecture: "7 பிரகாரங்கள், 21 கோபுரங்கள், ராஜகோபுரம் 72 மீட்டர் உயரம். திராவிட பாணி கட்டடக்கலை.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SriRangam_temple.jpg/800px-SriRangam_temple.jpg",
    festival: "வைகுண்ட ஏகாதசி",
    yearBuilt: "சங்க காலம்"
  },
  {
    id: 4,
    name: "நடராஜர் கோயில்",
    nameEn: "Nataraja Temple",
    location: "சிதம்பரம்",
    deity: "நடராஜர் (சிவன்)",
    description: "சிதம்பரம் நடராஜர் கோயில் சிவனின் ஆனந்த தாண்டவத்தின் புனித தலமாகும். ஐந்து சபைகளில் ஒன்றான கனக சபை இங்கு உள்ளது. சிதம்பர ரகசியம் என்ற புனித அம்சம் சிறப்பானது.",
    history: "2000 ஆண்டுகள் பழமையானது. சோழர்கள் காலத்தில் பெரிய விரிவாக்கம் செய்யப்பட்டது.",
    architecture: "ஐந்து சபைகள் - கனகசபை, சித்சபை, நிருத்தசபை, தேவசபை, ராஜசபை. தங்க மேற்கூரை கொண்ட சபை.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Le_temple_de_Nataraja_%28Chidambaram%2C_Inde%29_%2814052234064%29.jpg/800px-Le_temple_de_Nataraja_%28Chidambaram%2C_Inde%29_%2814052234064%29.jpg",
    festival: "ஆருத்ரா தரிசனம்",
    yearBuilt: "2000+ ஆண்டுகள்"
  },
  {
    id: 5,
    name: "ராமநாதசுவாமி கோயில்",
    nameEn: "Ramanathaswamy Temple",
    location: "ராமேஸ்வரம்",
    deity: "ராமநாதசுவாமி (சிவன்)",
    description: "ராமேஸ்வரத்தில் உள்ள இக்கோயில் இந்தியாவின் நான்கு தாமங்களில் ஒன்று. உலகின் மிக நீளமான நடைபாதை இங்கு உள்ளது. 22 தீர்த்தங்கள் சிறப்பானவை.",
    history: "ராமர் இலங்கை செல்வதற்கு முன் சிவலிங்கம் பிரதிஷ்டை செய்தார் என்ற புராண வரலாறு. 12ஆம் நூற்றாண்டில் கட்டப்பட்டது.",
    architecture: "உலகின் மிக நீளமான கோயில் நடைபாதை - 1220 மீ. 22 புனித தீர்த்தங்கள். திராவிட பாணி.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ramanathaswamy_temple_corridor.jpg/800px-Ramanathaswamy_temple_corridor.jpg",
    festival: "மகா சிவராத்திரி",
    yearBuilt: "12ஆம் நூற்றாண்டு"
  },
  {
    id: 6,
    name: "கபாலீஸ்வரர் கோயில்",
    nameEn: "Kapaleeshwarar Temple",
    location: "சென்னை (மயிலாப்பூர்)",
    deity: "கபாலீஸ்வரர் (சிவன்)",
    description: "சென்னை மயிலாப்பூரில் உள்ள கபாலீஸ்வரர் கோயில் 7ஆம் நூற்றாண்டைச் சேர்ந்தது. திருஞானசம்பந்தர் பாடிய தேவாரப் பாடல்களால் புகழ் பெற்றது.",
    history: "பல்லவர் காலத்தில் கட்டப்பட்டது. போர்த்துகீசியர்கள் அழித்த பின் 16ஆம் நூற்றாண்டில் மீண்டும் கட்டப்பட்டது.",
    architecture: "திராவிட பாணி கோபுரம் 40 மீ உயரம். அழகிய சிற்பங்கள் மற்றும் ஓவியங்கள் நிறைந்தது.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kapaleeshwarar_Temple%2C_Chennai.jpg/800px-Kapaleeshwarar_Temple%2C_Chennai.jpg",
    festival: "அருபத்துமூவர் திருவிழா",
    yearBuilt: "7ஆம் நூற்றாண்டு"
  }
];

// PUBLIC_INTERFACE
/**
 * Array of major Tamil temple festivals with details.
 * @type {Array<Object>}
 */
export const festivals = [
  {
    id: 1,
    name: "சித்திரை திருவிழா",
    nameEn: "Chithirai Festival",
    month: "சித்திரை (ஏப்ரல்-மே)",
    temple: "மீனாட்சி அம்மன் கோயில், மதுரை",
    description: "மதுரையின் மிகப்பெரிய திருவிழா. மீனாட்சி-சுந்தரேஸ்வரர் திருக்கல்யாணம் நடைபெறும். அழகர் வைகையில் இறங்கும் நிகழ்வு மிகவும் பிரசித்தம்.",
    duration: "14 நாட்கள்",
    icon: "🏮"
  },
  {
    id: 2,
    name: "ஆருத்ரா தரிசனம்",
    nameEn: "Arudra Darshanam",
    month: "மார்கழி (டிசம்பர்-ஜனவரி)",
    temple: "நடராஜர் கோயில், சிதம்பரம்",
    description: "சிவனின் ஆனந்த தாண்டவத்தை கொண்டாடும் மகா விழா. நடராஜர் வீதிவலம் வருவது சிறப்பு நிகழ்வு.",
    duration: "10 நாட்கள்",
    icon: "🪔"
  },
  {
    id: 3,
    name: "வைகுண்ட ஏகாதசி",
    nameEn: "Vaikunta Ekadashi",
    month: "மார்கழி (டிசம்பர்-ஜனவரி)",
    temple: "ரங்கநாதசுவாமி கோயில், ஸ்ரீரங்கம்",
    description: "ஸ்ரீரங்கத்தின் மிகப்பெரிய திருவிழா. சொர்க்கவாசல் திறக்கப்படும் நிகழ்வு. இரவு முழுவதும் பக்தர்கள் காத்திருப்பார்கள்.",
    duration: "21 நாட்கள்",
    icon: "✨"
  },
  {
    id: 4,
    name: "நவராத்திரி",
    nameEn: "Navaratri",
    month: "புரட்டாசி (செப்டம்பர்-அக்டோபர்)",
    temple: "அனைத்து அம்மன் கோயில்கள்",
    description: "ஒன்பது இரவுகள் கொண்டாடப்படும் தேவி வழிபாட்டு விழா. கொலு வைப்பது, சரஸ்வதி பூஜை, விஜயதசமி ஆகியவை முக்கிய நிகழ்வுகள்.",
    duration: "9 நாட்கள்",
    icon: "🎆"
  },
  {
    id: 5,
    name: "தைப்பூசம்",
    nameEn: "Thaipusam",
    month: "தை (ஜனவரி-பிப்ரவரி)",
    temple: "முருகன் கோயில்கள்",
    description: "முருகன் வழிபாட்டின் முக்கிய திருவிழா. காவடி எடுத்தல், பால் குடம் சுமத்தல் ஆகியவை சிறப்பு.",
    duration: "1 நாள்",
    icon: "⚡"
  },
  {
    id: 6,
    name: "பங்குனி உத்திரம்",
    nameEn: "Panguni Uthiram",
    month: "பங்குனி (மார்ச்-ஏப்ரல்)",
    temple: "அனைத்து கோயில்கள்",
    description: "தெய்வீக திருமணங்கள் கொண்டாடப்படும் விழா. சிவன்-பார்வதி, முருகன்-தெய்வானை திருக்கல்யாணங்கள் நடைபெறும்.",
    duration: "10 நாட்கள்",
    icon: "💫"
  }
];

// PUBLIC_INTERFACE
/**
 * Array of Tamil temple architecture elements with descriptions.
 * @type {Array<Object>}
 */
export const architectureElements = [
  {
    id: 1,
    name: "கோபுரம்",
    nameEn: "Gopuram",
    description: "கோயிலின் நுழைவாயில் மீது அமைந்த உயரமான கோபுர அமைப்பு. பல தட்டுகளாக எழும் இந்த கட்டிடம் கடவுளர், தேவதைகள், மிருகங்கள் சிற்பங்களால் அலங்கரிக்கப்படும்.",
    details: "உயரம் 30-70 மீட்டர் வரை இருக்கும். கிரானைட் மற்றும் செங்கல் கொண்டு கட்டப்படும். வண்ணமயமான சுதை வேலைப்பாடுகள் சிறப்பு.",
    icon: "🏛️"
  },
  {
    id: 2,
    name: "விமானம்",
    nameEn: "Vimana",
    description: "கருவறையின் மேல் அமைந்த கூரை அமைப்பு. கோயிலின் மிக முக்கியமான கட்டடக்கலை அம்சம். கலசம் என்ற உச்சி அலங்காரம் கொண்டது.",
    details: "பிரகதீஸ்வரர் கோயிலின் விமானம் 66 மீ உயரம். ஒற்றை கிரானைட் கல்லால் ஆனது. நிழல் தரையில் விழாது.",
    icon: "⛩️"
  },
  {
    id: 3,
    name: "மண்டபம்",
    nameEn: "Mandapam",
    description: "கோயில் வளாகத்தில் உள்ள தூண்கள் கொண்ட கூடம். பூஜை, நடனம், இசை ஆகியவற்றிற்கு பயன்படுத்தப்படும்.",
    details: "ஆயிரம்கால் மண்டபம் (மதுரை) - 985 தூண்கள். ஒவ்வொரு தூணிலும் தனித்துவமான சிற்பம்.",
    icon: "🏗️"
  },
  {
    id: 4,
    name: "கருவறை",
    nameEn: "Garbhagriha",
    description: "கோயிலின் மையப் புனித அறை. முதன்மை தெய்வத்தின் மூர்த்தி இங்கு பிரதிஷ்டை செய்யப்பட்டிருக்கும். இருண்ட, சிறிய அறை.",
    details: "சதுர வடிவம். சுவர் தடிமன் அதிகம். ஒரே நுழைவாயில். எப்போதும் அரை இருளில் இருக்கும்.",
    icon: "🕉️"
  },
  {
    id: 5,
    name: "பிரகாரம்",
    nameEn: "Prakaram",
    description: "கோயிலைச் சுற்றியுள்ள சுற்று நடைபாதை. பக்தர்கள் வலம் வருவதற்கு பயன்படுத்தப்படும். சிற்பங்களும் சிறு கோயில்களும் அமைந்திருக்கும்.",
    details: "ராமேஸ்வரம் கோயிலின் பிரகாரம் உலகின் மிக நீளமானது - 1220 மீ. ஸ்ரீரங்கம் கோயிலில் 7 பிரகாரங்கள்.",
    icon: "🔄"
  },
  {
    id: 6,
    name: "குளம் / தீர்த்தம்",
    nameEn: "Temple Tank",
    description: "கோயில் வளாகத்தில் உள்ள புனித நீர்நிலை. தெப்பத் திருவிழா நடத்தப்படும். சடங்குகளுக்கு நீர் எடுக்கப்படும்.",
    details: "மதுரை பொற்றாமரைக் குளம், திருவண்ணாமலை சிவகங்கை. சிலவற்றில் தாமரை மலரும்.",
    icon: "💧"
  }
];

// PUBLIC_INTERFACE
/**
 * Gallery images data for the temple gallery section.
 * @type {Array<Object>}
 */
export const galleryImages = [
  {
    id: 1,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Madurai_Meenakshi_Amman_Temple_North_Tower.jpg/600px-Madurai_Meenakshi_Amman_Temple_North_Tower.jpg",
    alt: "மீனாட்சி அம்மன் கோயில் கோபுரம்",
    category: "கோபுரம்"
  },
  {
    id: 2,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Brihadeeswara_Temple%2C_Thanjavur%2C_Fix.jpg/600px-Brihadeeswara_Temple%2C_Thanjavur%2C_Fix.jpg",
    alt: "பிரகதீஸ்வரர் கோயில்",
    category: "விமானம்"
  },
  {
    id: 3,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/SriRangam_temple.jpg/600px-SriRangam_temple.jpg",
    alt: "ஸ்ரீரங்கம் ரங்கநாதசுவாமி கோயில்",
    category: "பிரகாரம்"
  },
  {
    id: 4,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Le_temple_de_Nataraja_%28Chidambaram%2C_Inde%29_%2814052234064%29.jpg/600px-Le_temple_de_Nataraja_%28Chidambaram%2C_Inde%29_%2814052234064%29.jpg",
    alt: "நடராஜர் கோயில், சிதம்பரம்",
    category: "கோபுரம்"
  },
  {
    id: 5,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ramanathaswamy_temple_corridor.jpg/600px-Ramanathaswamy_temple_corridor.jpg",
    alt: "ராமேஸ்வரம் நடைபாதை",
    category: "மண்டபம்"
  },
  {
    id: 6,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kapaleeshwarar_Temple%2C_Chennai.jpg/600px-Kapaleeshwarar_Temple%2C_Chennai.jpg",
    alt: "கபாலீஸ்வரர் கோயில்",
    category: "கோபுரம்"
  },
  {
    id: 7,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1000_pillar_hall_Meenakshi_temple.jpg/600px-1000_pillar_hall_Meenakshi_temple.jpg",
    alt: "ஆயிரம்கால் மண்டபம், மதுரை",
    category: "மண்டபம்"
  },
  {
    id: 8,
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Thanjavur_Brihadeeswarar_Temple_Nandi.jpg/600px-Thanjavur_Brihadeeswarar_Temple_Nandi.jpg",
    alt: "தஞ்சாவூர் நந்தி",
    category: "சிற்பம்"
  }
];

// PUBLIC_INTERFACE
/**
 * Navigation menu items for the website.
 * @type {Array<Object>}
 */
export const navItems = [
  { id: "home", label: "முகப்பு", icon: "🏠" },
  { id: "temples", label: "கோயில்கள்", icon: "🛕" },
  { id: "festivals", label: "திருவிழாக்கள்", icon: "🏮" },
  { id: "architecture", label: "கட்டடக்கலை", icon: "🏛️" },
  { id: "gallery", label: "படத்தொகுப்பு", icon: "🖼️" }
];

// PUBLIC_INTERFACE
/**
 * Website metadata and hero section content.
 * @type {Object}
 */
export const siteContent = {
  title: "தமிழ்நாடு கோயில் பாரம்பரியம்",
  subtitle: "Tamil Nadu Temple Heritage",
  heroTagline: "ஆயிரம் ஆண்டு கோயில் கலை, கலாச்சாரம், பாரம்பரியம்",
  heroDescription: "தமிழ்நாட்டின் பண்டைய கோயில்கள், அவற்றின் கட்டடக்கலை அழகு, திருவிழாக்கள் மற்றும் ஆன்மீக பாரம்பரியத்தை அறிந்து கொள்ளுங்கள்.",
  footerText: "© 2024 தமிழ்நாடு கோயில் பாரம்பரியம் | அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
  footerQuote: "\"கல்தோன்றி மண்தோன்றா காலத்தே வாளோடு முன்தோன்றிய மூத்த குடி\"",
  stats: [
    { value: "38,000+", label: "கோயில்கள்" },
    { value: "2,000+", label: "ஆண்டுகள் வரலாறு" },
    { value: "6", label: "யுனெஸ்கோ தளங்கள்" },
    { value: "100+", label: "திருவிழாக்கள்" }
  ]
};
