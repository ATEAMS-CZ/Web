import {atom} from 'recoil';
import {ActiveModal} from '../../../enums/ActiveModal';


export const ActiveModalAtom = atom<ActiveModal>(
    {
      key: 'ActiveModal',
      default: ActiveModal.NONE,
    },
);
