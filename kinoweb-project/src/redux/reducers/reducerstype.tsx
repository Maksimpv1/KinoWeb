export interface IinitialState {
    burgerShow:boolean,
    burgerHandle:boolean,
}

export interface IinitialStateAuth {
    user: IUser,    
    logState: boolean,
}
export interface IUser {
    email:string | null,
    password:string | null,
    token:string | null,
    uid: string,
}

export interface IfilmsData {
    id:number,
    alternativeName:string,
    description:string,
    genres:Array<Igenres>,
    name:string,
    filmTitle: string,
    altFilmName:string,
    poster: {
        previewUrl: string,
        url: string,
      };
    shortDescription:string,
    year:number,
    logo: {
        url: string,
      };
}

interface Igenres{
    name:string;
}

