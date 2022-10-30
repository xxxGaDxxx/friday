import { ReactNode } from 'react';

export type AddPackModalProps = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
  clickHere: ReactNode;
};
