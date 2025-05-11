// src/data/businessData.js

// Updated business data with detailed information and positions for the map
export const businesses = [
  {
    name: "Sage Wellness Suites",
    suiteNumber: "100",
    url: "#",
    image: "/images/SageWellnessSuites.png",
    bio: "Discover our comprehensive wellness and recovery solutions.",
    floor: 1,
    position: { top: "35%", left: "20%" },
  },
  {
    name: "The Source Pelvic Health & Wellness",
    suiteNumber: "150",
    url: "#",
    image: "/images/TheSourcePelvicFloor.jpg",
    providers: [
      "Dr. Kim Naylor, DPT PCES",
      "Dr. Shirley Kent, DPT, OCS, BRM",
      "Dr. Jaclyn Napier, DPT, PRPC"
    ],
    services: "Pelvic Health, Physical Therapy / Lifestyle Medicine & Wellness",
    contact: {
      website: "www.thesourcept.com",
      email: "info@thesourcept.com",
      phone: "757.932.8977"
    },
    bio: "We are a full‐service pelvic health clinic in Virginia Beach, VA, specializing in pelvic pain and related conditions for all ages. Our holistic, trauma-informed approach blends manual therapy, movement, nutrition, and lifestyle medicine to address pelvic, hip, and spine issues.",
    floor: 1,
    position: { top: "35%", left: "50%" },
  },
  {
    name: "Sage Therapy LLC",
    suiteNumber: "100",
    url: "#",
    image: "/images/SageTherapy.png",
    providers: [
      "Emily Teel, LMFT"
    ],
    services: "Individual, Marriage, Sex Therapy",
    contact: {
      website: "www.esagetherapy.com",
      instagram: "@e.sage.therapy",
      phone: null
    },
    bio: "Explore our network of specialized therapy services.",
    floor: 1,
    position: { top: "30%", left: "35%" },
  },
  {
    name: "Arielle Leeberg, LCSW",
    suiteNumber: "100",
    url: "https://www.arielleleeberg.com/",
    image: "/images/ArielleLeeberg.png",
    services: "Therapy / Somatic, Trauma / Reiki/ Yoga/ Integrative Psychedelic Therapist",
    contact: {
      website: "www.arielleleeberg.com",
      phone: null
    },
    bio: "Arielle Leeberg, LCSW & Coach, is a trauma-informed therapist who blends somatic therapy, Reiki, and yoga for holistic healing.",
    floor: 1,
    position: { top: "40%", left: "25%" },
  },
  {
    name: "Waves of Change Coalition",
    suiteNumber: "100",
    url: "#",
    image: "/images/WavesOfChange.png",
    providers: [
      "Carly Jones, LCSW"
    ],
    services: "Therapy / Individual, Family, Marriage, Sound Healing",
    contact: {
      website: "www.wavesofchangecoalition.com",
      phone: null
    },
    bio: "Comprehensive therapy services focusing on individual, family and marriage counseling with sound healing integration.",
    floor: 1,
    position: { top: "40%", left: "40%" },
  },
  {
    name: "Sara Fortin LLC",
    suiteNumber: "100",
    url: "#",
    image: "/images/PungoBuildingCollectiveLogoNew.png",
    providers: [
      "Sara Fortin, LMFT"
    ],
    services: "Individual, Couples/ Marriage Therapy, EMDR",
    contact: {
      email: "SaraFortinLLC@gmail.com",
      phone: null
    },
    bio: "Specialized therapy services including EMDR and couples counseling.",
    floor: 1,
    position: { top: "45%", left: "30%" },
  },
  {
    name: "Lynn Hamlet, LPC, ATR-BC",
    suiteNumber: "100",
    url: "#",
    image: "/images/LynnHamletUpdated.png",
    services: "Licensed Art Therapist, Individual, Couples, Child, & Faith Based Therapy",
    contact: {
      email: "LynnHamletLLC@gmail.com",
      phone: null
    },
    bio: "Art therapy and faith-based counseling approaches for individuals, couples and children.",
    floor: 1,
    position: { top: "45%", left: "45%" },
  },
  {
    name: "Ashley Ryan, LCSW",
    suiteNumber: "100",
    url: "#",
    image: "/images/PungoBuildingCollectiveLogoNew.png",
    services: "Individual, Couples, Equine Therapy",
    contact: {
      email: "Surfsidecounselinginfo@gmail.com",
      phone: "757.296.2528"
    },
    bio: "Specialized therapy services including innovative equine therapy approaches.",
    floor: 1,
    position: { top: "45%", left: "60%" },
  },
  {
    name: "SLK Acupuncture & Integrative Medicine",
    suiteNumber: "200",
    url: "#",
    image: "/images/Shannon.png",
    providers: [
      "Dr. Shannon Kleinman, DACM, DIPL.O.M, L.Ac., CFMP"
    ],
    services: "Acupuncture, Herbs, & Functional Medicine",
    contact: {
      website: "www.drshannonkleinman.com",
      phone: "757.904.8790"
    },
    bio: "Comprehensive integrative medicine including acupuncture, herbal medicine and functional medicine approaches.",
    floor: 2,
    position: { top: "65%", left: "20%" },
  },
  {
    name: "LP Psych & Wellness",
    suiteNumber: "200",
    url: "#",
    image: "/images/LP_Wellness.png",
    providers: [
      "Lori Palcic, PMHNP-BC, FNP-C"
    ],
    services: "Psychiatric & Wellness Services",
    contact: {
      website: "www.lppsychandwellness.com",
      phone: "757.356.2684"
    },
    bio: "Comprehensive psychiatric and wellness services.",
    floor: 2,
    position: { top: "65%", left: "35%" },
  },
  {
    name: "Lotus River Wellness",
    suiteNumber: "210",
    url: "https://www.lotusriverwellness.org/",
    image: "/images/LotusRiverWellness.png",
    providers: [
      "Lotus River Wellness, LLC"
    ],
    services: "Yoga Teacher Training, Wellness Services",
    contact: {
      website: "www.LotusRiverWellness.org",
      phone: "757.971.0482"
    },
    bio: "Lotus River Wellness offers a 200-Hour Yoga Teacher Training Certification designed to deepen your practice and understanding of yoga.",
    floor: 2,
    position: { top: "70%", left: "25%" },
  },
  {
    name: "Greco-Concrete Construction",
    suiteNumber: "220",
    url: "#",
    image: "/images/GrecoConcreteConstruction.png",
    providers: [
      "Nick Proferes"
    ],
    services: "Concrete Solutions",
    contact: {
      website: null,
      phone: "757.438.4873",
      facebook: "https://www.facebook.com/profile.php?id=61552422857317"
    },
    bio: "Professional concrete solutions and services.",
    floor: 2,
    position: { top: "70%", left: "40%" },
},
  {
    name: "The Healing Loft",
    suiteNumber: "230",
    url: "https://thehealingloftvirginabeach.com",
    image: "/images/thehealingloft.png",
    providers: [
      "Kendall Drake"
    ],
    services: "Hourly & Daily Studio Rental | $10 fitness & yoga classes.",
    contact: {
      website: "thehealingloftvirginabeach.com/",
      phone: null
    },
    bio: "Multi-purpose Collaborative Rentable Shared Space & Classes",
    floor: 2,
    position: { top: "75%", left: "60%" },
  },
  {
    name: "Tune-in 2 Wellness",
    suiteNumber: "240",
    url: "#",
    image: "/images/Tunein2Wellness.jpeg",
    providers: [
      "Rocky Kitzmiller"
    ],
    services: "Holistic Wellness Coaching / Reiki / Meditation / Hypnotherapy",
    contact: {
      website: "www.tunein2wellness.com",
      phone: "808.763.2674"
    },
    bio: "Comprehensive holistic wellness services including coaching, energy healing, and mind-body practices.",
    floor: 2,
    position: { top: "75%", left: "75%" },
  },
  {
    name: "Casa Contour Medspa & Wellness",
    suiteNumber: "250",
    url: "#",
    image: "/images/casacontourlogo.jpg",
    providers: [
      "Ellen Nogueira, APRN, FNP-BC, PMHNP-BC"
    ],
    services: "Injectables, Laser, IV therapy, BHRT & Weight Loss",
    contact: {
      website: "www.casacontour.com",
      phone: "757.553.4412"
    },
    bio: "Medical spa and wellness services including aesthetic treatments and hormone therapy.",
    floor: 2,
    position: { top: "80%", left: "70%" },
  },
  {
    name: "Fleming Fixes",
    suiteNumber: "260",
    url: "#",
    image: "/images/FlemingFixes.png",
    providers: [
      "Brandon Fleming"
    ],
    services: "Licensed General Contractor",
    contact: {
      website: "Flemingfixes.com",
      phone: "757-FLE-MING"
    },
    bio: "Professional general contracting and home improvement services.",
    floor: 2,
    position: { top: "80%", left: "85%" },
  },
];

