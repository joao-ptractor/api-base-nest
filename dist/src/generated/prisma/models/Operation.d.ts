import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type OperationModel = runtime.Types.Result.DefaultSelection<Prisma.$OperationPayload>;
export type AggregateOperation = {
    _count: OperationCountAggregateOutputType | null;
    _avg: OperationAvgAggregateOutputType | null;
    _sum: OperationSumAggregateOutputType | null;
    _min: OperationMinAggregateOutputType | null;
    _max: OperationMaxAggregateOutputType | null;
};
export type OperationAvgAggregateOutputType = {
    id: number | null;
};
export type OperationSumAggregateOutputType = {
    id: number | null;
};
export type OperationMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    value: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type OperationMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    value: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
export type OperationCountAggregateOutputType = {
    id: number;
    name: number;
    value: number;
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    _all: number;
};
export type OperationAvgAggregateInputType = {
    id?: true;
};
export type OperationSumAggregateInputType = {
    id?: true;
};
export type OperationMinAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type OperationMaxAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
};
export type OperationCountAggregateInputType = {
    id?: true;
    name?: true;
    value?: true;
    createdAt?: true;
    updatedAt?: true;
    deletedAt?: true;
    _all?: true;
};
export type OperationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OperationCountAggregateInputType;
    _avg?: OperationAvgAggregateInputType;
    _sum?: OperationSumAggregateInputType;
    _min?: OperationMinAggregateInputType;
    _max?: OperationMaxAggregateInputType;
};
export type GetOperationAggregateType<T extends OperationAggregateArgs> = {
    [P in keyof T & keyof AggregateOperation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOperation[P]> : Prisma.GetScalarType<T[P], AggregateOperation[P]>;
};
export type OperationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithAggregationInput | Prisma.OperationOrderByWithAggregationInput[];
    by: Prisma.OperationScalarFieldEnum[] | Prisma.OperationScalarFieldEnum;
    having?: Prisma.OperationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OperationCountAggregateInputType | true;
    _avg?: OperationAvgAggregateInputType;
    _sum?: OperationSumAggregateInputType;
    _min?: OperationMinAggregateInputType;
    _max?: OperationMaxAggregateInputType;
};
export type OperationGroupByOutputType = {
    id: number;
    name: string;
    value: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    _count: OperationCountAggregateOutputType | null;
    _avg: OperationAvgAggregateOutputType | null;
    _sum: OperationSumAggregateOutputType | null;
    _min: OperationMinAggregateOutputType | null;
    _max: OperationMaxAggregateOutputType | null;
};
type GetOperationGroupByPayload<T extends OperationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OperationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OperationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OperationGroupByOutputType[P]>;
}>>;
export type OperationWhereInput = {
    AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    OR?: Prisma.OperationWhereInput[];
    NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    id?: Prisma.IntFilter<"Operation"> | number;
    name?: Prisma.StringFilter<"Operation"> | string;
    value?: Prisma.StringFilter<"Operation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Operation"> | Date | string | null;
    sector?: Prisma.SectorListRelationFilter;
};
export type OperationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    sector?: Prisma.SectorOrderByRelationAggregateInput;
};
export type OperationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    value?: string;
    AND?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    OR?: Prisma.OperationWhereInput[];
    NOT?: Prisma.OperationWhereInput | Prisma.OperationWhereInput[];
    name?: Prisma.StringFilter<"Operation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Operation"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableFilter<"Operation"> | Date | string | null;
    sector?: Prisma.SectorListRelationFilter;
}, "id" | "value">;
export type OperationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OperationCountOrderByAggregateInput;
    _avg?: Prisma.OperationAvgOrderByAggregateInput;
    _max?: Prisma.OperationMaxOrderByAggregateInput;
    _min?: Prisma.OperationMinOrderByAggregateInput;
    _sum?: Prisma.OperationSumOrderByAggregateInput;
};
export type OperationScalarWhereWithAggregatesInput = {
    AND?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[];
    OR?: Prisma.OperationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OperationScalarWhereWithAggregatesInput | Prisma.OperationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Operation"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    value?: Prisma.StringWithAggregatesFilter<"Operation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Operation"> | Date | string;
    deletedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Operation"> | Date | string | null;
};
export type OperationCreateInput = {
    name: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    sector?: Prisma.SectorCreateNestedManyWithoutOperationInput;
};
export type OperationUncheckedCreateInput = {
    id?: number;
    name: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
    sector?: Prisma.SectorUncheckedCreateNestedManyWithoutOperationInput;
};
export type OperationUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sector?: Prisma.SectorUpdateManyWithoutOperationNestedInput;
};
export type OperationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    sector?: Prisma.SectorUncheckedUpdateManyWithoutOperationNestedInput;
};
export type OperationCreateManyInput = {
    id?: number;
    name: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type OperationUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OperationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OperationNullableScalarRelationFilter = {
    is?: Prisma.OperationWhereInput | null;
    isNot?: Prisma.OperationWhereInput | null;
};
export type OperationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type OperationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type OperationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type OperationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    deletedAt?: Prisma.SortOrder;
};
export type OperationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type OperationCreateNestedOneWithoutSectorInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutSectorInput, Prisma.OperationUncheckedCreateWithoutSectorInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutSectorInput;
    connect?: Prisma.OperationWhereUniqueInput;
};
export type OperationUpdateOneWithoutSectorNestedInput = {
    create?: Prisma.XOR<Prisma.OperationCreateWithoutSectorInput, Prisma.OperationUncheckedCreateWithoutSectorInput>;
    connectOrCreate?: Prisma.OperationCreateOrConnectWithoutSectorInput;
    upsert?: Prisma.OperationUpsertWithoutSectorInput;
    disconnect?: Prisma.OperationWhereInput | boolean;
    delete?: Prisma.OperationWhereInput | boolean;
    connect?: Prisma.OperationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OperationUpdateToOneWithWhereWithoutSectorInput, Prisma.OperationUpdateWithoutSectorInput>, Prisma.OperationUncheckedUpdateWithoutSectorInput>;
};
export type OperationCreateWithoutSectorInput = {
    name: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type OperationUncheckedCreateWithoutSectorInput = {
    id?: number;
    name: string;
    value: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    deletedAt?: Date | string | null;
};
export type OperationCreateOrConnectWithoutSectorInput = {
    where: Prisma.OperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationCreateWithoutSectorInput, Prisma.OperationUncheckedCreateWithoutSectorInput>;
};
export type OperationUpsertWithoutSectorInput = {
    update: Prisma.XOR<Prisma.OperationUpdateWithoutSectorInput, Prisma.OperationUncheckedUpdateWithoutSectorInput>;
    create: Prisma.XOR<Prisma.OperationCreateWithoutSectorInput, Prisma.OperationUncheckedCreateWithoutSectorInput>;
    where?: Prisma.OperationWhereInput;
};
export type OperationUpdateToOneWithWhereWithoutSectorInput = {
    where?: Prisma.OperationWhereInput;
    data: Prisma.XOR<Prisma.OperationUpdateWithoutSectorInput, Prisma.OperationUncheckedUpdateWithoutSectorInput>;
};
export type OperationUpdateWithoutSectorInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OperationUncheckedUpdateWithoutSectorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deletedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type OperationCountOutputType = {
    sector: number;
};
export type OperationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sector?: boolean | OperationCountOutputTypeCountSectorArgs;
};
export type OperationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationCountOutputTypeSelect<ExtArgs> | null;
};
export type OperationCountOutputTypeCountSectorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectorWhereInput;
};
export type OperationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
    sector?: boolean | Prisma.Operation$sectorArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
}, ExtArgs["result"]["operation"]>;
export type OperationSelectScalar = {
    id?: boolean;
    name?: boolean;
    value?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    deletedAt?: boolean;
};
export type OperationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "value" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["operation"]>;
export type OperationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sector?: boolean | Prisma.Operation$sectorArgs<ExtArgs>;
    _count?: boolean | Prisma.OperationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OperationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OperationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OperationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Operation";
    objects: {
        sector: Prisma.$SectorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        value: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }, ExtArgs["result"]["operation"]>;
    composites: {};
};
export type OperationGetPayload<S extends boolean | null | undefined | OperationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OperationPayload, S>;
export type OperationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OperationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OperationCountAggregateInputType | true;
};
export interface OperationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Operation'];
        meta: {
            name: 'Operation';
        };
    };
    findUnique<T extends OperationFindUniqueArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OperationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OperationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OperationFindFirstArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OperationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OperationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OperationFindManyArgs>(args?: Prisma.SelectSubset<T, OperationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OperationCreateArgs>(args: Prisma.SelectSubset<T, OperationCreateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OperationCreateManyArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OperationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OperationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OperationDeleteArgs>(args: Prisma.SelectSubset<T, OperationDeleteArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OperationUpdateArgs>(args: Prisma.SelectSubset<T, OperationUpdateArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OperationDeleteManyArgs>(args?: Prisma.SelectSubset<T, OperationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OperationUpdateManyArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OperationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OperationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OperationUpsertArgs>(args: Prisma.SelectSubset<T, OperationUpsertArgs<ExtArgs>>): Prisma.Prisma__OperationClient<runtime.Types.Result.GetResult<Prisma.$OperationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OperationCountArgs>(args?: Prisma.Subset<T, OperationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OperationCountAggregateOutputType> : number>;
    aggregate<T extends OperationAggregateArgs>(args: Prisma.Subset<T, OperationAggregateArgs>): Prisma.PrismaPromise<GetOperationAggregateType<T>>;
    groupBy<T extends OperationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OperationGroupByArgs['orderBy'];
    } : {
        orderBy?: OperationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OperationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OperationFieldRefs;
}
export interface Prisma__OperationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sector<T extends Prisma.Operation$sectorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Operation$sectorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OperationFieldRefs {
    readonly id: Prisma.FieldRef<"Operation", 'Int'>;
    readonly name: Prisma.FieldRef<"Operation", 'String'>;
    readonly value: Prisma.FieldRef<"Operation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Operation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Operation", 'DateTime'>;
    readonly deletedAt: Prisma.FieldRef<"Operation", 'DateTime'>;
}
export type OperationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where?: Prisma.OperationWhereInput;
    orderBy?: Prisma.OperationOrderByWithRelationInput | Prisma.OperationOrderByWithRelationInput[];
    cursor?: Prisma.OperationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OperationScalarFieldEnum | Prisma.OperationScalarFieldEnum[];
};
export type OperationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>;
};
export type OperationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    data: Prisma.OperationCreateManyInput | Prisma.OperationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OperationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>;
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type OperationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OperationUpdateManyMutationInput, Prisma.OperationUncheckedUpdateManyInput>;
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type OperationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
    create: Prisma.XOR<Prisma.OperationCreateInput, Prisma.OperationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OperationUpdateInput, Prisma.OperationUncheckedUpdateInput>;
};
export type OperationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
    where: Prisma.OperationWhereUniqueInput;
};
export type OperationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OperationWhereInput;
    limit?: number;
};
export type Operation$sectorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SectorSelect<ExtArgs> | null;
    omit?: Prisma.SectorOmit<ExtArgs> | null;
    include?: Prisma.SectorInclude<ExtArgs> | null;
    where?: Prisma.SectorWhereInput;
    orderBy?: Prisma.SectorOrderByWithRelationInput | Prisma.SectorOrderByWithRelationInput[];
    cursor?: Prisma.SectorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectorScalarFieldEnum | Prisma.SectorScalarFieldEnum[];
};
export type OperationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OperationSelect<ExtArgs> | null;
    omit?: Prisma.OperationOmit<ExtArgs> | null;
    include?: Prisma.OperationInclude<ExtArgs> | null;
};
export {};
