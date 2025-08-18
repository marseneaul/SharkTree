/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constants/constants.ts":
/*!************************************!*\
  !*** ./src/constants/constants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANGLE_PER_LEVEL": () => (/* binding */ ANGLE_PER_LEVEL),
/* harmony export */   "DEFAULT_SVG_SIZE": () => (/* binding */ DEFAULT_SVG_SIZE),
/* harmony export */   "GA_FACTOR": () => (/* binding */ GA_FACTOR),
/* harmony export */   "KA_FACTOR": () => (/* binding */ KA_FACTOR),
/* harmony export */   "MA_FACTOR": () => (/* binding */ MA_FACTOR),
/* harmony export */   "START_ANGLE": () => (/* binding */ START_ANGLE)
/* harmony export */ });
const DEFAULT_SVG_SIZE = 800; // Size of the SVG canvas
const START_ANGLE = -Math.PI / 2; // Starting angle for the root node
const ANGLE_PER_LEVEL = Math.PI / 4; // Angle between nodes at the same depth
const KA_FACTOR = 1e3;
const MA_FACTOR = 1e6;
const GA_FACTOR = 1e9;


/***/ }),

/***/ "./src/constants/enums.ts":
/*!********************************!*\
  !*** ./src/constants/enums.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANAL_FIN": () => (/* binding */ ANAL_FIN),
