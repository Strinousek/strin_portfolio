const colors = {
    lightOrange: "#ffeaa7",
    orange: "#fdcb6e",
    lightRed: "#ff7675",
    red: "#d63031",
    lightBlue: "#74b9ff",
    blue: "#0984e3",
    lightPurple: "#a29bfe",
    purple: "#6c5ce7",
    lightGreen: "#55efc4",
    green: "#00b894",
    lightBrown: "#ff7675",
    brown: "#e17055",
    lightGrey: "#dfe6e9",
    grey: "#b2bec3",
    lightPink: "#fd79a8",
    pink: "#e84393",
};

export const mottos: string[] = [
    "Work harder, play harder.",
    "You got one life, so live like it.",
    "Always remember, someone does care about you. You matter!",
    "It ain't about how hard you hit, it's about how hard you can get hit and keep moving forward.",
    "Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.",
    "Don’t let anyone ever make you feel like you don’t deserve what you want.",
    "There is no point in being perfect. Your flaws make you who you are."
];

type ProjectType = {
    title: string;
    company?: string;
    from?: Date;
    to?: Date;
    description?: string;
    technologiesUsed?: string[];
    url?: string;
}

export const projects: ProjectType[] = [
    {
        title: "Essorio",
        company: "TwoDo",
        from: new Date("05/04/2021"),
        to: new Date("12/30/2021"),
        technologiesUsed: ["React.js", "React Router", "Styled-components", "Typescript"],
        url: "https://essorio.cz/",
    },
    {
        title: "Ericonn",
        company: "TwoDo",
        from: new Date("05/19/2021"),
        to: new Date("12/30/2021"),
        technologiesUsed: ["React.js", "React Router", "Styled-components", "Typescript"],
        url: "https://ericonn.cz/",
    },
    {
        title: "The Rave Project",
        from: new Date("07/01/2023"),
        description: "Czechoslovakian FiveM Roleplay Server. Currently in development.",
        technologiesUsed: ["Lua", "Javascript", "JQuery", "HTML", "CSS", "React.js"],
    },
    {
        title: "Odkladydane",
        from: new Date("04/01/2023"),
        description: "Web application for tax deferral with a payment gateway.",
        technologiesUsed: ["ASP.NET Core 6", "Entity Framework", "Comgate API", "Razor MVC", "Bootstrap", "MySQL"],
    },
];

type TechnicalStackItemType = {
    icon?: string;
    textIcon?: string;
    iconColor?: string;
    title: string;
}

export const technicalStack: TechnicalStackItemType[] = [
    {
        icon: "fa-brands fa-js",
        iconColor: colors.orange,
        title: "Javascript",
    },
    {
        icon: "fa-brands fa-node",
        iconColor: colors.green,
        title: "Node.js",
    },
    {
        icon: "fa-brands fa-npm",
        iconColor: colors.brown,
        title: "NPM / PNPM",
    },
    {
        textIcon: "TS",
        iconColor: colors.blue,
        title: "Typescript",
    },
    {
        textIcon: "EX",
        iconColor: colors.lightGreen,
        title: "Express.js",
    },
    {
        icon: "fa-solid fa-database",
        iconColor: colors.lightPurple,
        title: "MySQL / MariaDB / MongoDB",
    },
    {
        textIcon: "C#",
        iconColor: colors.purple,
        title: "C-Sharp",
    },
    {
        textIcon: ".N",
        iconColor: colors.purple,
        title: ".NET",
    },
    {
        icon: "fa-brands fa-react",
        iconColor: colors.lightBlue,
        title: "React.js",
    },
    {
        icon: "fa-brands fa-react",
        iconColor: colors.lightBlue,
        title: "React Native",
    },
    {
        icon: "fa-brands fa-react",
        iconColor: colors.lightRed,
        title: "React Query, React Router",
    },
    {
        icon: "fa-brands fa-vuejs",
        iconColor: colors.lightGreen,
        title: "Vue.js",
    },
    {
        icon: "fa-solid fa-moon",
        iconColor: colors.blue,
        title: "Lua",
    },
    {
        icon: "fa-brands fa-html5",
        iconColor: colors.brown,
        title: "HTML",
    },
    {
        icon: "fa-brands fa-css3-alt",
        iconColor: colors.blue,
        title: "CSS",
    },
    {
        icon: "fa-brands fa-bootstrap",
        iconColor: colors.purple,
        title: "Bootstrap",
    },
    {
        textIcon: "JQ",
        iconColor: colors.orange,
        title: "JQuery",
    },
    {
        textIcon: "VT",
        iconColor: colors.purple,
        title: "Vite",
    },
    {
        icon: "fa-brands fa-markdown",
        iconColor: colors.grey,
        title: "Markdown",
    },
    {
        textIcon: "PS",
        iconColor: colors.blue,
        title: "Adobe Photoshop",
    },
    {
        textIcon: "PR",
        iconColor: colors.purple,
        title: "Adobe Premiere Pro",
    },
    {
        textIcon: "XD",
        iconColor: colors.lightPink,
        title: "Adobe XD",
    },
    {
        textIcon: "OV",
        iconColor: colors.lightBlue,
        title: "OVH",
    },
];