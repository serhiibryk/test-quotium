import React, { useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';

import Hex from '../Hex';

const DEFAULT_CELL: HexCell = {
  parent: '',
  border: {},
  clickable: false,
  level: 0,
  interactiveCases: [],
};

const generateBoard = (activeCase: string, parent: string, t: (value: string) => string): HexCell[][] => {
  return [
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      // {
      //   title: 'Agriculture',
      //
      //   parent: '',
      //   clickable: true,
      //   interactiveCases: [],
      //   level: 1,
      //
      //
      //   backgroundColor: '#234532',
      // },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
    [
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
      { ...DEFAULT_CELL },
    ],
  ];
};

const HexagonOfCapabilities = () => {
  // const classes = useStyles();
  const { t } = useTranslation('common');
  const [activeCase, setActiveCase] = useState({
    activeId: '',
    parent: '',
  });

  const board = useMemo(() => generateBoard(activeCase.activeId, activeCase.parent, t), [activeCase, t]);

  const selectCell = (rowIndex: number, cellIndex: number) => {
    board.forEach((row, currRowIndex) =>
      row.forEach((column, currCellIndex) => {
        if (column.clickable && rowIndex === currRowIndex && currCellIndex === cellIndex) {
          setActiveCase((prev) => ({
            ...prev,
            activeId: `${currRowIndex}+${currCellIndex}`,
            parent: column.parent,
          }));
        }
      })
    );
  };

  return (
    <div>
      <div>
        {board.map((row: any, rowIndex: number) => {
          return (
            <div
              key={rowIndex}
              style={{
                marginTop: '-10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {row.map((cell: HexCell, cellIndex: number) => {
                return (
                  <Hex
                    key={cellIndex}
                    isActive={
                      activeCase.activeId === `${rowIndex}+${cellIndex}` ||
                      (activeCase.parent === `${rowIndex}+${cellIndex}` &&
                        cell.interactiveCases.includes(activeCase.activeId))
                    }
                    level={cell.level}
                    cell={cell}
                    onClick={() => selectCell(rowIndex, cellIndex)}
                    content={
                      cell.title && (
                        <span
                          style={{
                            color: cell.color,
                          }}
                        >
                          {cell.title}
                        </span>
                      )
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HexagonOfCapabilities;
