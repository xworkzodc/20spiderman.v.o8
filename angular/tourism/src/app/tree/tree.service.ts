import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FETCH_TREE_URL } from '../app.constants';
import { Observable } from 'rxjs';
import { TreeData } from './tree.data';

@Injectable({
    providedIn: 'root'
})
export class TreeService {

    constructor(private http: HttpClient) {
        console.log('created TreeService');
    }

    getTreeData(): Observable<TreeData> {
        console.log('invoked tree data');

        let observable = this.http.get<TreeData>(FETCH_TREE_URL);

        return observable;
    }
}
