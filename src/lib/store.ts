
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'mr';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
    // Header
    since: "Since 1990",
    // Menu Page
    ourMenu: "Our Menu",
    tagline: "Traditional Indian Cuisine with Authentic Flavors",
    thaliSection: "Thali Meals",
    currySection: "Curry Specials",
    sidesSection: "Sides & Accompaniments",
    // Menu Items - Veg
    vegThaliChapati: "Veg Thali (Chapati)",
    vegThaliBhakari: "Veg Thali (Bhakari)",
    twoChapatiBhaji: "2 Chapati, Bhaji",
    riceAamtiVaran: "Rice Aamti or Varan",
    bhajiPlate: "Bhaji Plate",
    ricePlate: "Rice Plate",
    chapati: "Chapati",
    bhakari: "Bhakari",
    papad: "Papad",
    aamtiVati: "Aamti Vati",
    taak: "Buttermilk (Taak)",
    dahiVati: "Dahi Vati",
    boilEgg: "Boiled Egg",
    // Menu Items - Non-Veg
    muttonChapatiThali: "Mutton Chapati Thali",
    muttonBhakariThali: "Mutton Bhakari Thali",
    chickenChapatiThali: "Chicken Chapati Thali",
    chickenBhakariThali: "Chicken Bhakari Thali",
    eggCurryChapati: "Egg Curry Chapati (Single/Double)",
    eggCurryBhakari: "Egg Curry Bhakari (Single/Double)",
    muttonPlate: "Mutton Plate",
    chickenPlate: "Chicken Plate",
    singleEggCurryPlate: "Single Egg Curry Plate",
    rassaVati: "Rassa Vati (Tambada/Pandhara)",
    // Descriptions
    descVegThali: "Complete vegetarian meal with chapati, rice, dal, sabzi, and accompaniments",
    descMuttonThali: "Tender mutton curry served with your choice of bread and rice",
    descChickenThali: "Delicious chicken curry served with your choice of bread and rice",
    descEggCurry: "Spiced egg curry served with your choice of bread",
    descPapad: "Crispy roasted lentil crackers",
    descTaak: "Traditional refreshing spiced yogurt drink",
    descRice: "Fluffy steamed rice",
    descAamti: "Traditional Maharashtrian tangy dal",
    descChapati: "Soft whole wheat flatbread",
    descBhakari: "Traditional thick flatbread",
    descBhaji: "Spiced mixed vegetable curry",
    // Footer
    footerDesc: "Serving authentic Maharashtrian flavors since 1990. Experience the taste of tradition.",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "123 Main Street, Pune, Maharashtra",
    rights: "All rights reserved.",
    // Home Page
    welcome: "Welcome to Hotel Nyala",
    homeTagline: "Experience the authentic flavors of traditional Indian cuisine",
    viewMenu: "View Our Menu",
    whyChooseUs: "Why Choose Hotel Nyala",
    authenticCuisine: "Authentic Cuisine",
    authenticCuisineDesc: "Traditional Indian recipes made with fresh ingredients",
    quickService: "Quick Service",
    quickServiceDesc: "Hot, delicious meals served promptly",
    qualityFood: "Quality Food",
    qualityFoodDesc: "Highest standards in taste and hygiene",
    ourSpecialties: "Our Specialties",
    specialtiesDesc: "Delicious thali meals prepared with care and tradition",
    readyToExperience: "Ready to Experience Authentic Indian Cuisine?",
    visitUsToday: "Visit us today for an authentic dining experience",
    seeFullMenu: "See Full Menu",
    from: "From",
    // About Page
    aboutTitle: "About Hotel Nyala",
    aboutPara1: "Welcome to Hotel Nyala, where traditional Indian hospitality meets authentic cuisine. Since 1990, we have been serving delicious, home-style meals that bring the warmth and flavors of India to your table.",
    aboutPara2: "Our specialty lies in our traditional Maharashtrian thali meals, prepared with fresh ingredients and time-honored recipes passed down through generations. From our signature Aamti to authentic bhakari, each dish is crafted with care.",
    aboutPara3: "Whether you're craving a hearty vegetarian thali or our signature mutton curry, Hotel Nyala offers a dining experience that celebrates the rich culinary heritage of India.",
    visitUs: "Visit Us",
    location: "Location",
    locationValue: "Shop no. 1524/1 near Ayodha Talkies, Kolhapur",
    hours: "Hours",
    hoursValue: "11:00 AM - 11:00 PM Daily",
    phone: "Phone",
    // Contact Page
    contactTitle: "Contact Us",
    getInTouch: "Get In Touch",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    ourOffice: "Our Office",
  },
  mr: {
    // Nav
    home: "मुख्यपृष्ठ",
    menu: "मेनू",
    about: "आमच्याबद्दल",
    contact: "संपर्क",
    // Header
    since: "१९९० पासून",
    // Menu Page
    ourMenu: "आमचा मेनू",
    tagline: "अस्सल चवीसह पारंपारिक भारतीय पाककृती",
    thaliSection: "थाळी",
    currySection: "करी स्पेशल",
    sidesSection: "इतर पदार्थ",
    // Menu Items - Veg
    vegThaliChapati: "शाकाहारी चपाती थाळी",
    vegThaliBhakari: "शाकाहारी भाकरी थाळी",
    twoChapatiBhaji: "२ चपाती, भाजी",
    riceAamtiVaran: "भात आमटी किंवा वरण",
    bhajiPlate: "भाजी प्लेट",
    ricePlate: "भात (राईस) प्लेट",
    chapati: "चपाती",
    bhakari: "भाकरी",
    papad: "पापड",
    aamtiVati: "आमटी वाटी",
    taak: "ताक",
    dahiVati: "दही वाटी",
    boilEgg: "बॉईल अंडा",
    // Menu Items - Non-Veg
    muttonChapatiThali: "मटण चपाती थाळी",
    muttonBhakariThali: "मटण भाकरी थाळी",
    chickenChapatiThali: "चिकन चपाती थाळी",
    chickenBhakariThali: "चिकन भाकरी थाळी",
    eggCurryChapati: "अंडाकरी चपाती थाळी (सिंगल/डबल)",
    eggCurryBhakari: "अंडाकरी भाकरी थाळी (सिंगल/डबल)",
    muttonPlate: "मटण प्लेट",
    chickenPlate: "चिकन प्लेट",
    singleEggCurryPlate: "सिंगल अंडाकरी प्लेट",
    rassaVati: "तांबडा किंवा पांढरा रस्सा वाटी",
    // Descriptions
    descVegThali: "चपाती, भात, डाळ, भाजी आणि इतर पदार्थांसह परिपूर्ण शाकाहारी जेवण",
    descMuttonThali: "मटण रस्सा, तुमच्या आवडीची भाकरी/चपाती आणि भात",
    descChickenThali: "चिकन रस्सा, तुमच्या आवडीची भाकरी/चपाती आणि भात",
    descEggCurry: "अंडा करी आणि तुमच्या आवडीची भाकरी/चपाती",
    descPapad: "कुरकुरीत भाजलेला पापड",
    descTaak: "पारंपारिक थंडगार मसाला ताक",
    descRice: "वाफाळलेला भात",
    descAamti: "पारंपारिक महाराष्ट्रीयन आमटी",
    descChapati: "मऊ गव्हाची चपाती",
    descBhakari: "पारंपारिक ज्वारी किंवा बाजरीची भाकरी",
    descBhaji: "मसालेदार मिश्र भाजी",
    // Footer
    footerDesc: "१९९० पासून अस्सल महाराष्ट्रीयन चव वाढवत आहोत. परंपरेचा आस्वाद घ्या.",
    quickLinks: "द्रुत दुवे",
    contactUs: "आमच्याशी संपर्क साधा",
    address: "१२३ मेन स्ट्रीट, पुणे, महाराष्ट्र",
    rights: "सर्व हक्क राखीव.",
    // Home Page
    welcome: "हॉटेल न्याला मध्ये आपले स्वागत आहे",
    homeTagline: "पारंपारिक भारतीय पाककृतींचा अस्सल अनुभव घ्या",
    viewMenu: "मेनू पहा",
    whyChooseUs: "हॉटेल न्यला का निवडावे",
    authenticCuisine: "अस्सल पाककृती",
    authenticCuisineDesc: "ताज्या साहित्यापासून बनवलेल्या पारंपारिक भारतीय पाककृती",
    quickService: "जलद सेवा",
    quickServiceDesc: "गरम आणि स्वादिष्ट जेवण त्वरित दिले जाते",
    qualityFood: "दर्जेदार अन्न",
    qualityFoodDesc: "चव आणि स्वच्छतेमध्ये सर्वोच्च मानके",
    ourSpecialties: "आमची वैशिष्ट्ये",
    specialtiesDesc: "काळजीपूर्वक आणि परंपरेने तयार केलेली चविष्ट थाळी",
    readyToExperience: "अस्सल भारतीय पाककृती अनुभवण्यासाठी तयार आहात का?",
    visitUsToday: "अस्सल जेवणाच्या अनुभवासाठी आजच आम्हाला भेट द्या",
    seeFullMenu: "संपूर्ण मेनू पहा",
    from: "पासून",
    // About Page
    aboutTitle: "हॉटेल न्यलाबद्दल",
    aboutPara1: "हॉटेल न्यला मध्ये आपले स्वागत आहे, जिथे पारंपारिक भारतीय आदरातिथ्य अस्सल पाककृतींना मिळते. १९९० पासून, आम्ही स्वादिष्ट, घरगुती जेवण देत आहोत जे भारताची उबदारता आणि चव तुमच्या टेबलावर आणते.",
    aboutPara2: "आमचे वैशिष्ट्य आमच्या पारंपारिक महाराष्ट्रीयन थाळी जेवणात आहे, जे ताज्या साहित्यापासून आणि पिढ्यानपिढ्या चालत आलेल्या पाककृतींनी तयार केले जाते. आमच्या सिग्नेचर आमटीपासून ते अस्सल भाकरीपर्यंत, प्रत्येक पदार्थ काळजीपूर्वक तयार केला जातो.",
    aboutPara3: "तुम्हाला शाकाहारी थाळीची इच्छा असो किंवा आमच्या सिग्नेचर मटण करीची, हॉटेल न्यला एक असा जेवणाचा अनुभव देते जो भारताच्या समृद्ध पाक वारशाचा उत्सव साजरा करतो.",
    visitUs: "आम्हाला भेट द्या",
    location: "स्थान",
    locationValue: "दुकान क्र. १५२४/१ अयोध्या टॉकीज जवळ, कोल्हापूर",
    hours: "वेळ",
    hoursValue: "सकाळी ११:०० - रात्री ११:०० दररोज",
    phone: "फोन",
    // Contact Page
    contactTitle: "आमच्याशी संपर्क साधा",
    getInTouch: "संपर्कात रहा",
    name: "नाव",
    email: "ईमेल",
    subject: "विषय",
    message: "संदेश",
    sendMessage: "संदेश पाठवा",
    ourOffice: "आमचे कार्यालय",
  }


};

export const useStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
      t: (key) => {
        const { language } = get();
        return translations[language][key] || key;
      },
    }),
    {
      name: 'language-storage',
    }
  )
);