// Group businesses by floor
export const firstFloorBusinesses = businesses.filter(biz => biz.floor === 1);
export const secondFloorBusinesses = businesses.filter(biz => biz.floor === 2);

// Sage Therapy Network businesses - keeping for compatibility
export const sageTherapyBusinesses = [
  {
    name: "Arielle Leeberg",
    url: "https://www.arielleleeberg.com/",
    image: "/images/ArielleLeeberg.png",
    bio: 'Arielle Leeberg, LCSW & Coach, is a trauma-informed therapist who blends somatic therapy, Reiki, and yoga for holistic healing. With experience in psychedelic-assisted therapy and a deep connection to the military community, she guides clients toward lasting transformation.',
  },
  {
    name: "Sage Therapy 2",
    url: "#",
    image: "/images/sage2.png",
    bio: "Sage Therapy 2 focuses on advanced therapy techniques.",
  },
  {
    name: "Sage Therapy 3",
    url: "#",
    image: "/images/sage3.png",
    bio: "Sage Therapy 3 provides comprehensive wellness programs.",
  },
];

// Sage Wellness Suites businesses - keeping for compatibility
export const sageWellnessSuitesBusinesses = [
  {
    name: "Wellness Suite 1",
    url: "#",
    image: "/images/wellness1.png",
    bio: "Wellness Suite 1 specializes in recovery and rejuvenation.",
  },
  {
    name: "Wellness Suite 2",
    url: "#",
    image: "/images/wellness2.png",
    bio: "Wellness Suite 2 offers advanced recovery solutions.",
  },
  {
    name: "Wellness Suite 3",
    url: "#",
    image: "/images/wellness3.png",
    bio: "Wellness Suite 3 focuses on holistic wellness and fitness.",
  },
];

