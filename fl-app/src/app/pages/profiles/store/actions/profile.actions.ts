import { Action } from '@ngrx/store';
import { BasicResource } from '../../../../services/http.service';


export const PROFILE_REDIRECT: string     = '[PROFILE] load redirect';
export const PROFILE_INIT: string              = '[PROFILE] init';
export const PROFILE_LOADED: string            = '[PROFILE] Profile loaded';
export const PROFILE_RELOAD: string            = '[PROFILE] Profile reload';


export class ProfileLoadRedirect implements Action {
  readonly type: string = PROFILE_REDIRECT;

  constructor(public payload: BasicResource) {}
}

export class ProfileInit implements Action {
  readonly type: string = PROFILE_INIT;

  constructor(public payload: BasicResource) {}
}

export class ProfileLoaded implements Action {
  readonly type: string = PROFILE_LOADED;

  constructor(public payload: BasicResource) {}
}

export class ProfileReload implements Action {
  readonly type: string = PROFILE_RELOAD;

  constructor(public payload: BasicResource) {}
}


export type Actions = ProfileLoadRedirect | ProfileInit | ProfileLoaded | ProfileReload;
