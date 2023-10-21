interface IheaData {
    id:number,
    title:string,
    link:string,
}

export const headData: Array<IheaData> = [
    {
        id:1,
        title:'Main Page',
        link:'/News',
    },
    {
        id:2,
        title:'News',
        link:'/Search',
    },
    {
        id:3,
        title:'Search',
        link:'/Help',
    },
    {
        id:4,
        title:'Help',
        link:'/Films',
    },
]