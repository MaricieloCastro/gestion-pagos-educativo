import React from 'react'
import Filter from './Filter';

const CallFilter = (props) => {

    const { headerGroup, num, title, options } = props;

    return headerGroup.headers[num].isPlaceholder ? null : (
        <>
            {headerGroup.headers[num].column.getCanFilter() ? (
                <Filter column={headerGroup.headers[num].column} title={title} options={options} />
            ) : null}
        </>
    )
}

export default CallFilter