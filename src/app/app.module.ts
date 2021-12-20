import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouteOneComponent } from './route-one/route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three/route-three.component';
import { RouteFourComponent } from './route-four/route-four/route-four.component';
import { RouteFiveComponent } from './route-five/route-five/route-five.component';
import { RouteSixComponent } from './route-six/route-six/route-six.component';
import { RouteSevenComponent } from './route-seven/route-seven/route-seven.component';
import { RouteEightComponent } from './route-eight/route-eight/route-eight.component';
import { TimerComponent } from './route-three/timer/timer.component';
import { LoggerComponent } from './route-three/logger/logger.component';
import { CounterComponent } from './route-three/counter/counter.component';

const appRoutes:Routes = [
  {path:'', component:RouteOneComponent},
  {path:'route-two', component:RouteTwoComponent},
  {path:'route-three', component:RouteThreeComponent},
  {path:'route-four', component:RouteFourComponent},
  {path:'route-five', component:RouteFiveComponent},
  {path:'route-six', component:RouteSixComponent},
  {path:'route-seven', component:RouteSevenComponent},
  {path:'route-eight', component:RouteEightComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteTwoComponent,
    RouteThreeComponent,
    RouteFourComponent,
    RouteFiveComponent,
    RouteSixComponent,
    RouteSevenComponent,
    RouteEightComponent,
    TimerComponent,
    LoggerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
