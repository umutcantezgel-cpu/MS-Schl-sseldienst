export interface Stadtgebiet {
    slug: string;
    name: string;
    plz: string;
    lat: number;
    lng: number;
}

export const stadtgebiete: Stadtgebiet[] = [
    { slug: "wetzlar", name: "Wetzlar", plz: "35578", lat: 50.5607, lng: 8.5046 },
    { slug: "wetzlar-altstadt", name: "Wetzlar Altstadt", plz: "35578", lat: 50.5573, lng: 8.5055 },
    { slug: "wetzlar-dutenhofen", name: "Wetzlar Dutenhofen", plz: "35582", lat: 50.5752, lng: 8.5445 },
    { slug: "wetzlar-garbenheim", name: "Wetzlar Garbenheim", plz: "35583", lat: 50.5468, lng: 8.4764 },
    { slug: "wetzlar-hermannstein", name: "Wetzlar Hermannstein", plz: "35586", lat: 50.5452, lng: 8.5260 },
    { slug: "wetzlar-muenchholzhausen", name: "Wetzlar Münchholzhausen", plz: "35581", lat: 50.5880, lng: 8.5616 },
    { slug: "wetzlar-naunheim", name: "Wetzlar Naunheim", plz: "35584", lat: 50.5405, lng: 8.4975 },
    { slug: "wetzlar-steindorf", name: "Wetzlar Steindorf", plz: "35578", lat: 50.5695, lng: 8.4920 },
    { slug: "wetzlar-blasbach", name: "Wetzlar Blasbach", plz: "35585", lat: 50.5990, lng: 8.5125 },
    { slug: "giessen", name: "Gießen", plz: "35390", lat: 50.5840, lng: 8.6784 },
    { slug: "asslar", name: "Aßlar", plz: "35614", lat: 50.5908, lng: 8.4684 },
    { slug: "solms", name: "Solms", plz: "35606", lat: 50.5388, lng: 8.4080 },
    { slug: "huettenberg", name: "Hüttenberg", plz: "35625", lat: 50.5160, lng: 8.5700 },
    { slug: "lahnau", name: "Lahnau", plz: "35633", lat: 50.5820, lng: 8.5900 },
    { slug: "braunfels", name: "Braunfels", plz: "35619", lat: 50.5167, lng: 8.3833 },
    { slug: "leun", name: "Leun", plz: "35638", lat: 50.5517, lng: 8.3600 },
    { slug: "ehringshausen", name: "Ehringshausen", plz: "35630", lat: 50.6040, lng: 8.3795 },
    { slug: "hohenahr", name: "Hohenahr", plz: "35644", lat: 50.6400, lng: 8.4700 },
    { slug: "schoeffengrund", name: "Schöffengrund", plz: "35641", lat: 50.4800, lng: 8.4900 },
    { slug: "marburg", name: "Marburg", plz: "35037", lat: 50.8021, lng: 8.7700 },
];

export const getStadtgebietBySlug = (slug: string) => {
    return stadtgebiete.find((gebiet) => gebiet.slug === slug);
};
