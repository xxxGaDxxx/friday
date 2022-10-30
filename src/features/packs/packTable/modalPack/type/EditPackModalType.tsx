import { ReactNode } from 'react';

export type EditPackModalProps = {
  onEditPackClick: (titlePack: string, privatePack: boolean) => void;
  clickHere: ReactNode;
  stylesOfIcon: object;
  currentPackTitle: string;
};
