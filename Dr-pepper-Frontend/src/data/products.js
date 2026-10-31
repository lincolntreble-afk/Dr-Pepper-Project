
import DrPepperogcan from "../assets/Dr-pepper-og-can.png";
import DrPepperDietcan from "../assets/Dr-Pepper-diet-can.png";
import DrPepper0Sugarcan from "../assets/Dr-Pepper-0-sugar-can.png";

import DrPepperCreamyCoconutCan from "../assets/images/products/DP_CreamyCoconut.webp";
import DrPepperCreamyCoconut0SugarCan from "../assets/images/products/DP_CreamyCoconut_ZS.webp";

import DrPepperBlackberryCan from "../assets/images/products/DP_Blackberry.png";
import DrPepperBlackberry0SugarCan from "../assets/images/products/DP_Blackberry_ZS.png";

import DrPepperStrawberriesCreamCan from "../assets/images/products/DP_StrawberriesCream.webp";
import DrPepperStrawberriesCream0SugarCan from "../assets/images/products/DP_StrawberriesCream_ZS.webp";

import DrPepperCherryCan from "../assets/images/products/DP_Cherry.png";
import DrPepperCherry0SugarCan from "../assets/images/products/DP_Cherry_ZS.png";

import DrPepperCreamSodaCan from "../assets/images/products/DP_CreamSoda.webp";
import DrPepperCreamSoda0SugarCan from "../assets/images/products/DP_CreamSoda_ZS.webp";

import DrPepperCaffeineFreeCan from "../assets/images/products/DP_CaffeineFree.png";
import DrPepperDietCaffeineFreeCan from "../assets/images/products/DP_Diet_CaffeineFree.png";

import DrPepperCherryVanilla from "../assets/images/products/DP_CherryVanilla.png";
import DrPepperDietCherryVanilla from "../assets/images/products/DP_Diet_CherryVanilla.png";

import DrPepperRealSugarCan from "../assets/images/products/DP_RealSugar.png";


