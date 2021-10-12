import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccountType = {
  __typename?: 'AccountType';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  users: Array<User>;
};

export type AccountTypeConnection = {
  __typename?: 'AccountTypeConnection';
  edges?: Maybe<Array<AccountTypeEdge>>;
  pageInfo?: Maybe<AccountTypePageInfo>;
};

export type AccountTypeEdge = {
  __typename?: 'AccountTypeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<AccountType>;
};

/** Properties by which AccountTypeOrderField connections can be ordered. */
export enum AccountTypeOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AccountTypePageInfo = {
  __typename?: 'AccountTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type AccountTypesResponse = {
  __typename?: 'AccountTypesResponse';
  page: AccountTypeConnection;
  pageData?: Maybe<PageData>;
};

export type AdminStatistics = {
  __typename?: 'AdminStatistics';
  approvedBooks?: Maybe<Scalars['Int']>;
  bookContributes: AdminStatisticsCount;
  createdBooks: AdminStatisticsCount;
  followers: AdminStatisticsCount;
  followings: AdminStatisticsCount;
  inReviewBooks?: Maybe<Scalars['Int']>;
  notApprovedBooks?: Maybe<Scalars['Int']>;
  rejectedBooks?: Maybe<Scalars['Int']>;
  shelfs: AdminStatisticsCount;
  userBooks: AdminStatisticsCount;
  userId: AdminStatisticsCount;
};

