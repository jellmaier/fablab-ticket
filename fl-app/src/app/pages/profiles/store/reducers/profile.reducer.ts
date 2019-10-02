import * as ProfileActions from '../actions/profile.actions';
import { BasicResource } from '../../../../services/http.service';


export function profileReducer(state: BasicResource, action: ProfileActions.Actions): BasicResource {

  switch (action.type) {

    case ProfileActions.PROFILE_REDIRECT:
      return null;

    case ProfileActions.PROFILE_INIT:
      return state;

    case ProfileActions.PROFILE_LOADED:
      return action.payload as BasicResource;


    case ProfileActions.PROFILE_RELOAD:
      return state;

    default:
      return state;
  }
}

