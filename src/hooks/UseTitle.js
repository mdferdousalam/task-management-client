import { useEffect } from 'react'
const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Manage Your Tasks.`
    }, [title])
}


export default UseTitle;