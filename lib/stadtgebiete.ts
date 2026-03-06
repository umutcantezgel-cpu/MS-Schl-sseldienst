export const stadtgebiete = [
    { slug: "wetzlar-altstadt", name: "Wetzlar Altstadt", plz: "35578" },
    { slug: "wetzlar-dutenhofen", name: "Wetzlar Dutenhofen", plz: "35582" },
    { slug: "wetzlar-garbenheim", name: "Wetzlar Garbenheim", plz: "35583" },
    { slug: "wetzlar-hermannstein", name: "Wetzlar Hermannstein", plz: "35586" },
    { slug: "wetzlar-muenchholzhausen", name: "Wetzlar Münchholzhausen", plz: "35581" },
    { slug: "wetzlar-naunheim", name: "Wetzlar Naunheim", plz: "35584" },
    { slug: "wetzlar-steindorf", name: "Wetzlar Steindorf", plz: "35578" },
    { slug: "wetzlar-blasbach", name: "Wetzlar Blasbach", plz: "35585" },
];

export const getStadtgebietBySlug = (slug: string) => {
    return stadtgebiete.find((gebiet) => gebiet.slug === slug);
};
