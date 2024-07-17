import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { wishReducer } from './app/state/wish.reducer';
import { historyReducer } from './app/state/history.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ wish: wishReducer, history: historyReducer }),
    provideEffects([])
  ]
}).catch(err => console.error(err));
