declare namespace API {
  type Admin = {
    adminName?: string;
    adminNumber?: string;
    adminPassword?: string;
    adminType?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
  };

  type AdminAddRequest = {
    adminName?: string;
    adminNumber?: string;
    adminPassword?: string;
    adminType?: string;
  };

  type AdminEditRequest = {
    adminName?: string;
    adminNumber?: string;
    id?: number;
  };

  type AdminLoginRequest = {
    adminNumber?: string;
    adminPassword?: string;
  };

  type AdminQueryRequest = {
    adminName?: string;
    adminNumber?: string;
    adminType?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type AdminUpdateRequest = {
    adminName?: string;
    adminNumber?: string;
    adminPassword?: string;
    adminType?: string;
    id?: number;
  };

  type AdminVO = {
    adminName?: string;
    adminNumber?: string;
    adminType?: string;
    createTime?: string;
    id?: number;
    updateTime?: string;
  };

  type AffineTransform = {
    determinant?: number;
    identity?: boolean;
    scaleX?: number;
    scaleY?: number;
    shearX?: number;
    shearY?: number;
    translateX?: number;
    translateY?: number;
    type?: number;
  };

  type Attribute = true;

  type BaseResponseAdminVO_ = {
    code?: number;
    data?: AdminVO;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCadreTypeVO_ = {
    code?: number;
    data?: CadreTypeVO;
    message?: string;
  };

  type BaseResponseCaptcha_ = {
    code?: number;
    data?: Captcha;
    message?: string;
  };

  type BaseResponseDeadlineVO_ = {
    code?: number;
    data?: DeadlineVO;
    message?: string;
  };

  type BaseResponseEducationVO_ = {
    code?: number;
    data?: EducationVO;
    message?: string;
  };

  type BaseResponseFamilyVO_ = {
    code?: number;
    data?: FamilyVO;
    message?: string;
  };

  type BaseResponseFileLogVO_ = {
    code?: number;
    data?: FileLogVO;
    message?: string;
  };

  type BaseResponseFileTypeVO_ = {
    code?: number;
    data?: FileTypeVO;
    message?: string;
  };

  type BaseResponseJobVO_ = {
    code?: number;
    data?: JobVO;
    message?: string;
  };

  type BaseResponseLoginAdminVO_ = {
    code?: number;
    data?: LoginAdminVO;
    message?: string;
  };

  type BaseResponseLoginUserVO_ = {
    code?: number;
    data?: LoginUserVO;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseMessageNoticeVO_ = {
    code?: number;
    data?: MessageNoticeVO;
    message?: string;
  };

  type BaseResponseMessagePushVO_ = {
    code?: number;
    data?: MessagePushVO;
    message?: string;
  };

  type BaseResponseOperationLogVO_ = {
    code?: number;
    data?: OperationLogVO;
    message?: string;
  };

  type BaseResponsePageAdmin_ = {
    code?: number;
    data?: PageAdmin_;
    message?: string;
  };

  type BaseResponsePageAdminVO_ = {
    code?: number;
    data?: PageAdminVO_;
    message?: string;
  };

  type BaseResponsePageCadreType_ = {
    code?: number;
    data?: PageCadreType_;
    message?: string;
  };

  type BaseResponsePageCadreTypeVO_ = {
    code?: number;
    data?: PageCadreTypeVO_;
    message?: string;
  };

  type BaseResponsePageDeadline_ = {
    code?: number;
    data?: PageDeadline_;
    message?: string;
  };

  type BaseResponsePageDeadlineVO_ = {
    code?: number;
    data?: PageDeadlineVO_;
    message?: string;
  };

  type BaseResponsePageEducation_ = {
    code?: number;
    data?: PageEducation_;
    message?: string;
  };

  type BaseResponsePageEducationVO_ = {
    code?: number;
    data?: PageEducationVO_;
    message?: string;
  };

  type BaseResponsePageFamily_ = {
    code?: number;
    data?: PageFamily_;
    message?: string;
  };

  type BaseResponsePageFamilyVO_ = {
    code?: number;
    data?: PageFamilyVO_;
    message?: string;
  };

  type BaseResponsePageFileLog_ = {
    code?: number;
    data?: PageFileLog_;
    message?: string;
  };

  type BaseResponsePageFileLogVO_ = {
    code?: number;
    data?: PageFileLogVO_;
    message?: string;
  };

  type BaseResponsePageFileType_ = {
    code?: number;
    data?: PageFileType_;
    message?: string;
  };

  type BaseResponsePageFileTypeVO_ = {
    code?: number;
    data?: PageFileTypeVO_;
    message?: string;
  };

  type BaseResponsePageJob_ = {
    code?: number;
    data?: PageJob_;
    message?: string;
  };

  type BaseResponsePageJobVO_ = {
    code?: number;
    data?: PageJobVO_;
    message?: string;
  };

  type BaseResponsePageMessageNotice_ = {
    code?: number;
    data?: PageMessageNotice_;
    message?: string;
  };

  type BaseResponsePageMessageNoticeVO_ = {
    code?: number;
    data?: PageMessageNoticeVO_;
    message?: string;
  };

  type BaseResponsePageMessagePush_ = {
    code?: number;
    data?: PageMessagePush_;
    message?: string;
  };

  type BaseResponsePageMessagePushVO_ = {
    code?: number;
    data?: PageMessagePushVO_;
    message?: string;
  };

  type BaseResponsePageOperationLog_ = {
    code?: number;
    data?: PageOperationLog_;
    message?: string;
  };

  type BaseResponsePageOperationLogVO_ = {
    code?: number;
    data?: PageOperationLogVO_;
    message?: string;
  };

  type BaseResponsePageRegistrationForm_ = {
    code?: number;
    data?: PageRegistrationForm_;
    message?: string;
  };

  type BaseResponsePageRegistrationFormVO_ = {
    code?: number;
    data?: PageRegistrationFormVO_;
    message?: string;
  };

  type BaseResponsePageReviewLog_ = {
    code?: number;
    data?: PageReviewLog_;
    message?: string;
  };

  type BaseResponsePageReviewLogVO_ = {
    code?: number;
    data?: PageReviewLogVO_;
    message?: string;
  };

  type BaseResponsePageSchool_ = {
    code?: number;
    data?: PageSchool_;
    message?: string;
  };

  type BaseResponsePageSchoolSchoolType_ = {
    code?: number;
    data?: PageSchoolSchoolType_;
    message?: string;
  };

  type BaseResponsePageSchoolSchoolTypeVO_ = {
    code?: number;
    data?: PageSchoolSchoolTypeVO_;
    message?: string;
  };

  type BaseResponsePageSchoolType_ = {
    code?: number;
    data?: PageSchoolType_;
    message?: string;
  };

  type BaseResponsePageSchoolTypeVO_ = {
    code?: number;
    data?: PageSchoolTypeVO_;
    message?: string;
  };

  type BaseResponsePageSchoolVO_ = {
    code?: number;
    data?: PageSchoolVO_;
    message?: string;
  };

  type BaseResponsePageSystemMessages_ = {
    code?: number;
    data?: PageSystemMessages_;
    message?: string;
  };

  type BaseResponsePageSystemMessagesVO_ = {
    code?: number;
    data?: PageSystemMessagesVO_;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: PageUser_;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: PageUserVO_;
    message?: string;
  };

  type BaseResponseRegistrationFormVO_ = {
    code?: number;
    data?: RegistrationFormVO;
    message?: string;
  };

  type BaseResponseReviewLogVO_ = {
    code?: number;
    data?: ReviewLogVO;
    message?: string;
  };

  type BaseResponseSchoolSchoolTypeVO_ = {
    code?: number;
    data?: SchoolSchoolTypeVO;
    message?: string;
  };

  type BaseResponseSchoolTypeVO_ = {
    code?: number;
    data?: SchoolTypeVO;
    message?: string;
  };

  type BaseResponseSchoolVO_ = {
    code?: number;
    data?: SchoolVO;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseSystemMessagesVO_ = {
    code?: number;
    data?: SystemMessagesVO;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type BufferedImage = {
    accelerationPriority?: number;
    alphaPremultiplied?: boolean;
    alphaRaster?: WritableRaster;
    colorModel?: ColorModel;
    data?: Raster;
    graphics?: Graphics;
    height?: number;
    minTileX?: number;
    minTileY?: number;
    minX?: number;
    minY?: number;
    numXTiles?: number;
    numYTiles?: number;
    propertyNames?: string[];
    raster?: WritableRaster;
    sampleModel?: SampleModel;
    source?: ImageProducer;
    sources?: RenderedImage[];
    tileGridXOffset?: number;
    tileGridYOffset?: number;
    tileHeight?: number;
    tileWidth?: number;
    transparency?: number;
    type?: number;
    width?: number;
    writableTileIndices?: Point[];
  };

  type CadreType = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    type?: string;
    updateTime?: string;
  };

  type CadreTypeAddRequest = {
    type?: string;
  };

  type CadreTypeQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    type?: string;
  };

  type CadreTypeUpdateRequest = {
    id?: number;
    type?: string;
  };

  type CadreTypeVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    type?: string;
    updateTime?: string;
  };

  type Captcha = {
    code?: string;
    image?: string;
    imageBuffer?: BufferedImage;
    uuid?: string;
  };

  type checkCaptchaCodeUsingPOSTParams = {
    /** code */
    code: string;
  };

  type Color = {
    alpha?: number;
    blue?: number;
    colorSpace?: ColorSpace;
    green?: number;
    red?: number;
    rgb?: number;
    transparency?: number;
  };

  type ColorModel = {
    alphaPremultiplied?: boolean;
    colorSpace?: ColorSpace;
    componentSize?: number[];
    numColorComponents?: number;
    numComponents?: number;
    pixelSize?: number;
    transferType?: number;
    transparency?: number;
  };

  type ColorSpace = {
    cs_sRGB?: boolean;
    numComponents?: number;
    type?: number;
  };

  type DataBuffer = {
    dataType?: number;
    numBanks?: number;
    offset?: number;
    offsets?: number[];
    size?: number;
  };

  type Deadline = {
    adminId?: number;
    createTime?: string;
    deadlineTime?: string;
    id?: number;
    isDelete?: number;
    jobId?: number;
    updateTime?: string;
  };

  type DeadlineAddRequest = {
    deadlineTime?: string;
    jobId?: number;
  };

  type DeadlineQueryRequest = {
    adminId?: number;
    current?: number;
    deadlineTime?: string;
    id?: number;
    jobId?: number;
    notId?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type DeadlineUpdateRequest = {
    deadlineTime?: string;
    id?: number;
    jobId?: number;
  };

  type DeadlineVO = {
    adminId?: number;
    createTime?: string;
    deadlineTime?: string;
    id?: number;
    jobId?: number;
    jobVO?: JobVO;
    updateTime?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Dimension = {
    height?: number;
    width?: number;
  };

  type Education = {
    certifier?: string;
    certifierPhone?: string;
    createTime?: string;
    educationalStage?: string;
    id?: number;
    isDelete?: number;
    major?: string;
    schoolId?: number;
    studyTime?: string;
    updateTime?: string;
    userId?: number;
  };

  type EducationAddRequest = {
    certifier?: string;
    certifierPhone?: string;
    educationalStage?: string;
    major?: string;
    schoolId?: number;
    studyTime?: string;
  };

  type EducationEditRequest = {
    certifier?: string;
    certifierPhone?: string;
    educationalStage?: string;
    id?: number;
    major?: string;
    schoolId?: number;
    studyTime?: string;
  };

  type EducationQueryRequest = {
    certifier?: string;
    certifierPhone?: string;
    current?: number;
    educationalStage?: string;
    id?: number;
    major?: string;
    notId?: number;
    pageSize?: number;
    schoolId?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    studyTime?: string;
    userId?: number;
  };

  type EducationUpdateRequest = {
    certifier?: string;
    certifierPhone?: string;
    educationalStage?: string;
    id?: number;
    major?: string;
    schoolId?: number;
    studyTime?: string;
  };

  type EducationVO = {
    certifier?: string;
    certifierPhone?: string;
    createTime?: string;
    educationalStage?: string;
    id?: number;
    major?: string;
    schoolId?: number;
    schoolVO?: SchoolVO;
    studyTime?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type Family = {
    appellation?: string;
    createTime?: string;
    familyName?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userId?: number;
    workDetail?: string;
  };

  type FamilyAddRequest = {
    appellation?: string;
    familyName?: string;
    workDetail?: string;
  };

  type FamilyEditRequest = {
    appellation?: string;
    familyName?: string;
    id?: number;
    workDetail?: string;
  };

  type FamilyQueryRequest = {
    appellation?: string;
    current?: number;
    familyName?: string;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
    workDetail?: string;
  };

  type FamilyUpdateRequest = {
    appellation?: string;
    familyName?: string;
    id?: number;
    userId?: number;
    workDetail?: string;
  };

  type FamilyVO = {
    appellation?: string;
    createTime?: string;
    familyName?: string;
    id?: number;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
    workDetail?: string;
  };

  type FileLog = {
    createTime?: string;
    fileName?: string;
    filePath?: string;
    fileTypeId?: number;
    id?: number;
    userId?: number;
  };

  type FileLogQueryRequest = {
    current?: number;
    fileName?: string;
    filePath?: string;
    fileTypeId?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type FileLogVO = {
    createTime?: string;
    fileName?: string;
    filePath?: string;
    fileTypeId?: number;
    id?: number;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type FileType = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    maxFileSize?: number;
    typeName?: string;
    typeValues?: string;
    updateTime?: string;
  };

  type FileTypeAddRequest = {
    maxFileSize?: number;
    typeName?: string;
    typeValues?: string[];
  };

  type FileTypeQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    maxFileSize?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    typeName?: string;
    typeValues?: string[];
  };

  type FileTypeUpdateRequest = {
    id?: number;
    maxFileSize?: number;
    typeName?: string;
    typeValues?: string[];
  };

  type FileTypeVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    maxFileSize?: number;
    typeName?: string;
    typeValues?: string[];
    updateTime?: string;
  };

  type Font = {
    attributes?: Record<string, any>;
    availableAttributes?: Attribute[];
    bold?: boolean;
    family?: string;
    fontName?: string;
    italic?: boolean;
    italicAngle?: number;
    missingGlyphCode?: number;
    name?: string;
    numGlyphs?: number;
    plain?: boolean;
    psname?: string;
    size?: number;
    size2D?: number;
    style?: number;
    transform?: AffineTransform;
    transformed?: boolean;
  };

  type FontMetrics = {
    ascent?: number;
    descent?: number;
    font?: Font;
    fontRenderContext?: FontRenderContext;
    height?: number;
    leading?: number;
    maxAdvance?: number;
    maxAscent?: number;
    maxDecent?: number;
    maxDescent?: number;
    widths?: number[];
  };

  type FontRenderContext = {
    antiAliased?: boolean;
    antiAliasingHint?: Record<string, any>;
    fractionalMetricsHint?: Record<string, any>;
    transform?: AffineTransform;
    transformType?: number;
    transformed?: boolean;
  };

  type getAdminVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getCadreTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getDeadlineVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getEducationVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getFamilyVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getFileLogVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getFileTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getJobVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMessageNoticeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMessagePushVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getOperationLogVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getRegistrationFormVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getReviewLogVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSchoolSchoolTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSchoolTypeVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSchoolVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getSystemMessagesVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type Graphics = {
    clip?: Shape;
    clipBounds?: Rectangle;
    clipRect?: Rectangle;
    color?: Color;
    font?: Font;
    fontMetrics?: FontMetrics;
  };

  type ImageProducer = true;

  type Job = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    jobExplanation?: string;
    jobName?: string;
    updateTime?: string;
  };

  type JobAddRequest = {
    jobExplanation?: string;
    jobName?: string;
  };

  type JobQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    jobExplanation?: string;
    jobName?: string;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type JobUpdateRequest = {
    id?: number;
    jobExplanation?: string;
    jobName?: string;
  };

  type JobVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    jobExplanation?: string;
    jobName?: string;
    updateTime?: string;
  };

  type LoginAdminVO = {
    adminName?: string;
    adminNumber?: string;
    adminType?: string;
    createTime?: string;
    id?: number;
    token?: string;
    updateTime?: string;
  };

  type LoginUserVO = {
    id?: number;
    token?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
  };

  type MessageNotice = {
    adminId?: number;
    createTime?: string;
    id?: number;
    interviewLocation?: string;
    interviewTime?: string;
    isDelete?: number;
    registrationId?: number;
    updateTime?: string;
  };

  type MessageNoticeAddRequest = {
    interviewLocation?: string;
    interviewTime?: string;
    registrationId?: number;
  };

  type MessageNoticeQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    interviewLocation?: string;
    interviewTime?: string;
    notId?: number;
    pageSize?: number;
    registrationId?: number;
    sortField?: string;
    sortOrder?: string;
  };

  type MessageNoticeUpdateRequest = {
    id?: number;
    interviewLocation?: string;
    interviewTime?: string;
  };

  type MessageNoticeVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    interviewLocation?: string;
    interviewTime?: string;
    registrationFormVO?: RegistrationFormVO;
    registrationId?: number;
    updateTime?: string;
  };

