import ActivityStore from "./ActivityStore";
import {createContext, useContext} from "react";
import CommonStore from "./CommonStore";
import UserStore from "./UserStore";
import ModalStore from "./ModalStore";

interface Store {
    activityStore: ActivityStore,
    commonStore: CommonStore,
    userStore: UserStore,
    modalStore: ModalStore
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}