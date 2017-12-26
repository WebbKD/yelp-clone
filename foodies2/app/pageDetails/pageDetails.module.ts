import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PageDetailsRoutingModule } from "./pageDetails-routing.module";
import { PageDetailsComponent } from "./pageDetails.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptModule,
        PageDetailsRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        PageDetailsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PageDetailsModule { }
