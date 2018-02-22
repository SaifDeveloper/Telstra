import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';

import { MainComponent } from './main/main.component';
;
import { GraphsComponent } from './graphs/graphs.component';
import { ChartsModule } from 'ng2-charts';

import { PmComponent } from './pm/pm.component';
import { AssetreviewComponent } from './assetreview/assetreview.component';
import { UnallocatedComponent } from './unallocated/unallocated.component';
import { UnallocatedContractComponent } from './unallocated-contract/unallocated-contract.component';
import { AssetreviewxComponent } from './assetreviewx/assetreviewx.component';
import {DataService} from "./data.service";
import { FileuploadComponent } from './fileupload/fileupload.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import {FileuploadService} from "./fileupload.service";
import { AccrComponent } from './accr/accr.component';
import { ProjectdesComponent } from './projectdes/projectdes.component';
import { AssetrvwComponent } from './assetrvw/assetrvw.component';
import { ArComponent } from './ar/ar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HeaderComponent,

    MainComponent,

    GraphsComponent,

    PmComponent,

    AssetreviewComponent,

    UnallocatedComponent,

    UnallocatedContractComponent,

    AssetreviewxComponent,

    FileuploadComponent,

FileSelectDirective,

AccrComponent,

ProjectdesComponent,

AssetrvwComponent,

ArComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    HttpClientModule,
    HttpModule,
    ChartsModule
  ],
  providers: [DataService,HttpClientModule,FileuploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
