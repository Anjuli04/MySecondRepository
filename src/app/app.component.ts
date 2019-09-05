import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  
  showDetails= false; 
  buyButton = false; 
  tshirts = []; 
  tshirtdetails: any;

  addtocart(t){
    this.tshirtdetails = t; 
    this.showDetails = true;
    this.buyButton = true; 

  }
  cancel(d){

    this.showDetails = false; 
    this.buyButton = false;
  }

  update(d):void{
    console.log(d.Id);
    this.showDetails = false; 
    this.buyButton = false;
  }


  ngOnInit() {
  this.tshirts = this.getTShirts();
  console.log(this.tshirts);

  }

  getTShirts() {
    return  [
      {
        "Id": 1,
        "name": "Man White T-Shirt",
        "productCode": "MAN-0011",
        "releaseDate": "March 19, 2019",
        "description": "A White T-Shirt for office going men",
        "price": 300,
        "quantity": 40,
        "color": "white",
        "frontimageUrl":  "assets/images/t1front.jpg",
        "backimageUrl": "assets/images/t1back.jpg",
        "size"   : "large",
        "imggsrc":''
      },
      {
        "Id": 2,
        "name": "Sports  Red T-Shirt",
        "productCode": "REDMAN-0011",
        "releaseDate": "April 19, 2018",
        "description": "A Red T-Shirt for office going men",
        "price": 300,
        "quantity": 40,
        "color": "Red",
        "frontimageUrl":  "assets/images/t2front.jpg",
        "backimageUrl": "assets/images/t2back.jpg",
        "size"   : "Medium",
        "imggsrc":''
      },
      {
        "Id": 3,
        "name": "Girl Pink  T-Shirt",
        "productCode": "GIRL-0011",
        "releaseDate": "July 19, 2018",
        "description": "A Pink T-Shirt for girl",
        "price": 400,
        "quantity": 15,
        "color": "pink",
        "frontimageUrl":  "assets/images/t3front.jpg",
        "backimageUrl": "assets/images/t3back.jpg",
        "size"   : "small",
        "imggsrc":''
      },
     
      {
        "Id": 4,
        "name": "Man White T-Shirt",
        "productCode": "MAN-0011",
        "releaseDate": "March 19, 2019",
        "description": "A White T-Shirt for office going men.",
        "price": 300,
        "quantity": 40,
        "color": "white",
        "frontimageUrl":  "assets/images/t1front.jpg",
        "backimageUrl": "assets/images/t1back.jpg",
        "size"   : "large",
        "imggsrc":''
      },
      {
        "Id": 5,
        "name": "Sports  Red T-Shirt",
        "productCode": "REDMAN-0011",
        "releaseDate": "April 19, 2018",
        "description": "A Red T-Shirt for office going men",
        "price": 300,
        "quantity": 40,
        "color": "Red",
        "frontimageUrl":  "assets/images/t2front.jpg",
        "backimageUrl": "assets/images/t2back.jpg",
        "size"   : "Medium",
        "imggsrc":''
      },
      {
        "Id": 6,
        "name": "Girl Pink  T-Shirt",
        "productCode": "GIRL-0011",
        "releaseDate": "July 19, 2018",
        "description": "A Pink T-Shirt for girl",
        "price": 400,
        "quantity": 15,
        "color": "pink",
        "frontimageUrl":  "assets/images/t3front.jpg",
        "backimageUrl": "assets/images/t3back.jpg",
        "size"   : "small",
        "imggsrc":''
      },
     
    ]

  }

}