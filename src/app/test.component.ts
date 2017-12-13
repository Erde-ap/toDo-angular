import { Component,Input,OnInit } from "@angular/core";
import { List } from "./list";

import { ListService } from "./list.service";

@Component({
    selector: 'test-list',
    template: `
    {{item}}
    `,
    styles:[

    ]
  })
  export class TestComponent{
    @Input() item:List;

  }