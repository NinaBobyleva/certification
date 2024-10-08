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

// export type DataType = {
//   items: UserType[];
//   total_count: number | null;
// };

// export type InfoDataType = {
//   total_count: number;
//   items: Items[];
// };

// export type Items = {
//   id: string;
//   html_url: string;
//   login: string;
// };

// export type UserInfoType = {
//   id: string;
//   userName: string;
//   user_url: string;
//   userPhotoUrl: string;
//   repositories: InfoDataType;
//   commitsCount: number;
//   topicsCount: number;
// };
