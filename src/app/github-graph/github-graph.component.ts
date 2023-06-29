import { Component, OnInit, AfterViewInit  } from '@angular/core';
import GithubCalendar from 'github-calendar';


@Component({
  selector: 'app-github-graph',
  templateUrl: './github-graph.component.html',
  styleUrls: ['./github-graph.component.css']
})

export class GithubGraphComponent implements OnInit {

  ngAfterViewInit() {
    GithubCalendar("#calendar", "DarrelMendoza", {
      responsive: true,
      tooltips: false,
      global_stats: false,
      cache: 1, // in days
      summary_text: "contributions in the last year",
      last_year: 365,
      colors: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
