import { MainBlockData } from "./mainBlockData"
import { SpaceLine } from "./mainBlockStyles"
import { MainComponent } from "./mainComponent"
import { MainQuestions } from "./mainQuestions"

export const MainBlock = () => {

    return(
        <div>
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

