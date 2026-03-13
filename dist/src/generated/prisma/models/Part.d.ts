import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PartModel = runtime.Types.Result.DefaultSelection<Prisma.$PartPayload>;
export type AggregatePart = {
    _count: PartCountAggregateOutputType | null;
    _avg: PartAvgAggregateOutputType | null;
    _sum: PartSumAggregateOutputType | null;
    _min: PartMinAggregateOutputType | null;
    _max: PartMaxAggregateOutputType | null;
};
export type PartAvgAggregateOutputType = {
    id: number | null;
};
export type PartSumAggregateOutputType = {
    id: number | null;
};
export type PartMinAggregateOutputType = {
    id: number | null;
    partCode: string | null;
    partNumber: string | null;
    description: string | null;
    group: string | null;
    client: string | null;
    serverPath: string | null;
    localPath: string | null;
    review: string | null;
    reviewChanged: boolean | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartMaxAggregateOutputType = {
    id: number | null;
    partCode: string | null;
    partNumber: string | null;
    description: string | null;
    group: string | null;
    client: string | null;
    serverPath: string | null;
    localPath: string | null;
    review: string | null;
    reviewChanged: boolean | null;
    status: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PartCountAggregateOutputType = {
    id: number;
    partCode: number;
    partNumber: number;
    description: number;
    group: number;
    client: number;
    serverPath: number;
    localPath: number;
    review: number;
    reviewChanged: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PartAvgAggregateInputType = {
    id?: true;
};
export type PartSumAggregateInputType = {
    id?: true;
};
export type PartMinAggregateInputType = {
    id?: true;
    partCode?: true;
    partNumber?: true;
    description?: true;
    group?: true;
    client?: true;
    serverPath?: true;
    localPath?: true;
    review?: true;
    reviewChanged?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartMaxAggregateInputType = {
    id?: true;
    partCode?: true;
    partNumber?: true;
    description?: true;
    group?: true;
    client?: true;
    serverPath?: true;
    localPath?: true;
    review?: true;
    reviewChanged?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PartCountAggregateInputType = {
    id?: true;
    partCode?: true;
    partNumber?: true;
    description?: true;
    group?: true;
    client?: true;
    serverPath?: true;
    localPath?: true;
    review?: true;
    reviewChanged?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PartAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    cursor?: Prisma.PartWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartCountAggregateInputType;
    _avg?: PartAvgAggregateInputType;
    _sum?: PartSumAggregateInputType;
    _min?: PartMinAggregateInputType;
    _max?: PartMaxAggregateInputType;
};
export type GetPartAggregateType<T extends PartAggregateArgs> = {
    [P in keyof T & keyof AggregatePart]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePart[P]> : Prisma.GetScalarType<T[P], AggregatePart[P]>;
};
export type PartGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithAggregationInput | Prisma.PartOrderByWithAggregationInput[];
    by: Prisma.PartScalarFieldEnum[] | Prisma.PartScalarFieldEnum;
    having?: Prisma.PartScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartCountAggregateInputType | true;
    _avg?: PartAvgAggregateInputType;
    _sum?: PartSumAggregateInputType;
    _min?: PartMinAggregateInputType;
    _max?: PartMaxAggregateInputType;
};
export type PartGroupByOutputType = {
    id: number;
    partCode: string;
    partNumber: string;
    description: string | null;
    group: string;
    client: string | null;
    serverPath: string | null;
    localPath: string | null;
    review: string | null;
    reviewChanged: boolean;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: PartCountAggregateOutputType | null;
    _avg: PartAvgAggregateOutputType | null;
    _sum: PartSumAggregateOutputType | null;
    _min: PartMinAggregateOutputType | null;
    _max: PartMaxAggregateOutputType | null;
};
type GetPartGroupByPayload<T extends PartGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartGroupByOutputType[P]>;
}>>;
export type PartWhereInput = {
    AND?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    OR?: Prisma.PartWhereInput[];
    NOT?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    id?: Prisma.IntFilter<"Part"> | number;
    partCode?: Prisma.StringFilter<"Part"> | string;
    partNumber?: Prisma.StringFilter<"Part"> | string;
    description?: Prisma.StringNullableFilter<"Part"> | string | null;
    group?: Prisma.StringFilter<"Part"> | string;
    client?: Prisma.StringNullableFilter<"Part"> | string | null;
    serverPath?: Prisma.StringNullableFilter<"Part"> | string | null;
    localPath?: Prisma.StringNullableFilter<"Part"> | string | null;
    review?: Prisma.StringNullableFilter<"Part"> | string | null;
    reviewChanged?: Prisma.BoolFilter<"Part"> | boolean;
    status?: Prisma.BoolFilter<"Part"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    PartImages?: Prisma.PartImagesListRelationFilter;
};
export type PartOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partCode?: Prisma.SortOrder;
    partNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    group?: Prisma.SortOrder;
    client?: Prisma.SortOrderInput | Prisma.SortOrder;
    serverPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    localPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    review?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewChanged?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    PartImages?: Prisma.PartImagesOrderByRelationAggregateInput;
};
export type PartWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    partCode?: string;
    AND?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    OR?: Prisma.PartWhereInput[];
    NOT?: Prisma.PartWhereInput | Prisma.PartWhereInput[];
    partNumber?: Prisma.StringFilter<"Part"> | string;
    description?: Prisma.StringNullableFilter<"Part"> | string | null;
    group?: Prisma.StringFilter<"Part"> | string;
    client?: Prisma.StringNullableFilter<"Part"> | string | null;
    serverPath?: Prisma.StringNullableFilter<"Part"> | string | null;
    localPath?: Prisma.StringNullableFilter<"Part"> | string | null;
    review?: Prisma.StringNullableFilter<"Part"> | string | null;
    reviewChanged?: Prisma.BoolFilter<"Part"> | boolean;
    status?: Prisma.BoolFilter<"Part"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Part"> | Date | string;
    PartImages?: Prisma.PartImagesListRelationFilter;
}, "id" | "partCode">;
export type PartOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partCode?: Prisma.SortOrder;
    partNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    group?: Prisma.SortOrder;
    client?: Prisma.SortOrderInput | Prisma.SortOrder;
    serverPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    localPath?: Prisma.SortOrderInput | Prisma.SortOrder;
    review?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewChanged?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PartCountOrderByAggregateInput;
    _avg?: Prisma.PartAvgOrderByAggregateInput;
    _max?: Prisma.PartMaxOrderByAggregateInput;
    _min?: Prisma.PartMinOrderByAggregateInput;
    _sum?: Prisma.PartSumOrderByAggregateInput;
};
export type PartScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartScalarWhereWithAggregatesInput | Prisma.PartScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartScalarWhereWithAggregatesInput | Prisma.PartScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Part"> | number;
    partCode?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    partNumber?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    group?: Prisma.StringWithAggregatesFilter<"Part"> | string;
    client?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    serverPath?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    localPath?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    review?: Prisma.StringNullableWithAggregatesFilter<"Part"> | string | null;
    reviewChanged?: Prisma.BoolWithAggregatesFilter<"Part"> | boolean;
    status?: Prisma.BoolWithAggregatesFilter<"Part"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Part"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Part"> | Date | string;
};
export type PartCreateInput = {
    partCode: string;
    partNumber: string;
    description?: string | null;
    group: string;
    client?: string | null;
    serverPath?: string | null;
    localPath?: string | null;
    review?: string | null;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    PartImages?: Prisma.PartImagesCreateNestedManyWithoutPartInput;
};
export type PartUncheckedCreateInput = {
    id?: number;
    partCode: string;
    partNumber: string;
    description?: string | null;
    group: string;
    client?: string | null;
    serverPath?: string | null;
    localPath?: string | null;
    review?: string | null;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    PartImages?: Prisma.PartImagesUncheckedCreateNestedManyWithoutPartInput;
};
export type PartUpdateInput = {
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    PartImages?: Prisma.PartImagesUpdateManyWithoutPartNestedInput;
};
export type PartUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    PartImages?: Prisma.PartImagesUncheckedUpdateManyWithoutPartNestedInput;
};
export type PartCreateManyInput = {
    id?: number;
    partCode: string;
    partNumber: string;
    description?: string | null;
    group: string;
    client?: string | null;
    serverPath?: string | null;
    localPath?: string | null;
    review?: string | null;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartUpdateManyMutationInput = {
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partCode?: Prisma.SortOrder;
    partNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    client?: Prisma.SortOrder;
    serverPath?: Prisma.SortOrder;
    localPath?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    reviewChanged?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PartMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partCode?: Prisma.SortOrder;
    partNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    client?: Prisma.SortOrder;
    serverPath?: Prisma.SortOrder;
    localPath?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    reviewChanged?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partCode?: Prisma.SortOrder;
    partNumber?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    group?: Prisma.SortOrder;
    client?: Prisma.SortOrder;
    serverPath?: Prisma.SortOrder;
    localPath?: Prisma.SortOrder;
    review?: Prisma.SortOrder;
    reviewChanged?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PartSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PartScalarRelationFilter = {
    is?: Prisma.PartWhereInput;
    isNot?: Prisma.PartWhereInput;
};
export type PartCreateNestedOneWithoutPartImagesInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutPartImagesInput, Prisma.PartUncheckedCreateWithoutPartImagesInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutPartImagesInput;
    connect?: Prisma.PartWhereUniqueInput;
};
export type PartUpdateOneRequiredWithoutPartImagesNestedInput = {
    create?: Prisma.XOR<Prisma.PartCreateWithoutPartImagesInput, Prisma.PartUncheckedCreateWithoutPartImagesInput>;
    connectOrCreate?: Prisma.PartCreateOrConnectWithoutPartImagesInput;
    upsert?: Prisma.PartUpsertWithoutPartImagesInput;
    connect?: Prisma.PartWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PartUpdateToOneWithWhereWithoutPartImagesInput, Prisma.PartUpdateWithoutPartImagesInput>, Prisma.PartUncheckedUpdateWithoutPartImagesInput>;
};
export type PartCreateWithoutPartImagesInput = {
    partCode: string;
    partNumber: string;
    description?: string | null;
    group: string;
    client?: string | null;
    serverPath?: string | null;
    localPath?: string | null;
    review?: string | null;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartUncheckedCreateWithoutPartImagesInput = {
    id?: number;
    partCode: string;
    partNumber: string;
    description?: string | null;
    group: string;
    client?: string | null;
    serverPath?: string | null;
    localPath?: string | null;
    review?: string | null;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PartCreateOrConnectWithoutPartImagesInput = {
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateWithoutPartImagesInput, Prisma.PartUncheckedCreateWithoutPartImagesInput>;
};
export type PartUpsertWithoutPartImagesInput = {
    update: Prisma.XOR<Prisma.PartUpdateWithoutPartImagesInput, Prisma.PartUncheckedUpdateWithoutPartImagesInput>;
    create: Prisma.XOR<Prisma.PartCreateWithoutPartImagesInput, Prisma.PartUncheckedCreateWithoutPartImagesInput>;
    where?: Prisma.PartWhereInput;
};
export type PartUpdateToOneWithWhereWithoutPartImagesInput = {
    where?: Prisma.PartWhereInput;
    data: Prisma.XOR<Prisma.PartUpdateWithoutPartImagesInput, Prisma.PartUncheckedUpdateWithoutPartImagesInput>;
};
export type PartUpdateWithoutPartImagesInput = {
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartUncheckedUpdateWithoutPartImagesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    partCode?: Prisma.StringFieldUpdateOperationsInput | string;
    partNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    group?: Prisma.StringFieldUpdateOperationsInput | string;
    client?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    serverPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localPath?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    review?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewChanged?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PartCountOutputType = {
    PartImages: number;
};
export type PartCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PartImages?: boolean | PartCountOutputTypeCountPartImagesArgs;
};
export type PartCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartCountOutputTypeSelect<ExtArgs> | null;
};
export type PartCountOutputTypeCountPartImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartImagesWhereInput;
};
export type PartSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partCode?: boolean;
    partNumber?: boolean;
    description?: boolean;
    group?: boolean;
    client?: boolean;
    serverPath?: boolean;
    localPath?: boolean;
    review?: boolean;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    PartImages?: boolean | Prisma.Part$PartImagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PartCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["part"]>;
export type PartSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partCode?: boolean;
    partNumber?: boolean;
    description?: boolean;
    group?: boolean;
    client?: boolean;
    serverPath?: boolean;
    localPath?: boolean;
    review?: boolean;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["part"]>;
export type PartSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partCode?: boolean;
    partNumber?: boolean;
    description?: boolean;
    group?: boolean;
    client?: boolean;
    serverPath?: boolean;
    localPath?: boolean;
    review?: boolean;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["part"]>;
export type PartSelectScalar = {
    id?: boolean;
    partCode?: boolean;
    partNumber?: boolean;
    description?: boolean;
    group?: boolean;
    client?: boolean;
    serverPath?: boolean;
    localPath?: boolean;
    review?: boolean;
    reviewChanged?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PartOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partCode" | "partNumber" | "description" | "group" | "client" | "serverPath" | "localPath" | "review" | "reviewChanged" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["part"]>;
export type PartInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    PartImages?: boolean | Prisma.Part$PartImagesArgs<ExtArgs>;
    _count?: boolean | Prisma.PartCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PartIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PartIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PartPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Part";
    objects: {
        PartImages: Prisma.$PartImagesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        partCode: string;
        partNumber: string;
        description: string | null;
        group: string;
        client: string | null;
        serverPath: string | null;
        localPath: string | null;
        review: string | null;
        reviewChanged: boolean;
        status: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["part"]>;
    composites: {};
};
export type PartGetPayload<S extends boolean | null | undefined | PartDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartPayload, S>;
export type PartCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartCountAggregateInputType | true;
};
export interface PartDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Part'];
        meta: {
            name: 'Part';
        };
    };
    findUnique<T extends PartFindUniqueArgs>(args: Prisma.SelectSubset<T, PartFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartFindFirstArgs>(args?: Prisma.SelectSubset<T, PartFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartFindManyArgs>(args?: Prisma.SelectSubset<T, PartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartCreateArgs>(args: Prisma.SelectSubset<T, PartCreateArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartCreateManyArgs>(args?: Prisma.SelectSubset<T, PartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartDeleteArgs>(args: Prisma.SelectSubset<T, PartDeleteArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartUpdateArgs>(args: Prisma.SelectSubset<T, PartUpdateArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartUpdateManyArgs>(args: Prisma.SelectSubset<T, PartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartUpsertArgs>(args: Prisma.SelectSubset<T, PartUpsertArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartCountArgs>(args?: Prisma.Subset<T, PartCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartCountAggregateOutputType> : number>;
    aggregate<T extends PartAggregateArgs>(args: Prisma.Subset<T, PartAggregateArgs>): Prisma.PrismaPromise<GetPartAggregateType<T>>;
    groupBy<T extends PartGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartGroupByArgs['orderBy'];
    } : {
        orderBy?: PartGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartFieldRefs;
}
export interface Prisma__PartClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    PartImages<T extends Prisma.Part$PartImagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Part$PartImagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartFieldRefs {
    readonly id: Prisma.FieldRef<"Part", 'Int'>;
    readonly partCode: Prisma.FieldRef<"Part", 'String'>;
    readonly partNumber: Prisma.FieldRef<"Part", 'String'>;
    readonly description: Prisma.FieldRef<"Part", 'String'>;
    readonly group: Prisma.FieldRef<"Part", 'String'>;
    readonly client: Prisma.FieldRef<"Part", 'String'>;
    readonly serverPath: Prisma.FieldRef<"Part", 'String'>;
    readonly localPath: Prisma.FieldRef<"Part", 'String'>;
    readonly review: Prisma.FieldRef<"Part", 'String'>;
    readonly reviewChanged: Prisma.FieldRef<"Part", 'Boolean'>;
    readonly status: Prisma.FieldRef<"Part", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Part", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Part", 'DateTime'>;
}
export type PartFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where: Prisma.PartWhereUniqueInput;
};
export type PartFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where: Prisma.PartWhereUniqueInput;
};
export type PartFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    cursor?: Prisma.PartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
export type PartFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    cursor?: Prisma.PartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
export type PartFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where?: Prisma.PartWhereInput;
    orderBy?: Prisma.PartOrderByWithRelationInput | Prisma.PartOrderByWithRelationInput[];
    cursor?: Prisma.PartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartScalarFieldEnum | Prisma.PartScalarFieldEnum[];
};
export type PartCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartCreateInput, Prisma.PartUncheckedCreateInput>;
};
export type PartCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartCreateManyInput | Prisma.PartCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    data: Prisma.PartCreateManyInput | Prisma.PartCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartUpdateInput, Prisma.PartUncheckedUpdateInput>;
    where: Prisma.PartWhereUniqueInput;
};
export type PartUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartUpdateManyMutationInput, Prisma.PartUncheckedUpdateManyInput>;
    where?: Prisma.PartWhereInput;
    limit?: number;
};
export type PartUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartUpdateManyMutationInput, Prisma.PartUncheckedUpdateManyInput>;
    where?: Prisma.PartWhereInput;
    limit?: number;
};
export type PartUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where: Prisma.PartWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartCreateInput, Prisma.PartUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartUpdateInput, Prisma.PartUncheckedUpdateInput>;
};
export type PartDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
    where: Prisma.PartWhereUniqueInput;
};
export type PartDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartWhereInput;
    limit?: number;
};
export type Part$PartImagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    where?: Prisma.PartImagesWhereInput;
    orderBy?: Prisma.PartImagesOrderByWithRelationInput | Prisma.PartImagesOrderByWithRelationInput[];
    cursor?: Prisma.PartImagesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PartImagesScalarFieldEnum | Prisma.PartImagesScalarFieldEnum[];
};
export type PartDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartSelect<ExtArgs> | null;
    omit?: Prisma.PartOmit<ExtArgs> | null;
    include?: Prisma.PartInclude<ExtArgs> | null;
};
export {};