/* harmony export */   "BEHAVIOR": () => (/* binding */ BEHAVIOR),
/* harmony export */   "BIOLUMINESCENT": () => (/* binding */ BIOLUMINESCENT),
/* harmony export */   "CAUDAL_FIN_SHAPE": () => (/* binding */ CAUDAL_FIN_SHAPE),
/* harmony export */   "CONSERVATION_STATUS": () => (/* binding */ CONSERVATION_STATUS),
/* harmony export */   "DEFAULT_TAGS": () => (/* binding */ DEFAULT_TAGS),
/* harmony export */   "DORSAL_FIN_SPINES": () => (/* binding */ DORSAL_FIN_SPINES),
/* harmony export */   "ELECTRIC_ORGAN": () => (/* binding */ ELECTRIC_ORGAN),
/* harmony export */   "FEEDING_BEHAVIOR": () => (/* binding */ FEEDING_BEHAVIOR),
/* harmony export */   "FLATTENED_BODY": () => (/* binding */ FLATTENED_BODY),
/* harmony export */   "GEOCHRONOLOGIC_UNIT": () => (/* binding */ GEOCHRONOLOGIC_UNIT),
/* harmony export */   "GEOGRAPHICAL_DISTRIBUTION": () => (/* binding */ GEOGRAPHICAL_DISTRIBUTION),
/* harmony export */   "GROUP_BEHAVIOR": () => (/* binding */ GROUP_BEHAVIOR),
/* harmony export */   "HABITAT": () => (/* binding */ HABITAT),
/* harmony export */   "MOUTH_IN_FRONT_OF_EYES": () => (/* binding */ MOUTH_IN_FRONT_OF_EYES),
/* harmony export */   "NICTITATING_MEMBRANE": () => (/* binding */ NICTITATING_MEMBRANE),
/* harmony export */   "NUM_DORSAL_FINS": () => (/* binding */ NUM_DORSAL_FINS),
/* harmony export */   "NUM_GILLS": () => (/* binding */ NUM_GILLS),
/* harmony export */   "OCEAN_ZONE": () => (/* binding */ OCEAN_ZONE),
/* harmony export */   "OPERCULUM": () => (/* binding */ OPERCULUM),
/* harmony export */   "PHYSICAL_CHARACTERISTIC": () => (/* binding */ PHYSICAL_CHARACTERISTIC),
/* harmony export */   "PROXIMAL_DORSAL_FINS": () => (/* binding */ PROXIMAL_DORSAL_FINS),
/* harmony export */   "REEF_ZONE": () => (/* binding */ REEF_ZONE),
/* harmony export */   "REPRODUCTIVE_STRATEGY": () => (/* binding */ REPRODUCTIVE_STRATEGY),
/* harmony export */   "SNOUT_SHAPE": () => (/* binding */ SNOUT_SHAPE),
/* harmony export */   "SPECIES_TYPE": () => (/* binding */ SPECIES_TYPE),
/* harmony export */   "SPIRACLES": () => (/* binding */ SPIRACLES),
/* harmony export */   "TAIL_SPINES": () => (/* binding */ TAIL_SPINES),
/* harmony export */   "TAXONOMIC_LEVELS": () => (/* binding */ TAXONOMIC_LEVELS),
/* harmony export */   "TEMPERATURE_REGULATION": () => (/* binding */ TEMPERATURE_REGULATION),
/* harmony export */   "VENOMOUS_SPINE": () => (/* binding */ VENOMOUS_SPINE),
/* harmony export */   "WATER_COLUMN": () => (/* binding */ WATER_COLUMN),
/* harmony export */   "getEnumCategory": () => (/* binding */ getEnumCategory)
/* harmony export */ });
var TAXONOMIC_LEVELS;
(function (TAXONOMIC_LEVELS) {
    TAXONOMIC_LEVELS["GENUS"] = "genus";
    TAXONOMIC_LEVELS["FAMILY"] = "family";
    TAXONOMIC_LEVELS["ORDER"] = "order";
    TAXONOMIC_LEVELS["SUPERORDER"] = "superorder";
    TAXONOMIC_LEVELS["SUBDIVISION"] = "subdivision";
})(TAXONOMIC_LEVELS || (TAXONOMIC_LEVELS = {}));
var SPECIES_TYPE;
(function (SPECIES_TYPE) {
    SPECIES_TYPE["SHARKS"] = "sharks";
    SPECIES_TYPE["RAYS"] = "rays";
    SPECIES_TYPE["CHIMAERAS"] = "chimaeras";
})(SPECIES_TYPE || (SPECIES_TYPE = {}));
var CONSERVATION_STATUS;
(function (CONSERVATION_STATUS) {
    CONSERVATION_STATUS["EX"] = "Extinct (EX)";
    CONSERVATION_STATUS["EW"] = "Extinct in the Wild (EW)";
    CONSERVATION_STATUS["CR"] = "Critically Endangered (CR)";
    CONSERVATION_STATUS["EN"] = "Endangered (EN)";
    CONSERVATION_STATUS["VU"] = "Vulnerable (VU)";
    CONSERVATION_STATUS["NT"] = "Near Threatened (NT)";
    CONSERVATION_STATUS["CD"] = "Conservation Dependent (CD)";
    CONSERVATION_STATUS["LC"] = "Least Concern (LC)";
    CONSERVATION_STATUS["DD"] = "Data Deficient (DD)";
    CONSERVATION_STATUS["NE"] = "Not Evaluated (NE)";
})(CONSERVATION_STATUS || (CONSERVATION_STATUS = {}));
var REPRODUCTIVE_STRATEGY;
(function (REPRODUCTIVE_STRATEGY) {
    REPRODUCTIVE_STRATEGY["OVIPAROUS"] = "Oviparous";
    REPRODUCTIVE_STRATEGY["VIVIPAROUS"] = "Viviparous";
    REPRODUCTIVE_STRATEGY["OVOVIVIPAROUS"] = "Ovoviviparous";
    REPRODUCTIVE_STRATEGY["EMBRYTROPHY"] = "Embrytrophy";
    REPRODUCTIVE_STRATEGY["PARTHENOGENESIS"] = "Parthenogenesis";
    REPRODUCTIVE_STRATEGY["OOPHAGY"] = "Oophagy";
    REPRODUCTIVE_STRATEGY["EMBRYOPHAGY"] = "Embryophagy";
    REPRODUCTIVE_STRATEGY["UNKNOWN"] = "Unknown";
})(REPRODUCTIVE_STRATEGY || (REPRODUCTIVE_STRATEGY = {}));
var REEF_ZONE;
(function (REEF_ZONE) {
    REEF_ZONE["TWA"] = "Tropical Western Atlantic (TWA)";
    REEF_ZONE["PAC"] = "California, Pacific Northwest, and Alaska (PAC)";
    REEF_ZONE["HAW"] = "Hawaii (HAW)";
    REEF_ZONE["TEP"] = "Tropical Eastern Pacific (TEP)";
    REEF_ZONE["SOP"] = "South Pacific (SOP)";
    REEF_ZONE["NE"] = "Northeast US and Eastern Canada (NE)";
    REEF_ZONE["SAS"] = "South Atlantic States (SAS)";
    REEF_ZONE["CIP"] = "Central Indo-Pacific (CIP)";
    REEF_ZONE["EAM"] = "Eastern Atlantic and Mediterranean (EAM)";
    REEF_ZONE["IORS"] = "Indian Ocean and Red Sea (IORS)";
})(REEF_ZONE || (REEF_ZONE = {}));
// https://en.m.wikipedia.org/wiki/List_of_feeding_behaviours
var FEEDING_BEHAVIOR;
(function (FEEDING_BEHAVIOR) {
    FEEDING_BEHAVIOR["CARNIVOROUS"] = "Carnivorous";
    FEEDING_BEHAVIOR["OMNIVOROUS"] = "Omnivorous";
    FEEDING_BEHAVIOR["PLANKTIVOROUS"] = "Planktivorous";
    FEEDING_BEHAVIOR["PISCIVOROUS"] = "Piscivorous";
    FEEDING_BEHAVIOR["MOLLUSCIVOROUS"] = "Molluscivorous";
})(FEEDING_BEHAVIOR || (FEEDING_BEHAVIOR = {}));
var OCEAN_ZONE;
(function (OCEAN_ZONE) {
    OCEAN_ZONE["EPIPELAGIC"] = "Epipelagic";
    OCEAN_ZONE["MESOPELAGIC"] = "Mesopelagic";
    OCEAN_ZONE["BATHYPELAGIC"] = "Bathypelagic";
    OCEAN_ZONE["ABYSSALPELAGIC"] = "Abyssalpelagic";
    OCEAN_ZONE["HADALPELAGIC"] = "Hadalpelagic";
})(OCEAN_ZONE || (OCEAN_ZONE = {}));
var TEMPERATURE_REGULATION;
(function (TEMPERATURE_REGULATION) {
    TEMPERATURE_REGULATION["ENDOTHERMIC"] = "Endothermic";
    TEMPERATURE_REGULATION["REGIONALLY_ENDOTHERMIC"] = "Regionally Endothermic";
    TEMPERATURE_REGULATION["ECTOTHERMIC"] = "Ectothermic";
})(TEMPERATURE_REGULATION || (TEMPERATURE_REGULATION = {}));
var GEOGRAPHICAL_DISTRIBUTION;
(function (GEOGRAPHICAL_DISTRIBUTION) {
    GEOGRAPHICAL_DISTRIBUTION["ENDEMIC"] = "Endemic";
    GEOGRAPHICAL_DISTRIBUTION["COSMOPOLITAN"] = "Cosmopolitan";
    GEOGRAPHICAL_DISTRIBUTION["TROPICAL"] = "Tropical";
    GEOGRAPHICAL_DISTRIBUTION["TEMPERATE"] = "Temperate";
    GEOGRAPHICAL_DISTRIBUTION["POLAR"] = "Polar";
})(GEOGRAPHICAL_DISTRIBUTION || (GEOGRAPHICAL_DISTRIBUTION = {}));
// https://en.wikipedia.org/wiki/Pelagic_zone
// https://en.wikipedia.org/wiki/Oceanic_zone - picture explains this
var HABITAT;
(function (HABITAT) {
    HABITAT["RIVERS"] = "Rivers";
    HABITAT["LAKES"] = "Lakes";
    HABITAT["ESTUARIES"] = "Estuaries";
    HABITAT["PELAGIC_ZONE"] = "Pelagic Zone";
    HABITAT["NERITIC_ZONE"] = "Neritic Zone";
    HABITAT["OCEANIC_ZONE"] = "Oceanic Zone";
    HABITAT["DEMERSAL_ZONE"] = "Demersal Zone";
    HABITAT["BENTHIC_ZONE"] = "Benthic Zone";
    HABITAT["MANGROVE_FORESTS"] = "Mangrove Forests";
    HABITAT["KELP_FORESTS"] = "Kelp Forests";
    HABITAT["INTERTIDAL_ZONE"] = "Intertidal Zone";
    HABITAT["SEAGRASS_BEDS"] = "Seagrass Beds";
    HABITAT["CORAL_REEFS"] = "Coral Reefs";
    HABITAT["CONTINENTAL_SHELVES"] = "Continental Shelves";
    HABITAT["ISLANDS"] = "Islands";
    HABITAT["LAGOONS"] = "Lagoons";
    HABITAT["SANDY_PLAINS"] = "Sandy Plains";
})(HABITAT || (HABITAT = {}));
var WATER_COLUMN;
(function (WATER_COLUMN) {
    WATER_COLUMN["SURFACE"] = "Surface";
    WATER_COLUMN["MIDWATER"] = "Midwater";
    WATER_COLUMN["DEEP_WATER"] = "Deep Water";
})(WATER_COLUMN || (WATER_COLUMN = {}));
var PHYSICAL_CHARACTERISTIC;
(function (PHYSICAL_CHARACTERISTIC) {
    PHYSICAL_CHARACTERISTIC["COUNTERSHADING"] = "Countershading";
    PHYSICAL_CHARACTERISTIC["TORPEDO_SHAPE"] = "Torpedo Shape";
    PHYSICAL_CHARACTERISTIC["WHITE_TIPPED_FIRST_DORSAL_FIN"] = "White-Tipped First Dorsal Fin";
    PHYSICAL_CHARACTERISTIC["WHITE_TIPPED_SECOND_DORSAL_FIN"] = "White-Tipped Second Dorsal Fin";
    PHYSICAL_CHARACTERISTIC["BLACK_TIPPED_FIRST_DORSAL_FIN"] = "Black-Tipped First Dorsal Fin";
    PHYSICAL_CHARACTERISTIC["BLACK_TIPPED_SECOND_DORSAL_FIN"] = "Black-Tipped Second Dorsal Fin";
})(PHYSICAL_CHARACTERISTIC || (PHYSICAL_CHARACTERISTIC = {}));
var BEHAVIOR;
(function (BEHAVIOR) {
    BEHAVIOR["MIGRATING"] = "Migrating";
    BEHAVIOR["BREACHING"] = "Breaching";
    BEHAVIOR["NONE"] = "No Unique Behaviors";
})(BEHAVIOR || (BEHAVIOR = {}));
var GROUP_BEHAVIOR;
(function (GROUP_BEHAVIOR) {
    GROUP_BEHAVIOR["SOLITARY"] = "Solitary";
    GROUP_BEHAVIOR["SCHOOLING"] = "Schooling";
})(GROUP_BEHAVIOR || (GROUP_BEHAVIOR = {}));
var NUM_GILLS;
(function (NUM_GILLS) {
    NUM_GILLS["FOUR"] = "4 Gills";
    NUM_GILLS["FIVE"] = "5 Gills";
    NUM_GILLS["SIX"] = "6 Gills";
    NUM_GILLS["SEVEN"] = "7 Gills";
})(NUM_GILLS || (NUM_GILLS = {}));
var NUM_DORSAL_FINS;
(function (NUM_DORSAL_FINS) {
    NUM_DORSAL_FINS["ZERO"] = "No Dorsal Fins";
    NUM_DORSAL_FINS["ONE"] = "1 Dorsal Fin";
    NUM_DORSAL_FINS["TWO"] = "2 Dorsal Fins";
})(NUM_DORSAL_FINS || (NUM_DORSAL_FINS = {}));
var ANAL_FIN;
(function (ANAL_FIN) {
    ANAL_FIN["YES"] = "Yes Anal Fin";
    ANAL_FIN["NO"] = "No Anal Fin";
})(ANAL_FIN || (ANAL_FIN = {}));
var SPIRACLES;
(function (SPIRACLES) {
    SPIRACLES["YES"] = "Yes Spiracles";
    SPIRACLES["NO"] = "No Spiracles";
})(SPIRACLES || (SPIRACLES = {}));
var FLATTENED_BODY;
(function (FLATTENED_BODY) {
    FLATTENED_BODY["YES"] = "Yes Flattened Body";
    FLATTENED_BODY["NO"] = "No Flattened Body";
})(FLATTENED_BODY || (FLATTENED_BODY = {}));
var NICTITATING_MEMBRANE;
(function (NICTITATING_MEMBRANE) {
    NICTITATING_MEMBRANE["YES"] = "Yes Nictitating Membrane";
    NICTITATING_MEMBRANE["NO"] = "No Nictitating Membrane";
})(NICTITATING_MEMBRANE || (NICTITATING_MEMBRANE = {}));
var PROXIMAL_DORSAL_FINS;
(function (PROXIMAL_DORSAL_FINS) {
    PROXIMAL_DORSAL_FINS["YES"] = "Yes Proximal Dorsal Fins";
    PROXIMAL_DORSAL_FINS["NO"] = "No Proximal Dorsal Fins";
})(PROXIMAL_DORSAL_FINS || (PROXIMAL_DORSAL_FINS = {}));
var CAUDAL_FIN_SHAPE;
(function (CAUDAL_FIN_SHAPE) {
    CAUDAL_FIN_SHAPE["HETEROCERCAL"] = "Heterocercal";
    CAUDAL_FIN_SHAPE["HOMOCERCAL"] = "Homocercal";
})(CAUDAL_FIN_SHAPE || (CAUDAL_FIN_SHAPE = {}));
var MOUTH_IN_FRONT_OF_EYES;
(function (MOUTH_IN_FRONT_OF_EYES) {
    MOUTH_IN_FRONT_OF_EYES["MOUTH_IN_FRONT_OF_EYES"] = "Mouth In Front of Eyes";
    MOUTH_IN_FRONT_OF_EYES["MOUTH_NOT_IN_FRONT_OF_EYES"] = "Mouth Not In Front of Eyes";
})(MOUTH_IN_FRONT_OF_EYES || (MOUTH_IN_FRONT_OF_EYES = {}));
var BIOLUMINESCENT;
(function (BIOLUMINESCENT) {
    BIOLUMINESCENT["YES"] = "Is Bioluminescent";
    BIOLUMINESCENT["NO"] = "Not Bioluminescent";
})(BIOLUMINESCENT || (BIOLUMINESCENT = {}));
var DORSAL_FIN_SPINES;
(function (DORSAL_FIN_SPINES) {
    DORSAL_FIN_SPINES["YES"] = "Both Dorsal Fin Spines";
    DORSAL_FIN_SPINES["ONLY_ON_FIRST"] = "Only First Dorsal Fin Spine";
    DORSAL_FIN_SPINES["NO"] = "No Dorsal Fin Spines";
})(DORSAL_FIN_SPINES || (DORSAL_FIN_SPINES = {}));
var TAIL_SPINES;
(function (TAIL_SPINES) {
    TAIL_SPINES["YES"] = "Yes Tail Spines";
    TAIL_SPINES["NO"] = "No Tail Spines";
})(TAIL_SPINES || (TAIL_SPINES = {}));
var ELECTRIC_ORGAN;
(function (ELECTRIC_ORGAN) {
    ELECTRIC_ORGAN["YES"] = "Yes Electric Organ";
    ELECTRIC_ORGAN["NO"] = "No Electric Organ";
})(ELECTRIC_ORGAN || (ELECTRIC_ORGAN = {}));
var VENOMOUS_SPINE;
(function (VENOMOUS_SPINE) {
    VENOMOUS_SPINE["YES"] = "Yes Venomous Spine";
    VENOMOUS_SPINE["NO"] = "No Venomous Spine";
})(VENOMOUS_SPINE || (VENOMOUS_SPINE = {}));
var OPERCULUM;
(function (OPERCULUM) {
    OPERCULUM["YES"] = "Yes Operculum";
    OPERCULUM["NO"] = "No Operculum";
})(OPERCULUM || (OPERCULUM = {}));
var SNOUT_SHAPE;
(function (SNOUT_SHAPE) {
    SNOUT_SHAPE["ELONGATED"] = "Elongated Snout";
    SNOUT_SHAPE["SHORT"] = "Short Snout";
    SNOUT_SHAPE["PLOUGH_LIKE"] = "Plough-like Snout";
})(SNOUT_SHAPE || (SNOUT_SHAPE = {}));
function getEnumCategory(tag) {
    if (Object.values(NUM_DORSAL_FINS).includes(tag))
        return "NUM_DORSAL_FINS";
    if (Object.values(NUM_GILLS).includes(tag))
        return "NUM_GILLS";
    if (Object.values(ANAL_FIN).includes(tag))
        return "ANAL_FIN";
    if (Object.values(NICTITATING_MEMBRANE).includes(tag))
        return "NICTITATING_MEMBRANE";
    if (Object.values(CAUDAL_FIN_SHAPE).includes(tag))
        return "CAUDAL_FIN_SHAPE";
    if (Object.values(MOUTH_IN_FRONT_OF_EYES).includes(tag))
        return "MOUTH_IN_FRONT_OF_EYES";
    if (Object.values(BIOLUMINESCENT).includes(tag))
        return "BIOLUMINESCENT";
    if (Object.values(DORSAL_FIN_SPINES).includes(tag))
        return "DORSAL_FIN_SPINES";
    if (Object.values(SPIRACLES).includes(tag))
        return "SPIRACLES";
    if (Object.values(FLATTENED_BODY).includes(tag))
        return "FLATTENED_BODY";
    if (Object.values(PROXIMAL_DORSAL_FINS).includes(tag))
        return "PROXIMAL_DORSAL_FINS";
    if (Object.values(TAIL_SPINES).includes(tag))
        return "TAIL_SPINES";
    if (Object.values(ELECTRIC_ORGAN).includes(tag))
        return "ELECTRIC_ORGAN";
    if (Object.values(VENOMOUS_SPINE).includes(tag))
        return "VENOMOUS_SPINE";
    if (Object.values(OPERCULUM).includes(tag))
        return "OPERCULUM";
    if (Object.values(SNOUT_SHAPE).includes(tag))
        return "SNOUT_SHAPE";
    if (Object.values(CONSERVATION_STATUS).includes(tag))
        return "CONSERVATION_STATUS";
    if (Object.values(TEMPERATURE_REGULATION).includes(tag))
        return "TEMPERATURE_REGULATION";
    if (Object.values(FEEDING_BEHAVIOR).includes(tag))
        return "FEEDING_BEHAVIOR";
    if (Object.values(REPRODUCTIVE_STRATEGY).includes(tag))
        return "REPRODUCTIVE_STRATEGY";
    if (Object.values(GROUP_BEHAVIOR).includes(tag))
        return "GROUP_BEHAVIOR";
    if (Object.values(REEF_ZONE).includes(tag))
        return "REEF_ZONE";
    if (Object.values(OCEAN_ZONE).includes(tag))
        return "OCEAN_ZONE";
    if (Object.values(GEOGRAPHICAL_DISTRIBUTION).includes(tag))
        return "GEOGRAPHICAL_DISTRIBUTION";
    if (Object.values(HABITAT).includes(tag))
        return "HABITAT";
    if (Object.values(WATER_COLUMN).includes(tag))
        return "WATER_COLUMN";
    if (Object.values(PHYSICAL_CHARACTERISTIC).includes(tag))
        return "PHYSICAL_CHARACTERISTIC";
    if (Object.values(BEHAVIOR).includes(tag))
        return "BEHAVIOR";
    return undefined;
}
const DEFAULT_TAGS = {
    [SPECIES_TYPE.SHARKS]: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.UNKNOWN,
        TEMPERATURE_REGULATION.ECTOTHERMIC,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        GROUP_BEHAVIOR.SOLITARY,
        BEHAVIOR.NONE,
        NUM_DORSAL_FINS.TWO,
        NUM_GILLS.FIVE,
        ANAL_FIN.YES,
        SPIRACLES.YES,
        FLATTENED_BODY.NO,
        NICTITATING_MEMBRANE.NO,
        CAUDAL_FIN_SHAPE.HETEROCERCAL,
        MOUTH_IN_FRONT_OF_EYES.MOUTH_NOT_IN_FRONT_OF_EYES,
        BIOLUMINESCENT.NO,
        DORSAL_FIN_SPINES.NO,
        PROXIMAL_DORSAL_FINS.NO
    ],
    [SPECIES_TYPE.RAYS]: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.UNKNOWN,
        TEMPERATURE_REGULATION.ECTOTHERMIC,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        GROUP_BEHAVIOR.SOLITARY,
        BEHAVIOR.NONE,
        NUM_GILLS.FIVE,
        NUM_DORSAL_FINS.TWO,
        SPIRACLES.YES,
        FLATTENED_BODY.YES,
        BIOLUMINESCENT.NO,
        TAIL_SPINES.NO,
        ELECTRIC_ORGAN.NO,
        VENOMOUS_SPINE.NO,
    ],
    [SPECIES_TYPE.CHIMAERAS]: [
        CONSERVATION_STATUS.LC,
        REPRODUCTIVE_STRATEGY.UNKNOWN,
        TEMPERATURE_REGULATION.ECTOTHERMIC,
        FEEDING_BEHAVIOR.CARNIVOROUS,
        GROUP_BEHAVIOR.SOLITARY,
        BEHAVIOR.NONE,
        NUM_GILLS.FOUR,
        NUM_DORSAL_FINS.TWO,
        SPIRACLES.NO,
        FLATTENED_BODY.NO,
        BIOLUMINESCENT.NO,
        OPERCULUM.YES,
        SNOUT_SHAPE.SHORT,
    ]
};
//------------------------------------------------------------------------------------------------------------------
var GEOCHRONOLOGIC_UNIT;
(function (GEOCHRONOLOGIC_UNIT) {
    GEOCHRONOLOGIC_UNIT["EON"] = "Eon";
    GEOCHRONOLOGIC_UNIT["ERA"] = "Era";
    GEOCHRONOLOGIC_UNIT["PERIOD"] = "Period";
    GEOCHRONOLOGIC_UNIT["SUBPERIOD"] = "Subperiod";
    GEOCHRONOLOGIC_UNIT["EPOCH"] = "Epoch";
    GEOCHRONOLOGIC_UNIT["SUBEPOCH"] = "Subepoch";
    GEOCHRONOLOGIC_UNIT["AGE"] = "Age";
})(GEOCHRONOLOGIC_UNIT || (GEOCHRONOLOGIC_UNIT = {}));


