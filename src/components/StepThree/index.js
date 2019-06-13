import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class StepThree extends Component {



    render() {
        return (
            <div>
                <h1>This is the StepThree Component</h1>
                <form>
                    <select value={this.props.selfDescript} name="selfDescript">
                        <option>Please select one</option>
                        <option name="selfDescript" value="">Busines Owner</option>
                        <option name="selfDescript" value="">Government Employee (City/County/State/Federal)/option>
                        <option name="selfDescript" value="">Concerned Resident</option>
                        <option name="selfDescript" value="">First Responder (e.g., Fire Department Law Enforcement)</option>
                        <option name="selfDescript" value="">Homeless/Social Service Provider</option>
                        <option name="selfDescript" value="">Self-Referral</option>
                        <option name="selfDescript" value="">Elected Official</option>
                        <option name="selfDescript" value="">Other</option>
                    </select>
                    <input type="text" placeholder="org" name="org" onChange={this.props.changeHandler} value={this.props.org}/>
                    <input type="text" placeholder="name" name="name" onChange={this.props.changeHandler} value={this.props.name}/>
                    <input type="text" placeholder="email" name="email" onChange={this.props.changeHandler} value={this.props.email}/>
                    <input type="text" placeholder="phone" name="phone" onChange={this.props.changeHandler} value={this.props.phone}/>
                    <input type="checkbox" name="agreement" />
                    <button type="submit" onClick={this.props.onSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default StepThree