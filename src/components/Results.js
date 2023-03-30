import { useResource } from "./hooks/useResource"
import noCover from "../assets/img/no-cover.png"
import { GridLayout } from "./layout/GridLayout"
import styled from "styled-components"
import { LeapFrog } from '@uiball/loaders'



const ShowCard = styled.div`
    text-align: center;
    margin: 15px 30px 15px 30px;
    background-color:#303030;
`
const Loading = styled.div`
    text-align: center;
    margin-top: 50%;
    font-size: 3.5em;
`

export const Results = ({submitedQuery}) => {
    console.log(submitedQuery)

    const data = useResource(`https://api.tvmaze.com/search/shows?q=${submitedQuery}`)
    
    const mapShows = (i) => {

        return (
                <ShowCard 
                    className="animate__animated animate__fadeInLeft show-card" 
                    key={i.show.id} 
                    id={i.show.id} >
                        <div className="show-card-content">
                            <h4>{i.show.name}</h4>
                            <img 
                                src={i.show.image ? i.show.image.medium : noCover} 
                                alt={i.show.name}/>
                        </div>
                </ShowCard>
                )
    }

    return data ? (
        <>
        <GridLayout 
            className="shows-grid" 
            template="auto auto auto" 
            width="100%" padding="20px 0 20px 0" 
            overflow="hidden scroll">
                {data.map(mapShows)}
        </GridLayout>
        </>
    ) : <Loading>
            <div className="loading loading-text">Loading</div>
            <div className="loading">
                <LeapFrog 
                    size={70} 
                    speed={2.5} 
                    color="#e6cc00"/>
            </div>
        </Loading>
}