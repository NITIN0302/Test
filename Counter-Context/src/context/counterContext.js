import {useContext,createContext} from 'react';

export const CounterContext = createContext({
    count:0,
    increment:()=>{},
    decrement:()=>{},
})

export const CounterProvider = CounterContext.Provider

export default function useCounterContext()
{
    return useContext(CounterContext)
}