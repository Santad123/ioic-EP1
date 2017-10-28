import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginhomePage } from './loginhome';

@NgModule({
  declarations: [
    LoginhomePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginhomePage),
  ],
})
export class LoginhomePageModule {}
