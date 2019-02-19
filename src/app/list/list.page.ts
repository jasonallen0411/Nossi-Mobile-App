import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];

  private course = [
    "DC102",
    "CT105",
    "AI140",
    "APS142",
    "PL250",
    "GD115",
    "TY1110",
    "WD285",
    "ID280",
    "UI140",
    "UX240",
    "WD290",
    "GD220",
    "WD310",
    "SM280",
    "ID290",
    "MA260",
    "SBM275",
    "MG470",
    "ID330",
    "WD370",
    "MA375",
    "SM380",
    "PL350",
    "GD390",
    "BUS400",
    "MG250",
    "WD475",
    "WD420",
    "IS440",
    "GD490",
    "BUS 450"
  ];

  public items: Array<{ title: string; course:string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 33; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        course: this.course[Math.floor(Math.random() * this.course.length)],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
