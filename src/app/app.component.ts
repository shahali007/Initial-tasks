import {Component, OnInit} from '@angular/core';
import {MyJsonService} from './my-json.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    p: number = 1;
    id: any;
    index: any;
    name: any;
    gender: string;
    company: string;
    email: string;
    showModal: boolean;

    title = 'initial-task';
    public myData: any = [];


    public selectedIndex: any;

    public highlightRow(sitem) {
        this.selectedIndex = sitem.index;
    }

    constructor(private myJsonService: MyJsonService) {}

    ngOnInit() {
        this.myJsonService.getMyJsonData()
            .subscribe(data => this.myData = data);
    }

    modalShow(data) {
        console.log(data);
        this.showModal  = true;
        this.id         = data._id;
        this.index      = data.index;
        this.name       = data.name;
        this.gender     = data.gender;
        this.company    = data.company;
        this.email      = data.email;
    }

    modalHide() {
        console.log('hide modal');
        this.showModal  = false;
    }

    sortTable(n) {
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById('myTable');
        switching = true;
        dir = 'asc';
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName('TD')[n];
                y = rows[i + 1].getElementsByTagName('TD')[n];
                if (dir === 'asc') {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        //console.log('asc');
                        break;
                    }
                } else if (dir === 'desc') {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        //console.log('desc');
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount++;
            } else {
                if (switchcount === 0 && dir === 'asc') {
                    dir = 'desc';
                    switching = true;
                }
            }
        }
    }
}
