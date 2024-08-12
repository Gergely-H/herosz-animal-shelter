export enum EnPageRoute {
    AboutUs = 'about-us',
    Contact = 'contact',
    Dontaion = 'donation',
    Volunteering = 'volunteering',
    Cats = 'cats',
    Dogs = 'dogs',
}

export enum HuPageRoute {
    Rolunk = 'rolunk',
    Kapcsolat = 'kapcsolat',
    Adomanyozas = 'adomanyozas',
    Onkenteskedes = 'onkenteskedes',
    Macskak = 'macskak',
    Kutyak = 'kutyak',
}

export const pageRoutes = {en:Object.values(EnPageRoute),
hu:Object.values(HuPageRoute)} as const;
