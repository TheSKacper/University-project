import { Component,OnInit } from '@angular/core';
import { ObjectService } from './service/object.service';
import { CategoryService } from './service/category.service';
import { PlaceService } from './service/place.service';
import { ProducerService } from './service/producer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  object!:any
  category!:any
  place!:any
  producer!:any


  constructor(private objectApi:ObjectService, private categoryApi:CategoryService,private placeApi:PlaceService, private producerApi:ProducerService)
  {

  }

  ngOnInit(): void {
      this.objectApi.getObjects().subscribe((res:any) =>
      {
        this.object = res
      })

      this.categoryApi.getCategory().subscribe((res:any) =>
      {
        this.category = res
      })

      this.placeApi.getAllPlace().subscribe((res:any) =>
      {
        this.place = res
      })

      this.producerApi.getALLProducer().subscribe((res:any) =>
      {
        this.producer = res
      })
  }
}
