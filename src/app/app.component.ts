import { Component, OnInit } from '@angular/core';
import { SnackBarService } from './services/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoad: boolean = false
  title = 'routing-crud-react-main';
  constructor(private _loader: SnackBarService) { }

  ngOnInit(): void {
    this._loader.loader$.subscribe(res => {
      this.isLoad = res
    })
  }
}
