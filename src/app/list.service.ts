import { Injectable } from "@angular/core";

import { List } from "./list";
import { EditComponent } from "./edit.component";

@Injectable()
export class ListService {
    mockList : List[] =[
        // {
        //     id:1,
        //     date:null,
        //     content:"テスト内容１",
        //     finished_flag:false,
        //     state:'inactive'
        // },
        // {
        //     id:2,
        //     date:null,
        //     content:"テスト内容2",
        //     finished_flag:true,
        //     state:'inactive'
        // },
        // {
        //     id:3,
        //     date:null,
        //     content:"テスト内容3",
        //     finished_flag:false,
        //     state:'inactive'
        // },
        // {
        //     id:4,
        //     date:null,
        //     content:"テスト内容4",
        //     finished_flag:true,
        //     state:'inactive'
        // },
        // {
        //     id:5,
        //     date:null,
        //     content:"テスト内容5",
        //     finished_flag:false,
        //     state:'inactive'
        // }
    ];

    getList(): List[]{
        let mockjson : List[] = this.mockList;
        return mockjson;
    }

    setList(input:string){
        if (input == "") {
        return false;
        }else{
            let tempLists : List = {
            id: this.mockList.length+1,
            date: new Date(),
            content: input,
            finished_flag:false,
            state:'inactive'
            }
            this.mockList.push(tempLists);
        }
    }
}