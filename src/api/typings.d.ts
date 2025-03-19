declare namespace API {
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

  type Auth = {
    accessToken?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    oauthId?: string;
    oauthProvider?: string;
    refreshToken?: string;
    updateTime?: string;
    userId?: number;
  };

  type AuthAddRequest = {
    accessToken?: string;
    oauthId?: string;
    oauthProvider?: string;
    refreshToken?: string;
  };

  type AuthQueryRequest = {
    accessToken?: string;
    current?: number;
    id?: number;
    notId?: number;
    oauthId?: string;
    oauthProvider?: string;
    pageSize?: number;
    refreshToken?: string;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type AuthVO = {
    accessToken?: string;
    createTime?: string;
    id?: number;
    oauthId?: string;
    oauthProvider?: string;
    refreshToken?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type BaseResponseAuthVO_ = {
    code?: number;
    data?: AuthVO;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseCaptcha_ = {
    code?: number;
    data?: Captcha;
    message?: string;
  };

  type BaseResponseConversionVO_ = {
    code?: number;
    data?: ConversionVO;
    message?: string;
  };

  type BaseResponseInt_ = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponseListTagDTO_ = {
    code?: number;
    data?: TagDTO[];
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

  type BaseResponseMessageVO_ = {
    code?: number;
    data?: MessageVO;
    message?: string;
  };

  type BaseResponsePageAuth_ = {
    code?: number;
    data?: PageAuth_;
    message?: string;
  };

  type BaseResponsePageAuthVO_ = {
    code?: number;
    data?: PageAuthVO_;
    message?: string;
  };

  type BaseResponsePageConversion_ = {
    code?: number;
    data?: PageConversion_;
    message?: string;
  };

  type BaseResponsePageConversionVO_ = {
    code?: number;
    data?: PageConversionVO_;
    message?: string;
  };

  type BaseResponsePageMessage_ = {
    code?: number;
    data?: PageMessage_;
    message?: string;
  };

  type BaseResponsePageMessageVO_ = {
    code?: number;
    data?: PageMessageVO_;
    message?: string;
  };

  type BaseResponsePagePost_ = {
    code?: number;
    data?: PagePost_;
    message?: string;
  };

  type BaseResponsePagePostVO_ = {
    code?: number;
    data?: PagePostVO_;
    message?: string;
  };

  type BaseResponsePageTag_ = {
    code?: number;
    data?: PageTag_;
    message?: string;
  };

  type BaseResponsePageTagVO_ = {
    code?: number;
    data?: PageTagVO_;
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

  type BaseResponsePostVO_ = {
    code?: number;
    data?: PostVO;
    message?: string;
  };

  type BaseResponseSearchVOObject_ = {
    code?: number;
    data?: SearchVOObject_;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: string;
    message?: string;
  };

  type BaseResponseTagVO_ = {
    code?: number;
    data?: TagVO;
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

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
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

  type Conversion = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type ConversionAddRequest = {
    title?: string;
  };

  type ConversionEditRequest = {
    id?: number;
    title?: string;
  };

  type ConversionQueryRequest = {
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    title?: string;
    userId?: number;
  };

  type ConversionUpdateRequest = {
    id?: number;
    title?: string;
  };

  type ConversionVO = {
    createTime?: string;
    id?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type DataBuffer = {
    dataType?: number;
    numBanks?: number;
    offset?: number;
    offsets?: number[];
    size?: number;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Dimension = {
    height?: number;
    width?: number;
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

  type getAuthVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getConversionVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getMessageVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getPostVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getTagVOByIdUsingGETParams = {
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

  type LoginUserVO = {
    createTime?: string;
    id?: number;
    token?: string;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userRole?: string;
  };

  type Message = {
    content?: string;
    conversionId?: number;
    createTime?: string;
    id?: number;
    senderType?: number;
    userId?: number;
  };

  type MessageAddRequest = {
    content?: string;
    conversionId?: number;
    senderType?: number;
  };

  type MessageEditRequest = {
    content?: string;
    conversionId?: number;
    id?: number;
    senderType?: number;
  };

  type MessageQueryRequest = {
    content?: string;
    conversionId?: number;
    current?: number;
    id?: number;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    senderType?: number;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type MessageUpdateRequest = {
    content?: string;
    id?: number;
    senderType?: number;
  };

  type MessageVO = {
    content?: string;
    conversionId?: number;
    createTime?: string;
    id?: number;
    senderType?: number;
    userId?: number;
    userVO?: UserVO;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAuth_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Auth[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageAuthVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: AuthVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageConversion_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Conversion[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageConversionVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: ConversionVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessage_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Message[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageMessageVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: MessageVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePost_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Post[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PagePostVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: PostVO[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTag_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Tag[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageTagVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: TagVO[];
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

  type Post = {
    content?: string;
    cover?: string;
    createTime?: string;
    favourNum?: number;
    id?: number;
    isDelete?: number;
    tags?: string;
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
  };

  type PostAddRequest = {
    content?: string;
    cover?: string;
    tags?: string[];
    title?: string;
  };

  type PostEditRequest = {
    content?: string;
    cover?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostFavourAddRequest = {
    postId?: number;
  };

  type PostFavourQueryRequest = {
    current?: number;
    pageSize?: number;
    postQueryRequest?: PostQueryRequest;
    sortField?: string;
    sortOrder?: string;
    userId?: number;
  };

  type PostQueryRequest = {
    content?: string;
    current?: number;
    favourUserId?: number;
    id?: number;
    notId?: number;
    orTags?: string[];
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    tags?: string[];
    title?: string;
    userId?: number;
  };

  type PostThumbAddRequest = {
    postId?: number;
  };

  type PostUpdateRequest = {
    content?: string;
    cover?: string;
    id?: number;
    tags?: string[];
    title?: string;
  };

  type PostVO = {
    content?: string;
    cover?: string;
    createTime?: string;
    favourNum?: number;
    hasFavour?: boolean;
    hasThumb?: boolean;
    id?: number;
    tags?: string[];
    thumbNum?: number;
    title?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
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

  type SampleModel = {
    dataType?: number;
    height?: number;
    numBands?: number;
    numDataElements?: number;
    sampleSize?: number[];
    transferType?: number;
    width?: number;
  };

  type SearchRequest = {
    current?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    type?: string;
  };

  type SearchVOObject_ = {
    dataList?: Record<string, any>[];
  };

  type Shape = {
    bounds?: Rectangle;
    bounds2D?: Rectangle2D;
  };

  type Tag = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    isParent?: number;
    parentId?: number;
    tagName?: string;
    updateTime?: string;
    userId?: number;
  };

  type TagAddRequest = {
    isParent?: number;
    parentId?: number;
    tagName?: string;
  };

  type TagChildren = {
    children?: TagChildren[];
    id?: number;
    tagName?: string;
  };

  type TagDTO = {
    children?: TagChildren[];
    id?: number;
    tagName?: string;
  };

  type TagEditRequest = {
    id?: number;
    tagName?: string;
  };

  type TagQueryRequest = {
    current?: number;
    id?: number;
    isParent?: number;
    pageSize?: number;
    parentId?: number;
    sortField?: string;
    sortOrder?: string;
    tagName?: string;
    userId?: number;
  };

  type TagUpdateRequest = {
    id?: number;
    idList?: number[];
    isParent?: number;
    parentId?: number;
    tagName?: string;
  };

  type TagVO = {
    createTime?: string;
    id?: number;
    isParent?: number;
    parentId?: number;
    tagName?: string;
    updateTime?: string;
    userId?: number;
    userVO?: UserVO;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    createTime?: string;
    id?: number;
    isDelete?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserAddRequest = {
    userAccount?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userRole?: string;
  };

  type UserEditRequest = {
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    mpOpenId?: string;
    notId?: number;
    pageSize?: number;
    searchText?: string;
    sortField?: string;
    sortOrder?: string;
    unionId?: string;
    userEmail?: string;
    userName?: string;
    userRole?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    userAccount?: string;
    userPassword?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userPassword?: string;
    userRole?: string;
  };

  type UserVO = {
    createTime?: string;
    id?: number;
    mpOpenId?: string;
    unionId?: string;
    updateTime?: string;
    userAvatar?: string;
    userEmail?: string;
    userName?: string;
    userRole?: string;
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
