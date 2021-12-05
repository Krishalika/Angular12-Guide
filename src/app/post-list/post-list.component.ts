import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  listOfPosts: Post[] = [
    new Post(
      'Nature',
      'Nature is a British weekly scientific journal founded and based in London, England As a multidesciplinary publication, Nature features peer-reviewed reserach from a variety of academic disciplines, mainly in science and technology',
      'https://www.stockvault.net/data/2007/03/01/99589/thumb16.jpg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Humpi',
      "Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear",
      'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/7/26/w900X450/Hampi_ruins_to_shine-.jpg',
      'test@test.com',
      new Date()
    ),
    new Post(
      'Sigiriya',
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock around 180 metres high.",
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Beauty_of_Sigiriya_by_Binuka.jpg",
      'test@test.com',
      new Date()
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
