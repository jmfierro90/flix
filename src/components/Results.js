import { useResource } from "./hooks/useResource"

export const Results = (submitedQuery) => {
    
    const data = useResource(`https://api.tvmaze.com/search/shows?q=${submitedQuery}`)
    console.log(data)

    return (
        <div>RESULTS</div>
    )
}