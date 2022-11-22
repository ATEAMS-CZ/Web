import {Rank} from '../../enums/Rank';

export function getRankName(rank: Rank) {
  switch (rank) {
    case Rank.HELPER:
      return 'Helper';
    case Rank.DEVELOPER:
      return 'Developer';
    case Rank.WEB_MASTER:
      return 'Web Master';
    case Rank.MODERATOR:
      return 'Moderator';
    case Rank.MANAGER:
      return 'Manager';
  }
}
