import React from 'react';
import styled from 'styled-components';
import { ArrowRightCircle } from 'react-feather';

const TicketBlock = styled.div`
  color: var(--text-secondary);
  font-weight: bold;
  position: relative;
  margin-left: 30px;
`;

const RowBlock = styled.div`
  display: flex;
  transition: all var(--transition-speed);
`;

const CellBlock = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
`;

const ArrowBlock = styled.div`
  position: absolute;
  top: 0;
  left: -30px;
  display: flex;
  flex-direction: column;
  height: 180px;
  justify-content: space-around;
  transition: all var(--transition-speed);
  .rotator {
    transition: all var(--transition-speed);
    color: var(--text-info);
  }
`;

const genericStyles = `
  @media (max-width: 640px) {
    ${TicketBlock} {
      display: flex;
      flex-direction: row;
      justify-content: start;
      margin: 30px 0 0 0;
    }
    ${RowBlock} {
      display: flex;
      flex-direction: column;
    }
    ${ArrowBlock} {
      flex-direction: row;
      left: 0;
      height: 30px;
      width: 180px;
      top: -30px;
      z-index: -1;
    }
    .rotator {
      transform: rotate(90deg);
    }
  }
`

export function Ticket({children}) {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: genericStyles}}></style>
      <TicketBlock>
        <ArrowBlock >
          <ArrowRightCircle size="25" strokeWidth="1" className="rotator"/>
          <ArrowRightCircle size="25" strokeWidth="1" className="rotator"/>
          <ArrowRightCircle size="25" strokeWidth="1" className="rotator"/>
        </ArrowBlock>
        <RowBlock>
          <CellBlock >1</CellBlock>
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
        </RowBlock>
        <RowBlock>
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
        </RowBlock>
        <RowBlock>
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
          <CellBlock />
        </RowBlock>
        {children}
      </TicketBlock>
    </div>
  )
}