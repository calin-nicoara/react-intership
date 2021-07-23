export default class ShowItemInfo {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
};

interface ShowItemInfoInterface {
    id: number
    name: string
}

type ShowItemInfoType =  string