import styled from "@emotion/styled";

const FlexContainer = styled.div`
display: flex;
margin: ${props=>props.margin || "0"};
justify-content:${props=>props.justify || "center"};
align-items: center;
`;

export default FlexContainer;
