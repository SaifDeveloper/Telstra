import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';

import { GraphsComponent } from './graphs/graphs.component';

import { PmComponent } from './pm/pm.component';
import { AssetreviewComponent } from './assetreview/assetreview.component';
import { AssetreviewxComponent } from './assetreviewx/assetreviewx.component';
import {FileuploadComponent} from "./fileupload/fileupload.component";
import {AccrComponent} from "./accr/accr.component";


export const AppRoutes:Routes = [
    {

        path : '',
        component :LoginComponent
    },


    {
        path: "Main",
        component:MainComponent
    },


    {

        path : 'graphs',
        component :GraphsComponent
    },

    {
        path : 'pm',
        component :PmComponent
    },
    {
        path : 'assetreview',
        component :AssetreviewComponent
    },
    {
        path : 'assetreviewx',
        component :AssetreviewxComponent
    },
  {
    path:'file',
    component:FileuploadComponent
  },
  {
    path:'accr',
    component:AccrComponent
  }


];
