import { Button } from 'antd'
import React from 'react'
import { history } from 'umi'

export default function Test() {
    return (
        <div>
            <Button type="primary" onClick={() => {
                // console.log(history);
                history.push('/home')
            }}
            >Home</Button>
        </div>
    )
}
