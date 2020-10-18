import { Component, OnInit } from '@angular/core';
import { TreeService } from './tree.service';
import { TreeModel } from './tree.model';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

    constructor(private treeService: TreeService) { }
    treeList: TreeModel[];
    ngOnInit(): void {
    }

    showTree() {
        console.log('invoked showTree');
        this.treeService.getTreeData().subscribe(data => {
            console.log('data');
            console.log(data);
            let message: string = data.message;
            console.log(message);
            let treeArray: TreeModel[] = data.storedDataList;
            console.log(treeArray);
            this.treeList = treeArray;
        }, error => {
            console.log(error);
        }, () => {
            console.log('fetch tree data is complete');
        });
    }

}
