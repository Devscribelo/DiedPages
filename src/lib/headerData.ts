export interface LinksHeader {
    link: string;
    namelink: string;
    icon: string;
}

export const linksHeader: LinksHeader[] = [
    {
        link: '/',
        namelink: 'Inicio',
        icon: '/header/home.svg',
    },
    {
        link: '/galeria',
        namelink: 'Fotos',
        icon: '/header/gallery.svg',
    },
    {
        link: '/videos',
        namelink: 'Videos',
        icon: '/header/videos.svg',
    },
    {
        link: '/mensajes',
        namelink: 'Mensajes',
        icon: '/header/mensajes.svg',
    },
]