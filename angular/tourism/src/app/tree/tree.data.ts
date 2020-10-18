import { TreeModel } from "./tree.model";

export class TreeData {

    constructor(public message: string, public storedDataList: TreeModel[]) {
        console.log('Created TreeData');
    }

}