import styled from 'styled-components'

const CabecalhoEstilo = styled.header`
  .cabecalho {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
    text-align: center;
    padding: 24px 0;
  }
`

const Cabecalho = () => (
  <CabecalhoEstilo className="cabecalho">
    <h1>EBAC Jobs</h1>
  </CabecalhoEstilo>
)

export default Cabecalho
