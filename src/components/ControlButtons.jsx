import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions, privacyActions } from '../reducers/actions'

const ControlButtons = () => {
    const counterInputRef = useRef(0)
    const dispatch = useDispatch()

    const privacy = useSelector((state) => state.privacy)

    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
    }
    const handleAddition = () => {
        dispatch(
            counterActions.addition({
                value: counterInputRef.current.value,
            })
        )
    }
    const handleSubtraction = () => {
        dispatch(
            counterActions.subtraction({
                value: counterInputRef.current.value,
            })
        )
    }
    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle())
    }
    return (
        <div className="d-grid gap-2 d-sm-flex flex-column justify-content-sm-center controlButton">
            <div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleIncrement}
                >
                    +1
                </button>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={handleDecrement}
                >
                    -1
                </button>
            </div>
            <div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                    >
                        Enter the value
                    </label>
                    <input
                        ref={counterInputRef}
                        type="number"
                        className="form-control"
                        id="counter_value"
                        placeholder="enter the number"
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleAddition}
                >
                    Add
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSubtraction}
                >
                    Sub
                </button>
            </div>

            <button
                type="button"
                className="btn btn-info"
                onClick={handlePrivacyToggle}
            >
                {privacy ? 'Show' : 'Hide'} Counter Value
            </button>
        </div>
    )
}

export default ControlButtons