/***/ }),

/***/ "./src/data/fossils/fossil-sites-events.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossil-sites-events.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fossilSitesEvents": () => (/* binding */ fossilSitesEvents)
/* harmony export */ });
const fossilSitesEvents = [
    {
        eventName: "Pisco Fm, Chile",
        estimatedDate: "4(Mya)"
    },
    {
        eventName: "Kazakhstan Sites",
        estimatedDate: "34(Mya)"
    },
    {
        eventName: "Monte Bolca Sharks & Rays",
        estimatedDate: "56(Mya)"
    },
    {
        eventName: "Lebanese Sharks",
        estimatedDate: "93(Mya)"
    },
    {
        eventName: "Western Interior Seaway, USA",
        estimatedDate: "100(Mya)"
    },
    {
        eventName: "Lastame, Italy",
        estimatedDate: "100(Mya)"
    },
    {
        eventName: "Cardabia, Australia",
        estimatedDate: "136(Mya)"
    },
    {
        eventName: "Las Hoyas",
        estimatedDate: "129(Mya)"
    },
    {
        eventName: "Solnhofen Sharks",
        estimatedDate: "150(Mya)"
    },
    {
        eventName: "Dorset, UK",
        estimatedDate: "145(Mya)"
    },
    {
        eventName: "Lyme Regis, UK",
        estimatedDate: "199(Mya)"
    },
    {
        eventName: "Wapiti Lake",
        estimatedDate: "252(Mya)"
    },
    {
        eventName: "Perm Mountains",
        estimatedDate: "270(Mya)"
    },
    {
        eventName: "Idaho Sites",
        estimatedDate: "280(Mya)"
    },
    {
        eventName: "Mazon Creek Sites",
        estimatedDate: "309(Mya)"
    },
    {
        eventName: "Bear Gulch Sites",
        estimatedDate: "318(Mya)"
    },
    {
        eventName: "Bearsden & Wardie",
        estimatedDate: "358(Mya)"
    },
    {
        eventName: "Cleveland Shale / Morocco",
        estimatedDate: "365(Mya)"
    },
    {
        eventName: "Gogo, Australia",
        estimatedDate: "385(Mya)"
    },
    {
        eventName: "Antarctica",
        estimatedDate: "394(Mya)"
    },
    {
        eventName: "Atholville, Canada",
        estimatedDate: "400(Mya)"
    },
    {
        eventName: "Leon, Spain",
        estimatedDate: "418(Mya)"
    },
    {
        eventName: "Chongqing, China",
        estimatedDate: "436(Mya)"
    },
    {
        eventName: "Colorado, USA",
        estimatedDate: "444(Mya)"
    },
    {
        eventName: "Central Australia",
        estimatedDate: "465(Mya)"
    }
];


/***/ }),

/***/ "./src/data/fossils/fossil-species.ts":
/*!********************************************!*\
  !*** ./src/data/fossils/fossil-species.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fossilSpeciesConfig": () => (/* binding */ fossilSpeciesConfig)
/* harmony export */ });
/* harmony import */ var _fossils_acanthodians__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fossils/acanthodians */ "./src/data/fossils/fossils/acanthodians.ts");
/* harmony import */ var _fossils_akmonistion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fossils/akmonistion */ "./src/data/fossils/fossils/akmonistion.ts");
/* harmony import */ var _fossils_carcharhinus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fossils/carcharhinus */ "./src/data/fossils/fossils/carcharhinus.ts");
/* harmony import */ var _fossils_carcharodon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fossils/carcharodon */ "./src/data/fossils/fossils/carcharodon.ts");
/* harmony import */ var _fossils_cladoselache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fossils/cladoselache */ "./src/data/fossils/fossils/cladoselache.ts");
/* harmony import */ var _fossils_cretalamna__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fossils/cretalamna */ "./src/data/fossils/fossils/cretalamna.ts");
/* harmony import */ var _fossils_dasyatis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fossils/dasyatis */ "./src/data/fossils/fossils/dasyatis.ts");
/* harmony import */ var _fossils_doliodus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fossils/doliodus */ "./src/data/fossils/fossils/doliodus.ts");
/* harmony import */ var _fossils_echinochimaera__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fossils/echinochimaera */ "./src/data/fossils/fossils/echinochimaera.ts");
/* harmony import */ var _fossils_echinorhinus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fossils/echinorhinus */ "./src/data/fossils/fossils/echinorhinus.ts");
/* harmony import */ var _fossils_edestus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fossils/edestus */ "./src/data/fossils/fossils/edestus.ts");
/* harmony import */ var _fossils_falcatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fossils/falcatus */ "./src/data/fossils/fossils/falcatus.ts");
/* harmony import */ var _fossils_galeocerdo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fossils/galeocerdo */ "./src/data/fossils/fossils/galeocerdo.ts");
/* harmony import */ var _fossils_galeorhinus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fossils/galeorhinus */ "./src/data/fossils/fossils/galeorhinus.ts");
/* harmony import */ var _fossils_gogoselachus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fossils/gogoselachus */ "./src/data/fossils/fossils/gogoselachus.ts");
/* harmony import */ var _fossils_helicoprion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fossils/helicoprion */ "./src/data/fossils/fossils/helicoprion.ts");
/* harmony import */ var _fossils_heterodontus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fossils/heterodontus */ "./src/data/fossils/fossils/heterodontus.ts");
/* harmony import */ var _fossils_hexanchus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fossils/hexanchus */ "./src/data/fossils/fossils/hexanchus.ts");
/* harmony import */ var _fossils_holocephalans__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fossils/holocephalans */ "./src/data/fossils/fossils/holocephalans.ts");
/* harmony import */ var _fossils_hybodontids__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fossils/hybodontids */ "./src/data/fossils/fossils/hybodontids.ts");
/* harmony import */ var _fossils_isurus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fossils/isurus */ "./src/data/fossils/fossils/isurus.ts");
/* harmony import */ var _fossils_jalodus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fossils/jalodus */ "./src/data/fossils/fossils/jalodus.ts");
/* harmony import */ var _fossils_maghriboselache__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fossils/maghriboselache */ "./src/data/fossils/fossils/maghriboselache.ts");
/* harmony import */ var _fossils_mobula__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fossils/mobula */ "./src/data/fossils/fossils/mobula.ts");
/* harmony import */ var _fossils_myliobatis__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fossils/myliobatis */ "./src/data/fossils/fossils/myliobatis.ts");
/* harmony import */ var _fossils_onychoselache__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fossils/onychoselache */ "./src/data/fossils/fossils/onychoselache.ts");
/* harmony import */ var _fossils_ostenoselache__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fossils/ostenoselache */ "./src/data/fossils/fossils/ostenoselache.ts");
/* harmony import */ var _fossils_otodusMegalodon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fossils/otodusMegalodon */ "./src/data/fossils/fossils/otodusMegalodon.ts");
/* harmony import */ var _fossils_otodusObliquus__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fossils/otodusObliquus */ "./src/data/fossils/fossils/otodusObliquus.ts");
/* harmony import */ var _fossils_pheobodus__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fossils/pheobodus */ "./src/data/fossils/fossils/pheobodus.ts");
/* harmony import */ var _fossils_pristiophorus__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fossils/pristiophorus */ "./src/data/fossils/fossils/pristiophorus.ts");
/* harmony import */ var _fossils_pristis__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fossils/pristis */ "./src/data/fossils/fossils/pristis.ts");
/* harmony import */ var _fossils_psephodus__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fossils/psephodus */ "./src/data/fossils/fossils/psephodus.ts");
/* harmony import */ var _fossils_pucapampella__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fossils/pucapampella */ "./src/data/fossils/fossils/pucapampella.ts");
/* harmony import */ var _fossils_rainerichthys__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fossils/rainerichthys */ "./src/data/fossils/fossils/rainerichthys.ts");
/* harmony import */ var _fossils_raja__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fossils/raja */ "./src/data/fossils/fossils/raja.ts");
/* harmony import */ var _fossils_rays__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./fossils/rays */ "./src/data/fossils/fossils/rays.ts");
/* harmony import */ var _fossils_rhinobatos__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fossils/rhinobatos */ "./src/data/fossils/fossils/rhinobatos.ts");
/* harmony import */ var _fossils_rhomphaiodon__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./fossils/rhomphaiodon */ "./src/data/fossils/fossils/rhomphaiodon.ts");
/* harmony import */ var _fossils_scyliorhinus__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./fossils/scyliorhinus */ "./src/data/fossils/fossils/scyliorhinus.ts");
/* harmony import */ var _fossils_sharks__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./fossils/sharks */ "./src/data/fossils/fossils/sharks.ts");
/* harmony import */ var _fossils_shenacanthus__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./fossils/shenacanthus */ "./src/data/fossils/fossils/shenacanthus.ts");
/* harmony import */ var _fossils_sibyrhinchus__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./fossils/sibyrhinchus */ "./src/data/fossils/fossils/sibyrhinchus.ts");
/* harmony import */ var _fossils_sphryna__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./fossils/sphryna */ "./src/data/fossils/fossils/sphryna.ts");
/* harmony import */ var _fossils_squalus__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./fossils/squalus */ "./src/data/fossils/fossils/squalus.ts");
/* harmony import */ var _fossils_squatina__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./fossils/squatina */ "./src/data/fossils/fossils/squatina.ts");
/* harmony import */ var _fossils_stegostoma__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./fossils/stegostoma */ "./src/data/fossils/fossils/stegostoma.ts");
/* harmony import */ var _fossils_tantalepis__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./fossils/tantalepis */ "./src/data/fossils/fossils/tantalepis.ts");
/* harmony import */ var _fossils_tristychus__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./fossils/tristychus */ "./src/data/fossils/fossils/tristychus.ts");

















































