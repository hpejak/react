import Modal from "../../components/UI/Modal/Modal";
import {Component} from "react";



const withErrorHandler = (WComponent,axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        removeError = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.removeError}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WComponent {...this.props}/>
                </>
            );
        }

    }
}

export default  withErrorHandler;