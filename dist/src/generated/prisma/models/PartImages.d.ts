import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PartImagesModel = runtime.Types.Result.DefaultSelection<Prisma.$PartImagesPayload>;
export type AggregatePartImages = {
    _count: PartImagesCountAggregateOutputType | null;
    _avg: PartImagesAvgAggregateOutputType | null;
    _sum: PartImagesSumAggregateOutputType | null;
    _min: PartImagesMinAggregateOutputType | null;
    _max: PartImagesMaxAggregateOutputType | null;
};
export type PartImagesAvgAggregateOutputType = {
    id: number | null;
    partId: number | null;
};
export type PartImagesSumAggregateOutputType = {
    id: number | null;
    partId: number | null;
};
export type PartImagesMinAggregateOutputType = {
    id: number | null;
    partId: number | null;
    path: string | null;
    name: string | null;
    ripSelected: boolean | null;
    isDeletable: boolean | null;
};
export type PartImagesMaxAggregateOutputType = {
    id: number | null;
    partId: number | null;
    path: string | null;
    name: string | null;
    ripSelected: boolean | null;
    isDeletable: boolean | null;
};
export type PartImagesCountAggregateOutputType = {
    id: number;
    partId: number;
    path: number;
    name: number;
    ripSelected: number;
    isDeletable: number;
    _all: number;
};
export type PartImagesAvgAggregateInputType = {
    id?: true;
    partId?: true;
};
export type PartImagesSumAggregateInputType = {
    id?: true;
    partId?: true;
};
export type PartImagesMinAggregateInputType = {
    id?: true;
    partId?: true;
    path?: true;
    name?: true;
    ripSelected?: true;
    isDeletable?: true;
};
export type PartImagesMaxAggregateInputType = {
    id?: true;
    partId?: true;
    path?: true;
    name?: true;
    ripSelected?: true;
    isDeletable?: true;
};
export type PartImagesCountAggregateInputType = {
    id?: true;
    partId?: true;
    path?: true;
    name?: true;
    ripSelected?: true;
    isDeletable?: true;
    _all?: true;
};
export type PartImagesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartImagesWhereInput;
    orderBy?: Prisma.PartImagesOrderByWithRelationInput | Prisma.PartImagesOrderByWithRelationInput[];
    cursor?: Prisma.PartImagesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PartImagesCountAggregateInputType;
    _avg?: PartImagesAvgAggregateInputType;
    _sum?: PartImagesSumAggregateInputType;
    _min?: PartImagesMinAggregateInputType;
    _max?: PartImagesMaxAggregateInputType;
};
export type GetPartImagesAggregateType<T extends PartImagesAggregateArgs> = {
    [P in keyof T & keyof AggregatePartImages]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePartImages[P]> : Prisma.GetScalarType<T[P], AggregatePartImages[P]>;
};
export type PartImagesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartImagesWhereInput;
    orderBy?: Prisma.PartImagesOrderByWithAggregationInput | Prisma.PartImagesOrderByWithAggregationInput[];
    by: Prisma.PartImagesScalarFieldEnum[] | Prisma.PartImagesScalarFieldEnum;
    having?: Prisma.PartImagesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PartImagesCountAggregateInputType | true;
    _avg?: PartImagesAvgAggregateInputType;
    _sum?: PartImagesSumAggregateInputType;
    _min?: PartImagesMinAggregateInputType;
    _max?: PartImagesMaxAggregateInputType;
};
export type PartImagesGroupByOutputType = {
    id: number;
    partId: number;
    path: string;
    name: string | null;
    ripSelected: boolean;
    isDeletable: boolean;
    _count: PartImagesCountAggregateOutputType | null;
    _avg: PartImagesAvgAggregateOutputType | null;
    _sum: PartImagesSumAggregateOutputType | null;
    _min: PartImagesMinAggregateOutputType | null;
    _max: PartImagesMaxAggregateOutputType | null;
};
type GetPartImagesGroupByPayload<T extends PartImagesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PartImagesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PartImagesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PartImagesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PartImagesGroupByOutputType[P]>;
}>>;
export type PartImagesWhereInput = {
    AND?: Prisma.PartImagesWhereInput | Prisma.PartImagesWhereInput[];
    OR?: Prisma.PartImagesWhereInput[];
    NOT?: Prisma.PartImagesWhereInput | Prisma.PartImagesWhereInput[];
    id?: Prisma.IntFilter<"PartImages"> | number;
    partId?: Prisma.IntFilter<"PartImages"> | number;
    path?: Prisma.StringFilter<"PartImages"> | string;
    name?: Prisma.StringNullableFilter<"PartImages"> | string | null;
    ripSelected?: Prisma.BoolFilter<"PartImages"> | boolean;
    isDeletable?: Prisma.BoolFilter<"PartImages"> | boolean;
    Part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
};
export type PartImagesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    ripSelected?: Prisma.SortOrder;
    isDeletable?: Prisma.SortOrder;
    Part?: Prisma.PartOrderByWithRelationInput;
};
export type PartImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PartImagesWhereInput | Prisma.PartImagesWhereInput[];
    OR?: Prisma.PartImagesWhereInput[];
    NOT?: Prisma.PartImagesWhereInput | Prisma.PartImagesWhereInput[];
    partId?: Prisma.IntFilter<"PartImages"> | number;
    path?: Prisma.StringFilter<"PartImages"> | string;
    name?: Prisma.StringNullableFilter<"PartImages"> | string | null;
    ripSelected?: Prisma.BoolFilter<"PartImages"> | boolean;
    isDeletable?: Prisma.BoolFilter<"PartImages"> | boolean;
    Part?: Prisma.XOR<Prisma.PartScalarRelationFilter, Prisma.PartWhereInput>;
}, "id">;
export type PartImagesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    ripSelected?: Prisma.SortOrder;
    isDeletable?: Prisma.SortOrder;
    _count?: Prisma.PartImagesCountOrderByAggregateInput;
    _avg?: Prisma.PartImagesAvgOrderByAggregateInput;
    _max?: Prisma.PartImagesMaxOrderByAggregateInput;
    _min?: Prisma.PartImagesMinOrderByAggregateInput;
    _sum?: Prisma.PartImagesSumOrderByAggregateInput;
};
export type PartImagesScalarWhereWithAggregatesInput = {
    AND?: Prisma.PartImagesScalarWhereWithAggregatesInput | Prisma.PartImagesScalarWhereWithAggregatesInput[];
    OR?: Prisma.PartImagesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PartImagesScalarWhereWithAggregatesInput | Prisma.PartImagesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PartImages"> | number;
    partId?: Prisma.IntWithAggregatesFilter<"PartImages"> | number;
    path?: Prisma.StringWithAggregatesFilter<"PartImages"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"PartImages"> | string | null;
    ripSelected?: Prisma.BoolWithAggregatesFilter<"PartImages"> | boolean;
    isDeletable?: Prisma.BoolWithAggregatesFilter<"PartImages"> | boolean;
};
export type PartImagesCreateInput = {
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
    Part: Prisma.PartCreateNestedOneWithoutPartImagesInput;
};
export type PartImagesUncheckedCreateInput = {
    id?: number;
    partId: number;
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesUpdateInput = {
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    Part?: Prisma.PartUpdateOneRequiredWithoutPartImagesNestedInput;
};
export type PartImagesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    partId?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesCreateManyInput = {
    id?: number;
    partId: number;
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesUpdateManyMutationInput = {
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    partId?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesListRelationFilter = {
    every?: Prisma.PartImagesWhereInput;
    some?: Prisma.PartImagesWhereInput;
    none?: Prisma.PartImagesWhereInput;
};
export type PartImagesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PartImagesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ripSelected?: Prisma.SortOrder;
    isDeletable?: Prisma.SortOrder;
};
export type PartImagesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
};
export type PartImagesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ripSelected?: Prisma.SortOrder;
    isDeletable?: Prisma.SortOrder;
};
export type PartImagesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
    path?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    ripSelected?: Prisma.SortOrder;
    isDeletable?: Prisma.SortOrder;
};
export type PartImagesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    partId?: Prisma.SortOrder;
};
export type PartImagesCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput> | Prisma.PartImagesCreateWithoutPartInput[] | Prisma.PartImagesUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartImagesCreateOrConnectWithoutPartInput | Prisma.PartImagesCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PartImagesCreateManyPartInputEnvelope;
    connect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
};
export type PartImagesUncheckedCreateNestedManyWithoutPartInput = {
    create?: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput> | Prisma.PartImagesCreateWithoutPartInput[] | Prisma.PartImagesUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartImagesCreateOrConnectWithoutPartInput | Prisma.PartImagesCreateOrConnectWithoutPartInput[];
    createMany?: Prisma.PartImagesCreateManyPartInputEnvelope;
    connect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
};
export type PartImagesUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput> | Prisma.PartImagesCreateWithoutPartInput[] | Prisma.PartImagesUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartImagesCreateOrConnectWithoutPartInput | Prisma.PartImagesCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PartImagesUpsertWithWhereUniqueWithoutPartInput | Prisma.PartImagesUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PartImagesCreateManyPartInputEnvelope;
    set?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    disconnect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    delete?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    connect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    update?: Prisma.PartImagesUpdateWithWhereUniqueWithoutPartInput | Prisma.PartImagesUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PartImagesUpdateManyWithWhereWithoutPartInput | Prisma.PartImagesUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PartImagesScalarWhereInput | Prisma.PartImagesScalarWhereInput[];
};
export type PartImagesUncheckedUpdateManyWithoutPartNestedInput = {
    create?: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput> | Prisma.PartImagesCreateWithoutPartInput[] | Prisma.PartImagesUncheckedCreateWithoutPartInput[];
    connectOrCreate?: Prisma.PartImagesCreateOrConnectWithoutPartInput | Prisma.PartImagesCreateOrConnectWithoutPartInput[];
    upsert?: Prisma.PartImagesUpsertWithWhereUniqueWithoutPartInput | Prisma.PartImagesUpsertWithWhereUniqueWithoutPartInput[];
    createMany?: Prisma.PartImagesCreateManyPartInputEnvelope;
    set?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    disconnect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    delete?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    connect?: Prisma.PartImagesWhereUniqueInput | Prisma.PartImagesWhereUniqueInput[];
    update?: Prisma.PartImagesUpdateWithWhereUniqueWithoutPartInput | Prisma.PartImagesUpdateWithWhereUniqueWithoutPartInput[];
    updateMany?: Prisma.PartImagesUpdateManyWithWhereWithoutPartInput | Prisma.PartImagesUpdateManyWithWhereWithoutPartInput[];
    deleteMany?: Prisma.PartImagesScalarWhereInput | Prisma.PartImagesScalarWhereInput[];
};
export type PartImagesCreateWithoutPartInput = {
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesUncheckedCreateWithoutPartInput = {
    id?: number;
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesCreateOrConnectWithoutPartInput = {
    where: Prisma.PartImagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput>;
};
export type PartImagesCreateManyPartInputEnvelope = {
    data: Prisma.PartImagesCreateManyPartInput | Prisma.PartImagesCreateManyPartInput[];
    skipDuplicates?: boolean;
};
export type PartImagesUpsertWithWhereUniqueWithoutPartInput = {
    where: Prisma.PartImagesWhereUniqueInput;
    update: Prisma.XOR<Prisma.PartImagesUpdateWithoutPartInput, Prisma.PartImagesUncheckedUpdateWithoutPartInput>;
    create: Prisma.XOR<Prisma.PartImagesCreateWithoutPartInput, Prisma.PartImagesUncheckedCreateWithoutPartInput>;
};
export type PartImagesUpdateWithWhereUniqueWithoutPartInput = {
    where: Prisma.PartImagesWhereUniqueInput;
    data: Prisma.XOR<Prisma.PartImagesUpdateWithoutPartInput, Prisma.PartImagesUncheckedUpdateWithoutPartInput>;
};
export type PartImagesUpdateManyWithWhereWithoutPartInput = {
    where: Prisma.PartImagesScalarWhereInput;
    data: Prisma.XOR<Prisma.PartImagesUpdateManyMutationInput, Prisma.PartImagesUncheckedUpdateManyWithoutPartInput>;
};
export type PartImagesScalarWhereInput = {
    AND?: Prisma.PartImagesScalarWhereInput | Prisma.PartImagesScalarWhereInput[];
    OR?: Prisma.PartImagesScalarWhereInput[];
    NOT?: Prisma.PartImagesScalarWhereInput | Prisma.PartImagesScalarWhereInput[];
    id?: Prisma.IntFilter<"PartImages"> | number;
    partId?: Prisma.IntFilter<"PartImages"> | number;
    path?: Prisma.StringFilter<"PartImages"> | string;
    name?: Prisma.StringNullableFilter<"PartImages"> | string | null;
    ripSelected?: Prisma.BoolFilter<"PartImages"> | boolean;
    isDeletable?: Prisma.BoolFilter<"PartImages"> | boolean;
};
export type PartImagesCreateManyPartInput = {
    id?: number;
    path: string;
    name?: string | null;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesUpdateWithoutPartInput = {
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesUncheckedUpdateWithoutPartInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesUncheckedUpdateManyWithoutPartInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    path?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ripSelected?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isDeletable?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PartImagesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    path?: boolean;
    name?: boolean;
    ripSelected?: boolean;
    isDeletable?: boolean;
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partImages"]>;
export type PartImagesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    path?: boolean;
    name?: boolean;
    ripSelected?: boolean;
    isDeletable?: boolean;
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partImages"]>;
export type PartImagesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    partId?: boolean;
    path?: boolean;
    name?: boolean;
    ripSelected?: boolean;
    isDeletable?: boolean;
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["partImages"]>;
export type PartImagesSelectScalar = {
    id?: boolean;
    partId?: boolean;
    path?: boolean;
    name?: boolean;
    ripSelected?: boolean;
    isDeletable?: boolean;
};
export type PartImagesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "partId" | "path" | "name" | "ripSelected" | "isDeletable", ExtArgs["result"]["partImages"]>;
export type PartImagesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type PartImagesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type PartImagesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Part?: boolean | Prisma.PartDefaultArgs<ExtArgs>;
};
export type $PartImagesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PartImages";
    objects: {
        Part: Prisma.$PartPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        partId: number;
        path: string;
        name: string | null;
        ripSelected: boolean;
        isDeletable: boolean;
    }, ExtArgs["result"]["partImages"]>;
    composites: {};
};
export type PartImagesGetPayload<S extends boolean | null | undefined | PartImagesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PartImagesPayload, S>;
export type PartImagesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PartImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PartImagesCountAggregateInputType | true;
};
export interface PartImagesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PartImages'];
        meta: {
            name: 'PartImages';
        };
    };
    findUnique<T extends PartImagesFindUniqueArgs>(args: Prisma.SelectSubset<T, PartImagesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PartImagesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PartImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PartImagesFindFirstArgs>(args?: Prisma.SelectSubset<T, PartImagesFindFirstArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PartImagesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PartImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PartImagesFindManyArgs>(args?: Prisma.SelectSubset<T, PartImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PartImagesCreateArgs>(args: Prisma.SelectSubset<T, PartImagesCreateArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PartImagesCreateManyArgs>(args?: Prisma.SelectSubset<T, PartImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PartImagesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PartImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PartImagesDeleteArgs>(args: Prisma.SelectSubset<T, PartImagesDeleteArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PartImagesUpdateArgs>(args: Prisma.SelectSubset<T, PartImagesUpdateArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PartImagesDeleteManyArgs>(args?: Prisma.SelectSubset<T, PartImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PartImagesUpdateManyArgs>(args: Prisma.SelectSubset<T, PartImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PartImagesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PartImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PartImagesUpsertArgs>(args: Prisma.SelectSubset<T, PartImagesUpsertArgs<ExtArgs>>): Prisma.Prisma__PartImagesClient<runtime.Types.Result.GetResult<Prisma.$PartImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PartImagesCountArgs>(args?: Prisma.Subset<T, PartImagesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PartImagesCountAggregateOutputType> : number>;
    aggregate<T extends PartImagesAggregateArgs>(args: Prisma.Subset<T, PartImagesAggregateArgs>): Prisma.PrismaPromise<GetPartImagesAggregateType<T>>;
    groupBy<T extends PartImagesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PartImagesGroupByArgs['orderBy'];
    } : {
        orderBy?: PartImagesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PartImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PartImagesFieldRefs;
}
export interface Prisma__PartImagesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Part<T extends Prisma.PartDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PartDefaultArgs<ExtArgs>>): Prisma.Prisma__PartClient<runtime.Types.Result.GetResult<Prisma.$PartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PartImagesFieldRefs {
    readonly id: Prisma.FieldRef<"PartImages", 'Int'>;
    readonly partId: Prisma.FieldRef<"PartImages", 'Int'>;
    readonly path: Prisma.FieldRef<"PartImages", 'String'>;
    readonly name: Prisma.FieldRef<"PartImages", 'String'>;
    readonly ripSelected: Prisma.FieldRef<"PartImages", 'Boolean'>;
    readonly isDeletable: Prisma.FieldRef<"PartImages", 'Boolean'>;
}
export type PartImagesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    where: Prisma.PartImagesWhereUniqueInput;
};
export type PartImagesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    where: Prisma.PartImagesWhereUniqueInput;
};
export type PartImagesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PartImagesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PartImagesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PartImagesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartImagesCreateInput, Prisma.PartImagesUncheckedCreateInput>;
};
export type PartImagesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PartImagesCreateManyInput | Prisma.PartImagesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PartImagesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    data: Prisma.PartImagesCreateManyInput | Prisma.PartImagesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PartImagesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PartImagesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartImagesUpdateInput, Prisma.PartImagesUncheckedUpdateInput>;
    where: Prisma.PartImagesWhereUniqueInput;
};
export type PartImagesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PartImagesUpdateManyMutationInput, Prisma.PartImagesUncheckedUpdateManyInput>;
    where?: Prisma.PartImagesWhereInput;
    limit?: number;
};
export type PartImagesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PartImagesUpdateManyMutationInput, Prisma.PartImagesUncheckedUpdateManyInput>;
    where?: Prisma.PartImagesWhereInput;
    limit?: number;
    include?: Prisma.PartImagesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PartImagesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    where: Prisma.PartImagesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PartImagesCreateInput, Prisma.PartImagesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PartImagesUpdateInput, Prisma.PartImagesUncheckedUpdateInput>;
};
export type PartImagesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
    where: Prisma.PartImagesWhereUniqueInput;
};
export type PartImagesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PartImagesWhereInput;
    limit?: number;
};
export type PartImagesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PartImagesSelect<ExtArgs> | null;
    omit?: Prisma.PartImagesOmit<ExtArgs> | null;
    include?: Prisma.PartImagesInclude<ExtArgs> | null;
};
export {};
