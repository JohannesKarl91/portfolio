import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { PrivacyNoticeComponent } from './privacy-notice/privacy-notice.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path:'', component: MainComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyNoticeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mywork', component: MyWorkComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
