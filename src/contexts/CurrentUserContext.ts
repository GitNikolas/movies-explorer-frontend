import { createContext } from "react";

import { CurrentUserContextInterface } from '../types/types';

export const CurrentUserContext = createContext<CurrentUserContextInterface>({} as CurrentUserContextInterface);
