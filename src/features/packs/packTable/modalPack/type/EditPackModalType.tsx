import { ReactNode } from 'react';

export type EditPackModalProps = {
  updatePack: (titlePack: string, privatePack: boolean) => void;
  clickHere: ReactNode;
  stylesOfIcon: object;
  currentPackTitle: string;
};
