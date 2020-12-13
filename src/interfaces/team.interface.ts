interface TeamInterface {
  uuid: string;
  name: string;
  avatarUrl?: string | null;
  isDefeated: boolean;
  hasFinished: boolean;
  usedHalfJoker: boolean;
  usedAudienceJoker: boolean;
  usedSwitchJoker: boolean;
  usedSearchJoker: boolean;
  level: {
    uuid: string;
    price: number;
    isCheckpoint: boolean;
  };
}

export default TeamInterface;