export type AdminStatisticsCount = {
  __typename?: 'AdminStatisticsCount';
  end?: Maybe<Scalars['String']>;
  lastWeekCounts?: Maybe<Array<AdminStatisticsDayValue>>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type AdminStatisticsDayValue = {
  __typename?: 'AdminStatisticsDayValue';
  day?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  age?: Maybe<Scalars['Int']>;
  bookContributes: Array<BookContribute>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  sex?: Maybe<Scalars['String']>;
  surname: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Book = {
  __typename?: 'Book';
  backCover?: Maybe<File>;
  bookContributes?: Maybe<Array<Maybe<BookContribute>>>;
  bookGenres?: Maybe<Array<Maybe<BookGenre>>>;
  bookPublishers: Array<BookPublisher>;
  bookStatus: BookStatus;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  excerpt?: Maybe<Scalars['JSON']>;
  feeds: Array<Feed>;
  frontCover?: Maybe<File>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  isOrginalLang: Scalars['Boolean'];
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  language?: Maybe<Language>;
  length?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<User>;
  userBookLogs: Array<UserBookLog>;
  userBooks?: Maybe<Array<Maybe<UserBook>>>;
  width?: Maybe<Scalars['Int']>;
  writeBooks: Array<WriteBook>;
};

export type BookByUsernameInput = {
  bookId: Scalars['String'];
  username: Scalars['String'];
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges?: Maybe<Array<BookEdge>>;
  pageInfo?: Maybe<BookPageInfo>;
};

export type BookContribute = {
  __typename?: 'BookContribute';
  author?: Maybe<Author>;
  book: Book;
  contributeJson: Scalars['JSON'];
  contributeType?: Maybe<ContributeType>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

export type BookEdge = {
  __typename?: 'BookEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Book>;
};

export type BookGenre = {
  __typename?: 'BookGenre';
  book: Book;
  createdAt?: Maybe<Scalars['Date']>;
  genre: Genre;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

/** Properties by which book connections can be ordered. */
export enum BookOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type BookPageInfo = {
  __typename?: 'BookPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type BookPublisher = {
  __typename?: 'BookPublisher';
  book: Book;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  publisher: Publisher;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BookStatus = {
  __typename?: 'BookStatus';
  books: Array<Book>;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

/** This book includes reading related situations and adds them to the place. */
export enum BookStatusColorsEnum {
  Gray = 'gray',
  Green = 'green',
  Red = 'red',
  Yellow = 'yellow'
}

export type BookStatusConnection = {
  __typename?: 'BookStatusConnection';
  edges?: Maybe<Array<BookStatusEdge>>;
  pageInfo?: Maybe<BookStatusPageInfo>;
};

export type BookStatusEdge = {
  __typename?: 'BookStatusEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<BookStatus>;
};

/** This book includes reading related situations and adds them to the place. */
export enum BookStatusEnum {
  Approved = 'approved',
  Inreview = 'inreview',
  Notapproved = 'notapproved',
  Rejected = 'rejected'
}

/** Properties by which BookStatusOrderField connections can be ordered. */
export enum BookStatusOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type BookStatusPageInfo = {
  __typename?: 'BookStatusPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type BookStatusResponse = {
  __typename?: 'BookStatusResponse';
  page: BookStatusConnection;
  pageData?: Maybe<PageData>;
};

/** Properties by which BooksByUsernameOrderField connections can be ordered. */
export enum BooksByUsernameOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type BooksByUsernameResponse = {
  __typename?: 'BooksByUsernameResponse';
  page: UserBookConnection;
  pageData?: Maybe<PageData>;
};

export type BooksResponse = {
  __typename?: 'BooksResponse';
  page: BookConnection;
  pageData?: Maybe<PageData>;
};

export type City = {
  __typename?: 'City';
  country: Country;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  populations: Array<Population>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CompanyType = {
  __typename?: 'CompanyType';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  populations: Array<Population>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ContributeType = {
  __typename?: 'ContributeType';
  bookContributes: Array<BookContribute>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type ContributeTypeConnection = {
  __typename?: 'ContributeTypeConnection';
  edges?: Maybe<Array<ContributeTypeEdge>>;
  pageInfo?: Maybe<ContributeTypePageInfo>;
};

export type ContributeTypeEdge = {
  __typename?: 'ContributeTypeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContributeType>;
};

/** Properties by which ContributeTypeOrderField connections can be ordered. */
export enum ContributeTypeOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ContributeTypePageInfo = {
  __typename?: 'ContributeTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ContributeTypeResponse = {
  __typename?: 'ContributeTypeResponse';
  page: ContributeTypeConnection;
  pageData?: Maybe<PageData>;
};

export type CountriesResponse = {
  __typename?: 'CountriesResponse';
  page: CountryConnection;
  pageData?: Maybe<PageData>;
};

export type Country = {
  __typename?: 'Country';
  cities: Array<City>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  populations: Array<Population>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  edges?: Maybe<Array<CountryEdge>>;
  pageInfo?: Maybe<CountryPageInfo>;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Country>;
};

/** Properties by which CountryOrderField connections can be ordered. */
export enum CountryOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type CountryPageInfo = {
  __typename?: 'CountryPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type CreateBookInput = {
  contributes?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['JSON']>;
  genres?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Float']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isOrginalLang?: Maybe<Scalars['Boolean']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  languageId?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  width?: Maybe<Scalars['Float']>;
};

export type CreateDeviceTokenInput = {
  deviceToken: Scalars['String'];
  deviceType: Scalars['String'];
};

export type CreateFirebaseMessageInput = {
  body: Scalars['String'];
  /** {'book' : 'id', 'user' : 'aaa'} */
  dataDetail?: Maybe<Scalars['JSON']>;
  type: Scalars['String'];
};

export type CreateNewAccountInput = {
  confirmPassword: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  surname: Scalars['String'];
  username: Scalars['String'];
};

export type CreateShelfBookInput = {
  bookId: Scalars['String'];
  shelfId: Scalars['String'];
};

export type CreateShelfInput = {
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  languageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateUserBookStatusInput = {
  bookId: Scalars['String'];
  readTypeId: Scalars['String'];
  readingPageCount?: Maybe<Scalars['Int']>;
};

export type CreateWriteBookInput = {
  bookId?: Maybe<Scalars['String']>;
  bookPageNumber?: Maybe<Scalars['Int']>;
  coverImage?: Maybe<Scalars['Upload']>;
  publishStatusId?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['JSON']>;
  text: Scalars['JSON'];
  title: Scalars['String'];
  writeTypeId: Scalars['String'];
};

export type DeleteMediaInput = {
  filePath: Scalars['String'];
};

export type DeleteShelfBookInput = {
  bookId: Scalars['String'];
  shelfId: Scalars['String'];
};

export type DeleteShelfInput = {
  shelfId: Scalars['String'];
};

export type DeleteUserBookStatusInput = {
  bookId: Scalars['String'];
};

export type DeleteWriteBookInput = {
  writeBookId: Scalars['String'];
};

export type DeviceToken = {
  __typename?: 'DeviceToken';
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  deviceToken: Scalars['String'];
  deviceType: Scalars['String'];
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Feed = {
  __typename?: 'Feed';
  book: Book;
  content: Scalars['JSON'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  image: File;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
};

export type File = {
  __typename?: 'File';
  acl?: Maybe<Scalars['String']>;
  backCoverBook?: Maybe<Book>;
  bucket: Scalars['String'];
  contentType?: Maybe<Scalars['String']>;
  coverShelf?: Maybe<Shelf>;
  coverUser?: Maybe<User>;
  coverWriteBook?: Maybe<WriteBook>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  eTag: Scalars['String'];
  encoding?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  fileName: Scalars['String'];
  frontCoverBook?: Maybe<Book>;
  height: Scalars['Int'];
  id: Scalars['String'];
  imageFeed?: Maybe<Feed>;
  json?: Maybe<Scalars['String']>;
  locationUrl: Scalars['String'];
  logoShelf?: Maybe<Shelf>;
  mimeType: Scalars['String'];
  nanoId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  profileUser?: Maybe<User>;
  size: Scalars['Int'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<User>;
  width: Scalars['Int'];
};

export type FollowShelfInput = {
  shelfId: Scalars['String'];
};

/** Properties by which FollowersByUsername connections can be ordered. */
export enum FollowersByUsernameOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type FollowersByUsernameResponse = {
  __typename?: 'FollowersByUsernameResponse';
  page: UserFollowConnection;
  pageData?: Maybe<PageData>;
};

/** Properties by which FollowingsByUsername connections can be ordered. */
export enum FollowingsByUsernameOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type FollowingsByUsernameResponse = {
  __typename?: 'FollowingsByUsernameResponse';
  page: UserFollowConnection;
  pageData?: Maybe<PageData>;
};

export type ForgotPasswordByEmailInput = {
  /** User email */
  email: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  bookGenres: Array<BookGenre>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en: Scalars['String'];
  parentGenreId: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  edges?: Maybe<Array<GenreEdge>>;
  pageInfo?: Maybe<GenrePageInfo>;
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Genre>;
};

/** Properties by which GenreOrderField connections can be ordered. */
export enum GenreOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GenrePageInfo = {
  __typename?: 'GenrePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type GenresResponse = {
  __typename?: 'GenresResponse';
  page: GenreConnection;
  pageData?: Maybe<PageData>;
};

export enum ImageTypeEnum {
  BookBackCover = 'bookBackCover',
  BookFrontCover = 'bookFrontCover',
  Cover = 'cover',
  Feed = 'feed',
  Profile = 'profile',
  ShelfCover = 'shelfCover',
  ShelfLogo = 'shelfLogo',
  WriteBook = 'writeBook'
}

export type Language = {
  __typename?: 'Language';
  books?: Maybe<Array<Maybe<Book>>>;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en: Scalars['String'];
  populations: Array<Population>;
  shelfs: Array<Shelf>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  edges?: Maybe<Array<LanguageEdge>>;
  pageInfo?: Maybe<LanguagePageInfo>;
};

export type LanguageEdge = {
  __typename?: 'LanguageEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Language>;
};

/** Properties by which list connections can be ordered. */
export enum LanguageOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type LanguagePageInfo = {
  __typename?: 'LanguagePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  page: LanguageConnection;
  pageData?: Maybe<PageData>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNotification: Scalars['Boolean'];
  changeNewEmailAdress: StatusGlobal;
  confirmEmailReSend: StatusGlobal;
  confirmNewEmailAdress: StatusGlobal;
  createBook: Book;
  createDeviceToken: DeviceToken;
  createNewAccount: Token;
  createShelf: Shelf;
  createShelfBook: ShelfBook;
  createUserBookStatus: UserBook;
  createWriteBook: WriteBook;
  deleteMedia: File;
  deleteShelf: Shelf;
  deleteShelfBook: ShelfBook;
  deleteUserBookStatus: UserBook;
  deleteWriteBook: WriteBook;
  followShelf: ShelfFollow;
  followUserByUsername: UserFollow;
  forgotPasswordByEmail: StatusGlobal;
  refreshToken: Token;
  resetPassword: Token;
  resetPasswordWithCode: Token;
  signIn: Token;
  signOut: Scalars['Boolean'];
  unFollowShelf: ShelfFollow;
  unFollowUserByUsername: UserFollow;
  updateBook: Book;
  updateBookAdmin: Book;
  updateBookStatusAdmin: Book;
  updateConfirmMail: StatusGlobal;
  updateShelf: Shelf;
  updateUserBookStatus: UserBook;
  updateUserSetting: UserSetting;
  updateUserSettings: Population;
  updateWriteBook: WriteBook;
  uploadMediaToS3: File;
};


export type MutationAddNotificationArgs = {
  data: CreateFirebaseMessageInput;
};


export type MutationChangeNewEmailAdressArgs = {
  data: UpdateChangeNewEmailAdressInput;
};


export type MutationConfirmNewEmailAdressArgs = {
  code: Scalars['String'];
};


export type MutationCreateBookArgs = {
  data: CreateBookInput;
};


export type MutationCreateDeviceTokenArgs = {
  data: CreateDeviceTokenInput;
};


export type MutationCreateNewAccountArgs = {
  data: CreateNewAccountInput;
};


export type MutationCreateShelfArgs = {
  data: CreateShelfInput;
};


export type MutationCreateShelfBookArgs = {
  data: CreateShelfBookInput;
};


export type MutationCreateUserBookStatusArgs = {
  data: CreateUserBookStatusInput;
};


export type MutationCreateWriteBookArgs = {
  data: CreateWriteBookInput;
};


export type MutationDeleteMediaArgs = {
  data: DeleteMediaInput;
};


export type MutationDeleteShelfArgs = {
  data: DeleteShelfInput;
};


export type MutationDeleteShelfBookArgs = {
  data: DeleteShelfBookInput;
};


export type MutationDeleteUserBookStatusArgs = {
  data: DeleteUserBookStatusInput;
};


export type MutationDeleteWriteBookArgs = {
  data: DeleteWriteBookInput;
};


export type MutationFollowShelfArgs = {
  data: FollowShelfInput;
};


export type MutationFollowUserByUsernameArgs = {
  username: Scalars['String'];
};


export type MutationForgotPasswordByEmailArgs = {
  data: ForgotPasswordByEmailInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationResetPasswordWithCodeArgs = {
  data: ResetPasswordCodeInput;
};


export type MutationSignInArgs = {
  data: SignInInput;
};


export type MutationUnFollowShelfArgs = {
  data: UnFollowShelfInput;
};


export type MutationUnFollowUserByUsernameArgs = {
  username: Scalars['String'];
};


export type MutationUpdateBookArgs = {
  data: UpdateBookInput;
};


export type MutationUpdateBookAdminArgs = {
  data: UpdateAdminBookInput;
};


export type MutationUpdateBookStatusAdminArgs = {
  data: UpdateAdminBookStatusInput;
};


export type MutationUpdateConfirmMailArgs = {
  data: UpdateConfirmMailInput;
};


export type MutationUpdateShelfArgs = {
  data: UpdateShelfInput;
};


export type MutationUpdateUserBookStatusArgs = {
  data: UpdateUserBookStatusInput;
};


export type MutationUpdateUserSettingArgs = {
  data: UpdateUserSettingInput;
};


export type MutationUpdateUserSettingsArgs = {
  data: UpdateUserSettingsInput;
};


export type MutationUpdateWriteBookArgs = {
  data: UpdateWriteBookInput;
};


export type MutationUploadMediaToS3Args = {
  data: UploadMediaToS3Input;
  file?: Maybe<Scalars['Upload']>;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Int'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type Population = {
  __typename?: 'Population';
  authorizedPersonEmail?: Maybe<Scalars['String']>;
  authorizedPersonName?: Maybe<Scalars['String']>;
  authorizedPersonSurname?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  city?: Maybe<City>;
  companyTitle?: Maybe<Scalars['String']>;
  companyType?: Maybe<CompanyType>;
  companyUrl?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['Date']>;
  deathDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isCompany: Scalars['Boolean'];
  language?: Maybe<Language>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  positionType?: Maybe<PositionType>;
  statu: Statu;
  surname?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxOffice?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
};

export type PopulationConnection = {
  __typename?: 'PopulationConnection';
  edges?: Maybe<Array<PopulationEdge>>;
  pageInfo?: Maybe<PopulationPageInfo>;
};

export type PopulationEdge = {
  __typename?: 'PopulationEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Population>;
};

export type PopulationPageInfo = {
  __typename?: 'PopulationPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PositionType = {
  __typename?: 'PositionType';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  populations: Array<Population>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type PositionTypeConnection = {
  __typename?: 'PositionTypeConnection';
  edges?: Maybe<Array<PositionTypeEdge>>;
  pageInfo?: Maybe<PositionTypePageInfo>;
};

export type PositionTypeEdge = {
  __typename?: 'PositionTypeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PositionType>;
};

/** Properties by which PositionTypeOrderField connections can be ordered. */
export enum PositionTypeOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type PositionTypePageInfo = {
  __typename?: 'PositionTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PositionTypesResponse = {
  __typename?: 'PositionTypesResponse';
  page: PositionTypeConnection;
  pageData?: Maybe<PageData>;
};

export type PublishStatus = {
  __typename?: 'PublishStatus';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  writeBooks: Array<WriteBook>;
};

export type PublishStatusConnection = {
  __typename?: 'PublishStatusConnection';
  edges?: Maybe<Array<PublishStatusEdge>>;
  pageInfo?: Maybe<PublishStatusPageInfo>;
};

export type PublishStatusEdge = {
  __typename?: 'PublishStatusEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PublishStatus>;
};

/** Properties by which PublishStatusOrderField connections can be ordered. */
export enum PublishStatusOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type PublishStatusPageInfo = {
  __typename?: 'PublishStatusPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PublishStatusResponse = {
  __typename?: 'PublishStatusResponse';
  page: PublishStatusConnection;
  pageData?: Maybe<PageData>;
};

export type Publisher = {
  __typename?: 'Publisher';
  bookPublishers: Array<BookPublisher>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  accountTypes: AccountTypesResponse;
  book: Book;
  bookByUsername: UserBook;
  bookStatus: BookStatusResponse;
  bookStatusByUsername: Book;
  books: BooksResponse;
  booksByUsername: BooksByUsernameResponse;
  checkISBN: Book;
  contributeTypes: ContributeTypeResponse;
  countries: CountriesResponse;
  followersByUsername: FollowersByUsernameResponse;
  followingsByUsername: FollowingsByUsernameResponse;
  genres: GenresResponse;
  getHello: Scalars['String'];
  languages: LanguagesResponse;
  me: User;
  positionTypes: PositionTypesResponse;
  profileByUsername: User;
  publishStatus: PublishStatusResponse;
  readAdminBooks: ReadAdminBooksResponse;
  readBooksStatus: ReadBooksStatusResponse;
  readShelfFollowersByIdByUsername: ReadShelfFollowersByIdByUsernameResponse;
  readSiteLanguages: Array<SiteLanguage>;
  readSiteThemes: Array<SiteTheme>;
  readStatisticsByAdmin: AdminStatistics;
  readTypes: ReadTypesResponse;
  readUserSettings: UserSetting;
  shelfByIdByUsername: Shelf;
  shelfs: ShelfsResponse;
  shelvesByUsername: UserShelfsResponse;
  shelvesOfTheBook: ShelvesOfTheBook;
  userBookByIdLogs: UserBookByIdLogsResponse;
  userSettings: Population;
  userStatistics: UserStatistics;
  usersDiscovery: UsersDiscoveryResponse;
  write: WriteBook;
  writeBooks: WriteBooksResponse;
  writeTypes: WriteTypesResponse;
};


export type QueryAccountTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<AccountTypeOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryBookArgs = {
  bookId: Scalars['String'];
};


export type QueryBookByUsernameArgs = {
  data: BookByUsernameInput;
};


export type QueryBookStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<BookStatusOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryBookStatusByUsernameArgs = {
  bookId: Scalars['String'];
};


export type QueryBooksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookStatusId?: Maybe<Scalars['String']>;
  contributeUsername?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  genres?: Maybe<Array<Scalars['String']>>;
  languages?: Maybe<Array<Scalars['String']>>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<BookOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
  queryContribute?: Maybe<Scalars['String']>;
};


export type QueryBooksByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookStatusColor?: Maybe<BookStatusColorsEnum>;
  bookStatusId?: Maybe<BookStatusEnum>;
  first?: Maybe<Scalars['Int']>;
  genres?: Maybe<Array<Scalars['String']>>;
  languages?: Maybe<Array<Scalars['String']>>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<BooksByUsernameOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
  queryContribute?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type QueryCheckIsbnArgs = {
  ISBN: Scalars['String'];
};


export type QueryContributeTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ContributeTypeOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryCountriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<CountryOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryFollowersByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<FollowersByUsernameOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type QueryFollowingsByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<FollowingsByUsernameOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type QueryGenresArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<GenreOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryLanguagesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<LanguageOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryPositionTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<PositionTypeOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryProfileByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryPublishStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<PublishStatusOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryReadAdminBooksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookStatusId?: Maybe<BookStatusEnum>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ReadAdminBooksOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryReadBooksStatusArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookStatusId?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ReadBooksStatusOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryReadShelfFollowersByIdByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ReadShelfFollowersByIdByUsernameArgsOrderField>;
  orderSort?: Maybe<OrderDirection>;
  shelfId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};


export type QueryReadTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ReadTypeOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryShelfByIdByUsernameArgs = {
  isPublic?: Maybe<Scalars['Boolean']>;
  shelfId: Scalars['String'];
  username: Scalars['String'];
};


export type QueryShelfsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ShelfOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryShelvesByUsernameArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Scalars['String']>>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ShelfOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
  queryBook?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};


export type QueryShelvesOfTheBookArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<ShelvesOfTheBookOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryUserBookByIdLogsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  bookId: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<UserBookByIdLogsOrderField>;
  orderSort?: Maybe<OrderDirection>;
};


export type QueryUsersDiscoveryArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<UsersDiscoveryOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryWriteArgs = {
  writeId: Scalars['String'];
};


export type QueryWriteBooksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<WriteBookOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};


export type QueryWriteTypesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderField?: Maybe<WriteTypeOrderField>;
  orderSort?: Maybe<OrderDirection>;
  query?: Maybe<Scalars['String']>;
};

/** Properties by which ReadAdminBooksOrderField connections can be ordered. */
export enum ReadAdminBooksOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ReadAdminBooksResponse = {
  __typename?: 'ReadAdminBooksResponse';
  page: BookConnection;
  pageData?: Maybe<PageData>;
};

/** Properties by which CreateBooksStatus connections can be ordered. */
export enum ReadBooksStatusOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type ReadBooksStatusResponse = {
  __typename?: 'ReadBooksStatusResponse';
  page: BookConnection;
  pageData?: Maybe<PageData>;
};

/** Properties by which  ReadShelfFollowersByIdByUsernameArgs connections can be ordered. */
export enum ReadShelfFollowersByIdByUsernameArgsOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type ReadShelfFollowersByIdByUsernameResponse = {
  __typename?: 'ReadShelfFollowersByIdByUsernameResponse';
  page: ShelfFollowConnection;
  pageData?: Maybe<PageData>;
};

export type ReadType = {
  __typename?: 'ReadType';
  color: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  updatedAt?: Maybe<Scalars['Date']>;
  userBookLogs?: Maybe<Array<Maybe<UserBookLog>>>;
  userBooks?: Maybe<Array<Maybe<UserBook>>>;
};

export type ReadTypeConnection = {
  __typename?: 'ReadTypeConnection';
  edges?: Maybe<Array<ReadTypeEdge>>;
  pageInfo?: Maybe<ReadTypePageInfo>;
};

export type ReadTypeEdge = {
  __typename?: 'ReadTypeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ReadType>;
};

/** Properties by which ReadTypeOrderField connections can be ordered. */
export enum ReadTypeOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  UpdatedAt = 'updatedAt'
}

export type ReadTypePageInfo = {
  __typename?: 'ReadTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ReadTypesResponse = {
  __typename?: 'ReadTypesResponse';
  page: ReadTypeConnection;
  pageData?: Maybe<PageData>;
};

export type ResetPasswordCodeInput = {
  /** E-mail code write */
  code: Scalars['String'];
  confirmPassword: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordInput = {
  confirmPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  password: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  userRoles: Array<UserRole>;
};

export type Shelf = {
  __typename?: 'Shelf';
  color?: Maybe<Scalars['String']>;
  coverImage?: Maybe<File>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  followersCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isLogo: Scalars['String'];
  isPublic: Scalars['Boolean'];
  language?: Maybe<Language>;
  logoImage?: Maybe<File>;
  name: Scalars['String'];
  shelfBooks?: Maybe<Array<Maybe<ShelfBook>>>;
  shelfFollows?: Maybe<Array<Maybe<ShelfFollow>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<User>;
};

export type ShelfBook = {
  __typename?: 'ShelfBook';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  shelf: Shelf;
  updatedAt?: Maybe<Scalars['Date']>;
  userBook: UserBook;
};

export type ShelfConnection = {
  __typename?: 'ShelfConnection';
  edges?: Maybe<Array<ShelfEdge>>;
  pageInfo?: Maybe<ShelfPageInfo>;
};

export type ShelfEdge = {
  __typename?: 'ShelfEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Shelf>;
};

export type ShelfFollow = {
  __typename?: 'ShelfFollow';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  shelf: Shelf;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
};

export type ShelfFollowConnection = {
  __typename?: 'ShelfFollowConnection';
  edges?: Maybe<Array<ShelfFollowEdge>>;
  pageInfo?: Maybe<ShelfFollowPageInfo>;
};

export type ShelfFollowEdge = {
  __typename?: 'ShelfFollowEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ShelfFollow>;
};

export type ShelfFollowPageInfo = {
  __typename?: 'ShelfFollowPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

/** Properties by which bookreads connections can be ordered. */
export enum ShelfOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ShelfPageInfo = {
  __typename?: 'ShelfPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ShelfsResponse = {
  __typename?: 'ShelfsResponse';
  page: ShelfConnection;
  pageData?: Maybe<PageData>;
};

export type ShelvesOfTheBook = {
  __typename?: 'ShelvesOfTheBook';
  page: UserBookConnection;
  pageData?: Maybe<PageData>;
};

/** Properties by which ShelvesOfTheBookOrderField connections can be ordered. */
export enum ShelvesOfTheBookOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type SignInInput = {
  /** User email */
  email: Scalars['String'];
  /** User password */
  password: Scalars['String'];
};

export type SiteLanguage = {
  __typename?: 'SiteLanguage';
  UserSettings: Array<UserSetting>;
  code: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type SiteTheme = {
  __typename?: 'SiteTheme';
  UserSettings: Array<UserSetting>;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Statu = {
  __typename?: 'Statu';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  populations?: Maybe<Population>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type StatusGlobal = {
  __typename?: 'StatusGlobal';
  /** Status */
  status: Scalars['Boolean'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type UnFollowShelfInput = {
  shelfId: Scalars['String'];
};

export type UpdateAdminBookInput = {
  contributes?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['JSON']>;
  genres?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isOrginalLang?: Maybe<Scalars['Boolean']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  languageId?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UpdateAdminBookStatusInput = {
  bookId: Scalars['String'];
  statusId: Scalars['String'];
};

export type UpdateBookInput = {
  contributes?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['JSON']>;
  genres?: Maybe<Array<Scalars['String']>>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  isOrginalLang?: Maybe<Scalars['Boolean']>;
  isbn10?: Maybe<Scalars['String']>;
  isbn13?: Maybe<Scalars['String']>;
  languageId?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  pageCount?: Maybe<Scalars['Int']>;
  publishDate?: Maybe<Scalars['Date']>;
  rating?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UpdateChangeNewEmailAdressInput = {
  email: Scalars['String'];
};

export type UpdateConfirmMailInput = {
  code: Scalars['String'];
};

export type UpdateShelfInput = {
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emoji?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  languageId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  shelfId: Scalars['String'];
};

export type UpdateUserBookStatusInput = {
  bookId: Scalars['String'];
  readTypeId: Scalars['String'];
  readingPageCount?: Maybe<Scalars['Int']>;
};

export type UpdateUserSettingInput = {
  siteLanguageId?: Maybe<Scalars['String']>;
  siteThemeId?: Maybe<Scalars['String']>;
};

export type UpdateUserSettingsInput = {
  accountTypeId?: Maybe<Scalars['String']>;
  authorizedPersonEmail?: Maybe<Scalars['String']>;
  authorizedPersonName?: Maybe<Scalars['String']>;
  authorizedPersonSurname?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['Date']>;
  cityId?: Maybe<Scalars['String']>;
  companyTitle?: Maybe<Scalars['String']>;
  companyTypeId?: Maybe<Scalars['String']>;
  companyUrl?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  deathDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  languageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  positionTypeId?: Maybe<Scalars['String']>;
  siteLanguageId?: Maybe<Scalars['String']>;
  siteThemeId?: Maybe<Scalars['String']>;
  statuId?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  taxNumber?: Maybe<Scalars['String']>;
  taxOffice?: Maybe<Scalars['String']>;
};

export type UpdateWriteBookInput = {
  bookId?: Maybe<Scalars['String']>;
  bookPageNumber?: Maybe<Scalars['Int']>;
  publishStatusId: Scalars['String'];
  summary: Scalars['JSON'];
  text: Scalars['JSON'];
  title?: Maybe<Scalars['String']>;
  writeId: Scalars['String'];
  writeTypeId: Scalars['String'];
};

export type UploadMediaToS3Input = {
  bookId?: Maybe<Scalars['String']>;
  imageType?: Maybe<ImageTypeEnum>;
  shelfId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  writeId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  accountType: AccountType;
  bookContributes?: Maybe<Array<Maybe<BookContribute>>>;
  booksCount?: Maybe<Scalars['Int']>;
  coverImage?: Maybe<File>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBooks?: Maybe<Array<Maybe<Book>>>;
  createdDeviceTokens?: Maybe<Array<Maybe<DeviceToken>>>;
  createdFiles?: Maybe<Array<Maybe<File>>>;
  createdWriteBooks: Array<WriteBook>;
  email: Scalars['String'];
  fcmToken?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<UserFollow>>>;
  followersCount?: Maybe<Scalars['Int']>;
  followingShelfsCount?: Maybe<Scalars['Int']>;
  followings?: Maybe<Array<Maybe<UserFollow>>>;
  followingsCount?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  isApproved?: Maybe<Scalars['Boolean']>;
  isNotify?: Maybe<Scalars['Boolean']>;
  notifyCount?: Maybe<Scalars['Int']>;
  population?: Maybe<Population>;
  profileImage?: Maybe<File>;
  shelfFollows?: Maybe<Array<Maybe<ShelfFollow>>>;
  shelfs?: Maybe<Array<Maybe<Shelf>>>;
  shelfsCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBooks?: Maybe<Array<Maybe<Book>>>;
  updatedFiles?: Maybe<Array<Maybe<File>>>;
  updatedShelfs?: Maybe<Array<Maybe<File>>>;
  updatedWriteBooks: Array<WriteBook>;
  userBookLogs?: Maybe<Array<Maybe<UserBookLog>>>;
  userBooks?: Maybe<Array<Maybe<UserBook>>>;
  userRoles: Array<UserRole>;
  userSetting: Array<UserSetting>;
  username: Scalars['String'];
};

export type UserBook = {
  __typename?: 'UserBook';
  book: Book;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  overviewOrder?: Maybe<Scalars['Int']>;
  readType?: Maybe<ReadType>;
  readingPageCount?: Maybe<Scalars['Int']>;
  readingRate?: Maybe<Scalars['Int']>;
  shelfBooks?: Maybe<Array<ShelfBook>>;
  updatedAt?: Maybe<Scalars['Date']>;
  user?: Maybe<User>;
};

/** Properties by which  UserBookByIdLogs connections can be ordered. */
export enum UserBookByIdLogsOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type UserBookByIdLogsResponse = {
  __typename?: 'UserBookByIdLogsResponse';
  page: UserBookLogConnection;
  pageData?: Maybe<PageData>;
};

export type UserBookConnection = {
  __typename?: 'UserBookConnection';
  edges?: Maybe<Array<UserBookEdge>>;
  pageInfo?: Maybe<UserBookPageInfo>;
};

export type UserBookEdge = {
  __typename?: 'UserBookEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserBook>;
};

export type UserBookLog = {
  __typename?: 'UserBookLog';
  book: Book;
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  readType: ReadType;
  readingPageCount?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: User;
};

export type UserBookLogConnection = {
  __typename?: 'UserBookLogConnection';
  edges?: Maybe<Array<UserBookLogEdge>>;
  pageInfo?: Maybe<UserBookLogPageInfo>;
};

export type UserBookLogEdge = {
  __typename?: 'UserBookLogEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserBookLog>;
};

export type UserBookLogPageInfo = {
  __typename?: 'UserBookLogPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserBookPageInfo = {
  __typename?: 'UserBookPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserFollow = {
  __typename?: 'UserFollow';
  createdAt?: Maybe<Scalars['Date']>;
  follower?: Maybe<User>;
  following: User;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type UserFollowConnection = {
  __typename?: 'UserFollowConnection';
  edges?: Maybe<Array<UserFollowEdge>>;
  pageInfo?: Maybe<UserFollowPageInfo>;
};

export type UserFollowEdge = {
  __typename?: 'UserFollowEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserFollow>;
};

export type UserFollowPageInfo = {
  __typename?: 'UserFollowPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  role: Array<Role>;
  updatedAt?: Maybe<Scalars['Date']>;
  user: Array<User>;
};

export type UserSetting = {
  __typename?: 'UserSetting';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  siteLanguage: SiteLanguage;
  siteTheme: SiteTheme;
  updatedAt?: Maybe<Scalars['Date']>;
  user: Array<User>;
};

export type UserShelfsResponse = {
  __typename?: 'UserShelfsResponse';
  page: ShelfConnection;
  pageData?: Maybe<PageData>;
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  approvedBooks?: Maybe<Scalars['Int']>;
  bookContributes: UserStatisticsCount;
  createdBooks: UserStatisticsCount;
  followers: UserStatisticsCount;
  followings: UserStatisticsCount;
  inReviewBooks?: Maybe<Scalars['Int']>;
  notApprovedBooks?: Maybe<Scalars['Int']>;
  rejectedBooks?: Maybe<Scalars['Int']>;
  shelfs: UserStatisticsCount;
  userBooks: UserStatisticsCount;
  userId: UserStatisticsCount;
};

export type UserStatisticsCount = {
  __typename?: 'UserStatisticsCount';
  end?: Maybe<Scalars['String']>;
  lastWeekCounts?: Maybe<Array<UserStatisticsDayValue>>;
  name?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type UserStatisticsDayValue = {
  __typename?: 'UserStatisticsDayValue';
  day?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** Properties by which UsersDiscoveryOrderField connections can be ordered. */
export enum UsersDiscoveryOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type UsersDiscoveryResponse = {
  __typename?: 'UsersDiscoveryResponse';
  page: PopulationConnection;
  pageData?: Maybe<PageData>;
};

export type WriteBook = {
  __typename?: 'WriteBook';
  book?: Maybe<Book>;
  coverImage?: Maybe<File>;
  createdAt?: Maybe<Scalars['Date']>;
  createdBy: User;
  id: Scalars['String'];
  publishStatus: PublishStatus;
  summary: Scalars['JSON'];
  text: Scalars['JSON'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
  updatedBy?: Maybe<User>;
  writeType: WriteType;
};

export type WriteBookConnection = {
  __typename?: 'WriteBookConnection';
  edges?: Maybe<Array<WriteBookEdge>>;
  pageInfo?: Maybe<WriteBookPageInfo>;
};

export type WriteBookEdge = {
  __typename?: 'WriteBookEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<WriteBook>;
};

/** Properties by which WriteBookOrderField connections can be ordered. */
export enum WriteBookOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type WriteBookPageInfo = {
  __typename?: 'WriteBookPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type WriteBooksResponse = {
  __typename?: 'WriteBooksResponse';
  page: WriteBookConnection;
  pageData?: Maybe<PageData>;
};

export type WriteType = {
  __typename?: 'WriteType';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  name: Scalars['String'];
  name_en?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Date']>;
  writeBooks: Array<WriteBook>;
};

export type WriteTypeConnection = {
  __typename?: 'WriteTypeConnection';
  edges?: Maybe<Array<WriteTypeEdge>>;
  pageInfo?: Maybe<WriteTypePageInfo>;
};

export type WriteTypeEdge = {
  __typename?: 'WriteTypeEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<WriteType>;
};

/** Properties by which WriteTypeOrderField connections can be ordered. */
export enum WriteTypeOrderField {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type WriteTypePageInfo = {
  __typename?: 'WriteTypePageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type WriteTypesResponse = {
  __typename?: 'WriteTypesResponse';
  page: WriteTypeConnection;
  pageData?: Maybe<PageData>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', username: string, email: string, followersCount?: Maybe<number>, booksCount?: Maybe<number>, followingsCount?: Maybe<number>, shelfsCount?: Maybe<number>, isNotify?: Maybe<boolean>, notifyCount?: Maybe<number>, isApproved?: Maybe<boolean>, population?: Maybe<{ __typename?: 'Population', name?: Maybe<string>, surname?: Maybe<string>, fullName?: Maybe<string> }>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> } };

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', signOut: boolean };

export type RefreshTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type AuthBooksQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type AuthBooksQuery = { __typename?: 'Query', books: { __typename?: 'BooksResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> }> }>> } } };

export type ForgotPasswordByEmailMutationVariables = Exact<{
  data: ForgotPasswordByEmailInput;
}>;


export type ForgotPasswordByEmailMutation = { __typename?: 'Mutation', forgotPasswordByEmail: { __typename?: 'StatusGlobal', status: boolean } };

export type ResetPasswordInputMutationVariables = Exact<{
  data: ResetPasswordInput;
}>;


export type ResetPasswordInputMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type ResetPasswordWithCodeMutationVariables = Exact<{
  data: ResetPasswordCodeInput;
}>;


export type ResetPasswordWithCodeMutation = { __typename?: 'Mutation', resetPasswordWithCode: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type AccountTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountTypesQuery = { __typename?: 'Query', accountTypes: { __typename?: 'AccountTypesResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'AccountTypeConnection', edges?: Maybe<Array<{ __typename?: 'AccountTypeEdge', node?: Maybe<{ __typename: 'AccountType', name?: Maybe<string>, id: string }> }>> } } };

export type BookStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type BookStatusQuery = { __typename?: 'Query', bookStatus: { __typename?: 'BookStatusResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'BookStatusConnection', edges?: Maybe<Array<{ __typename?: 'BookStatusEdge', node?: Maybe<{ __typename: 'BookStatus', name: string, id: string }> }>> } } };

export type ContributeTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ContributeTypesQuery = { __typename?: 'Query', contributeTypes: { __typename?: 'ContributeTypeResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'ContributeTypeConnection', edges?: Maybe<Array<{ __typename?: 'ContributeTypeEdge', node?: Maybe<{ __typename: 'ContributeType', name: string, id: string }> }>> } } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: { __typename?: 'CountriesResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'CountryConnection', edges?: Maybe<Array<{ __typename?: 'CountryEdge', node?: Maybe<{ __typename: 'Country', name: string, id: string }> }>> } } };

export type CreateDeviceTokenMutationVariables = Exact<{
  data: CreateDeviceTokenInput;
}>;


export type CreateDeviceTokenMutation = { __typename?: 'Mutation', createDeviceToken: { __typename: 'DeviceToken' } };

export type GenresQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type GenresQuery = { __typename?: 'Query', genres: { __typename?: 'GenresResponse', page: { __typename?: 'GenreConnection', edges?: Maybe<Array<{ __typename?: 'GenreEdge', node?: Maybe<{ __typename: 'Genre', id: string, name: string }> }>> } } };

export type LanguagesQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type LanguagesQuery = { __typename?: 'Query', languages: { __typename?: 'LanguagesResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'LanguageConnection', edges?: Maybe<Array<{ __typename?: 'LanguageEdge', node?: Maybe<{ __typename: 'Language', name: string, id: string }> }>> } } };

export type ReadIsNotifyQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadIsNotifyQuery = { __typename?: 'Query', me: { __typename?: 'User', isNotify?: Maybe<boolean>, notifyCount?: Maybe<number> } };

export type ReadTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadTypesQuery = { __typename?: 'Query', readTypes: { __typename?: 'ReadTypesResponse', page: { __typename?: 'ReadTypeConnection', edges?: Maybe<Array<{ __typename?: 'ReadTypeEdge', node?: Maybe<{ __typename: 'ReadType', id: string, name: string, color: string }> }>> } } };

export type ReadSiteLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadSiteLanguagesQuery = { __typename?: 'Query', readSiteLanguages: Array<{ __typename?: 'SiteLanguage', id: string, name_en?: Maybe<string>, code: string }> };

export type DeleteMediaMutationVariables = Exact<{
  data: DeleteMediaInput;
}>;


export type DeleteMediaMutation = { __typename?: 'Mutation', deleteMedia: { __typename?: 'File', path?: Maybe<string> } };

export type UploadMediaToS3MutationVariables = Exact<{
  file?: Maybe<Scalars['Upload']>;
  data: UploadMediaToS3Input;
}>;


export type UploadMediaToS3Mutation = { __typename?: 'Mutation', uploadMediaToS3: { __typename?: 'File', locationUrl: string, path?: Maybe<string>, fieldName?: Maybe<string> } };

export type WriteTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type WriteTypesQuery = { __typename?: 'Query', writeTypes: { __typename?: 'WriteTypesResponse', pageData?: Maybe<{ __typename?: 'PageData', count: number }>, page: { __typename?: 'WriteTypeConnection', edges?: Maybe<Array<{ __typename?: 'WriteTypeEdge', node?: Maybe<{ __typename: 'WriteType', name: string, id: string, name_en?: Maybe<string> }> }>> } } };

export type UpdateBookAdminMutationVariables = Exact<{
  data: UpdateAdminBookInput;
}>;


export type UpdateBookAdminMutation = { __typename?: 'Mutation', updateBookAdmin: { __typename?: 'Book', title: string } };

export type UpdateBookStatusAdminMutationVariables = Exact<{
  data: UpdateAdminBookStatusInput;
}>;


export type UpdateBookStatusAdminMutation = { __typename?: 'Mutation', updateBookStatusAdmin: { __typename?: 'Book', title: string } };

export type ReadAdminBooksQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  statusId?: Maybe<BookStatusEnum>;
  orderField?: Maybe<ReadAdminBooksOrderField>;
  orderSort?: Maybe<OrderDirection>;
}>;


export type ReadAdminBooksQuery = { __typename?: 'Query', readAdminBooks: { __typename?: 'ReadAdminBooksResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, isbn10?: Maybe<string>, isbn13?: Maybe<string>, createdAt?: Maybe<any>, createdBy?: Maybe<{ __typename?: 'User', username: string }>, bookStatus: { __typename?: 'BookStatus', id: string, name: string } }> }>> } } };

export type ReadStatisticsByAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadStatisticsByAdminQuery = { __typename?: 'Query', readStatisticsByAdmin: { __typename?: 'AdminStatistics', rejectedBooks?: Maybe<number>, inReviewBooks?: Maybe<number>, notApprovedBooks?: Maybe<number>, approvedBooks?: Maybe<number>, bookContributes: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, createdBooks: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, followers: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, followings: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, shelfs: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, userBooks: { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> } } };

export type DayValueFragment = { __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> };

export type UserStatisticsCountFragment = { __typename?: 'AdminStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'AdminStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> };

export type CheckIsbnQueryVariables = Exact<{
  ISBN: Scalars['String'];
}>;


export type CheckIsbnQuery = { __typename?: 'Query', checkISBN: { __typename?: 'Book', id: string, title: string, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, bookStatus: { __typename?: 'BookStatus', name: string } } };

export type CreateBookMutationVariables = Exact<{
  data: CreateBookInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, title: string } };

export type DiscoveryBooksQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type DiscoveryBooksQuery = { __typename?: 'Query', books: { __typename?: 'BooksResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, userBooks?: Maybe<Array<Maybe<{ __typename?: 'UserBook', readingRate?: Maybe<number>, readType?: Maybe<{ __typename?: 'ReadType', color: string }> }>>> }> }>> } } };

export type BookSlugQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type BookSlugQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, title: string, subtitle?: Maybe<string>, excerpt?: Maybe<any>, pageCount?: Maybe<number>, isbn10?: Maybe<string>, isbn13?: Maybe<string>, rating?: Maybe<number>, createdAt?: Maybe<any>, userBooks?: Maybe<Array<Maybe<{ __typename?: 'UserBook', readType?: Maybe<{ __typename?: 'ReadType', color: string }> }>>>, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, backCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, language?: Maybe<{ __typename?: 'Language', name: string }>, bookGenres?: Maybe<Array<Maybe<{ __typename?: 'BookGenre', genre: { __typename?: 'Genre', name: string } }>>> } };

export type DiscoveryQueryVariables = Exact<{ [key: string]: never; }>;


export type DiscoveryQuery = { __typename?: 'Query', books: { __typename?: 'BooksResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> }> }>> } }, usersDiscovery: { __typename?: 'UsersDiscoveryResponse', page: { __typename?: 'PopulationConnection', edges?: Maybe<Array<{ __typename?: 'PopulationEdge', node?: Maybe<{ __typename?: 'Population', name?: Maybe<string>, surname?: Maybe<string>, user: { __typename?: 'User', username: string, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>> } }> }>> } }, shelfs: { __typename?: 'ShelfsResponse', page: { __typename?: 'ShelfConnection', edges?: Maybe<Array<{ __typename?: 'ShelfEdge', node?: Maybe<{ __typename?: 'Shelf', id: string, name: string, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, logoImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, createdBy?: Maybe<{ __typename?: 'User', username: string }> }> }>> } } };

export type UsersDiscoveryQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersDiscoveryQuery = { __typename?: 'Query', usersDiscovery: { __typename?: 'UsersDiscoveryResponse', page: { __typename?: 'PopulationConnection', edges?: Maybe<Array<{ __typename?: 'PopulationEdge', node?: Maybe<{ __typename?: 'Population', name?: Maybe<string>, surname?: Maybe<string>, description?: Maybe<string>, user: { __typename?: 'User', username: string, booksCount?: Maybe<number>, shelfsCount?: Maybe<number>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>> } }> }>> } } };

export type UnFollowShelfMutationVariables = Exact<{
  data: UnFollowShelfInput;
}>;


export type UnFollowShelfMutation = { __typename?: 'Mutation', unFollowShelf: { __typename: 'ShelfFollow' } };

export type CreateShelfMutationVariables = Exact<{
  data: CreateShelfInput;
}>;


export type CreateShelfMutation = { __typename?: 'Mutation', createShelf: { __typename?: 'Shelf', id: string, createdBy?: Maybe<{ __typename?: 'User', username: string }> } };

export type CreateShelfBookMutationVariables = Exact<{
  data: CreateShelfBookInput;
}>;


export type CreateShelfBookMutation = { __typename?: 'Mutation', createShelfBook: { __typename: 'ShelfBook' } };

export type DeleteShelfMutationVariables = Exact<{
  data: DeleteShelfInput;
}>;


export type DeleteShelfMutation = { __typename?: 'Mutation', deleteShelf: { __typename?: 'Shelf', name: string, createdBy?: Maybe<{ __typename?: 'User', username: string }> } };

export type FollowShelfMutationVariables = Exact<{
  data: FollowShelfInput;
}>;


export type FollowShelfMutation = { __typename?: 'Mutation', followShelf: { __typename: 'ShelfFollow' } };

export type ShelfsQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type ShelfsQuery = { __typename?: 'Query', shelfs: { __typename?: 'ShelfsResponse', page: { __typename?: 'ShelfConnection', edges?: Maybe<Array<{ __typename?: 'ShelfEdge', node?: Maybe<{ __typename?: 'Shelf', id: string, name: string, description?: Maybe<string>, followersCount?: Maybe<number>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, logoImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, createdBy?: Maybe<{ __typename?: 'User', username: string }>, shelfBooks?: Maybe<Array<Maybe<{ __typename: 'ShelfBook' }>>> }> }>> } } };

export type UpdateShelfMutationVariables = Exact<{
  data: UpdateShelfInput;
}>;


export type UpdateShelfMutation = { __typename?: 'Mutation', updateShelf: { __typename?: 'Shelf', id: string, name: string, updatedBy?: Maybe<{ __typename?: 'User', username: string }> } };

export type UserShelfQueryVariables = Exact<{
  shelfId: Scalars['String'];
  username: Scalars['String'];
}>;


export type UserShelfQuery = { __typename?: 'Query', shelfByIdByUsername: { __typename?: 'Shelf', name: string, color?: Maybe<string>, emoji?: Maybe<string>, id: string, isPublic: boolean, description?: Maybe<string>, language?: Maybe<{ __typename?: 'Language', id: string }>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, logoImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> } };

export type ReadBookByIdQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type ReadBookByIdQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, title: string, subtitle?: Maybe<string>, excerpt?: Maybe<any>, isbn10?: Maybe<string>, isbn13?: Maybe<string>, pageCount?: Maybe<number>, width?: Maybe<number>, height?: Maybe<number>, length?: Maybe<number>, isOrginalLang: boolean, createdAt?: Maybe<any>, publishDate?: Maybe<any>, rating?: Maybe<number>, language?: Maybe<{ __typename?: 'Language', id: string, name: string }>, bookStatus: { __typename?: 'BookStatus', id: string, name: string }, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, backCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, createdBy?: Maybe<{ __typename?: 'User', username: string, population?: Maybe<{ __typename?: 'Population', fullName?: Maybe<string> }> }>, bookGenres?: Maybe<Array<Maybe<{ __typename?: 'BookGenre', genre: { __typename?: 'Genre', id: string, name: string } }>>>, bookContributes?: Maybe<Array<Maybe<{ __typename?: 'BookContribute', contributeJson: any }>>> } };

export type UpdateBookMutationVariables = Exact<{
  data: UpdateBookInput;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook: { __typename?: 'Book', title: string } };

export type ReadBooksStatusQueryVariables = Exact<{
  orderField?: Maybe<ReadBooksStatusOrderField>;
  orderSort?: Maybe<OrderDirection>;
}>;


export type ReadBooksStatusQuery = { __typename?: 'Query', readBooksStatus: { __typename?: 'ReadBooksStatusResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, isbn10?: Maybe<string>, isbn13?: Maybe<string>, createdAt?: Maybe<any>, createdBy?: Maybe<{ __typename?: 'User', username: string }>, bookStatus: { __typename?: 'BookStatus', id: string, name: string } }> }>> } } };

export type ReadBooksByContributeQueryVariables = Exact<{
  contributeUsername?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  queryContribute?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  languages?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderField?: Maybe<BookOrderField>;
  orderSort?: Maybe<OrderDirection>;
}>;


export type ReadBooksByContributeQuery = { __typename?: 'Query', books: { __typename?: 'BooksResponse', page: { __typename?: 'BookConnection', edges?: Maybe<Array<{ __typename?: 'BookEdge', node?: Maybe<{ __typename?: 'Book', id: string, title: string, createdAt?: Maybe<any>, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, userBooks?: Maybe<Array<Maybe<{ __typename?: 'UserBook', readingRate?: Maybe<number>, readType?: Maybe<{ __typename?: 'ReadType', color: string }> }>>> }> }>> } } };

export type CreateNewAccountMutationVariables = Exact<{
  data: CreateNewAccountInput;
}>;


export type CreateNewAccountMutation = { __typename?: 'Mutation', createNewAccount: { __typename?: 'Token', refreshToken: string, accessToken: string } };

export type FollowersByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FollowersByUsernameQuery = { __typename?: 'Query', followersByUsername: { __typename?: 'FollowersByUsernameResponse', page: { __typename?: 'UserFollowConnection', edges?: Maybe<Array<{ __typename?: 'UserFollowEdge', node?: Maybe<{ __typename?: 'UserFollow', follower?: Maybe<{ __typename?: 'User', username: string, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>>, population?: Maybe<{ __typename?: 'Population', fullName?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> }> }> }>> } } };

export type FollowingsByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type FollowingsByUsernameQuery = { __typename?: 'Query', followingsByUsername: { __typename?: 'FollowingsByUsernameResponse', page: { __typename?: 'UserFollowConnection', edges?: Maybe<Array<{ __typename?: 'UserFollowEdge', node?: Maybe<{ __typename?: 'UserFollow', following: { __typename?: 'User', username: string, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>>, population?: Maybe<{ __typename?: 'Population', fullName?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> } }> }>> } } };

export type LibraryBookSlugQueryVariables = Exact<{
  data: BookByUsernameInput;
}>;


export type LibraryBookSlugQuery = { __typename?: 'Query', bookByUsername: { __typename?: 'UserBook', readingPageCount?: Maybe<number>, book: { __typename?: 'Book', id: string, title: string, subtitle?: Maybe<string>, isbn10?: Maybe<string>, isbn13?: Maybe<string>, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, backCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> }, readType?: Maybe<{ __typename?: 'ReadType', id: string, color: string }> } };

export type ReadBooksByUsernameQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  queryContribute?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  languages?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  orderField?: Maybe<BooksByUsernameOrderField>;
  orderSort?: Maybe<OrderDirection>;
}>;


export type ReadBooksByUsernameQuery = { __typename?: 'Query', booksByUsername: { __typename?: 'BooksByUsernameResponse', page: { __typename?: 'UserBookConnection', edges?: Maybe<Array<{ __typename?: 'UserBookEdge', node?: Maybe<{ __typename?: 'UserBook', book: { __typename?: 'Book', id: string, title: string, subtitle?: Maybe<string>, pageCount?: Maybe<number>, createdAt?: Maybe<any>, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, userBooks?: Maybe<Array<Maybe<{ __typename?: 'UserBook', readingRate?: Maybe<number>, readType?: Maybe<{ __typename?: 'ReadType', color: string }> }>>> } }> }>> } } };

export type UserBookByIdLogsQueryVariables = Exact<{
  bookId: Scalars['String'];
}>;


export type UserBookByIdLogsQuery = { __typename?: 'Query', userBookByIdLogs: { __typename?: 'UserBookByIdLogsResponse', page: { __typename?: 'UserBookLogConnection', edges?: Maybe<Array<{ __typename?: 'UserBookLogEdge', node?: Maybe<{ __typename?: 'UserBookLog', id: string, readingPageCount?: Maybe<number>, createdAt?: Maybe<any> }> }>> } } };

export type ProfileByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type ProfileByUsernameQuery = { __typename?: 'Query', profileByUsername: { __typename?: 'User', username: string, booksCount?: Maybe<number>, shelfsCount?: Maybe<number>, followersCount?: Maybe<number>, followingsCount?: Maybe<number>, followingShelfsCount?: Maybe<number>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, population?: Maybe<{ __typename?: 'Population', description?: Maybe<string>, fullName?: Maybe<string> }>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, accountType: { __typename?: 'AccountType', name?: Maybe<string> }, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>> } };

export type CreateUserBookStatusMutationVariables = Exact<{
  data: CreateUserBookStatusInput;
}>;


export type CreateUserBookStatusMutation = { __typename?: 'Mutation', createUserBookStatus: { __typename?: 'UserBook', id: string } };

export type DeleteUserBookStatusMutationVariables = Exact<{
  data: DeleteUserBookStatusInput;
}>;


export type DeleteUserBookStatusMutation = { __typename?: 'Mutation', deleteUserBookStatus: { __typename?: 'UserBook', readType?: Maybe<{ __typename?: 'ReadType', color: string }> } };

export type UpdateUserBookStatusMutationVariables = Exact<{
  data: UpdateUserBookStatusInput;
}>;


export type UpdateUserBookStatusMutation = { __typename?: 'Mutation', updateUserBookStatus: { __typename?: 'UserBook', readType?: Maybe<{ __typename?: 'ReadType', id: string }> } };

export type ChangeNewEmailAdressMutationVariables = Exact<{
  data: UpdateChangeNewEmailAdressInput;
}>;


export type ChangeNewEmailAdressMutation = { __typename?: 'Mutation', changeNewEmailAdress: { __typename?: 'StatusGlobal', status: boolean } };

export type ConfirmNewEmailAdressMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type ConfirmNewEmailAdressMutation = { __typename?: 'Mutation', confirmNewEmailAdress: { __typename?: 'StatusGlobal', status: boolean } };

export type UpdateConfirmMailMutationVariables = Exact<{
  data: UpdateConfirmMailInput;
}>;


export type UpdateConfirmMailMutation = { __typename?: 'Mutation', updateConfirmMail: { __typename?: 'StatusGlobal', status: boolean } };

export type ConfirmEmailReSendMutationVariables = Exact<{ [key: string]: never; }>;


export type ConfirmEmailReSendMutation = { __typename?: 'Mutation', confirmEmailReSend: { __typename?: 'StatusGlobal', status: boolean } };

export type ReadSiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadSiteSettingsQuery = { __typename?: 'Query', readUserSettings: { __typename: 'UserSetting', siteLanguage: { __typename?: 'SiteLanguage', id: string, name: string }, siteTheme: { __typename?: 'SiteTheme', id: string, name: string } } };

export type ReadSiteThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadSiteThemesQuery = { __typename?: 'Query', readSiteThemes: Array<{ __typename?: 'SiteTheme', id: string, name: string }> };

export type UpdateUserSettingsMutationVariables = Exact<{
  data: UpdateUserSettingsInput;
}>;


export type UpdateUserSettingsMutation = { __typename?: 'Mutation', updateUserSettings: { __typename?: 'Population', id: string, companyTitle?: Maybe<string>, name?: Maybe<string>, phoneNumber?: Maybe<string>, surname?: Maybe<string>, taxOffice?: Maybe<string>, description?: Maybe<string>, country?: Maybe<{ __typename?: 'Country', id: string }>, language?: Maybe<{ __typename?: 'Language', id: string }>, user: { __typename?: 'User', accountType: { __typename?: 'AccountType', id: string } } } };

export type UpdateUserSettingMutationVariables = Exact<{
  data: UpdateUserSettingInput;
}>;


export type UpdateUserSettingMutation = { __typename?: 'Mutation', updateUserSetting: { __typename?: 'UserSetting', id: string } };

export type UserSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserSettingsQuery = { __typename?: 'Query', userSettings: { __typename?: 'Population', id: string, companyTitle?: Maybe<string>, name?: Maybe<string>, phoneNumber?: Maybe<string>, surname?: Maybe<string>, taxOffice?: Maybe<string>, description?: Maybe<string>, country?: Maybe<{ __typename?: 'Country', id: string, name: string }>, language?: Maybe<{ __typename?: 'Language', id: string, name: string }>, user: { __typename?: 'User', accountType: { __typename?: 'AccountType', id: string, name?: Maybe<string> } } } };

export type ReadUserSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadUserSettingsQuery = { __typename?: 'Query', readUserSettings: { __typename?: 'UserSetting', siteLanguage: { __typename?: 'SiteLanguage', id: string, name: string }, siteTheme: { __typename?: 'SiteTheme', id: string, name: string } } };

export type ReadShelfFollowersByIdByUsernameQueryVariables = Exact<{
  shelfId: Scalars['String'];
  username?: Maybe<Scalars['String']>;
}>;


export type ReadShelfFollowersByIdByUsernameQuery = { __typename?: 'Query', readShelfFollowersByIdByUsername: { __typename?: 'ReadShelfFollowersByIdByUsernameResponse', page: { __typename?: 'ShelfFollowConnection', edges?: Maybe<Array<{ __typename?: 'ShelfFollowEdge', node?: Maybe<{ __typename?: 'ShelfFollow', user: { __typename?: 'User', username: string, population?: Maybe<{ __typename?: 'Population', fullName?: Maybe<string> }>, profileImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, followers?: Maybe<Array<Maybe<{ __typename: 'UserFollow' }>>> } }> }>> } } };

export type ShelfByIdByUsernameQueryVariables = Exact<{
  shelfId: Scalars['String'];
  username: Scalars['String'];
}>;


export type ShelfByIdByUsernameQuery = { __typename?: 'Query', shelfByIdByUsername: { __typename?: 'Shelf', id: string, name: string, description?: Maybe<string>, emoji?: Maybe<string>, color?: Maybe<string>, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, isPublic: boolean, followersCount?: Maybe<number>, logoImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, createdBy?: Maybe<{ __typename?: 'User', username: string }>, shelfFollows?: Maybe<Array<Maybe<{ __typename: 'ShelfFollow' }>>>, shelfBooks?: Maybe<Array<Maybe<{ __typename?: 'ShelfBook', userBook: { __typename?: 'UserBook', id: string, createdAt?: Maybe<any>, book: { __typename?: 'Book', id: string, title: string, isbn13?: Maybe<string>, createdAt?: Maybe<any>, frontCover?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> } } }>>> } };

export type ShelvesByUsernameQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  queryBook?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
  languages?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  username: Scalars['String'];
  orderField?: Maybe<ShelfOrderField>;
  orderSort?: Maybe<OrderDirection>;
}>;


export type ShelvesByUsernameQuery = { __typename?: 'Query', shelvesByUsername: { __typename?: 'UserShelfsResponse', page: { __typename?: 'ShelfConnection', edges?: Maybe<Array<{ __typename?: 'ShelfEdge', node?: Maybe<{ __typename?: 'Shelf', id: string, name: string, followersCount?: Maybe<number>, description?: Maybe<string>, isPublic: boolean, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, logoImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }>, shelfBooks?: Maybe<Array<Maybe<{ __typename: 'ShelfBook' }>>>, createdBy?: Maybe<{ __typename?: 'User', username: string }> }> }>> } } };

export type UserStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserStatisticsQuery = { __typename?: 'Query', userStatistics: { __typename?: 'UserStatistics', bookContributes: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, createdBooks: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, followers: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, followings: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, shelfs: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> }, userBooks: { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> } } };

export type DayValueAdminFragment = { __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> };

export type UserAdminStatisticsCountFragment = { __typename?: 'UserStatisticsCount', name?: Maybe<string>, start?: Maybe<string>, total?: Maybe<number>, lastWeekCounts?: Maybe<Array<{ __typename?: 'UserStatisticsDayValue', day?: Maybe<string>, value?: Maybe<string> }>> };

export type FollowUserByUsernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type FollowUserByUsernameMutation = { __typename?: 'Mutation', followUserByUsername: { __typename?: 'UserFollow', id: string } };

export type UnFollowUserByUsernameMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UnFollowUserByUsernameMutation = { __typename?: 'Mutation', unFollowUserByUsername: { __typename: 'UserFollow' } };

export type ReadWriteQueryVariables = Exact<{
  writeId: Scalars['String'];
}>;


export type ReadWriteQuery = { __typename?: 'Query', write: { __typename?: 'WriteBook', id: string, title: string, text: any, summary: any, createdAt?: Maybe<any>, coverImage?: Maybe<{ __typename?: 'File', path?: Maybe<string> }> } };

export type WriteBooksMutationVariables = Exact<{
  data: CreateWriteBookInput;
}>;


export type WriteBooksMutation = { __typename?: 'Mutation', createWriteBook: { __typename?: 'WriteBook', id: string, createdBy: { __typename?: 'User', username: string } } };

export type WritesQueryVariables = Exact<{ [key: string]: never; }>;


export type WritesQuery = { __typename?: 'Query', writeBooks: { __typename?: 'WriteBooksResponse', page: { __typename?: 'WriteBookConnection', edges?: Maybe<Array<{ __typename?: 'WriteBookEdge', node?: Maybe<{ __typename: 'WriteBook', id: string, createdAt?: Maybe<any>, title: string }> }>> } } };

export type CreateWritingMutationVariables = Exact<{
  data: CreateWriteBookInput;
}>;


export type CreateWritingMutation = { __typename?: 'Mutation', createWriteBook: { __typename?: 'WriteBook', id: string, title: string, book?: Maybe<{ __typename?: 'Book', title: string }>, createdBy: { __typename?: 'User', username: string } } };

export const DayValueFragmentDoc = gql`
    fragment dayValue on AdminStatisticsDayValue {
  day
  value
}
    `;
export const UserStatisticsCountFragmentDoc = gql`
    fragment userStatisticsCount on AdminStatisticsCount {
  name
  start
  total
  lastWeekCounts {
    ...dayValue
  }
}
    ${DayValueFragmentDoc}`;
export const DayValueAdminFragmentDoc = gql`
    fragment dayValueAdmin on UserStatisticsDayValue {
  day
  value
}
    `;
export const UserAdminStatisticsCountFragmentDoc = gql`
    fragment userAdminStatisticsCount on UserStatisticsCount {
  name
  start
  total
  lastWeekCounts {
    ...dayValueAdmin
  }
}
    ${DayValueAdminFragmentDoc}`;
export const MeDocument = gql`
    query me {
  me {
    username
    email
    population {
      name
      surname
      fullName
    }
    coverImage {
      path
    }
    profileImage {
      path
    }
    followersCount
    booksCount
    followingsCount
    shelfsCount
    isNotify
    notifyCount
    isApproved
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a Vue component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMeQuery();
 */
export function useMeQuery(options: VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MeQuery, MeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MeQuery, MeQueryVariables>(MeDocument, {}, options);
}
export type MeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MeQuery, MeQueryVariables>;
export const LoginMutationDocument = gql`
    mutation loginMutation($email: String!, $password: String!) {
  signIn(data: {email: $email, password: $password}) {
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLoginMutationMutation({
 *   variables: {
 *     email: // value for 'email'
 *     password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(options: VueApolloComposable.UseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>>) {
  return VueApolloComposable.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
}
export type LoginMutationMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LoginMutationMutation, LoginMutationMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  signOut
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutMutation();
 */
export function useLogoutMutation(options: VueApolloComposable.UseMutationOptions<LogoutMutation, LogoutMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LogoutMutation, LogoutMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LogoutMutation, LogoutMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken($token: String!) {
  refreshToken(token: $token) {
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRefreshTokenMutation({
 *   variables: {
 *     token: // value for 'token'
 *   },
 * });
 */
export function useRefreshTokenMutation(options: VueApolloComposable.UseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>>) {
  return VueApolloComposable.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
}
export type RefreshTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const AuthBooksDocument = gql`
    query authBooks($first: Int!) {
  books(first: $first, orderSort: asc) {
    page {
      edges {
        node {
          id
          title
          frontCover {
            path
          }
        }
      }
    }
  }
}
    `;

/**
 * __useAuthBooksQuery__
 *
 * To run a query within a Vue component, call `useAuthBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthBooksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAuthBooksQuery({
 *   first: // value for 'first'
 * });
 */
export function useAuthBooksQuery(variables: AuthBooksQueryVariables | VueCompositionApi.Ref<AuthBooksQueryVariables> | ReactiveFunction<AuthBooksQueryVariables>, options: VueApolloComposable.UseQueryOptions<AuthBooksQuery, AuthBooksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AuthBooksQuery, AuthBooksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AuthBooksQuery, AuthBooksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AuthBooksQuery, AuthBooksQueryVariables>(AuthBooksDocument, variables, options);
}
export type AuthBooksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AuthBooksQuery, AuthBooksQueryVariables>;
export const ForgotPasswordByEmailDocument = gql`
    mutation forgotPasswordByEmail($data: ForgotPasswordByEmailInput!) {
  forgotPasswordByEmail(data: $data) {
    status
  }
}
    `;

/**
 * __useForgotPasswordByEmailMutation__
 *
 * To run a mutation, you first call `useForgotPasswordByEmailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordByEmailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useForgotPasswordByEmailMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useForgotPasswordByEmailMutation(options: VueApolloComposable.UseMutationOptions<ForgotPasswordByEmailMutation, ForgotPasswordByEmailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ForgotPasswordByEmailMutation, ForgotPasswordByEmailMutationVariables>>) {
  return VueApolloComposable.useMutation<ForgotPasswordByEmailMutation, ForgotPasswordByEmailMutationVariables>(ForgotPasswordByEmailDocument, options);
}
export type ForgotPasswordByEmailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ForgotPasswordByEmailMutation, ForgotPasswordByEmailMutationVariables>;
export const ResetPasswordInputDocument = gql`
    mutation resetPasswordInput($data: ResetPasswordInput!) {
  resetPassword(data: $data) {
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useResetPasswordInputMutation__
 *
 * To run a mutation, you first call `useResetPasswordInputMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordInputMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResetPasswordInputMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordInputMutation(options: VueApolloComposable.UseMutationOptions<ResetPasswordInputMutation, ResetPasswordInputMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ResetPasswordInputMutation, ResetPasswordInputMutationVariables>>) {
  return VueApolloComposable.useMutation<ResetPasswordInputMutation, ResetPasswordInputMutationVariables>(ResetPasswordInputDocument, options);
}
export type ResetPasswordInputMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ResetPasswordInputMutation, ResetPasswordInputMutationVariables>;
export const ResetPasswordWithCodeDocument = gql`
    mutation resetPasswordWithCode($data: ResetPasswordCodeInput!) {
  resetPasswordWithCode(data: $data) {
    accessToken
    refreshToken
  }
}
    `;

/**
 * __useResetPasswordWithCodeMutation__
 *
 * To run a mutation, you first call `useResetPasswordWithCodeMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordWithCodeMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useResetPasswordWithCodeMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useResetPasswordWithCodeMutation(options: VueApolloComposable.UseMutationOptions<ResetPasswordWithCodeMutation, ResetPasswordWithCodeMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ResetPasswordWithCodeMutation, ResetPasswordWithCodeMutationVariables>>) {
  return VueApolloComposable.useMutation<ResetPasswordWithCodeMutation, ResetPasswordWithCodeMutationVariables>(ResetPasswordWithCodeDocument, options);
}
export type ResetPasswordWithCodeMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ResetPasswordWithCodeMutation, ResetPasswordWithCodeMutationVariables>;
export const AccountTypesDocument = gql`
    query accountTypes {
  accountTypes {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useAccountTypesQuery__
 *
 * To run a query within a Vue component, call `useAccountTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAccountTypesQuery();
 */
export function useAccountTypesQuery(options: VueApolloComposable.UseQueryOptions<AccountTypesQuery, AccountTypesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AccountTypesQuery, AccountTypesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AccountTypesQuery, AccountTypesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AccountTypesQuery, AccountTypesQueryVariables>(AccountTypesDocument, {}, options);
}
export type AccountTypesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AccountTypesQuery, AccountTypesQueryVariables>;
export const BookStatusDocument = gql`
    query bookStatus {
  bookStatus {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useBookStatusQuery__
 *
 * To run a query within a Vue component, call `useBookStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookStatusQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBookStatusQuery();
 */
export function useBookStatusQuery(options: VueApolloComposable.UseQueryOptions<BookStatusQuery, BookStatusQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BookStatusQuery, BookStatusQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BookStatusQuery, BookStatusQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BookStatusQuery, BookStatusQueryVariables>(BookStatusDocument, {}, options);
}
export type BookStatusQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BookStatusQuery, BookStatusQueryVariables>;
export const ContributeTypesDocument = gql`
    query contributeTypes {
  contributeTypes {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useContributeTypesQuery__
 *
 * To run a query within a Vue component, call `useContributeTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useContributeTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useContributeTypesQuery();
 */
export function useContributeTypesQuery(options: VueApolloComposable.UseQueryOptions<ContributeTypesQuery, ContributeTypesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ContributeTypesQuery, ContributeTypesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ContributeTypesQuery, ContributeTypesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ContributeTypesQuery, ContributeTypesQueryVariables>(ContributeTypesDocument, {}, options);
}
export type ContributeTypesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ContributeTypesQuery, ContributeTypesQueryVariables>;
export const CountriesDocument = gql`
    query Countries {
  countries {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useCountriesQuery__
 *
 * To run a query within a Vue component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCountriesQuery();
 */
export function useCountriesQuery(options: VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CountriesQuery, CountriesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, {}, options);
}
export type CountriesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CountriesQuery, CountriesQueryVariables>;
export const CreateDeviceTokenDocument = gql`
    mutation createDeviceToken($data: CreateDeviceTokenInput!) {
  createDeviceToken(data: $data) {
    __typename
  }
}
    `;

/**
 * __useCreateDeviceTokenMutation__
 *
 * To run a mutation, you first call `useCreateDeviceTokenMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeviceTokenMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateDeviceTokenMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateDeviceTokenMutation(options: VueApolloComposable.UseMutationOptions<CreateDeviceTokenMutation, CreateDeviceTokenMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateDeviceTokenMutation, CreateDeviceTokenMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateDeviceTokenMutation, CreateDeviceTokenMutationVariables>(CreateDeviceTokenDocument, options);
}
export type CreateDeviceTokenMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateDeviceTokenMutation, CreateDeviceTokenMutationVariables>;
export const GenresDocument = gql`
    query genres($query: String!) {
  genres(query: $query) {
    page {
      edges {
        node {
          __typename
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a Vue component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGenresQuery({
 *   query: // value for 'query'
 * });
 */
export function useGenresQuery(variables: GenresQueryVariables | VueCompositionApi.Ref<GenresQueryVariables> | ReactiveFunction<GenresQueryVariables>, options: VueApolloComposable.UseQueryOptions<GenresQuery, GenresQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<GenresQuery, GenresQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<GenresQuery, GenresQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, variables, options);
}
export type GenresQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<GenresQuery, GenresQueryVariables>;
export const LanguagesDocument = gql`
    query languages($query: String!) {
  languages(query: $query) {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
        }
      }
    }
  }
}
    `;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a Vue component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLanguagesQuery({
 *   query: // value for 'query'
 * });
 */
export function useLanguagesQuery(variables: LanguagesQueryVariables | VueCompositionApi.Ref<LanguagesQueryVariables> | ReactiveFunction<LanguagesQueryVariables>, options: VueApolloComposable.UseQueryOptions<LanguagesQuery, LanguagesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LanguagesQuery, LanguagesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LanguagesQuery, LanguagesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, variables, options);
}
export type LanguagesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LanguagesQuery, LanguagesQueryVariables>;
export const ReadIsNotifyDocument = gql`
    query readIsNotify {
  me {
    isNotify
    notifyCount
  }
}
    `;

/**
 * __useReadIsNotifyQuery__
 *
 * To run a query within a Vue component, call `useReadIsNotifyQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadIsNotifyQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadIsNotifyQuery();
 */
export function useReadIsNotifyQuery(options: VueApolloComposable.UseQueryOptions<ReadIsNotifyQuery, ReadIsNotifyQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadIsNotifyQuery, ReadIsNotifyQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadIsNotifyQuery, ReadIsNotifyQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadIsNotifyQuery, ReadIsNotifyQueryVariables>(ReadIsNotifyDocument, {}, options);
}
export type ReadIsNotifyQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadIsNotifyQuery, ReadIsNotifyQueryVariables>;
export const ReadTypesDocument = gql`
    query readTypes {
  readTypes(orderSort: asc) {
    page {
      edges {
        node {
          __typename
          id
          name
          color
        }
      }
    }
  }
}
    `;

/**
 * __useReadTypesQuery__
 *
 * To run a query within a Vue component, call `useReadTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadTypesQuery();
 */
export function useReadTypesQuery(options: VueApolloComposable.UseQueryOptions<ReadTypesQuery, ReadTypesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadTypesQuery, ReadTypesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadTypesQuery, ReadTypesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadTypesQuery, ReadTypesQueryVariables>(ReadTypesDocument, {}, options);
}
export type ReadTypesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadTypesQuery, ReadTypesQueryVariables>;
export const ReadSiteLanguagesDocument = gql`
    query readSiteLanguages {
  readSiteLanguages {
    id
    name_en
    code
  }
}
    `;

/**
 * __useReadSiteLanguagesQuery__
 *
 * To run a query within a Vue component, call `useReadSiteLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadSiteLanguagesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadSiteLanguagesQuery();
 */
export function useReadSiteLanguagesQuery(options: VueApolloComposable.UseQueryOptions<ReadSiteLanguagesQuery, ReadSiteLanguagesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadSiteLanguagesQuery, ReadSiteLanguagesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadSiteLanguagesQuery, ReadSiteLanguagesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadSiteLanguagesQuery, ReadSiteLanguagesQueryVariables>(ReadSiteLanguagesDocument, {}, options);
}
export type ReadSiteLanguagesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadSiteLanguagesQuery, ReadSiteLanguagesQueryVariables>;
export const DeleteMediaDocument = gql`
    mutation deleteMedia($data: DeleteMediaInput!) {
  deleteMedia(data: $data) {
    path
  }
}
    `;

/**
 * __useDeleteMediaMutation__
 *
 * To run a mutation, you first call `useDeleteMediaMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMediaMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteMediaMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useDeleteMediaMutation(options: VueApolloComposable.UseMutationOptions<DeleteMediaMutation, DeleteMediaMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteMediaMutation, DeleteMediaMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteMediaMutation, DeleteMediaMutationVariables>(DeleteMediaDocument, options);
}
export type DeleteMediaMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteMediaMutation, DeleteMediaMutationVariables>;
export const UploadMediaToS3Document = gql`
    mutation uploadMediaToS3($file: Upload, $data: UploadMediaToS3Input!) {
  uploadMediaToS3(file: $file, data: $data) {
    locationUrl
    path
    fieldName
  }
}
    `;

/**
 * __useUploadMediaToS3Mutation__
 *
 * To run a mutation, you first call `useUploadMediaToS3Mutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUploadMediaToS3Mutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUploadMediaToS3Mutation({
 *   variables: {
 *     file: // value for 'file'
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUploadMediaToS3Mutation(options: VueApolloComposable.UseMutationOptions<UploadMediaToS3Mutation, UploadMediaToS3MutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UploadMediaToS3Mutation, UploadMediaToS3MutationVariables>>) {
  return VueApolloComposable.useMutation<UploadMediaToS3Mutation, UploadMediaToS3MutationVariables>(UploadMediaToS3Document, options);
}
export type UploadMediaToS3MutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UploadMediaToS3Mutation, UploadMediaToS3MutationVariables>;
export const WriteTypesDocument = gql`
    query writeTypes {
  writeTypes {
    pageData {
      count
    }
    page {
      edges {
        node {
          __typename
          name
          id
          name_en
        }
      }
    }
  }
}
    `;

/**
 * __useWriteTypesQuery__
 *
 * To run a query within a Vue component, call `useWriteTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWriteTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useWriteTypesQuery();
 */
export function useWriteTypesQuery(options: VueApolloComposable.UseQueryOptions<WriteTypesQuery, WriteTypesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<WriteTypesQuery, WriteTypesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<WriteTypesQuery, WriteTypesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<WriteTypesQuery, WriteTypesQueryVariables>(WriteTypesDocument, {}, options);
}
export type WriteTypesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<WriteTypesQuery, WriteTypesQueryVariables>;
export const UpdateBookAdminDocument = gql`
    mutation updateBookAdmin($data: UpdateAdminBookInput!) {
  updateBookAdmin(data: $data) {
    title
  }
}
    `;

/**
 * __useUpdateBookAdminMutation__
 *
 * To run a mutation, you first call `useUpdateBookAdminMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookAdminMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBookAdminMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBookAdminMutation(options: VueApolloComposable.UseMutationOptions<UpdateBookAdminMutation, UpdateBookAdminMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBookAdminMutation, UpdateBookAdminMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateBookAdminMutation, UpdateBookAdminMutationVariables>(UpdateBookAdminDocument, options);
}
export type UpdateBookAdminMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBookAdminMutation, UpdateBookAdminMutationVariables>;
export const UpdateBookStatusAdminDocument = gql`
    mutation updateBookStatusAdmin($data: UpdateAdminBookStatusInput!) {
  updateBookStatusAdmin(data: $data) {
    title
  }
}
    `;

/**
 * __useUpdateBookStatusAdminMutation__
 *
 * To run a mutation, you first call `useUpdateBookStatusAdminMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookStatusAdminMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBookStatusAdminMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBookStatusAdminMutation(options: VueApolloComposable.UseMutationOptions<UpdateBookStatusAdminMutation, UpdateBookStatusAdminMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBookStatusAdminMutation, UpdateBookStatusAdminMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateBookStatusAdminMutation, UpdateBookStatusAdminMutationVariables>(UpdateBookStatusAdminDocument, options);
}
export type UpdateBookStatusAdminMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBookStatusAdminMutation, UpdateBookStatusAdminMutationVariables>;
export const ReadAdminBooksDocument = gql`
    query readAdminBooks($query: String, $statusId: BookStatusEnum, $orderField: ReadAdminBooksOrderField, $orderSort: OrderDirection) {
  readAdminBooks(
    query: $query
    bookStatusId: $statusId
    orderField: $orderField
    orderSort: $orderSort
  ) {
    page {
      edges {
        node {
          id
          title
          createdBy {
            username
          }
          isbn10
          isbn13
          createdAt
          bookStatus {
            id
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadAdminBooksQuery__
 *
 * To run a query within a Vue component, call `useReadAdminBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadAdminBooksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadAdminBooksQuery({
 *   query: // value for 'query'
 *   statusId: // value for 'statusId'
 *   orderField: // value for 'orderField'
 *   orderSort: // value for 'orderSort'
 * });
 */
export function useReadAdminBooksQuery(variables: ReadAdminBooksQueryVariables | VueCompositionApi.Ref<ReadAdminBooksQueryVariables> | ReactiveFunction<ReadAdminBooksQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ReadAdminBooksQuery, ReadAdminBooksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadAdminBooksQuery, ReadAdminBooksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadAdminBooksQuery, ReadAdminBooksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadAdminBooksQuery, ReadAdminBooksQueryVariables>(ReadAdminBooksDocument, variables, options);
}
export type ReadAdminBooksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadAdminBooksQuery, ReadAdminBooksQueryVariables>;
export const ReadStatisticsByAdminDocument = gql`
    query readStatisticsByAdmin {
  readStatisticsByAdmin {
    bookContributes {
      ...userStatisticsCount
    }
    createdBooks {
      ...userStatisticsCount
    }
    followers {
      ...userStatisticsCount
    }
    followings {
      ...userStatisticsCount
    }
    shelfs {
      ...userStatisticsCount
    }
    userBooks {
      ...userStatisticsCount
    }
    rejectedBooks
    inReviewBooks
    notApprovedBooks
    approvedBooks
  }
}
    ${UserStatisticsCountFragmentDoc}`;

/**
 * __useReadStatisticsByAdminQuery__
 *
 * To run a query within a Vue component, call `useReadStatisticsByAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadStatisticsByAdminQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadStatisticsByAdminQuery();
 */
export function useReadStatisticsByAdminQuery(options: VueApolloComposable.UseQueryOptions<ReadStatisticsByAdminQuery, ReadStatisticsByAdminQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadStatisticsByAdminQuery, ReadStatisticsByAdminQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadStatisticsByAdminQuery, ReadStatisticsByAdminQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadStatisticsByAdminQuery, ReadStatisticsByAdminQueryVariables>(ReadStatisticsByAdminDocument, {}, options);
}
export type ReadStatisticsByAdminQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadStatisticsByAdminQuery, ReadStatisticsByAdminQueryVariables>;
export const CheckIsbnDocument = gql`
    query checkISBN($ISBN: String!) {
  checkISBN(ISBN: $ISBN) {
    id
    title
    frontCover {
      path
    }
    bookStatus {
      name
    }
  }
}
    `;

/**
 * __useCheckIsbnQuery__
 *
 * To run a query within a Vue component, call `useCheckIsbnQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckIsbnQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCheckIsbnQuery({
 *   ISBN: // value for 'ISBN'
 * });
 */
export function useCheckIsbnQuery(variables: CheckIsbnQueryVariables | VueCompositionApi.Ref<CheckIsbnQueryVariables> | ReactiveFunction<CheckIsbnQueryVariables>, options: VueApolloComposable.UseQueryOptions<CheckIsbnQuery, CheckIsbnQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<CheckIsbnQuery, CheckIsbnQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<CheckIsbnQuery, CheckIsbnQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<CheckIsbnQuery, CheckIsbnQueryVariables>(CheckIsbnDocument, variables, options);
}
export type CheckIsbnQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<CheckIsbnQuery, CheckIsbnQueryVariables>;
export const CreateBookDocument = gql`
    mutation createBook($data: CreateBookInput!) {
  createBook(data: $data) {
    id
    title
  }
}
    `;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateBookMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookMutation(options: VueApolloComposable.UseMutationOptions<CreateBookMutation, CreateBookMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateBookMutation, CreateBookMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
}
export type CreateBookMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateBookMutation, CreateBookMutationVariables>;
export const DiscoveryBooksDocument = gql`
    query discoveryBooks($query: String) {
  books(query: $query) {
    page {
      edges {
        node {
          id
          title
          frontCover {
            path
          }
          userBooks {
            readingRate
            readType {
              color
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useDiscoveryBooksQuery__
 *
 * To run a query within a Vue component, call `useDiscoveryBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoveryBooksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDiscoveryBooksQuery({
 *   query: // value for 'query'
 * });
 */
export function useDiscoveryBooksQuery(variables: DiscoveryBooksQueryVariables | VueCompositionApi.Ref<DiscoveryBooksQueryVariables> | ReactiveFunction<DiscoveryBooksQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<DiscoveryBooksQuery, DiscoveryBooksQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DiscoveryBooksQuery, DiscoveryBooksQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DiscoveryBooksQuery, DiscoveryBooksQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<DiscoveryBooksQuery, DiscoveryBooksQueryVariables>(DiscoveryBooksDocument, variables, options);
}
export type DiscoveryBooksQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<DiscoveryBooksQuery, DiscoveryBooksQueryVariables>;
export const BookSlugDocument = gql`
    query bookSlug($bookId: String!) {
  book(bookId: $bookId) {
    id
    title
    subtitle
    excerpt
    userBooks {
      readType {
        color
      }
    }
    frontCover {
      path
    }
    backCover {
      path
    }
    pageCount
    isbn10
    isbn13
    language {
      name
    }
    rating
    createdAt
    bookGenres {
      genre {
        name
      }
    }
  }
}
    `;

/**
 * __useBookSlugQuery__
 *
 * To run a query within a Vue component, call `useBookSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookSlugQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useBookSlugQuery({
 *   bookId: // value for 'bookId'
 * });
 */
export function useBookSlugQuery(variables: BookSlugQueryVariables | VueCompositionApi.Ref<BookSlugQueryVariables> | ReactiveFunction<BookSlugQueryVariables>, options: VueApolloComposable.UseQueryOptions<BookSlugQuery, BookSlugQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<BookSlugQuery, BookSlugQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<BookSlugQuery, BookSlugQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<BookSlugQuery, BookSlugQueryVariables>(BookSlugDocument, variables, options);
}
export type BookSlugQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<BookSlugQuery, BookSlugQueryVariables>;
export const DiscoveryDocument = gql`
    query discovery {
  books(first: 18, orderSort: asc, orderField: createdAt) {
    page {
      edges {
        node {
          id
          title
          frontCover {
            path
          }
        }
      }
    }
  }
  usersDiscovery(first: 18, orderSort: asc, orderField: createdAt) {
    page {
      edges {
        node {
          name
          surname
          user {
            username
            profileImage {
              path
            }
            followers {
              __typename
            }
          }
        }
      }
    }
  }
  shelfs(first: 18, orderSort: asc, orderField: createdAt) {
    page {
      edges {
        node {
          id
          name
          coverImage {
            path
          }
          logoImage {
            path
          }
          createdBy {
            username
          }
        }
      }
    }
  }
}
    `;

/**
 * __useDiscoveryQuery__
 *
 * To run a query within a Vue component, call `useDiscoveryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscoveryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDiscoveryQuery();
 */
export function useDiscoveryQuery(options: VueApolloComposable.UseQueryOptions<DiscoveryQuery, DiscoveryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<DiscoveryQuery, DiscoveryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<DiscoveryQuery, DiscoveryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<DiscoveryQuery, DiscoveryQueryVariables>(DiscoveryDocument, {}, options);
}
export type DiscoveryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<DiscoveryQuery, DiscoveryQueryVariables>;
export const UsersDiscoveryDocument = gql`
    query usersDiscovery {
  usersDiscovery {
    page {
      edges {
        node {
          name
          surname
          description
          user {
            username
            profileImage {
              path
            }
            booksCount
            shelfsCount
            followers {
              __typename
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useUsersDiscoveryQuery__
 *
 * To run a query within a Vue component, call `useUsersDiscoveryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersDiscoveryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUsersDiscoveryQuery();
 */
export function useUsersDiscoveryQuery(options: VueApolloComposable.UseQueryOptions<UsersDiscoveryQuery, UsersDiscoveryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UsersDiscoveryQuery, UsersDiscoveryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UsersDiscoveryQuery, UsersDiscoveryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UsersDiscoveryQuery, UsersDiscoveryQueryVariables>(UsersDiscoveryDocument, {}, options);
}
export type UsersDiscoveryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UsersDiscoveryQuery, UsersDiscoveryQueryVariables>;
export const UnFollowShelfDocument = gql`
    mutation unFollowShelf($data: UnFollowShelfInput!) {
  unFollowShelf(data: $data) {
    __typename
  }
}
    `;

/**
 * __useUnFollowShelfMutation__
 *
 * To run a mutation, you first call `useUnFollowShelfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUnFollowShelfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUnFollowShelfMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUnFollowShelfMutation(options: VueApolloComposable.UseMutationOptions<UnFollowShelfMutation, UnFollowShelfMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UnFollowShelfMutation, UnFollowShelfMutationVariables>>) {
  return VueApolloComposable.useMutation<UnFollowShelfMutation, UnFollowShelfMutationVariables>(UnFollowShelfDocument, options);
}
export type UnFollowShelfMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UnFollowShelfMutation, UnFollowShelfMutationVariables>;
export const CreateShelfDocument = gql`
    mutation createShelf($data: CreateShelfInput!) {
  createShelf(data: $data) {
    id
    createdBy {
      username
    }
  }
}
    `;

/**
 * __useCreateShelfMutation__
 *
 * To run a mutation, you first call `useCreateShelfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateShelfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateShelfMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateShelfMutation(options: VueApolloComposable.UseMutationOptions<CreateShelfMutation, CreateShelfMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateShelfMutation, CreateShelfMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateShelfMutation, CreateShelfMutationVariables>(CreateShelfDocument, options);
}
export type CreateShelfMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateShelfMutation, CreateShelfMutationVariables>;
export const CreateShelfBookDocument = gql`
    mutation createShelfBook($data: CreateShelfBookInput!) {
  createShelfBook(data: $data) {
    __typename
  }
}
    `;

/**
 * __useCreateShelfBookMutation__
 *
 * To run a mutation, you first call `useCreateShelfBookMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateShelfBookMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateShelfBookMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateShelfBookMutation(options: VueApolloComposable.UseMutationOptions<CreateShelfBookMutation, CreateShelfBookMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateShelfBookMutation, CreateShelfBookMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateShelfBookMutation, CreateShelfBookMutationVariables>(CreateShelfBookDocument, options);
}
export type CreateShelfBookMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateShelfBookMutation, CreateShelfBookMutationVariables>;
export const DeleteShelfDocument = gql`
    mutation deleteShelf($data: DeleteShelfInput!) {
  deleteShelf(data: $data) {
    createdBy {
      username
    }
    name
  }
}
    `;

/**
 * __useDeleteShelfMutation__
 *
 * To run a mutation, you first call `useDeleteShelfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteShelfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteShelfMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useDeleteShelfMutation(options: VueApolloComposable.UseMutationOptions<DeleteShelfMutation, DeleteShelfMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteShelfMutation, DeleteShelfMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteShelfMutation, DeleteShelfMutationVariables>(DeleteShelfDocument, options);
}
export type DeleteShelfMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteShelfMutation, DeleteShelfMutationVariables>;
export const FollowShelfDocument = gql`
    mutation followShelf($data: FollowShelfInput!) {
  followShelf(data: $data) {
    __typename
  }
}
    `;

/**
 * __useFollowShelfMutation__
 *
 * To run a mutation, you first call `useFollowShelfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useFollowShelfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useFollowShelfMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useFollowShelfMutation(options: VueApolloComposable.UseMutationOptions<FollowShelfMutation, FollowShelfMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<FollowShelfMutation, FollowShelfMutationVariables>>) {
  return VueApolloComposable.useMutation<FollowShelfMutation, FollowShelfMutationVariables>(FollowShelfDocument, options);
}
export type FollowShelfMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<FollowShelfMutation, FollowShelfMutationVariables>;
export const ShelfsDocument = gql`
    query shelfs($query: String) {
  shelfs(query: $query) {
    page {
      edges {
        node {
          id
          name
          coverImage {
            path
          }
          logoImage {
            path
          }
          createdBy {
            username
          }
          shelfBooks {
            __typename
          }
          description
          followersCount
        }
      }
    }
  }
}
    `;

/**
 * __useShelfsQuery__
 *
 * To run a query within a Vue component, call `useShelfsQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelfsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useShelfsQuery({
 *   query: // value for 'query'
 * });
 */
export function useShelfsQuery(variables: ShelfsQueryVariables | VueCompositionApi.Ref<ShelfsQueryVariables> | ReactiveFunction<ShelfsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ShelfsQuery, ShelfsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ShelfsQuery, ShelfsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ShelfsQuery, ShelfsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ShelfsQuery, ShelfsQueryVariables>(ShelfsDocument, variables, options);
}
export type ShelfsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ShelfsQuery, ShelfsQueryVariables>;
export const UpdateShelfDocument = gql`
    mutation updateShelf($data: UpdateShelfInput!) {
  updateShelf(data: $data) {
    updatedBy {
      username
    }
    id
    name
  }
}
    `;

/**
 * __useUpdateShelfMutation__
 *
 * To run a mutation, you first call `useUpdateShelfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateShelfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateShelfMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateShelfMutation(options: VueApolloComposable.UseMutationOptions<UpdateShelfMutation, UpdateShelfMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateShelfMutation, UpdateShelfMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateShelfMutation, UpdateShelfMutationVariables>(UpdateShelfDocument, options);
}
export type UpdateShelfMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateShelfMutation, UpdateShelfMutationVariables>;
export const UserShelfDocument = gql`
    query userShelf($shelfId: String!, $username: String!) {
  shelfByIdByUsername(shelfId: $shelfId, username: $username) {
    name
    color
    emoji
    id
    isPublic
    description
    language {
      id
    }
    coverImage {
      path
    }
    logoImage {
      path
    }
  }
}
    `;

/**
 * __useUserShelfQuery__
 *
 * To run a query within a Vue component, call `useUserShelfQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserShelfQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserShelfQuery({
 *   shelfId: // value for 'shelfId'
 *   username: // value for 'username'
 * });
 */
export function useUserShelfQuery(variables: UserShelfQueryVariables | VueCompositionApi.Ref<UserShelfQueryVariables> | ReactiveFunction<UserShelfQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserShelfQuery, UserShelfQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserShelfQuery, UserShelfQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserShelfQuery, UserShelfQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserShelfQuery, UserShelfQueryVariables>(UserShelfDocument, variables, options);
}
export type UserShelfQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserShelfQuery, UserShelfQueryVariables>;
export const ReadBookByIdDocument = gql`
    query readBookById($bookId: String!) {
  book(bookId: $bookId) {
    id
    title
    subtitle
    excerpt
    isbn10
    isbn13
    pageCount
    width
    height
    length
    isOrginalLang
    createdAt
    publishDate
    language {
      id
      name
    }
    bookStatus {
      id
      name
    }
    frontCover {
      path
    }
    backCover {
      path
    }
    createdBy {
      username
      population {
        fullName
      }
    }
    rating
    createdAt
    bookStatus {
      id
      name
    }
    bookGenres {
      genre {
        id
        name
      }
    }
    bookContributes {
      contributeJson
    }
  }
}
    `;

/**
 * __useReadBookByIdQuery__
 *
 * To run a query within a Vue component, call `useReadBookByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadBookByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadBookByIdQuery({
 *   bookId: // value for 'bookId'
 * });
 */
export function useReadBookByIdQuery(variables: ReadBookByIdQueryVariables | VueCompositionApi.Ref<ReadBookByIdQueryVariables> | ReactiveFunction<ReadBookByIdQueryVariables>, options: VueApolloComposable.UseQueryOptions<ReadBookByIdQuery, ReadBookByIdQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadBookByIdQuery, ReadBookByIdQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadBookByIdQuery, ReadBookByIdQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadBookByIdQuery, ReadBookByIdQueryVariables>(ReadBookByIdDocument, variables, options);
}
export type ReadBookByIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadBookByIdQuery, ReadBookByIdQueryVariables>;
export const UpdateBookDocument = gql`
    mutation updateBook($data: UpdateBookInput!) {
  updateBook(data: $data) {
    title
  }
}
    `;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateBookMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateBookMutation(options: VueApolloComposable.UseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, options);
}
export type UpdateBookMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateBookMutation, UpdateBookMutationVariables>;
export const ReadBooksStatusDocument = gql`
    query readBooksStatus($orderField: ReadBooksStatusOrderField, $orderSort: OrderDirection) {
  readBooksStatus(orderField: $orderField, orderSort: $orderSort) {
    page {
      edges {
        node {
          id
          title
          createdBy {
            username
          }
          isbn10
          isbn13
          bookStatus {
            id
            name
          }
          createdAt
          bookStatus {
            id
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadBooksStatusQuery__
 *
 * To run a query within a Vue component, call `useReadBooksStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadBooksStatusQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadBooksStatusQuery({
 *   orderField: // value for 'orderField'
 *   orderSort: // value for 'orderSort'
 * });
 */
export function useReadBooksStatusQuery(variables: ReadBooksStatusQueryVariables | VueCompositionApi.Ref<ReadBooksStatusQueryVariables> | ReactiveFunction<ReadBooksStatusQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ReadBooksStatusQuery, ReadBooksStatusQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadBooksStatusQuery, ReadBooksStatusQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadBooksStatusQuery, ReadBooksStatusQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadBooksStatusQuery, ReadBooksStatusQueryVariables>(ReadBooksStatusDocument, variables, options);
}
export type ReadBooksStatusQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadBooksStatusQuery, ReadBooksStatusQueryVariables>;
export const ReadBooksByContributeDocument = gql`
    query readBooksByContribute($contributeUsername: String, $query: String, $queryContribute: String, $genres: [String!], $languages: [String!], $orderField: BookOrderField, $orderSort: OrderDirection) {
  books(
    query: $query
    contributeUsername: $contributeUsername
    queryContribute: $queryContribute
    genres: $genres
    languages: $languages
    orderField: $orderField
    orderSort: $orderSort
  ) {
    page {
      edges {
        node {
          id
          title
          createdAt
          frontCover {
            path
          }
          userBooks {
            readingRate
            readType {
              color
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadBooksByContributeQuery__
 *
 * To run a query within a Vue component, call `useReadBooksByContributeQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadBooksByContributeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadBooksByContributeQuery({
 *   contributeUsername: // value for 'contributeUsername'
 *   query: // value for 'query'
 *   queryContribute: // value for 'queryContribute'
 *   genres: // value for 'genres'
 *   languages: // value for 'languages'
 *   orderField: // value for 'orderField'
 *   orderSort: // value for 'orderSort'
 * });
 */
export function useReadBooksByContributeQuery(variables: ReadBooksByContributeQueryVariables | VueCompositionApi.Ref<ReadBooksByContributeQueryVariables> | ReactiveFunction<ReadBooksByContributeQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<ReadBooksByContributeQuery, ReadBooksByContributeQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadBooksByContributeQuery, ReadBooksByContributeQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadBooksByContributeQuery, ReadBooksByContributeQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadBooksByContributeQuery, ReadBooksByContributeQueryVariables>(ReadBooksByContributeDocument, variables, options);
}
export type ReadBooksByContributeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadBooksByContributeQuery, ReadBooksByContributeQueryVariables>;
export const CreateNewAccountDocument = gql`
    mutation createNewAccount($data: CreateNewAccountInput!) {
  createNewAccount(data: $data) {
    refreshToken
    accessToken
  }
}
    `;

/**
 * __useCreateNewAccountMutation__
 *
 * To run a mutation, you first call `useCreateNewAccountMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewAccountMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateNewAccountMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewAccountMutation(options: VueApolloComposable.UseMutationOptions<CreateNewAccountMutation, CreateNewAccountMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateNewAccountMutation, CreateNewAccountMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateNewAccountMutation, CreateNewAccountMutationVariables>(CreateNewAccountDocument, options);
}
export type CreateNewAccountMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateNewAccountMutation, CreateNewAccountMutationVariables>;
export const FollowersByUsernameDocument = gql`
    query followersByUsername($username: String!) {
  followersByUsername(username: $username) {
    page {
      edges {
        node {
          follower {
            followers {
              __typename
            }
            username
            population {
              fullName
            }
            profileImage {
              path
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFollowersByUsernameQuery__
 *
 * To run a query within a Vue component, call `useFollowersByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFollowersByUsernameQuery({
 *   username: // value for 'username'
 * });
 */
export function useFollowersByUsernameQuery(variables: FollowersByUsernameQueryVariables | VueCompositionApi.Ref<FollowersByUsernameQueryVariables> | ReactiveFunction<FollowersByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<FollowersByUsernameQuery, FollowersByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FollowersByUsernameQuery, FollowersByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FollowersByUsernameQuery, FollowersByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FollowersByUsernameQuery, FollowersByUsernameQueryVariables>(FollowersByUsernameDocument, variables, options);
}
export type FollowersByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FollowersByUsernameQuery, FollowersByUsernameQueryVariables>;
export const FollowingsByUsernameDocument = gql`
    query followingsByUsername($username: String!) {
  followingsByUsername(username: $username) {
    page {
      edges {
        node {
          following {
            followers {
              __typename
            }
            username
            population {
              fullName
            }
            profileImage {
              path
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFollowingsByUsernameQuery__
 *
 * To run a query within a Vue component, call `useFollowingsByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingsByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFollowingsByUsernameQuery({
 *   username: // value for 'username'
 * });
 */
export function useFollowingsByUsernameQuery(variables: FollowingsByUsernameQueryVariables | VueCompositionApi.Ref<FollowingsByUsernameQueryVariables> | ReactiveFunction<FollowingsByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<FollowingsByUsernameQuery, FollowingsByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<FollowingsByUsernameQuery, FollowingsByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<FollowingsByUsernameQuery, FollowingsByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<FollowingsByUsernameQuery, FollowingsByUsernameQueryVariables>(FollowingsByUsernameDocument, variables, options);
}
export type FollowingsByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<FollowingsByUsernameQuery, FollowingsByUsernameQueryVariables>;
export const LibraryBookSlugDocument = gql`
    query libraryBookSlug($data: BookByUsernameInput!) {
  bookByUsername(data: $data) {
    book {
      id
      title
      subtitle
      isbn10
      isbn13
      createdAt
      updatedAt
      frontCover {
        path
      }
      backCover {
        path
      }
    }
    readType {
      id
      color
    }
    readingPageCount
  }
}
    `;

/**
 * __useLibraryBookSlugQuery__
 *
 * To run a query within a Vue component, call `useLibraryBookSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useLibraryBookSlugQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useLibraryBookSlugQuery({
 *   data: // value for 'data'
 * });
 */
export function useLibraryBookSlugQuery(variables: LibraryBookSlugQueryVariables | VueCompositionApi.Ref<LibraryBookSlugQueryVariables> | ReactiveFunction<LibraryBookSlugQueryVariables>, options: VueApolloComposable.UseQueryOptions<LibraryBookSlugQuery, LibraryBookSlugQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<LibraryBookSlugQuery, LibraryBookSlugQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<LibraryBookSlugQuery, LibraryBookSlugQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<LibraryBookSlugQuery, LibraryBookSlugQueryVariables>(LibraryBookSlugDocument, variables, options);
}
export type LibraryBookSlugQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<LibraryBookSlugQuery, LibraryBookSlugQueryVariables>;
export const ReadBooksByUsernameDocument = gql`
    query readBooksByUsername($query: String, $username: String!, $queryContribute: String, $genres: [String!], $languages: [String!], $orderField: BooksByUsernameOrderField, $orderSort: OrderDirection) {
  booksByUsername(
    query: $query
    username: $username
    queryContribute: $queryContribute
    genres: $genres
    languages: $languages
    orderField: $orderField
    orderSort: $orderSort
  ) {
    page {
      edges {
        node {
          book {
            id
            frontCover {
              path
            }
            title
            subtitle
            pageCount
            createdAt
            userBooks {
              readingRate
              readType {
                color
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadBooksByUsernameQuery__
 *
 * To run a query within a Vue component, call `useReadBooksByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadBooksByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadBooksByUsernameQuery({
 *   query: // value for 'query'
 *   username: // value for 'username'
 *   queryContribute: // value for 'queryContribute'
 *   genres: // value for 'genres'
 *   languages: // value for 'languages'
 *   orderField: // value for 'orderField'
 *   orderSort: // value for 'orderSort'
 * });
 */
export function useReadBooksByUsernameQuery(variables: ReadBooksByUsernameQueryVariables | VueCompositionApi.Ref<ReadBooksByUsernameQueryVariables> | ReactiveFunction<ReadBooksByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<ReadBooksByUsernameQuery, ReadBooksByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadBooksByUsernameQuery, ReadBooksByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadBooksByUsernameQuery, ReadBooksByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadBooksByUsernameQuery, ReadBooksByUsernameQueryVariables>(ReadBooksByUsernameDocument, variables, options);
}
export type ReadBooksByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadBooksByUsernameQuery, ReadBooksByUsernameQueryVariables>;
export const UserBookByIdLogsDocument = gql`
    query userBookByIdLogs($bookId: String!) {
  userBookByIdLogs(bookId: $bookId) {
    page {
      edges {
        node {
          id
          readingPageCount
          createdAt
        }
      }
    }
  }
}
    `;

/**
 * __useUserBookByIdLogsQuery__
 *
 * To run a query within a Vue component, call `useUserBookByIdLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserBookByIdLogsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserBookByIdLogsQuery({
 *   bookId: // value for 'bookId'
 * });
 */
export function useUserBookByIdLogsQuery(variables: UserBookByIdLogsQueryVariables | VueCompositionApi.Ref<UserBookByIdLogsQueryVariables> | ReactiveFunction<UserBookByIdLogsQueryVariables>, options: VueApolloComposable.UseQueryOptions<UserBookByIdLogsQuery, UserBookByIdLogsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserBookByIdLogsQuery, UserBookByIdLogsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserBookByIdLogsQuery, UserBookByIdLogsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserBookByIdLogsQuery, UserBookByIdLogsQueryVariables>(UserBookByIdLogsDocument, variables, options);
}
export type UserBookByIdLogsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserBookByIdLogsQuery, UserBookByIdLogsQueryVariables>;
export const ProfileByUsernameDocument = gql`
    query profileByUsername($username: String!) {
  profileByUsername(username: $username) {
    username
    booksCount
    profileImage {
      path
    }
    population {
      description
      fullName
    }
    coverImage {
      path
    }
    accountType {
      name
    }
    followers {
      __typename
    }
    booksCount
    shelfsCount
    followersCount
    followingsCount
    followingShelfsCount
  }
}
    `;

/**
 * __useProfileByUsernameQuery__
 *
 * To run a query within a Vue component, call `useProfileByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useProfileByUsernameQuery({
 *   username: // value for 'username'
 * });
 */
export function useProfileByUsernameQuery(variables: ProfileByUsernameQueryVariables | VueCompositionApi.Ref<ProfileByUsernameQueryVariables> | ReactiveFunction<ProfileByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<ProfileByUsernameQuery, ProfileByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ProfileByUsernameQuery, ProfileByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ProfileByUsernameQuery, ProfileByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ProfileByUsernameQuery, ProfileByUsernameQueryVariables>(ProfileByUsernameDocument, variables, options);
}
export type ProfileByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ProfileByUsernameQuery, ProfileByUsernameQueryVariables>;
export const CreateUserBookStatusDocument = gql`
    mutation createUserBookStatus($data: CreateUserBookStatusInput!) {
  createUserBookStatus(data: $data) {
    id
  }
}
    `;

/**
 * __useCreateUserBookStatusMutation__
 *
 * To run a mutation, you first call `useCreateUserBookStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserBookStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateUserBookStatusMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserBookStatusMutation(options: VueApolloComposable.UseMutationOptions<CreateUserBookStatusMutation, CreateUserBookStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateUserBookStatusMutation, CreateUserBookStatusMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateUserBookStatusMutation, CreateUserBookStatusMutationVariables>(CreateUserBookStatusDocument, options);
}
export type CreateUserBookStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateUserBookStatusMutation, CreateUserBookStatusMutationVariables>;
export const DeleteUserBookStatusDocument = gql`
    mutation deleteUserBookStatus($data: DeleteUserBookStatusInput!) {
  deleteUserBookStatus(data: $data) {
    readType {
      color
    }
  }
}
    `;

/**
 * __useDeleteUserBookStatusMutation__
 *
 * To run a mutation, you first call `useDeleteUserBookStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserBookStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteUserBookStatusMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useDeleteUserBookStatusMutation(options: VueApolloComposable.UseMutationOptions<DeleteUserBookStatusMutation, DeleteUserBookStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<DeleteUserBookStatusMutation, DeleteUserBookStatusMutationVariables>>) {
  return VueApolloComposable.useMutation<DeleteUserBookStatusMutation, DeleteUserBookStatusMutationVariables>(DeleteUserBookStatusDocument, options);
}
export type DeleteUserBookStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<DeleteUserBookStatusMutation, DeleteUserBookStatusMutationVariables>;
export const UpdateUserBookStatusDocument = gql`
    mutation updateUserBookStatus($data: UpdateUserBookStatusInput!) {
  updateUserBookStatus(data: $data) {
    readType {
      id
    }
  }
}
    `;

/**
 * __useUpdateUserBookStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserBookStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBookStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserBookStatusMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserBookStatusMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserBookStatusMutation, UpdateUserBookStatusMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserBookStatusMutation, UpdateUserBookStatusMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateUserBookStatusMutation, UpdateUserBookStatusMutationVariables>(UpdateUserBookStatusDocument, options);
}
export type UpdateUserBookStatusMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserBookStatusMutation, UpdateUserBookStatusMutationVariables>;
export const ChangeNewEmailAdressDocument = gql`
    mutation changeNewEmailAdress($data: UpdateChangeNewEmailAdressInput!) {
  changeNewEmailAdress(data: $data) {
    status
  }
}
    `;

/**
 * __useChangeNewEmailAdressMutation__
 *
 * To run a mutation, you first call `useChangeNewEmailAdressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useChangeNewEmailAdressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useChangeNewEmailAdressMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useChangeNewEmailAdressMutation(options: VueApolloComposable.UseMutationOptions<ChangeNewEmailAdressMutation, ChangeNewEmailAdressMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ChangeNewEmailAdressMutation, ChangeNewEmailAdressMutationVariables>>) {
  return VueApolloComposable.useMutation<ChangeNewEmailAdressMutation, ChangeNewEmailAdressMutationVariables>(ChangeNewEmailAdressDocument, options);
}
export type ChangeNewEmailAdressMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ChangeNewEmailAdressMutation, ChangeNewEmailAdressMutationVariables>;
export const ConfirmNewEmailAdressDocument = gql`
    mutation confirmNewEmailAdress($code: String!) {
  confirmNewEmailAdress(code: $code) {
    status
  }
}
    `;

/**
 * __useConfirmNewEmailAdressMutation__
 *
 * To run a mutation, you first call `useConfirmNewEmailAdressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useConfirmNewEmailAdressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useConfirmNewEmailAdressMutation({
 *   variables: {
 *     code: // value for 'code'
 *   },
 * });
 */
export function useConfirmNewEmailAdressMutation(options: VueApolloComposable.UseMutationOptions<ConfirmNewEmailAdressMutation, ConfirmNewEmailAdressMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ConfirmNewEmailAdressMutation, ConfirmNewEmailAdressMutationVariables>>) {
  return VueApolloComposable.useMutation<ConfirmNewEmailAdressMutation, ConfirmNewEmailAdressMutationVariables>(ConfirmNewEmailAdressDocument, options);
}
export type ConfirmNewEmailAdressMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ConfirmNewEmailAdressMutation, ConfirmNewEmailAdressMutationVariables>;
export const UpdateConfirmMailDocument = gql`
    mutation updateConfirmMail($data: UpdateConfirmMailInput!) {
  updateConfirmMail(data: $data) {
    status
  }
}
    `;

/**
 * __useUpdateConfirmMailMutation__
 *
 * To run a mutation, you first call `useUpdateConfirmMailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConfirmMailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateConfirmMailMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateConfirmMailMutation(options: VueApolloComposable.UseMutationOptions<UpdateConfirmMailMutation, UpdateConfirmMailMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateConfirmMailMutation, UpdateConfirmMailMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateConfirmMailMutation, UpdateConfirmMailMutationVariables>(UpdateConfirmMailDocument, options);
}
export type UpdateConfirmMailMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateConfirmMailMutation, UpdateConfirmMailMutationVariables>;
export const ConfirmEmailReSendDocument = gql`
    mutation confirmEmailReSend {
  confirmEmailReSend {
    status
  }
}
    `;

/**
 * __useConfirmEmailReSendMutation__
 *
 * To run a mutation, you first call `useConfirmEmailReSendMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailReSendMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useConfirmEmailReSendMutation();
 */
export function useConfirmEmailReSendMutation(options: VueApolloComposable.UseMutationOptions<ConfirmEmailReSendMutation, ConfirmEmailReSendMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<ConfirmEmailReSendMutation, ConfirmEmailReSendMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<ConfirmEmailReSendMutation, ConfirmEmailReSendMutationVariables>(ConfirmEmailReSendDocument, options);
}
export type ConfirmEmailReSendMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<ConfirmEmailReSendMutation, ConfirmEmailReSendMutationVariables>;
export const ReadSiteSettingsDocument = gql`
    query readSiteSettings {
  readUserSettings {
    __typename
    siteLanguage {
      id
      name
    }
    siteTheme {
      id
      name
    }
  }
}
    `;

/**
 * __useReadSiteSettingsQuery__
 *
 * To run a query within a Vue component, call `useReadSiteSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadSiteSettingsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadSiteSettingsQuery();
 */
export function useReadSiteSettingsQuery(options: VueApolloComposable.UseQueryOptions<ReadSiteSettingsQuery, ReadSiteSettingsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadSiteSettingsQuery, ReadSiteSettingsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadSiteSettingsQuery, ReadSiteSettingsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadSiteSettingsQuery, ReadSiteSettingsQueryVariables>(ReadSiteSettingsDocument, {}, options);
}
export type ReadSiteSettingsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadSiteSettingsQuery, ReadSiteSettingsQueryVariables>;
export const ReadSiteThemesDocument = gql`
    query readSiteThemes {
  readSiteThemes {
    id
    name
  }
}
    `;

/**
 * __useReadSiteThemesQuery__
 *
 * To run a query within a Vue component, call `useReadSiteThemesQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadSiteThemesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadSiteThemesQuery();
 */
export function useReadSiteThemesQuery(options: VueApolloComposable.UseQueryOptions<ReadSiteThemesQuery, ReadSiteThemesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadSiteThemesQuery, ReadSiteThemesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadSiteThemesQuery, ReadSiteThemesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadSiteThemesQuery, ReadSiteThemesQueryVariables>(ReadSiteThemesDocument, {}, options);
}
export type ReadSiteThemesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadSiteThemesQuery, ReadSiteThemesQueryVariables>;
export const UpdateUserSettingsDocument = gql`
    mutation updateUserSettings($data: UpdateUserSettingsInput!) {
  updateUserSettings(data: $data) {
    id
    companyTitle
    name
    phoneNumber
    surname
    taxOffice
    description
    country {
      id
    }
    language {
      id
    }
    user {
      accountType {
        id
      }
    }
  }
}
    `;

/**
 * __useUpdateUserSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserSettingsMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserSettingsMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>(UpdateUserSettingsDocument, options);
}
export type UpdateUserSettingsMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserSettingsMutation, UpdateUserSettingsMutationVariables>;
export const UpdateUserSettingDocument = gql`
    mutation updateUserSetting($data: UpdateUserSettingInput!) {
  updateUserSetting(data: $data) {
    id
  }
}
    `;

/**
 * __useUpdateUserSettingMutation__
 *
 * To run a mutation, you first call `useUpdateUserSettingMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserSettingMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateUserSettingMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserSettingMutation(options: VueApolloComposable.UseMutationOptions<UpdateUserSettingMutation, UpdateUserSettingMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UpdateUserSettingMutation, UpdateUserSettingMutationVariables>>) {
  return VueApolloComposable.useMutation<UpdateUserSettingMutation, UpdateUserSettingMutationVariables>(UpdateUserSettingDocument, options);
}
export type UpdateUserSettingMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UpdateUserSettingMutation, UpdateUserSettingMutationVariables>;
export const UserSettingsDocument = gql`
    query userSettings {
  userSettings {
    id
    companyTitle
    name
    phoneNumber
    surname
    taxOffice
    description
    country {
      id
      name
    }
    language {
      id
      name
    }
    user {
      accountType {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useUserSettingsQuery__
 *
 * To run a query within a Vue component, call `useUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSettingsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserSettingsQuery();
 */
export function useUserSettingsQuery(options: VueApolloComposable.UseQueryOptions<UserSettingsQuery, UserSettingsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserSettingsQuery, UserSettingsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserSettingsQuery, UserSettingsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserSettingsQuery, UserSettingsQueryVariables>(UserSettingsDocument, {}, options);
}
export type UserSettingsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserSettingsQuery, UserSettingsQueryVariables>;
export const ReadUserSettingsDocument = gql`
    query readUserSettings {
  readUserSettings {
    siteLanguage {
      id
      name
    }
    siteTheme {
      id
      name
    }
  }
}
    `;

/**
 * __useReadUserSettingsQuery__
 *
 * To run a query within a Vue component, call `useReadUserSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadUserSettingsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadUserSettingsQuery();
 */
export function useReadUserSettingsQuery(options: VueApolloComposable.UseQueryOptions<ReadUserSettingsQuery, ReadUserSettingsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadUserSettingsQuery, ReadUserSettingsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadUserSettingsQuery, ReadUserSettingsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadUserSettingsQuery, ReadUserSettingsQueryVariables>(ReadUserSettingsDocument, {}, options);
}
export type ReadUserSettingsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadUserSettingsQuery, ReadUserSettingsQueryVariables>;
export const ReadShelfFollowersByIdByUsernameDocument = gql`
    query readShelfFollowersByIdByUsername($shelfId: String!, $username: String) {
  readShelfFollowersByIdByUsername(shelfId: $shelfId, username: $username) {
    page {
      edges {
        node {
          user {
            population {
              fullName
            }
            username
            profileImage {
              path
            }
            followers {
              __typename
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useReadShelfFollowersByIdByUsernameQuery__
 *
 * To run a query within a Vue component, call `useReadShelfFollowersByIdByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadShelfFollowersByIdByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadShelfFollowersByIdByUsernameQuery({
 *   shelfId: // value for 'shelfId'
 *   username: // value for 'username'
 * });
 */
export function useReadShelfFollowersByIdByUsernameQuery(variables: ReadShelfFollowersByIdByUsernameQueryVariables | VueCompositionApi.Ref<ReadShelfFollowersByIdByUsernameQueryVariables> | ReactiveFunction<ReadShelfFollowersByIdByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<ReadShelfFollowersByIdByUsernameQuery, ReadShelfFollowersByIdByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadShelfFollowersByIdByUsernameQuery, ReadShelfFollowersByIdByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadShelfFollowersByIdByUsernameQuery, ReadShelfFollowersByIdByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadShelfFollowersByIdByUsernameQuery, ReadShelfFollowersByIdByUsernameQueryVariables>(ReadShelfFollowersByIdByUsernameDocument, variables, options);
}
export type ReadShelfFollowersByIdByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadShelfFollowersByIdByUsernameQuery, ReadShelfFollowersByIdByUsernameQueryVariables>;
export const ShelfByIdByUsernameDocument = gql`
    query shelfByIdByUsername($shelfId: String!, $username: String!) {
  shelfByIdByUsername(shelfId: $shelfId, username: $username) {
    id
    name
    description
    emoji
    color
    createdAt
    updatedAt
    logoImage {
      path
    }
    coverImage {
      path
    }
    createdBy {
      username
    }
    shelfFollows {
      __typename
    }
    shelfBooks {
      userBook {
        id
        createdAt
        book {
          id
          title
          isbn13
          createdAt
          frontCover {
            path
          }
        }
      }
    }
    isPublic
    followersCount
  }
}
    `;

/**
 * __useShelfByIdByUsernameQuery__
 *
 * To run a query within a Vue component, call `useShelfByIdByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelfByIdByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useShelfByIdByUsernameQuery({
 *   shelfId: // value for 'shelfId'
 *   username: // value for 'username'
 * });
 */
export function useShelfByIdByUsernameQuery(variables: ShelfByIdByUsernameQueryVariables | VueCompositionApi.Ref<ShelfByIdByUsernameQueryVariables> | ReactiveFunction<ShelfByIdByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<ShelfByIdByUsernameQuery, ShelfByIdByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ShelfByIdByUsernameQuery, ShelfByIdByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ShelfByIdByUsernameQuery, ShelfByIdByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ShelfByIdByUsernameQuery, ShelfByIdByUsernameQueryVariables>(ShelfByIdByUsernameDocument, variables, options);
}
export type ShelfByIdByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ShelfByIdByUsernameQuery, ShelfByIdByUsernameQueryVariables>;
export const ShelvesByUsernameDocument = gql`
    query shelvesByUsername($query: String, $queryBook: String, $isPublic: Boolean, $languages: [String!], $username: String!, $orderField: ShelfOrderField, $orderSort: OrderDirection) {
  shelvesByUsername(
    query: $query
    queryBook: $queryBook
    isPublic: $isPublic
    languages: $languages
    username: $username
    orderField: $orderField
    orderSort: $orderSort
  ) {
    page {
      edges {
        node {
          id
          name
          coverImage {
            path
          }
          logoImage {
            path
          }
          followersCount
          shelfBooks {
            __typename
          }
          createdBy {
            username
          }
          description
          isPublic
        }
      }
    }
  }
}
    `;

/**
 * __useShelvesByUsernameQuery__
 *
 * To run a query within a Vue component, call `useShelvesByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useShelvesByUsernameQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useShelvesByUsernameQuery({
 *   query: // value for 'query'
 *   queryBook: // value for 'queryBook'
 *   isPublic: // value for 'isPublic'
 *   languages: // value for 'languages'
 *   username: // value for 'username'
 *   orderField: // value for 'orderField'
 *   orderSort: // value for 'orderSort'
 * });
 */
export function useShelvesByUsernameQuery(variables: ShelvesByUsernameQueryVariables | VueCompositionApi.Ref<ShelvesByUsernameQueryVariables> | ReactiveFunction<ShelvesByUsernameQueryVariables>, options: VueApolloComposable.UseQueryOptions<ShelvesByUsernameQuery, ShelvesByUsernameQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ShelvesByUsernameQuery, ShelvesByUsernameQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ShelvesByUsernameQuery, ShelvesByUsernameQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ShelvesByUsernameQuery, ShelvesByUsernameQueryVariables>(ShelvesByUsernameDocument, variables, options);
}
export type ShelvesByUsernameQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ShelvesByUsernameQuery, ShelvesByUsernameQueryVariables>;
export const UserStatisticsDocument = gql`
    query userStatistics {
  userStatistics {
    bookContributes {
      ...userAdminStatisticsCount
    }
    createdBooks {
      ...userAdminStatisticsCount
    }
    followers {
      ...userAdminStatisticsCount
    }
    followings {
      ...userAdminStatisticsCount
    }
    shelfs {
      ...userAdminStatisticsCount
    }
    userBooks {
      ...userAdminStatisticsCount
    }
  }
}
    ${UserAdminStatisticsCountFragmentDoc}`;

/**
 * __useUserStatisticsQuery__
 *
 * To run a query within a Vue component, call `useUserStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStatisticsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useUserStatisticsQuery();
 */
export function useUserStatisticsQuery(options: VueApolloComposable.UseQueryOptions<UserStatisticsQuery, UserStatisticsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<UserStatisticsQuery, UserStatisticsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<UserStatisticsQuery, UserStatisticsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<UserStatisticsQuery, UserStatisticsQueryVariables>(UserStatisticsDocument, {}, options);
}
export type UserStatisticsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<UserStatisticsQuery, UserStatisticsQueryVariables>;
export const FollowUserByUsernameDocument = gql`
    mutation followUserByUsername($username: String!) {
  followUserByUsername(username: $username) {
    id
  }
}
    `;

/**
 * __useFollowUserByUsernameMutation__
 *
 * To run a mutation, you first call `useFollowUserByUsernameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserByUsernameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useFollowUserByUsernameMutation({
 *   variables: {
 *     username: // value for 'username'
 *   },
 * });
 */
export function useFollowUserByUsernameMutation(options: VueApolloComposable.UseMutationOptions<FollowUserByUsernameMutation, FollowUserByUsernameMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<FollowUserByUsernameMutation, FollowUserByUsernameMutationVariables>>) {
  return VueApolloComposable.useMutation<FollowUserByUsernameMutation, FollowUserByUsernameMutationVariables>(FollowUserByUsernameDocument, options);
}
export type FollowUserByUsernameMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<FollowUserByUsernameMutation, FollowUserByUsernameMutationVariables>;
export const UnFollowUserByUsernameDocument = gql`
    mutation unFollowUserByUsername($username: String!) {
  unFollowUserByUsername(username: $username) {
    __typename
  }
}
    `;

/**
 * __useUnFollowUserByUsernameMutation__
 *
 * To run a mutation, you first call `useUnFollowUserByUsernameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUnFollowUserByUsernameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUnFollowUserByUsernameMutation({
 *   variables: {
 *     username: // value for 'username'
 *   },
 * });
 */
export function useUnFollowUserByUsernameMutation(options: VueApolloComposable.UseMutationOptions<UnFollowUserByUsernameMutation, UnFollowUserByUsernameMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<UnFollowUserByUsernameMutation, UnFollowUserByUsernameMutationVariables>>) {
  return VueApolloComposable.useMutation<UnFollowUserByUsernameMutation, UnFollowUserByUsernameMutationVariables>(UnFollowUserByUsernameDocument, options);
}
export type UnFollowUserByUsernameMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<UnFollowUserByUsernameMutation, UnFollowUserByUsernameMutationVariables>;
export const ReadWriteDocument = gql`
    query ReadWrite($writeId: String!) {
  write(writeId: $writeId) {
    id
    title
    text
    summary
    createdAt
    coverImage {
      path
    }
  }
}
    `;

/**
 * __useReadWriteQuery__
 *
 * To run a query within a Vue component, call `useReadWriteQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadWriteQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useReadWriteQuery({
 *   writeId: // value for 'writeId'
 * });
 */
export function useReadWriteQuery(variables: ReadWriteQueryVariables | VueCompositionApi.Ref<ReadWriteQueryVariables> | ReactiveFunction<ReadWriteQueryVariables>, options: VueApolloComposable.UseQueryOptions<ReadWriteQuery, ReadWriteQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<ReadWriteQuery, ReadWriteQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<ReadWriteQuery, ReadWriteQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<ReadWriteQuery, ReadWriteQueryVariables>(ReadWriteDocument, variables, options);
}
export type ReadWriteQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<ReadWriteQuery, ReadWriteQueryVariables>;
export const WriteBooksDocument = gql`
    mutation writeBooks($data: CreateWriteBookInput!) {
  createWriteBook(data: $data) {
    id
    createdBy {
      username
    }
  }
}
    `;

/**
 * __useWriteBooksMutation__
 *
 * To run a mutation, you first call `useWriteBooksMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useWriteBooksMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useWriteBooksMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useWriteBooksMutation(options: VueApolloComposable.UseMutationOptions<WriteBooksMutation, WriteBooksMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<WriteBooksMutation, WriteBooksMutationVariables>>) {
  return VueApolloComposable.useMutation<WriteBooksMutation, WriteBooksMutationVariables>(WriteBooksDocument, options);
}
export type WriteBooksMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<WriteBooksMutation, WriteBooksMutationVariables>;
export const WritesDocument = gql`
    query writes {
  writeBooks {
    page {
      edges {
        node {
          __typename
          id
          createdAt
          title
        }
      }
    }
  }
}
    `;

/**
 * __useWritesQuery__
 *
 * To run a query within a Vue component, call `useWritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWritesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useWritesQuery();
 */
export function useWritesQuery(options: VueApolloComposable.UseQueryOptions<WritesQuery, WritesQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<WritesQuery, WritesQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<WritesQuery, WritesQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<WritesQuery, WritesQueryVariables>(WritesDocument, {}, options);
}
export type WritesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<WritesQuery, WritesQueryVariables>;
export const CreateWritingDocument = gql`
    mutation CreateWriting($data: CreateWriteBookInput!) {
  createWriteBook(data: $data) {
    id
    title
    book {
      title
    }
    createdBy {
      username
    }
  }
}
    `;

/**
 * __useCreateWritingMutation__
 *
 * To run a mutation, you first call `useCreateWritingMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateWritingMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateWritingMutation({
 *   variables: {
 *     data: // value for 'data'
 *   },
 * });
 */
export function useCreateWritingMutation(options: VueApolloComposable.UseMutationOptions<CreateWritingMutation, CreateWritingMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<CreateWritingMutation, CreateWritingMutationVariables>>) {
  return VueApolloComposable.useMutation<CreateWritingMutation, CreateWritingMutationVariables>(CreateWritingDocument, options);
}
export type CreateWritingMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<CreateWritingMutation, CreateWritingMutationVariables>;