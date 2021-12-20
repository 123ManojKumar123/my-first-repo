import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
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
import { AutoScrollComponent } from './route-six/auto-scroll/auto-scroll.component';

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
    CounterComponent,
    AutoScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
