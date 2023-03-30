import { Button } from "./Button"
import { Placeholder } from "./Placeholder"

export const Presentation = ({handleEnter}) => {
    return(
        <div style={{border:"1px solid red", textAlign: "center"}}>
            <Placeholder />
            
            <Button type="primary" 
                    content="Prueba"
                    btnFunc={() => window.scrollTo({top: 10000, left: 0, behavior: 'smooth'})}/>
        </div>
    )
}