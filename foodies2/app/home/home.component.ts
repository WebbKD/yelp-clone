import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Injectable } from  "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Observable";
import { ObservableArray } from "data/observable-array";
import { Router } from "@angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent {
	
	locations: Location[];
    constructor(private http: Http, private router: Router ) {
      
    }

    cityName = '';

    locateFood(){
    

    return this.http.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+"+this.cityName+"&key=YourAPIKey").map((res: Response) => 
    		{
    		return res.json().results;
    		}
    	).subscribe((locations: Location[]) => this.locations = locations);

	}

    navigateToDetails(id: string){
        this.router.navigate(['pageDetails', id]);
    }	
    
}

class Location{
		constructor(public name: string, public id: string, public icon: string, public opening_hours: string, public photos: string, public place_id: string, public rating: string, public scope: string, public types: string, public vicinity: string){}
	}