// Now add the floor plan positions after all the variables are defined
// First floor positioning (better distributed)
firstFloorBusinesses.forEach((business, index) => {
  switch(business.name) {
    case "Sage Wellness Suites":
      business.floorPlanPosition = { top: "30%", left: "20%" };
      break;
    case "The Source Pelvic Health & Wellness":
      business.floorPlanPosition = { top: "30%", left: "75%" };
      break;
    case "Sage Therapy LLC":
      business.floorPlanPosition = { top: "15%", left: "45%" };
      break;
    case "Arielle Leeberg, LCSW":
      business.floorPlanPosition = { top: "40%", left: "20%" };
      break;
    case "Waves of Change Coalition":
      business.floorPlanPosition = { top: "15%", left: "65%" };
      break;
    case "Sara Fortin LLC":
      business.floorPlanPosition = { top: "40%", left: "45%" };
      break;
    case "Lynn Hamlet, LPC, ATR-BC":
      business.floorPlanPosition = { top: "40%", left: "65%" };
      break;
    case "Ashley Ryan, LCSW":
      business.floorPlanPosition = { top: "30%", left: "85%" };
      break;
    default:
      // If no specific position, create an evenly distributed one
      const row = Math.floor(index / 3);
      const col = index % 3;
      business.floorPlanPosition = { 
        top: `${20 + row * 15}%`, 
        left: `${25 + col * 25}%` 
      };
  }
});

// Second floor positioning (better distributed)
secondFloorBusinesses.forEach((business, index) => {
  switch(business.name) {
    case "SLK Acupuncture & Integrative Medicine":
      business.floorPlanPosition = { top: "65%", left: "15%" };
      break;
    case "LP Psych & Wellness":
      business.floorPlanPosition = { top: "65%", left: "38%" };
      break;
    case "Lotus River Wellness":
      business.floorPlanPosition = { top: "65%", left: "62%" };
      break;
    case "Greco-Concrete Solutions":
      business.floorPlanPosition = { top: "65%", left: "85%" };
      break;
    case "The Healing Loft":
      business.floorPlanPosition = { top: "80%", left: "25%" };
      break;
    case "Tune-in 2 Wellness":
      business.floorPlanPosition = { top: "80%", left: "50%" };
      break;
    case "Casa Contour Medspa & Wellness":
      business.floorPlanPosition = { top: "80%", left: "75%" };
      break;
    case "Fleming Fixes":
      business.floorPlanPosition = { top: "72%", left: "75%" };
      break;
    default:
      // If no specific position, create an evenly distributed one
      const row = Math.floor(index / 4);
      const col = index % 4;
      business.floorPlanPosition = { 
        top: `${65 + row * 15}%`, 
        left: `${15 + col * 25}%` 
      };
  }
});