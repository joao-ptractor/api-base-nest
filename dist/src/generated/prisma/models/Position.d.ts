import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PositionModel = runtime.Types.Result.DefaultSelection<Prisma.$PositionPayload>;
export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null;
    _avg: PositionAvgAggregateOutputType | null;
    _sum: PositionSumAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
};
export type PositionAvgAggregateOutputType = {
    id: number | null;
};
export type PositionSumAggregateOutputType = {
    id: number | null;
};
export type PositionMinAggregateOutputType = {
    id: number | null;
    value: string | null;
    name: string | null;
    normalizedName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PositionMaxAggregateOutputType = {
    id: number | null;
    value: string | null;
    name: string | null;
    normalizedName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PositionCountAggregateOutputType = {
    id: number;
    value: number;
    name: number;
    normalizedName: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PositionAvgAggregateInputType = {
    id?: true;
};
export type PositionSumAggregateInputType = {
    id?: true;
};
export type PositionMinAggregateInputType = {
    id?: true;
    value?: true;
    name?: true;
    normalizedName?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PositionMaxAggregateInputType = {
    id?: true;
    value?: true;
    name?: true;
    normalizedName?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PositionCountAggregateInputType = {
    id?: true;
    value?: true;
    name?: true;
    normalizedName?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PositionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PositionCountAggregateInputType;
    _avg?: PositionAvgAggregateInputType;
    _sum?: PositionSumAggregateInputType;
    _min?: PositionMinAggregateInputType;
    _max?: PositionMaxAggregateInputType;
};
export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
    [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePosition[P]> : Prisma.GetScalarType<T[P], AggregatePosition[P]>;
};
export type PositionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithAggregationInput | Prisma.PositionOrderByWithAggregationInput[];
    by: Prisma.PositionScalarFieldEnum[] | Prisma.PositionScalarFieldEnum;
    having?: Prisma.PositionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PositionCountAggregateInputType | true;
    _avg?: PositionAvgAggregateInputType;
    _sum?: PositionSumAggregateInputType;
    _min?: PositionMinAggregateInputType;
    _max?: PositionMaxAggregateInputType;
};
export type PositionGroupByOutputType = {
    id: number;
    value: string;
    name: string;
    normalizedName: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PositionCountAggregateOutputType | null;
    _avg: PositionAvgAggregateOutputType | null;
    _sum: PositionSumAggregateOutputType | null;
    _min: PositionMinAggregateOutputType | null;
    _max: PositionMaxAggregateOutputType | null;
};
type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PositionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PositionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PositionGroupByOutputType[P]>;
}>>;
export type PositionWhereInput = {
    AND?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    OR?: Prisma.PositionWhereInput[];
    NOT?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    id?: Prisma.IntFilter<"Position"> | number;
    value?: Prisma.StringFilter<"Position"> | string;
    name?: Prisma.StringFilter<"Position"> | string;
    normalizedName?: Prisma.StringFilter<"Position"> | string;
    createdAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    Designation?: Prisma.DesignationListRelationFilter;
};
export type PositionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    Designation?: Prisma.DesignationOrderByRelationAggregateInput;
};
export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    normalizedName?: string;
    AND?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    OR?: Prisma.PositionWhereInput[];
    NOT?: Prisma.PositionWhereInput | Prisma.PositionWhereInput[];
    value?: Prisma.StringFilter<"Position"> | string;
    name?: Prisma.StringFilter<"Position"> | string;
    createdAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Position"> | Date | string;
    Designation?: Prisma.DesignationListRelationFilter;
}, "id" | "normalizedName">;
export type PositionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PositionCountOrderByAggregateInput;
    _avg?: Prisma.PositionAvgOrderByAggregateInput;
    _max?: Prisma.PositionMaxOrderByAggregateInput;
    _min?: Prisma.PositionMinOrderByAggregateInput;
    _sum?: Prisma.PositionSumOrderByAggregateInput;
};
export type PositionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PositionScalarWhereWithAggregatesInput | Prisma.PositionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PositionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PositionScalarWhereWithAggregatesInput | Prisma.PositionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Position"> | number;
    value?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    normalizedName?: Prisma.StringWithAggregatesFilter<"Position"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Position"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Position"> | Date | string;
};
export type PositionCreateInput = {
    value: string;
    name: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationCreateNestedManyWithoutPositionInput;
};
export type PositionUncheckedCreateInput = {
    id?: number;
    value: string;
    name: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    Designation?: Prisma.DesignationUncheckedCreateNestedManyWithoutPositionInput;
};
export type PositionUpdateInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUpdateManyWithoutPositionNestedInput;
};
export type PositionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    Designation?: Prisma.DesignationUncheckedUpdateManyWithoutPositionNestedInput;
};
export type PositionCreateManyInput = {
    id?: number;
    value: string;
    name: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PositionUpdateManyMutationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PositionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PositionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PositionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    normalizedName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PositionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PositionScalarRelationFilter = {
    is?: Prisma.PositionWhereInput;
    isNot?: Prisma.PositionWhereInput;
};
export type PositionCreateNestedOneWithoutDesignationInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutDesignationInput, Prisma.PositionUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutDesignationInput;
    connect?: Prisma.PositionWhereUniqueInput;
};
export type PositionUpdateOneRequiredWithoutDesignationNestedInput = {
    create?: Prisma.XOR<Prisma.PositionCreateWithoutDesignationInput, Prisma.PositionUncheckedCreateWithoutDesignationInput>;
    connectOrCreate?: Prisma.PositionCreateOrConnectWithoutDesignationInput;
    upsert?: Prisma.PositionUpsertWithoutDesignationInput;
    connect?: Prisma.PositionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PositionUpdateToOneWithWhereWithoutDesignationInput, Prisma.PositionUpdateWithoutDesignationInput>, Prisma.PositionUncheckedUpdateWithoutDesignationInput>;
};
export type PositionCreateWithoutDesignationInput = {
    value: string;
    name: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PositionUncheckedCreateWithoutDesignationInput = {
    id?: number;
    value: string;
    name: string;
    normalizedName: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PositionCreateOrConnectWithoutDesignationInput = {
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateWithoutDesignationInput, Prisma.PositionUncheckedCreateWithoutDesignationInput>;
};
export type PositionUpsertWithoutDesignationInput = {
    update: Prisma.XOR<Prisma.PositionUpdateWithoutDesignationInput, Prisma.PositionUncheckedUpdateWithoutDesignationInput>;
    create: Prisma.XOR<Prisma.PositionCreateWithoutDesignationInput, Prisma.PositionUncheckedCreateWithoutDesignationInput>;
    where?: Prisma.PositionWhereInput;
};
export type PositionUpdateToOneWithWhereWithoutDesignationInput = {
    where?: Prisma.PositionWhereInput;
    data: Prisma.XOR<Prisma.PositionUpdateWithoutDesignationInput, Prisma.PositionUncheckedUpdateWithoutDesignationInput>;
};
export type PositionUpdateWithoutDesignationInput = {
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionUncheckedUpdateWithoutDesignationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    normalizedName?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PositionCountOutputType = {
    Designation: number;
};
export type PositionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Designation?: boolean | PositionCountOutputTypeCountDesignationArgs;
};
export type PositionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionCountOutputTypeSelect<ExtArgs> | null;
};
export type PositionCountOutputTypeCountDesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DesignationWhereInput;
};
export type PositionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    name?: boolean;
    normalizedName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    Designation?: boolean | Prisma.Position$DesignationArgs<ExtArgs>;
    _count?: boolean | Prisma.PositionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["position"]>;