const fossilSpeciesConfig = {
    children: [
        _fossils_tantalepis__WEBPACK_IMPORTED_MODULE_47__.tantalepis,
        {
            children: [
                {
                    children: [
                        _fossils_shenacanthus__WEBPACK_IMPORTED_MODULE_41__.shenacanthus,
                        {
                            children: [
                                _fossils_pucapampella__WEBPACK_IMPORTED_MODULE_33__.pucapampella,
                                {
                                    children: [
                                        _fossils_doliodus__WEBPACK_IMPORTED_MODULE_7__.doliodus,
                                        {
                                            children: [
                                                _fossils_gogoselachus__WEBPACK_IMPORTED_MODULE_14__.gogoselachus,
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                {
                                                                    children: [
                                                                        {
                                                                            children: [
                                                                                {
                                                                                    children: [
                                                                                        _fossils_falcatus__WEBPACK_IMPORTED_MODULE_11__.falcatus,
                                                                                        _fossils_akmonistion__WEBPACK_IMPORTED_MODULE_1__.akmonistion
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    children: [
                                                                                        _fossils_edestus__WEBPACK_IMPORTED_MODULE_10__.edestus,
                                                                                        _fossils_helicoprion__WEBPACK_IMPORTED_MODULE_15__.helicoprion
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            children: [
                                                                                _fossils_maghriboselache__WEBPACK_IMPORTED_MODULE_22__.maghriboselache,
                                                                                _fossils_cladoselache__WEBPACK_IMPORTED_MODULE_4__.cladoselache
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    children: [
                                                                        {
                                                                            children: [
                                                                                {
                                                                                    children: [
                                                                                        _fossils_holocephalans__WEBPACK_IMPORTED_MODULE_18__.holocephalans,
                                                                                        _fossils_echinochimaera__WEBPACK_IMPORTED_MODULE_8__.echinochimaera
                                                                                    ]
                                                                                },
                                                                                _fossils_sibyrhinchus__WEBPACK_IMPORTED_MODULE_42__.sibyrhinchus
                                                                            ]
                                                                        },
                                                                        _fossils_rainerichthys__WEBPACK_IMPORTED_MODULE_34__.rainerichthys
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        _fossils_psephodus__WEBPACK_IMPORTED_MODULE_32__.psephodus
                                                    ]
                                                },
                                                {
                                                    children: [
                                                        {
                                                            children: [
                                                                {
                                                                    children: [
                                                                        {
                                                                            children: [
                                                                                _fossils_rhomphaiodon__WEBPACK_IMPORTED_MODULE_38__.rhomphaiodon,
                                                                                {
                                                                                    children: [
                                                                                        {
                                                                                            children: [
                                                                                                {
                                                                                                    children: [
                                                                                                        _fossils_rhinobatos__WEBPACK_IMPORTED_MODULE_37__.rhinobatos,
                                                                                                        {
                                                                                                            children: [
                                                                                                                _fossils_raja__WEBPACK_IMPORTED_MODULE_35__.raja,
                                                                                                                {
                                                                                                                    children: [
                                                                                                                        _fossils_dasyatis__WEBPACK_IMPORTED_MODULE_6__.dasyatis,
                                                                                                                        {
                                                                                                                            children: [
                                                                                                                                _fossils_myliobatis__WEBPACK_IMPORTED_MODULE_24__.myliobatis,
                                                                                                                                {
                                                                                                                                    children: [
                                                                                                                                        _fossils_mobula__WEBPACK_IMPORTED_MODULE_23__.mobula,
                                                                                                                                        {
                                                                                                                                            children: [
                                                                                                                                                _fossils_pristis__WEBPACK_IMPORTED_MODULE_31__.pristis,
                                                                                                                                                _fossils_rays__WEBPACK_IMPORTED_MODULE_36__.rays
                                                                                                                                            ]
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    children: [
                                                                                                        {
                                                                                                            children: [
                                                                                                                {
                                                                                                                    children: [
                                                                                                                        {
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    children: [
                                                                                                                                        {
                                                                                                                                            children: [
                                                                                                                                                {
                                                                                                                                                    children: [
                                                                                                                                                        {
                                                                                                                                                            children: [
                                                                                                                                                                {
                                                                                                                                                                    children: [
                                                                                                                                                                        {
                                                                                                                                                                            children: [
                                                                                                                                                                                {
                                                                                                                                                                                    children: [
                                                                                                                                                                                        _fossils_sphryna__WEBPACK_IMPORTED_MODULE_43__.sphryna,
                                                                                                                                                                                        _fossils_carcharhinus__WEBPACK_IMPORTED_MODULE_2__.carcharhinus
                                                                                                                                                                                    ]
                                                                                                                                                                                },
                                                                                                                                                                                _fossils_galeocerdo__WEBPACK_IMPORTED_MODULE_12__.galeocerdo
                                                                                                                                                                            ]
                                                                                                                                                                        },
                                                                                                                                                                        _fossils_galeorhinus__WEBPACK_IMPORTED_MODULE_13__.galeorhinus
                                                                                                                                                                    ]
                                                                                                                                                                },
                                                                                                                                                                _fossils_scyliorhinus__WEBPACK_IMPORTED_MODULE_39__.scyliorhinus
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        _fossils_squalus__WEBPACK_IMPORTED_MODULE_44__.squalus
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                _fossils_sharks__WEBPACK_IMPORTED_MODULE_40__.sharks,
                                                                                                                                                {
                                                                                                                                                    children: [
                                                                                                                                                        {
                                                                                                                                                            children: [
                                                                                                                                                                _fossils_carcharodon__WEBPACK_IMPORTED_MODULE_3__.carcharodon,
                                                                                                                                                                _fossils_isurus__WEBPACK_IMPORTED_MODULE_20__.isurus
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        _fossils_stegostoma__WEBPACK_IMPORTED_MODULE_46__.stegostoma
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                {
                                                                                                                                                    children: [
                                                                                                                                                        {
                                                                                                                                                            children: [
                                                                                                                                                                _fossils_otodusMegalodon__WEBPACK_IMPORTED_MODULE_27__.otodusMegalodon,
                                                                                                                                                                _fossils_otodusObliquus__WEBPACK_IMPORTED_MODULE_28__.otodusObliquus
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        _fossils_cretalamna__WEBPACK_IMPORTED_MODULE_5__.cretalamna
                                                                                                                                                    ]
                                                                                                                                                }
                                                                                                                                            ]
                                                                                                                                        },
                                                                                                                                        _fossils_echinorhinus__WEBPACK_IMPORTED_MODULE_9__.echinorhinus
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                                _fossils_pristiophorus__WEBPACK_IMPORTED_MODULE_30__.pristiophorus
                                                                                                                            ]
                                                                                                                        },
                                                                                                                        _fossils_squatina__WEBPACK_IMPORTED_MODULE_45__.squatina
                                                                                                                    ]
                                                                                                                },
                                                                                                                _fossils_heterodontus__WEBPACK_IMPORTED_MODULE_16__.heterodontus
                                                                                                            ]
                                                                                                        },
                                                                                                        _fossils_hexanchus__WEBPACK_IMPORTED_MODULE_17__.hexanchus
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        },
                                                                                        _fossils_ostenoselache__WEBPACK_IMPORTED_MODULE_26__.ostenoselache
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        },
                                                                        _fossils_hybodontids__WEBPACK_IMPORTED_MODULE_19__.hybodontids
                                                                    ]
                                                                },
                                                                {
                                                                    children: [
                                                                        _fossils_onychoselache__WEBPACK_IMPORTED_MODULE_25__.onychoselache,
                                                                        _fossils_tristychus__WEBPACK_IMPORTED_MODULE_48__.tristychus
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            children: [
                                                                _fossils_jalodus__WEBPACK_IMPORTED_MODULE_21__.jalodus,
                                                                _fossils_pheobodus__WEBPACK_IMPORTED_MODULE_29__.pheobodus
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                _fossils_acanthodians__WEBPACK_IMPORTED_MODULE_0__.acanthodians
            ]
        }
    ]
};


/***/ }),

/***/ "./src/data/fossils/fossils/acanthodians.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/acanthodians.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acanthodians": () => (/* binding */ acanthodians)
/* harmony export */ });
const acanthodians = {
    name: "Acanthodians",
    estimatedDate: "439(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/akmonistion.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossils/akmonistion.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "akmonistion": () => (/* binding */ akmonistion)
/* harmony export */ });
const akmonistion = {
    name: "*Akmonistion*",
    estimatedDate: "330(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/carcharhinus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/carcharhinus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carcharhinus": () => (/* binding */ carcharhinus)
/* harmony export */ });
const carcharhinus = {
    name: "*Carcharhinus*",
    estimatedDate: "23(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/carcharodon.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossils/carcharodon.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "carcharodon": () => (/* binding */ carcharodon)
/* harmony export */ });
const carcharodon = {
    name: "*Carcharodon*",
    estimatedDate: "8(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/cladoselache.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/cladoselache.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cladoselache": () => (/* binding */ cladoselache)
/* harmony export */ });
const cladoselache = {
    name: "*Cladoselache*",
    estimatedDate: "360(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/cretalamna.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/cretalamna.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cretalamna": () => (/* binding */ cretalamna)
/* harmony export */ });
const cretalamna = {
    name: "*Cretalamna*",
    estimatedDate: "103(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/dasyatis.ts":
/*!**********************************************!*\
  !*** ./src/data/fossils/fossils/dasyatis.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dasyatis": () => (/* binding */ dasyatis)
/* harmony export */ });
const dasyatis = {
    name: "*Dasyatis*",
    estimatedDate: "66(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/doliodus.ts":
/*!**********************************************!*\
  !*** ./src/data/fossils/fossils/doliodus.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doliodus": () => (/* binding */ doliodus)
/* harmony export */ });
const doliodus = {
    name: "*Doliodus*",
    estimatedDate: "397(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/echinochimaera.ts":
/*!****************************************************!*\
  !*** ./src/data/fossils/fossils/echinochimaera.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "echinochimaera": () => (/* binding */ echinochimaera)
/* harmony export */ });
const echinochimaera = {
    name: "*Echinochimaera*",
    estimatedDate: "324(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/echinorhinus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/echinorhinus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "echinorhinus": () => (/* binding */ echinorhinus)
/* harmony export */ });
const echinorhinus = {
    name: "*Echinorhinus*",
    estimatedDate: "100(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/edestus.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/fossils/edestus.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edestus": () => (/* binding */ edestus)
/* harmony export */ });
const edestus = {
    name: "*Edestus*",
    estimatedDate: "300(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/falcatus.ts":
/*!**********************************************!*\
  !*** ./src/data/fossils/fossils/falcatus.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "falcatus": () => (/* binding */ falcatus)
/* harmony export */ });
const falcatus = {
    name: "*Falcatus*",
    estimatedDate: "325(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/galeocerdo.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/galeocerdo.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "galeocerdo": () => (/* binding */ galeocerdo)
/* harmony export */ });
const galeocerdo = {
    name: "*Galeocerdo*",
    estimatedDate: "56(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/galeorhinus.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossils/galeorhinus.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "galeorhinus": () => (/* binding */ galeorhinus)
/* harmony export */ });
const galeorhinus = {
    name: "*Galeorhinus*",
    estimatedDate: "56(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/gogoselachus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/gogoselachus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gogoselachus": () => (/* binding */ gogoselachus)
/* harmony export */ });
const gogoselachus = {
    name: "*Gogoselachus lynbeazleyae*",
    estimatedDate: "380(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/helicoprion.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossils/helicoprion.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "helicoprion": () => (/* binding */ helicoprion)
/* harmony export */ });
const helicoprion = {
    name: "*Helicoprion*",
    estimatedDate: "270(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/heterodontus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/heterodontus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "heterodontus": () => (/* binding */ heterodontus)
/* harmony export */ });
const heterodontus = {
    name: "*Heterodontus*",
    estimatedDate: "175(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/hexanchus.ts":
/*!***********************************************!*\
  !*** ./src/data/fossils/fossils/hexanchus.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hexanchus": () => (/* binding */ hexanchus)
/* harmony export */ });
const hexanchus = {
    name: "*Hexanchus*",
    estimatedDate: "195(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/holocephalans.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/fossils/holocephalans.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "holocephalans": () => (/* binding */ holocephalans)
/* harmony export */ });
const holocephalans = {
    name: "Holocephalans",
    estimatedDate: "0(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/hybodontids.ts":
/*!*************************************************!*\
  !*** ./src/data/fossils/fossils/hybodontids.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hybodontids": () => (/* binding */ hybodontids)
/* harmony export */ });
const hybodontids = {
    name: "Hybodontids",
    estimatedDate: "201(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/isurus.ts":
/*!********************************************!*\
  !*** ./src/data/fossils/fossils/isurus.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isurus": () => (/* binding */ isurus)
/* harmony export */ });
const isurus = {
    name: "*Isurus*",
    estimatedDate: "23(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/jalodus.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/fossils/jalodus.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jalodus": () => (/* binding */ jalodus)
/* harmony export */ });
const jalodus = {
    name: "*Jalodus*",
    estimatedDate: "372(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/maghriboselache.ts":
/*!*****************************************************!*\
  !*** ./src/data/fossils/fossils/maghriboselache.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maghriboselache": () => (/* binding */ maghriboselache)
/* harmony export */ });
const maghriboselache = {
    name: "*Maghriboselache*",
    estimatedDate: "369(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/mobula.ts":
/*!********************************************!*\
  !*** ./src/data/fossils/fossils/mobula.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobula": () => (/* binding */ mobula)
/* harmony export */ });
const mobula = {
    name: "*Mobula*",
    estimatedDate: "30(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/myliobatis.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/myliobatis.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myliobatis": () => (/* binding */ myliobatis)
/* harmony export */ });
const myliobatis = {
    name: "*Myliobatis*",
    estimatedDate: "56(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/onychoselache.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/fossils/onychoselache.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onychoselache": () => (/* binding */ onychoselache)
/* harmony export */ });
const onychoselache = {
    name: "*Onychoselache*",
    estimatedDate: "347(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/ostenoselache.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/fossils/ostenoselache.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ostenoselache": () => (/* binding */ ostenoselache)
/* harmony export */ });
const ostenoselache = {
    name: "*Ostenoselache*",
    estimatedDate: "197(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/otodusMegalodon.ts":
/*!*****************************************************!*\
  !*** ./src/data/fossils/fossils/otodusMegalodon.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "otodusMegalodon": () => (/* binding */ otodusMegalodon)
/* harmony export */ });
const otodusMegalodon = {
    name: "*Otodus megalodon*",
    estimatedDate: "23(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/otodusObliquus.ts":
/*!****************************************************!*\
  !*** ./src/data/fossils/fossils/otodusObliquus.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "otodusObliquus": () => (/* binding */ otodusObliquus)
/* harmony export */ });
const otodusObliquus = {
    name: "*Otodus obliquus*",
    estimatedDate: "60(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/pheobodus.ts":
/*!***********************************************!*\
  !*** ./src/data/fossils/fossils/pheobodus.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pheobodus": () => (/* binding */ pheobodus)
/* harmony export */ });
const pheobodus = {
    name: "*Pheobodus*",
    estimatedDate: "394(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/pristiophorus.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/fossils/pristiophorus.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pristiophorus": () => (/* binding */ pristiophorus)
/* harmony export */ });
const pristiophorus = {
    name: "*Pristiophorus*",
    estimatedDate: "110(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/pristis.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/fossils/pristis.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pristis": () => (/* binding */ pristis)
/* harmony export */ });
const pristis = {
    name: "*Pristis*",
    estimatedDate: "34(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/psephodus.ts":
/*!***********************************************!*\
  !*** ./src/data/fossils/fossils/psephodus.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "psephodus": () => (/* binding */ psephodus)
/* harmony export */ });
const psephodus = {
    name: "*Psephodus*",
    estimatedDate: "385(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/pucapampella.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/pucapampella.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pucapampella": () => (/* binding */ pucapampella)
/* harmony export */ });
const pucapampella = {
    name: "*Pucapampella*",
    estimatedDate: "395(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/rainerichthys.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/fossils/rainerichthys.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rainerichthys": () => (/* binding */ rainerichthys)
/* harmony export */ });
const rainerichthys = {
    name: "*Rainerichthys*",
    estimatedDate: "358(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/raja.ts":
/*!******************************************!*\
  !*** ./src/data/fossils/fossils/raja.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raja": () => (/* binding */ raja)
