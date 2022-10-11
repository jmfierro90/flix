import styled from "styled-components";

const Grid = styled.div`
  display:grid;
  grid-template-columns:${props => props.template};
  width: 100vw;
  height:100vh;
`

export const GridLayout = ({children, template = "auto auto"}) => {
    return (
        <Grid template={template}>
            {children}
        </Grid>
    )
}