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

declare interface IButton {
  title: string;
  onClick: () => {};
}

declare interface ILngs {
  en: { label: string; value: string };
  fr: { label: string; value: string };
}

declare interface IModaleComponent {
  onClose: () => void;
  children: any;
}

declare interface IMyModal {
  onClose: () => void;
}

declare interface IPortal {
  id: string;
  children: any;
}

declare interface ICard {
  src: string;
  title: string;
  text: string;
}
