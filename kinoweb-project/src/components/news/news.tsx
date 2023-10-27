import { BanerContainer, BanerShadow, MainTitle, MainTitleblock } from "../shared/styledComponents"

import imgBack from "./img/NewsBack.jpg";

export const News = () => {
    return(
        <div>
            <BanerContainer backimage={imgBack}>
                <BanerShadow>
                    <MainTitleblock>
                        <MainTitle>
                            See the latest news
                        </MainTitle>
                    </MainTitleblock>
                </BanerShadow>                
            </BanerContainer>       
        </div>
    )
}