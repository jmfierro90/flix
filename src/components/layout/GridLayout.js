import styled from "styled-components";

const Grid = styled.div`
  display:grid;
  grid-template-columns:${props => props.template};
  @media (max-width: 768px) {
    grid-template-columns: auto;
  };
  width: ${props => props.width};
  height:${props => props.heigth};
  max-width: ${props => props.maxWidth};
  max-height:${props => props.maxHeigth};
  overflow: ${props => props.overflow};
  margin: auto;
  padding: ${props => props.padding};
`

export const GridLayout = ({children, 
                            className,
                            template = "auto auto", 
                            width = "100%", 
                            height = "unset",
                            maxWidth = "100%", 
                            maxHeight = "100%",
                            padding = "unset",
                            overflow = "hidden"}) => {
    return (
        <Grid className={className} overflow={overflow} padding={padding} template={template} width={width} heigth={height} maxWidth={maxWidth} maxHeigth={maxHeight}>
            {children}
        </Grid>
    )
}