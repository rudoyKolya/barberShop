import {Component, OnInit} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  serviceTable: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {}
  ngOnInit() {
    this.serviceTable = this.getTable('serviceTable');
  }

  getTable(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
