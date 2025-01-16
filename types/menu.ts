export interface MenuItem {
    title: string;
    url: string;
    id: string;
    parent: string;
    items?: MenuItem[];
}
