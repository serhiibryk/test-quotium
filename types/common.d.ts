declare interface HexCell {
  title?: string;
  clickable: boolean;
  level: number;
  parent: string;
  backgroundColor?: string;
  border?: {
    borderTop?: string;
    borderBottom?: string;
    borderRight?: string;
    borderLeft?: string;
  };
  interactiveCases: string[];
  icon?: ReactNode;
  color?: string;
}

declare interface HexProps {
  content: ReactNode;
  cell: HexCell;
  level: number;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}
