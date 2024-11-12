import { atomFamily } from "recoil";
import {todo} from './todo';

export const todoFamily = atomFamily({
    key:"todoFamily",
    default: id => {
        return todo.find(x => x.id === id)
    }
})