/* harmony export */ });
const raja = {
    name: "*Raja*",
    estimatedDate: "80(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/rays.ts":
/*!******************************************!*\
  !*** ./src/data/fossils/fossils/rays.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rays": () => (/* binding */ rays)
/* harmony export */ });
const rays = {
    name: "Rays",
    estimatedDate: "0(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/rhinobatos.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/rhinobatos.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rhinobatos": () => (/* binding */ rhinobatos)
/* harmony export */ });
const rhinobatos = {
    name: "*Rhinobatos*",
    estimatedDate: "120(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/rhomphaiodon.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/rhomphaiodon.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rhomphaiodon": () => (/* binding */ rhomphaiodon)
/* harmony export */ });
const rhomphaiodon = {
    name: "*Rhomphaiodon*",
    estimatedDate: "237(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/scyliorhinus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/scyliorhinus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scyliorhinus": () => (/* binding */ scyliorhinus)
/* harmony export */ });
const scyliorhinus = {
    name: "*Scyliorhinus*",
    estimatedDate: "66(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/sharks.ts":
/*!********************************************!*\
  !*** ./src/data/fossils/fossils/sharks.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharks": () => (/* binding */ sharks)
/* harmony export */ });
const sharks = {
    name: "Sharks",
    estimatedDate: "0(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/shenacanthus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/shenacanthus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shenacanthus": () => (/* binding */ shenacanthus)
/* harmony export */ });
const shenacanthus = {
    name: "*Shenacanthus*",
    estimatedDate: "436(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/sibyrhinchus.ts":
/*!**************************************************!*\
  !*** ./src/data/fossils/fossils/sibyrhinchus.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sibyrhinchus": () => (/* binding */ sibyrhinchus)
/* harmony export */ });
const sibyrhinchus = {
    name: "*Sibyrhinchus*",
    estimatedDate: "350(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/sphryna.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/fossils/sphryna.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sphryna": () => (/* binding */ sphryna)
/* harmony export */ });
const sphryna = {
    name: "*Sphryna*",
    estimatedDate: "20(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/squalus.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/fossils/squalus.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "squalus": () => (/* binding */ squalus)
/* harmony export */ });
const squalus = {
    name: "*Squalus*",
    estimatedDate: "66(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/squatina.ts":
/*!**********************************************!*\
  !*** ./src/data/fossils/fossils/squatina.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "squatina": () => (/* binding */ squatina)
/* harmony export */ });
const squatina = {
    name: "*Squatina*",
    estimatedDate: "160(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/stegostoma.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/stegostoma.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stegostoma": () => (/* binding */ stegostoma)
/* harmony export */ });
const stegostoma = {
    name: "*Stegostoma*",
    estimatedDate: "40(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/tantalepis.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/tantalepis.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tantalepis": () => (/* binding */ tantalepis)
/* harmony export */ });
const tantalepis = {
    name: "*Tantalepis*",
    estimatedDate: "465(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/fossils/tristychus.ts":
/*!************************************************!*\
  !*** ./src/data/fossils/fossils/tristychus.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tristychus": () => (/* binding */ tristychus)
/* harmony export */ });
const tristychus = {
    name: "*Tristychus*",
    estimatedDate: "359(Mya)"
};


/***/ }),

/***/ "./src/data/fossils/geological-time.ts":
/*!*********************************************!*\
  !*** ./src/data/fossils/geological-time.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "geologicalTimeConfig": () => (/* binding */ geologicalTimeConfig)
/* harmony export */ });
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/enums */ "./src/constants/enums.ts");

const geologicalTimeConfig = {
    children: [
        {
            geologicalName: "Phanerozoic",
            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "538.8(Ma)-0(Ma)",
            color: "rgb(102, 192, 146)",
            children: [
                {
                    geologicalName: "Cenozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "66(Ma)-0(Ma)",
                    color: "rgb(242, 249, 29)",
                    children: [
                        {
                            geologicalName: "Quaternary",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2.58(Ma)-0(Ma)",
                            color: "rgb(249, 249, 127)",
                            children: [
                                {
                                    geologicalName: "Holocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "0.0117(Ma)-0(Ma)",
                                    color: "rgb(254, 242, 224)",
                                },
                                {
                                    geologicalName: "Pleistocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "2.58(Ma)-0.0117(Ma)",
                                    color: "rgb(255, 242, 174)",
                                }
                            ]
                        },
                        {
                            geologicalName: "Neogene",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "23.03(Ma)-2.58(Ma)",
                            color: "rgb(255, 230, 25)",
                            children: [
                                {
                                    geologicalName: "Pliocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "5.333(Ma)-2.58(Ma)",
                                    color: "rgb(255, 255, 153)",
                                },
                                {
                                    geologicalName: "Miocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "23.03(Ma)-5.333(Ma)",
                                    color: "rgb(255, 255, 0)",
                                }
                            ]
                        },
                        {
                            geologicalName: "Paleogene",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "66(Ma)-23.03(Ma)",
                            color: "rgb(253, 154, 82)",
                            children: [
                                {
                                    geologicalName: "Oligocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "33.9(Ma)-23.03(Ma)",
                                    color: "rgb(253, 192, 122)",
                                },
                                {
                                    geologicalName: "Eocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "56(Ma)-33.9(Ma)",
                                    color: "rgb(253, 180, 108)",
                                },
                                {
                                    geologicalName: "Paleocene",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EPOCH,
                                    timeInterval: "66(Ma)-56(Ma)",
                                    color: "rgb(253, 167, 95)",
                                }
                            ]
                        },
                    ]
                },
                {
                    geologicalName: "Mesozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "251.902(Ma)-66(Ma)",
                    color: "rgb(103, 197, 202)",
                    children: [
                        {
                            geologicalName: "Cretaceous",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "145(Ma)-66(Ma)",
                            color: "rgb(127, 198, 78)",
                        },
                        {
                            geologicalName: "Jurassic",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "201.4(Ma)-145(Ma)",
                            color: "rgb(52, 178, 201)",
                        },
                        {
                            geologicalName: "Triassic",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "251.902(Ma)-201.4(Ma)",
                            color: "rgb(129, 43, 146)",
                        },
                    ]
                },
                {
                    geologicalName: "Paleozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "538.8(Ma)-251.902(Ma)",
                    color: "rgb(116, 198, 156)",
                    children: [
                        {
                            geologicalName: "Permian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "298.9(Ma)-251.902(Ma)",
                            color: "rgb(240, 4, 127)",
                        },
                        {
                            geologicalName: "Carboniferous",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "358.9(Ma)-298.9(Ma)",
                            color: "rgb(103, 165, 153)",
                            children: [
                                {
                                    geologicalName: "Pennsylvanian",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeInterval: "323.2(Ma)-298.9(Ma)",
                                    color: "rgb(153, 179, 153)",
                                },
                                {
                                    geologicalName: "Mississippian",
                                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.SUBPERIOD,
                                    timeInterval: "358.9(Ma)-323.2(Ma)",
                                    color: "rgb(179, 191, 165)",
                                },
                            ]
                        },
                        {
                            geologicalName: "Devonian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "419.2(Ma)-358.9(Ma)",
                            color: "rgb(203, 140, 55)",
                        },
                        {
                            geologicalName: "Silurian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "443.8(Ma)-419.2(Ma)",
                            color: "rgb(179, 225, 182)",
                        },
                        {
                            geologicalName: "Ordovician",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "485.4(Ma)-443.8(Ma)",
                            color: "rgb(0, 146, 112)",
                        },
                        {
                            geologicalName: "Cambrian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "538.8(Ma)-485.4(Ma)",
                            color: "rgb(127, 160, 86)",
                        }
                    ]
                }
            ]
        },
        {
            geologicalName: "Proterozoic",
            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "2500(Ma)-538.8(Ma)",
            color: "rgb(247, 6, 167)",
            children: [
                {
                    geologicalName: "Neoproterozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "1000(Ma)-538.8(Ma)",
                    color: "rgb(240, 5, 121)",
                    children: [
                        {
                            geologicalName: "Ediacaran",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "635(Ma)-538.8(Ma)",
                            color: "rgb(254, 217, 106)",
                        },
                        {
                            geologicalName: "Cryogenian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "720(Ma)-635(Ma)",
                            color: "rgb(254, 204, 92)",
                        },
                        {
                            geologicalName: "Tonian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1000(Ma)-720(Ma)",
                            color: "rgb(254, 191, 78)",
                        }
                    ]
                },
                {
                    geologicalName: "Mesoproterozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "1600(Ma)-1000(Ma)",
                    color: "rgb(240, 65, 149)",
                    children: [
                        {
                            geologicalName: "Stenian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1200(Ma)-1000(Ma)",
                            color: "rgb(248, 129, 184)",
                        },
                        {
                            geologicalName: "Ectasian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1400(Ma)-1200(Ma)",
                            color: "rgb(248, 116, 170)",
                        },
                        {
                            geologicalName: "Calymmian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1600(Ma)-1400(Ma)",
                            color: "rgb(248, 103, 156)",
                        }
                    ]
                },
                {
                    geologicalName: "Paleoproterozoic",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "2500(Ma)-1600(Ma)",
                    color: "rgb(247, 52, 136)",
                    children: [
                        {
                            geologicalName: "Statherian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "1800(Ma)-1600(Ma)",
                            color: "rgb(254, 180, 123)",
                        },
                        {
                            geologicalName: "Orosirian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2050(Ma)-1800(Ma)",
                            color: "rgb(254, 167, 109)",
                        },
                        {
                            geologicalName: "Rhyacian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2300(Ma)-2050(Ma)",
                            color: "rgb(254, 154, 95)",
                        },
                        {
                            geologicalName: "Siderian",
                            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.PERIOD,
                            timeInterval: "2500(Ma)-2300(Ma)",
                            color: "rgb(254, 141, 81)",
                        }
                    ]
                }
            ]
        },
        {
            geologicalName: "Archean",
            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "4031(Ma)-2500(Ma)",
            color: "rgb(240, 5, 121)",
            children: [
                {
                    geologicalName: "Neoarchean",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "2800(Ma)-2500(Ma)",
                    color: "rgb(249, 66, 158)",
                },
                {
                    geologicalName: "Mesoarchean",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "3200(Ma)-2800(Ma)",
                    color: "rgb(249, 53, 144)",
                },
                {
                    geologicalName: "Paleoarchean",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "3600(Ma)-3200(Ma)",
                    color: "rgb(249, 40, 130)",
                },
                {
                    geologicalName: "Eoarchean",
                    geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.ERA,
                    timeInterval: "4031(Ma)-3600(Ma)",
                    color: "rgb(249, 27, 116)",
                }
            ]
        },
        {
            geologicalName: "Hadean",
            geochronologicUnit: _constants_enums__WEBPACK_IMPORTED_MODULE_0__.GEOCHRONOLOGIC_UNIT.EON,
            timeInterval: "4567(Ma)-4031(Ma)",
            color: "rgb(231, 7, 71)",
        }
    ]
};


