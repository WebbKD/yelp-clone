"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var PageDetailsComponent = /** @class */ (function () {
    function PageDetailsComponent(http, route, router, pageRoute) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.pageRoute = pageRoute;
        this.cityID = "";
        this.placeName = "";
        this.placeImgRef = "";
        this.placeAddress = "";
        this.placePhoneNumber = "";
        this.placeRating = "";
        this.placePrice = "";
        this.placeImg = "";
        this.placeReviewName = "";
        this.placeReviewImg = "";
        this.placeReviewText = "";
        this.placeReviewRating = "";
        this.webViewSrc = "";
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.cityID = params["id"]; });
    }
    PageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.cityID = params['id'];
            _this.webViewSrc = "https://search.google.com/local/writereview?placeid=" + _this.cityID;
            _this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + _this.cityID + "&key=AIzaSyB9_rZkYLtiEi2kQnloXyWrScs6xIwQ914").subscribe(function (res) {
                var placeRes = res.json();
                console.dir(placeRes);
                _this.placeName = placeRes.result.name;
                _this.placeAddress = placeRes.result.formatted_address;
                _this.placePhoneNumber = placeRes.result.formatted_phone_number;
                _this.placeRating = placeRes.result.rating;
                _this.placePrice = placeRes.result.price_level;
                _this.placeImgRef = placeRes.result.photos[1].photo_reference;
                _this.placeReviewName = placeRes.result.reviews[0].author_name;
                _this.placeReviewImg = placeRes.result.reviews[0].profile_photo_url;
                _this.placeReviewText = placeRes.result.reviews[0].text;
                _this.placeReviewRating = placeRes.result.reviews[0].rating;
            });
        });
    };
    PageDetailsComponent = __decorate([
        core_1.Component({
            selector: "PageDetails",
            moduleId: module.id,
            templateUrl: "./pageDetails.component.html"
        }),
        __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router, router_2.PageRoute])
    ], PageDetailsComponent);
    return PageDetailsComponent;
}());
exports.PageDetailsComponent = PageDetailsComponent;
var Reviews = /** @class */ (function () {
    function Reviews(author_name, author_url, language, porfile_photo_url, rating, relative_time_description, text, time) {
        this.author_name = author_name;
        this.author_url = author_url;
        this.language = language;
        this.porfile_photo_url = porfile_photo_url;
        this.rating = rating;
        this.relative_time_description = relative_time_description;
        this.text = text;
        this.time = time;
    }
    return Reviews;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZURldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZURldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLHNDQUE4QztBQUc5QywwQ0FBdUQ7QUFDdkQsc0RBQXdEO0FBRXhELHVDQUFxQztBQUNyQyxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBUTlCO0lBS0ksOEJBQW9CLElBQVUsRUFBVSxLQUFxQixFQUFVLE1BQWMsRUFBVSxTQUFvQjtRQUFuSCxpQkFLQztRQUxtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUh0SCxXQUFNLEdBQUMsRUFBRSxDQUFDO1FBVVAsY0FBUyxHQUFDLEVBQUUsQ0FBQztRQUNiLGdCQUFXLEdBQUMsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBQyxFQUFFLENBQUM7UUFDaEIscUJBQWdCLEdBQUMsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBaEJkLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUM1QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMs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aXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiXHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGVBcnJheX0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZVJvdXRlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQYWdlRGV0YWlsc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZURldGFpbHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VEZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRcclxuXHRjaXR5SUQ9XCJcIjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYWdlUm91dGU6IFBhZ2VSb3V0ZSkge1xyXG5cclxuICAgICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGVcclxuICAgICAgLnN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5jaXR5SUQgPSBwYXJhbXNbXCJpZFwiXTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VOYW1lPVwiXCI7XHJcbiAgICBwbGFjZUltZ1JlZj1cIlwiO1xyXG4gICAgcGxhY2VBZGRyZXNzPVwiXCI7XHJcbiAgICBwbGFjZVBob25lTnVtYmVyPVwiXCI7XHJcbiAgICBwbGFjZVJhdGluZyA9IFwiXCI7XHJcbiAgICBwbGFjZVByaWNlID0gXCJcIjtcclxuICAgIHBsYWNlSW1nID0gXCJcIjtcclxuICAgIHBsYWNlUmV2aWV3TmFtZSA9IFwiXCI7XHJcbiAgICBwbGFjZVJldmlld0ltZyA9IFwiXCI7XHJcbiAgICBwbGFjZVJldmlld1RleHQgPSBcIlwiO1xyXG4gICAgcGxhY2VSZXZpZXdSYXRpbmcgPSBcIlwiO1xyXG4gICAgd2ViVmlld1NyYyA9IFwiXCI7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5mb3JFYWNoKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2l0eUlEID0gcGFyYW1zWydpZCddO1xyXG5cclxuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSBcImh0dHBzOi8vc2VhcmNoLmdvb2dsZS5jb20vbG9jYWwvd3JpdGVyZXZpZXc/cGxhY2VpZD1cIit0aGlzLmNpdHlJRDtcclxuXHJcbiAgICAgICAgIHRoaXMuaHR0cC5nZXQoXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvZGV0YWlscy9qc29uP3BsYWNlaWQ9XCIrdGhpcy5jaXR5SUQrXCIma2V5PUFJemFTeUI5X3Jaa1lMdGlFaTJrUW5sb1h5V3JTY3M2eEl3UTkxNFwiKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXM6IFJlc3BvbnNlKT0+eyBcclxuICAgICAgICAgICAgY29uc3QgcGxhY2VSZXMgPSByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihwbGFjZVJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VOYW1lID0gcGxhY2VSZXMucmVzdWx0Lm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VBZGRyZXNzID0gcGxhY2VSZXMucmVzdWx0LmZvcm1hdHRlZF9hZGRyZXNzO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlUGhvbmVOdW1iZXIgPSBwbGFjZVJlcy5yZXN1bHQuZm9ybWF0dGVkX3Bob25lX251bWJlcjtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVJhdGluZyA9IHBsYWNlUmVzLnJlc3VsdC5yYXRpbmc7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VQcmljZSA9IHBsYWNlUmVzLnJlc3VsdC5wcmljZV9sZXZlbDtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZUltZ1JlZiA9IHBsYWNlUmVzLnJlc3VsdC5waG90b3NbMV0ucGhvdG9fcmVmZXJlbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlUmV2aWV3TmFtZSA9IHBsYWNlUmVzLnJlc3VsdC5yZXZpZXdzWzBdLmF1dGhvcl9uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlUmV2aWV3SW1nID0gcGxhY2VSZXMucmVzdWx0LnJldmlld3NbMF0ucHJvZmlsZV9waG90b191cmw7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2VSZXZpZXdUZXh0ID0gcGxhY2VSZXMucmVzdWx0LnJldmlld3NbMF0udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZVJldmlld1JhdGluZyA9IHBsYWNlUmVzLnJlc3VsdC5yZXZpZXdzWzBdLnJhdGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJldmlld3N7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGF1dGhvcl9uYW1lOiBzdHJpbmcsIHB1YmxpYyBhdXRob3JfdXJsOiBzdHJpbmcsIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nLCBwdWJsaWMgcG9yZmlsZV9waG90b191cmw6IHN0cmluZywgcHVibGljIHJhdGluZzogc3RyaW5nLCBwdWJsaWMgcmVsYXRpdmVfdGltZV9kZXNjcmlwdGlvbjogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nLCBwdWJsaWMgdGltZTogc3RyaW5nKXt9XHJcbn0iXX0=