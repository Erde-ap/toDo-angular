import { Injectable } from "@angular/core";

import { List } from "./list";

@Injectable()
export class ListService {
    getList(): List[]{
        return [{
                id:1,
                date:null,
                content:"テスト内容１",
                finished_flag:false
            },
            {
                id:2,
                date:null,
                content:"テスト内容2",
                finished_flag:true
            },
            {
                id:3,
                date:null,
                content:"テスト内容3",
                finished_flag:false
            },
            {
                id:4,
                date:null,
                content:"テスト内容4",
                finished_flag:true
            },
            {
                id:5,
                date:null,
                content:"テスト内容5",
                finished_flag:false
            }
        ]
    }

}