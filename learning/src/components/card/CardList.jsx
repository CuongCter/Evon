import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Card2 from './Card2'

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
    padding: 30px;
`
const CardList = (props) => {
    return (
        <StyledCardList>
            {/* <Card secondary={true}></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> */}
            <Card2></Card2>
        </StyledCardList>
    )
}

export default CardList