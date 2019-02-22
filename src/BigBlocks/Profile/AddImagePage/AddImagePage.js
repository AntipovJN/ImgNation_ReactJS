import React, {Component} from 'react'
import css from './addPage.module.css'

class AddImagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adress: '',
            description: ''
        };

    }

    handlerUrlChange(event) {
        this.setState({adress: event.target.value})
        // alert(this.state.adress)
    }
    handlerDescriptionChange(event) {
        this.setState({description: event.target.value})
        // alert(this.state.adress)
    }

    handlerSubmit() {
        console.log('submit! url;' + this.state.url);

        // alert("suubmit")

    }

    render() {


        return <div className={css.divBox}>
            <div className={css.formBox}>
                <form onSubmit={this.handlerSubmit.bind(this)}>
                   <div> <input type='text' onChange={this.handlerUrlChange.bind(this)}/></div>
                    <div> <input type='text' onChange={this.handlerUrlChange.bind(this)}/></div>
                    <div> <input type='submit' value='Add' /></div>
                </form>
            </div>
            <div className={css.descr}>
                <div>Enter Url of Image</div>
                <div>Enter Description</div>
                <div>After press 'add'</div>
            </div>

        </div>
    }
}

export default AddImagePage