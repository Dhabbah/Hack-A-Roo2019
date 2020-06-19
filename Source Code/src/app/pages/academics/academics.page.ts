import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.page.html',
  styleUrls: ['./academics.page.scss'],
})
export class AcademicsPage implements OnInit {
  private AcademiceList = [
    'College-Arts-Sciences',
    'Conservatory-Music-Dance',
    'Bloch-School-Management',
    'Honors-College',
    'Biological-Sciences',
    'Computing-Engineering',
    'Dentistry',
    'School-of-Education',
    'School-of-Law',
    'School-of-Medicine',
    'Nursing-Health-Studies',
    'School-of-Pharmacy',
    'Graduate-Studies',
    'University-College'
  ];
  private AcademiceUrl = [
    'http://cas.umkc.edu/',
    'http://conservatory.umkc.edu/',
    'http://bloch.umkc.edu/',
    'http://honors.umkc.edu/',
    'http://sbc.umkc.edu/',
    'http://sce.umkc.edu/',
    'http://dentistry.umkc.edu/',
    'http://education.umkc.edu/',
    'http://law.umkc.edu/',
    'http://med.umkc.edu/',
    'http://sonhs.umkc.edu/',
    'http://pharmacy.umkc.edu/',
    'http://sgs.umkc.edu/',
    'http://ucollege.umkc.edu/'
  ];
  public items: Array<{ img_url: string; name: string, url: string; }> = [];

  constructor() {
    for (let i = 0; i < this.AcademiceList.length; i++) {
      this.items.push({
        img_url: 'assets/img/academics/' + this.AcademiceList[i] + '.jpg',
        name: this.AcademiceList[i],
        url: this.AcademiceUrl[i]
      });
    }
  }

  ngOnInit() {
  }
}
