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
            count: 245,
        },
        description: `As authentic as a vintage "I'm a Pepper®" tee, Dr Pepper is always original. A signature blend of 23 flavors makes every sip of Dr Pepper truly unique. There's nothing like a Dr Pepper.`,
        bg: "var(--dp-deep-red)",
    },
    {
        id: "dp-002",
        name: "DIET DR PEPPER",
        pricePerCents: 150,
        image: DrPepperDietcan,
        rating: {
            stars: 4.5,
            count: 182,
        },
        description:
            "A satisfying diet drink does exist! Diet Dr Pepper offers the same 23 flavors of regular Dr Pepper, without the calories. Try one today and enjoy the unbelievably satisfying taste.",
        bg: "#DDD6D8",
    },
    {
        id: "dp-003",
        name: "DR PEPPER ZERO SUGAR",
        pricePerCents: 150,
        image: DrPepper0Sugarcan,
        rating: {
            stars: 4.5,
            count: 210,
        },
        description:
            "And just when you thought perfect flavor couldn’t get any more perfect-er. This zero-sugar captivates your tastebuds with the iconic blend of 23 flavors. It’s the delicious double-take your tastebuds deserve.",
        bg: "#111111",
    },
    {
        id: "dp-004",
        name: "DR PEPPER CREAMY COCONUT",
        pricePerCents: 175,
        image: DrPepperCreamyCoconutCan,
        rating: {
            stars: 4.5,
            count: 156,
        },
        description:
            "LIMITED TIME: Indulge in the ultimate treat for summer — Dr Pepper Creamy Coconut soda beverage, a combination of distinctive Dr Pepper flavor with the refreshing taste of coconut.",
        bg: "#5EBCEB",
    },
    {
        id: "dp-005",
        name: "DR PEPPER CREAMY COCONUT ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCreamyCoconut0SugarCan,
        rating: {
            stars: 4,
            count: 98,
        },
        description:
            "LIMITED TIME: Indulge in the ultimate treat for summer — Dr Pepper Creamy Coconut soda beverage, a combination of distinctive Dr Pepper flavor with the refreshing taste of coconut.",
        bg: "#9BD7F5",
    },
    {
        id: "dp-006",
        name: "DR PEPPER BLACKBERRY",
        pricePerCents: 175,
        image: DrPepperBlackberryCan,
        rating: {
            stars: 4.5,
            count: 134,
        },
        description: `You ask yourself every morning, “What flavor could Dr Pepper possibly do next?”. The answer is Blackberry. Dr Pepper Blackberry sounds as good as it tastes and tastes as good as it sounds. Its bold, one-of-a-kind flavor leaves you as curious as you are satisfied. But no more questions, just close your eyes and savor every sip.`,
        bg: "#7F1A76",
    },
    {
        id: "dp-007",
        name: "DR PEPPER BLACKBERRY ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperBlackberry0SugarCan,
        rating: {
            stars: 4,
            count: 87,
        },
        description:
            "If you’re reading this then you’re probably here to be reassured that Dr Pepper Blackberry Zero Sugar has the same bold, sweet flavor as Dr Pepper Blackberry. Well guess what? It does. So crack one and sip away with zero guilt my blackberry-loving- sugar-hating-friend.",
        bg: "#401749",
    },
    {
        id: "dp-008",
        name: "DR PEPPER STRAWBERRIES & CREAM",
        pricePerCents: 175,
        image: DrPepperStrawberriesCreamCan,
        rating: {
            stars: 5,
            count: 192,
        },
        description:
            "Welcome Dr Pepper Strawberries & Cream to our ensemble of deliciousness. A refreshing strawberry flavor with a smooth, creamy finish that’ll leave your taste buds craving more. Sip slowly, and soothe yourself into a strawberry state of mind.",
        bg: "#E88597",
    },
    {
        id: "dp-009",
        name: "DR PEPPER STRAWBERRIES & CREAM ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperStrawberriesCream0SugarCan,
        rating: {
            stars: 4.5,
            count: 112,
        },
        description:
            "Dr Pepper Strawberries & Cream Zero Sugar is here. It’s the same smooth, creamy, strawberry flavor you know and love, without the sugar. Crack open the sugarless treat you deserve, and ride this highway to the flavor zone.",
        bg: "#DB5E75",
    },
    {
        id: "dp-010",
        name: "DR PEPPER CHERRY",
        pricePerCents: 175,
        image: DrPepperCherryCan,
        rating: {
            stars: 4.5,
            count: 143,
        },
        description:
            "Introducing Dr Pepper Cherry. The newest, smoothest addition to the Dr Pepper family that's so amazingly smooth you just have to try it. A kiss of cherry makes it the smoothest Dr Pepper ever. Drink it smoother. Dr's orders.",
        bg: "#FF4D56",
    },
    {
        id: "dp-011",
        name: "DR PEPPER CHERRY ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCherry0SugarCan,
        rating: {
            stars: 4,
            count: 91,
        },
        description:
            "Introducing Dr Pepper Cherry Zero Sugar. The delicious taste you loved from Diet Cherry, now brought to life with the same smooth blend of cherry and Dr Pepper Zero Sugar. It’s the smooth cherry treat you deserve.",
        bg: "#04474F",
    },
    {
        id: "dp-012",
        name: "DR PEPPER & CREAM SODA",
        pricePerCents: 175,
        image: DrPepperCreamSodaCan,
        rating: {
            stars: 4.5,
            count: 165,
        },
        description:
            "A brand-new duet that is sweeter than any other. The beloved Dr Pepper paired with the richness of cream soda makes for perfect flavor harmony. Take a sip of the symphony of deliciousness.",
        bg: "#F5DFCA",
    },
    {
        id: "dp-013",
        name: "DR PEPPER & CREAM SODA ZERO SUGAR",
        pricePerCents: 175,
        image: DrPepperCreamSoda0SugarCan,
        rating: {
            stars: 4,
            count: 105,
        },
        description:
            "From the tastemakers who brought you Diet Dr Pepper & Cream Soda comes Dr Pepper & Cream Soda Zero Sugar. The richness of cream soda harmonizes with all 23 flavors of Dr Pepper in the delicious zero-sugar treat you deserve.",
        bg: "#F2C58B",
    },
    {
        id: "dp-014",
        name: "CAFFEINE DR PEPPER",
        pricePerCents: 150,
        image: DrPepperCaffeineFreeCan,
        rating: {
            stars: 4,
            count: 76,
        },
        description:
            "Maybe you don't need that extra pep of caffeine. Maybe you're plenty peppy just the way you are. You can still enjoy that same authentic Dr Pepper taste. Caffeine Free Dr Pepper delivers that original blend of 23 flavors you expect. Enjoy it slow, in that relaxed decaffeinated rhythm of yours, and you'll taste all 23. It's everything you love about Dr Pepper, without the caffeine.",
        bg: "#B99353",
    },
    {
        id: "dp-015",
        name: "CAFFEINE FREE DIET DR PEPPER",
        pricePerCents: 150,
        image: DrPepperDietCaffeineFreeCan,
        rating: {
            stars: 4,
            count: 68,
        },
        description:
            "Caffeine Free Diet Dr Pepper brings you the taste, and nothing but the taste. No calories, no caffeine, just the rich, bold refreshment of Dr Pepper. That signature blend is so rich and bold, you won't miss what's missing. Sip, don't chug: research shows slower is better. You'll see there's nothing diet (or caffeinated) about it.",
        bg: "#FFF0CA",
    },
    {
        id: "dp-016",
        name: "CHERRY VANILLA DR PEPPER",
        pricePerCents: 175,
        image: DrPepperCherryVanilla,
        rating: {
            stars: 4.5,
            count: 119,
        },
        description:
            "A splash of cherry, a hint of vanilla, and the authentic taste of Dr Pepper. That's one tasteful triple threat, otherwise known as Cherry Vanilla Dr Pepper, a refreshing blast from the past. Don't chug, people. You'll want to savor this rich soda fountain goodness. So pull up a seat and enjoy a taste so flavorful it just goes on and on and on...",
        bg: "#540520",
    },
    {
        id: "dp-017",
        name: "DIET CHERRY VANILLA DR PEPPER",
        pricePerCents: 175,
        image: DrPepperDietCherryVanilla,
        rating: {
            stars: 4,
            count: 83,
        },
        description:
            "On the first sip, you taste the splash of bold cherry. Then comes a light note of vanilla, and it's all wrapped in the authentic flavor of Dr Pepper. So where's the diet? Sorry, there's nothing diet about this delicious soda fountain blend. Until you read our handy nutrition facts and discover a blissful absence of calories. Enjoy it slow, like the uncompromising connoisseur you are.",
        bg: "#FFE786",
    },
    {
        id: "dp-018",
        name: "DR PEPPER MADE WITH REAL SUGAR",
        pricePerCents: 175,
        image: DrPepperRealSugarCan,
        rating: {
            stars: 5,
            count: 104,
        },
        description:
            "Made with Imperial Pure Cane Sugar, the 23 flavors of Dr Pepper have never tasted so special. Made with Sugar, made for you! Try Dr Pepper Made with Sugar now.",
        bg: "#C81C32",
    },
];

export default products;
