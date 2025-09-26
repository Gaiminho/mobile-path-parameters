import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-path',
  templateUrl: './test-path.page.html',
  styleUrls: ['./test-path.page.scss'],
  standalone: false,
})
export class TestPathPage implements OnInit {
  id: String | null = "";

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
