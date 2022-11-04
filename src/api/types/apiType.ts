// login type
export type UserResponseType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
  avatar: string;
};

export type UpdateUserResponseType = {
  updatedUser: UserResponseType & TokenDeathTimeType;
  token: string;
  tokenDeathTime: number;
};

type TokenDeathTimeType = {
  tokenDeathTime: number;
};

export type LogoutResponse = {
  info?: string;
  error?: string;
};

// forgot type
export type RestoreForgottenPasswordParamsType = {
  email: string;
  from: string;
  message: string;
};

export type RestoreForgottenPasswordResponseType = {
  info?: string;
  error?: string;
  success: boolean;
};

export type SetNewPasswordType = {
  password: string;
  resetPasswordToken: string;
};

export type SetNewPasswordResponseType = {
  info?: string;
  error?: string;
};

// registration
export type RegisteredUserType = {
  addedUser: UserResponseType;
  error?: string;
};

export type RegistrationParamsType = {
  email: string;
  password: string;
};

// pack table
export type PackDataResponseType = {
  cardPacks?: PacksType[];
  page: number;
  pageCount: number;
  cardPacksTotalCount: number;
  minCardsCount: number;
  maxCardsCount: number;
  token: string;
  tokenDeathTime: number;
};

export type PacksType = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  deckCover: string;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
};

export type ParamsPacksType = {
  page?: number;
  pageCount?: number;
  packName?: string;
  min?: number;
  max?: number;
  sortPacks?: string;
  user_id?: string;
  block?: boolean;
};

export type UpdatePackType = {
  _id: string;
  name: string;
};

export type CardsPackType = {
  name: string;
  deckCover: string;
  private: boolean;
};

export type AddPackResponseType = {
  newCardsPack: AddPackResponseTypeNewCardsPack;
  token: string;
  tokenDeathTime: number;
};

export type AddPackResponseTypeNewCardsPack = {
  _id: string;
  user_id: string;
  user_name: string;
  private: boolean;
  name: string;
  path: string;
  grade: number;
  shots: number;
  cardsCount: number;
  type: string;
  rating: number;
  created: string;
  updated: string;
  more_id: string;
  __v: number;
  deckCover?: any;
};

export type PutPackResponseType = {
  updatedCardsPack: AddPackResponseTypeNewCardsPack;
  token: string;
  tokenDeathTime: number;
};

export type DeletePackResponseType = {
  deletedCardsPack: AddPackResponseTypeNewCardsPack;
  token: string;
  tokenDeathTime: number;
};

// cards table
export type CardsResponseType = {
  cards: CardsType[];
  packUserId: string;
  packName: string;
  packPrivate: boolean;
  packDeckCover: string;
  packCreated: string;
  packUpdated: string;
  page: number;
  pageCount: number;
  cardsTotalCount: number;
  minGrade: number;
  maxGrade: number;
  token: string;
  tokenDeathTime: number;
};

export type CardsType = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer?: string;
  question?: string;
  answerImg?: string;
  questionImg?: string;
  grade: number;
  shots: number;
  comments?: string;
  type?: string;
  rating?: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
};

export type ParamsCardsType = {
  answer?: string;
  question?: string;
  cardAnswer?: string;
  cardQuestion?: string;
  answerImg?: string;
  questionImg?: string;
  cardsPack_id: string;
  min?: number;
  max?: number;
  sortCards?: string;
  page?: number;
  pageCount?: number;
  search?: string;
};

export type AddCardResponseType = {
  newCard: CardsType;
  token: string;
  tokenDeathTime: number;
};

export type UpdateCardType = {
  _id: string;
  question?: string;
  answer?: string;
};

export type DeleteCardResponseType = {
  deletedCard: CardsType;
  token: string;
  tokenDeathTime: number;
};

export type PutCardResponseType = {
  updatedCard: PutCardResponseTypeUpdatedCard;
  token: string;
  tokenDeathTime: number;
};

export type PutCardResponseTypeUpdatedCard = {
  _id: string;
  cardsPack_id: string;
  user_id: string;
  answer: string;
  question: string;
  grade: number;
  shots: number;
  comments: string;
  type: string;
  rating: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
  answerImg: string;
  answerVideo: string;
  questionImg: string;
  questionVideo: string;
};

// learn
export type UpdateGradeResponseType = {
  updatedGrade: UpdateGradeResponseTypeUpdatedGrade;
  token: string;
  tokenDeathTime: number;
};
export type UpdateGradeResponseTypeUpdatedGrade = {
  _id: string;
  cardsPack_id: string;
  card_id: string;
  user_id: string;
  grade: number;
  shots: number;
  more_id: string;
  created: string;
  updated: string;
  __v: number;
};
