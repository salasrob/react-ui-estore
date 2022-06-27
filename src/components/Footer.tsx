import React from 'react'
import styled from '@emotion/styled'

const StyledRowWrapper = styled.div`
display:flex;
flex-direction:row;
justify-content:space-evenly;
`

const StyledColumnWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
width:10%;
`

const StyledFooter = styled.footer`
background-color:#ffaa00;
width:100%;
`
//TODO: style links
const StyledAnchor = styled.a`

`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
        <StyledRowWrapper>
            <StyledColumnWrapper>
                <h2>Company Logo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </StyledColumnWrapper>

            <StyledColumnWrapper>
                <h2>About us</h2>
                <StyledAnchor>Our Story</StyledAnchor>
                <StyledAnchor>Terms & Conditions</StyledAnchor>
                <StyledAnchor>Privacy Policy</StyledAnchor>
            </StyledColumnWrapper>

            <StyledColumnWrapper>
                <h2>Contact us</h2>
                <StyledAnchor>70 Washington Square South, New York, NY 10012, United States</StyledAnchor>
                <StyledAnchor>Email: info@saveawarrior.org</StyledAnchor>
                <StyledAnchor>Phone: +1 123 4567 7890</StyledAnchor>
                <StyledRowWrapper>
                    <StyledAnchor>Social Media</StyledAnchor>
                    <StyledAnchor>Social Media</StyledAnchor>
                    <StyledAnchor>Social Media</StyledAnchor>
                </StyledRowWrapper>
            </StyledColumnWrapper>
        </StyledRowWrapper>
    </StyledFooter>
  )
}

export default Footer