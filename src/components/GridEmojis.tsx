'use client'
import { useState } from 'react';
import { Grid, GridColumn, GridFilterChangeEvent } from '@progress/kendo-react-grid';
import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Emoji } from '@/data/types/emoji';
import Image from 'next/image';
import { Dialog } from '@progress/kendo-react-dialogs';

const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [],
};

interface GridEmojisProps {
    emojis?: Emoji[];
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export function GridEmojis({ emojis, visible, setVisible }: GridEmojisProps) {

    const [filter, setFilter] = useState(initialFilter);



    const CustomImageCell = (props: any) => {
        return (
            <td>
                <Image src={props.dataItem.images.original.url} alt={props.dataItem.title} width={30} height={30} />
            </td>
        );
    };


    if (emojis && visible) {
        return (
            <Dialog
                title={"Emojis list"} onClose={() => setVisible(false)}>
                <Grid
                    style={{
                        height: '420px',
                    }}
                    data={filterBy(emojis, filter)}
                    resizable={true}
                    filterable={true}
                    filter={filter}
                    onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
                >
                    <GridColumn field="id" title="ID" filterable={false} />
                    <GridColumn field="title" title="Emoji name" />
                    <GridColumn field="rating" title='Rating' />
                    <GridColumn title="Image" cell={CustomImageCell} filterable={false} />
                </Grid>
            </Dialog>
        )
    }
};