/***/ }),

/***/ "./src/data/fossils/life-events.ts":
/*!*****************************************!*\
  !*** ./src/data/fossils/life-events.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lifeEvents": () => (/* binding */ lifeEvents)
/* harmony export */ });
const lifeEvents = [
    {
        eventName: "First Hominids (Human Family)",
        estimatedDate: "6.5(Mya)"
    },
    {
        eventName: "First Whales",
        estimatedDate: "50(Mya)"
    },
    {
        eventName: "Cretaceous-Paleogene (K-Pg) Extinction Event",
        estimatedDate: "66(Mya)"
    },
    {
        eventName: "First Primates",
        estimatedDate: "85(Mya)"
    },
    {
        eventName: "First Flowering Plants",
        estimatedDate: "140(Mya)"
    },
    {
        eventName: "First Birds",
        estimatedDate: "150(Mya)"
    },
    {
        eventName: "First Large Pliosaurs",
        estimatedDate: "170(Mya)"
    },
    {
        eventName: "Triassic–Jurassic (Tr-J) Extinction Event (TJME)",
        estimatedDate: "201.4(Mya)"
    },
    {
        eventName: "First Dinosaurs, Mammals, Pterosaurs, Crocodiles ",
        estimatedDate: "225(Mya)"
    },
    {
        eventName: "First Ichthyosaurs",
        estimatedDate: "246(Mya)"
    },
    {
        eventName: "Permian–Triassic (P-Tr) Extinction Event (Great Dying)",
        estimatedDate: "251.9(Mya)"
    },
    {
        eventName: "First Mammal-Like Reptiles",
        estimatedDate: "275(Mya)"
    },
    {
        eventName: "First Reptiles",
        estimatedDate: "315(Mya)"
    },
    {
        eventName: "Late Devonian (Late D) Extinction Event (Kellwasser Event)",
        estimatedDate: "372(Mya)"
    },
    {
        eventName: "First Trees Forming Forests",
        estimatedDate: "385(Mya)"
    },
    {
        eventName: "First Amphibians (Tetrapods)",
        estimatedDate: "397(Mya)"
    },
    {
        eventName: "First Insects",
        estimatedDate: "400(Mya)"
    },
    {
        eventName: "First Bony Fish",
        estimatedDate: "420(Mya)"
    },
    {
        eventName: "First Placoderms",
        estimatedDate: "430(Mya)"
    },
    {
        eventName: "Late Ordovician (O-S) Extinction Event (LOME)",
        estimatedDate: "445(Mya)"
    },
    {
        eventName: "First Land Plants (Mosses)",
        estimatedDate: "470(Mya)"
    },
    {
        eventName: "First Fishes (Jawless Forms)",
        estimatedDate: "500(Mya)"
    },
];


/***/ }),

/***/ "./src/data/fossils/sharks-and-kin-events.ts":
/*!***************************************************!*\
  !*** ./src/data/fossils/sharks-and-kin-events.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sharksAndKinEvents": () => (/* binding */ sharksAndKinEvents)
/* harmony export */ });
const sharksAndKinEvents = [
    {
        eventName: "First Modern White Shark",
        estimatedDate: "8(Mya)"
    },
    {
        eventName: "First *Odontus megalodon*",
        estimatedDate: "23(Mya)"
    },
    {
        eventName: "First Requiem and Tiger Sharks",
        estimatedDate: "56(Mya)"
    },
    {
        eventName: "First *Odontus*",
        estimatedDate: "60(Mya)"
    },
    {
        eventName: "*Aquilolamna*",
        estimatedDate: "93(Mya)"
    },
    {
        eventName: "*Ptychodus*",
        estimatedDate: "105(Mya)"
    },
    {
        eventName: "*Cretooxyrhyina*",
        estimatedDate: "100(Mya)"
    },
    {
        eventName: "*Cardabiodon*",
        estimatedDate: "95(Mya)"
    },
    {
        eventName: "First Saw Sharks",
        estimatedDate: "146(Mya)"
    },
    {
        eventName: "*Palaeocarcharias*",
        estimatedDate: "165(Mya)"
    },
    {
        eventName: "*Ostenoselache*",
        estimatedDate: "197(Mya)"
    },
    {
        eventName: "First Modern Shark Families",
        estimatedDate: "198(Mya)"
    },
    {
        eventName: "First Rays",
        estimatedDate: "200(Mya)"
    },
    {
        eventName: "Hybodont Sharks Abundant",
        estimatedDate: "242(Mya)"
    },
    {
        eventName: "First Neoselachian Sharks",
        estimatedDate: "250(Mya)"
    },
    {
        eventName: "*Hybodue* Appears",
        estimatedDate: "252(Mya)"
    },
    {
        eventName: "*Helicoprion*",
        estimatedDate: "270(Mya)"
    },
    {
        eventName: "*Dracopristis*",
        estimatedDate: "307(Mya)"
    },
    {
        eventName: "*Bandringa*",
        estimatedDate: "310(Mya)"
    },
    {
        eventName: "*Akmonistion*",
        estimatedDate: "330(Mya)"
    },
    {
        eventName: "Holocephalan Peak Diversity",
        estimatedDate: "359(Mya)"
    },
    {
        eventName: "First Holocephalan",
        estimatedDate: "385(Mya)"
    },
    {
        eventName: "First Selachian Sharks",
        estimatedDate: "394(Mya)"
    },
    {
        eventName: "First Shark Body Fossil",
        estimatedDate: "420(Mya)"
    },
    {
        eventName: "*Shenacanthus*",
        estimatedDate: "436(Mya)"
    },
    {
        eventName: "First 'Stem-Chondrichthyan' Date",
        estimatedDate: "444(Mya)"
    },
    {
        eventName: "First 'Chondrichythan' Scales",
        estimatedDate: "455(Mya)"
    }
];


/***/ }),

/***/ "./src/drawing/drawing.ts":
/*!********************************!*\
  !*** ./src/drawing/drawing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drawing": () => (/* binding */ Drawing)
/* harmony export */ });
class Drawing {
    static adjustforPixelRatios(window, canvas, ctx, widthAdjustLimit = 0) {
        const devicePixelRatio = window ? window.devicePixelRatio : 1;
        const canvasRect = canvas.getBoundingClientRect();
        canvas.width = Math.max((Math.round(devicePixelRatio * canvasRect.right) -
            Math.round(devicePixelRatio * canvasRect.left)), devicePixelRatio * widthAdjustLimit);
        canvas.height = (Math.round(devicePixelRatio * canvasRect.bottom) -
            Math.round(devicePixelRatio * canvasRect.top));
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }
}


/***/ }),

/***/ "./src/models/time-interval.ts":
/*!*************************************!*\
  !*** ./src/models/time-interval.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeInterval": () => (/* binding */ TimeInterval)
/* harmony export */ });
class TimeInterval {
    constructor(begin, end) {
        Object.defineProperty(this, "_begin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_end", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._begin = begin;
        this._end = end;
    }
    get begin() { return this._begin; }
    get end() { return this._end; }
    get length() { return this._end - this._begin; }
    toString() { return `${this.begin}-${this.end}`; }
    toArray() { return [this._begin, this._end]; }
}


/***/ }),

/***/ "./src/scales/scale.ts":
/*!*****************************!*\
  !*** ./src/scales/scale.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scale": () => (/* binding */ Scale)
/* harmony export */ });
// Converts between geological time (in units of MYA) to CSS height
class Scale {
    constructor(domain, range) {
        Object.defineProperty(this, "_domain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_range", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this._domain = domain;
        this._range = range;
    }
    get domain() { return this._domain; }
    get range() { return this._range; }
    set domain(newDomain) { this._domain = newDomain; }
    set range(newRange) { this._range = newRange; }
    scale(value) {
        const domainLength = this._domain[1] - this._domain[0];
        const domainFraction = (value - this._domain[0]) / domainLength;
        const rangeLength = this._range[1] - this._range[0];
        const scaledValue = this._range[0] + domainFraction * rangeLength;
        return scaledValue;
    }
    inverse(scaledValue) {
        const rangeLength = this._range[1] - this._range[0];
        const rangeFraction = (scaledValue - this._range[0]) / rangeLength;
        const domainLength = this._domain[1] - this._domain[0];
        const value = this._domain[0] + rangeFraction * domainLength;
        return value;
    }
}


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoordinateStore": () => (/* binding */ CoordinateStore),
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _models_time_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/time-interval */ "./src/models/time-interval.ts");
/* harmony import */ var _scales_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scales/scale */ "./src/scales/scale.ts");


class Store {
    constructor(name) {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "scale", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "listeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "previousTimeInterval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "currentTimeInterval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ageOfEarth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.id = name;
        this.initializeStore();
    }
    setCoordinates(timeInterval) {
        this.previousTimeInterval = this.currentTimeInterval;
        this.currentTimeInterval = timeInterval;
        this.scale.domain = timeInterval.toArray();
        this.redrawListeners();
        this.updateListeners();
    }
    initializeStore() {
        this.listeners = {};
        this.ageOfEarth = new _models_time_interval__WEBPACK_IMPORTED_MODULE_0__.TimeInterval(0, 4567000000);
        this.initializeScale();
        this.currentTimeInterval = this.ageOfEarth;
    }
    initializeScale() {
        const domain = this.ageOfEarth.toArray();
        const range = [0, 0];
        this.scale = new _scales_scale__WEBPACK_IMPORTED_MODULE_1__.Scale(domain, range);
    }
    registerListener(listener) {
        this.listeners[listener.name] = listener;
    }
    updateListeners() {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw();
            listener.update();
        }
    }
    redrawListeners() {
        for (const listener of Object.values(this.listeners)) {
            listener.redraw();
        }
    }
    zoom(deltaY) {
        if (!this.currentTimeInterval || !this.ageOfEarth)
            return;
        const center = (this.currentTimeInterval.begin + this.currentTimeInterval.end) / 2;
        const half = this.currentTimeInterval.length / 2;
        const k = 1.1;
        const MIN_TIME_INTERVAL = 500;
        let begin, end;
        // zoom out
        if (deltaY > 0) {
            if (this.currentTimeInterval.begin === this.ageOfEarth.begin && this.currentTimeInterval.length === this.ageOfEarth.length)
                return;
            begin = center - half * k < 0 ? 0 : center - half * k;
            end = center + half * k > this.ageOfEarth.length ? this.ageOfEarth.length : center + half * k;
        }
        // zoom in
        else if (this.currentTimeInterval.length > MIN_TIME_INTERVAL) {
            begin = center - half / k;
            end = center + half / k;
        }
        else
            return;
        this.setCoordinates(new _models_time_interval__WEBPACK_IMPORTED_MODULE_0__.TimeInterval(begin, end));
    }
    scroll(deltaY) {
        if (!this.currentTimeInterval || !this.ageOfEarth)
            return;
        const SCROLL_FRICTION = 600;
        let begin, end;
        const shift = (this.currentTimeInterval.length * deltaY) / SCROLL_FRICTION;
        begin = this.currentTimeInterval.begin + shift - this.ageOfEarth.begin;
        end = this.currentTimeInterval.end + shift - this.ageOfEarth.begin;
        if (begin >= this.ageOfEarth.length - 1)
            return;
        if (begin < 0)
            begin = 0;
        if (end > this.ageOfEarth.length)
            end = this.ageOfEarth.length;
        this.setCoordinates(new _models_time_interval__WEBPACK_IMPORTED_MODULE_0__.TimeInterval(begin, end));
    }
}
const CoordinateStore = (function () {
    const instances = {};
    return {
        getInstance: (name = "store") => {
            if (!(name in instances))
                instances[name] = new Store(name);
            return instances[name];
        }
    };
})();


/***/ }),

/***/ "./src/tracks/base-track.ts":
/*!**********************************!*\
  !*** ./src/tracks/base-track.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTrack": () => (/* binding */ BaseTrack)
/* harmony export */ });
/* harmony import */ var _drawing_drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawing/drawing */ "./src/drawing/drawing.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./src/store.ts");


