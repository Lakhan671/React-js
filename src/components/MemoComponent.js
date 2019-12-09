import React from 'react'

function MemoComponent({name}) {
    console.log('memo component..');
    return (
        <div>
             MemoComponent
        </div>
    )
}
//render only one this if content not change .its comapre shallow equality.
export default React.memo(MemoComponent)
