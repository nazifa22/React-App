import React, { Component } from 'react';

export default class TableHeader extends Component {

    raiseSort = path => {
        const sortColumn = {...this.props.sortColumn};

        if(sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
        }
        
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc'
        }

        this.props.onSort(sortColumn);
    }

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        if (column.path !== sortColumn.path) return null
        
        if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }


    render() {
        return (
            <thead class="thead-dark">
                <tr>
                    {
                        this.props.columns.map(column => (
                            <th scope="col" onClick={() => this.raiseSort(column.path)} key={column.path || column.key}>
                                { column.lable } {this.renderSortIcon(column)}
                            </th>
                        ))
                    }
                </tr>
            </thead>
        )
    }
}