export type PositionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    name?: boolean;
    normalizedName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["position"]>;
export type PositionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    name?: boolean;
    normalizedName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["position"]>;
export type PositionSelectScalar = {
    id?: boolean;
    value?: boolean;
    name?: boolean;
    normalizedName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PositionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "value" | "name" | "normalizedName" | "createdAt" | "updatedAt", ExtArgs["result"]["position"]>;
export type PositionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    Designation?: boolean | Prisma.Position$DesignationArgs<ExtArgs>;
    _count?: boolean | Prisma.PositionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PositionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PositionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PositionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Position";
    objects: {
        Designation: Prisma.$DesignationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        value: string;
        name: string;
        normalizedName: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["position"]>;
    composites: {};
};
export type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PositionPayload, S>;
export type PositionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PositionCountAggregateInputType | true;
};
export interface PositionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Position'];
        meta: {
            name: 'Position';
        };
    };
    findUnique<T extends PositionFindUniqueArgs>(args: Prisma.SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PositionFindFirstArgs>(args?: Prisma.SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PositionFindManyArgs>(args?: Prisma.SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PositionCreateArgs>(args: Prisma.SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PositionCreateManyArgs>(args?: Prisma.SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PositionDeleteArgs>(args: Prisma.SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PositionUpdateArgs>(args: Prisma.SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PositionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PositionUpdateManyArgs>(args: Prisma.SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PositionUpsertArgs>(args: Prisma.SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma.Prisma__PositionClient<runtime.Types.Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PositionCountArgs>(args?: Prisma.Subset<T, PositionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PositionCountAggregateOutputType> : number>;
    aggregate<T extends PositionAggregateArgs>(args: Prisma.Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>;
    groupBy<T extends PositionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PositionGroupByArgs['orderBy'];
    } : {
        orderBy?: PositionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PositionFieldRefs;
}
export interface Prisma__PositionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    Designation<T extends Prisma.Position$DesignationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Position$DesignationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DesignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PositionFieldRefs {
    readonly id: Prisma.FieldRef<"Position", 'Int'>;
    readonly value: Prisma.FieldRef<"Position", 'String'>;
    readonly name: Prisma.FieldRef<"Position", 'String'>;
    readonly normalizedName: Prisma.FieldRef<"Position", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Position", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Position", 'DateTime'>;
}
export type PositionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where?: Prisma.PositionWhereInput;
    orderBy?: Prisma.PositionOrderByWithRelationInput | Prisma.PositionOrderByWithRelationInput[];
    cursor?: Prisma.PositionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PositionScalarFieldEnum | Prisma.PositionScalarFieldEnum[];
};
export type PositionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionCreateInput, Prisma.PositionUncheckedCreateInput>;
};
export type PositionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PositionCreateManyInput | Prisma.PositionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PositionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    data: Prisma.PositionCreateManyInput | Prisma.PositionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PositionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionUpdateInput, Prisma.PositionUncheckedUpdateInput>;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PositionUpdateManyMutationInput, Prisma.PositionUncheckedUpdateManyInput>;
    where?: Prisma.PositionWhereInput;
    limit?: number;
};
export type PositionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PositionUpdateManyMutationInput, Prisma.PositionUncheckedUpdateManyInput>;
    where?: Prisma.PositionWhereInput;
    limit?: number;
};
export type PositionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PositionCreateInput, Prisma.PositionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PositionUpdateInput, Prisma.PositionUncheckedUpdateInput>;
};
export type PositionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
    where: Prisma.PositionWhereUniqueInput;
};
export type PositionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PositionWhereInput;
    limit?: number;
};
export type Position$DesignationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DesignationSelect<ExtArgs> | null;
    omit?: Prisma.DesignationOmit<ExtArgs> | null;
    include?: Prisma.DesignationInclude<ExtArgs> | null;
    where?: Prisma.DesignationWhereInput;
    orderBy?: Prisma.DesignationOrderByWithRelationInput | Prisma.DesignationOrderByWithRelationInput[];
    cursor?: Prisma.DesignationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DesignationScalarFieldEnum | Prisma.DesignationScalarFieldEnum[];
};
export type PositionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PositionSelect<ExtArgs> | null;
    omit?: Prisma.PositionOmit<ExtArgs> | null;
    include?: Prisma.PositionInclude<ExtArgs> | null;
};
export {};
