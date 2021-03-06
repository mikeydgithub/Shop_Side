import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: rgb(111,177,179);
  width: 100%;
  height: 100%;
  position: relative;
  
  
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products