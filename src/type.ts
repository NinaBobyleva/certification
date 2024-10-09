export type InfoDataType = {
  total_count: number;
  items: UserType[];
};

export type UserType = {
  id: string;
  html_url: string;
  login: string;
  avatar_url: string;
};

export type UserCardType = {
  created_at: string;
  followers: number;
  following: number;
  public_repos: number;
};
