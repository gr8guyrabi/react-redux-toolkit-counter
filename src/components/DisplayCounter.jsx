import { useSelector } from 'react-redux'

const DisplayCounter = () => {
    const { counterVal } = useSelector((state) => state.counter)
    const privacy = useSelector((state) => state.privacy)
    return (
        <p className="lead mb-4">
            Counter Current Value: {privacy ? '***' : counterVal}
        </p>
    )
}

export default DisplayCounter
