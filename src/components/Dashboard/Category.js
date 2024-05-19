'use client'
import React from 'react';
import Table from '../Common/Table';
import { categoryColumns, categoryData } from '@/constants/dashboard'

function Index({ data }) {
    const categories = data.data.map((item, index) => {return ({ id: index+1, name: item })})
    return (
        <>
            <Table columns={categoryColumns} data={categories} type="category" />
        </>
    )
}

export default Index