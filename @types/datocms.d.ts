type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BooleanType: any;
  CustomData: any;
  DateTime: any;
  FloatType: any;
  IntType: any;
  ItemId: any;
  JsonField: any;
  MetaTagAttributes: any;
  UploadId: any;
};

type AboutModelContentBlocksField = ButtonRecord | ImageRecord | VideoRecord;

type AboutModelContentField = {
  __typename?: 'AboutModelContentField';
  blocks: Array<AboutModelContentBlocksField>;
  links: Array<LexiconRecord>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum AboutModelFieldsReferencingLexiconModel {
  about_content = 'about_content'
}

type AboutModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AboutModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  position?: InputMaybe<PositionFilter>;
  showImage?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum AboutModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  showImage_ASC = 'showImage_ASC',
  showImage_DESC = 'showImage_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Om (about) */
type AboutRecord = RecordInterface & {
  __typename?: 'AboutRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: AboutModelContentField;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  showImage?: Maybe<Scalars['BooleanType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Om (about) */
type AboutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Om (about) */
type AboutRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ActivityCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActivityCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActivityCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ActivityCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Aktivitetskatergori (activity_category) */
type ActivityCategoryRecord = RecordInterface & {
  __typename?: 'ActivityCategoryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  position?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Aktivitetskatergori (activity_category) */
type ActivityCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ActivityModelContentBlocksField = ButtonRecord | FormRecord | ImageRecord | VideoRecord;

type ActivityModelContentField = {
  __typename?: 'ActivityModelContentField';
  blocks: Array<ActivityModelContentBlocksField>;
  links: Array<LexiconRecord>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum ActivityModelFieldsReferencingLexiconModel {
  activity_content = 'activity_content'
}

type ActivityModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ActivityModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ActivityModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  blackHeadline?: InputMaybe<BooleanFilter>;
  category?: InputMaybe<LinkFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  date?: InputMaybe<DateTimeFilter>;
  dateEnd?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  location?: InputMaybe<StringFilter>;
  showForm?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ActivityModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  blackHeadline_ASC = 'blackHeadline_ASC',
  blackHeadline_DESC = 'blackHeadline_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  dateEnd_ASC = 'dateEnd_ASC',
  dateEnd_DESC = 'dateEnd_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  location_ASC = 'location_ASC',
  location_DESC = 'location_DESC',
  showForm_ASC = 'showForm_ASC',
  showForm_DESC = 'showForm_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Aktiviteter (activity) */
type ActivityRecord = RecordInterface & {
  __typename?: 'ActivityRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blackHeadline?: Maybe<Scalars['BooleanType']>;
  category: ActivityCategoryRecord;
  content: ActivityModelContentField;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  dateEnd?: Maybe<Scalars['DateTime']>;
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  showForm?: Maybe<Scalars['BooleanType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Aktiviteter (activity) */
type ActivityRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Aktiviteter (activity) */
type ActivityRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ApplicationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ApplicationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ApplicationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  activity?: InputMaybe<LinkFilter>;
  approvalStatus?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  member?: InputMaybe<LinkFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ApplicationModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  approvalStatus_ASC = 'approvalStatus_ASC',
  approvalStatus_DESC = 'approvalStatus_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Anmälan (application) */
type ApplicationRecord = RecordInterface & {
  __typename?: 'ApplicationRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  activity: ActivityRecord;
  approvalStatus: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  member: MemberRecord;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Anmälan (application) */
type ApplicationRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type BoardModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<BoardModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BoardModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  region?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum BoardModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Styrelse (board) */
type BoardRecord = RecordInterface & {
  __typename?: 'BoardRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  region: RegionRecord;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Styrelse (board) */
type BoardRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Block of type Knapp (button) */
type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


/** Block of type Knapp (button) */
type ButtonRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

enum ColorBucketType {
  black = 'black',
  blue = 'blue',
  brown = 'brown',
  cyan = 'cyan',
  green = 'green',
  grey = 'grey',
  orange = 'orange',
  pink = 'pink',
  purple = 'purple',
  red = 'red',
  white = 'white',
  yellow = 'yellow'
}

type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType'];
  blue: Scalars['IntType'];
  cssRgb: Scalars['String'];
  green: Scalars['IntType'];
  hex: Scalars['String'];
  red: Scalars['IntType'];
};

type CommissionCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CommissionCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CommissionCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum CommissionCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Uppdragskategori (commission_category) */
type CommissionCategoryRecord = RecordInterface & {
  __typename?: 'CommissionCategoryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Uppdragskategori (commission_category) */
type CommissionCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type CommissionModelContentField = ImageRecord | VideoRecord;

type CommissionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<CommissionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CommissionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  artist?: InputMaybe<StringFilter>;
  blackHeadline?: InputMaybe<BooleanFilter>;
  category?: InputMaybe<LinkFilter>;
  city?: InputMaybe<StringFilter>;
  commissioner?: InputMaybe<StringFilter>;
  consultant?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  region?: InputMaybe<LinkFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  work?: InputMaybe<StringFilter>;
  year?: InputMaybe<StringFilter>;
};

enum CommissionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  artist_ASC = 'artist_ASC',
  artist_DESC = 'artist_DESC',
  blackHeadline_ASC = 'blackHeadline_ASC',
  blackHeadline_DESC = 'blackHeadline_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  commissioner_ASC = 'commissioner_ASC',
  commissioner_DESC = 'commissioner_DESC',
  consultant_ASC = 'consultant_ASC',
  consultant_DESC = 'consultant_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  work_ASC = 'work_ASC',
  work_DESC = 'work_DESC',
  year_ASC = 'year_ASC',
  year_DESC = 'year_DESC'
}

/** Record of type Uppdrag (commission) */
type CommissionRecord = RecordInterface & {
  __typename?: 'CommissionRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  artist: Scalars['String'];
  blackHeadline?: Maybe<Scalars['BooleanType']>;
  category: CommissionCategoryRecord;
  city: Scalars['String'];
  commissioner?: Maybe<Scalars['String']>;
  consultant: Scalars['String'];
  content: Array<CommissionModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  region: RegionRecord;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  work?: Maybe<Scalars['String']>;
  year: Scalars['String'];
};


/** Record of type Uppdrag (commission) */
type CommissionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Uppdrag (commission) */
type CommissionRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ConsultantModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ConsultantModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ConsultantModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  region?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ConsultantModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Konstkonsulter (consultant) */
type ConsultantRecord = RecordInterface & {
  __typename?: 'ConsultantRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  region: RegionRecord;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Konstkonsulter (consultant) */
type ConsultantRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Kontakt ingress (contact_intro) */
type ContactIntroRecord = RecordInterface & {
  __typename?: 'ContactIntroRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  board?: Maybe<Scalars['String']>;
  consultant?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  staff?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Kontakt ingress (contact_intro) */
type ContactIntroRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakt ingress (contact_intro) */
type ContactIntroRecordboardArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Kontakt ingress (contact_intro) */
type ContactIntroRecordconsultantArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Kontakt ingress (contact_intro) */
type ContactIntroRecordstaffArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ContactPageModelContentBlocksField = ButtonRecord | ImageRecord | VideoRecord;

type ContactPageModelContentField = {
  __typename?: 'ContactPageModelContentField';
  blocks: Array<ContactPageModelContentBlocksField>;
  links: Array<LexiconRecord>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum ContactPageModelFieldsReferencingLexiconModel {
  contactPage_content = 'contactPage_content'
}

type ContactPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ContactPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  showImage?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ContactPageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  showImage_ASC = 'showImage_ASC',
  showImage_DESC = 'showImage_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Kontakta oss (contact_page) */
type ContactPageRecord = RecordInterface & {
  __typename?: 'ContactPageRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: ContactPageModelContentField;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  showImage?: Maybe<Scalars['BooleanType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Kontakta oss (contact_page) */
type ContactPageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kontakta oss (contact_page) */
type ContactPageRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Kontakt (contact) */
type ContactRecord = RecordInterface & {
  __typename?: 'ContactRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Kontakt (contact) */
type ContactRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Kontakt (contact) */
type ContactRecordaddressArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ContentModelLayoutField = {
  __typename?: 'ContentModelLayoutField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Block of type Innehåll (content) */
type ContentRecord = RecordInterface & {
  __typename?: 'ContentRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  layout?: Maybe<ContentModelLayoutField>;
  slug?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Innehåll (content) */
type ContentRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by creation datetime */
type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter DateTime fields */
type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type EmployeeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<EmployeeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EmployeeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  region?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum EmployeeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Personal (employee) */
type EmployeeRecord = RecordInterface & {
  __typename?: 'EmployeeRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  region: RegionRecord;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Personal (employee) */
type EmployeeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum FaviconType {
  appleTouchIcon = 'appleTouchIcon',
  icon = 'icon',
  msApplication = 'msApplication'
}

type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldcustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldfocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

type FileFieldInterface = {
  _createdAt: Scalars['DateTime'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']>;
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']>;
  customData: Scalars['CustomData'];
  exifInfo: Scalars['CustomData'];
  filename: Scalars['String'];
  focalPoint?: Maybe<focalPoint>;
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  md5: Scalars['String'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Scalars['String']>;
  tags: Array<Scalars['String']>;
  thumbhash?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


type FileFieldInterfacealtArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type FileFieldInterfacecustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfacefocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceresponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']>;
};


type FileFieldInterfacetitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type FileFieldInterfaceurlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Record of type Sidfot (footer) */
type FooterRecord = RecordInterface & {
  __typename?: 'FooterRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  aboutTheProject: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Sidfot (footer) */
type FooterRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Sidfot (footer) */
type FooterRecordaboutTheProjectArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type ForArtistModelContentBlocksField = ButtonRecord | ImageRecord | VideoRecord;

type ForArtistModelContentField = {
  __typename?: 'ForArtistModelContentField';
  blocks: Array<ForArtistModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type ForArtistModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ForArtistModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ForArtistModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum ForArtistModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type För konstnärer (for_artist) */
type ForArtistRecord = RecordInterface & {
  __typename?: 'ForArtistRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content?: Maybe<ForArtistModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['IntType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type För konstnärer (for_artist) */
type ForArtistRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type För konstnärer (for_artist) */
type ForArtistRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

type FormModelFormFieldsField = FormTextRecord | FormTextblockRecord | PdfFormRecord;

/** Block of type Formulär (form) */
type FormRecord = RecordInterface & {
  __typename?: 'FormRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  confirmation: Scalars['String'];
  createdAt: Scalars['DateTime'];
  formFields: Array<FormModelFormFieldsField>;
  id: Scalars['ItemId'];
  reciever?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Formulär (form) */
type FormRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Textfält (form_text) */
type FormTextRecord = RecordInterface & {
  __typename?: 'FormTextRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Textfält (form_text) */
type FormTextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Textblock (form_textblock) */
type FormTextblockRecord = RecordInterface & {
  __typename?: 'FormTextblockRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Textblock (form_textblock) */
type FormTextblockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Galleri (gallery) */
type GalleryRecord = RecordInterface & {
  __typename?: 'GalleryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  images: Array<FileField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Galleri (gallery) */
type GalleryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

/** Block of type Bild(er) (image) */
type ImageRecord = RecordInterface & {
  __typename?: 'ImageRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: Array<FileField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Bild(er) (image) */
type ImageRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Bildgenväg (image_shortcut) */
type ImageShortcutRecord = RecordInterface & {
  __typename?: 'ImageShortcutRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blackHeadline?: Maybe<Scalars['BooleanType']>;
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image: FileField;
  link?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Bildgenväg (image_shortcut) */
type ImageShortcutRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-remove failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-remove)
   */
  bgRemoveFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Replacement
   *
   * Replaces background from image using a string based prompt.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplace?: InputMaybe<Scalars['String']>;
  /**
   * Background Removal Fallback
   *
   * Overrides default fallback behavior for bg-replace failures.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace)
   */
  bgReplaceFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Background Replacement Negative Prompt
   *
   * Provides a negative text suggestion for background replacement.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background/bg-replace-neg-prompt)
   */
  bgReplaceNegPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Fallback
   *
   * Sets the fallback behavior for generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-fallback)
   */
  fillGenFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Fill Generative Negative Prompt
   *
   * Provides a negative text suggestion to the generative fill parameter. Used to reduce the probability of a subject, detail, or object appearing in generative output.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-neg-prompt)
   */
  fillGenNegPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Position
   *
   * Sets the position of the Origin Image in relation to the generative fill.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-pos)
   */
  fillGenPos?: InputMaybe<Array<ImgixParamsFillGenPos>>;
  /**
   * Fill Generative Prompt
   *
   * Provides a text suggestion to the generative fill parameter.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-prompt)
   */
  fillGenPrompt?: InputMaybe<Scalars['String']>;
  /**
   * Fill Generative Seed
   *
   * Sets the generative seed value. Used to generate similar outputs from different prompts.
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gen-seed)
   */
  fillGenSeed?: InputMaybe<Scalars['IntType']>;
  /**
   * Fill Gradient Color Space
   *
   * Defines the color space as linear, sRGB, Oklab, HSL, or LCH for gradient color interpolation
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-cs)
   */
  fillGradientCs?: InputMaybe<ImgixParamsFillGradientCs>;
  /**
   * Fill Gradient Linear
   *
   * Blends a gradient between two colors, {color1} and {color2}, along a straight path
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear)
   */
  fillGradientLinear?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Linear Direction
   *
   * The fill-gradient-linear-direction specifies the gradient's direction, flowing towards the bottom, top, right, or left
   *
   * Depends on: `fit=fill`, `fill=gen`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-linear-direction)
   */
  fillGradientLinearDirection?: InputMaybe<Array<ImgixParamsFillGradientLinearDirection>>;
  /**
   * Fill Gradient Radial
   *
   * The fill-gradient-radial parameter creates a circular gradient transitioning from a central color (Color1) to an outer color (Color2)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial)
   */
  fillGradientRadial?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Radial Radius
   *
   * Parameter defines the radial gradient's radius as pixels or a percentage (0.0-1.0) of the image's smallest dimension
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-radius)
   */
  fillGradientRadialRadius?: InputMaybe<Scalars['String']>;
  /**
   * Fill Gradient Radial X
   *
   * Specifies the location of the radial gradient's center along the x-axis, using either a pixel value or a floating point percentage (ranging from 0.0 to 1.0) of the image's width
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-x)
   */
  fillGradientRadialX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Fill Gradient Radial Y
   *
   * Parameter sets the radial gradient's center on the y-axis, using pixels or a 0.0 to 1.0 percentage of the image's height
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-radial-y)
   */
  fillGradientRadialY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Fill Gradient Type
   *
   * Specifies if a gradient is radial (circular) or linear (straight)
   *
   * Depends on: `fit=fill`, `fill=gradient`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-gradient-type)
   */
  fillGradientType?: InputMaybe<ImgixParamsFillGradientType>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']>;
  /**
   * Animated Gif Quality
   *
   * Specifies the quality of the animated gif. The higher the value, the better more compression is applied.
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Jpg Progressive
   *
   * Specifies whether or not a jpg/jpeg uses progressive (true) or baseline (false)
   */
  jpgProgressive?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']>;
  /**
   * Bypasses any [DatoCMS Automatic Image Optimization](https://www.datocms.com/docs/cdn-settings/advanced-asset-settings) that might be set up for the project.
   *
   * Exercise caution when using this parameter, as it could significantly increase your bandwidth costs.
   */
  skipDefaultOptimizations?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Sanitize Svg
   *
   * Specifies whether to sanitize an SVG.
   */
  svgSanitize?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']>;
  /**
   * Super Resolution
   *
   * Uses generative AI fill to upscale low resolution images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale)
   */
  upscale?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Super Resolution Fallback
   *
   * Overrides default fallback behavior for super resolution failures
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/super-resolution/upscale-fallback)
   */
  upscaleFallback?: InputMaybe<Scalars['BooleanType']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']>;
};

enum ImgixParamsAuto {
  compress = 'compress',
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye'
}

enum ImgixParamsBlendAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendCrop {
  bottom = 'bottom',
  faces = 'faces',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsBlendMode {
  burn = 'burn',
  color = 'color',
  darken = 'darken',
  difference = 'difference',
  dodge = 'dodge',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  normal = 'normal',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight'
}

enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

enum ImgixParamsCh {
  dpr = 'dpr',
  saveData = 'saveData',
  width = 'width'
}

enum ImgixParamsCrop {
  bottom = 'bottom',
  edges = 'edges',
  entropy = 'entropy',
  faces = 'faces',
  focalpoint = 'focalpoint',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsCs {
  adobergb1998 = 'adobergb1998',
  srgb = 'srgb',
  strip = 'strip',
  tinysrgb = 'tinysrgb'
}

enum ImgixParamsFill {
  blur = 'blur',
  gen = 'gen',
  generative = 'generative',
  gradient = 'gradient',
  solid = 'solid'
}

enum ImgixParamsFillGenPos {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientCs {
  hsl = 'hsl',
  lch = 'lch',
  linear = 'linear',
  oklab = 'oklab',
  srgb = 'srgb'
}

enum ImgixParamsFillGradientLinearDirection {
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  top = 'top'
}

enum ImgixParamsFillGradientType {
  linear = 'linear',
  radial = 'radial'
}

enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

enum ImgixParamsFlip {
  h = 'h',
  hv = 'hv',
  v = 'v'
}

enum ImgixParamsFm {
  avif = 'avif',
  blurhash = 'blurhash',
  gif = 'gif',
  jp2 = 'jp2',
  jpg = 'jpg',
  json = 'json',
  jxr = 'jxr',
  mp4 = 'mp4',
  pjpg = 'pjpg',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webm = 'webm',
  webp = 'webp'
}

enum ImgixParamsIptc {
  allow = 'allow',
  block = 'block'
}

enum ImgixParamsMarkAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

enum ImgixParamsMarkTile {
  grid = 'grid'
}

enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

enum ImgixParamsTransparency {
  grid = 'grid'
}

enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

enum ImgixParamsTxtAlign {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  middle = 'middle',
  right = 'right',
  top = 'top'
}

enum ImgixParamsTxtClip {
  ellipsis = 'ellipsis',
  end = 'end',
  middle = 'middle',
  start = 'start'
}

enum ImgixParamsTxtFit {
  max = 'max'
}

type InEnglishModelContentBlocksField = ButtonRecord | ImageRecord | TextRecord | VideoRecord;

type InEnglishModelContentField = {
  __typename?: 'InEnglishModelContentField';
  blocks: Array<InEnglishModelContentBlocksField>;
  links: Array<LexiconRecord>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum InEnglishModelFieldsReferencingLexiconModel {
  inEnglish_content = 'inEnglish_content'
}

type InEnglishModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InEnglishModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InEnglishModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum InEnglishModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type In english (in_english) */
type InEnglishRecord = RecordInterface & {
  __typename?: 'InEnglishRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  content: InEnglishModelContentField;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type In english (in_english) */
type InEnglishRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by usage */
type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Integer fields */
type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Record of type Våra initiativ (intro_initiative) */
type IntroInitiativeRecord = RecordInterface & {
  __typename?: 'IntroInitiativeRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Våra initiativ (intro_initiative) */
type IntroInitiativeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Våra initiativ (intro_initiative) */
type IntroInitiativeRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenAboutAndLexicon = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<AboutModelFieldsReferencingLexiconModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<AboutModelFieldsReferencingLexiconModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenActivityAndLexicon = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ActivityModelFieldsReferencingLexiconModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ActivityModelFieldsReferencingLexiconModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenContactPageAndLexicon = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<ContactPageModelFieldsReferencingLexiconModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<ContactPageModelFieldsReferencingLexiconModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenInEnglishAndLexicon = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<InEnglishModelFieldsReferencingLexiconModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<InEnglishModelFieldsReferencingLexiconModel>>;
};

/** Specifies how to filter by linking fields */
type InverseRelationshipFieldFilterBetweenKnowledgeAndLexicon = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<KnowledgeModelFieldsReferencingLexiconModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<KnowledgeModelFieldsReferencingLexiconModel>>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenAboutAndLexicon = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenAboutAndLexicon>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenActivityAndLexicon = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenActivityAndLexicon>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenContactPageAndLexicon = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenContactPageAndLexicon>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenInEnglishAndLexicon = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenInEnglishAndLexicon>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter linking records */
type InverseRelationshipFilterBetweenKnowledgeAndLexicon = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenKnowledgeAndLexicon>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

enum ItemStatus {
  draft = 'draft',
  published = 'published',
  updated = 'updated'
}

/** Specifies how to filter JSON fields */
type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
};

type KnowledgeCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<KnowledgeCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KnowledgeCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  category?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum KnowledgeCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  category_ASC = 'category_ASC',
  category_DESC = 'category_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Typ av kunskap (knowledge_category) */
type KnowledgeCategoryRecord = RecordInterface & {
  __typename?: 'KnowledgeCategoryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  position?: Maybe<Scalars['IntType']>;
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Typ av kunskap (knowledge_category) */
type KnowledgeCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type KnowledgeModelContentBlocksField = ButtonRecord | FormRecord | ImageRecord | VideoRecord;

type KnowledgeModelContentField = {
  __typename?: 'KnowledgeModelContentField';
  blocks: Array<KnowledgeModelContentBlocksField>;
  links: Array<LexiconRecord>;
  value: Scalars['JsonField'];
};

/** Linking fields */
enum KnowledgeModelFieldsReferencingLexiconModel {
  knowledge_content = 'knowledge_content'
}

type KnowledgeModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<KnowledgeModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<KnowledgeModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  blackHeadline?: InputMaybe<BooleanFilter>;
  category?: InputMaybe<LinkFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum KnowledgeModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  blackHeadline_ASC = 'blackHeadline_ASC',
  blackHeadline_DESC = 'blackHeadline_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Kunskapsbank (knowledge) */
type KnowledgeRecord = RecordInterface & {
  __typename?: 'KnowledgeRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blackHeadline?: Maybe<Scalars['BooleanType']>;
  category: KnowledgeCategoryRecord;
  content: KnowledgeModelContentField;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Kunskapsbank (knowledge) */
type KnowledgeRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Kunskapsbank (knowledge) */
type KnowledgeRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Senaste aktiviteter (latest_activity) */
type LatestActivityRecord = RecordInterface & {
  __typename?: 'LatestActivityRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Senaste aktiviteter (latest_activity) */
type LatestActivityRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Senaste nyheterna (latest_news) */
type LatestNewsRecord = RecordInterface & {
  __typename?: 'LatestNewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Senaste nyheterna (latest_news) */
type LatestNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type LexiconModelDescField = {
  __typename?: 'LexiconModelDescField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type LexiconModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LexiconModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LexiconModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  desc?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  word?: InputMaybe<StringFilter>;
};

enum LexiconModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  word_ASC = 'word_ASC',
  word_DESC = 'word_DESC'
}

/** Record of type Lexikon (lexicon) */
type LexiconRecord = RecordInterface & {
  __typename?: 'LexiconRecord';
  _allReferencingAbouts: Array<AboutRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingAboutsMeta: CollectionMetadata;
  _allReferencingActivities: Array<ActivityRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingActivitiesMeta: CollectionMetadata;
  _allReferencingContactPages: Array<ContactPageRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingContactPagesMeta: CollectionMetadata;
  _allReferencingInEnglishes: Array<InEnglishRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingInEnglishesMeta: CollectionMetadata;
  _allReferencingKnowledges: Array<KnowledgeRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingKnowledgesMeta: CollectionMetadata;
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  desc?: Maybe<LexiconModelDescField>;
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
  word?: Maybe<Scalars['String']>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingAboutsMetaArgs = {
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenAboutAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingActivitiesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenActivityAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingActivitiesMetaArgs = {
  filter?: InputMaybe<ActivityModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenActivityAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingContactPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ContactPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ContactPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenContactPageAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingContactPagesMetaArgs = {
  filter?: InputMaybe<ContactPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenContactPageAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingInEnglishesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InEnglishModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InEnglishModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenInEnglishAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingInEnglishesMetaArgs = {
  filter?: InputMaybe<InEnglishModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenInEnglishAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingKnowledgesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<KnowledgeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenKnowledgeAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_allReferencingKnowledgesMetaArgs = {
  filter?: InputMaybe<KnowledgeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenKnowledgeAndLexicon>;
};


/** Record of type Lexikon (lexicon) */
type LexiconRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type LexiconTextModelIntroField = {
  __typename?: 'LexiconTextModelIntroField';
  blocks: Array<Scalars['String']>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

/** Record of type Lexikon text (lexicon_text) */
type LexiconTextRecord = RecordInterface & {
  __typename?: 'LexiconTextRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  intro?: Maybe<LexiconTextModelIntroField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Lexikon text (lexicon_text) */
type LexiconTextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>>>;
};

/** Linking locales */
enum LinkingLocale {
  _nonLocalized = '_nonLocalized',
  en = 'en'
}

/** Specifies how to filter by linking locales */
type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

type MemberCategoryModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MemberCategoryModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MemberCategoryModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  categoryType?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum MemberCategoryModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  categoryType_ASC = 'categoryType_ASC',
  categoryType_DESC = 'categoryType_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Typ av konst (member_category) */
type MemberCategoryRecord = RecordInterface & {
  __typename?: 'MemberCategoryRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  categoryType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Typ av konst (member_category) */
type MemberCategoryRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type MemberModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<MemberModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MemberModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  address?: InputMaybe<StringFilter>;
  age?: InputMaybe<IntegerFilter>;
  auth?: InputMaybe<JsonFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  education?: InputMaybe<TextFilter>;
  educationThreeYears?: InputMaybe<BooleanFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  haveWorkedThreeYears?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  kcMember?: InputMaybe<BooleanFilter>;
  language?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  mission?: InputMaybe<TextFilter>;
  phone?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  protectedIdentity?: InputMaybe<BooleanFilter>;
  sex?: InputMaybe<StringFilter>;
  social?: InputMaybe<TextFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
  workCategory?: InputMaybe<StringFilter>;
};

enum MemberModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  address_ASC = 'address_ASC',
  address_DESC = 'address_DESC',
  age_ASC = 'age_ASC',
  age_DESC = 'age_DESC',
  city_ASC = 'city_ASC',
  city_DESC = 'city_DESC',
  country_ASC = 'country_ASC',
  country_DESC = 'country_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  educationThreeYears_ASC = 'educationThreeYears_ASC',
  educationThreeYears_DESC = 'educationThreeYears_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  firstName_ASC = 'firstName_ASC',
  firstName_DESC = 'firstName_DESC',
  haveWorkedThreeYears_ASC = 'haveWorkedThreeYears_ASC',
  haveWorkedThreeYears_DESC = 'haveWorkedThreeYears_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  kcMember_ASC = 'kcMember_ASC',
  kcMember_DESC = 'kcMember_DESC',
  language_ASC = 'language_ASC',
  language_DESC = 'language_DESC',
  lastName_ASC = 'lastName_ASC',
  lastName_DESC = 'lastName_DESC',
  phone_ASC = 'phone_ASC',
  phone_DESC = 'phone_DESC',
  postalCode_ASC = 'postalCode_ASC',
  postalCode_DESC = 'postalCode_DESC',
  protectedIdentity_ASC = 'protectedIdentity_ASC',
  protectedIdentity_DESC = 'protectedIdentity_DESC',
  sex_ASC = 'sex_ASC',
  sex_DESC = 'sex_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  workCategory_ASC = 'workCategory_ASC',
  workCategory_DESC = 'workCategory_DESC'
}

/** Record of type Medlem (member) */
type MemberRecord = RecordInterface & {
  __typename?: 'MemberRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['IntType']>;
  auth?: Maybe<Scalars['JsonField']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  education?: Maybe<Scalars['String']>;
  educationThreeYears?: Maybe<Scalars['BooleanType']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  haveWorkedThreeYears?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  kcMember?: Maybe<Scalars['BooleanType']>;
  language?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mission?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  protectedIdentity?: Maybe<Scalars['BooleanType']>;
  sex?: Maybe<Scalars['String']>;
  social?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
  workCategory?: Maybe<Scalars['String']>;
};


/** Record of type Medlem (member) */
type MemberRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Medlem (member) */
type MemberRecordeducationArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Medlem (member) */
type MemberRecordmissionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};


/** Record of type Medlem (member) */
type MemberRecordsocialArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Meta (meta_block) */
type MetaBlockRecord = RecordInterface & {
  __typename?: 'MetaBlockRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Meta (meta_block) */
type MetaBlockRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

enum MuxThumbnailFormatType {
  gif = 'gif',
  jpg = 'jpg',
  png = 'png'
}

type NewsModelContentBlocksField = ImageRecord | RelatedMemberNewsRecord;

type NewsModelContentField = {
  __typename?: 'NewsModelContentField';
  blocks: Array<NewsModelContentBlocksField>;
  links: Array<Scalars['String']>;
  value: Scalars['JsonField'];
};

type NewsModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  blackHeadline?: InputMaybe<BooleanFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  intro?: InputMaybe<TextFilter>;
  region?: InputMaybe<LinkFilter>;
  showImage?: InputMaybe<BooleanFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  blackHeadline_ASC = 'blackHeadline_ASC',
  blackHeadline_DESC = 'blackHeadline_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  showImage_ASC = 'showImage_ASC',
  showImage_DESC = 'showImage_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Nyheter (news) */
type NewsRecord = RecordInterface & {
  __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blackHeadline?: Maybe<Scalars['BooleanType']>;
  content?: Maybe<NewsModelContentField>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image?: Maybe<FileField>;
  intro: Scalars['String'];
  region: RegionRecord;
  showImage?: Maybe<Scalars['BooleanType']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Nyheter (news) */
type NewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Nyheter (news) */
type NewsRecordintroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by image orientation */
type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

/** Block of type Pdf fil (pdf_form) */
type PdfFormRecord = RecordInterface & {
  __typename?: 'PdfFormRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Pdf fil (pdf_form) */
type PdfFormRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']>;
};

type ProjectModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProjectModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  image?: InputMaybe<FileFilter>;
  position?: InputMaybe<PositionFilter>;
  region?: InputMaybe<LinkFilter>;
  text?: InputMaybe<TextFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
  url?: InputMaybe<StringFilter>;
};

enum ProjectModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

/** Record of type Initiativ (project) */
type ProjectRecord = RecordInterface & {
  __typename?: 'ProjectRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: FileField;
  position?: Maybe<Scalars['IntType']>;
  region?: Maybe<RegionRecord>;
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


/** Record of type Initiativ (project) */
type ProjectRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Initiativ (project) */
type ProjectRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by publication datetime */
type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** The query root for this schema */
type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allAboutsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allActivitiesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allActivityCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allApplicationsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allBoardsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCommissionCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allCommissionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allConsultantsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allEmployeesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allForArtistsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allKnowledgeCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allKnowledgesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLexiconsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMemberCategoriesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allMembersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allNewsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProjectsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRegionsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allSchemaMigrationsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a specific record */
  about?: Maybe<AboutRecord>;
  /** Returns a specific record */
  activity?: Maybe<ActivityRecord>;
  /** Returns a specific record */
  activityCategory?: Maybe<ActivityCategoryRecord>;
  /** Returns a collection of records */
  allAbouts: Array<AboutRecord>;
  /** Returns a collection of records */
  allActivities: Array<ActivityRecord>;
  /** Returns a collection of records */
  allActivityCategories: Array<ActivityCategoryRecord>;
  /** Returns a collection of records */
  allApplications: Array<ApplicationRecord>;
  /** Returns a collection of records */
  allBoards: Array<BoardRecord>;
  /** Returns a collection of records */
  allCommissionCategories: Array<CommissionCategoryRecord>;
  /** Returns a collection of records */
  allCommissions: Array<CommissionRecord>;
  /** Returns a collection of records */
  allConsultants: Array<ConsultantRecord>;
  /** Returns a collection of records */
  allEmployees: Array<EmployeeRecord>;
  /** Returns a collection of records */
  allForArtists: Array<ForArtistRecord>;
  /** Returns a collection of records */
  allKnowledgeCategories: Array<KnowledgeCategoryRecord>;
  /** Returns a collection of records */
  allKnowledges: Array<KnowledgeRecord>;
  /** Returns a collection of records */
  allLexicons: Array<LexiconRecord>;
  /** Returns a collection of records */
  allMemberCategories: Array<MemberCategoryRecord>;
  /** Returns a collection of records */
  allMembers: Array<MemberRecord>;
  /** Returns a collection of records */
  allNews: Array<NewsRecord>;
  /** Returns a collection of records */
  allProjects: Array<ProjectRecord>;
  /** Returns a collection of records */
  allRegions: Array<RegionRecord>;
  /** Returns a collection of records */
  allSchemaMigrations: Array<SchemaMigrationRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  application?: Maybe<ApplicationRecord>;
  /** Returns a specific record */
  board?: Maybe<BoardRecord>;
  /** Returns a specific record */
  commission?: Maybe<CommissionRecord>;
  /** Returns a specific record */
  commissionCategory?: Maybe<CommissionCategoryRecord>;
  /** Returns a specific record */
  consultant?: Maybe<ConsultantRecord>;
  /** Returns the single instance record */
  contactIntro?: Maybe<ContactIntroRecord>;
  /** Returns the single instance record */
  contactPage?: Maybe<ContactPageRecord>;
  /** Returns a specific record */
  employee?: Maybe<EmployeeRecord>;
  /** Returns the single instance record */
  footer?: Maybe<FooterRecord>;
  /** Returns a specific record */
  forArtist?: Maybe<ForArtistRecord>;
  /** Returns the single instance record */
  inEnglish?: Maybe<InEnglishRecord>;
  /** Returns the single instance record */
  introInitiative?: Maybe<IntroInitiativeRecord>;
  /** Returns a specific record */
  knowledge?: Maybe<KnowledgeRecord>;
  /** Returns a specific record */
  knowledgeCategory?: Maybe<KnowledgeCategoryRecord>;
  /** Returns a specific record */
  lexicon?: Maybe<LexiconRecord>;
  /** Returns the single instance record */
  lexiconText?: Maybe<LexiconTextRecord>;
  /** Returns a specific record */
  member?: Maybe<MemberRecord>;
  /** Returns a specific record */
  memberCategory?: Maybe<MemberCategoryRecord>;
  /** Returns a specific record */
  news?: Maybe<NewsRecord>;
  /** Returns a specific record */
  project?: Maybe<ProjectRecord>;
  /** Returns a specific record */
  region?: Maybe<RegionRecord>;
  /** Returns a specific record */
  schemaMigration?: Maybe<SchemaMigrationRecord>;
  /** Returns the single instance record */
  start?: Maybe<StartRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
type Query_allAboutsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allActivitiesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allActivityCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allApplicationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApplicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allBoardsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BoardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCommissionCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allCommissionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allConsultantsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConsultantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allEmployeesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allForArtistsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ForArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allKnowledgeCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allKnowledgesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allLexiconsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LexiconModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allMemberCategoriesMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allMembersMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allNewsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allProjectsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allRegionsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allSchemaMigrationsMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_allUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type Query_siteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryaboutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
};


/** The query root for this schema */
type QueryactivityArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityModelOrderBy>>>;
};


/** The query root for this schema */
type QueryactivityCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryallAboutsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<AboutModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<AboutModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallActivitiesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallActivityCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ActivityCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ActivityCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallApplicationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApplicationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallBoardsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BoardModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BoardModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallCommissionCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CommissionCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallCommissionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CommissionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallConsultantsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConsultantModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ConsultantModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallEmployeesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallForArtistsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ForArtistModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ForArtistModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallKnowledgeCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<KnowledgeCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallKnowledgesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<KnowledgeModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallLexiconsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LexiconModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LexiconModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallMemberCategoriesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberCategoryModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberCategoryModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallMembersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallNewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallProjectsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallRegionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallSchemaMigrationsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SchemaMigrationModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryallUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']>;
};


/** The query root for this schema */
type QueryapplicationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ApplicationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ApplicationModelOrderBy>>>;
};


/** The query root for this schema */
type QueryboardArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<BoardModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<BoardModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycommissionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CommissionModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycommissionCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<CommissionCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<CommissionCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QueryconsultantArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ConsultantModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ConsultantModelOrderBy>>>;
};


/** The query root for this schema */
type QuerycontactIntroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerycontactPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryemployeeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<EmployeeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<EmployeeModelOrderBy>>>;
};


/** The query root for this schema */
type QueryfooterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryforArtistArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ForArtistModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ForArtistModelOrderBy>>>;
};


/** The query root for this schema */
type QueryinEnglishArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryintroInitiativeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryknowledgeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<KnowledgeModelOrderBy>>>;
};


/** The query root for this schema */
type QueryknowledgeCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<KnowledgeCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<KnowledgeCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QuerylexiconArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LexiconModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LexiconModelOrderBy>>>;
};


/** The query root for this schema */
type QuerylexiconTextArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QuerymemberArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberModelOrderBy>>>;
};


/** The query root for this schema */
type QuerymemberCategoryArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<MemberCategoryModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<MemberCategoryModelOrderBy>>>;
};


/** The query root for this schema */
type QuerynewsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<NewsModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<NewsModelOrderBy>>>;
};


/** The query root for this schema */
type QueryprojectArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProjectModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProjectModelOrderBy>>>;
};


/** The query root for this schema */
type QueryregionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RegionModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RegionModelOrderBy>>>;
};


/** The query root for this schema */
type QueryschemaMigrationArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<SchemaMigrationModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<SchemaMigrationModelOrderBy>>>;
};


/** The query root for this schema */
type QuerystartArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
type QueryuploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

type RecordInterface = {
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
};


type RecordInterface_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type RegionModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RegionModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RegionModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  contactIntro?: InputMaybe<TextFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  email?: InputMaybe<StringFilter>;
  global?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  position?: InputMaybe<PositionFilter>;
  slug?: InputMaybe<SlugFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum RegionModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  email_ASC = 'email_ASC',
  email_DESC = 'email_DESC',
  global_ASC = 'global_ASC',
  global_DESC = 'global_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  position_ASC = 'position_ASC',
  position_DESC = 'position_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

type RegionModelSectionsField = ImageShortcutRecord | LatestActivityRecord | LatestNewsRecord | SelectedCommissionRecord | SelectedMemberRecord | TextRecord;

/** Record of type Region (region) */
type RegionRecord = RecordInterface & {
  __typename?: 'RegionRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  contactIntro?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  gallery: Array<SlideRecord>;
  global?: Maybe<Scalars['BooleanType']>;
  id: Scalars['ItemId'];
  info: Array<MetaBlockRecord>;
  name: Scalars['String'];
  position?: Maybe<Scalars['IntType']>;
  sections: Array<RegionModelSectionsField>;
  slug: Scalars['String'];
  sponsors: Array<SponsorRecord>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Region (region) */
type RegionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Region (region) */
type RegionRecordcontactIntroArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Block of type Relaterat på aktuellt (related_member_news) */
type RelatedMemberNewsRecord = RecordInterface & {
  __typename?: 'RelatedMemberNewsRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  memberNews?: Maybe<ActivityRecord>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Relaterat på aktuellt (related_member_news) */
type RelatedMemberNewsRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

enum ResolutionType {
  icon = 'icon',
  large = 'large',
  medium = 'medium',
  small = 'small'
}

type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

type SchemaMigrationModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<SchemaMigrationModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SchemaMigrationModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  createdAt?: InputMaybe<CreatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<UpdatedAtFilter>;
};

enum SchemaMigrationModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _unpublishingScheduledAt_ASC = '_unpublishingScheduledAt_ASC',
  _unpublishingScheduledAt_DESC = '_unpublishingScheduledAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

/** Record of type Schema migration (schema_migration) */
type SchemaMigrationRecord = RecordInterface & {
  __typename?: 'SchemaMigrationRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Record of type Schema migration (schema_migration) */
type SchemaMigrationRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Utvalda uppdrag (selected_commission) */
type SelectedCommissionRecord = RecordInterface & {
  __typename?: 'SelectedCommissionRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  commissions: Array<CommissionRecord>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  updatedAt: Scalars['DateTime'];
};


/** Block of type Utvalda uppdrag (selected_commission) */
type SelectedCommissionRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type Utvalda konstnärer (selected_member) */
type SelectedMemberRecord = RecordInterface & {
  __typename?: 'SelectedMemberRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  selectedMembers: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Utvalda konstnärer (selected_member) */
type SelectedMemberRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']>;
};


type SitefaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


type SiteglobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

enum SiteLocale {
  en = 'en'
}

type SlideModelLinkField = AboutRecord | ActivityRecord | CommissionRecord | ForArtistRecord | NewsRecord;

/** Block of type Slide (slide) */
type SlideRecord = RecordInterface & {
  __typename?: 'SlideRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  blackText?: Maybe<Scalars['BooleanType']>;
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  image: FileField;
  link?: Maybe<SlideModelLinkField>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Slide (slide) */
type SlideRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Slug fields */
type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Block of type Sponsor (sponsor) */
type SponsorRecord = RecordInterface & {
  __typename?: 'SponsorRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  image: FileField;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};


/** Block of type Sponsor (sponsor) */
type SponsorRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type StartModelSectionsField = ImageShortcutRecord | LatestActivityRecord | TextRecord;

/** Record of type Start (start) */
type StartRecord = RecordInterface & {
  __typename?: 'StartRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  gallery: Array<SlideRecord>;
  id: Scalars['ItemId'];
  sections: Array<StartModelSectionsField>;
  updatedAt: Scalars['DateTime'];
};


/** Record of type Start (start) */
type StartRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by status */
type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']>;
  pattern: Scalars['String'];
  regexp?: InputMaybe<Scalars['BooleanType']>;
};

/** Specifies how to filter Structured Text fields values */
type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Specifies how to filter text fields */
type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type Text (text) */
type TextRecord = RecordInterface & {
  __typename?: 'TextRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  link?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};


/** Block of type Text (text) */
type TextRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type Text (text) */
type TextRecordtextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies how to filter by upload type */
type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by default alt */
type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** Specifies how to filter by filename */
type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by height */
type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by ID */
type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']>>>;
};

/** Specifies how to filter by MD5 */
type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** Specifies how to filter by mime type */
type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC'
}

enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

/** Specifies how to filter by size */
type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']>;
};

/** Specifies how to filter by tags */
type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Specifies how to filter by default title */
type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

enum UploadType {
  archive = 'archive',
  audio = 'audio',
  image = 'image',
  pdfdocument = 'pdfdocument',
  presentation = 'presentation',
  richtext = 'richtext',
  spreadsheet = 'spreadsheet',
  video = 'video'
}

/** Specifies how to filter by update datetime */
type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']>;
};

type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']>;
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  framerate?: Maybe<Scalars['Int']>;
  height: Scalars['IntType'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbhash?: Maybe<Scalars['String']>;
  thumbnailUrl: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  width: Scalars['IntType'];
};


type UploadVideoFieldaltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


type UploadVideoFieldblurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float'];
  quality?: Scalars['Int'];
  size?: Scalars['Int'];
};


type UploadVideoFieldmp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


type UploadVideoFieldthumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


type UploadVideoFieldtitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']>;
};

type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType'];
  provider: Scalars['String'];
  providerUid: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['IntType'];
};

enum VideoMp4Res {
  high = 'high',
  low = 'low',
  medium = 'medium'
}

/** Block of type Video (video) */
type VideoRecord = RecordInterface & {
  __typename?: 'VideoRecord';
  _createdAt: Scalars['DateTime'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']>;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  video?: Maybe<VideoField>;
};


/** Block of type Video (video) */
type VideoRecord_seoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

type focalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType'];
  y: Scalars['FloatType'];
};

type AboutQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type AboutQuery = { __typename?: 'Query', about?: { __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, content: { __typename?: 'AboutModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllAboutsQueryVariables = Exact<{ [key: string]: never; }>;


type AllAboutsQuery = { __typename?: 'Query', abouts: Array<{ __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, content: { __typename?: 'AboutModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> }> };

type AllAboutsMenuQueryVariables = Exact<{ [key: string]: never; }>;


type AllAboutsMenuQuery = { __typename?: 'Query', abouts: Array<{ __typename?: 'AboutRecord', title: string, slug: string }> };

type ActivityQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type ActivityQuery = { __typename?: 'Query', activity?: { __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, showForm?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string }, content: { __typename?: 'ActivityModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type ActivityByIdQueryVariables = Exact<{
  id: Scalars['ItemId'];
}>;


type ActivityByIdQuery = { __typename?: 'Query', activity?: { __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, showForm?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string }, content: { __typename?: 'ActivityModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllActivitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllActivitiesQuery = { __typename?: 'Query', activities: Array<{ __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllPastAndFutureActivitiesQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ItemId']>;
  date?: InputMaybe<Scalars['DateTime']>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllPastAndFutureActivitiesQuery = { __typename?: 'Query', activities: Array<{ __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllPresentActivitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  date?: InputMaybe<Scalars['DateTime']>;
}>;


type AllPresentActivitiesQuery = { __typename?: 'Query', presentActivities: Array<{ __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllActivityCategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllActivityCategoriesQuery = { __typename?: 'Query', activityCategories: Array<{ __typename?: 'ActivityCategoryRecord', id: any, category: string }> };

type LatestActivitiesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  date?: InputMaybe<Scalars['DateTime']>;
}>;


type LatestActivitiesQuery = { __typename?: 'Query', activities: Array<{ __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string } }> };

type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


type ContactPageQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPageRecord', title: string, showImage?: any | null, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, content: { __typename?: 'ContactPageModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }> } } | null };

type InEnglishQueryVariables = Exact<{ [key: string]: never; }>;


type InEnglishQuery = { __typename?: 'Query', inEnglish?: { __typename: 'InEnglishRecord', _modelApiKey: string, id: any, title: string, slug: string, content: { __typename?: 'InEnglishModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'TextRecord', id: any, text?: string | null } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> } } | null };

type FooterQueryVariables = Exact<{ [key: string]: never; }>;


type FooterQuery = { __typename?: 'Query', footer?: { __typename?: 'FooterRecord', aboutTheProject: string } | null };

type AboutFragment = { __typename: 'AboutRecord', _modelApiKey: string, id: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, content: { __typename?: 'AboutModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ActivityFragment = { __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, showForm?: any | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string }, content: { __typename?: 'ActivityModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type ActivityLightFragment = { __typename: 'ActivityRecord', _modelApiKey: string, id: any, title: string, blackHeadline?: any | null, intro: string, date: any, dateEnd?: any | null, location?: string | null, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'ActivityCategoryRecord', id: any, category: string } };

type ImageFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null };

type ImageMediumFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null };

type ImageThumbnailFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null };

type KnowledgeFragment = { __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, blackHeadline?: any | null, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string }, content: { __typename?: 'KnowledgeModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> };

type KnowledgeLightFragment = { __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string } };

type MediaGalleryFragment = { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, base64?: string | null, bgColor?: string | null, sizes: string } | null };

type SiteFragment = { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null } | null } | null };

type VideoFragment = { __typename?: 'FileField', id: any, alt?: string | null, basename: string, format: string, mimeType: string, size: any, title?: string | null, url: string, width?: any | null, height?: any | null, video?: { __typename?: 'UploadVideoField', thumbnailUrl: string, streamingUrl: string, framerate?: number | null, duration?: number | null, mp4high?: string | null, mp4med?: string | null, mp4low?: string | null } | null };

type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


type GlobalQuery = { __typename?: 'Query', site: { __typename?: 'Site', favicon: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }>, globalSeo?: { __typename?: 'GlobalSeoField', facebookPageUrl?: string | null, siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, fallbackSeo?: { __typename?: 'SeoField', description?: string | null, title?: string | null, twitterCard?: string | null, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null } | null } | null } };

type KnowledgeQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type KnowledgeQuery = { __typename?: 'Query', knowledge?: { __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, blackHeadline?: any | null, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string }, content: { __typename?: 'KnowledgeModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type KnowledgeByIdQueryVariables = Exact<{
  id: Scalars['ItemId'];
}>;


type KnowledgeByIdQuery = { __typename?: 'Query', knowledge?: { __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, blackHeadline?: any | null, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string }, content: { __typename?: 'KnowledgeModelContentField', value: any, links: Array<{ __typename: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, links: Array<string>, value: any } | null }>, blocks: Array<{ __typename: 'ButtonRecord', id: any, text?: string | null, url: string } | { __typename: 'FormRecord', id: any, subject?: string | null, reciever?: string | null, confirmation: string, formFields: Array<{ __typename: 'FormTextRecord', id: any, title?: string | null } | { __typename: 'FormTextblockRecord', id: any, title?: string | null } | { __typename: 'PdfFormRecord', id: any, title?: string | null }> } | { __typename: 'ImageRecord', id: any, image: Array<{ __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }> } | { __typename: 'VideoRecord', id: any, title?: string | null, video?: { __typename?: 'VideoField', height: any, width: any, title: string, provider: string, providerUid: string, thumbnailUrl: string, url: string } | null }> }, _seoMetaTags: Array<{ __typename?: 'Tag', attributes?: any | null, content?: string | null, tag: string }> } | null };

type AllKnowledgesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllKnowledgesQuery = { __typename?: 'Query', knowledges: Array<{ __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllKnowledgesByCategoryQueryVariables = Exact<{
  categoryId: Scalars['ItemId'];
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllKnowledgesByCategoryQuery = { __typename?: 'Query', knowledges: Array<{ __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllPastAndFutureKnowledgesQueryVariables = Exact<{
  categoryId?: InputMaybe<Scalars['ItemId']>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllPastAndFutureKnowledgesQuery = { __typename?: 'Query', knowledges: Array<{ __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllPresentKnowledgesQueryVariables = Exact<{
  categoryId: Scalars['ItemId'];
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllPresentKnowledgesQuery = { __typename?: 'Query', presentKnowledges: Array<{ __typename: 'KnowledgeRecord', _modelApiKey: string, id: any, createdAt: any, title: string, intro: string, slug: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type AllKnowledgeCategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllKnowledgeCategoriesQuery = { __typename?: 'Query', knowledgeCategories: Array<{ __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type LexiconQueryVariables = Exact<{
  id: Scalars['ItemId'];
}>;


type LexiconQuery = { __typename?: 'Query', lexicon?: { __typename?: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, value: any, links: Array<string> } | null, _allReferencingActivities: Array<{ __typename?: 'ActivityRecord', id: any, title: string, slug: string }> } | null };

type AllLexiconsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type AllLexiconsQuery = { __typename?: 'Query', lexicons: Array<{ __typename?: 'LexiconRecord', id: any, word?: string | null, desc?: { __typename?: 'LexiconModelDescField', blocks: Array<string>, value: any, links: Array<string> } | null }>, pagination: { __typename?: 'CollectionMetadata', count: any }, lexiconText?: { __typename?: 'LexiconTextRecord', intro?: { __typename?: 'LexiconTextModelIntroField', blocks: Array<string>, value: any, links: Array<string> } | null } | null };

type AllApplicationsByActivityQueryVariables = Exact<{
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
  activityId?: InputMaybe<Scalars['ItemId']>;
}>;


type AllApplicationsByActivityQuery = { __typename?: 'Query', applications: Array<{ __typename: 'ApplicationRecord', id: any, approvalStatus: string, member: { __typename: 'MemberRecord', id: any, firstName?: string | null, lastName?: string | null, email: string, phone?: string | null, education?: string | null, age?: any | null, country?: string | null, language?: string | null, address?: string | null, city?: string | null, mission?: string | null, postalCode?: string | null, social?: string | null, sex?: string | null, workCategory?: string | null, url?: string | null, kcMember?: any | null, protectedIdentity?: any | null, educationThreeYears?: any | null, haveWorkedThreeYears?: any | null } }>, pagination: { __typename?: 'CollectionMetadata', count: any } };

type ApplicationFragment = { __typename: 'ApplicationRecord', id: any, approvalStatus: string, member: { __typename: 'MemberRecord', id: any, firstName?: string | null, lastName?: string | null, email: string, phone?: string | null, education?: string | null, age?: any | null, country?: string | null, language?: string | null, address?: string | null, city?: string | null, mission?: string | null, postalCode?: string | null, social?: string | null, sex?: string | null, workCategory?: string | null, url?: string | null, kcMember?: any | null, protectedIdentity?: any | null, educationThreeYears?: any | null, haveWorkedThreeYears?: any | null } };

type MemberFragment = { __typename: 'MemberRecord', id: any, firstName?: string | null, lastName?: string | null, email: string, phone?: string | null, education?: string | null, age?: any | null, country?: string | null, language?: string | null, address?: string | null, city?: string | null, mission?: string | null, postalCode?: string | null, social?: string | null, sex?: string | null, workCategory?: string | null, url?: string | null, kcMember?: any | null, protectedIdentity?: any | null, educationThreeYears?: any | null, haveWorkedThreeYears?: any | null };

type SiteSearchQueryVariables = Exact<{
  activityIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  knowledgeIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  aboutIds?: InputMaybe<Array<InputMaybe<Scalars['ItemId']>> | InputMaybe<Scalars['ItemId']>>;
  first?: InputMaybe<Scalars['IntType']>;
  skip?: InputMaybe<Scalars['IntType']>;
}>;


type SiteSearchQuery = { __typename?: 'Query', activities: Array<{ __typename: 'ActivityRecord', _modelApiKey: string, title: string, slug: string, text: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null }>, knowledges: Array<{ __typename: 'KnowledgeRecord', _modelApiKey: string, title: string, slug: string, text: string, category: { __typename?: 'KnowledgeCategoryRecord', id: any, category: string, slug: string }, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null }>, abouts: Array<{ __typename: 'AboutRecord', _modelApiKey: string, title: string, slug: string, text: string, image?: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null } | null } | null }> };

type StartQueryVariables = Exact<{ [key: string]: never; }>;


type StartQuery = { __typename?: 'Query', start?: { __typename?: 'StartRecord', id: any, gallery: Array<{ __typename?: 'SlideRecord', id: any, headline?: string | null, blackText?: any | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null }, link?: { __typename?: 'AboutRecord', id: any, slug: string, title: string } | { __typename?: 'ActivityRecord', id: any, slug: string, title: string } | { __typename?: 'CommissionRecord' } | { __typename?: 'ForArtistRecord' } | { __typename?: 'NewsRecord' } | null }>, sections: Array<{ __typename: 'ImageShortcutRecord', id: any, headline?: string | null, text?: string | null, link?: string | null, image: { __typename?: 'FileField', id: any, mimeType: string, url: string, title?: string | null, alt?: string | null, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, width: any, height: any, alt?: string | null, title?: string | null, bgColor?: string | null, sizes: string } | null } } | { __typename: 'LatestActivityRecord', id: any } | { __typename: 'TextRecord', id: any, headline?: string | null, text?: string | null, link?: string | null }> } | null };
