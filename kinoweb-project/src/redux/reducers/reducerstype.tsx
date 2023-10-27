export interface IinitialState {
    burgerShow:boolean,
    burgerHandle:boolean,
}

export interface IinitialStateAuth {
    firstName:string | null,
    lastName:string | null,
    email:string | null,
    password:string | null,
    token:string | null,
    id: number | null,
    logState: boolean,
}

export interface IfilmsData {
    id:number,
    alternativeName:string,
    description:number,
    genres:Array<string>,
    name:string,
    poster:Iposter,
    shortDescription:string,
    year:number,
    logo:Ilogo,
}

interface Iposter {
    previewUrl:string,
    url:string,
}

interface Ilogo {
    url:string,
}