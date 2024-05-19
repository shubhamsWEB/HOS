'use client'
import React from 'react';
import Table from '../Common/Table';
import { collectionColumns, collectionData } from '@/constants/dashboard'

function Index({data}) {
    const collections = data.data.map((item, index) => {return ({ id: index+1, name: item })})

    return (
        <>
            <Table columns={collectionColumns} data={collections} type="collection" />
        </>
    )
}

export default Index