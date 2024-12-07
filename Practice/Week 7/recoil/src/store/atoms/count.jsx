import { atom, selector } from 'recoil'

export const countAtom = atom({
    key: "countAtom",
    default: 0
})

export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => { // or use props as argument and...
        const count = get(countAtom) // use props.get
        return (count + 1) % 2
    }
})