class BaseTrack extends HTMLElement {
    constructor() {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "template", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shadow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "canvas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ctx", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "label", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "width", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "isPanning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mouseDownPos", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.template = document.createElement("template");
        this.shadow = this.attachShadow({ mode: "open" });
        this.name = "base";
        this.label = "";
        this.isPanning = false;
        this.mouseDownPos = [0, 0];
    }
    /*----------------------------------------|
    |                 GETTERS                 |
    |----------------------------------------*/
    getStoreId() {
        return this.getAttribute("store");
    }
    getCanvasWidth() {
        return this.canvas.getBoundingClientRect().width;
    }
    getCanvasHeight() {
        return this.canvas.getBoundingClientRect().height;
    }
    /*----------------------------------------|
    |                 SETTERS                 |
    |----------------------------------------*/
    setCursorStyle(style) {
        this.canvas.style.cursor = style;
    }
    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/
    connectedCallback() {
        this.render();
        this.initializeTrack();
    }
    render() {
        this.template.innerHTML = this.html();
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.canvas = this.shadowRoot.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.store = _store__WEBPACK_IMPORTED_MODULE_1__.CoordinateStore.getInstance(this.getStoreId());
        this.addEventListeners();
        this.redraw();
    }
    initializeTrack() {
        this.store.registerListener(this);
    }
    addEventListeners() {
        this.canvas.addEventListener("mouseup", this.mouseUpHandler.bind(this));
        this.canvas.addEventListener("mouseout", this.mouseOutHandler.bind(this));
        this.canvas.addEventListener("mousedown", this.mouseDownHandler.bind(this));
        this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
    }
    /*----------------------------------------|
    |                 DRAWING                 |
    |----------------------------------------*/
    update() { }
    redraw() { }
    refreshCanvas() {
        this.clearCanvas();
        _drawing_drawing__WEBPACK_IMPORTED_MODULE_0__.Drawing.adjustforPixelRatios(window, this.canvas, this.ctx);
    }
    clearCanvas(opacity = 1) {
        this.ctx.fillStyle = "white";
        this.ctx.globalAlpha = opacity;
        this.ctx.fillRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight());
        this.ctx.globalAlpha = 1;
    }
    drawStyledText(ctx, text, x, y, normalFont, italicFont) {
        const parts = text.split('*');
        let currentX = x;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (part) { // Skip empty parts
                ctx.font = (i % 2 === 0) ? normalFont : italicFont;
                ctx.fillText(part, currentX, y);
                currentX += ctx.measureText(part).width;
            }
        }
    }
    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/
    html() {
        return `
            <style> ${this.css()} </style>
            <div id="track-container">
                <div id="track-label">${this.label || '&nbsp;'}</div>
                <div id="canvas-container">
                    <canvas id='${this.name}-track'></canvas>
                </div>
            </div>
        `;
    }
    css() {
        return `
            :host {
                display: block;
                height: 100%;
                width: fit-content;
            }

            #track-container, #canvas-container, #track-label {
                box-sizing: border-box;
            }

            #track-container {
                display: flex;
                flex-direction: column;
                width: ${this.width}px;
                height: 100%;
            }

            #track-label {
                height: 30px;
                line-height: 30px;
                text-align: center;
                background: #eee;
                font-size: 14px;
                font-weight: bold;
            }

            #canvas-container {
                display: block;
                width: ${this.width}px;
                height: calc(100% - 30px);
            }

            #track-label, #canvas-container {
                border: 1px solid black;
            }
            
            canvas {
                width: 100%;
                height: 100%;
                display: block;
            }
        `;
    }
    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/
    mouseDownHandler(event) {
        event.preventDefault();
        this.mouseDownPos = [event.offsetX, event.offsetY];
        this.isPanning = true;
    }
    mouseMoveHandler(event) {
        if (this.isPanning)
            this.handlePanning(event);
        else
            this.handleMouseNotOverFeature(event);
    }
    mouseOutHandler(event) {
        if (this.isPanning) {
            this.isPanning = false;
            this.setCursorStyle("grab");
        }
    }
    mouseUpHandler(event) {
        if (this.isPanning) {
            this.isPanning = false;
            this.setCursorStyle("grab");
        }
    }
    handlePanning(event) {
        this.setCursorStyle("grabbing");
        this.scrollVertically(event);
    }
    handleMouseNotOverFeature(event) {
        this.setCursorStyle("grab");
    }
    scrollVertically(event) {
        this.store.scroll(-event.movementY);
    }
}


/***/ }),

/***/ "./src/tracks/fossil-sites-events-track.ts":
/*!*************************************************!*\
  !*** ./src/tracks/fossil-sites-events-track.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FossilSitesEventsTrack": () => (/* binding */ FossilSitesEventsTrack)
/* harmony export */ });
/* harmony import */ var _data_fossils_fossil_sites_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/fossils/fossil-sites-events */ "./src/data/fossils/fossil-sites-events.ts");
/* harmony import */ var _text_events_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-events-track */ "./src/tracks/text-events-track.ts");


class FossilSitesEventsTrack extends _text_events_track__WEBPACK_IMPORTED_MODULE_1__.TextEventTrack {
    constructor() {
        super();
        this.name = "fossil-sites-events";
        this.label = "Fossil Sites";
        this.data = _data_fossils_fossil_sites_events__WEBPACK_IMPORTED_MODULE_0__.fossilSitesEvents;
    }
}


/***/ }),

/***/ "./src/tracks/life-events-track.ts":
/*!*****************************************!*\
  !*** ./src/tracks/life-events-track.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LifeEventsTrack": () => (/* binding */ LifeEventsTrack)
/* harmony export */ });
/* harmony import */ var _data_fossils_life_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/fossils/life-events */ "./src/data/fossils/life-events.ts");
/* harmony import */ var _text_events_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-events-track */ "./src/tracks/text-events-track.ts");


class LifeEventsTrack extends _text_events_track__WEBPACK_IMPORTED_MODULE_1__.TextEventTrack {
    constructor() {
        super();
        this.name = "life-events";
        this.label = "Life Events";
        this.data = _data_fossils_life_events__WEBPACK_IMPORTED_MODULE_0__.lifeEvents;
    }
}


/***/ }),

/***/ "./src/tracks/phylogenetic-tree-track.ts":
/*!***********************************************!*\
  !*** ./src/tracks/phylogenetic-tree-track.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhylogeneticTreeTrack": () => (/* binding */ PhylogeneticTreeTrack)
/* harmony export */ });
/* harmony import */ var _base_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-track */ "./src/tracks/base-track.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _data_fossils_fossil_species__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/fossils/fossil-species */ "./src/data/fossils/fossil-species.ts");



class PhylogeneticTreeTrack extends _base_track__WEBPACK_IMPORTED_MODULE_0__.BaseTrack {
    constructor() {
        super();
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "phylogenetic-tree";
        this.label = "Phylogenetic Tree";
        this.width = 400; // Adjust as needed
        this.data = _data_fossils_fossil_species__WEBPACK_IMPORTED_MODULE_2__.fossilSpeciesConfig; // Cast to interface
    }
    redraw() {
        this.refreshCanvas();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = "black";
        this.ctx.font = "12px Roboto, sans-serif";
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "middle";
        // Compute y positions (time-based)
        this.setY(this.data);
        // Compute x positions (layout)
        this.assignX(this.data, 0, this.width);
        // Draw the tree
        this.drawNode(this.data);
    }
    parseDate(dateStr) {
        if (!dateStr)
            return 0;
        const match = dateStr.match(/([\d\.]+)\(Mya\)/);
        if (!match)
            return 0;
        return parseFloat(match[1]) * _constants_constants__WEBPACK_IMPORTED_MODULE_1__.MA_FACTOR;
    }
    setY(node) {
        if (node.estimatedDate) {
            node.y = this.store.scale.scale(this.parseDate(node.estimatedDate));
            return node.y;
        }
        else if (node.children && node.children.length > 0) {
            let maxY = 0;
            for (const child of node.children) {
                const childY = this.setY(child);
                if (childY > maxY)
                    maxY = childY;
            }
            node.y = maxY;
            return maxY;
        }
        else {
            // Empty node; treat as y=0 or skip
            node.y = 0;
            return 0;
        }
    }
    getLeafCount(node) {
        if (!node.children || node.children.length === 0) {
            return (node.name || node.estimatedDate) ? 1 : 0; // Skip completely empty nodes
        }
        let sum = 0;
        for (const child of node.children) {
            sum += this.getLeafCount(child);
        }
        return sum;
    }
    assignX(node, xStart, xEnd) {
        if (xEnd - xStart <= 0)
            return; // Skip zero-width
        node.x = xStart + (xEnd - xStart) / 2;
        if (node.children && node.children.length > 0) {
            const totalLeaves = this.getLeafCount(node);
            if (totalLeaves === 0)
                return;
            let currentX = xStart;
            for (const child of node.children) {
                const childLeaves = this.getLeafCount(child);
                if (childLeaves === 0)
                    continue;
                const childWidth = (xEnd - xStart) * childLeaves / totalLeaves;
                this.assignX(child, currentX, currentX + childWidth);
                currentX += childWidth;
            }
        }
    }
    drawNode(node, parentX, parentY) {
        // Always draw lines and recurse, even if node.y is out of bounds (for partial views)
        const normalFont = "12px Roboto, sans-serif";
        const italicFont = "italic 12px Roboto, sans-serif";
        if (parentX !== undefined && parentY !== undefined && node.x !== undefined && node.y !== undefined) {
            this.ctx.beginPath();
            this.ctx.moveTo(parentX, parentY);
            this.ctx.lineTo(node.x, node.y);
            this.ctx.stroke();
        }
        // Draw text only if in view
        if (node.y !== undefined && node.y >= 0 && node.y <= this.getCanvasHeight() && node.name && node.x !== undefined) {
            this.ctx.textBaseline = "hanging";
            this.ctx.textAlign = "center";
            this.drawStyledText(this.ctx, node.name, node.x + 10, node.y, normalFont, italicFont);
        }
        if (node.children && node.children.length > 0) {
            for (const child of node.children) {
                this.drawNode(child, node.x, node.y);
            }
        }
    }
}


/***/ }),

/***/ "./src/tracks/ruler-track.ts":
/*!***********************************!*\
  !*** ./src/tracks/ruler-track.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulerTrack": () => (/* binding */ RulerTrack)
/* harmony export */ });
/* harmony import */ var _base_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-track */ "./src/tracks/base-track.ts");

class RulerTrack extends _base_track__WEBPACK_IMPORTED_MODULE_0__.BaseTrack {
    constructor() {
        super();
        this.name = "ruler";
        this.width = 60;
    }
    redraw() {
        this.refreshCanvas();
        this.drawRuler();
    }
    drawRuler() {
        const begin = this.store.currentTimeInterval.begin;
        const end = this.store.currentTimeInterval.end;
        const interval = this.getNiceTickInterval();
        if (interval <= 0)
            return;
        const startTick = Math.ceil(begin / interval) * interval;
        this.ctx.font = "10px Roboto, sans-serif";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "right";
        this.ctx.textBaseline = "middle";
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        for (let t = startTick; t <= end; t += interval) {
            const y = this.store.scale.scale(t);
            if (y < 0 || y > this.getCanvasHeight())
                continue;
            // Draw tick mark (short line on the right edge)
            this.ctx.beginPath();
            this.ctx.moveTo(this.width - 10, y);
            this.ctx.lineTo(this.width, y);
            this.ctx.stroke();
            // Draw label (years in the past, formatted appropriately)
            let label;
            if (t >= 1e9) {
                label = `${(t / 1e9).toFixed(2)} Ga`;
            }
            else if (t >= 1e6) {
                label = `${Math.round(t / 1e6)} Ma`;
            }
            else if (t >= 1e3) {
                label = `${Math.round(t / 1e3)} ka`;
            }
            else {
                this.ctx.textBaseline = "hanging";
                label = `${Math.round(t)} ya`;
            }
            this.ctx.fillText(label, this.width - 15, y);
            this.ctx.textBaseline = "middle";
        }
    }
    getNiceTickInterval() {
        const visibleDuration = this.store.currentTimeInterval.length;
        if (visibleDuration <= 0)
            return 0;
        const approxTicks = 10; // Aim for ~10 ticks
        const roughInterval = visibleDuration / approxTicks;
        const order = Math.floor(Math.log10(roughInterval));
        const base = Math.pow(10, order);
        const normalized = roughInterval / base;
        let niceNormalized;
        if (normalized < 1.5)
            niceNormalized = 1;
        else if (normalized < 3)
            niceNormalized = 2;
        else if (normalized < 7)
            niceNormalized = 5;
        else
            niceNormalized = 10;
        return niceNormalized * base;
    }
}


/***/ }),

/***/ "./src/tracks/sharks-and-kin-events-track.ts":
/*!***************************************************!*\
  !*** ./src/tracks/sharks-and-kin-events-track.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharksAndKinEventsTrack": () => (/* binding */ SharksAndKinEventsTrack)
/* harmony export */ });
/* harmony import */ var _data_fossils_sharks_and_kin_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/fossils/sharks-and-kin-events */ "./src/data/fossils/sharks-and-kin-events.ts");
/* harmony import */ var _text_events_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-events-track */ "./src/tracks/text-events-track.ts");


