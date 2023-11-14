import  facebook  from "./icons/facebook.png";
import  github  from "./icons/github.png";
import  instagram  from "./icons/instagram.png";
import  linkedIn  from "./icons/linkedIn.png";
import  telegram  from "./icons/telegram.png";

interface IImgData {
    id:number,
    source:string,
}
interface IInfoData {
    id:number,
    name:string,
    link:string,
}

export const ImgData:Array<IImgData> = [
    {
        id:1,
        source:facebook,
    },
    {
        id:2,
        source:github,
    },
    {
        id:3,
        source:linkedIn,
    },
    {
        id:4,
        source:instagram,
    },
    {
        id:5,
        source:telegram,
    },
]

export const InfoData:Array<IInfoData> = [
    {
        id:1,
        name: "Main Page",
        link:"/",
    },
    {
        id:2,
        name:"News",
        link:"/News",
    },
    {
        id:3,
        name:"Search",
        link:"/Search",
    },
]