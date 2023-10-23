import firstBlock from "./img/blcokthree.png"
import secondtBlock from "./img/blockfirst.png"
import threeBlock from "./img/blockfour.png"
import fourBlock from "./img/blocksecond.png"

interface IMainBlockData {
    id:number,
    title:string,
    body:string,
    source:string,
    orientation:boolean,
}

export const MainBlockData:Array<IMainBlockData> = [
    {
        id:1,
        title:'Watch on TV',
        body:'Watch on Smart TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and other devices.',
        source:secondtBlock,
        orientation:true,
    },
    {
        id:2,
        title:'Download TV series to watch offline',
        body:'Save videos to your favorites and you will always have something to watch.',
        source:fourBlock,
        orientation:false,
    },
    {
        id:3,
        title:'Watch anywhere',
        body:'Watch movies and TV series on your phone, tablet, laptop and TV.',
        source:firstBlock,
        orientation:true,
    },
    {
        id:4,
        title:'Create profiles for children',
        body:'Give your children a world of adventure with their favorite characters. It was created especially for them and is already available with your subscription.',
        source:threeBlock,
        orientation:false,
    },
]