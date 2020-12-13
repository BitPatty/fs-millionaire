interface CreateRoomDto {
  teams: {
    name: string;
    avatarUrl?: string | null;
  }[];
}

export default CreateRoomDto;
