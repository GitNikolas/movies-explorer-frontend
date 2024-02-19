export interface CurrentUser {
  email: string;
  name: string;
  _id: number;
  __v?:number;
}

export interface CurrentUserContextInterface {
  isAuthorized: Boolean;
  currentUser: CurrentUser | null;
  dataIsReady: Boolean;
  setCurrentUser: Function;
}