const products = [
    {
        id: "dp-001",
        name: "DR PEPPER",
        pricePerCents: 150,
        image: DrPepperogcan,
        rating: {
            stars: 5,
            count: 245
        },
        description: "The original Dr Pepper, featuring its signature blend of 23 flavours. A unique combination of sweet, bold and refreshing flavours."
    },
    {
        id: "dp-002",
        name: "DIET DR PEPPER",
        pricePerCents: 150,
        image: DrPepperDietcan,
        rating: {
            stars: 4.5,
            count: 182
        },
        description: "Enjoy the distinctive taste of Dr Pepper with a lighter, diet alternative that delivers the familiar flavour without the regular sugar."
    },
    {
        id: "dp-003",
        name: "DR PEPPER ZERO SUGAR",
        pricePerCents: 150,
        image: DrPepper0Sugarcan,
        rating: {
            stars: 4.5,
            count: 210
        },
        description: "All the bold flavour of original Dr Pepper, without the sugar. A refreshing alternative for those looking for a zero-sugar option."
    },
    {
        id: "dp-004",
        name: "DR PEPPER CREAMY COCONUT",
        pricePerCents: 175,
        image: DrPepperCreamyCoconutCan,
        rating: {
            stars: 4.5,
            count: 156
        },
        description: "A tropical twist on the classic Dr Pepper flavour, combining its signature taste with smooth and creamy coconut notes."
    },
    {
        id: "dp-005",
        name: "DR PEPPER CREAMY COCONUT ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCreamyCoconut0SugarCan,
        rating: {
            stars: 4,
            count: 98
        },
        description: "The tropical combination of Dr Pepper and creamy coconut, available in a zero-sugar version while keeping its distinctive flavour."
    },
    {
        id: "dp-006",
        name: "DR PEPPER BLACKBERRY",
        pricePerCents: 175,
        image: DrPepperBlackberryCan,
        rating: {
            stars: 4.5,
            count: 134
        },
        description: "A fruity variation of the original Dr Pepper, combining its signature 23 flavours with a sweet blackberry twist."
    },
    {
        id: "dp-007",
        name: "DR PEPPER BLACKBERRY ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperBlackberry0SugarCan,
        rating: {
            stars: 4,
            count: 87
        },
        description: "A zero-sugar take on Dr Pepper Blackberry, bringing together the familiar flavour of Dr Pepper and fruity blackberry notes."
    },
    {
        id: "dp-008",
        name: "DR PEPPER STRAWBERRIES & CREAM",
        pricePerCents: 175,
        image: DrPepperStrawberriesCreamCan,
        rating: {
            stars: 5,
            count: 192
        },
        description: "A sweet and creamy combination of Dr Pepper's signature flavour with the taste of strawberries and smooth cream."
    },
    {
        id: "dp-009",
        name: "DR PEPPER STRAWBERRIES & CREAM ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperStrawberriesCream0SugarCan,
        rating: {
            stars: 4.5,
            count: 112
        },
        description: "The fruity combination of strawberries, cream and Dr Pepper, offered in a zero-sugar alternative."
    },
    {
        id: "dp-010",
        name: "DR PEPPER CHERRY",
        pricePerCents: 175,
        image: DrPepperCherryCan,
        rating: {
            stars: 4.5,
            count: 143
        },
        description: "A cherry-inspired twist on the original Dr Pepper, combining its recognisable flavour with sweet cherry notes."
    },
    {
        id: "dp-011",
        name: "DR PEPPER CHERRY ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCherry0SugarCan,
        rating: {
            stars: 4,
            count: 91
        },
        description: "The classic Dr Pepper Cherry flavour in a zero-sugar alternative, offering a fruity and refreshing taste."
    },
    {
        id: "dp-012",
        name: "DR PEPPER & CREAM SODA",
        pricePerCents: 175,
        image: DrPepperCreamSodaCan,
        rating: {
            stars: 4.5,
            count: 165
        },
        description: "A smooth combination of Dr Pepper's signature flavour and the sweet, creamy taste of classic cream soda."
    },
    {
        id: "dp-013",
        name: "DR PEPPER & CREAM SODA ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCreamSoda0SugarCan,
        rating: {
            stars: 4,
            count: 105
        },
        description: "The smooth and creamy taste of Dr Pepper and cream soda, recreated in a zero-sugar version."
    },
    {
        id: "dp-014",
        name: "CAFFEINE DR PEPPER",
        pricePerCents: 150,
        image: DrPepperCaffeineFreeCan,
        rating: {
            stars: 4,
            count: 76
        },
        description: "Enjoy the distinctive taste of original Dr Pepper without the caffeine, while retaining its familiar flavour."
    },
    {
        id: "dp-015",
        name: "CAFFEINE FREE DIET DR PEPPER",
        pricePerCents: 150,
        image: DrPepperDietCaffeineFreeCan,
        rating: {
            stars: 4,
            count: 68
        },
        description: "A diet version of Dr Pepper that combines its familiar flavour with a caffeine-free alternative."
    },
    {
        id: "dp-016",
        name: "CHERRY VANILLA DR PEPPER",
        pricePerCents: 175,
        image: DrPepperCherryVanilla,
        rating: {
            stars: 4.5,
            count: 119
        },
        description: "A combination of sweet cherry and smooth vanilla flavours blended with the original Dr Pepper taste."
    },
    {
        id: "dp-017",
        name: "DIET CHERRY VANILLA DR PEPPER",
        pricePerCents: 175,
        image: DrPepperDietCherryVanilla,
        rating: {
            stars: 4,
            count: 83
        },
        description: "A lighter diet alternative combining the fruity taste of cherry and smooth vanilla with Dr Pepper's signature flavour."
    },
    {
        id: "dp-018",
        name: "DR PEPPER MADE WITH REAL SUGAR",
        pricePerCents: 175,
        image: DrPepperRealSugarCan,
        rating: {
            stars: 5,
            count: 104
        },
        description: "A variation of the original Dr Pepper made with real sugar, delivering its familiar blend of 23 distinctive flavours."
    }
];

export default products;
