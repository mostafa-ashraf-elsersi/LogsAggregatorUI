import { Component } from '@angular/core';
import { LogItemsTableComponent } from "./components/log-items-table/log-items-table.component";

@Component({
  selector: 'app-root',
  imports: [LogItemsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Logs Aggregator';
}
