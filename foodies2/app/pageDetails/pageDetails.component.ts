import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Injectable } from  "@angular/core";
import { Http, Response } from "@angular/http"
import { Observable as RxObservable } from "rxjs/Observable";
import {ObservableArray} from "data/observable-array";
import {ActivatedRoute, Router} from "@angular/router";
import { PageRoute } from "nativescript-angular/router";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({
    selector: "PageDetails",
    moduleId: module.id,
    templateUrl: "./pageDetails.component.html"
})

export class PageDetailsComponent implements OnInit {
	
	cityID="";


    constructor(private http: Http, private route: ActivatedRoute, private router: Router, private pageRoute: PageRoute) {

      this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => { this.cityID = params["id"]; });
    }

    placeName="";
    placeImgRef="";
    placeAddress="";
    placePhoneNumber="";
    placeRating = "";
    placePrice = "";
    placeImg = "";
    placeReviewName = "";
    placeReviewImg = "";
    placeReviewText = "";
    placeReviewRating = "";
    webViewSrc = "";

    ngOnInit(){
        this.route.params.forEach(params => {
            this.cityID = params['id'];

        this.webViewSrc = "https://search.google.com/local/writereview?placeid="+this.cityID;

         this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+this.cityID+"&key=YourAPIKey").subscribe(
            (res: Response)=>{ 
            const placeRes = res.json();
            console.dir(placeRes);
            this.placeName = placeRes.result.name;
            this.placeAddress = placeRes.result.formatted_address;
            this.placePhoneNumber = placeRes.result.formatted_phone_number;
            this.placeRating = placeRes.result.rating;
            this.placePrice = placeRes.result.price_level;
            this.placeImgRef = placeRes.result.photos[1].photo_reference;
            this.placeReviewName = placeRes.result.reviews[0].author_name;
            this.placeReviewImg = placeRes.result.reviews[0].profile_photo_url;
            this.placeReviewText = placeRes.result.reviews[0].text;
            this.placeReviewRating = placeRes.result.reviews[0].rating;
            }
          );

        }
      )
    }
}

class Reviews{
  constructor(public author_name: string, public author_url: string, public language: string, public porfile_photo_url: string, public rating: string, public relative_time_description: string, public text: string, public time: string){}
}