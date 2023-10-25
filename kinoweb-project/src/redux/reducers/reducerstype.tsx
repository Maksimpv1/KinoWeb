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
}