class SharksAndKinEventsTrack extends _text_events_track__WEBPACK_IMPORTED_MODULE_1__.TextEventTrack {
    constructor() {
        super();
        this.name = "sharks-and-kin-events";
        this.label = "Sharks & Kin";
        this.data = _data_fossils_sharks_and_kin_events__WEBPACK_IMPORTED_MODULE_0__.sharksAndKinEvents;
    }
}


/***/ }),

/***/ "./src/tracks/text-events-track.ts":
/*!*****************************************!*\
  !*** ./src/tracks/text-events-track.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextEventTrack": () => (/* binding */ TextEventTrack)
/* harmony export */ });
/* harmony import */ var _base_track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-track */ "./src/tracks/base-track.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");


class TextEventTrack extends _base_track__WEBPACK_IMPORTED_MODULE_0__.BaseTrack {
    constructor() {
        super();
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "text-events";
        this.width = 300;
        this.data = [];
    }
    redraw() {
        this.refreshCanvas();
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "left";
        this.ctx.font = "12px Roboto, sans-serif";
        this.ctx.textBaseline = "hanging";
        const normalFont = "12px Roboto, sans-serif";
        const italicFont = "italic 12px Roboto, sans-serif";
        // Collect visible events with their y positions
        const visibleEvents = [];
        for (const event of this.data) {
            const match = event.estimatedDate.match(/([\d\.]+)\(Mya\)/);
            if (!match)
                continue;
            const value = parseFloat(match[1]) * _constants_constants__WEBPACK_IMPORTED_MODULE_1__.MA_FACTOR;
            const y = this.store.scale.scale(value);
            if (y >= 0 && y <= this.getCanvasHeight()) {
                visibleEvents.push({ event, y });
            }
        }
        // Sort by y ascending (top to bottom)
        visibleEvents.sort((a, b) => a.y - b.y);
        // Draw with min spacing to avoid overlap
        const minSpacing = 15; // Pixels; adjust as needed
        let lastY = -Infinity;
        for (const { event, y } of visibleEvents) {
            if (y - lastY >= minSpacing) {
                this.drawStyledText(this.ctx, event.eventName, 10, y, normalFont, italicFont);
                lastY = y;
            }
        }
    }
}


/***/ }),

/***/ "./src/tracks/time-track.ts":
/*!**********************************!*\
  !*** ./src/tracks/time-track.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeTrack": () => (/* binding */ TimeTrack)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/constants/constants.ts");
/* harmony import */ var _data_fossils_geological_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/fossils/geological-time */ "./src/data/fossils/geological-time.ts");
/* harmony import */ var _base_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-track */ "./src/tracks/base-track.ts");



class TimeTrack extends _base_track__WEBPACK_IMPORTED_MODULE_2__.BaseTrack {
    constructor() {
        super();
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "time";
        this.label = "Geologic Time";
        this.width = 240;
        this.data = _data_fossils_geological_time__WEBPACK_IMPORTED_MODULE_1__.geologicalTimeConfig;
    }
    redraw() {
        this.refreshCanvas();
        this.redrawRecursive(this.data.children, 0);
    }
    redrawRecursive(timeConfigs, depth) {
        const columnWidth = Math.round(this.width / 3);
        const columnWidths = [columnWidth, columnWidth, columnWidth];
        const colW = columnWidths[depth] || 50;
        const x = columnWidths.slice(0, depth).reduce((a, b) => a + b, 0);
        for (const timeConfig of timeConfigs) {
            const geologicalName = timeConfig.geologicalName;
            const timeInterval = timeConfig.timeInterval;
            let timeBegin = parseFloat(timeInterval.split('-')[0].split('(')[0]);
            let timeEnd = parseFloat(timeInterval.split('-')[1].split('(')[0]);
            const timeBeginUnit = timeInterval.split('-')[0].split('(')[1].split(')')[0];
            const timeEndUnit = timeInterval.split('-')[1].split('(')[1].split(')')[0];
            if (timeBeginUnit === "Ga")
                timeBegin *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GA_FACTOR;
            else if (timeBeginUnit === "Ma")
                timeBegin *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MA_FACTOR;
            else if (timeBeginUnit === "ka")
                timeBegin *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.KA_FACTOR;
            if (timeEndUnit === "Ga")
                timeEnd *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.GA_FACTOR;
            else if (timeEndUnit === "Ma")
                timeEnd *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.MA_FACTOR;
            else if (timeEndUnit === "ka")
                timeEnd *= _constants_constants__WEBPACK_IMPORTED_MODULE_0__.KA_FACTOR;
            const yBegin = this.store.scale.scale(timeBegin);
            const yEnd = this.store.scale.scale(timeEnd);
            const height = yBegin - yEnd;
            // Skip if entirely out of view
            if (yEnd >= this.getCanvasHeight() || yBegin <= 0)
                continue;
            // Draw the unit
            const color = timeConfig.color || "rgb(200,200,200)";
            this.ctx.fillStyle = color;
            this.ctx.globalAlpha = 0.7;
            this.ctx.fillRect(x, yEnd, colW, height);
            this.ctx.strokeStyle = "black";
            this.ctx.strokeRect(x, yEnd, colW, height);
            this.ctx.globalAlpha = 1;
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x, yEnd);
            this.ctx.lineTo(x + colW, yEnd);
            this.ctx.stroke();
            const MIN_TEXT_HEIGHT = 20;
            const ROTATE_TEXT_HEIGHT = 40;
            this.ctx.textAlign = "center";
            this.ctx.textBaseline = "middle";
            this.ctx.fillStyle = "black";
            if (height > MIN_TEXT_HEIGHT) {
                const midY = yEnd + height / 2;
                if (height > ROTATE_TEXT_HEIGHT && colW >= 50) {
                    this.ctx.fillText(geologicalName, x + colW / 2, midY);
                }
            }
            // Recurse to children if threshold met (show finer hierarchy on zoom)
            const SUBDIVIDE_THRESHOLD = 50; // Pixels; adjust for sensitivity
            if (timeConfig.children && timeConfig.children.length > 0 && height > SUBDIVIDE_THRESHOLD) {
                this.redrawRecursive(timeConfig.children, depth + 1);
            }
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/fossilTreeComponent.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FossilTreeComponent": () => (/* binding */ FossilTreeComponent)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store.ts");
/* harmony import */ var _tracks_time_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracks/time-track */ "./src/tracks/time-track.ts");
/* harmony import */ var _tracks_ruler_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tracks/ruler-track */ "./src/tracks/ruler-track.ts");
/* harmony import */ var _tracks_life_events_track__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tracks/life-events-track */ "./src/tracks/life-events-track.ts");
/* harmony import */ var _tracks_sharks_and_kin_events_track__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tracks/sharks-and-kin-events-track */ "./src/tracks/sharks-and-kin-events-track.ts");
/* harmony import */ var _tracks_fossil_sites_events_track__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tracks/fossil-sites-events-track */ "./src/tracks/fossil-sites-events-track.ts");
/* harmony import */ var _tracks_phylogenetic_tree_track__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tracks/phylogenetic-tree-track */ "./src/tracks/phylogenetic-tree-track.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








customElements.define("time-track", _tracks_time_track__WEBPACK_IMPORTED_MODULE_1__.TimeTrack);
customElements.define("ruler-track", _tracks_ruler_track__WEBPACK_IMPORTED_MODULE_2__.RulerTrack);
customElements.define("life-events-track", _tracks_life_events_track__WEBPACK_IMPORTED_MODULE_3__.LifeEventsTrack);
customElements.define("sharks-and-kin-events-track", _tracks_sharks_and_kin_events_track__WEBPACK_IMPORTED_MODULE_4__.SharksAndKinEventsTrack);
customElements.define("fossil-sites-events-track", _tracks_fossil_sites_events_track__WEBPACK_IMPORTED_MODULE_5__.FossilSitesEventsTrack);
customElements.define("phylogenetic-tree-track", _tracks_phylogenetic_tree_track__WEBPACK_IMPORTED_MODULE_6__.PhylogeneticTreeTrack);
var FossilTreeComponent = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FossilTreeComponent, _HTMLElement);

  var _super = _createSuper(FossilTreeComponent);

  function FossilTreeComponent() {
    var _this;

    _classCallCheck(this, FossilTreeComponent);

    _this = _super.call(this);
    _this.template = document.createElement("template");
    _this.shadow = _this.attachShadow({
      mode: "open"
    });
    _this.storeId = _this.createStoreId();
    return _this;
  }
  /*----------------------------------------|
  |                 GETTERS                 |
  |----------------------------------------*/


  _createClass(FossilTreeComponent, [{
    key: "getStoreId",
    value: function getStoreId() {
      return this.storeId;
    }
  }, {
    key: "createStoreId",
    value: function createStoreId() {
      return Math.random().toString(16).slice(2);
    }
    /*----------------------------------------|
    |                LIFECYCLE                |
    |----------------------------------------*/

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
      this.initializeFossilTree();
      this.setupEventListeners();
      this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
      this.resizeObserver.observe(this);
      this.handleResize();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.removeEventListeners();

      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.template.innerHTML = this.html();
      this.shadow.appendChild(this.template.content.cloneNode(true));
    }
  }, {
    key: "initializeFossilTree",
    value: function initializeFossilTree() {
      this.addTracks();
    }
  }, {
    key: "addTracks",
    value: function addTracks() {
      var container = this.shadow.querySelector("#track-container");
      var rulerTrack = document.createElement("ruler-track");
      rulerTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(rulerTrack);
      var timeTrack = document.createElement("time-track");
      timeTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(timeTrack);
      var lifeEventsTrack = document.createElement("life-events-track");
      lifeEventsTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(lifeEventsTrack);
      var sharksAndKinEventsTrack = document.createElement("sharks-and-kin-events-track");
      sharksAndKinEventsTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(sharksAndKinEventsTrack);
      var fossilSitesEventsTrack = document.createElement("fossil-sites-events-track");
      fossilSitesEventsTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(fossilSitesEventsTrack);
      var phylogeneticTreeTrack = document.createElement("phylogenetic-tree-track");
      phylogeneticTreeTrack.setAttribute("store", this.storeId);
      container === null || container === void 0 ? void 0 : container.appendChild(phylogeneticTreeTrack);
    }
    /*----------------------------------------|
    |               HTML & CSS                |
    |----------------------------------------*/

  }, {
    key: "html",
    value: function html() {
      return "\n            <style> ".concat(this.css(), " </style>\n            <div id=\"app-container\">\n                <nav id=\"main-nav\">\n                    <a href=\"/\">Go to Shark Tree</a>\n                </nav>\n                <div id=\"track-container\"></div>\n            </div>\n        ");
    }
  }, {
    key: "css",
    value: function css() {
      return "\n            :host {\n                display: block;\n                width: 100%;\n                height: 100vh;\n            }\n            #main-nav {\n                background: #eee;\n                padding: 15px;\n                text-align: center;\n                border-bottom: 1px solid #E0E0E0;\n                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n                font-family: \"Roboto\", sans-serif;\n                font-size: 16px;\n                font-weight: bold;\n                position: relative;\n                top: 0;\n                left: 0;\n                width: 100%;\n                z-index: 99;\n            }\n            #main-nav a {\n                color: #00688B;\n                text-decoration: none;\n                transition: color 0.2s ease;\n            }\n            #main-nav a:hover {\n                color: #004d6f;\n            }\n            #app-container {\n                position: relative;\n                width: 100%;\n                height: 100%;\n                background: #FFFFFF;\n                font-family: \"Roboto\", sans-serif;\n            }\n            #track-container {\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-start;\n                width: 100%;\n                height: 100%;\n            }\n        ";
    }
    /*----------------------------------------|
    |                HANDLERS                 |
    |----------------------------------------*/

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      window.addEventListener("wheel", this.wheelHandler.bind(this), {
        passive: false
      });
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return;
    }
  }, {
    key: "wheelHandler",
    value: function wheelHandler(event) {
      var store = _store__WEBPACK_IMPORTED_MODULE_0__.CoordinateStore.getInstance(this.storeId);
      event.preventDefault();
      store.zoom(event.deltaY);
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      var height = this.getBoundingClientRect().height;

      if (height > 0) {
        var store = _store__WEBPACK_IMPORTED_MODULE_0__.CoordinateStore.getInstance(this.storeId);
        store.scale.range = [0, height];
        store.redrawListeners();
      }
    }
  }]);

  return FossilTreeComponent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define("fossil-tree-component", FossilTreeComponent);
})();

/******/ })()
;
//# sourceMappingURL=fossil.cd2edb4fd93bc5592727.js.map