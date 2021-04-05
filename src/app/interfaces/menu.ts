export interface Menu {
    titulo: String;
    subMenus: SubMenu[];
}

export interface SubMenu{
    titulo: string;
    url: string;
}