import Header from './components/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import ControlButtons from './components/ControlButtons'

function App() {
    return (
        <center className="px-4 py-5 my-5">
            <Container>
                <Header />
                <div className="col-lg-6 mx-auto">
                    <DisplayCounter />
                    <ControlButtons />
                </div>
            </Container>
        </center>
    )
}

export default App
