import {Component} from '@angular/core';
import {NbChatModule, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
@Component({
  selector: 'app-root',
  imports: [
    NbThemeModule,
    NbEvaIconsModule,
    NbChatModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ria_rag_cv_hunter';
}
