export type AddPackModalProps = {
  onAddPackClick: (titlePack: string, privatePack: boolean) => void;
  setOpen: (value: boolean) => void;
  open: boolean;
};
