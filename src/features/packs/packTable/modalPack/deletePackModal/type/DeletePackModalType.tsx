import { OpenModal } from '../../../../../../common/components/actionsSvg/ActionsSvg';

export type DeletePackModalProps = {
  setOpen: (value: OpenModal) => void;
  open: string;
  namePack: string;
  packId: string;
};
