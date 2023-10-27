import { BanerContainer, BanerShadow, MainTitle, MainTitleblock } from "../shared/styledComponents"

import imgBack from "./img/Searchback.jpg";

export const Search = () => {
    return(
        <div>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                             You can find movies here
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer>     
        </div>
    )
}