  type MessagePush = {
    createTime?: string;
    errorMessage?: string;
    id?: number;
    messageNoticeId?: number;
    pushMessage?: string;
    pushStatus?: number;
    pushType?: string;
    retryCount?: number;
    updateTime?: string;
    userId?: number;
  };

  type MessagePushAddRequest = {
    messageNoticeId?: number;
    pushType?: string;
  };

  type MessagePushQueryRequest = {
    current?: number;
    errorMessage?: string;
    id?: number;
    messageNoticeId?: number;
    notId?: number;
    pageSize?: number;
    pushMessage?: string;
    pushStatus?: number;
    pushType?: string;
    retryCount?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type MessagePushUpdateRequest = {
    id?: number;
    messageNoticeId?: number;
    pushMessage?: string;
    pushStatus?: number;
    pushType?: string;
    userId?: number;
  };

  type MessagePushVO = {
    createTime?: string;
    errorMessage?: string;
    id?: number;
    messageNoticeId?: number;
    pushMessage?: string;
    pushStatus?: number;
    pushType?: string;
    retryCount?: number;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type OperationLog = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    requestId?: string;
    requestIp?: string;
    requestMethod?: string;
    requestParams?: string;
    requestPath?: string;
    responseTime?: number;
    userAgent?: string;
  };

  type OperationLogQueryRequest = {
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    requestId?: string;
    requestIp?: string;
    requestMethod?: string;
    requestParams?: string;
    requestPath?: string;
    responseTime?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userAgent?: string;
  };

  type OperationLogVO = {
    createTime?: string;
    id?: number;
    requestId?: string;
    requestIp?: string;
    requestMethod?: string;
    requestParams?: string;
    requestPath?: string;
    responseTime?: number;
    userAgent?: string;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAdmin_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Admin[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAdminVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AdminVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCadreType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CadreType[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageCadreTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: CadreTypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDeadline_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Deadline[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDeadlineVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: DeadlineVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageEducation_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Education[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageEducationVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: EducationVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFamily_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Family[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFamilyVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FamilyVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFileLog_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FileLog[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFileLogVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FileLogVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFileType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FileType[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageFileTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: FileTypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageJob_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Job[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageJobVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: JobVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessageNotice_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MessageNotice[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessageNoticeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MessageNoticeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessagePush_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MessagePush[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessagePushVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MessagePushVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOperationLog_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OperationLog[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageOperationLogVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: OperationLogVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageRegistrationForm_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: RegistrationForm[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageRegistrationFormVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: RegistrationFormVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageReviewLog_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ReviewLog[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageReviewLogVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ReviewLogVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchool_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: School[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchoolSchoolType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SchoolSchoolType[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchoolSchoolTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SchoolSchoolTypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchoolType_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SchoolType[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchoolTypeVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SchoolTypeVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSchoolVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SchoolVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSystemMessages_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SystemMessages[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageSystemMessagesVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: SystemMessagesVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: User[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: UserVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type Point = {
    x?: number;
    y?: number;
  };

  type Raster = {
    bounds?: Rectangle;
    dataBuffer?: DataBuffer;
    height?: number;
    minX?: number;
    minY?: number;
    numBands?: number;
    numDataElements?: number;
    parent?: Raster;
    sampleModel?: SampleModel;
    sampleModelTranslateX?: number;
    sampleModelTranslateY?: number;
    transferType?: number;
    width?: number;
  };

  type Rectangle = {
    bounds2D?: Rectangle2D;
    centerX?: number;
    centerY?: number;
    empty?: boolean;
    height?: number;
    location?: Point;
    maxX?: number;
    maxY?: number;
    minX?: number;
    minY?: number;
    size?: Dimension;
    width?: number;
    x?: number;
    y?: number;
  };

  type Rectangle2D = {
    bounds?: Rectangle;
    bounds2D?: Rectangle2D;
    centerX?: number;
    centerY?: number;
    empty?: boolean;
    height?: number;
    maxX?: number;
    maxY?: number;
    minX?: number;
    minY?: number;
    width?: number;
    x?: number;
    y?: number;
  };

  type RegistrationForm = {
    address?: string;
    birthDate?: string;
    createTime?: string;
    emergencyPhone?: string;
    ethnic?: string;
    id?: number;
    isDelete?: number;
    jobId?: number;
    marryStatus?: number;
    partyTime?: string;
    reviewComments?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewer?: string;
    studentLeaderAwards?: string;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userId?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RegistrationFormAddRequest = {
    address?: string;
    birthDate?: string;
    emergencyPhone?: string;
    ethnic?: string;
    jobId?: number;
    marryStatus?: number;
    partyTime?: string;
    studentLeaderAwards?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RegistrationFormEditRequest = {
    address?: string;
    birthDate?: string;
    emergencyPhone?: string;
    ethnic?: string;
    id?: number;
    jobId?: number;
    marryStatus?: number;
    partyTime?: string;
    studentLeaderAwards?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RegistrationFormQueryRequest = {
    address?: string;
    birthDate?: string;
    current?: number;
    emergencyPhone?: string;
    ethnic?: string;
    id?: number;
    jobId?: number;
    marryStatus?: number;
    notId?: number;
    pageSize?: number;
    partyTime?: string;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    studentLeaderAwards?: string;
    userEmail?: string;
    userGender?: number;
    userId?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RegistrationFormUpdateRequest = {
    address?: string;
    birthDate?: string;
    emergencyPhone?: string;
    ethnic?: string;
    id?: number;
    jobId?: number;
    marryStatus?: number;
    partyTime?: string;
    studentLeaderAwards?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userId?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RegistrationFormVO = {
    address?: string;
    birthDate?: string;
    createTime?: string;
    ethnic?: string;
    id?: number;
    jobId?: number;
    jobVO?: JobVO;
    marryStatus?: number;
    partyTime?: string;
    studentLeaderAwards?: string;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userId?: number;
    userName?: string;
    userPhone?: string;
    workExperience?: string;
  };

  type RenderedImage = {
    colorModel?: ColorModel;
    data?: Raster;
    height?: number;
    minTileX?: number;
    minTileY?: number;
    minX?: number;
    minY?: number;
    numXTiles?: number;
    numYTiles?: number;
    propertyNames?: string[];
    sampleModel?: SampleModel;
    sources?: RenderedImage[];
    tileGridXOffset?: number;
    tileGridYOffset?: number;
    tileHeight?: number;
    tileWidth?: number;
    width?: number;
  };

  type ReviewLog = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    registrationId?: number;
    reviewComments?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewerId?: number;
    updateTime?: string;
  };

  type ReviewLogAddRequest = {
    registrationId?: number;
    reviewComments?: string;
    reviewStatus?: number;
  };

  type ReviewLogQueryRequest = {
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    registrationId?: number;
    reviewComments?: string;
    reviewStatus?: number;
    reviewerId?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type ReviewLogUpdateRequest = {
    id?: number;
    registrationId?: number;
    reviewComments?: string;
    reviewStatus?: number;
  };

  type ReviewLogVO = {
    adminVO?: AdminVO;
    createTime?: string;
    id?: number;
    registrationId?: number;
    reviewComments?: string;
    reviewStatus?: number;
    reviewTime?: string;
    reviewerId?: number;
    updateTime?: string;
  };

  type SampleModel = {
    dataType?: number;
    height?: number;
    numBands?: number;
    numDataElements?: number;
    sampleSize?: number[];
    transferType?: number;
    width?: number;
  };

  type School = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    schoolName?: string;
    updateTime?: string;
  };

  type SchoolAddRequest = {
    schoolName?: string;
  };

  type SchoolQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    schoolName?: string;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type SchoolSchoolType = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    schoolId?: number;
    schoolTypes?: string;
    updateTime?: string;
  };

  type SchoolSchoolTypeAddRequest = {
    schoolId?: number;
    schoolTypes?: string[];
  };

  type SchoolSchoolTypeQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    schoolId?: number;
    schoolTypes?: string[];
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
  };

  type SchoolSchoolTypeUpdateRequest = {
    id?: number;
    schoolId?: number;
    schoolTypes?: string[];
  };

  type SchoolSchoolTypeVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    schoolId?: number;
    schoolTypes?: string[];
    schoolVO?: SchoolVO;
    updateTime?: string;
  };

  type SchoolType = {
    adminId?: number;
    createTime?: string;
    id?: number;
    isDelete?: number;
    typeName?: string;
    updateTime?: string;
  };

  type SchoolTypeAddRequest = {
    typeName?: string;
  };

  type SchoolTypeQueryRequest = {
    adminId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    typeName?: string;
  };

  type SchoolTypeUpdateRequest = {
    content?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type SchoolTypeVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    typeName?: string;
    updateTime?: string;
  };

  type SchoolUpdateRequest = {
    id?: number;
    schoolName?: string;
  };

  type SchoolVO = {
    adminId?: number;
    createTime?: string;
    id?: number;
    schoolName?: string;
    updateTime?: string;
  };

  type Shape = {
    bounds?: Rectangle;
    bounds2D?: Rectangle2D;
  };

  type SystemMessages = {
    content?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    pushStatus?: number;
    pushTime?: string;
    title?: string;
    type?: string;
    updateTime?: string;
  };

  type SystemMessagesAddRequest = {
    content?: string;
    pushTime?: string;
    title?: string;
    type?: string;
  };

  type SystemMessagesQueryRequest = {
    content?: string;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    pushStatus?: number;
    pushTime?: string;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    type?: string;
  };

  type SystemMessagesUpdateRequest = {
    content?: string;
    id?: number;
    pushTime?: string;
    title?: string;
    type?: string;
  };

  type SystemMessagesVO = {
    content?: string;
    createTime?: string;
    id?: number;
    pushStatus?: number;
    pushTime?: string;
    title?: string;
    type?: string;
    updateTime?: string;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
  };

  type UserEditRequest = {
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPassword?: string;
    userPhone?: string;
  };

  type UserRegisterRequest = {
    checkUserPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdatePasswordRequest = {
    checkUserPassword?: string;
    userPassword?: string;
    userPhone?: string;
    verificationCode?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userIdCard?: string;
    userName?: string;
    userPhone?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userGender?: number;
    userName?: string;
    userPhone?: string;
  };

  type WritableRaster = {
    bounds?: Rectangle;
    dataBuffer?: DataBuffer;
    height?: number;
    minX?: number;
    minY?: number;
    numBands?: number;
    numDataElements?: number;
    parent?: Raster;
    sampleModel?: SampleModel;
    sampleModelTranslateX?: number;
    sampleModelTranslateY?: number;
    transferType?: number;
    width?: number;
    writableParent?: WritableRaster;
  };
}
