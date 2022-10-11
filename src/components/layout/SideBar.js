import styled from "styled-components"

const StyledSideBar = styled.div`
    background-color: ${props => props.bgColor};
    position: relative;
`

export const SideBar = ({children, bgColor}) => {
    return (
        <StyledSideBar bgColor={bgColor}>
            {children}
        </StyledSideBar>
    )
}