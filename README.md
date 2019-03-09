# angularTweetClone

https://www.intertech.com/Blog/ngrx-tutorial-quickly-adding-ngrx-to-your-angular-6-project/
https://www.intertech.com/Blog/ngrx-tutorial-actions-reducers-and-effects/
https://www.intertech.com/Blog/ngrx-tutorial-accessing-state-in-the-store/

commands
`
ng new angularTweetClone --style=scss
ng add @ngrx/store
ng add @ngrx/effects
ng add @ngrx/schematics --save-dev
ng add @ngrx/store-devtools @ngrx/router-store -- save
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store --save
ng generate store State --root --statePath store/reducers --module app.module.ts
`