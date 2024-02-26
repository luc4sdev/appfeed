'use client'
import { useState } from 'react';
import { Grid, GridColumn as Column, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Emoji } from '@/data/types/emoji';

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "Title", operator: "contains", value: "Chef" }],
};

interface GridEmojisProps {
    emojis: Emoji[];
}

export async function GridEmojis({ emojis }: GridEmojisProps) {


    const [filter, setFilter] = useState(initialFilter);

    return (
        <Grid 
        style={{
            height: '420px'
        }} data={filterBy(emojis, filter)}
            filterable={true}
            filter={filter}
            onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
            >
            <Column field="id" title="ID" filterable={false} width="60px" />
            <Column field="title" title="Emoji name" width="240px" />
            <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
            <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
            <Column field="Discontinued" width="190px" filter="boolean" />
        </Grid>
    )
};
