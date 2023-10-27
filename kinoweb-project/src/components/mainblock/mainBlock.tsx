import { BanerContainer, BanerShadow, MainTitle, MainTitleblock } from "../shared/styledComponents"

import imgBack from "./img/headerBack.jpg";
import { MainBlockData } from "./mainBlockData"
import {  SpaceLine } from "./mainBlockStyles"
import { MainComponent } from "./mainComponent"
import { MainQuestions } from "./mainQuestions"

export const MainBlock = () => {

    return(
        <div>
             <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            Movies, TV series and much more without restrictions
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer> 
            <SpaceLine></SpaceLine>
            {MainBlockData.map((item)=>(
                <MainComponent 
                    key={item.id} 
                    Title={item.title} 
                    Discription={item.body} 
                    Src={item.source} 
                    Orientation={item.orientation} 
                    
                    />
            ))}
            <MainQuestions/>            
        </div>
    )
}

