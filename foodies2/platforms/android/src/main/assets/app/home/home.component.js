"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, router) {
        this.http = http;
        this.router = router;
        this.cityName = '';
    }
    HomeComponent.prototype.locateFood = function () {
        var _this = this;
        return this.http.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+" + this.cityName + "&key=AIzaSyB9_rZkYLtiEi2kQnloXyWrScs6xIwQ914").map(function (res) {
            return res.json().results;
        }).subscribe(function (locations) { return _this.locations = locations; });
    };
    HomeComponent.prototype.navigateToDetails = function (id) {
        this.router.navigate(['pageDetails', id]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Location = /** @class */ (function () {
    function Location(name, id, icon, opening_hours, photos, place_id, rating, scope, types, vicinity) {
        this.name = name;
        this.id = id;
        this.icon = icon;
        this.opening_hours = opening_hours;
        this.photos = photos;
        this.place_id = place_id;
        this.rating = rating;
        this.scope = scope;
        this.types = types;
        this.vicinity = vicinity;
    }
    return Location;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE0RTtBQUU1RSxzQ0FBK0M7QUFHL0MsMENBQXlDO0FBQ3pDLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFPOUI7SUFHSSx1QkFBb0IsSUFBVSxFQUFVLE1BQWM7UUFBbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFJdEQsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQUZkLENBQUM7SUFJRCxrQ0FBVSxHQUFWO1FBQUEsaUJBU0Y7UUFORSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsa0ZBQWtGLEdBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQWE7WUFFdEwsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDMUIsQ0FBQyxDQUNELENBQUMsU0FBUyxDQUFDLFVBQUMsU0FBcUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxFQUExQixDQUEwQixDQUFDLENBQUM7SUFFdkUsQ0FBQztJQUVFLHlDQUFpQixHQUFqQixVQUFrQixFQUFVO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXRCUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUk0QixXQUFJLEVBQWtCLGVBQU07T0FIN0MsYUFBYSxDQXdCekI7SUFBRCxvQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHNDQUFhO0FBMEIxQjtJQUNFLGtCQUFtQixJQUFZLEVBQVMsRUFBVSxFQUFTLElBQVksRUFBUyxhQUFxQixFQUFTLE1BQWMsRUFBUyxRQUFnQixFQUFTLE1BQWMsRUFBUyxLQUFhLEVBQVMsS0FBYSxFQUFTLFFBQWdCO1FBQTlOLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUUsQ0FBQztJQUNyUCxlQUFDO0FBQUQsQ0FBQyxBQUZGLElBRUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblx0XG5cdGxvY2F0aW9uczogTG9jYXRpb25bXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgKSB7XG4gICAgICBcbiAgICB9XG5cbiAgICBjaXR5TmFtZSA9ICcnO1xuXG4gICAgbG9jYXRlRm9vZCgpe1xuICAgIFxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvdGV4dHNlYXJjaC9qc29uP3F1ZXJ5PXJlc3RhdXJhbnRzK2luK1wiK3RoaXMuY2l0eU5hbWUrXCIma2V5PUFJemFTeUI5X3Jaa1lMdGlFaTJrUW5sb1h5V3JTY3M2eEl3UTkxNFwiKS5tYXAoKHJlczogUmVzcG9uc2UpID0+IFxuICAgIFx0XHR7XG4gICAgXHRcdHJldHVybiByZXMuanNvbigpLnJlc3VsdHM7XG4gICAgXHRcdH1cbiAgICBcdCkuc3Vic2NyaWJlKChsb2NhdGlvbnM6IExvY2F0aW9uW10pID0+IHRoaXMubG9jYXRpb25zID0gbG9jYXRpb25zKTtcblxuXHR9XG5cbiAgICBuYXZpZ2F0ZVRvRGV0YWlscyhpZDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydwYWdlRGV0YWlscycsIGlkXSk7XG4gICAgfVx0XG4gICAgXG59XG5cbmNsYXNzIExvY2F0aW9ue1xuXHRcdGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBpZDogc3RyaW5nLCBwdWJsaWMgaWNvbjogc3RyaW5nLCBwdWJsaWMgb3BlbmluZ19ob3Vyczogc3RyaW5nLCBwdWJsaWMgcGhvdG9zOiBzdHJpbmcsIHB1YmxpYyBwbGFjZV9pZDogc3RyaW5nLCBwdWJsaWMgcmF0aW5nOiBzdHJpbmcsIHB1YmxpYyBzY29wZTogc3RyaW5nLCBwdWJsaWMgdHlwZXM6IHN0cmluZywgcHVibGljIHZpY2luaXR5OiBzdHJpbmcpe31cblx0fVxuIl19